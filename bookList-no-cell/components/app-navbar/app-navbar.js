import { LitElement, html } from "lit";

import navbar from "./app-navbar.styles";

export class appNavbar extends LitElement {
  static properties = {
  };

  constructor() {
    super();
  }

  static get styles() {
    return [navbar];
  }

  render() {
    return html`
      <nav class="navbar">
        <a href="/">
          <img class="logo" src="./img/LogoWolox.png" alt="logo-wolox" />
        </a>
        <a href="login.html" class="menu-item">Logout</a>
      </nav>
    `;
  }
}

customElements.define("app-navbar", appNavbar);
