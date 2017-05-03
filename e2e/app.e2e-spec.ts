import { POWUIRECCOMENDATIONSPage } from './app.po';

describe('pow-ui-reccomendations App', () => {
  let page: POWUIRECCOMENDATIONSPage;

  beforeEach(() => {
    page = new POWUIRECCOMENDATIONSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
