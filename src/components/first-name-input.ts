import { constants } from '../shared/constants';
import { FieldInpunt } from './field-input';

export class FirstNameInput extends FieldInpunt {
  constructor() {
    super();
    this.element.type = 'text';
    this.element.placeholder = 'Jessie';
    this.element.name = 'first-name';
    this.element.setAttribute('pattern', constants.NAME_REGEXP);
  }
}
