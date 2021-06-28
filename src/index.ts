import './style.css';
import { Router } from './router';

const router = new Router();

window.onload = () => {
  router.changeComponent();
};

window.onpopstate = () => {
  router.changeComponent();
};
