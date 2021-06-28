import { Header } from '../components/header';
import { GamePageMain } from '../components/game-page-main';

export class App {
  private readonly header: Header;
  private readonly main: GamePageMain;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new GamePageMain();
    this.main.startGame();

    this.header.authorizationField.hideStartingButtons.call(this.header.authorizationField);

    this.rootElement.append(
      this.header.element,
      this.main.element,
    );
  }
}
