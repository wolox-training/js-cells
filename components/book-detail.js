import { LitElement, html, css } from 'lit';

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

  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");
    * {
      box-sizing: border-box;
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    label,
    input,
    a,
    button,
    select,
    textarea {
      color: #000;
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
    h1:focus,
    h2:focus,
    h3:focus,
    h4:focus,
    h5:focus,
    h6:focus,
    p:focus,
    span:focus,
    label:focus,
    input:focus,
    a:focus,
    button:focus,
    select:focus,
    textarea:focus {
      outline: none;
    }

    select {
      -moz-appearance: none;
      -webkit-appearance: none;
    }

    table {
      border-collapse: collapse;
      table-layout: fixed;
    }

    input,
    select,
    textarea,
    button {
      border: 0;
      border-radius: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      background: transparent;
      cursor: pointer;
    }

    button::-moz-focus-inner {
      border: 0;
    }

    a {
      cursor: pointer;
      text-decoration: none;
    }
    a:focus, a:active, a:hover {
      color: #000;
      text-decoration: none;
    }

    ul,
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    ::placeholder {
      color: #999;
      opacity: 1;
    }

    * {
      font-family: "Roboto", sans-serif;
    }

    .main {
      margin: auto;
      margin: 50px auto;
      min-height: 750px;
      min-width: 376px;
      width: 100%;
    }

    @media (min-width: 1024px) {
      .main {
        width: 100%;
        padding-top: 100px;
      }
    }

    :host {
      width: 336px; 
    }

    .card-wrapper {
      background-color: #FFF;
      box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
      display: grid;
      grid-template-columns: 1fr;
      margin: 16px auto;
      position: relative;
      width: 100%;
    }
    .card-wrapper .backpage {
      font-size: 20px;
      height: 22px;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 640px;
      width: 91px;
    }
    .card-wrapper .backpage::before {
      content: url("./img/back-arrow-20.png");
      height: 20px;
      margin-right: 10px;
      width: 20px;
    }

    .card-img {
      padding: 40px 58px 16px 58px;
      position: relative;
    }
    .card-img::after {
      content: "";
      background-image: url("./img/badge.png");
      background-size: cover;
      display: block;
      height: calc(119px - 0.3*119px);
      position: absolute;
      right: 36px;
      top: 20px;
      transform: rotate(3deg);
      width: calc(95px - 0.3*95px);
    }

    .book-cover {
      width: 100%;
    }

    .card-header {
      margin-bottom: 18px;
    }
    .card-header::after {
      background-color: #BED23C;
      content: "";
      display: block;
      height: 4px;
      margin-top: 10px;
      width: 100%;
    }

    .book-title {
      color: #000;
      font-size: 24px;
      font-weight: 700;
      line-height: 38px;
    }

    .genre {
      color: #828282;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
    }

    .card-body {
      padding: 0 16px 20px 16px;
      width: 100%;
    }

    .card-content {
      margin-bottom: 25px;
    }

    .subtitle {
      color: #000;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
    }

    .card-text {
      color: #828282;
      font-size: 14px;
      line-height: 24px;
    }

    @media (min-width: 1024px) {
    .card-wrapper {
      grid-template-columns: 1fr 2fr;
      height: 416px;
      position: relative;
      width: 900px;
    }
    .card-wrapper .backpage {
      bottom: 510px;
      margin: 0;
      top: initial;
    }
    .card-img {
      padding: 22px;
    }
    .card-img::after {
      height: 119px;
      left: 220px;
      top: 0;
      width: 95px;
    }
    .book-cover {
      height: 368px;
      width: 261px;
    }
    .card-header {
      margin-bottom: 35px;
    }
    .book-title {
      color: #000;
      font-size: 32px;
      font-weight: 700;
      height: 39px;
      line-height: 38px;
      max-width: 210px;
    }
    .genre {
      color: #828282;
      font-size: 24px;
      font-weight: 700;
      height: 30px;
      line-height: 28px;
      max-width: 98px;
    }
    .card-body {
      align-self: center;
      height: 368px;
      width: 100%;
    }
    .card-content {
      margin-bottom: 30px;
    }
    .subtitle {
      color: #000;
      font-size: 20px;
      font-weight: 700;
      height: 22px;
      line-height: 24px;
    }
    .card-text {
      color: #828282;
      font-size: 20px;
      height: 22px;
      line-height: 24px;
      max-width: 274px;
    }
  }
  `;

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