npm init .
npm install --save-dev jquery react react-dom webpack webpack-bundle-tracker babel-loader babel-core babel-preset-es2015 babel-preset-react

virtualenv .
cd bin
source activate
cd ..

pip install django
pip install django-webpack-loader

django-admin startproject react
mv react x
mv x/* .
vi react/settings.py

python manage.py startapp example

python manage.py runserver
python manage.py migrate

http://localhost:8000/example

python manage.py createsuperuser
    admin/duckles123

http://localhost:8000/admin

python manage.py makemigrations example
python manage.py sqlmigrate example 0001
