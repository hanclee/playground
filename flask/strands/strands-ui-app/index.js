const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/search', (req, res) => {
  http.request('http://api:5000/dna-search?q='+encodeURIComponent(req.query.q), function(response) {
    response.pipe(res);
  }).end();
});

const port = process.env.PORT || 8050;
app.listen(port);

console.log(`Strands UI API listening on ${port}`);
