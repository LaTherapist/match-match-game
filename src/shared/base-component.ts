export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tag: HTMLTag = 'div', styles: string[] = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }
}
