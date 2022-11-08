
const express = require('express');
const app = express();
const port = 6868

app.use((req, res) => {
    // console.log('We got a new request!!')
    res.send(`Go away!!`)
    res.send({color: 'red'})

})

app.get('/', (req, res) => {
    res.send('Howdy')
})

app.listen(port, () => {
    console.log(`listening on port on localhost ${port}`)
})
