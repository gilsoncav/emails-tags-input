import './styles/emails-input.scss';

interface EmailsInputOptions {
  /**
   * html string to be the content of the label
   */
  labelHTMLContent: string | null;
  inputPlaceholderText: string;
  onMailsListChange: (mailsList: EmailBlock[]) => void;
}

class EmailBlock {
  static kSVG_CLOSE_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8.80571L15.1943 8L12 11.1943L8.80571 8L8 8.80571L11.1943 12L8 15.1943L8.80571 16L12 12.8057L15.1943 16L16 15.1943L12.8057 12L16 8.80571Z" fill="black"/>
  </svg>`;

  // DOM mapping properties
  readonly node: HTMLElement;
  // Data properties
  readonly address: string;
  readonly valid: boolean;

  constructor(address: string) {
    this.address = address;
    this.valid = this.validateEmail(address);
    this.node = this.render();
  }

  private validateEmail(address: string): boolean {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.address);
  }

  private render(): HTMLElement {
    const elem = document.createElement('span');
    elem.className = 'gct-emails-input__block__';
    elem.className += !this.valid ? 'invalid' : 'valid';
    elem.textContent = this.address;

    // Generating and appending the close icon
    const closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    elem.appendChild(closeIcon);
    closeIcon.outerHTML = EmailBlock.kSVG_CLOSE_ICON;

    return elem;
  }

  //TODO implement a destroy method to remove itself from DOM
}

export default class EmailsInput {
  readonly options: EmailsInputOptions;
  // Properties mapping DOM elements
  readonly containerNode: HTMLElement;
  private _mainContainer: HTMLDivElement;
  private _label: HTMLSpanElement | null;
  private _blocksWindow: HTMLDivElement;
  private _input: HTMLInputElement;
  // Data properties
  private _emailList: EmailBlock[];

  constructor(containerNode: HTMLElement, options: EmailsInputOptions) {
    this.options = options;
    this._emailList = [];
    this.containerNode = containerNode;
    // ATTENTION: the render methods tends to position elements in the DOM
    // and as so, the order matters. Some rendering counts on previous elements
    // being already in place.
    this._mainContainer = this.renderMainContainer();
    if (this.options.labelHTMLContent !== null) {
      this._label = this.renderLabel();
    } else {
      this._label = null;
    }
    this._blocksWindow = this.renderBlocksWindow();
    this._input = this.renderInput();
  }

  get emailList() {
    return this._emailList;
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
    this._mainContainer.appendChild(elem);

    return elem;
  }

  private renderBlocksWindow(): HTMLDivElement {
    const elem = document.createElement('div');
    elem.className = 'gct-emails-input__blocks-window';
    this._mainContainer.appendChild(elem);

    return elem;
  }

  private renderInput(): HTMLInputElement {
    const elem = document.createElement('input');
    elem.id = 'input';
    elem.type = 'email';
    elem.placeholder = this.options.inputPlaceholderText;
    this._blocksWindow.appendChild(elem);
    elem.addEventListener('keypress', (evt) => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.handleCreateEmailBlock((<HTMLInputElement>evt.currentTarget).value);
      }
    });

    return elem;
  }

  addEmailBlock(address: string) {
    const emailBlock = new EmailBlock(address);

    this._input.insertAdjacentElement('beforebegin', emailBlock.node);
  }

  handleCreateEmailBlock(address: string) {
    this.addEmailBlock(address);
  }
}
