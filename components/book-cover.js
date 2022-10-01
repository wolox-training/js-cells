import { LitElement, html } from "lit";

import cover from "./book-cover.styles";

export class bookCover extends LitElement {
  static properties = {
    title: {},
    author: {},
    img: {},
  };

  constructor() {
    super();
    this.title = "Título del libro";
    this.author = "Autor del libro";
    this.img = "";
  }

  static get styles() {
    return [cover];
  }

  render() {
    return html`
      <div class="cardList-wrapper" @click=${this.page}>
        <img
          class="cardList-cover"
          src="${ this.img ? this.img : './img/book-cover.png'}"
          alt="img-cover"
        />
        <h2 class="cardList-title">${this.title}</h2>
        <p class="cardList-author">${this.author}</p>
      </div>
    `;
  }

  page() {
    return html` <book-detail title="DBZ" author="Akira Toriyama"></book-detail> `;
  }
}
customElements.define("book-cover", bookCover);
