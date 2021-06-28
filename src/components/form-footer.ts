import './form-footer.css';
import { BaseComponent } from '../shared/base-component';
import { FormSubmitButton } from './form-submit-btn';
import { FormResetButton } from './form-reset-btn';

export class FormFooter extends BaseComponent {
  readonly submitButton: HTMLButtonElement;
  readonly resetButton: HTMLButtonElement;

  constructor() {
    super('div', ['form__footer']);

    this.submitButton = new FormSubmitButton().element;
    this.resetButton = new FormResetButton().element;
    this.element.append(
      this.submitButton,
      this.resetButton,
    );
  }
}
