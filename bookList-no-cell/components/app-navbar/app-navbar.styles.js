import { css } from "lit-element";

export default css`
  :host {
    width: 100%;
  }

  .navbar {
    background-color: #fff;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 70px;
    justify-items: center;
    margin: 0 auto;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .logo {
    align-self: center;
    height: 70px;
    width: 212px;
    display: block;
  }

  .menu-item {
    align-self: center;
    color: #000;
    display: block;
    font-size: 18px;
    height: 18px;
    line-height: 21px;
    text-decoration: none;
    width: 63px;
  }
`;
