import { Field } from './field';
import { FieldLabel } from './field-label';
import { LastNameInput } from './last-name-input';

export class LastNameField extends Field {
  private readonly label: HTMLLabelElement;
  readonly input: HTMLInputElement;

  constructor() {
    super();
    this.label = new FieldLabel('last-name', 'Last Name').element;
    this.input = new LastNameInput().element;

    this.element.prepend(
      this.label,
      this.input,
    );
  }
}
