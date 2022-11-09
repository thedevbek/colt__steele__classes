const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')

// app.use(express.static( path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('homie')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data })
    } else {
        res.render('notfound', {subreddit})
    }

})
app.get('/cats', (req, res) => {
    const cats = [
        'Bonnie',
        'Clyde',
        'Fern',
        'Lettie',
        'Blue'
    ]
    res.render('cats', {cats})
})

app.get('/random', (req, res) => {
    const num =  Math.floor(Math.random() * 100) + 1
    res.render('random', {num: num})
})

app.listen(6868, () => {
    console.log('listening on port 6868')
});


