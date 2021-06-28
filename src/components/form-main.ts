import './form-main.css';
import { BaseComponent } from '../shared/base-component';
import { FormFields } from './form-fields';
import { FormImageWrapper } from './form-img-wrapper';

export class FormMain extends BaseComponent {
  readonly fields: FormFields;
  readonly imageWrapper: FormImageWrapper;

  constructor() {
    super('div', ['form__main']);

    this.fields = new FormFields();
    this.imageWrapper = new FormImageWrapper();

    this.element.append(
      this.fields.element,
      this.imageWrapper.element,
    );
  }
}
