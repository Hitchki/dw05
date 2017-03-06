import { Dw05Page } from './app.po';

describe('dw05 App', () => {
  let page: Dw05Page;

  beforeEach(() => {
    page = new Dw05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Communication Plattform!');
  });
});
