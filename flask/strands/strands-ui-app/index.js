const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

// set up DB session persistence
app.use(session({
    secret: 'strandSecret0338SessionKey@#',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        url: 'mongodb://db'
    })
}));

// serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/search', (req, res) => {
  if (!req.session.history) {
    req.session.history = []
  }
  req.session.history.push(req.query.q);
console.log("req.session.history="+req.session.history);
  http.request('http://api:5000/dna-search?q='+encodeURIComponent(req.query.q), function(response) {
    response.on('data', function(data) {
console.log("data="+data);
      if(!data) {
        dataJson = {warning: 'No data retrieved from strands-api.'};
      } else {
        dataJson = JSON.parse(data);
        dataJson["history"] = req.session.history;
      }
      res.send(dataJson);
    });
  }).on('error', function(e) {
    res.send({warning: 'Problem with request: ' + e.message});
  }).end();
});

const port = process.env.PORT || 8050;
app.listen(port);

console.log(`Strands UI API listening on ${port}`);
