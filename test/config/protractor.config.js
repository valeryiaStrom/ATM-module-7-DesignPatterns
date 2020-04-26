exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
  },
  // onPrepare: function() {
  //   browser.driver.manage().window().maximize();
  // },
  directConnect: true,
  framework: 'mocha',
  specs: [
    '../specs/*.js'
  ],
  mochaOpts: {
    reporter: 'spec',
    timeout: 70000
  }
};
