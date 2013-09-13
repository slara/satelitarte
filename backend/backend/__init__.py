from pyramid.config import Configurator
from sqlalchemy import engine_from_config
from wsgicors import CORS

from .models import (
    DBSession,
    Base,
)


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine
    config = Configurator(settings=settings)
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('categories', '/categories')
    config.add_route('participants', '/participants')
    config.add_route('selectcategory', '/selectcategory/{participant}/{category}')
    config.scan()
    return CORS(config.make_wsgi_app(),
                headers="*", methods="*", maxage="180", origin="*")
