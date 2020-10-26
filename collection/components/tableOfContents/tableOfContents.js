import { Component, h, Prop } from '@stencil/core';
import tocbot from 'tocbot';
export class TableOfContents {
  constructor() {
    /**
     * Where to grab the headings to build the table of contents.
     */
    this.contentSelector = 'article';
    /**
     * Which headings to grab inside of the contentSelector element.
     */
    this.headingSelector = 'h1, h2, h3, h4';
    this.initTOC = () => {
      tocbot.init({
        tocSelector: '.toc',
        positionFixedSelector: '.toc',
        contentSelector: this.contentSelector,
        headingSelector: this.headingSelector,
      });
    };
  }
  componentDidLoad() {
    if (document.readyState === 'interactive' ||
      (document.readyState === 'complete' &&
        document.querySelector(this.contentSelector))) {
      this.initTOC();
    }
    else {
      document.addEventListener('DOMContentLoaded', this.initTOC);
    }
  }
  disconnectedCallback() {
    document.removeEventListener('DOMContentLoaded', this.initTOC);
  }
  render() {
    return h("nav", { class: "toc" });
  }
  static get is() { return "stencila-toc"; }
  static get originalStyleUrls() { return {
    "default": ["tableOfContents.css"],
    "material": ["tableOfContents.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["tableOfContents.css"],
    "material": ["tableOfContents.material.css"]
  }; }
  static get properties() { return {
    "contentSelector": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Where to grab the headings to build the table of contents."
      },
      "attribute": "content-selector",
      "reflect": false,
      "defaultValue": "'article'"
    },
    "headingSelector": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which headings to grab inside of the contentSelector element."
      },
      "attribute": "heading-selector",
      "reflect": false,
      "defaultValue": "'h1, h2, h3, h4'"
    }
  }; }
}
TableOfContents.elementName = 'stencila-toc';
