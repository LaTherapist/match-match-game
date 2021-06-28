import './settings-list.css';
import { BaseComponent } from '../shared/base-component';
import { SettingsContent } from '../shared/settingsContentInterface';
import { SettingItem } from './setting-item';

export class SettingsList extends BaseComponent {
  constructor() {
    super('ul', ['settings__list']);
    this.loadContent();
  }

  private async loadContent() {
    const response = await fetch('./content/settings-content.json');
    const contentJSON : SettingsContent[] = await response.json();

    contentJSON.forEach((content) => {
      this.element.append(new SettingItem(content).element);
    });
  }
}
