
const express = require('express');
const app = express();
const port = 6868

// app.use((req, res) => {
//     // console.log('We got a new request!!')
//     res.send(`Go away!!`)
// })

app.get('/', (req, res) => {
    res.send('Howdy')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = 'req.params';
    res.send(`<h1> Browsing the ${subreddit} subreddit.</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1> Viewing Post ID: ${postId} ${subreddit} subreddit.</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('MEOW MEOW')
})

app.get('/cats', (req, res) => {
    res.send('MEOW')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF')
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q){
        res.send('Nothing Found if Nothing searched!!')
    }
    res.send(`<H1>Search results for: ${q}</H1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path, Loser!!`)
})


app.listen(port, () => {
    console.log(`listening on port on localhost ${port}`)
})
