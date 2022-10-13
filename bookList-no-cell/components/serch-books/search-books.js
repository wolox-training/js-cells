import { LitElement, html } from "lit";

import searchStyle from "./search-books.styles";

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
    return [searchStyle];
  }

  filterBook(e) {
    this.dataFilter = [];
    let wordFilter = e.target?.value.toLowerCase();

    this.dataFilter = this.data?.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      return (
        title.indexOf(wordFilter) !== -1 || author.indexOf(wordFilter) !== -1
      );
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
