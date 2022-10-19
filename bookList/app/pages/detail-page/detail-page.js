import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';

import styles from './detail-page-styles';

class DetailPage extends CellsPage {
  static get is() {
    return 'detail-page';
  }

  static get properties() {
    return {
      book: { type: Object },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    this.subscribe('channel_book_selected', (book) => {
      book;
      this.book = book;
    });
  }

  handleBack() {
    this.navigate('home');
  }

  render() {
    return html` <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__header"></div>

      <div slot="app__main" class="container">
        <div class="container-detail">
          <book-detail
            .book=${this.book}
            @handleBack=${this.handleBack}
          ></book-detail>
        </div>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [styles];
  }
}

window.customElements.define(DetailPage.is, DetailPage);
