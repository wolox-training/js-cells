import { LitElement, html } from "lit";

import "./components/book-cover";
import "./components/book-detail";
import equalizer from "./equalizer.styles";
import styles from "./application.styles";

export class AppBook extends LitElement {
  static properties = {
    data: { type: Array },
  };

  static styles = [equalizer, styles];

  constructor() {
    super();
  }

  async fetchData() {
    this.data = await (await fetch("./data/dataBooks.json")).json();
  }

  firstUpdated() {
    this.fetchData();
  }

  render() {
    return html`
      <nav class="navbar">
        <a href="#">
          <img class="logo" src="./img/LogoWolox.png" alt="logo-wolox" />
        </a>
        <a href="login.html" class="menu-item">Logout</a>
      </nav>

      <main class="main">
        <section class="cardList">
          ${this.data
            ? this.data.map(
                (book) => html`
                  <book-cover
                    img="${book.img}"
                    title="${book.title}"
                    author="${book.author}"
                  ></book-cover>
                `
              )
            : ""}

          <!-- <book-detail name="DBZ" author="Akira Toriyama"></book-detail> -->
        </section>
      </main>
    `;
  }
}

customElements.define("app-book", AppBook);
