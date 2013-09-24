from pyramid.view import view_config
from pyramid.static import static_view

from .models import (
    DBSession,
    Category,
    Participant
)


static_view = static_view('../../frontend/dist', use_subpath=True)


@view_config(route_name='categories', renderer='json')
def categories(request):
    categories = DBSession.query(Category).filter_by(participant=None).all()
    cats = []
    for category in categories:
        cats.append({'id': category.id,
                     'name': category.name,
                     'images': [img.filename for img in category.images]})
    return cats


@view_config(route_name='selectcategory', renderer='json')
def selectcategory(request):
    participant_name = request.matchdict['participant']
    category_id = int(request.matchdict['category'])

    category = DBSession.query(Category).get(category_id)
    if category.participant is None:
        participant = Participant(participant_name)
        participant.category = category
        DBSession.add(participant)
    else:
        return {'status': 'Error. Categoria no disponible'}

    return {'status': 'success'}


@view_config(route_name="participants", renderer='json')
def participants(request):
    participants = DBSession.query(Participant).all()
    return [{'participant': participant.name,
            'category': participant.category.name} for participant in participants]
