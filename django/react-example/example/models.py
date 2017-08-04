# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Todo(models.Model):
    content = models.CharField(max_length=200)
    date = models.DateTimeField('date created')