import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';

import styles from './register-page-styles';
import equalizerStyles from '../../scripts/utils/equalizer.styles';

class RegisterPage extends CellsPage {
  static get is() {
    return 'register-page';
  }

  static get properties() {
    return {
      book: {},
      isName: { type: Boolean },
      isLastname: { type: Boolean },
      isEmail: { type: Boolean },
      isPassword: { type: Boolean },
      isPassword2: { type: Boolean },
      passwordValue: { type: String },
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

  LoginPage() {
    this.navigate('login');
  }

  sendData(e) {
    e.preventDefault();
    const errorSubmit = this.shadowRoot.querySelector('.errorSubmit');

    if (
      !this.isName ||
      !this.isLastname ||
      !this.isEmail ||
      !this.isPassword ||
      !this.isPassword2
    ) {
      errorSubmit.style.display = 'block';
    } else {
      errorSubmit.style.display = 'none';
    }
  }

  validateName({ detail }) {
    this.isName = detail;
  }

  validatelastname({ detail }) {
    this.isLastname = detail;
  }

  validateEmail({ detail }) {
    this.isEmail = detail;
  }

  validatePassword({ detail }) {
    this.isPassword = detail;
  }

  validatePassword2({ detail }) {
    this.isPassword2 = detail;
  }

  firstPassword({ detail }) {
    this.passwordValue = detail;
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
                label="nombre"
                @validate=${this.validateName}
              ></input-book>
              <input-book
                label="apellido"
                @validate=${this.validatelastname}
              ></input-book>
              <input-book
                label="email"
                @validate=${this.validateEmail}
              ></input-book>
              <input-book
                label="password"
                @validate=${this.validatePassword}
                @inputValue=${this.firstPassword}
              ></input-book>
              <input-book
                label="confirmar password"
                @validate=${this.validatePassword2}
                passwordValue1=${this.passwordValue}
              ></input-book>
              <button type="submit" class="btn-primary fill-set">
                Sign Up
              </button>
            </form>
            <button class="btn-secondary fill-set" @click=${this.LoginPage}>
              Login
            </button>
          </div>
          <p class="errorSubmit">Todos los campos son requeridos</p>
        </section>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [equalizerStyles, styles];
  }
}

window.customElements.define(RegisterPage.is, RegisterPage);
