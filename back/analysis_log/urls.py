from django.urls import include, path
from .views import AIAnalysisLogView, CreateLogAndImageAPI

app_name = 'analysis_log'

urlpatterns = [
    path('ai_analysis_log/', AIAnalysisLogView.as_view({'get': 'list'})),
    path('ai_analysis_log/create', CreateLogAndImageAPI.as_view()),
    
    # CRUDで行うのであればコメントを外す
    # path('ai_analysis_log/<str:pk>', AIAnalysisLogView.as_view({'get': 'retrieve', 'delete': 'destroy', 'patch': 'update'})),
]