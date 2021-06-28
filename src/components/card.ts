import './card.css';
import { BaseComponent } from '../shared/base-component';
import { constants } from '../shared/constants';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly img: string) {
    super('div', ['card__wrapper']);

    this.element.innerHTML = `
      <div class="card">
        <div class="card__front"
          style="background-image: url(./images/${img})">
        </div>
        <div class="card__back"></div>
      </div>
    `;
  }

  private flip(onFrontSide = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(constants.FLIP_CLASS, onFrontSide);
      this.element.addEventListener(
        'transitionend', () => resolve(),
        { once: true }
      );
    });
  }

  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  }
}
