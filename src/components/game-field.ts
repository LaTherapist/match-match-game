import './game-field.css';
import { BaseComponent } from '../shared/base-component';
import { Card } from './card';
import { constants } from '../shared/constants';
import { delay } from '../shared/delay';

export class GameField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['game-field']);
  }

  clearField() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  async addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => {
      this.element.append(card.element);
    });
    await delay(constants.FLIP_ALL_CARDS_TIME);
    this.cards.forEach((card) => card.flipToBack());
  }
}
