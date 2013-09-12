import os
import sys

import transaction
from os import listdir


from sqlalchemy import engine_from_config

from pyramid.paster import (
    get_appsettings,
    setup_logging,
)

from pyramid.scripts.common import parse_vars

from ..models import (
    DBSession,
    Category,
    Image,
    Base
)


def usage(argv):
    cmd = os.path.basename(argv[0])
    print('usage: %s <config_uri> [var=value]\n'
          '(example: "%s development.ini")' % (cmd, cmd))
    sys.exit(1)


def main(argv=sys.argv):
    if len(argv) < 2:
        usage(argv)
    config_uri = argv[1]
    options = parse_vars(argv[2:])
    setup_logging(config_uri)
    settings = get_appsettings(config_uri, options=options)
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)
    with transaction.manager:
        print os.path.abspath('.')
        catdir = '../frontend/app/images/temas'
        for cat in listdir(catdir):
            name = cat.replace('_', ' ')
            name = name[0].upper() + name[1:]
            category = Category(name)
            print name
            DBSession.add(category)
            for imgfile in listdir(catdir + '/' + cat):
                print '\t' + imgfile
                image = Image('images/temas/' + cat + '/' + imgfile)
                image.category = category
                DBSession.add(image)






