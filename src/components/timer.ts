import './timer.css';
import { BaseComponent } from '../shared/base-component';
import { addZero } from '../shared/addZero';

export class Timer extends BaseComponent {
  readonly minutes: HTMLElement;
  readonly seconds: HTMLElement;
  private readonly colon: HTMLElement;
  private timerInterval: NodeJS.Timeout | null = null;

  constructor() {
    super('div', ['timer']);

    this.colon = new BaseComponent('span').element;
    this.colon.innerHTML = ':';
    this.minutes = new BaseComponent('span').element;
    this.minutes.innerHTML = '00';
    this.seconds = new BaseComponent('span').element;
    this.seconds.innerHTML = '00';

    this.element.append(
      this.minutes,
      this.colon,
      this.seconds,
    );
  }

  initTimer() {
    this.stopTimer();

    let counter = 0;

    this.timerInterval = setInterval(() => {
      counter += 1;
      const seconds = counter % 60;
      const minutes = Math.floor(counter / 60);

      this.seconds.innerHTML = addZero(seconds);
      this.minutes.innerHTML = addZero(minutes);
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timerInterval = null;
  }
}
