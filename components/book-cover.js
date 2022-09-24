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