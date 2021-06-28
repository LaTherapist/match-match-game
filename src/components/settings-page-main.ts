import './main.css';
import { BaseComponent } from '../shared/base-component';
import { SettingsList } from './settings-list';

export class SettingsPageMain extends BaseComponent {
  private readonly list: SettingsList;

  constructor() {
    super('div', ['main']);

    this.list = new SettingsList();
    this.element.append(this.list.element);
  }
}
