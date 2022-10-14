import { LitElement, html } from "lit";

import navbarStyle from "./app-navbar.styles";

class appNavbar extends LitElement {
  static get styles() {
    return [navbarStyle];
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
