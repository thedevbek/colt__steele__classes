const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log('ERROR')
        console.log(err)
    })

const movieSchema = new mongoose.Schema ({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    {title: 'Amadeus', year:1984, score: 8.4, rating: 'PG'},
    {title: 'Alien', year:1979, score: 8.1, rating: 'R'},
    {title: 'Amelie', year:2001, score: 8.3, rating: 'R'},
    {title: 'The Iron Giant', year:1999, score: 7.5, rating: 'PG'},
    {title: 'Stand By Me', year:1986, score: 8.6, rating: 'R'},
    {title: 'Moonrise Kingdom', year:2012, score: 7.3, rating: 'PG-13'},
    {title: 'My Fair Lady', year:1964, score: 7.8, rating: 'G'},
    {title: 'Guardians of the Galaxy', year:2014, score: 8.0, rating: 'PG-13'},
    {title: 'Marnie', year:1964, score: 7.1, rating: 'PG'},
    {title: 'The Rock', year:1996, score: 7.4, rating: 'R'},
    {title: 'White Palace', year:1990, score: 8.4, rating: 'R'},
    {title: 'Cheri', year:2009, score: 6.1, rating: 'R'}
])
.then(data => {
    console.log("It Worked")
    console.log(data);
})
