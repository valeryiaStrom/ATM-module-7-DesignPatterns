const Header = require('../components/headerComponent');

class AbstractPage {
  constructor() {
    this.header = new Header();
  }
  open(url) {
    return browser.get(url);
  }
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
}

module.exports = AbstractPage;