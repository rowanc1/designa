import { Component, h, Host, Prop } from '@stencil/core';
export class Error {
  constructor() {
    /* public static readonly elementName = 'stencila-code-error' */
    /**
     * Determines whether the stacktrace is visible or not
     */
    this.open = false;
    /**
     * The severity of the error message
     */
    this.kind = 'warning';
  }
  render() {
    return (h(Host, { kind: this.kind },
      h("div", { class: "overview" },
        h("stencila-icon", { icon: "alert" }),
        h("slot", null)),
      this.hasStacktrace && (h("stencila-details", null,
        h("span", { slot: "summary" }, "View the stacktrace"),
        h("slot", { name: "stacktrace" })))));
  }
  static get is() { return "stencila-code-error"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["error.css"],
    "material": ["error.css"]
  }; }
  static get styleUrls() { return {
    "default": ["error.css"],
    "material": ["error.css"]
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
        "text": "Determines whether the stacktrace is visible or not"
      },
      "attribute": "open",
      "reflect": false,
      "defaultValue": "false"
    },
    "kind": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'incapable' | 'warning' | 'error'",
        "resolved": "\"error\" | \"incapable\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The severity of the error message"
      },
      "attribute": "kind",
      "reflect": false,
      "defaultValue": "'warning'"
    },
    "hasStacktrace": {
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
        "text": "The severity of the error message"
      },
      "attribute": "has-stacktrace",
      "reflect": false
    }
  }; }
}
