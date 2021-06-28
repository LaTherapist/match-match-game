import './main.css';
import { BaseComponent } from '../shared/base-component';
import { AboutPageMainContainer } from './about-page-main-container';

export class AboutPageMain extends BaseComponent {
  private readonly container: AboutPageMainContainer;

  constructor() {
    super('main', ['main']);

    this.container = new AboutPageMainContainer();
    this.element.append(this.container.element);
  }
}
