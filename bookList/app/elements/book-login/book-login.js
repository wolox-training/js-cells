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
customElements.define(BookLogin.is, BookLogin);
