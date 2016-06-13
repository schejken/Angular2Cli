export class Ng2TestAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-test-app-app h1')).getText();
  }
}
