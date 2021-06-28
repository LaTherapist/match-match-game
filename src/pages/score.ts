import { Header } from '../components/header';
import { ScorePageMain } from '../components/score-page-main';

export class Score {
  private readonly header: Header;
  private readonly main: ScorePageMain;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new ScorePageMain();

    this.rootElement.append(
      this.header.element,
      this.main.element,
    );
  }
}
