import { Field } from './field';
import { FieldLabel } from './field-label';
import { EmailInput } from './email-input';

export class EmailField extends Field {
  private readonly label: HTMLLabelElement;
  readonly input: HTMLInputElement;

  constructor() {
    super();

    this.label = new FieldLabel('email', 'E-mail').element;
    this.input = new EmailInput().element;

    this.element.prepend(
      this.label,
      this.input,
    );
  }
}
