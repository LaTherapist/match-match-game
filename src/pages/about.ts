import { AboutPageMain } from '../components/about-page-main';
import { Header } from '../components/header';

export class About {
  private readonly header: Header;
  private readonly main: AboutPageMain;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new AboutPageMain();

    this.rootElement.append(
      this.header.element,
      this.main.element,
    );
  }
}
