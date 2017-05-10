import { ContadorReduxPage } from './app.po';

describe('contador-redux App', () => {
  let page: ContadorReduxPage;

  beforeEach(() => {
    page = new ContadorReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
