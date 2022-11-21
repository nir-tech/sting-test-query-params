const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    env: {

      paths: [
        'lp/plus/',
        'lp/perfect',
        'lp/moving-perfect',
        'lp/packages/',
        'lp/stingtv-netflix/',
        'lp/sting-ds/',
        'lp/samsung-stingtv/'
      ]
    }


  },
});
