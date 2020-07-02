from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import Live

def index(request):
    lives = Live.objects.order_by('-pub_date')
    # template = loader.get_template('lives/index.html')
    context = {
        'lives': lives
    }
    return render(request, 'lives/index.html', context)