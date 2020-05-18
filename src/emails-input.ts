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
      this._handleCreateEmailBlock(this._input.value);
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

    return elem;
  };

  private _renderInput = (): HTMLInputElement => {
    const elem = document.createElement('input');
    elem.type = 'text';
    elem.placeholder = this.props.inputPlaceholderText;
    this._blocksWindow.appendChild(elem);
    elem.addEventListener('keypress', (evt) => {
      if (evt.key === 'Enter' || evt.key === ',') {
        evt.preventDefault();
        this._handleCreateEmailBlock(this._input.value);
      }
    });

    return elem;
  };

  addEmailBlock = (address: string) => {
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

  removeAll = () => {
    this._emailBlockList.forEach((eB) => this._removeEmailBlock(eB));
  };

  private _handleCreateEmailBlock = (address: string) => {
    try {
      this.addEmailBlock(address);
      this._input.value = '';
      this._input.focus();
    } catch (e) {
      // TODO insert a mechanism to just log error in dev builds
      console.log('gct-emails-input ERROR: ', e);
    }
  };

  replaceAll = (emailAddressList: string[] = []) => {
    this.removeAll();
    emailAddressList.forEach((address) => this._handleCreateEmailBlock(address));
  };

  private _handleDeleteEmailBlock = (emailBlockToBeDeleted: EmailBlock) => {
    console.log('EmailsInput._handleDeleEmailBlock(...)', emailBlockToBeDeleted);
    this._removeEmailBlock(emailBlockToBeDeleted);
    this._input.focus();
  };
}
