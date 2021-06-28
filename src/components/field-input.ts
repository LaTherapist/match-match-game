import './field-input.css';

export class FieldInpunt {
  readonly element: HTMLInputElement;

  constructor() {
    this.element = document.createElement('input');
    this.element.classList.add('field__input');
    this.element.required = true;
    this.element.setAttribute('max-length', '30');
  }
}
