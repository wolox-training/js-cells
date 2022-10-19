import { css } from 'lit-element';

export default css`
  .cardList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(198px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    grid-column-gap: 28px;
    grid-row-gap: 40px;
    justify-items: center;
    margin: 0 auto;
    max-width: 899px;
  }
`;
