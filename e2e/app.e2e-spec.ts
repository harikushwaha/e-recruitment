import { ERecruitmentPage } from './app.po';

describe('e-recruitment App', () => {
  let page: ERecruitmentPage;

  beforeEach(() => {
    page = new ERecruitmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
