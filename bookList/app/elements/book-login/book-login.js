import { LitElement, html, css } from 'lit-element';

class BookLogin extends LitElement {
  static get is() {
    return 'book-login';
  }

  static get styles() {
    return css`...`;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`template`;
  }
}
customElements.define(BookLogin.is, BookLogin);
