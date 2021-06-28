import './main-container.css';
import { BaseComponent } from '../shared/base-component';
import { GameField } from './game-field';
import { Timer } from './timer';

export class GamePageMainContainer extends BaseComponent {
  timer: Timer;
  gameField: GameField;

  constructor() {
    super('div', ['container', 'main__container']);

    this.timer = new Timer();
    this.gameField = new GameField();

    this.element.append(
      this.timer.element,
      this.gameField.element,
    );
  }
}
