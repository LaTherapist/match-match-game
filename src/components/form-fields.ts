import './form-fields.css';
import { BaseComponent } from '../shared/base-component';
import { FirstNameField } from './first-name-field';
import { LastNameField } from './last-name-field';
import { EmailField } from './email-field';

export class FormFields extends BaseComponent {
  readonly firstNameField: FirstNameField;
  readonly lastNameField: LastNameField;
  readonly emailField: EmailField;

  constructor() {
    super('div', ['form__fields']);

    this.firstNameField = new FirstNameField();
    this.lastNameField = new LastNameField();
    this.emailField = new EmailField();

    this.element.append(
      this.firstNameField.element,
      this.lastNameField.element,
      this.emailField.element,
    );
  }
}
