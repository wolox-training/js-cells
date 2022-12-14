import { css } from "lit-element";

export default css`
  .card-login {
    align-items: center;
    background-color: #f4f4f4;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 2fr 1fr;
    justify-items: center;
    height: 400px;
    margin: 0 auto;
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
    height: 200px;
    width: 252px;
  }

  .fill-set {
    border-radius: 5px;
    height: 32px;
    width: 252px;
  }

  .form-input {
    background-color: #fff;
  }

  .form-label {
    font-size: 16px;
    height: 22px;
    line-height: 24px;
    width: 41px;
  }

  .btn-login,
  .btn-signup {
    line-height: 32px;
    text-align: center;
  }

  .btn-login {
    background-color: #bed23c;
    color: #fff;
    margin-top: 12px;
  }
  .btn-login::after {
    content: "";
    background-color: #a8a8a8;
    display: block;
    height: 2px;
    margin-top: 14px;
    position: absolute;
    width: 252px;
  }

  .btn-signup {
    color: #bed23c;
    margin-top: 8px;
    outline-color: #bed23c;
    outline-style: solid;
  }
`;
