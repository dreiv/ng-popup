import { NgPopupPage } from './app.po';

describe('ng-popup App', () => {
  let page: NgPopupPage;

  beforeEach(() => {
    page = new NgPopupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
