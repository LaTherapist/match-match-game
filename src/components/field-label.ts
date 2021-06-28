import './field-label.css';

export class FieldLabel {
  readonly element: HTMLLabelElement;

  constructor(name: string, text: string) {
    this.element = document.createElement('label');
    this.element.classList.add('field__label');
    this.element.setAttribute('for', name);
    this.element.innerHTML = text;
  }
}
