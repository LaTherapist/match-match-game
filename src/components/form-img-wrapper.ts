import { BaseComponent } from '../shared/base-component';
import { FileLoader } from './file-loader';
import { FormImage } from './form-img';
import './form-img-wrapper.css';

export class FormImageWrapper extends BaseComponent {
  readonly image: HTMLImageElement;
  readonly fileLoader: FileLoader;

  constructor() {
    super('div', ['form__img_wrapper']);

    this.image = new FormImage().element;
    this.fileLoader = new FileLoader();
    this.element.append(
      this.image,
      this.fileLoader.element,
    );

    this.fileLoader.element.addEventListener('change',
      this.fileLoader.loadImg.bind(this.fileLoader, this.image));
  }
}
