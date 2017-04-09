import { RajyogPage } from './app.po';

describe('rajyog App', () => {
  let page: RajyogPage;

  beforeEach(() => {
    page = new RajyogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
