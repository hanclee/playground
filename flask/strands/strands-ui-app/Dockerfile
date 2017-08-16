FROM node:boron

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install
RUN mkdir -p /strands-ui-app && cp -ar /tmp/node_modules /strands-ui-app

WORKDIR /strands-ui-app

ADD . /strands-ui-app
