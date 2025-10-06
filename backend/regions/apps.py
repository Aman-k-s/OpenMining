from django.apps import AppConfig
import ee

class RegionsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'regions'

    def ready(self):
        try:
            ee.Initialize(project="nabard-field-data")
        except Exception as e:
            print("Earth Engine authentication failed")