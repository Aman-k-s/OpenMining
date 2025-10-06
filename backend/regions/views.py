from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pykml import parser
from .models import Region
from .serializers import RegionSerializer
from .utils import extract_geometries, fetch_region_report, fetch_dem_raster
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

class RegionReportView(APIView):
    def get(self, request, *args, **kwargs):
        region_id = self.kwargs.get('pk')
        region = get_object_or_404(Region, pk=region_id)

        start_pre = '2024-01-01'
        end_pre   = '2024-06-30'
        start_post = '2024-07-01'
        end_post   = '2024-12-31'

        report = fetch_region_report(region, start_pre=start_pre, end_pre=end_pre, start_post=start_post, end_post=end_post)
        return Response({
            'region':region.name,
            'report':report
        })

class KMLUploadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        file = request.FILES.get("file")
        name = request.data.get("name", "Unnamed Region")

        if not file:
            return Response({"error": "No file uploaded"}, status=status.HTTP_400_BAD_REQUEST)

        root = parser.parse(file).getroot()

        geometries = extract_geometries(root)
        if not geometries:
            return Response({"error": "No geometry found in KML"}, status=status.HTTP_400_BAD_REQUEST)

        # Save to DB
        region = Region.objects.create(
            user=request.user,
            name=name,
            kml_file=file,
            polygon=geometries  # save full list
        )

        serializer = RegionSerializer(region)
        return Response({
            "region": serializer.data,
            "geometries": geometries
        })

class RegionListView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        regions = Region.objects.filter(user=request.user)
        serializer = RegionSerializer(regions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class DEMRaster(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        region_id = self.kwargs.get('pk')
        region = get_object_or_404(Region, pk=region_id)

        raster = fetch_dem_raster(region.polygon)
        return Response({"dem_raster":raster})