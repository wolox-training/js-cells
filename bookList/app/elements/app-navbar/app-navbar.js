import { LitElement, html, css } from 'lit-element';

class AppNavbar extends LitElement {
  static get is() {
    return 'app-navbar';
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
customElements.define(AppNavbar.is, AppNavbar);
