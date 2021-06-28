import './setting-dropdown.css';
import { SettingsContent } from '../shared/settingsContentInterface';
import { SettingPlaceholder } from './setting-placeholder';

export class SettingDropdown {
  readonly element: HTMLSelectElement;
  private readonly placeholder: HTMLOptionElement;

  constructor(content: SettingsContent) {
    this.element = document.createElement('select');
    this.element.name = content.name;
    this.element.classList.add('setting__dropdown');

    this.placeholder = new SettingPlaceholder(content.placeholder).element;
    this.element.append(this.placeholder);

    content.options.forEach((optionContent) => {
      this.element.append(
        new Option(optionContent.text, optionContent.value),
      );
    });

    this.element.onchange = () => {
      localStorage.setItem(this.element.name, this.element.value);
    };
  }
}
