import './winner-link.css';
import { BaseComponent } from '../shared/base-component';

export class WinnerLink extends BaseComponent {
  readonly link: HTMLAnchorElement;

  constructor() {
    super('div', ['winner-link_wrapper']);

    this.link = document.createElement('a');
    this.link.classList.add('pop-up__btn', 'winner-link');
    this.link.href = '#/score';
    this.link.innerHTML = 'ok';
    this.element.append(this.link);
  }
}
