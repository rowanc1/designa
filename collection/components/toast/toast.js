import { Component, Element, h, Host, Prop } from '@stencil/core';
import { ToastTypes } from './toastController';
/*
 * Individual Toast component. To present on the page see `./toastController.ts`
 */
export class StencilaToast {
  constructor() {
    // TODO: Pause Toast removal if user hovers/interacts with the notification
    /**
     * Duration in milliseconds for how long the toast should be display
     */
    this.duration = 4000;
    /**
     * Type of the toast to show. Affects the component color scheme.
     */
    this.type = ToastTypes.info;
  }
  componentDidLoad() {
    window.setTimeout(() => {
      var _a;
      if (this.el) {
        (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.el);
      }
    }, this.duration);
  }
  render() {
    return (h(Host, { type: this.type, position: this.position },
      h("slot", null)));
  }
  static get is() { return "stencila-toast"; }
  static get originalStyleUrls() { return {
    "default": ["toast.css"],
    "material": ["toast.css"]
  }; }
  static get styleUrls() { return {
    "default": ["toast.css"],
    "material": ["toast.css"]
  }; }
  static get properties() { return {
    "duration": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Duration in milliseconds for how long the toast should be display"
      },
      "attribute": "duration",
      "reflect": false,
      "defaultValue": "4000"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ToastType",
        "resolved": "\"danger\" | \"info\" | \"success\" | \"warn\"",
        "references": {
          "ToastType": {
            "location": "import",
            "path": "./toastController"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of the toast to show. Affects the component color scheme."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "ToastTypes.info"
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ToastPosition | undefined",
        "resolved": "\"bottomCenter\" | \"bottomEnd\" | \"bottomStart\" | \"topCenter\" | \"topEnd\" | \"topStart\" | undefined",
        "references": {
          "ToastPosition": {
            "location": "import",
            "path": "./toastController"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance."
      },
      "attribute": "position",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
