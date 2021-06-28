import './setting-item.css';
import { BaseComponent } from '../shared/base-component';
import { SettingsContent } from '../shared/settingsContentInterface';
import { SettingDropdown } from './setting-dropdown';

export class SettingItem extends BaseComponent {
  private readonly title: HTMLElement;
  readonly dropdown: HTMLSelectElement;

  constructor(content: SettingsContent) {
    super('li', ['setting']);

    this.title = new BaseComponent('h2', ['setting__title']).element;
    this.title.innerHTML = content.title;
    this.dropdown = new SettingDropdown(content).element;

    this.element.append(
      this.title,
      this.dropdown,
    );
  }
}
