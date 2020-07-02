from django.db import models

# Create your models here.
class Live(models.Model):
    nome = models.CharField(max_length=100)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.nome