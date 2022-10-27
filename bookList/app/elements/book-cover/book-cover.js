import { LitElement, html, css } from 'lit-element';

// import equalizer from '../../styles/equalizer.styles';
import styles from './book-cover.styles';

class BookCover extends LitElement {
  static get is() {
    return 'book-cover';
  }

  static get properties() {
    return {
      book: { type: Object },
    };
  }

  constructor() {
    super();
    this.book = {
      title: 'Título del libro',
      author: 'Autor del libro',
      img: '',
    };
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="cardList-wrapper">
        <img
          class="cardList-cover"
          src="${this.book?.img || '/app/resources/img/book-cover.png'}"
          alt="${this.book?.title}"
        />
        <h2 class="cardList-title">${this.book?.title}</h2>
        <p class="cardList-author">${this.book?.author}</p>
      </div>
    `;
  }
}

customElements.define(BookCover.is, BookCover);
