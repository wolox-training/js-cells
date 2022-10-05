import { LitElement, html } from "lit";

import equalizer from '../../equalizer.styles';
import cover from "./book-cover.styles";

export class bookCover extends LitElement {
  static properties = {
    title: {},
    author: {},
    img: {},
    bookSelected: { type: Number},
  };

  constructor() {
    super();
    this.title = "Título del libro";
    this.author = "Autor del libro";
    this.img = "";
  }

  static get styles() {
    return [equalizer, cover];
  }

  render() {
    return html`
      <div class="cardList-wrapper">
        <img
          class="cardList-cover"
          src="${this.img ? this.img : "./img/book-cover.png"}"
          alt="img-cover"
        />
        <h2 class="cardList-title">${this.title}</h2>
        <p class="cardList-author">${this.author}</p>
      </div>
    `;
  }
}

customElements.define("book-cover", bookCover);
