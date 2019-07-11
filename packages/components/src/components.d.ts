/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import { HTMLStencilElement, JSXBase } from '@stencil/core/internal'
import { Collection } from '@stencila/schema'

export namespace Components {
  interface StencilaTab {
    /**
     * The link the tab should navigate to
     */
    href: string
    /**
     * Indicates whether the current tab is "selected"
     */
    isSelected: boolean
    /**
     * The displayed text of the Tab
     */
    label: string
  }
  interface StencilaTabList {
    /**
     * The link the tab should navigate to
     */
    href: string
    /**
     * The displayed text of the Tab
     */
    label: string
    /**
     * A list of string values to use as tab labels
     */
    tabs: string[]
  }
  interface StencilaToc {
    /**
     * Where to grab the headings to build the table of contents.
     */
    contentSelector: string
    /**
     * Which headings to grab inside of the contentSelector element.
     */
    headingSelector: string
  }
  interface StencilaVerticalNav {
    collection?: Collection
  }
}

declare global {
  interface HTMLStencilaTabElement
    extends Components.StencilaTab,
      HTMLStencilElement {}
  var HTMLStencilaTabElement: {
    prototype: HTMLStencilaTabElement
    new (): HTMLStencilaTabElement
  }

  interface HTMLStencilaTabListElement
    extends Components.StencilaTabList,
      HTMLStencilElement {}
  var HTMLStencilaTabListElement: {
    prototype: HTMLStencilaTabListElement
    new (): HTMLStencilaTabListElement
  }

  interface HTMLStencilaTocElement
    extends Components.StencilaToc,
      HTMLStencilElement {}
  var HTMLStencilaTocElement: {
    prototype: HTMLStencilaTocElement
    new (): HTMLStencilaTocElement
  }

  interface HTMLStencilaVerticalNavElement
    extends Components.StencilaVerticalNav,
      HTMLStencilElement {}
  var HTMLStencilaVerticalNavElement: {
    prototype: HTMLStencilaVerticalNavElement
    new (): HTMLStencilaVerticalNavElement
  }
  interface HTMLElementTagNameMap {
    'stencila-tab': HTMLStencilaTabElement
    'stencila-tab-list': HTMLStencilaTabListElement
    'stencila-toc': HTMLStencilaTocElement
    'stencila-vertical-nav': HTMLStencilaVerticalNavElement
  }
}

declare namespace LocalJSX {
  interface StencilaTab extends JSXBase.HTMLAttributes<HTMLStencilaTabElement> {
    /**
     * The link the tab should navigate to
     */
    href?: string
    /**
     * Indicates whether the current tab is "selected"
     */
    isSelected?: boolean
    /**
     * The displayed text of the Tab
     */
    label?: string
  }
  interface StencilaTabList
    extends JSXBase.HTMLAttributes<HTMLStencilaTabListElement> {
    /**
     * The link the tab should navigate to
     */
    href?: string
    /**
     * The displayed text of the Tab
     */
    label?: string
    /**
     * A list of string values to use as tab labels
     */
    tabs: string[]
  }
  interface StencilaToc extends JSXBase.HTMLAttributes<HTMLStencilaTocElement> {
    /**
     * Where to grab the headings to build the table of contents.
     */
    contentSelector?: string
    /**
     * Which headings to grab inside of the contentSelector element.
     */
    headingSelector?: string
  }
  interface StencilaVerticalNav
    extends JSXBase.HTMLAttributes<HTMLStencilaVerticalNavElement> {
    collection?: Collection
  }

  interface IntrinsicElements {
    'stencila-tab': StencilaTab
    'stencila-tab-list': StencilaTabList
    'stencila-toc': StencilaToc
    'stencila-vertical-nav': StencilaVerticalNav
  }
}

export { LocalJSX as JSX }

declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}
