import './header-button.css';
import { constants } from '../shared/constants';

export class StopGameButton {
  readonly element: HTMLAnchorElement;

  constructor() {
    this.element = document.createElement('a');
    this.element.href = '#/';
    this.element.classList.add('header__btn', constants.HIDDEN_BTN_CLASS);
    this.element.innerHTML = 'Stop game';
  }
}
