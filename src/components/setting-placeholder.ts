export class SettingPlaceholder {
  readonly element: HTMLOptionElement;

  constructor(text: string) {
    this.element = new Option(text);
    this.element.selected = true;
    this.element.disabled = true;
  }
}
