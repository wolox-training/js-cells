import { LitElement, html, css } from 'lit-element';

import equalizerStyles from '../../scripts/utils/equalizer.styles';
import styles from './book-detail.styles';

class BookDetail extends LitElement {
  static get is() {
    return 'book-detail';
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
      genre: 'Género',
      editorial: 'Editorial',
      yearOfPublication: '1994',
    };
  }

  static get styles() {
    return [equalizerStyles, styles];
  }

  handleBack() {
    const e = new CustomEvent('handleBack');
    this.dispatchEvent(e);
  }


  render() {
    return html`
      <section class="card-wrapper">
        <div class="card-img">
          <img
            class="book-cover"
            src="${this.book?.img || '/dist/resources/img/book-cover.png'}"
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
        <div class="backpage" @click = ${this.handleBack}>Atrás</div>
      </section>
    `;
  }
}
customElements.define(BookDetail.is, BookDetail);
