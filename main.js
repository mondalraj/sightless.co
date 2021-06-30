const express = require('express');

const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Request Service' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Our Projects' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Wrong URL' });
});