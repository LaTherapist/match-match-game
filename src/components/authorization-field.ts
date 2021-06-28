import './authorization-field.css';
import { BaseComponent } from '../shared/base-component';
import { RegistrationButton } from './registration-button';
import { StartGameButton } from './start-game-btn';
import { StopGameButton } from './stop-game-btn';
import { constants } from '../shared/constants';
import { HeaderUserImg } from './header-user-img';
import { AUTHORISE } from '../shared/authorisation-data';

export class AuthorizationField extends BaseComponent {
  readonly registrationButton: HTMLElement;
  readonly startGameButton: HTMLElement;
  readonly stopGameButton: HTMLElement;
  readonly photo: HTMLImageElement;

  constructor() {
    super('div', ['authorization-field']);

    this.registrationButton = new RegistrationButton().element;
    this.startGameButton = new StartGameButton().element;
    this.stopGameButton = new StopGameButton().element;
    this.photo = new HeaderUserImg().element;

    this.element.append(
      this.registrationButton,
      this.startGameButton,
      this.stopGameButton,
      this.photo,
    );

    if (AUTHORISE.loggedIn) {
      this.showLoggedInButtons();
    }
  }

  showLoggedInButtons() {
    this.registrationButton.classList.add(constants.HIDDEN_BTN_CLASS);
    this.startGameButton.classList.remove(constants.HIDDEN_BTN_CLASS);
    this.photo.classList.remove(constants.HIDDEN_BTN_CLASS);
  }

  hideStartingButtons() {
    this.startGameButton.classList.add(constants.HIDDEN_BTN_CLASS);
    this.stopGameButton.classList.remove(constants.HIDDEN_BTN_CLASS);
  }
}
