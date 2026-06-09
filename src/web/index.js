const { PORT } = require('./config.js');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  fetch('http://crd:9222/json').then(response => response.json())
    .then(data => {
      console.log('Received data from crd:', data);
      res.json({ message: 'Hello, World!', data });
    })
    .catch(error => {
      console.error('Error fetching data from crd:', error);
      res.status(500).json({ error: 'Failed to fetch data from crd' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
