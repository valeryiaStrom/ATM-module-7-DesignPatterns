const Element = require('../base_elements/base_element');

class Header {
  constructor() {
    this.header = new Element('div.layoutHeader-generalHeader');
    this.searchButton = new Element('.layoutHeader-generalHeader-searchButton');
    this.searchField = new Element('form .layoutHeader-searchBar-input');
  }
  async performSearchByQuery(searchQuery) {
    await this.searchButton.click();
    await this.searchField.sendInput(searchQuery);
    return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
}

module.exports = Header;