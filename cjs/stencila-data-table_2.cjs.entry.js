'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');

const defaultDataTableCss = "[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default{display:block;overflow:auto;font-size:.875rem;border-collapse:collapse;font-family:sans-serif;font-family:var(--font-family-body,sans-serif)}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default td.sc-stencila-data-table-default,[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default th.sc-stencila-data-table-default{padding:.25rem .5rem;border-width:1px;border-color:#e2e8f0;border-color:var(--color-neutral-300,#e2e8f0)}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default th.sc-stencila-data-table-default{font-weight:700}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default tbody.sc-stencila-data-table-default tr.sc-stencila-data-table-default:nth-child(2n),[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default th.sc-stencila-data-table-default{background-color:#f7fafc;background-color:var(--color-neutral-100,#f7fafc)}";

const materialDataTableCss = "[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material{display:block;overflow:auto;font-size:.875rem;border-collapse:collapse;font-family:sans-serif;font-family:var(--font-family-body,sans-serif)}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material td.sc-stencila-data-table-material,[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material th.sc-stencila-data-table-material{padding:.25rem .5rem;border-width:1px;border-color:#e2e8f0;border-color:var(--color-neutral-300,#e2e8f0)}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material th.sc-stencila-data-table-material{font-weight:700}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material tbody.sc-stencila-data-table-material tr.sc-stencila-data-table-material:nth-child(2n),[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material th.sc-stencila-data-table-material{background-color:#f7fafc;background-color:var(--color-neutral-100,#f7fafc)}";

const DataTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    var _a;
    const cols = this.table.columns;
    const rows = (_a = cols === null || cols === void 0 ? void 0 : cols[0].values.map((_, row) => row)) !== null && _a !== void 0 ? _a : [];
    return (index.h("table", { itemtype: "https://schema.stenci.la/Datatable" }, index.h("thead", null, index.h("tr", null, cols.map(col => (index.h("th", null, col.name))))), index.h("tbody", null, rows.map((_, row) => (index.h("tr", null, cols.map(col => (index.h("td", null, col.values[row])))))))));
  }
};
DataTable.style = {
  default: defaultDataTableCss,
  material: materialDataTableCss
};

const defaultImageObjectCss = ".sc-stencila-image-object-default-h img.sc-stencila-image-object-default,stencila-image-object.sc-stencila-image-object-default img.sc-stencila-image-object-default{height:auto;max-width:100%}";

const materialImageObjectCss = ".sc-stencila-image-object-material-h img.sc-stencila-image-object-material,stencila-image-object.sc-stencila-image-object-material img.sc-stencila-image-object-material{height:auto;max-width:100%}";

const ImageObjectComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("img", { alt: this.image.text, itemscope: true, itemtype: "http://schema.org/ImageObject", src: this.image.contentUrl }));
  }
};
ImageObjectComponent.style = {
  default: defaultImageObjectCss,
  material: materialImageObjectCss
};

exports.stencila_data_table = DataTable;
exports.stencila_image_object = ImageObjectComponent;
