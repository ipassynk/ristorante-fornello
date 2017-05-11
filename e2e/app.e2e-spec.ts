import { RistoranteFornelloPage } from './app.po';

describe('ristorante-fornello App', () => {
  let page: RistoranteFornelloPage;

  beforeEach(() => {
    page = new RistoranteFornelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
