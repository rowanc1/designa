'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');

const defaultMenuCss = ".sc-stencila-menu-default-h ul.sc-stencila-menu-default{position:absolute;z-index:10;display:inline-block;padding:0;margin:0;border-radius:.25rem;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #e2e8f0;border-color:var(--color-neutral-300,#e2e8f0);min-width:112px}.sc-stencila-menu-default-h ul[aria-hidden].sc-stencila-menu-default{display:none}.sc-stencila-menu-default-h ul.sc-stencila-menu-default-s>:not(:last-child){border:0 solid #edf2f7;border-color:var(--color-neutral-200,#edf2f7);border-bottom:1px solid var(--color-neutral-200,#edf2f7)}";

const menuMaterialCss = ".sc-stencila-menu-material-h ul.sc-stencila-menu-material{position:absolute;z-index:10;display:inline-block;padding:0;margin:0;border-radius:.25rem;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #e2e8f0;border-color:var(--color-neutral-300,#e2e8f0);min-width:112px}.sc-stencila-menu-material-h ul[aria-hidden].sc-stencila-menu-material{display:none}";

const Menu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Determines whether the Menu is shown or not
     */
    this.isOpen = false;
    this.toggleMenu = (e) => {
      e.preventDefault();
      this.isOpen = !this.isOpen;
    };
    this.menuId = `stencila-menu-${menuIds++}`;
  }
  render() {
    return (index.h(index.Host, null, index.h("span", { onClick: this.toggleMenu, "aria-controls": this.menuId }, index.h("slot", { name: "toggle" })), index.h("ul", { role: "menu", "aria-hidden": !this.isOpen, "aria-orientation": "vertical", tabindex: "-1", "aria-expanded": "false", id: this.menuId }, index.h("slot", null))));
  }
};
let menuIds = 0;
Menu.style = {
  default: defaultMenuCss,
  material: menuMaterialCss
};

exports.stencila_menu = Menu;
