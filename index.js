'use strict';
const config = require('./config');
const Telegram = require('telegram-node-bot');
const FoodInteractionController = require('./controllers/FoodInteractionController');
const OtherwiseController = require('./controllers/OtherwiseController');

const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram(config.TELEGRAM_API_TOKEN, {workers: 1});


tg.router
    .when(
        new TextCommand('/breakfast', 'breakfastCommand'),
        new FoodInteractionController()
    )
    .when(
        new TextCommand('/lunch', 'lunchCommand'),
        new FoodInteractionController()
    )
    .when(
        new TextCommand('/dinner', 'dinnerCommand'),
        new FoodInteractionController()
    )
    .when(
        new TextCommand('/shake', 'shakeCommand'),
        new FoodInteractionController()
    )
    .when(
        new TextCommand('/start', 'startCommand'),
        new FoodInteractionController()
    )
    .otherwise(
        new OtherwiseController()
    )