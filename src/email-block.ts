import './styles/emails-input.scss';

export interface EmailBlockProps {
  onDelete: (emailBlockToBeDeleted: EmailBlock, notifyChange: boolean) => void;
}

export class EmailBlock {
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
    // const closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const closeIcon = document.createElement('svg');
    closeIcon.innerHTML = EmailBlock.kSVG_CLOSE_ICON;
    closeIconDiv.appendChild(closeIcon);
    closeIconDiv.style.display = 'flex';
    this.mainContainer.appendChild(closeIconDiv);

    closeIconDiv.addEventListener('mousedown', (evt) => {
      this.props.onDelete(this, true);
    });

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

  destroy = () => {
    this.mainContainer.parentNode?.removeChild(this.mainContainer);
  };
}
