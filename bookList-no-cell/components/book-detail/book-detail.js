import { LitElement, html } from "lit";

import equalizer from "../../equalizer.styles";
import detailStyle from "./book-detail.styles";

export class bookDetail extends LitElement {
  static properties = {
    book: { type: Object },
  };

  constructor() {
    super();
    this.book = {
      title: "Título del libro",
      author: "Autor del libro",
      img: "",
      genre: "Género",
      editorial: "Editorial",
      yearOfPublication: "1994",
    };
  }

  static get styles() {
    return [equalizer, detailStyle];
  }

  render() {
    return html`
      <section class="card-wrapper">
        <div class="card-img">
          <img
            class="book-cover"
            src="${this.book?.img || "./img/book-cover.png"}"
            alt="${this.book?.title}"
          />
        </div>
        <div class="card-body">
          <div class="card-header">
            <h1 class="book-title">
              ${this.book?.title}
              <span class="genre">(${this.book?.genre})</span>
            </h1>
          </div>
          <div class="card-content">
            <h2 class="subtitle">Autor del libro:</h2>
            <p class="card-text">${this.book?.author}</p>
          </div>
          <div class="card-content">
            <h2 class="subtitle">Editorial:</h2>
            <p class="card-text">${this.book?.editorial}</p>
          </div>
          <div class="card-content">
            <h2 class="subtitle">Año de publicación:</h2>
            <p class="card-text">${this.book?.yearOfPublication}</p>
          </div>
        </div>
        <a class="backpage" href="/">Atrás</a>
      </section>
    `;
  }
}
customElements.define("book-detail", bookDetail);
