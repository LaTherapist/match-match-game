import { Header } from '../components/header';
import { SettingsPageMain } from '../components/settings-page-main';

export class Settings {
  readonly header: Header;
  readonly main: SettingsPageMain;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new SettingsPageMain();

    this.rootElement.append(
      this.header.element,
      this.main.element,
    );
  }
}
