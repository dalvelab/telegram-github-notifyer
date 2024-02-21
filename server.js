const express = require('express');
const axios = require('axios');

const app = express();

app.post('/webhook', express.json({type: 'application/json'}), (req, res) => {
    res.status(202).send('Accepted');

    const githubEvent = req.headers['x-github-event'];

    axios.post('/test-route', {
            chat_id: 343606892,
            text: `Пришло событие ${githubEvent} от репозитория`,
        }
    )
});

app.listen(8080, () => {
    console.log('APP IS STARTED');
})