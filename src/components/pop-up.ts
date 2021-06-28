import './pop-up.css';
import { BaseComponent } from '../shared/base-component';
import { constants } from '../shared/constants';

export class PopUp extends BaseComponent {
  readonly cover: HTMLElement;

  constructor() {
    super('div', ['pop-up']);
    this.cover = new BaseComponent('div', ['cover']).element;
  }

  showPopUp() {
    document.body.append(this.cover);
    document.body.classList.add(constants.FIX_SCREEN_CLASS);
    this.element.classList.add('active');
  }

  hidePopUp() {
    this.cover.remove();
    document.body.classList.remove(constants.FIX_SCREEN_CLASS);
    this.element.classList.remove('active');
  }
}
