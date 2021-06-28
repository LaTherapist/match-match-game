import './header-nav.css';
import { BaseComponent } from '../shared/base-component';
import { NavList } from './nav-list';

export class HeaderNav extends BaseComponent {
  readonly list: NavList;

  constructor() {
    super('nav', ['nav']);
    this.list = new NavList();
    this.element.append(this.list.element);
  }
}
