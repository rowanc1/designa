'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f78b14d6.js');
require('./_commonjsHelpers-1fbbf0eb.js');
const appGlobals = require('./app-globals-a823304e.js');

/*
 Stencil Client Patch Esm v2.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["stencila-code-chunk.cjs",[[38,"stencila-code-chunk",{"autofocus":[4],"programmingLanguageProp":[1,"data-programminglanguage"],"onSetLanguage":[16],"isCodeCollapsed":[4,"data-collapsed"],"isCodeVisible":[4,"is-code-visible"],"executeHandler":[16],"keymap":[16],"executeCodeState":[32],"outputs":[32],"codeErrors":[32],"isCodeVisibleState":[32],"getContents":[64],"execute":[64]},[[8,"collapseAllCode","onSetAllCodeVisibility"],[8,"setAllCodeVisibility","onSetAllCodeVisibility"]]]]],["stencila-executable-document-toolbar.cjs",[[32,"stencila-executable-document-toolbar",{"sourceUrl":[1,"source-url"],"sessionProviderUrl":[1,"session-provider-url"],"position":[1],"session":[32],"job":[32],"executor":[32],"codeCount":[32],"statusMessage":[32]}]]],["stencila-code-expression.cjs",[[38,"stencila-code-expression",{"executeHandler":[16],"programmingLanguage":[1,"programming-language"],"output":[32],"codeErrors":[32],"hover":[32],"isCodeVisible":[32],"isOutputEmpty":[32],"executeCodeState":[32],"getContents":[64],"execute":[64]},[[8,"collapseAllCode","onSetAllCodeVisibility"],[8,"setAllCodeVisibility","onSetAllCodeVisibility"]]]]],["stencila-input.cjs",[[34,"stencila-input",{"autoFocus":[4,"auto-focus"],"inputmode":[1],"type":[1],"name":[1],"label":[1],"hideLabel":[4,"hide-label"],"inline":[4],"placeholder":[1],"iconStart":[1,"icon-start"],"required":[4],"value":[8]}]]],["stencila-menu-item.cjs",[[38,"stencila-menu-item",{"icon":[1]}]]],["stencila-tab.cjs",[[34,"stencila-tab",{"href":[1],"label":[1],"isSelected":[4,"selected"]}]]],["stencila-tab-list.cjs",[[34,"stencila-tab-list",{"tabs":[16],"activeTabIndex":[32]}]]],["animated-route-switch.cjs",[[4,"animated-route-switch",{"group":[513],"routeViewsUpdated":[16],"scrollTopOffset":[2,"scroll-top-offset"],"location":[16]}]]],["stencila-menu.cjs",[[38,"stencila-menu",{"isOpen":[1540,"is-open"]}]]],["stencila-toc.cjs",[[32,"stencila-toc",{"contentSelector":[1,"content-selector"],"headingSelector":[1,"heading-selector"]}]]],["stencila-vertical-nav.cjs",[[34,"stencila-vertical-nav",{"collection":[16]}]]],["stencila-details.cjs",[[38,"stencila-details",{"open":[4],"isOpen":[32]}]]],["animate-presence.cjs",[[1,"animate-presence",{"__presenceKey":[1,"__presence-key"],"descendants":[16],"observe":[1028],"registerChild":[64],"unregisterChild":[64],"exit":[64],"enter":[64]},[[0,"animatePresenceExitComplete","animatePresenceExitCompleteHandler"]]]]],["stencila-toast_2.cjs",[[38,"stencila-toolbar",{"position":[1],"color":[1]}],[36,"stencila-toast",{"duration":[2],"type":[1],"position":[1]}]]],["stencila-data-table_2.cjs",[[34,"stencila-data-table",{"table":[16]}],[34,"stencila-image-object",{"image":[16]}]]],["stencila-icon.cjs",[[34,"stencila-icon",{"icon":[1],"iconStyle":[1,"icon-style"]}]]],["stencila-button_3.cjs",[[38,"stencila-button",{"href":[1],"rel":[1],"target":[1],"ariaLabel":[1,"aria-label"],"color":[1],"size":[1],"minimal":[4],"isSecondary":[4,"is-secondary"],"buttonType":[1,"button-type"],"disabled":[4],"icon":[1],"iconOnly":[4,"icon-only"],"isLoading":[4,"is-loading"],"fill":[4],"tooltip":[1],"dataEl":[1,"data-el"]}],[38,"stencila-tooltip",{"text":[1]}],[38,"stencila-tooltip-element"]]],["stencila-action-menu_4.cjs",[[38,"stencila-action-menu",{"actions":[16],"expandable":[4],"hasSecondaryActions":[32],"isCollapsed":[32],"width":[32],"isAnimating":[32]}],[38,"stencila-code-error",{"open":[4],"kind":[1],"hasStacktrace":[4,"has-stacktrace"]}],[38,"stencila-node-list",{"nodes":[16],"isEmpty":[32]}],[38,"stencila-editor",{"languageCapabilities":[16],"readOnly":[4,"read-only"],"onSetLanguage":[16],"activeLanguage":[1537,"active-language"],"executeHandler":[16],"autofocus":[4],"lineNumbers":[4,"line-numbers"],"foldGutter":[4,"fold-gutter"],"keymap":[16],"getContents":[64],"setContents":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
