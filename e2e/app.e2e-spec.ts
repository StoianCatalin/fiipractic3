import { FpPage } from './app.po';

describe('fp App', () => {
  let page: FpPage;

  beforeEach(() => {
    page = new FpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fp works!');
  });
});
