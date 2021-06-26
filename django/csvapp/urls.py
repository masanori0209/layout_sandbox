from django.urls import include, path
# from .views import AIAnalysisLogView, CreateLogAndImageAPI

app_name = 'csvapp'

urlpatterns = [
    path('init/', AIAnalysisLogView.as_view({'get': 'list'})),
    path('list/', CreateLogAndImageAPI.as_view()),
    path('<str:pk>', CreateLogAndImageAPI.as_view()),
]