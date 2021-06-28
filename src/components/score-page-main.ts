import './main.css';
import { BaseComponent } from '../shared/base-component';
import { ScorePageMainContainer } from './score-page-main-container';

export class ScorePageMain extends BaseComponent {
  private readonly container: ScorePageMainContainer;

  constructor() {
    super('main', ['main']);

    this.container = new ScorePageMainContainer();
    this.element.append(this.container.element);
  }
}
