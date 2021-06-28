import './players-list.css';
import { BaseComponent } from '../shared/base-component';
import { database } from './database';
import { PlayersListItem } from './players-list-item';
import { TransactionObject } from '../shared/transactionObjectInterface';

export class PlayersList extends BaseComponent {
  private readonly database = database;

  constructor() {
    super('ul', ['players-list']);

    const uploadContent = this.database.takeAllData.call(this.database);

    if (uploadContent) {
      uploadContent.onsuccess = () => {
        const listContent: TransactionObject[] = uploadContent.result;
        listContent.sort((a, b) => b.score - a.score);

        listContent.forEach((item) => {
          this.element.append(new PlayersListItem(item).element);
        });
      };
    }
  }
}
