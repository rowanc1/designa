import { Component, h, Prop } from '@stencil/core';
import { isA } from '@stencila/schema';
const parseCreativeWorks = (c, path = '/') => (h("ul", { class: "toc-list" }, c.map((part) => {
  var _a, _b, _c;
  return part.parts !== undefined ? (h("li", null,
    h("details", { open: true },
      h("summary", null, part.name),
      parseCreativeWorks(part.parts, ((_a = part.name) !== null && _a !== void 0 ? _a : '') + '/')))) : (h("li", null,
    h("a", { class: "toc-link", href: path + ((_b = part.name) !== null && _b !== void 0 ? _b : '') },
      part.name,
      " (",
      h("code", null, path + ((_c = part.name) !== null && _c !== void 0 ? _c : '')),
      ")")));
})));
export class VerticalNav {
  constructor() {
    /**
     * Collection schema from which to generate a table of contents
     */
    this.collection = undefined;
    this._collection = this.collection;
  }
  componentWillLoad() {
    // Use the collection Prop if one exists, otherwise try to read it from the HTML head
    if (this.collection !== undefined) {
      return;
    }
    const _col = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).reduce((scripts, el) => {
      let contents = {};
      try {
        contents = JSON.parse(el.innerHTML);
      }
      catch (e) {
        return scripts;
      }
      return isA('Collection', contents) ? [...scripts, contents] : scripts;
    }, []);
    this._collection = _col[0];
  }
  render() {
    var _a, _b;
    return (h("nav", { class: "toc" }, parseCreativeWorks((_b = (_a = this._collection) === null || _a === void 0 ? void 0 : _a.parts) !== null && _b !== void 0 ? _b : [])));
  }
  static get is() { return "stencila-vertical-nav"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["./verticalNav.css"],
    "material": ["./verticalNav.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["verticalNav.css"],
    "material": ["verticalNav.material.css"]
  }; }
  static get properties() { return {
    "collection": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Collection",
        "resolved": "Collection | undefined",
        "references": {
          "Collection": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Collection schema from which to generate a table of contents"
      },
      "defaultValue": "undefined"
    }
  }; }
}
