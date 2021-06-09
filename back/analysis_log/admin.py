from django.contrib import admin
from .models import AIAnalysisLog

@admin.register(AIAnalysisLog)
class AIAnalysisLog(admin.ModelAdmin):
    list_display = (
        'success',
        '_class',
        'confidence',
        'request_timestamp',
        'response_timestamp'
    )