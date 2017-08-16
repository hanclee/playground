# ENVIRONMENT
These instructions were made for Ubuntu 17.04.

# RUN
cd flask/strands
docker-compose up
(browser-ui) http://localhost:8080
(browser-api) http://localhost:5000

# INSTALLATION
(assumes app base dir is "flask/", replace with your git checkout dir)
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install python python-pip
sudo apt-get install docker-ce
sudo pip install docker-compose
sudo usermod -aG docker $USER
exec su -l $USER   (new shell with docker group)
cd flask/strands/strands-api
pip install -r requirements.txt (TODO: may not be needed on a fresh machine. Retest.)
cd ..
docker-compose build

# TODO
## PENDING
1. set up react
2. set up mysql and link to node.js
3. set up user model
4. set up login page
5. set up app main page
6. integrate react
7. build search screen
8. build API call for search
9. integrate search screen
10. implement cancel search
11. implement search history

## DONE
- set up docker dev env
- set up flask api server
- set up biopython in api server
- get flask to use GIT checkout dir sources instead of needing a build
- set up express app server

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
