const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("<h1>Doing things!</h1>")
})

app.get('/endpoint', (req, res) => {
    const { thing } = req.query;
    res.send(`<h1>Doing other things with ${thing}</h1>`);
})

app.listen(process.env.PORT, () => {
    console.log('listening on ' + process.env.PORT);
})