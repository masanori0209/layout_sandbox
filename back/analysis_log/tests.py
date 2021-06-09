from django.urls import reverse
from django.test import TestCase
from analysis_log.models import AIAnalysisLog

class ModelTests(TestCase):
    MESSAGE = 'test message'

    def create_model(self, message):
        instance = AIAnalysisLog()
        if message is not None:
            instance.message = message
        instance.save()

    def test_is_empty_model(self):
        instances = AIAnalysisLog.objects.all()
        self.assertEqual(instances.count(), 0)

    def test_is_not_empty_model(self):
        self.create_model(None)
        instances = AIAnalysisLog.objects.all()
        self.assertEqual(instances.count(), 1)

    def test_saving_and_retrieving_model(self):
        self.create_model(self.MESSAGE)
        instances = AIAnalysisLog.objects.all()
        self.assertEqual(instances[0].message, self.MESSAGE)