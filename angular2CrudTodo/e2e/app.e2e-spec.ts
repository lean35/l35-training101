import { CrudToDoPage } from './app.po';

describe('crud-to-do App', () => {
  let page: CrudToDoPage;

  beforeEach(() => {
    page = new CrudToDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
