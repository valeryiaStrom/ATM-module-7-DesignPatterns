const Element = require('../base_elements/base_element');

class AbstractPage {
  constructor() {
    this.searchIcon = new Element('css', '.layoutHeader-generalHeader-searchButton');
    this.searchField = new Element('css', 'form .layoutHeader-searchBar-input');
  }
  open(url) {
    return browser.get(url);
  }
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
  async performSearchByQuery(searchQuery) {
    await this.searchIcon.click();
    await this.searchField.sendInput(searchQuery);
    return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
}

module.exports = AbstractPage;