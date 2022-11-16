const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {v4: uuid} = require('uuid');



app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'Colt',
        comment: 'This is a comment!'
    },
    {
        id: uuid(),
        username: 'Bek',
        comment: 'This is a pain, but still fun!'
    },
    {
        id: uuid(),
        username: 'Blu',
        comment: 'Woof Woof!'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Delete Me!'
    }
]


app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3030, () => {
    console.log('ON PORT 3000!')
})
