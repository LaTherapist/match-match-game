import './instruction.css';
import { BaseComponent } from '../shared/base-component';
import { InstructionContent } from '../shared/instructionContentInterface';
import { InstructionRow } from './instruction-row';

export class Instruction extends BaseComponent {
  constructor() {
    super('div', ['instruction']);
    this.loadContent();
  }

  async loadContent() {
    const response = await fetch('./content/instructions-content.json');
    const contentJSON: InstructionContent[] = await response.json();

    contentJSON.forEach((content) => {
      this.element.append(new InstructionRow(content).element);
    });
  }
}
