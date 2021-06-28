import { AUTHORISE } from '../shared/authorisation-data';
import { TransactionObject } from '../shared/transactionObjectInterface';
import { database } from './database';

export class HeaderUserImg {
  readonly element: HTMLImageElement;
  private database = database;

  constructor() {
    this.element = document.createElement('img');
    this.element.classList.add('player__photo', 'hidden-btn');

    if (AUTHORISE.loggedIn) {
      const request = this.database.getCurrentPlayerData();

      request?.addEventListener('success', () => {
        const currentPlayer: TransactionObject = request.result;
        this.element.src = currentPlayer.photo;
      });
    }
  }
}
