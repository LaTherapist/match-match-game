import { Field } from './field';
import { FieldLabel } from './field-label';
import { FirstNameInput } from './first-name-input';

export class FirstNameField extends Field {
  private readonly label: HTMLLabelElement;
  readonly input: HTMLInputElement;

  constructor() {
    super();

    this.label = new FieldLabel('first-name', 'First Name').element;
    this.input = new FirstNameInput().element;

    this.element.prepend(
      this.label,
      this.input,
    );
  }
}
