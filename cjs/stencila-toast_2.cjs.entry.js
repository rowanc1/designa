'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');
const toastController = require('./toastController-e33d5f2b.js');

const defaultToastCss = ".stencila-toast-container{position:fixed;top:0;left:0;z-index:50;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;width:100vw;height:100vh;padding:.5rem;pointer-events:none;display:flex!important}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff);-ms-flex-negative:0;flex-shrink:0;display:block;padding:.5rem 1rem;margin-top:.25rem;margin-bottom:.25rem;overflow:hidden;font-weight:700;line-height:1;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);pointer-events:auto;left:50%;border-radius:.375rem;color:#fff;color:var(--color-stock,#fff);background-color:var(--background);color:var(--color)}:host([data-enter]),stencila-toast[data-enter]{-webkit-animation:fade-in .15s ease-in;animation:fade-in .15s ease-in;-webkit-animation-delay:0ms;animation-delay:0ms;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host([data-exit]),stencila-toast[data-exit]{-webkit-animation:fade-out .15s ease-out;animation:fade-out .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host([type=success]),stencila-toast[type=success]{color:#fff;color:var(--color-stock,#fff);background-color:#48bb78;background-color:var(--color-success-500,#48bb78)}:host([type=warn]),stencila-toast[type=warn]{color:#7b341e;color:var(--color-warn-900,#7b341e);background-color:#ed8936;background-color:var(--color-warn-500,#ed8936)}:host([type=danger]),stencila-toast[type=danger]{color:#742a2a;color:var(--color-danger-900,#742a2a);background-color:#f56565;background-color:var(--color-danger-500,#f56565)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}@-webkit-keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const materialToastCss = ".stencila-toast-container{position:fixed;top:0;left:0;z-index:50;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;width:100vw;height:100vh;padding:.5rem;pointer-events:none;display:flex!important}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff);-ms-flex-negative:0;flex-shrink:0;display:block;padding:.5rem 1rem;margin-top:.25rem;margin-bottom:.25rem;overflow:hidden;font-weight:700;line-height:1;-webkit-box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);pointer-events:auto;left:50%;border-radius:.375rem;color:#fff;color:var(--color-stock,#fff);background-color:var(--background);color:var(--color)}:host([data-enter]),stencila-toast[data-enter]{-webkit-animation:fade-in .15s ease-in;animation:fade-in .15s ease-in;-webkit-animation-delay:0ms;animation-delay:0ms;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host([data-exit]),stencila-toast[data-exit]{-webkit-animation:fade-out .15s ease-out;animation:fade-out .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host([type=success]),stencila-toast[type=success]{color:#fff;color:var(--color-stock,#fff);background-color:#48bb78;background-color:var(--color-success-500,#48bb78)}:host([type=warn]),stencila-toast[type=warn]{color:#7b341e;color:var(--color-warn-900,#7b341e);background-color:#ed8936;background-color:var(--color-warn-500,#ed8936)}:host([type=danger]),stencila-toast[type=danger]{color:#742a2a;color:var(--color-danger-900,#742a2a);background-color:#f56565;background-color:var(--color-danger-500,#f56565)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}@-webkit-keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const StencilaToast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // TODO: Pause Toast removal if user hovers/interacts with the notification
    /**
     * Duration in milliseconds for how long the toast should be display
     */
    this.duration = 4000;
    /**
     * Type of the toast to show. Affects the component color scheme.
     */
    this.type = toastController.ToastTypes.info;
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
    return (index.h(index.Host, { type: this.type, position: this.position }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
StencilaToast.style = {
  default: defaultToastCss,
  material: materialToastCss
};

const defaultToolbarCss = ".sc-stencila-toolbar-default-h{display:block;height:3rem;background-color:var(--color-neutral-300);background-color:var(--background,var(--color-neutral-300))}[position=fixed].sc-stencila-toolbar-default-h{position:fixed;top:0;left:0;z-index:30;width:100%}[position=fixed].sc-stencila-toolbar-default-h+*.sc-stencila-toolbar-default{margin-top:3rem}[color=stock].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{background-color:#fff;background-color:var(--color-stock,#fff)}[color=key].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{background-color:#000;background-color:var(--color-key,#000)}[color=primary].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{background-color:#4299e1;background-color:var(--color-primary-500,#4299e1)}[color=neutral].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{background-color:#a0aec0;background-color:var(--color-neutral-500,#a0aec0)}[color=success].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{background-color:#48bb78;background-color:var(--color-success-500,#48bb78)}[color=warn].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{background-color:#ed8936;background-color:var(--color-warn-500,#ed8936)}[color=danger].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{background-color:#f56565;background-color:var(--color-danger-500,#f56565)}.sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem .25rem;margin:0;line-height:1;color:#fff;color:var(--color-stock,#fff);font-family:sans-serif;font-family:var(--font-family-body,sans-serif);background-color:var(--background)}.sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default,.sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default>*.sc-stencila-toolbar-default{vertical-align:middle}.sc-stencila-toolbar-default-h .sc-stencila-toolbar-default-s>[slot=middle]{-ms-flex-positive:1;flex-grow:1;padding-left:1rem;padding-right:1rem}.sc-stencila-toolbar-default-h[color=key].sc-stencila-toolbar-default-s stencila-button:not([disabled]):hover button.iconOnly{background-color:hsla(0,0%,100%,.2)}";

const toolbarMaterialCss = ".sc-stencila-toolbar-material-h{display:block;height:3rem;background-color:var(--color-neutral-300);background-color:var(--background,var(--color-neutral-300))}[position=fixed].sc-stencila-toolbar-material-h{position:fixed;top:0;left:0;z-index:30;width:100%}[position=fixed].sc-stencila-toolbar-material-h+*.sc-stencila-toolbar-material{margin-top:3rem}[color=stock].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#fff;background-color:var(--color-stock,#fff)}[color=key].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#000;background-color:var(--color-key,#000)}[color=primary].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#4299e1;background-color:var(--color-primary-500,#4299e1)}[color=neutral].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#a0aec0;background-color:var(--color-neutral-500,#a0aec0)}[color=success].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#48bb78;background-color:var(--color-success-500,#48bb78)}[color=warn].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#ed8936;background-color:var(--color-warn-500,#ed8936)}[color=danger].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#f56565;background-color:var(--color-danger-500,#f56565)}.sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem .25rem;margin:0;line-height:1;color:#fff;color:var(--color-stock,#fff);font-family:sans-serif;font-family:var(--font-family-body,sans-serif);background-color:var(--background)}.sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material,.sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material>*.sc-stencila-toolbar-material{vertical-align:middle}.sc-stencila-toolbar-material-h .sc-stencila-toolbar-material-s>[slot=middle]{-ms-flex-positive:1;flex-grow:1;padding-left:1rem;padding-right:1rem}.sc-stencila-toolbar-material-h[color=key].sc-stencila-toolbar-material-s stencila-button:not([disabled]):hover button.iconOnly{background-color:hsla(0,0%,100%,.2)}";

const Toolbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * When `fixed` the Navbar will remain pinned to the top of the screen.
     * Note that if the Navbar component is not followed by a sibling element,
     * you will have to set `margin-top: 3rem` on the following element yourself.
     */
    this.position = 'static';
  }
  render() {
    return (index.h(index.Host, { color: this.color, position: this.position }, index.h("div", null, index.h("slot", { name: "start" }), index.h("slot", { name: "middle" }), index.h("slot", { name: "end" }))));
  }
};
Toolbar.style = {
  default: defaultToolbarCss,
  material: toolbarMaterialCss
};

exports.stencila_toast = StencilaToast;
exports.stencila_toolbar = Toolbar;
