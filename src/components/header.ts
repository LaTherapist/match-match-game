import './header.css';
import { BaseComponent } from '../shared/base-component';
import { HeaderLogo } from './header-logo';
import { HeaderNav } from './header-nav';
import { AuthorizationField } from './authorization-field';
import { RegistrationPopUp } from './registration-pop-up';

export class Header extends BaseComponent {
  readonly logo: HTMLElement;
  readonly nav: HeaderNav;
  readonly authorizationField: AuthorizationField;
  readonly popUp: RegistrationPopUp;

  constructor() {
    super('header', ['header']);

    this.logo = new HeaderLogo().element;
    this.nav = new HeaderNav();
    this.authorizationField = new AuthorizationField();
    this.popUp = new RegistrationPopUp();

    this.element.append(
      this.logo,
      this.nav.element,
      this.authorizationField.element,
      this.popUp.element,
    );

    const registrationBTN = this.authorizationField.registrationButton;
    registrationBTN.addEventListener('click', this.popUp.showPopUp.bind(this.popUp));

    this.popUp.form.element.addEventListener('submit', () => {
      this.authorizationField.showLoggedInButtons.call(this.authorizationField);
      this.addUserImage();
    });
  }

  addUserImage() {
    const src = this.popUp.form.main.imageWrapper.image.src;
    this.authorizationField.photo.src = src;
  }
}
