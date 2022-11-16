
const express = require('express');
const app = express();
port = 6868


// app.use((req, res) => {
//     res.send("Hello we got your new request!")
// })

app.get('/', (req, res) => {
    res.send('The Homie Page')
})

app.get('/cats', (req, res) => {
    res.send('Meow Meow Meow!!!')
})

app.post('/cats', (req, res) => {
    res.send('Meow!!!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof Woof!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>This is a ${subreddit} subreddit!</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>This is a ${subreddit} subreddit with ID: ${postId}!</h1>`)
})

app.get('/search', (req, res) => {
   const {q} = req.query;
   if(!q){
       res.send(`NOTHING FOUND IF NOTHING SEARCHED!`)
   }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('/*', (req, res) => {
    res.send("I don't know that path!")
})

app.listen(port, () => {
    console.log('listening on port')
})
