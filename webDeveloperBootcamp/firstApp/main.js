const express = require('express');
const req = require("express/lib/request");
const app = express();

// app.use((req, res) =>{
//     console.log('Got new request')
//     res.send('This is a new response!!')
// })

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`${subreddit} `);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`${subreddit} ${postId}`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q){
        res.send('Nothing found if nothing searched!!')
    }
    res.send(`${q} `);
})
app.get('/', (req, res) => {
    res.send('Home');
})



app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.post('/cats', (req, res) => {
    res.send('Post!!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof!!')
})


app.get('*', (req, res) => {
    res.send('Wrong Path') //* gives you a 404 error for unknown paths
}) //!!! MUST BE LAST ONE
// '/' this the home page caller

app.listen(6868, () => {
    console.log(`Example app listening on port ${6868}`)
})
