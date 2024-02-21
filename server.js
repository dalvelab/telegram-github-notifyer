const express = require('express');

const app = express();

app.post('/webhook', (req, res) => {
    res.status(202).send('Accepted');

    const githubEvent = req.headers['x-github-event'];

    console.log(githubEvent);
    console.log(req.body);
});

app.listen(8080, () => {
    console.log('APP IS STARTED');
})