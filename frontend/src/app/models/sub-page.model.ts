export class SubPage {
    title: string;
    component: string;
    base: string;

    constructor(title: string, base: string, component: string) {
      this.title = title;
      this.base = base;
      this.component = component;
    }

    /**
     * It shouldn't be needed to have such a method; routerLink should work fine with relative path, but it does not.
     **/
    getAbsLinkForPage(): string {
      return '/' + this.base + '/' + this.component;
    }
}
