class Collection {
  constructor(cssSelector) {
    this.collection = element.all(by.css(cssSelector));
  }
  async countItems() {
    const collectionCount = await this.collection.count();
    return collectionCount;
  }
  getElementByIndex(elementIndex) {
    return this.collection.get(elementIndex);
  }
}

module.exports = Collection;