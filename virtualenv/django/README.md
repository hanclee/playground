python -m django --version
django-admin startproject mysite
cd mysite
python manage.py runserver

python manage.py startapp polls
python manage.py migrate

# browser
http://localhost:8000/polls/

# make migrations for a new model
python manage.py makemigrations polls
# view migrations
python manage.py sqlmigrate polls 0001
# apply migrations
python manage.py migrate

# interactive shell
python manage.py shell
> from polls.models import Question, Choice
> Question.objects.all()
> from django.utils import timezone
> q = Question(question_text="What's new?", pub_date=timezone.now())
> q.save()
> q.id
> Question.objects.all()
> q.choice_set.all()
> q.choice_set.create(choice_text='Not much', votes=0)
> q.choice_set.create(choice_text='The sky', votes=0)
> c = q.choice_set.create(choice_text='Just hacking again', votes=0)
> q.choice_set.all()
> q.choice_set.count()
> current_year = timezone.now().year
> Choice.objects.filter(question__pub_date__year=current_year)
> c = q.choice_set.filter(choice_text__startswith='Just hacking')
> c.delete()
> q.choice_set.all()

# admin
python manage.py createsuperuser

# browser
http://localhost:8000/admin
