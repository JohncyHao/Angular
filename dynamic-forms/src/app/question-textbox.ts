
import { QuestionBase } from './question-base';


// textbox可透過type屬性來支援多種html5元素類型
export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

