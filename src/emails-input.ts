import './styles/emails-input.scss';
import { EmailBlock } from './email-block';

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
  private _emailBlockList: EmailBlock[];

  constructor(
    containerNode: HTMLElement,
    props: EmailsInputProps = { inputPlaceholderText: 'add more emails...' }
  ) {
    this.props = props;
    this._emailBlockList = [];
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

  get emailBlockList() {
    return this._emailBlockList;
  }

  get emailList() {
    return this._emailBlockList.map((eB) => eB.address);
  }

  get validEmailsCount() {
    return this._emailBlockList.filter((eB) => eB.valid).length;
  }

  get invalidEmailsCount() {
    return this._emailBlockList.filter((eB) => !eB.valid).length;
  }

  get emailsCount() {
    return this._emailBlockList.length;
  }

  private _renderMainContainer = (): HTMLDivElement => {
    const elem = document.createElement('div');
    elem.className = 'gct-emails-input';
    this.containerNode.appendChild(elem);

    elem.addEventListener('focusin', (evt) => {});

    elem.addEventListener('focusout', (evt) => {
      this._handleCreateEmailBlock(this._input.value, true);
    });

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

    elem.addEventListener('click', (evt) => {
      this._input.focus();
    });

    return elem;
  };

  private _renderInput = (): HTMLInputElement => {
    const elem = document.createElement('input');
    elem.className = 'gct-emails-input__input-text';
    elem.type = 'text';
    elem.placeholder = this.props.inputPlaceholderText;
    this._blocksWindow.appendChild(elem);

    elem.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ',') {
        evt.preventDefault();
        this._handleCreateEmailBlock(this._input.value, true);
      }
    });
    elem.addEventListener('paste', (evt) => {
      const rawText = evt.clipboardData?.getData('text');
      const tokens = this._tokensFromRawText(rawText ?? '');

      this.addAll(tokens);
      evt.preventDefault();
    });

    return elem;
  };

  private _tokensFromRawText = (rawText: string) => {
    const regex = /[, ]*([\w@\.]+)[, ]*/g;
    const tokens = [];
    let execResult;

    while ((execResult = regex.exec(rawText)) !== null) {
      tokens.push(execResult[1]);
    }

    return tokens;
  };

  /**
   * Add a single new email by the address
   */
  addEmail = (address: string) => {
    this._handleCreateEmailBlock(address, true);
  };

  private _addEmailBlock = (address: string) => {
    const emailBlock = new EmailBlock(address, {
      onDelete: this._handleDeleteEmailBlock,
    });
    this._emailBlockList.push(emailBlock);

    this._input.insertAdjacentElement('beforebegin', emailBlock.mainContainer);
  };

  private _removeEmailBlock = (emailBlock: EmailBlock) => {
    this._emailBlockList = this._emailBlockList.filter(
      (eB) => eB.address !== emailBlock.address
    );
    emailBlock.destroy();
  };

  /**
   * Removes all the current emails and cleans the component
   */
  removeAll = () => {
    this._emailBlockList.forEach((eB) => this._handleDeleteEmailBlock(eB, false));
    if (this.props.onMailsListChange) this.props.onMailsListChange(this._emailBlockList);
  };

  /**
   * Internal state altering handler
   *
   * TODO can improve to observe the 'source of truth' that is the data property instead of handlers
   */
  private _handleCreateEmailBlock = (address: string, notifyObserver: boolean) => {
    try {
      this._addEmailBlock(address);
      this._input.value = '';
      this._input.focus();
      if (notifyObserver && this.props.onMailsListChange)
        this.props.onMailsListChange(this.emailBlockList);
    } catch (e) {
      // TODO insert a mechanism to just log error in dev builds
    }
  };

  /**
   * Replace the current email list with the provided list of new email addresses
   */
  replaceAll = (emailAddressList: string[] = []) => {
    this.removeAll();
    emailAddressList.forEach((address) => this._handleCreateEmailBlock(address, false));
    if (this.props.onMailsListChange) this.props.onMailsListChange(this._emailBlockList);
  };

  addAll = (emailAddressList: string[] = []) => {
    emailAddressList.forEach((address) => this._handleCreateEmailBlock(address, false));
    if (this.props.onMailsListChange) this.props.onMailsListChange(this._emailBlockList);
  };

  /**
   * Internal state altering handler
   *
   * TODO can improve to observe the 'source of truth' that is the data property instead of handlers
   */
  private _handleDeleteEmailBlock = (
    emailBlockToBeDeleted: EmailBlock,
    notifyObserver: boolean
  ) => {
    this._removeEmailBlock(emailBlockToBeDeleted);
    this._input.focus();
    if (notifyObserver && this.props.onMailsListChange)
      this.props.onMailsListChange(this.emailBlockList);
  };
}
