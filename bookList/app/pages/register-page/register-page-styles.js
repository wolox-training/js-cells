/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`.container {
  margin: 40px auto;
  display: grid;
  place-content: center;
}

.card-login {
  align-items: center;
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 12fr;
  justify-items: center;
  min-height: 400px;
  padding: 20px 0;
  position: relative;
  width: 300px;
}

.card-login::before {
  content: "";
  background-color: #00adee;
  height: 8px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}

.logo-login {
  display: block;
  height: 70px;
  width: 212px;
}

.form-login {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  width: 252px;
}

.fill-set {
  border-radius: 5px;
  height: 32px;
  width: 252px;
}

.btn-primary,
.btn-secondary {
  line-height: 32px;
  text-align: center;
}

.btn-primary {
  background-color: #bed23c;
  color: #fff;
  margin-top: 12px;
}

.btn-primary::after {
  content: "";
  background-color: #a8a8a8;
  display: block;
  height: 2px;
  margin-top: 12px;
  position: absolute;
  width: 252px;
}

.btn-secondary {
  color: #bed23c;
  margin-top: 28px;
  outline-color: #bed23c;
  outline-style: solid;
}

.errorSubmit {
  color: #eb5b5b;
  display: none;
  margin: 4px;
  text-align: center;
}
`;