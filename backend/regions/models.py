from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Region(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='regions')
    name = models.CharField(max_length=100)
    kml_file = models.FileField(upload_to='kml/', blank=True, null=True)
    polygon = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id} - {self.name} ({self.user.username}) @ {self.created_at}"