import './form-img.css';

export class FormImage {
  readonly element: HTMLImageElement;

  constructor() {
    this.element = document.createElement('img');
    this.element.classList.add('form__img');
    this.element.alt = 'Player photo';
    this.element.src = './images/avatar.svg';
  }
}
