class Options {
  constructor(recipeUrl) {

     this.options = {
      parse_mode: 'Markdown',
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            {
              text: 'View full recipe',
              url: recipeUrl
            }
          ]
        ]
      })
    };
  }

  get() {
    return this.options;
  }
}

module.exports = Options;