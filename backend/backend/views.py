from pyramid.view import view_config

from .models import (
    DBSession,
    Category,
)


@view_config(route_name='categories', renderer='json')
def categories(request):
    categories = DBSession.query(Category).all()
    cats = []
    for category in categories:
        cats.append({'name': category.name,
                    'image1': category.image1,
                    'image2': category.image2})
    return cats
