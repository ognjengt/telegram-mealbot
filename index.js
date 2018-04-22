'use strict';
const config = require('./config');
const Telegram = require('telegram-node-bot');
const BreakfastController = require('./controllers/BreakfastController');

const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram(config.TELEGRAM_API_TOKEN, {workers: 1});


tg.router
    .when(
        new TextCommand('/breakfast', 'breakfastCommand'),
        new BreakfastController()
    )