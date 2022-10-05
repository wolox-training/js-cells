import { css } from "lit-element";

export default css`
  :host {
    display: block;
    width: 198px;
    height: 300px;
  }

  .cardList-wrapper {
    align-items: center;
    background-color: #ffffff;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 12fr repeat(3, 1fr);
    justify-items: center;
    height: 100%;
    transition: all 0.5s;
    width: 100%;
  }

  .cardList-wrapper:hover {
    transform: scale(1.2);
  }

  .cardList-cover {
    display: block;
    height: 200px;
    width: 142px;
  }

  .cardList-title {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    height: 24px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 142px;
  }

  .cardList-author {
    color: #828282;
    font-size: 14px;
    margin: 0;
    padding: 0;
    width: 142px;
  }
`;
