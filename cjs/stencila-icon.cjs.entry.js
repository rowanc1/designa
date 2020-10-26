'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');

const defaultIconCss = "@import url('//unpkg.com/remixicon@2.5.0/fonts/remixicon.css');@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-default-h{--height:1.25em;--width:1.25em;display:inline-block;line-height:1;vertical-align:middle;color:currentColor}.sc-stencila-icon-default-h span.sc-stencila-icon-default{display:block;width:100%;height:auto;max-height:100%;height:var(--height);width:var(--width)}.sc-stencila-icon-default-h.sc-stencila-icon-default-s>i,.sc-stencila-icon-default-h .sc-stencila-icon-default-s>i{position:relative;display:block;fill:currentColor}.sc-stencila-icon-default-h[icon^=loader].sc-stencila-icon-default-s>i{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";

const iconMaterialCss = "@import url('//unpkg.com/remixicon@2.5.0/fonts/remixicon.css');@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.sc-stencila-icon-material-h{--height:1.25em;--width:1.25em;display:inline-block;line-height:1;vertical-align:middle}.sc-stencila-icon-material-h span.sc-stencila-icon-material{display:block;width:100%;height:auto;max-height:100%;height:var(--height);width:var(--width)}.sc-stencila-icon-material-h.sc-stencila-icon-material-s>i,.sc-stencila-icon-material-h .sc-stencila-icon-material-s>i{position:relative;display:block;fill:currentColor;stroke-linecap:butt}.sc-stencila-icon-material-h[icon^=loader].sc-stencila-icon-material-s>i{-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}";

const getGlobalIconStyle = () => document.getElementsByTagName('html')[0].getAttribute('data-icon-style') ===
  'fill'
  ? 'fill'
  : 'line';
const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Style with which to render the icon
     */
    this.iconStyle = getGlobalIconStyle();
  }
  render() {
    return (index.h(index.Host, { icon: this.icon, "aria-hidden": "true" }, index.h("i", { class: `ri-${this.icon}-${this.iconStyle}` })));
  }
};
Icon.elementName = 'stencila-icon';
Icon.style = {
  default: defaultIconCss,
  material: iconMaterialCss
};

exports.stencila_icon = Icon;
