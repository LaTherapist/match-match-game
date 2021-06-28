import './main-container.css';
import { BaseComponent } from '../shared/base-component';
import { PlayersList } from './players-list';

export class ScorePageMainContainer extends BaseComponent {
  private readonly title: HTMLElement;
  readonly list: PlayersList;

  constructor() {
    super('div', ['container', 'main__container']);

    this.title = new BaseComponent('h2', ['main__title']).element;
    this.title.innerHTML = 'Best players';

    this.list = new PlayersList();

    this.element.append(
      this.title,
      this.list.element,
    );
  }
}
