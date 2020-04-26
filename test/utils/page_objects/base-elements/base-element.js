class Element {
  constructor(cssSelector) {
    this.element = element(by.css(cssSelector));
  }
  click() {
    return this.element.click();
  }
  sendInput(input) {
    return this.element.sendKeys(input);
  }
}

module.exports = Element;