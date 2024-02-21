const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('GLASHA HELLO');
});

app.listen(8080, () => {
    console.log('APP IS STARTED');
})