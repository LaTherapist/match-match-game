import './players-list-item.css';
import { BaseComponent } from '../shared/base-component';
import { TransactionObject } from '../shared/transactionObjectInterface';

export class PlayersListItem extends BaseComponent {
  constructor(playerObject: TransactionObject) {
    super('li', ['players-list__item']);
    this.element.innerHTML = `
      <div class="player__info">
        <img class="player__photo"
          src="${playerObject.photo}"
          alt="player-photo">
        <div class="player__contacts">
          <span class="player__name">${playerObject.firstName} ${playerObject.lastName}</span>
          <span class="player__mail">${playerObject.email}</span>
        </div>
      </div>
      <div class="player__score">
        <span>Score:</span>
        <span class="player__score_number">${playerObject.score}</span>
      </div>
    `;
  }
}
