import { css } from 'lit-element';

export default css`
  .form-input {
    background-color: #fff;
    border-radius: 5px;
    height: 32px;
    margin-bottom: 16px;
    padding: 0 8px;
    width: 252px;
  }

  .form-label {
    font-size: 16px;
    height: 22px;
    line-height: 24px;
    margin-bottom: 8px;
    max-width:250px

  }

  .input-error {
    border: 1px solid #eb5b5b;
  }

  .text-error {
    color: #eb5b5b;
    display: none;
    margin-bottom: 8px;
    text-align: center;
  }
`;
