'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const sources = ['cnn', 'bloomberg', 'business-insider', 'hacker-news', 'techradar', 'techcrunch', 'recode'];


const urlA = "https://newsapi.org/v1/articles?source=";
const urlB = "&sortBy=top&apiKey=9d14d4e72ef84c6897896c75d1b6cea3";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/news', (req, res) => {
    let source = sources[Math.floor(Math.random() * sources.length)];
    let url = urlA + source + urlB;
    axios.get(url).then((response) => {
        res.json(response.data.articles);
    })
})

app.listen(3500);
console.log('Listening on localhost:3500');