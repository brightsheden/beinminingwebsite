from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    description = models.TextField()
    client = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    year = models.IntegerField()
    value = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Team(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='team_images/', blank=True, null=True)
    role = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(upload_to='blog_thumbnails/', blank=True, null=True)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
