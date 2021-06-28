import './nav-item.css';
import { BaseComponent } from '../shared/base-component';
import { NavItemType } from '../shared/navItemInterface';

export class NavItem extends BaseComponent {
  constructor(content: NavItemType) {
    super('li', ['nav__item', content.class]);
    this.element.innerHTML = `
      <a class="nav__link" href=${content.link}>${content.text}</a>
    `;
  }
}
