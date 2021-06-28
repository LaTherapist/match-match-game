import './instruction-row.css';
import { BaseComponent } from '../shared/base-component';
import { InstructionContent } from '../shared/instructionContentInterface';

export class InstructionRow extends BaseComponent {
  constructor(content: InstructionContent) {
    super('div', ['instruction__row']);
    this.element.innerHTML = `
    <div class="instruction__block ${content.class}">
      <div class="instruction__block_container">
        <div class="instruction__counter">${content.counter}</div>
        <p class="instruction__text">${content.text}</p>
      </div>
    </div>
    <div class="instruction__img">
      <img src="${content.img}" alt="${content.alt}">
    </div>
    `;
  }
}
