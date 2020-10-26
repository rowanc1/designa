import { Component, h, Prop, State, Host } from '@stencil/core';
export class Details {
  constructor() {
    /**
     * Determines whether the contents are visible or not
     */
    this.open = false;
    this.isOpen = this.open ? this.open : false;
    this.clickHandler = (e) => {
      e.preventDefault();
      this.isOpen = !this.isOpen;
    };
  }
  render() {
    return (h(Host, { isOpen: this.isOpen ? 'true' : 'false', onClick: this.clickHandler },
      h("slot", { name: "summary" }),
      h("div", { class: { contents: true, hidden: !this.isOpen } },
        h("slot", null)),
      h("stencila-icon", { icon: "arrow-down-s", class: "disclosure-toggle" })));
  }
  static get is() { return "stencila-details"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["details.css"],
    "material": ["details.css"]
  }; }
  static get styleUrls() { return {
    "default": ["details.css"],
    "material": ["details.css"]
  }; }
  static get properties() { return {
    "open": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Determines whether the contents are visible or not"
      },
      "attribute": "open",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "isOpen": {}
  }; }
}
Details.elementName = 'stencila-details';
