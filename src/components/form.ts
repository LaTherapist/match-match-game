import './form.css';
import { BaseComponent } from '../shared/base-component';
import { FormFooter } from './form-footer';
import { FormHeader } from './form-header';
import { FormMain } from './form-main';

export class Form extends BaseComponent {
  private readonly header: FormHeader;
  readonly main: FormMain;
  readonly footer: FormFooter;

  constructor() {
    super('form', ['form']);

    this.header = new FormHeader();
    this.main = new FormMain();
    this.footer = new FormFooter();

    this.element.append(
      this.header.element,
      this.main.element,
      this.footer.element,
    );
  }
}
