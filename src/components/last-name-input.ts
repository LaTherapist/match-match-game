import { constants } from '../shared/constants';
import { FieldInpunt } from './field-input';

export class LastNameInput extends FieldInpunt {
  constructor() {
    super();
    this.element.type = 'text';
    this.element.placeholder = 'Doe';
    this.element.name = 'last-name';
    this.element.setAttribute('pattern', constants.NAME_REGEXP);
  }
}
