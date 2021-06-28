import './header-button.css';
import { BaseComponent } from '../shared/base-component';

export class RegistrationButton extends BaseComponent {
  constructor() {
    super('button', ['header__btn']);
    this.element.innerHTML = 'Registration';
  }
}
