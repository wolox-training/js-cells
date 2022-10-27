import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';

import dataBooks from '../../scripts/utils/data-book/dataBooks';

import '@cells-components/cells-template-paper-drawer-panel';

import styles from './home-page-styles';

class HomePage extends CellsPage {
  static get is() {
    return 'home-page';
  }

  static get properties() {
    return {
      book: {},
    };
  }

  constructor() {
    super();
  }

  detailPage({ detail }) {
    this.publish('channel_book_selected', detail);
    this.navigate('detail');
  }

  render() {
    return html` <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__header"></div>

      <div slot="app__main" class="container">
        <book-list
          @bookSelected=${this.detailPage}
          .books=${dataBooks.results}
        ></book-list>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [styles];
  }
}

window.customElements.define(HomePage.is, HomePage);
