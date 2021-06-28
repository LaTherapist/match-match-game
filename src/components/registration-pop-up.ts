import './registration-pop-up.css';
import { PopUp } from './pop-up';
import { Form } from './form';
import { database } from './database';
import { AUTHORISE } from '../shared/authorisation-data';

export class RegistrationPopUp extends PopUp {
  readonly form: Form;
  readonly database = database;

  constructor() {
    super();
    this.element.classList.add('pop-up_registration');

    this.form = new Form();
    this.element.append(this.form.element);
    this.form.element.onsubmit = () => false;

    this.form.footer.submitButton.addEventListener('click', this.submitForm.bind(this));
    this.form.footer.resetButton.addEventListener('click', this.hidePopUp.bind(this));
  }

  saveUserInfo() {
    const firstName = this.form.main.fields.firstNameField.input.value;
    const lastName = this.form.main.fields.lastNameField.input.value;
    const email = this.form.main.fields.emailField.input.value;
    const photo = this.form.main.imageWrapper.image.src;

    this.database.makeTransaction({
      firstName,
      lastName,
      email,
      score: 0,
      photo,
    });

    AUTHORISE.email = email;
  }

  submitForm() {
    this.saveUserInfo();
    this.hidePopUp();
  }
}
