from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def teste(request):
    return render(request, 'index.html')

def testeApi(request):
    a = {'teste': True}
    return JsonResponse(a)
