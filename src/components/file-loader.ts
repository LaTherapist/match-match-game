import './file-loader.css';

export class FileLoader {
  readonly element: HTMLInputElement;

  constructor() {
    this.element = document.createElement('input');
    this.element.type = 'file';
    this.element.classList.add('file-loader');
  }

  loadImg(img: HTMLImageElement) {
    const fileObject = this.element.files;
    if (fileObject) {
      const fileImage = fileObject[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileImage);

      reader.onload = () => {
        if (img && reader.result) {
          img.src = reader.result.toString();
        }
      };
      this.element.value = '';
    }
  }
}
