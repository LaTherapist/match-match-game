import './winner-text.css';
import { BaseComponent } from '../shared/base-component';
import { WinnerInfoInterface } from '../shared/winnerInfoInterface';

export class WinnerText extends BaseComponent {
  constructor(content: WinnerInfoInterface) {
    super('p', ['winner-text']);
    this.element.innerHTML = `
      Congratulations! You successfully found all matches.
      It took ${content.min}:${content.sec} minutes. You gain ${content.score} points.
    `;
  }
}
