import { LitElement, html } from 'lit';
import styles from '../application.js';
import detail from './book-detail.styles';


export class bookDetail extends LitElement {
  static properties = {
    name: {},
    author: {},
    img: {},
    genre: {},
    editorial: {},
    yearOfPublication: {},
  };

  constructor() {
    super();
    this.name = 'Título del libro';
    this.author = 'Autor del libro';
    this.img = 'book-cover';
    this.genre = 'Género';
    this.editorial = 'Editorial';
    this.yearOfPublication = '1994';
  }

  static get styles() {
    return [ styles, detail ];
  }

  render() {
    return html`
      <section class="card-wrapper">
          <div class="card-img">
            <img
              class="book-cover"
              src="./img/${ this.img }.png"
              alt="${ this.img }"
            />
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1 class="book-title">${ this.name }</h1>
              <h6 class="genre">(${ this.genre })</h6>
            </div>
            <div class="card-content">
              <h2 class="subtitle">Autor del libro:</h2>
              <p class="card-text">${ this.author }</p>
            </div>
            <div class="card-content">
              <h2 class="subtitle">Editorial:</h2>
              <p class="card-text">${ this.editorial}</p>
            </div>
            <div class="card-content">
              <h2 class="subtitle">Año de publicación:</h2>
              <p class="card-text">${ this.yearOfPublication}</p>
            </div>
          </div>
          <a class="backpage" href="index.html">Atrás</a>
        </section>
    `;
  }
}
customElements.define('book-detail', bookDetail);
