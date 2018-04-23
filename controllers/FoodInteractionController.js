'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

var breakfastData = require('../data/breakfasts.json');
var lunchData = require('../data/lunches.json');
var dinnerData = require('../data/dinners.json');
var shakesData = require('../data/shakes.json');
var greetingMessages = require('../interactionMessages');
var Options = require('../Options');

class FoodInteractionController extends TelegramBaseController {
  breakfastHandler($) {
      $.sendMessage(this.generateGreetingMessage());
      var rand = this.getRandom(breakfastData.recipes.length);
      var options = new Options(breakfastData.recipes[rand].source_url);
      $.sendMessage(this.structureResponse(breakfastData.recipes[rand]), options.get());
  }

  lunchHandler($) {
    $.sendMessage(this.generateGreetingMessage());
    var rand = this.getRandom(lunchData.recipes.length);
    var options = new Options(lunchData.recipes[rand].source_url);
    $.sendMessage(this.structureResponse(lunchData.recipes[rand]), options.get());
  }

  dinnerHandler($) {
    $.sendMessage(this.generateGreetingMessage());
    var rand = this.getRandom(dinnerData.recipes.length);
    var options = new Options(dinnerData.recipes[rand].source_url);
    $.sendMessage(this.structureResponse(dinnerData.recipes[rand]), options.get());
  }

  shakeHandler($) {
    $.sendMessage(this.generateGreetingMessage());
    var rand = this.getRandom(shakesData.recipes.length);
    var options = new Options(shakesData.recipes[rand].source_url);
    $.sendMessage(this.structureResponse(shakesData.recipes[rand]), options.get());
  }

  startHandler($) {
    var message = `Hello! So nice to meet you! I'm mealbot and I have a lot of tasty foods on the menu.
You can request a meal by typing these commands:
- /breakfast
- /lunch 
- /dinner
- /shake
Bon appetite!`;
    $.sendMessage(message)
  }

  get routes() {
      return {
          'breakfastCommand': 'breakfastHandler',
          'lunchCommand': 'lunchHandler',
          'dinnerCommand': 'dinnerHandler',
          'shakeCommand': 'shakeHandler',
          'startCommand': 'startHandler'
      }
  }

  /**
   * Returns a random number between 0 and maxValue
   */
  getRandom(maxValue) {
    return Math.floor(Math.random() * Math.floor(maxValue));
  }

  structureResponse(recipe) {
    return `*${recipe.title}*
[Image](${recipe.image_url})
Publisher: _${recipe.publisher}_`;
  }

  generateGreetingMessage() {
    return greetingMessages[this.getRandom(greetingMessages.length)];
  }
}

module.exports = FoodInteractionController;