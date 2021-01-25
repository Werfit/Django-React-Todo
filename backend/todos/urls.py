from django.urls import path
from .views import *

urlpatterns = [
    path('', ListCreateTodo.as_view()),       # GET and POST
    path('<int:pk>', UpdateTodo.as_view()),   # PUT (PATCH)
    path('remove/<int:pk>', DestroyTodo.as_view()),  # DELETE
]