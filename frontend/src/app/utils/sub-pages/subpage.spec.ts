import { SubPage } from './subpage';


describe('SubPage', () => {
  it('should return the correct absolute link after getAbsLinkForPage()', () => {
    const subPage = new SubPage($localize `title`, 'base', 'component');

    expect(subPage.getAbsLinkForPage()).toEqual('/base/component');
  });
});
