import { AUTHORISE } from '../shared/authorisation-data';
import { TransactionObject } from '../shared/transactionObjectInterface';

class Database {
  database: IDBDatabase | null = null;
  readonly databaseRequest: IDBOpenDBRequest;

  constructor(readonly storeName: string = 'authorization') {
    this.databaseRequest = indexedDB.open('latherapist', 1);

    this.databaseRequest.addEventListener('upgradeneeded', () => this.createStore());
    this.databaseRequest.addEventListener('success', () => this.database = this.databaseRequest.result);
  }

  createStore() {
    this.database = this.databaseRequest.result;
    const store = this.database.createObjectStore(
      this.storeName,
      { keyPath: 'email', autoIncrement: true }
    );
    store.createIndex('firstName', 'firstName');
    store.createIndex('lastName', 'lastName');
    store.createIndex('score', 'score');
    store.createIndex('email', 'email', { unique: true });
  }

  makeTransaction(obj: TransactionObject) {
    const transaction = this.database?.transaction(this.storeName, 'readwrite');
    const storeData = transaction?.objectStore(this.storeName);
    const request = storeData?.put(obj);
  }

  takeAllData(): IDBRequest<TransactionObject[]> | undefined {
    const transaction = this.database?.transaction(this.storeName, 'readonly');
    const storeData = transaction?.objectStore(this.storeName);
    return storeData?.getAll();
  }

  getCurrentPlayerData() {
    const transaction = this.database?.transaction(this.storeName, 'readonly');
    const storeData = transaction?.objectStore(this.storeName);
    const emailIndex = storeData?.index('email');

    const result = emailIndex?.get(AUTHORISE.email);
    return result;
  }
}

export const database = new Database();
