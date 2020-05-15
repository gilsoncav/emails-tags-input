import './styles/emails-input.scss';

interface EmailsInputOptions {
  /**
   * html string to be the content of the label
   */
  labelHTMLContent: string;
  onMailsListChange: (mailsList: EmailList) => void;
}

interface Email {
  address: string;
  valid: boolean;
}

type EmailList = Email[];

export default class EmailsInput {
  readonly containerNode: HTMLElement;
  private divEmailsInput: HTMLDivElement;
  private label: HTMLSpanElement;
  readonly options: EmailsInputOptions;

  constructor(containerNode: HTMLElement, options: EmailsInputOptions) {
    this.options = options;
    this.containerNode = containerNode;
    this.divEmailsInput = this.renderDivEmailsInput();
    this.label = this.renderLabel();
  }

  private renderDivEmailsInput(): HTMLDivElement {
    const div = document.createElement('div');
    div.className = 'gct-emails-input';
    this.containerNode.appendChild(div);

    return div;
  }

  private renderLabel(): HTMLSpanElement {
    const elem = document.createElement('label');
    elem.innerHTML = this.options.labelHTMLContent;
    this.divEmailsInput.appendChild(elem);

    return elem;
  }
}

function add(a: number, b: number) {
  console.log(a + b);
}
