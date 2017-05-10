import { ElTiempo2Page } from './app.po';

describe('el-tiempo2 App', () => {
  let page: ElTiempo2Page;

  beforeEach(() => {
    page = new ElTiempo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
