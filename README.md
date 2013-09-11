# Satelitarte

## clonar repo

```Bash
git clone https://github.com/slara/satelitarte.git
```

## Backend

generar `virtualenv` e instalar pyramid

```Bash
cd backend
virtualenv env
source env/bin/activate
(env) pip install pyramid
```

luego instalar dependencias

```Bash
python setup.py develop
```

Finalmente crear base de datos local y ejecutar con 

```Bash
initialize_backen_db development.ini

pserve development.ini --reload
```

## Frontend

Hay que instalar `node.js` y `bower`

### Node.js

Descargar (Node.js)[http://nodejs.org]

Luego,

```Bash
./configure --prefix=~/.local
make
make install

echo 'export PATH=$PATH:$HOME/.local/bin' >> .bashrc
```

### Yeoman

```Bash
npm install -g yo

cd frontend
npm install && bower install

grunt server
```

