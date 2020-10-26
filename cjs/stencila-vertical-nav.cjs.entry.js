'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');
const schema = require('./schema-9d139a00.js');

const defaultVerticalNavCss = "a.sc-stencila-vertical-nav-default{font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;text-decoration:none;color:#000;color:var(--color-key,#000)}.toc.sc-stencila-vertical-nav-default{overflow-y:auto}.toc.sc-stencila-vertical-nav-default>.toc-list.sc-stencila-vertical-nav-default{overflow:hidden;position:relative}.toc.sc-stencila-vertical-nav-default>.toc-list.sc-stencila-vertical-nav-default li.sc-stencila-vertical-nav-default{list-style-type:none;line-height:1.625}.toc-list.sc-stencila-vertical-nav-default{margin:0;padding-left:.5rem}a.toc-link.sc-stencila-vertical-nav-default{height:100%;color:currentColor;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}a.toc-link.sc-stencila-vertical-nav-default:not(.is-active-link):hover{padding-left:.5rem}.is-collapsible.sc-stencila-vertical-nav-default{overflow:hidden;max-height:1000px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.is-collapsed.sc-stencila-vertical-nav-default{max-height:0}.is-position-fixed.sc-stencila-vertical-nav-default{top:0;padding-top:1rem;position:fixed;position:fixed!important}.is-active-link.sc-stencila-vertical-nav-default{font-weight:700}.toc-link.sc-stencila-vertical-nav-default:before{position:absolute;background-color:#f7fafc;background-color:var(--color-neutral-100,#f7fafc);display:inline-block;left:0;width:.25rem;margin-top:-1px;content:\" \";height:inherit}.is-active-link.sc-stencila-vertical-nav-default:before{background-color:#4299e1;background-color:var(--color-primary-500,#4299e1)}summary.sc-stencila-vertical-nav-default{font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem}";

const verticalNavMaterialCss = "a.sc-stencila-vertical-nav-material{font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;text-decoration:none;color:#000;color:var(--color-key,#000)}.toc.sc-stencila-vertical-nav-material{overflow-y:auto}.toc.sc-stencila-vertical-nav-material>.toc-list.sc-stencila-vertical-nav-material{overflow:hidden;position:relative}.toc.sc-stencila-vertical-nav-material>.toc-list.sc-stencila-vertical-nav-material li.sc-stencila-vertical-nav-material{list-style-type:none;line-height:1.625}.toc-list.sc-stencila-vertical-nav-material{margin:0;padding-left:.5rem}a.toc-link.sc-stencila-vertical-nav-material{height:100%;color:currentColor;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}a.toc-link.sc-stencila-vertical-nav-material:not(.is-active-link):hover{padding-left:.5rem}.is-collapsible.sc-stencila-vertical-nav-material{overflow:hidden;max-height:1000px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.is-collapsed.sc-stencila-vertical-nav-material{max-height:0}.is-position-fixed.sc-stencila-vertical-nav-material{top:0;padding-top:1rem;position:fixed;position:fixed!important}.is-active-link.sc-stencila-vertical-nav-material{font-weight:700}.toc-link.sc-stencila-vertical-nav-material:before{position:absolute;background-color:#f7fafc;background-color:var(--color-neutral-100,#f7fafc);display:inline-block;left:0;width:.25rem;margin-top:-1px;content:\" \";height:inherit}.is-active-link.sc-stencila-vertical-nav-material:before{background-color:#4299e1;background-color:var(--color-primary-500,#4299e1)}summary.sc-stencila-vertical-nav-material{font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem}";

const parseCreativeWorks = (c, path = '/') => (index.h("ul", { class: "toc-list" }, c.map((part) => {
  var _a, _b, _c;
  return part.parts !== undefined ? (index.h("li", null, index.h("details", { open: true }, index.h("summary", null, part.name), parseCreativeWorks(part.parts, ((_a = part.name) !== null && _a !== void 0 ? _a : '') + '/')))) : (index.h("li", null, index.h("a", { class: "toc-link", href: path + ((_b = part.name) !== null && _b !== void 0 ? _b : '') }, part.name, " (", index.h("code", null, path + ((_c = part.name) !== null && _c !== void 0 ? _c : '')), ")")));
})));
const VerticalNav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      return schema.Nt('Collection', contents) ? [...scripts, contents] : scripts;
    }, []);
    this._collection = _col[0];
  }
  render() {
    var _a, _b;
    return (index.h("nav", { class: "toc" }, parseCreativeWorks((_b = (_a = this._collection) === null || _a === void 0 ? void 0 : _a.parts) !== null && _b !== void 0 ? _b : [])));
  }
};
VerticalNav.style = {
  default: defaultVerticalNavCss,
  material: verticalNavMaterialCss
};

exports.stencila_vertical_nav = VerticalNav;
