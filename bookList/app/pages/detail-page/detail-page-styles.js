/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
  .container-detail {
    margin: 16px auto;
    padding-top: 100px;
    width: 376px;
  }

  @media (min-width: 1024px) {
    .container-detail {
      width: 900px;
    }
  }
`;
