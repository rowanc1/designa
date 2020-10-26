'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');

const defaultDetailsCss = ".sc-stencila-details-default-h,stencila-details.sc-stencila-details-default{position:relative;display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif)}.sc-stencila-details-default-h .contents.sc-stencila-details-default,stencila-details.sc-stencila-details-default .contents.sc-stencila-details-default{overflow:hidden}.sc-stencila-details-default-h .contents.hidden.sc-stencila-details-default,stencila-details.sc-stencila-details-default .contents.hidden.sc-stencila-details-default{display:none}.sc-stencila-details-default-h.sc-stencila-details-default-s>[slot=summary],.sc-stencila-details-default-h .sc-stencila-details-default-s>[slot=summary],stencila-details.sc-stencila-details-default-s>[slot=summary],stencila-details .sc-stencila-details-default-s>[slot=summary]{cursor:pointer}.sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default,stencila-details.sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default{position:absolute;top:0;right:0;cursor:pointer;-webkit-transition:-webkit-transform .12s ease-in-out;transition:-webkit-transform .12s ease-in-out;transition:transform .12s ease-in-out;transition:transform .12s ease-in-out, -webkit-transform .12s ease-in-out;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default svg.sc-stencila-details-default,stencila-details.sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default svg.sc-stencila-details-default{stroke:#a0aec0;stroke:var(--color-neutral-500,#a0aec0)}[isopen=true].sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default,stencila-details[isopen=true].sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stencila-details-default-h:focus .sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:focus.sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:hover .sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:hover.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:focus.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:focus .sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:hover.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:hover .sc-stencila-details-default-s>.disclosure-toggle>svg{stroke:#4a5568;stroke:var(--color-neutral-700,#4a5568)}";

const materialDetailsCss = ".sc-stencila-details-material-h,stencila-details.sc-stencila-details-material{position:relative;display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif)}.sc-stencila-details-material-h .contents.sc-stencila-details-material,stencila-details.sc-stencila-details-material .contents.sc-stencila-details-material{overflow:hidden}.sc-stencila-details-material-h .contents.hidden.sc-stencila-details-material,stencila-details.sc-stencila-details-material .contents.hidden.sc-stencila-details-material{display:none}.sc-stencila-details-material-h.sc-stencila-details-material-s>[slot=summary],.sc-stencila-details-material-h .sc-stencila-details-material-s>[slot=summary],stencila-details.sc-stencila-details-material-s>[slot=summary],stencila-details .sc-stencila-details-material-s>[slot=summary]{cursor:pointer}.sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material,stencila-details.sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material{position:absolute;top:0;right:0;cursor:pointer;-webkit-transition:-webkit-transform .12s ease-in-out;transition:-webkit-transform .12s ease-in-out;transition:transform .12s ease-in-out;transition:transform .12s ease-in-out, -webkit-transform .12s ease-in-out;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material svg.sc-stencila-details-material,stencila-details.sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material svg.sc-stencila-details-material{stroke:#a0aec0;stroke:var(--color-neutral-500,#a0aec0)}[isopen=true].sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material,stencila-details[isopen=true].sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stencila-details-material-h:focus .sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:focus.sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:hover .sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:hover.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:focus.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:focus .sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:hover.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:hover .sc-stencila-details-material-s>.disclosure-toggle>svg{stroke:#4a5568;stroke:var(--color-neutral-700,#4a5568)}";

const Details = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Determines whether the contents are visible or not
     */
    this.open = false;
    this.isOpen = this.open ? this.open : false;
    this.clickHandler = (e) => {
      e.preventDefault();
      this.isOpen = !this.isOpen;
    };
  }
  render() {
    return (index.h(index.Host, { isOpen: this.isOpen ? 'true' : 'false', onClick: this.clickHandler }, index.h("slot", { name: "summary" }), index.h("div", { class: { contents: true, hidden: !this.isOpen } }, index.h("slot", null)), index.h("stencila-icon", { icon: "arrow-down-s", class: "disclosure-toggle" })));
  }
};
Details.elementName = 'stencila-details';
Details.style = {
  default: defaultDetailsCss,
  material: materialDetailsCss
};

exports.stencila_details = Details;
