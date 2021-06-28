import './header-button.css';
import { constants } from '../shared/constants';

export class StartGameButton {
  readonly element: HTMLAnchorElement;

  constructor() {
    this.element = document.createElement('a');
    this.element.href = '#/app';
    this.element.classList.add('header__btn', constants.HIDDEN_BTN_CLASS);
    this.element.innerHTML = 'Start game';
  }
}
