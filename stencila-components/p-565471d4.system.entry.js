System.register(["./p-3c51b445.system.js"],(function(e){"use strict";var a,r,n;return{setters:[function(e){a=e.r;r=e.h;n=e.H}],execute:function(){var o=".sc-stencila-menu-default-h ul.sc-stencila-menu-default{position:absolute;z-index:10;display:inline-block;padding:0;margin:0;border-radius:.25rem;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #e2e8f0;border-color:var(--color-neutral-300,#e2e8f0);min-width:112px}.sc-stencila-menu-default-h ul[aria-hidden].sc-stencila-menu-default{display:none}.sc-stencila-menu-default-h ul.sc-stencila-menu-default-s>:not(:last-child){border:0 solid #edf2f7;border-color:var(--color-neutral-200,#edf2f7);border-bottom:1px solid var(--color-neutral-200,#edf2f7)}";var i=".sc-stencila-menu-material-h ul.sc-stencila-menu-material{position:absolute;z-index:10;display:inline-block;padding:0;margin:0;border-radius:.25rem;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #e2e8f0;border-color:var(--color-neutral-300,#e2e8f0);min-width:112px}.sc-stencila-menu-material-h ul[aria-hidden].sc-stencila-menu-material{display:none}";var t=e("stencila_menu",function(){function e(e){var r=this;a(this,e);this.isOpen=false;this.toggleMenu=function(e){e.preventDefault();r.isOpen=!r.isOpen};this.menuId="stencila-menu-"+l++}e.prototype.render=function(){return r(n,null,r("span",{onClick:this.toggleMenu,"aria-controls":this.menuId},r("slot",{name:"toggle"})),r("ul",{role:"menu","aria-hidden":!this.isOpen,"aria-orientation":"vertical",tabindex:"-1","aria-expanded":"false",id:this.menuId},r("slot",null)))};return e}());var l=0;t.style={default:o,material:i}}}}));