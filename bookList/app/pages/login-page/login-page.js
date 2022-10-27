import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';

import styles from './login-page-styles';
import equalizerStyles from '../../scripts/utils/equalizer.styles';

class LoginPage extends CellsPage {
  static get is() {
    return 'login-page';
  }

  static get properties() {
    return {
      book: {},
      isEmail: { type: Boolean },
      isPassword: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  detailPage({ detail }) {
    this.publish('channel_book_selected', detail);
    this.navigate('detail');
  }

  homePage() {
    this.navigate('home');
  }

  registerPage() {
    this.navigate('register');
  }

  sendData(e) {
    e.preventDefault();
    const errorSubmit = this.shadowRoot.querySelector('.errorSubmit');

    if (!this.isEmail || !this.isPassword) {
      errorSubmit.style.display = 'block';
    } else {
      errorSubmit.style.display = 'none';
      this.homePage();
    }
  }

  validateEmail({ detail }) {
    this.isEmail = detail;
  }

  validatePassword({ detail }) {
    this.isPassword = detail;
  }

  render() {
    return html` <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__header"></div>

      <div slot="app__main" class="container">
        <section class="card-login">
          <img
            src="/app/resources/img/LogoWolox.png"
            alt="logo"
            class="logo-login"
          />
          <div>
            <form class="form-login" @submit="${this.sendData}">
              <input-book
                label="email"
                @validate=${this.validateEmail}
              ></input-book>
              <input-book
                label="password"
                @validate=${this.validatePassword}
              ></input-book>
              <button type="submit" class="btn-primary fill-set">Login</button>
            </form>
            <button class="btn-secondary fill-set" @click=${this.registerPage}>
              Sign Up
            </button>
          </div>
          <p class="errorSubmit">El email o password son incorrectos</p>
        </section>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [equalizerStyles, styles];
  }
}

window.customElements.define(LoginPage.is, LoginPage);
