const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Владик Брагин просто какой-то волшебник, я в шоке, что он делает и что я это сама пишу');    
})

app.post('/webhook', express.json({type: 'application/json'}), (req, res) => {
    res.status(202).send('Accepted');

    const githubEvent = req.headers['x-github-event'];

    const TELEGRAM_TOKEN = dotenv.parsed.TELEGRAM_TOKEN;

    axios.post(`https://api.telegram.org/${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: 343606892,
            text: `Пришло событие ${githubEvent} от репозитория`,
        }
    )
});

app.listen(8080, () => {
    console.log('APP IS STARTED');
})