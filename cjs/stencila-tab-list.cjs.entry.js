'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');

// default compare for primitive types
function compare(x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
}
function strictEqual(a, b) {
    return a === b;
}
/**
 * @category instances
 * @since 2.0.0
 */
var ordNumber = {
    equals: strictEqual,
    compare: compare
};
// TODO: curry in v3
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
function min(O) {
    return function (x, y) { return (O.compare(x, y) === 1 ? y : x); };
}
// TODO: curry in v3
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
function max(O) {
    return function (x, y) { return (O.compare(x, y) === -1 ? y : x); };
}
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */
function clamp(O) {
    var minO = min(O);
    var maxO = max(O);
    return function (low, hi) { return function (x) { return maxO(minO(x, hi), low); }; };
}

const defaultTabListCss = "stencila-tab-list.sc-stencila-tab-list-default{display:block}.sc-stencila-tab-list-default-h ul.sc-stencila-tab-list-default,stencila-tab-list.sc-stencila-tab-list-default ul.sc-stencila-tab-list-default,ul[role=tablist].sc-stencila-tab-list-default{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0;margin:0;background-color:#f7fafc;background-color:var(--color-neutral-100,#f7fafc)}";

const tabListMaterialCss = "stencila-tab-list.sc-stencila-tab-list-material{display:block}.sc-stencila-tab-list-material-h ul.sc-stencila-tab-list-material,ul[role=tablist].sc-stencila-tab-list-material{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0;margin:0}";

const TabList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.activeTabIndex = 0;
    this.onKeyboardNavigateTabs = (e) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      const constrain = clamp(ordNumber)(0, this.tabs.length - 1);
      this.selectTab(constrain(this.activeTabIndex + dir));
    };
  }
  selectTab(index) {
    this.activeTabIndex = index;
  }
  render() {
    return (index.h("ul", { role: "tablist", onKeyDown: this.onKeyboardNavigateTabs }, this.tabs.map((tab, index$1) => (index.h("stencila-tab", { isSelected: tab.isSelected === true ||
        (tab.isSelected === undefined && index$1 === this.activeTabIndex), label: tab.label, onClick: e => {
        e.preventDefault();
        this.selectTab(index$1);
        tab.onClick && tab.onClick(e);
      }, tabIndex: index$1 === this.activeTabIndex ? 0 : -1 })))));
  }
};
TabList.elementName = 'stencila-tab-list';
TabList.style = {
  default: defaultTabListCss,
  material: tabListMaterialCss
};

exports.stencila_tab_list = TabList;
