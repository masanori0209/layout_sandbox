from django.db import models

# テーブル
class AIAnalysisLog(models.Model):
    class Meta:
        db_table = 'ai_analysis_log'
    image_path = models.ImageField(
        verbose_name='image_path',
        max_length=255,
        default=None,
        null=True
    )
    success = models.CharField(
        verbose_name='success',
        max_length=255,
        null=True,
        default=None
    )
    message = models.CharField(
        verbose_name='message',
        max_length=255,
        null=True,
        default=None
    )
    _class = models.IntegerField(
        db_column='class',
        verbose_name='class',
        null=True,
        default=None
    )
    confidence = models.DecimalField(
        verbose_name='confidence',
        max_digits=5,
        decimal_places=4,
        null=True,
        default=None
    )
    request_timestamp = models.PositiveIntegerField(
        verbose_name='request_timestamp',
        null=True,
        default=None
    )
    response_timestamp = models.PositiveIntegerField(
        verbose_name='response_timestamp',
        null=True,
        default=None
    )
