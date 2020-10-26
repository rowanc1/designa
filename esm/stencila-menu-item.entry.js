import { r as registerInstance, h, H as Host } from './index-9edcbeb0.js';

const defaultMenuItemCss = ".sc-stencila-menu-item-default-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:2rem;padding-left:.5rem;padding-right:.5rem;font-size:.875rem;letter-spacing:.025em;text-decoration:none;text-transform:uppercase;cursor:pointer;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);color:#000;color:var(--color-key,#000)}.sc-stencila-menu-item-default-h:hover{background-color:#edf2f7;background-color:var(--color-neutral-200,#edf2f7)}.sc-stencila-menu-item-default-h stencila-icon.sc-stencila-menu-item-default{margin-right:.5rem}";

const menuItemMaterialCss = ".sc-stencila-menu-item-material-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:3rem;padding-left:1rem;padding-right:1rem;text-decoration:none;cursor:pointer;color:#000;color:var(--color-key,#000);font-family:sans-serif;font-family:var(--font-family-body,sans-serif)}.sc-stencila-menu-item-material-h:hover{background-color:#edf2f7;background-color:var(--color-neutral-200,#edf2f7)}.sc-stencila-menu-item-material-h stencila-icon.sc-stencila-menu-item-material{margin-right:.5rem}";

const MenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { role: "menuitem" }, this.icon !== undefined && (h("stencila-icon", { icon: this.icon })), h("slot", null)));
  }
};
MenuItem.style = {
  default: defaultMenuItemCss,
  material: menuItemMaterialCss
};

export { MenuItem as stencila_menu_item };
