import './main-container.css';
import { BaseComponent } from '../shared/base-component';
import { Instruction } from './instruction';

export class AboutPageMainContainer extends BaseComponent {
  title: HTMLElement;
  instruction: HTMLElement;

  constructor() {
    super('div', ['container', 'main__container']);

    this.title = new BaseComponent('h2', ['main__title']).element;
    this.title.innerHTML = 'How to play?';

    this.instruction = new Instruction().element;

    this.element.append(
      this.title,
      this.instruction,
    );
  }
}
