import { LitElement, html } from "lit";

import equalizer from "../../equalizer.styles";
import cover from "./book-cover.styles";

export class bookCover extends LitElement {
  static properties = {
    book: { type: Object },
  };

  constructor() {
    super();
    this.book = {
      title: "Título del libro",
      author: "Autor del libro",
      img: "",
    };
  }

  static get styles() {
    return [equalizer, cover];
  }

  render() {
    return html`
      <div class="cardList-wrapper">
        <img
          class="cardList-cover"
          src="${this.book?.img ? this.book?.img : "./img/book-cover.png"}"
          alt="${this.book?.title}"
        />
        <h2 class="cardList-title">${this.book?.title}</h2>
        <p class="cardList-author">${this.book?.author}</p>
      </div>
    `;
  }
}

customElements.define("book-cover", bookCover);
