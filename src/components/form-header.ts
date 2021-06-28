import './form-header.css';
import { BaseComponent } from '../shared/base-component';

export class FormHeader extends BaseComponent {
  constructor() {
    super('h3', ['form__header']);
    this.element.innerHTML = 'Register new Player';
  }
}
