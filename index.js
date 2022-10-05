import { LitElement, html } from "lit";

import "./components/app-navbar/app-nanbar";
import "./components/serch-books/search-books";
import "./components/book-cover/book-cover";
import "./components/book-detail/book-detail";
import equalizer from "./equalizer.styles";
import styles from "./application.styles";

export class AppBook extends LitElement {
  static properties = {
    data: { type: Array },
    dataFilter: { type: Array },
    page: { type: String },
    homePage: { type: String },
  };

  static styles = [equalizer, styles];

  constructor() {
    super();
    this.page = "home";
  }

  async fetchData() {
    this.data = await (await fetch("./data/dataBooks.json")).json();
    this.dataFilter = this.data;
  }

  firstUpdated() {
    this.fetchData();
  }

  homePage() {
    this.page = "home";
  }

  detailPage(book) {
    console.log(book);
    this.page = "detail";
    const { img, title, author, genre, editorial, yearOfPublication } = book;
    this.title = title;
    this.img = img;
    this.author = author;
    this.genre = genre;
    this.editorial = editorial;
    this.yearOfPublication = yearOfPublication;
  }

  filterBook(e) {
    console.log(e.target.shadowRoot.activeElement.value);
    this.dataFilter = [];
    let wordFilter = e?.target.shadowRoot.activeElement.value.toLowerCase();

    this.data?.map((cover) => {
      const title = cover.title.toLowerCase();
      const author = cover.author.toLowerCase();

      if (
        title.indexOf(wordFilter) !== -1 ||
        author.indexOf(wordFilter) !== -1
      ) {
        console.log("Entro a if");
        this.dataFilter = [...this.dataFilter, cover];
      }
    });

    console.log(wordFilter);
    console.log("data-filter", this.dataFilter);
  }

  render() {
    return html`
      ${this.page == "home" ? html`<app-navbar></app-navbar>` : ""}
      <main class="main">
        ${this.page == "home"
          ? html`
              <div class="searcher-container">
                <search-books @keyup="${this.filterBook}"></search-books>
              </div>
              <section class="cardList">
                ${this.dataFilter?.map(
                  (book, i) => html`
                    <book-cover
                      @click="${() => this.detailPage(book)}"
                      img="${book.img}"
                      title="${book.title}"
                      author="${book.author}"
                      bookSelected=${i}
                    ></book-cover>
                  `
                )}
              </section>
            `
          : html`
              <div class="main-detail">
                <book-detail
                  img="${this.img}"
                  title="${this.title}"
                  author="${this.author}"
                  genre="${this.genre}"
                  editorial="${this.editorial}"
                  yearOfPublication="${this.yearOfPublication}"
                ></book-detail>
              </div>
            `}
      </main>
    `;
  }
}

customElements.define("app-book", AppBook);
