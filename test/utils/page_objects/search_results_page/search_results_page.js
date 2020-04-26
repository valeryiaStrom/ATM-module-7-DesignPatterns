const AbstractPage = require('../abstract_page/abstract_page');
const Collection = require('../base_elements/base_collection');

class SearchResultsPage extends AbstractPage {
  constructor() {
    super();
    this.searchResults = new Collection('div.discoverableCard-title');
  }
}

module.exports = SearchResultsPage;