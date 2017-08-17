const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/search', (req, res) => {
  // Return them as json
  results = ["1","2","3"];
  res.json(results);

  console.log(`Sent ${results.length} results`);
});

const port = process.env.PORT || 8050;
app.listen(port);

console.log(`Strands UI API listening on ${port}`);
