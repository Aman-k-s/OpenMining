from django.urls import path
from .views import KMLUploadView, RegionListView, RegionReportView, DEMRaster, Activity

urlpatterns = [
    path("upload", KMLUploadView.as_view(), name="upload-kml"),
    path("list", RegionListView.as_view(), name="ListRegion"),
    path("report/<int:pk>", RegionReportView.as_view(), name="RegionReport"),
    path("dem-raster/<int:pk>", DEMRaster.as_view(), name="DEMRaster"),
    path("activity/<int:pk>", Activity.as_view(), name="PredictActivity"),
]
