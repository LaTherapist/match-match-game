import { BaseComponent } from '../shared/base-component';
import { NavItemContent } from '../shared/navItemInterface';
import { NavItem } from './nav-item';

export class NavList extends BaseComponent {
  aboutPageLink: HTMLElement | null = null;
  scorePageLink: HTMLElement | null = null;
  settingsPageLink: HTMLElement | null = null;

  constructor() {
    super('ul', ['nav__list']);

    this.loadContent().then((content) => {
      this.aboutPageLink = new NavItem(content.about).element;
      this.scorePageLink = new NavItem(content.score).element;
      this.settingsPageLink = new NavItem(content.settings).element;

      this.element.append(
        this.aboutPageLink,
        this.scorePageLink,
        this.settingsPageLink,
      );

      this.makeRouteActive();
    });
  }

  private async loadContent() {
    const response = await fetch('./content/nav-content.json');
    const content: NavItemContent = await response.json();
    return content;
  }

  makeRouteActive() {
    const currentRouteName = window.location.hash.slice(1) || '/';

    switch (currentRouteName) {
      case '/':
        this.aboutPageLink?.classList.add('active-route');
        break;
      case '/score':
        this.scorePageLink?.classList.add('active-route');
        break;
      case '/settings':
        this.settingsPageLink?.classList.add('active-route');
        break;
    }
  }
}
