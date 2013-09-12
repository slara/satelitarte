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
        cats.append({'id': category.id,
                     'name': category.name,
                     'images': [img.filename for img in category.images]})
    return cats
