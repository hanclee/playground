# ENVIRONMENT
These instructions were made for Ubuntu 17.04.

# RUN
- cd flask/strands
- docker-compose up
- (browser-ui-client) http://localhost:8080
- (browser-ui-app) http://localhost:8050
- (browser-api) http://localhost:5000

# INSTALLATION
- (assumes app base dir is "flask/", replace with your git checkout dir)
- sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
- curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
- sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
- sudo apt-get update
- sudo apt-get install python python-pip
- sudo apt-get install docker-ce
- sudo pip install docker-compose
- sudo usermod -aG docker $USER
- exec su -l $USER   (new shell with docker group)
- cd flask/strands
- docker-compose build
- docker-compose build --no-cache (force a clean build)

# SHELL
- docker-compose run --rm api /bin/bash (api host)
- docker-compose run --rm web /bin/bash (web host)
- docker-compose run --rm client /bin/bash (dev client host)

# TEST
- TODO: docker-compose -p tests run -p 3000 --rm web npm run watch-tests

# CLIENT APP ASSEMBLY (reference only)
- sudo npm install -g create-react-app
- cd flask/strands
- create-react-app strands-ui-client
- cd strands-ui-client
- npm install --save classnames
- npm start

# TODO
### PENDING
1. set up interruptable search
2. set up postgres and link to express
3. set up user model
4. set up login page
5. implement cancel search
6. implement search history
7. set up express hot reloading

### DONE
- set up docker dev env
- set up flask api server
- set up biopython in api server
- get flask to use GIT checkout dir sources instead of needing a build
- build API call for search
- set up express app server
- set up react
- set up app main page
- set up react hot reloading
- set up dev client app instance (for hot reloading)
- load protein database
- implement biopython sequence search
- set up search screen and do a call to the api server

# QUESTIONS
- does app need user/passwords for login or will anonymous sessions be ok? (Lame if the cookies are cleared but meets MVP spec)

# REFERENCES
- https://docs.docker.com/get-started/part2/#dockerfile
- http://flask.pocoo.org/
- http://biopython.org/wiki/Download
- http://biopython.org/DIST/docs/api/Bio.Entrez-module.html
- https://www.ncbi.nlm.nih.gov/nuccore/340025671
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://docs.docker.com/compose/django/#create-a-django-project
- https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
- https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d
- https://github.com/facebookincubator/create-react-app/issues/301
- https://daveceddia.com/create-react-app-express-production/
