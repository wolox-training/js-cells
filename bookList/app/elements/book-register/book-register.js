import { LitElement, html, css } from 'lit-element';

import styles from './book-register.styles';

class BookRegister extends LitElement {
  static get is() {
    return 'book-register';
  }

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {};
  }

  render() {
    return html`template`;
  }
}
customElements.define(BookRegister.is, BookRegister);
