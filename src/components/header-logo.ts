import './header-logo.css';
import { BaseComponent } from '../shared/base-component';

export class HeaderLogo extends BaseComponent {
  constructor() {
    super('h1', ['logo']);

    this.element.innerHTML += `
      <span class="logo_top">match</span>
      <span class="logo_bottom">match</span>
    `;
  }
}
