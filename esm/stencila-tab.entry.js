import { r as registerInstance, h } from './index-9edcbeb0.js';

const defaultTabCss = "a.sc-stencila-tab-default{font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;text-decoration:none;color:#000;color:var(--color-key,#000)}.sc-stencila-tab-default-h,stencila-tab.sc-stencila-tab-default{-ms-flex-positive:1;flex-grow:1}.sc-stencila-tab-default-h li.sc-stencila-tab-default,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0;margin:0;text-align:center;text-transform:capitalize;list-style-type:none;border-width:1px;border-color:#cbd5e0;border-color:var(--color-neutral-400,#cbd5e0)}.sc-stencila-tab-default-h li.sc-stencila-tab-default:first-of-type,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default:first-of-type,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default:first-of-type{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.sc-stencila-tab-default-h li.sc-stencila-tab-default:last-of-type,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default:last-of-type,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default:last-of-type{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.sc-stencila-tab-default-h li.sc-stencila-tab-default a.sc-stencila-tab-default,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default{display:block;width:100%;padding:.5rem 1rem;line-height:1}.sc-stencila-tab-default-h li.sc-stencila-tab-default a[aria-selected=true].sc-stencila-tab-default,stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default a[aria-selected=true].sc-stencila-tab-default,ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default a[aria-selected=true].sc-stencila-tab-default{background-color:#e2e8f0;background-color:var(--color-neutral-300,#e2e8f0)}.sc-stencila-tab-default-h li.sc-stencila-tab-default a.sc-stencila-tab-default:hover:not([aria-selected=true]),stencila-tab.sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default:hover:not([aria-selected=true]),ul[role=tablist].sc-stencila-tab-default li.sc-stencila-tab-default a.sc-stencila-tab-default:hover:not([aria-selected=true]){background-color:#fff;background-color:var(--color-stock,#fff);border-color:#e2e8f0;border-color:var(--color-neutral-300,#e2e8f0)}";

const tabMaterialCss = "a.sc-stencila-tab-material{font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;text-decoration:none;color:#000;color:var(--color-key,#000)}.sc-stencila-tab-material-h,stencila-tab.sc-stencila-tab-material{-ms-flex-positive:1;flex-grow:1}.sc-stencila-tab-material-h li.sc-stencila-tab-material,ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0;font-size:.875rem;font-weight:500;letter-spacing:.05em;text-align:center;text-transform:uppercase;list-style-type:none}.sc-stencila-tab-material-h li.sc-stencila-tab-material a.sc-stencila-tab-material,ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material a.sc-stencila-tab-material{display:block;width:100%;padding:1rem;line-height:1;border:0 solid #e2e8f0;border-color:var(--color-neutral-300,#e2e8f0);border-bottom:2px solid var(--color-neutral-300,#e2e8f0)}.sc-stencila-tab-material-h li.sc-stencila-tab-material a[aria-selected=true].sc-stencila-tab-material,ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material a[aria-selected=true].sc-stencila-tab-material{border-bottom-width:2px;border-color:#4299e1;border-color:var(--color-primary-500,#4299e1);color:#4299e1;color:var(--color-primary-500,#4299e1)}.sc-stencila-tab-material-h li.sc-stencila-tab-material a.sc-stencila-tab-material:hover:not([aria-selected=true]),ul[role=tablist].sc-stencila-tab-material li.sc-stencila-tab-material a.sc-stencila-tab-material:hover:not([aria-selected=true]){background-color:#f7fafc;background-color:var(--color-neutral-100,#f7fafc);border-color:#a0aec0;border-color:var(--color-neutral-500,#a0aec0)}";

const Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The link the tab should navigate to
     */
    this.href = '#';
    /**
     * Indicates whether the current tab is "selected"
     */
    this.isSelected = false;
  }
  render() {
    return (h("li", { role: "presentation" }, h("a", { "aria-selected": this.isSelected.toString(), href: this.href, role: "tab" }, this.label)));
  }
};
Tab.elementName = 'stencila-tab';
Tab.style = {
  default: defaultTabCss,
  material: tabMaterialCss
};

export { Tab as stencila_tab };
