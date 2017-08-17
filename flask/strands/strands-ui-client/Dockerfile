FROM node:boron

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install
RUN mkdir -p /strands-ui-client && cp -ar /tmp/node_modules /strands-ui-client

WORKDIR /strands-ui-client

ADD . /strands-ui-client

RUN npm install
