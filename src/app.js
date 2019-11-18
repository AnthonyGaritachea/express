const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('hello from express!')
});

app.get('/about', (req, res) => {
    res.send('about page')
});

app.get('/weather', (req, res) => {
    res.send('weather page')
});

app.get('/help', (req, res) => {
    res.send('help page')
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});