//required packages
const express = require('express');
const path = require('path');
const { title } = require('process');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

//middleware to parse data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);

//Get route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));

});

//App listening at PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

