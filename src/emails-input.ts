import './styles/emails-input.scss';

interface EmailBlockProps {
  onDelete: (emailBlockToBeDeleted: EmailBlock) => void;
}

class EmailBlock {
  static kSVG_CLOSE_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8.80571L15.1943 8L12 11.1943L8.80571 8L8 8.80571L11.1943 12L8 15.1943L8.80571 16L12 12.8057L15.1943 16L16 15.1943L12.8057 12L16 8.80571Z" fill="black"/>
  </svg>`;

  // DOM mapping properties
  readonly mainContainer: HTMLElement;
  private readonly _closeIconDiv: HTMLDivElement;
  // Data properties
  readonly address: string;
  readonly valid: boolean;
  readonly props: EmailBlockProps;

  constructor(address: string, props: EmailBlockProps) {
    this.props = props;
    if (address === '') {
      throw new Error('cannot create a EmailBlock with an empty email address');
    }
    this.address = address;
    this.valid = this._validateEmail(address);
    this.mainContainer = this._renderMainContainer();
    this._closeIconDiv = this._renderCloseIconDiv();
  }

  private _validateEmail = (address: string): boolean => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.address);
  };

  private _renderCloseIconDiv = (): HTMLDivElement => {
    // Generating and appending the close icon
    const closeIconDiv = document.createElement('div');
    const closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    closeIconDiv.appendChild(closeIcon);
    closeIcon.outerHTML = EmailBlock.kSVG_CLOSE_ICON;
    this.mainContainer.appendChild(closeIconDiv);

    closeIconDiv.addEventListener('click', (evt) => this._destroy());

    return closeIconDiv;
  };

  private _renderMainContainer = (): HTMLElement => {
    const elem = document.createElement('div');
    elem.className = 'gct-emails-input__block__';
    elem.className += !this.valid ? 'invalid' : 'valid';

    const span = document.createElement('span');
    span.textContent = this.address;

    elem.appendChild(span);

    return elem;
  };

  private _destroy = () => {
    this.props.onDelete(this);
    this.mainContainer.parentNode?.removeChild(this.mainContainer);
  };
}

interface EmailsInputProps {
  /**
   * html string to be the content of the label
   */
  labelHTMLContent?: string | null;
  inputPlaceholderText: string;
  onMailsListChange?: (mailsList: EmailBlock[]) => void;
}

export default class EmailsInput {
  readonly props: EmailsInputProps;
  // Properties mapping DOM elements
  readonly containerNode: HTMLElement;
  private _mainContainer: HTMLDivElement;
  private _label: HTMLSpanElement | null;
  private _blocksWindow: HTMLDivElement;
  private _input: HTMLInputElement;
  // Data properties
  private _emailList: EmailBlock[];

  constructor(
    containerNode: HTMLElement,
    props: EmailsInputProps = { inputPlaceholderText: 'add more emails...' }
  ) {
    this.props = props;
    this._emailList = [];
    this.containerNode = containerNode;
    // ATTENTION: the render methods tends to position elements in the DOM
    // and as so, the order matters. Some rendering counts on previous elements
    // being already in place.
    this._mainContainer = this._renderMainContainer();
    if (this.props.labelHTMLContent !== null) {
      this._label = this._renderLabel();
    } else {
      this._label = null;
    }
    this._blocksWindow = this._renderBlocksWindow();
    this._input = this._renderInput();

    // Making sure that the node passed to be the mounting point has a flex display mode set
    containerNode.style.display = 'flex';
  }

  get emailList() {
    return this._emailList;
  }

  private _renderMainContainer = (): HTMLDivElement => {
    const elem = document.createElement('div');
    elem.className = 'gct-emails-input';
    this.containerNode.appendChild(elem);

    return elem;
  };

  private _renderLabel = (): HTMLSpanElement => {
    const elem = document.createElement('label');
    elem.innerHTML = this.props.labelHTMLContent ?? '';
    this._mainContainer.appendChild(elem);

    return elem;
  };

  private _renderBlocksWindow = (): HTMLDivElement => {
    const elem = document.createElement('div');
    elem.className = 'gct-emails-input__blocks-window';
    this._mainContainer.appendChild(elem);

    // elem.addEventListener('click', (evt) => {
    //   this._input.focus();
    // });

    return elem;
  };

  private _renderInput = (): HTMLInputElement => {
    const elem = document.createElement('input');
    elem.id = 'input';
    elem.type = 'text';
    elem.placeholder = this.props.inputPlaceholderText;
    this._blocksWindow.appendChild(elem);
    elem.addEventListener('keypress', (evt) => {
      if (evt.key === 'Enter' || evt.key === ',') {
        evt.preventDefault();
        this._handleCreateEmailBlock((<HTMLInputElement>evt.currentTarget).value);
      }
    });

    elem.addEventListener('focusout', (evt) => {
      this._handleCreateEmailBlock((<HTMLInputElement>evt.currentTarget).value);
    });

    return elem;
  };

  addEmailBlock = (address: string) => {
    try {
      const emailBlock = new EmailBlock(address, {
        onDelete: this._handleDeleteEmailBlock,
      });
      this._emailList.push(emailBlock);

      this._input.insertAdjacentElement('beforebegin', emailBlock.mainContainer);
    } catch (e) {
      // TODO insert a mechanism to just log error in dev builds
      console.log('gct-emails-input ERROR: ', e);
    }
  };

  private _removeEmailBlock(emailBlock: EmailBlock) {
    this._emailList = this._emailList.filter((eB) => eB.address !== emailBlock.address);
  }

  private _handleCreateEmailBlock = (address: string) => {
    this.addEmailBlock(address);
    this._input.value = '';
    this._input.focus();
  };

  private _handleDeleteEmailBlock = (emailBlockToBeDeleted: EmailBlock) => {
    this._removeEmailBlock(emailBlockToBeDeleted);
  };
}
