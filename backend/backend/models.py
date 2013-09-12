from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    Unicode
)

from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship, backref

from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.orm import (
    scoped_session,
    sessionmaker,
)

from zope.sqlalchemy import ZopeTransactionExtension

DBSession = scoped_session(sessionmaker(extension=ZopeTransactionExtension()))
Base = declarative_base()


class Category(Base):
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True)
    name = Column(Unicode)
    images = relationship('Image', backref='category')

    def __init__(self, name):
        self.name = name


class Image(Base):
    __tablename__ = 'images'
    id = Column(Integer, primary_key=True)
    filename = Column(Unicode)
    category_id = Column(Integer, ForeignKey('models.id'))

    def __init__(self, filename):
        self.filename = filename


Index('my_index', Category.name, unique=True)
