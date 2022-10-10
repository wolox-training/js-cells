import { LitElement, html } from "lit";

import equalizer from "../../equalizer.styles";
import login from "./book-login.styles";

export class bookLogin extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  static get styles() {
    return [equalizer, login];
  }

  render() {
    return html`
      <section class="card-login">
        <img src="./img/LogoWolox.png" alt="logo" class="logo-login" />
        <form class="form-login" action="/">
          <label for="email" class="form-label">Email</label>
          <input type="text" id="email" class="fill-set form-input" />
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" class="fill-set form-input" />
          <button type="submit" class="btn-login fill-set">Login</button>
        </form>
        <a href="#" class="btn-signup fill-set"> Sign Up </a>
      </section>
    `;
  }
}

customElements.define("book-login", bookLogin);
