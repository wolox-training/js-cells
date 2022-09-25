import { LitElement, html, css } from 'lit';

export class bookCover extends LitElement {
  static properties = {
    name: {},
    author: {},
    img: {},
  };

  constructor() {
    super();
    this.name = 'Título del libro';
    this.author = 'Autor del libro';
    this.img = 'book-cover';
  }

  static styles = css`
    * {
      box-sizing: border-box;
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    label,
    input,
    a,
    button,
    select,
    textarea {
      color: #000;
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
    h1:focus,
    h2:focus,
    h3:focus,
    h4:focus,
    h5:focus,
    h6:focus,
    p:focus,
    span:focus,
    label:focus,
    input:focus,
    a:focus,
    button:focus,
    select:focus,
    textarea:focus {
      outline: none;
    }

    select {
      -moz-appearance: none;
      -webkit-appearance: none;
    }

    table {
      border-collapse: collapse;
      table-layout: fixed;
    }

    input,
    select,
    textarea,
    button {
      border: 0;
      border-radius: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      background: transparent;
      cursor: pointer;
    }

    button::-moz-focus-inner {
      border: 0;
    }

    a {
      cursor: pointer;
      text-decoration: none;
    }
    a:focus, a:active, a:hover {
      color: #000;
      text-decoration: none;
    }

    ul,
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    ::placeholder {
      color: #999;
      opacity: 1;
    }

    * {
      font-family: "Roboto", sans-serif;
    }

    :host {
      display: block;
      width: 198px;
      height: 300px;
    }

    .cardList-wrapper {
      align-items: center;
      background-color: #FFF;
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
      margin: 0;
      padding: 0;
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

  render() {
    return html`
     <div class="cardList-wrapper">
          <img
            class="cardList-cover"
            src="./img/${ this.img }.png"
            alt="img-cover"
          />
          <h2 class="cardList-title">${this.name}</h2>
          <p class="cardList-author">${this.author}</p>
      </div>
    `;
  }
}
customElements.define('book-cover', bookCover);