import './winner-pop-up.css';
import { WinnerInfoInterface } from '../shared/winnerInfoInterface';
import { PopUp } from './pop-up';
import { WinnerLink } from './winner-link';
import { WinnerText } from './winner-text';

export class WinnerPopUp extends PopUp {
  readonly text: HTMLElement;
  readonly linkWrapper: WinnerLink;

  constructor(winnerInfo: WinnerInfoInterface) {
    super();
    this.element.classList.add('pop-up_winner');

    this.text = new WinnerText(winnerInfo).element;
    this.linkWrapper = new WinnerLink();

    this.element.append(
      this.text,
      this.linkWrapper.element,
    );
  }
}
