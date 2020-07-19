const express = require('express');
const path = require('path');
const logger = require('./logger');
const app = express();
const exphbs = require('express-handlebars');

// init Middleware
app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage Router
app.get('/', (req, res) => {
    res.render('home', {
        title: 'NodeJS Crash Course'
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});