import { BaseComponent } from '../shared/base-component';
import './field.css';

export class Field extends BaseComponent {
  readonly validation: HTMLElement;

  constructor() {
    super('div', ['field']);

    this.validation = new BaseComponent('div', ['field__validation']).element;
    this.element.append(this.validation);
  }
}
