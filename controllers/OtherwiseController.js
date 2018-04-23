'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
var Options = require('../Options');

class OtherwiseController extends TelegramBaseController {
  handle($) {
    var message = `Sorry I don't understand. Here's a list of my commands: 
- /breakfast
- /lunch 
- /dinner
- /shake`;
      $.sendMessage(message);
  }

}

module.exports = OtherwiseController;