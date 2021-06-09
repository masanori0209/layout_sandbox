import json
import datetime
import requests
import uuid
from django.conf import settings
from rest_framework import status, permissions, viewsets
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from .models import AIAnalysisLog
from .serializers import AIAnalysisLogSerializer

# AIAnalysisLogのCRUD
class AIAnalysisLogView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AIAnalysisLogSerializer
    lookup_field = 'pk'
    queryset = AIAnalysisLog.objects.all().order_by('-request_timestamp')

# 画像の格納を行いつつ、APIにリクエストを送り画像判定し保存
class CreateLogAndImageAPI(APIView):
    def post(self, request):
        request_timestamp = int(datetime.datetime.today().timestamp())
        image = request.data
        path = '{0}-{1}'.format(
            str(uuid.uuid4()),
            image['name']
        )
        instance = AIAnalysisLog()
        instance.image_path.save(path, image['image'], save=True)
        instance.save()
        response = requests.post(
            settings.ENDPOINT_URL + image['read_type'],
            data={'path': path},
            headers={'Content-Type': 'application/json'}
        )
        dict_data = response.json()
        response_data = {
            'success'           : str(dict_data['success']),
            'message'           : dict_data['message'],
            '_class'            : dict_data['estimated_data']['class']      if 'class'      in dict_data['estimated_data'] else None,
            'confidence'        : dict_data['estimated_data']['confidence'] if 'confidence' in dict_data['estimated_data'] else None,
            'request_timestamp' : request_timestamp,
            'response_timestamp': int(datetime.datetime.today().timestamp())
        }
        serializer = AIAnalysisLogSerializer(instance, data=response_data)
        if serializer.is_valid():
            instance = serializer.save()
            return Response(
                data=JSONRenderer().render(
                    AIAnalysisLogSerializer(
                        instance
                    ).data
                ),
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
