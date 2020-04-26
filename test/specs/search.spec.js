const expect = require('chai').expect;
const PageFactory = require('../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;

describe('campaigns search', function() {
  let seacrhQuery = 'beauty';

  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
  });

  it('should have at least 1 beauty campaign in search results', async function () {
    await PageFactory.getPage('Home').open();
    await PageFactory.getPage('Home').header.performSearchByQuery(seacrhQuery);
    const firstSearchResult = PageFactory.getPage('Search Results Page').searchResults.getElementByIndex(0);
    await browser.wait(EC.elementToBeClickable(firstSearchResult), 10000);
    const countOfResults = await PageFactory.getPage('Search Results Page').searchResults.countItems();
    console.log(countOfResults);
    expect(countOfResults).to.be.at.least(1);
  });
});