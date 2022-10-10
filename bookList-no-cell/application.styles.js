/* eslint-disable no-unused-vars */
import { css } from "lit-element";

export default css`
  .main {
    margin: 20px auto;
    min-height: 750px;
    min-width: 376px;
    width: 100%;
  }

  .container-detail {
    margin: 0 auto;
    padding-top: 100px;
    width: 376px;
  }

  @media (min-width: 1024px) {
    .main {
      width: 900px;
    }

    .container-detail {
      width: 900px;
    }
  }
`;
