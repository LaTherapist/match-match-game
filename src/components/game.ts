import { GamePageMainContainer } from './game-page-main-container';
import { Card } from './card';
import { delay } from '../shared/delay';
import { constants } from '../shared/constants';
import { WinnerPopUp } from './winner-pop-up';
import { database } from './database';
import { TransactionObject } from '../shared/transactionObjectInterface';

export class Game extends GamePageMainContainer {
  private activeCard?: Card;
  private doingAnimation = false;

  private missclicks = 0;
  private remainCards = Number(localStorage.getItem('difficulty')) || 16;

  private database = database;
  popup: WinnerPopUp | null = null;

  private toggleWrongClass(cards: HTMLElement[]) {
    cards.forEach((card) => {
      card.classList.toggle(constants.WRONG_CARD_CLASS);
    });
  }

  async initGame(images: string[]) {
    this.gameField.clearField();

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        this.handleCard(card);
      });
    });

    await this.gameField.addCards(cards);
    this.timer.initTimer();
  }

  private addScore(points: number) {
    const request = this.database.getCurrentPlayerData();

    request?.addEventListener('success', () => {
      const currentPlayer: TransactionObject = request.result;

      if (currentPlayer.score > points) return;
      currentPlayer.score = points;

      this.database.makeTransaction(currentPlayer);
    });
  }

  private calculateResults() {
    const sec = Number(this.timer.seconds.innerText);
    const min = Number(this.timer.minutes.innerText);
    const comparisons = (Number(localStorage.getItem('difficulty')) / 2) - this.missclicks;
    const timePenalty = min * 60 + sec;
    let score = (comparisons * 100) - (timePenalty * 10);
    if (score < 0) score = 0;

    this.addScore(score);

    return { min, sec, score };
  }

  private showPopUp() {
    const result = this.calculateResults();

    this.popup = new WinnerPopUp(result);
    document.body.append(this.popup.element);
    this.popup.showPopUp.call(this.popup);

    this.popup.linkWrapper.link.addEventListener('click', () => {
      this.popup?.hidePopUp.call(this.popup);
    });
  }

  private finishGame() {
    this.timer.stopTimer();
    this.showPopUp();
  }

  private async handleCard(card: Card) {
    if (this.doingAnimation || !card.isFlipped) return;
    this.doingAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.doingAnimation = false;
      return;
    }

    if (this.activeCard.img !== card.img) {
      this.toggleWrongClass([card.element, this.activeCard.element]);

      await delay(constants.FLIP_CARD_DELAY);
      await Promise.all([
        this.activeCard.flipToBack(),
        card.flipToBack(),
      ]);

      this.missclicks += 1;
      this.toggleWrongClass([card.element, this.activeCard.element]);
    } else {
      this.remainCards -= 2;
    }

    this.activeCard = undefined;
    this.doingAnimation = false;

    if (this.remainCards === 0) {
      this.finishGame();
    }
  }
}
