from rest_framework import serializers
from .models import AIAnalysisLog

class AIAnalysisLogSerializer(serializers.ModelSerializer):
    class Meta:
        model  = AIAnalysisLog
        fields = '__all__'
