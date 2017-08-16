# ENVIRONMENT
These instructions were made for Ubuntu 17.04.

# RUN
docker run -d --name strands-api -p 5000:5000 -v `pwd`:/strands-api strands-api

# INSTALLATION
sudo apt-get install docker.io python python-pip
sudo usermod -aG docker $USER
exec su -l $USER   (new shell with docker group)
cd flask
mkdir strands
cd strands
vi strands-api.py
vi requirements.txt
vi Dockerfile
pip install -r requirements.txt
docker build -t strands-api .

# TODO
## PENDING
1. set up express app server
3. set up user model
4. set up login page
5. set up app main page
6. integrate react
7. build search screen
8. integrate biopython
9. build API call for search
10. integrate search screen
11. implement cancel search
12. implement search history

## DONE
- set up docker dev env
- set up flask api server
- set up biopython in api server
- get flask to use GIT checkout dir sources instead of needing a build

# QUESTIONS
- does app need user/passwords for login or will anonymous sessions be ok? (Lame if the cookies are cleared but meets MVP spec)

# REFERENCES
- https://docs.docker.com/get-started/part2/#dockerfile
- http://flask.pocoo.org/
- http://biopython.org/wiki/Download
- http://biopython.org/DIST/docs/api/Bio.Entrez-module.html
- https://www.ncbi.nlm.nih.gov/nuccore/340025671
