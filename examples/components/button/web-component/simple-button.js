class SimpleButton extends HTMLElement {
  static observedAttributes = ['disabled'];

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = '<button type="button"><slot></slot></button>';
    this.button = root.querySelector('button');

    this.button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('button-activate', {
        bubbles: true,
        composed: true,
      }));
    });
  }

  connectedCallback() {
    this.syncDisabled();
  }

  attributeChangedCallback() {
    this.syncDisabled();
  }

  syncDisabled() {
    this.button.disabled = this.hasAttribute('disabled');
  }
}

customElements.define('simple-button', SimpleButton);

// Example:
// <simple-button>Save</simple-button>
// document.querySelector('simple-button')
//   .addEventListener('button-activate', () => console.log('Saved'));
