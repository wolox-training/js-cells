import { LitElement, html } from 'lit';
import styles from '../application.js';
import cover from './book-cover.styles';

export class bookCover extends LitElement {
  static properties = {
    name: {},
    author: {},
    img: {},
  };

  constructor() {
    super();
    this.name = 'Título del libro';
    this.author = 'Autor del libro';
    this.img = 'book-cover';
  }

  static get styles() {
    return [ styles, cover ];
  }

  render() {
    return html`
     <div class="cardList-wrapper">
          <img
            class="cardList-cover"
            src="./img/${ this.img }.png"
            alt="img-cover"
          />
          <h2 class="cardList-title">${this.name}</h2>
          <p class="cardList-author">${this.author}</p>
      </div>
    `;
  }
}
customElements.define('book-cover', bookCover);