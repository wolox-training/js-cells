import { LitElement, html } from "lit";

import search from "./search-books.styles";

export class searchBooks extends LitElement {
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
    return [search];
  }

  render() {
    return html` 
      <label class="label-text" for="searcher">Buscar Libro:</label>
      <input class ="input-text" type="text"  name="searcher" /> `;
  }
}

customElements.define("search-books", searchBooks);
