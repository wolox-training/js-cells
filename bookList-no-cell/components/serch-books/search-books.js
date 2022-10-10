import { LitElement, html } from "lit";

import search from "./search-books.styles";

export class searchBooks extends LitElement {
  static properties = {
    data: { type: Array },
    dataFilter: { type: Array },
  };

  constructor() {
    super();
    this.word = "";
    this.data = [{}];
    this.dataFilter = [{}];
  }

  static get styles() {
    return [search];
  }

  filterBook(e) {
    this.dataFilter = [];
    let wordFilter = e.target?.value.toLowerCase();

    this.data?.map((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();

      if (
        title.indexOf(wordFilter) !== -1 ||
        author.indexOf(wordFilter) !== -1
      ) {
        this.dataFilter = [...this.dataFilter, book];
      }
    });

    const event = new CustomEvent("book-filter", {
      detail: this.dataFilter,
    });

    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="searcher-container">
        <input
          @keyup="${this.filterBook}"
          class="input-text"
          type="text"
          id="searcher"
          placeholder="Buscar libro"
        />
      </div>
    `;
  }
}

customElements.define("search-books", searchBooks);
