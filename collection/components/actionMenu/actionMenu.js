import { Component, Element, h, Prop, State } from '@stencil/core';
const slots = {
  default: '',
  persistentActions: 'persistentActions',
};
export class ActionMenu {
  constructor() {
    /**
     * Defines whether the Action Menu can be collapsed and expanded
     */
    this.expandable = false;
    this.isCollapsed = false;
    this.toggleActionMenu = () => (this.isCollapsed = !this.isCollapsed);
    this.width = 'auto';
    this.isAnimating = false;
    this.isTransitioning = false;
    this.calculateWidth = () => {
      if (this.actionContainerRef !== null && this.isTransitioning === false) {
        this.width = 'auto';
        const width = this.actionContainerRef.getBoundingClientRect().width;
        this.width = `${width}px`;
      }
    };
    this.observer = new window.MutationObserver(this.calculateWidth);
    this.checkForSecondaryActions = () => {
      var _a;
      const hasSecondaryActions = ((_a = this.el
        .querySelector('.secondaryActions .actionContainer')) === null || _a === void 0 ? void 0 : _a.innerHTML.trim()) === '';
      this.hasSecondaryActions = hasSecondaryActions;
      return hasSecondaryActions;
    };
  }
  componentDidLoad() {
    this.checkForSecondaryActions();
    if (this.expandable) {
      this.actionContainerRef = this.el.querySelector('.actionContainer');
      if (this.actionContainerRef !== null) {
        this.actionContainerRef.addEventListener('transitionstart', () => (this.isTransitioning = true));
        this.actionContainerRef.addEventListener('transitionend', () => (this.isTransitioning = false));
        this.observer.observe(this.el, {
          characterData: true,
          subtree: true,
        });
        this.calculateWidth();
        this.isCollapsed = true;
      }
    }
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    return (h("nav", null,
      h("span", { class: {
          secondaryActions: true,
          hidden: this.hasSecondaryActions,
        } },
        h("span", { class: {
            actionContainer: true,
            isAnimating: this.isAnimating,
            isCollapsed: this.isCollapsed,
          }, style: { '--max-width': this.width } },
          h("slot", null)),
        h("stencila-button", { onClick: this.toggleActionMenu, icon: "more", color: "key", minimal: true, size: "xsmall", iconOnly: true, ariaLabel: "Toggle Action Menu" })),
      h("span", { class: "persistentActions" },
        h("slot", { name: slots.persistentActions }))));
  }
  static get is() { return "stencila-action-menu"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["actionMenu.css"],
    "material": ["actionMenu.css"]
  }; }
  static get styleUrls() { return {
    "default": ["actionMenu.css"],
    "material": ["actionMenu.css"]
  }; }
  static get properties() { return {
    "actions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HTMLButtonElement[]",
        "resolved": "HTMLButtonElement[]",
        "references": {
          "HTMLButtonElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "List of buttons to include in Action Menu."
      }
    },
    "expandable": {
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
        "text": "Defines whether the Action Menu can be collapsed and expanded"
      },
      "attribute": "expandable",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "hasSecondaryActions": {},
    "isCollapsed": {},
    "width": {},
    "isAnimating": {}
  }; }
  static get elementRef() { return "el"; }
}
