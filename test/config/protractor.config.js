exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
  },
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
