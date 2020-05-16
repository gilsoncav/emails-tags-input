import './styles/emails-input.scss';

interface EmailsInputOptions {
  /**
   * html string to be the content of the label
   */
  labelHTMLContent: string | null;
  onMailsListChange: (mailsList: EmailList) => void;
}

interface Email {
  address: string;
  valid: boolean;
}

type EmailList = Email[];

export default class EmailsInput {
  readonly options: EmailsInputOptions;
  // Properties mapping DOM elements
  readonly containerNode: HTMLElement;
  private mainContainer: HTMLDivElement;
  private label: HTMLSpanElement | null;
  private blocksWindow: HTMLDivElement;

  constructor(containerNode: HTMLElement, options: EmailsInputOptions) {
    this.options = options;
    this.containerNode = containerNode;
    this.mainContainer = this.renderMainContainer();
    if (this.options.labelHTMLContent !== null) {
      this.label = this.renderLabel();
    } else {
      this.label = null;
    }
    this.blocksWindow = this.renderBlocksWindow();
  }

  private renderMainContainer(): HTMLDivElement {
    const elem = document.createElement('div');
    elem.className = 'gct-emails-input';
    this.containerNode.appendChild(elem);

    return elem;
  }

  private renderLabel(): HTMLSpanElement {
    const elem = document.createElement('label');
    elem.innerHTML = this.options.labelHTMLContent ?? '';
    this.mainContainer.appendChild(elem);

    return elem;
  }

  private renderBlocksWindow(): HTMLDivElement {
    const elem = document.createElement('div');
    elem.id = 'blocks-window';
    this.mainContainer.appendChild(elem);

    return elem;
  }
}

function add(a: number, b: number) {
  console.log(a + b);
}
