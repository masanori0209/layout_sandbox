import os

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/al/', include('analysis_log.urls', namespace='analysis_log')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
