const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(__dirname)); // serves static files from the current directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});