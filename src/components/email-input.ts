import { FieldInpunt } from './field-input';

export class EmailInput extends FieldInpunt {
  constructor() {
    super();
    this.element.type = 'email';
    this.element.placeholder = 'Jessie.Doe@gmail.com';
    this.element.name = 'email';
  }
}
