const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    env: {
      stagingSting: 'https://join-sting.onrender.com/',
      productionSting: 'https://www.stingtv.co.il/'
    }


  },
});
