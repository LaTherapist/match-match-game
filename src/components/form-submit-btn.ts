import { AUTHORISE } from '../shared/authorisation-data';
import './form-btn.css';

export class FormSubmitButton {
  readonly element: HTMLButtonElement;

  constructor() {
    this.element = document.createElement('button');
    this.element.classList.add('pop-up__btn', 'btn_submit');
    this.element.type = 'submit';
    this.element.innerHTML = 'add user';

    this.element.addEventListener('click', () => AUTHORISE.loggedIn = true);
  }
}
