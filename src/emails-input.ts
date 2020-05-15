import './styles/emails-input.scss';

interface EmailsInputOptions {
  onMailsListChange: (mailsList: EmailList) => void;
}

interface Email {
  address: string;
  valid: boolean;
}

type EmailList = Email[];

export default class EmailsInput {
  containerNode: HTMLElement;

  constructor(containerNode: HTMLElement, options: EmailsInputOptions) {
    this.containerNode = containerNode;

    this.render();
  }

  /**
   * Renders the component in the external provided container DOM node
   */
  private render() {
    const divEmailsInput = document.createElement('div');
    divEmailsInput.className = 'gct-emails-input';

    this.containerNode.appendChild(divEmailsInput);
  }
}

function add(a: number, b: number) {
  console.log(a + b);
}
