import './main.css';
import { BaseComponent } from '../shared/base-component';
import { Game } from './game';
import { ImagesObject } from '../shared/imagesObjectInterface';

export class GamePageMain extends BaseComponent {
  readonly game: Game;

  constructor() {
    super('main', ['main']);

    this.game = new Game();
    this.element.append(this.game.element);
  }

  async startGame() {
    const category = localStorage.getItem('category') || 'animals';
    const difficulty = localStorage.getItem('difficulty') || 16;

    const imagesFile = await fetch('./content/images.json');
    const imagesJSON: ImagesObject[] = await imagesFile.json();
    const findCategory = imagesJSON.find((obj) => {
      return obj.category === category;
    });

    if (findCategory) {
      const { images } = findCategory;
      const shuffledImages = images.sort(() => Math.random() - 0.5).slice(0, +difficulty / 2);
      this.game.initGame(shuffledImages);
    }
  }
}
