import './form-btn.css';

export class FormResetButton {
  readonly element: HTMLButtonElement;

  constructor() {
    this.element = document.createElement('button');
    this.element.classList.add('pop-up__btn', 'btn_reset');
    this.element.type = 'reset';
    this.element.innerHTML = 'cancel';
  }
}
