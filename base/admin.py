from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Project, Team, Blog

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'client', 'location', 'year', 'value')
    search_fields = ('name', 'client', 'location')
    list_filter = ('year',)

admin.site.register(Project, ProjectAdmin)

class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'role')
    search_fields = ('name', 'role')

admin.site.register(Team, TeamAdmin)

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_created')
    search_fields = ('title',)
    list_filter = ('date_created',)

admin.site.register(Blog, BlogAdmin)
