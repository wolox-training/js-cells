import { LitElement, html, css } from 'lit-element';

import equalizerStyles from '../../scripts/utils/equalizer.styles';
import styles from './input-book.styles';

class InputBook extends LitElement {
  static get styles() {
    return [equalizerStyles, styles];
  }

  static get properties() {
    return {
      label: { type: String },
      typeInput: { type: String },
      textError: { type: String },
      fields: { type: Object },
      validate: { type: Boolean },
      passwordValue: { type: String },
      passwordValue1: { type: String },
      passwordValue2: { type: String },
    };
  }

  constructor() {
    super();
    this.label = 'input';
    this.typeInput = 'text';
    this.textError = 'Error en validación';
    this.validate = false;
    this.passwordValue = '';
    this.passwordValue1 = '';
    this.passwordValue2 = '';
  }

  validation(e) {
    const msgError = {
      fullName:
        'El nombre / apellido no debe contener caracteres especiales ni números',
      email: 'El correo no es válido',
      password:
        'La contraseña tiene que ser de 8 a 52 dígitos, debe contener al menos una letra mayúscula y un número',
      required: 'El campo no puede estar vacío',
      noPassword: 'La contraseña no coinciden',
    };

    const regexValidation = {
      fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,52}$/,
    };

    const msgText = this.shadowRoot.querySelector('.text-error');

    switch (this.label.toLowerCase()) {
      case 'nombre':
      case 'apellido':
        if (!regexValidation.fullName.test(e?.target.value)) {
          e?.target.classList.add('input-error');
          this.textError = msgError.fullName;
          msgText.style.display = 'block';
          if (e?.target.value === null || e?.target.value.length === 0) {
            this.textError = msgError.required;
          }
          this.validate = false;
        } else {
          e?.target.classList.remove('input-error');
          msgText.style.display = 'none';
          this.validate = true;
        }

        break;

      case 'email':
      case 'correo':
        this.textContent = 'email';
        if (!regexValidation.email.test(e?.target.value)) {
          e?.target.classList.add('input-error');
          this.textError = msgError.email;
          msgText.style.display = 'block';
          if (e?.target.value === null || e?.target.value.length === 0) {
            this.textError = msgError.required;
          }
          this.validate = false;
        } else {
          e?.target.classList.remove('input-error');
          msgText.style.display = 'none';
          this.validate = true;
        }

        break;

      case 'password':
      case 'contraseña':
        this.typeInput = 'password';
        if (!regexValidation.password.test(e?.target.value)) {
          e?.target.classList.add('input-error');
          this.textError = msgError.password;
          msgText.style.display = 'block';
          if (e?.target.value === null || e?.target.value.length === 0) {
            this.textError = msgError.required;
          }
          this.validate = false;
        } else {
          e?.target.classList.remove('input-error');
          msgText.style.display = 'none';
          this.validate = true;
          this.inputValue(e?.target.value);
        }

        break;
      case 'confirmar password':
      case 'confirmar contraseña':
        this.typeInput = 'password';
        if (this.passwordValue1 !== e?.target.value) {
          this.textError = msgError.noPassword;
          msgText.style.display = 'block';
          this.validate = false;
        } else {
          e?.target.classList.remove('input-error');
          msgText.style.display = 'none';
          this.validate = true;
        }

        break;
    }

    this.getValidate();
  }

  inputValue(targetValue) {
    const event = new CustomEvent('inputValue', {
      detail: targetValue,
    });

    this.dispatchEvent(event);
  }

  getValidate() {
    const event = new CustomEvent('validate', {
      detail: this.validate,
    });

    this.dispatchEvent(event);
  }

  render() {
    return html`
      <label for="${this.label.replace(' ', '-')}" class="form-label"
        >${this.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</label
      >
      <input
        @keyup=${this.validation}
        @blur=${this.validation}
        type="${this.typeInput}"
        id="${this.label.replace(' ', '-')}"
        class="form-input"
      />
      <p class="text-error">${this.textError}</p>
    `;
  }
}
customElements.define('input-book', InputBook);
