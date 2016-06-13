import { Ng2TestAppPage } from './app.po';

describe('ng2-test-app App', function() {
  let page: Ng2TestAppPage;

  beforeEach(() => {
    page = new Ng2TestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-test-app works!');
  });
});
