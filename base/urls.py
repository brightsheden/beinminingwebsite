from django.urls import path, include
from .views import (
    project_list_create, project_detail,
    team_list_create, team_detail,
    blog_list_create, blog_detail,uploadImage,uploadImageTeam,uploadImageBlog,uploadProjectVideo,
    MyTokenObtainPairView

)

urlpatterns = [
    path('login/',MyTokenObtainPairView.as_view()),
    path('projects/', project_list_create, name='project-list-create'),
    path('projects/<int:pk>/', project_detail, name='project-detail'),

    path('teams/', team_list_create, name='team-list-create'),
   

    path('blogs/', blog_list_create, name='blog-list-create'),
    path('blogs/<int:pk>/', blog_detail, name='blog-detail'),
    path('projects/upload/', uploadImage, name="image-upload"),
    path('projects/upload/video/', uploadProjectVideo, name="video-upload"),
    path('teams/upload/', uploadImageTeam, name="image-upload-tea team"),
    path('teams/<int:pk>/', team_detail, name='team-detail'),
    path('blogs/upload/', uploadImageBlog, name="image-upload-blog"),
    
    # Add more paths for other app views if necessary
]
