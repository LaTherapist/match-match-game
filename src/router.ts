import { BaseComponent } from './shared/base-component';
import { RouteObject } from './shared/routeObjectInterface';
import { About } from './pages/about';
import { App } from './pages/app';
import { Score } from './pages/score';
import { Settings } from './pages/settings';

export class Router {
  private readonly wrapper: HTMLElement;
  private readonly routes: RouteObject[];

  constructor() {
    this.wrapper = new BaseComponent('div', ['wrapper']).element;

    this.routes = [
      {
        name: '/',
        renderComponent: () => {
          new About(this.wrapper);
        }
      },
      {
        name: '/score',
        renderComponent: () => {
          new Score(this.wrapper);
        }
      },
      {
        name: '/settings',
        renderComponent: () => {
          new Settings(this.wrapper);
        }
      },
      {
        name: '/app',
        renderComponent: () => {
          new App(this.wrapper);
        }
      },
    ];
  }

  clearWrapper() {
    this.wrapper.innerHTML = '';
  }

  findRoute() {
    const currentRouteName = window.location.hash.slice(1) || '/';

    return this.routes.find((route) => {
      return route.name === currentRouteName;
    });
  }

  changeComponent() {
    this.clearWrapper();
    this.findRoute()?.renderComponent();

    document.body.append(this.wrapper);
  }
}
