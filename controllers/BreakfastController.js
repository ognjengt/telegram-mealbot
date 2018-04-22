'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
var apiCaller = require('../apiCaller');
var loadingMessages = require('../loadingMessages');

var breakfastData = require('../data/breakfasts.json');

class BreakfastController extends TelegramBaseController {
  handler($) {

      var rand = this.getRandom(breakfastData.recipes.length);

      // Todo prebaciti buildovanje optiona u posebnu funkciju
      var options = {
        parse_mode: 'Markdown',
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: 'View full recipe',
                url: breakfastData.recipes[rand].source_url
              }
            ]
          ]
        })
      };

      $.sendMessage(this.structureResponse(breakfastData.recipes[rand]), options);
      
  }

  get routes() {
      return {
          'breakfastCommand': 'handler'
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

  generateLoadingMessage() {
    return loadingMessages[this.getRandom(loadingMessages.length)];
  }
}

module.exports = BreakfastController;