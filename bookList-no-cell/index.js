import { LitElement, html } from "lit";
import dataBooks from "./data/dataBooks";

import "./components/app-navbar/app-navbar";
import "./components/book-list/book-list";
import "./components/book-detail/book-detail";

import equalizer from "./equalizer.styles";
import styles from "./application.styles";

class AppBook extends LitElement {
  static properties = {
    book: {},
    path: { attribute: false },
  };

  static styles = [equalizer, styles];

  constructor() {
    super();
    this.path = window.location.pathname;
  }

  firstUpdated() {
    window.addEventListener("popstate", () => {
      this.path = window.location.pathname;
      this.book = window.history.state;
    });
    this.book = window.history.state;
  }

  detailPage({ detail }) {
    this.book = detail;
    this.path = `/${this.book.title.replace(/ /g, "-")}`;
    window.history.pushState({ ...detail }, "", this.path);
  }

  render() {
    return html`
      ${this.path === "/"
        ? html`
            <app-navbar></app-navbar>
            <main class="main">
              <book-list
                @bookSelected=${this.detailPage}
                .books=${dataBooks.results}
              ></book-list>
            </main>
          `
        : html`
            <div class="container-detail">
              <book-detail .book=${this.book}></book-detail>
            </div>
          `}
    `;
  }
}

customElements.define("app-book", AppBook);
