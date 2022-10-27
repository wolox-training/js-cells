import { LitElement, html, css } from 'lit-element';

// import equalizer from '../../styles/equalizer.style';
import styles from './book-list.styles';

class BookList extends LitElement {
  static get is() {
    return 'book-list';
  }

  static get properties() {
    return {
      books: { type: Array },
      booksTemp: { attribute: false },
    };
  }

  constructor() {
    super();
    this.books = [{}];
    this.booksTemp = [];
  }

  static get styles() {
    return [styles];
  }

  firstUpdated() {
    this.booksTemp = [...this.books];
  }

  filterBook({ detail }) {
    this.booksTemp = detail;
  }

  HandleClickBook(book) {
    const e = new CustomEvent('bookSelected', {
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
                @click=${() => this.HandleClickBook(book)}
                .book=${book}
              ></book-cover>
            `
        )}
      </section>
    `;
  }
}
customElements.define(BookList.is, BookList);
