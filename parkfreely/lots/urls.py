from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'all', views.lot_all_view, name='lot_all_view'),
    url(r'post', views.lot_post, name='lot_post'),
]
