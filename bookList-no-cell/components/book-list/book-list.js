import { LitElement, html } from "lit";

import "../book-cover/book-cover";
import "../serch-books/search-books";

import equalizer from "../../equalizer.styles";
import bookListStyle from "./book-list.styles";

export class bookList extends LitElement {
  static properties = {
    books: { type: Array },
    booksTemp: { attribute: false },
  };

  constructor() {
    super();
    this.books = [{}];
    this.booksTemp = [];
  }

  static get styles() {
    return [equalizer, bookListStyle];
  }

  firstUpdated() {
    this.booksTemp = [...this.books];
  }

  filterBook({ detail }) {
    this.booksTemp = detail;
  }

  onClickBook(book) {
    const e = new CustomEvent("bookSelected", {
      detail: book,
    });
    this.dispatchEvent(e);
  }

  render() {
    return html`
      <search-books
        @book-filter=${this.filterBook}
        .data=${this.books}
      ></search-books>
      <section class="cardList">
        ${this.booksTemp?.map(
          (book) =>
            html`
              <book-cover
                @click=${() => this.onClickBook(book)}
                .book=${book}
              ></book-cover>
            `
        )}
      </section>
    `;
  }
}

customElements.define("book-list", bookList);
