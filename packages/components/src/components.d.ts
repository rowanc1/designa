/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Colors } from "./types";
import { IconNames } from "./components/icon/iconNames";
import { CodeChunk, CodeExpression, Collection, Datatable, ImageObject, Node } from "@stencila/schema";
import { Keymap } from "./components/editor/editor";
import { EditorContents, Keymap as Keymap1 } from "./components/editor/editor";
import { ChildTab } from "./components/tabList/tabList";
import { ToastPosition, ToastType } from "./components/toast/toastController";
export namespace Components {
    interface StencilaActionMenu {
        /**
          * List of buttons to include in Action Menu.
         */
        "actions": HTMLButtonElement[];
        /**
          * Defines whether the Action Menu can be collapsed and expanded
         */
        "expandable": boolean;
    }
    interface StencilaButton {
        /**
          * Screen-reader accessible label to read out.
         */
        "ariaLabel": string;
        /**
          * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button Only applies if the button is not an anchor link.
         */
        "buttonType": 'button' | 'submit' | 'reset';
        /**
          * The color of the button
         */
        "color": Colors;
        /**
          * An optional data attribute set on the button element for easier targeting using JavaScript.
         */
        "dataEl"?: string;
        /**
          * If true, prevents the user from interacting with the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "disabled": boolean;
        /**
          * If true, the button will take up the full width of the parent container
         */
        "fill": boolean;
        /**
          * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
         */
        "href"?: string;
        /**
          * Name of the icon to render inside the button
          * @see Icon component for possible values
         */
        "icon"?: HTMLElement | IconNames;
        /**
          * If true, removes extra padding from Icon inside the button TODO: See if we can automatically infer removal of padding through CSS
         */
        "iconOnly": boolean;
        /**
          * If true, shows a loading spinner icon and sets a `disabled` attribute on the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "isLoading": boolean;
        /**
          * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
         */
        "isSecondary": boolean;
        /**
          * Renders the button without initial background color or border.
         */
        "minimal": boolean;
        /**
          * Relationship of the link
          * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel Only applied if `href` prop is also set.
         */
        "rel"?: string;
        /**
          * The overall size of the Button.
         */
        "size": 'xsmall' | 'small' | 'default' | 'large';
        /**
          * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute. Only applies if the button is an anchor link. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
         */
        "target"?: HTMLAnchorElement['target'];
        /**
          * An optional help text to display for button focus and hover states.
         */
        "tooltip"?: string;
    }
    interface StencilaCodeChunk {
        /**
          * Autofocus the editor on page load
         */
        "autofocus": boolean;
        /**
          * Run the `CodeChunk`
         */
        "execute": () => Promise<CodeChunk>;
        /**
          * A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`.
         */
        "executeHandler"?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
        /**
          * Returns the `CodeChunk` node with the updated `text` content from the editor.
         */
        "getContents": () => Promise<CodeChunk>;
        /**
          * @deprecated Use `isCodeVisible` prop (`is-code-visible` attribute) instead Whether the code section is visible or not
         */
        "isCodeCollapsed": boolean;
        /**
          * Whether the code section is visible or not
         */
        "isCodeVisible": boolean;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https://codemirror.net/6/docs/ref/#keymap
         */
        "keymap": Keymap[];
        /**
          * Callback function to call when a language of the editor is changed
         */
        "onSetLanguage"?: (language: string) => void;
        /**
          * Programming language of the CodeChunk
         */
        "programmingLanguageProp": string;
    }
    interface StencilaCodeError {
        /**
          * The severity of the error message
         */
        "hasStacktrace": boolean;
        /**
          * The severity of the error message
         */
        "kind": 'incapable' | 'warning' | 'error';
        /**
          * Determines whether the stacktrace is visible or not
         */
        "open": boolean;
    }
    interface StencilaCodeExpression {
        /**
          * Run the `CodeExpression`
         */
        "execute": () => Promise<CodeExpression>;
        /**
          * A callback function to be called with the value of the `CodeExpression` node when execting the `CodeExpression`.
         */
        "executeHandler"?: (
    codeExpression: CodeExpression
  ) => Promise<CodeExpression>;
        /**
          * Returns the `CodeExpression` node with the updated `text` contents from the editor.
         */
        "getContents": () => Promise<CodeExpression>;
        /**
          * Programming language of the CodeExpression
         */
        "programmingLanguage": string;
    }
    interface StencilaDataTable {
        /**
          * The `Datatable` node to render
         */
        "table": Datatable;
    }
    interface StencilaDetails {
        /**
          * Determines whether the contents are visible or not
         */
        "open": boolean;
    }
    interface StencilaEditor {
        /**
          * Programming language of the Editor
         */
        "activeLanguage": string;
        /**
          * Autofocus the editor on page load
         */
        "autofocus": boolean;
        /**
          * Function to be evaluated over the contents of the editor.
         */
        "executeHandler"?: (contents: EditorContents) => Promise<unknown>;
        /**
          * Enables abiility to fold sections of code
         */
        "foldGutter": boolean;
        /**
          * Public method, returning the Editor contents and active language.
         */
        "getContents": () => Promise<EditorContents>;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https://codemirror.net/6/docs/ref/#keymap
         */
        "keymap": Keymap[];
        /**
          * List of all supported programming languages
         */
        "languageCapabilities": string[];
        /**
          * Determines the visibility of line numbers
         */
        "lineNumbers": boolean;
        /**
          * Callback function to call when a language of the editor is changed
         */
        "onSetLanguage"?: (language: string) => void;
        /**
          * Disallow editing of the editor contents when set to `true`
         */
        "readOnly": boolean;
        /**
          * Public method, to replace the contents of the Editor with a supplied string.
         */
        "setContents": (contents: string) => Promise<string>;
    }
    interface StencilaExecutableDocumentToolbar {
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position": 'fixed' | 'static';
        /**
          * The URL for requesting a SoftwareSession as defined in Stencila Schema. Passed to Stencila Executa for instantiating the session. TODO: If undefined user should be able to set one themselves (e.g. running a local machine)
         */
        "sessionProviderUrl": string;
        /**
          * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
         */
        "sourceUrl": string;
    }
    interface StencilaIcon {
        /**
          * Name of the icon to be rendered. Corresponds to icon names from the [Remix Icon set](http://remixicon.com)
         */
        "icon": IconNames;
        /**
          * Style with which to render the icon
         */
        "iconStyle": 'fill' | 'line';
    }
    interface StencilaImageObject {
        /**
          * The `ImageObject` node to render
         */
        "image": ImageObject;
    }
    interface StencilaInput {
        /**
          * Automatically bring cursor focus to the input field on render.
         */
        "autoFocus": boolean;
        /**
          * Visually conceal the input label. Use sparingly for simple forms only with a descriptive action button.
         */
        "hideLabel": boolean;
        "iconStart"?: IconNames;
        /**
          * Render the label and input field as inline elements.
         */
        "inline": boolean;
        /**
          * A hint to the browser for which keyboard to display.
         */
        "inputmode"?: | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        /**
          * Accessible text label for the input field. Defaults to the input's `name` prop.
         */
        "label"?: string;
        /**
          * The name of the input, submitted as the value's label inside the form data.
         */
        "name": string;
        "placeholder"?: string;
        /**
          * When `true` value must be provided before submitting.
         */
        "required": boolean;
        "type": 'text' | 'password' | 'number' | 'search';
        /**
          * Text value of the input.
         */
        "value"?: number | string;
    }
    interface StencilaMenu {
        /**
          * Determines whether the Menu is shown or not
         */
        "isOpen": boolean;
    }
    interface StencilaMenuItem {
        "icon": IconNames | undefined;
    }
    interface StencilaNodeList {
        /**
          * Array of nodes to render.
         */
        "nodes": Node[] | undefined;
    }
    interface StencilaTab {
        /**
          * The link the tab should navigate to
         */
        "href": string;
        /**
          * Indicates whether the current tab is "selected"
         */
        "isSelected": boolean;
        /**
          * The displayed text of the Tab
         */
        "label": string;
    }
    interface StencilaTabList {
        /**
          * A list of string values to use as tab labels
         */
        "tabs": ChildTab[];
    }
    interface StencilaToast {
        /**
          * Duration in milliseconds for how long the toast should be display
         */
        "duration": number;
        /**
          * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
         */
        "position": ToastPosition | undefined;
        /**
          * Type of the toast to show. Affects the component color scheme.
         */
        "type": ToastType;
    }
    interface StencilaToc {
        /**
          * Where to grab the headings to build the table of contents.
         */
        "contentSelector": string;
        /**
          * Which headings to grab inside of the contentSelector element.
         */
        "headingSelector": string;
    }
    interface StencilaToolbar {
        /**
          * The background fill color of the Navbar
         */
        "color": Colors | string;
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position": 'static' | 'fixed';
    }
    interface StencilaTooltip {
        /**
          * The text content of the Tooltip.
         */
        "text": string;
    }
    interface StencilaTooltipElement {
    }
    interface StencilaVerticalNav {
        /**
          * Collection schema from which to generate a table of contents
         */
        "collection"?: Collection;
    }
}
declare global {
    interface HTMLStencilaActionMenuElement extends Components.StencilaActionMenu, HTMLStencilElement {
    }
    var HTMLStencilaActionMenuElement: {
        prototype: HTMLStencilaActionMenuElement;
        new (): HTMLStencilaActionMenuElement;
    };
    interface HTMLStencilaButtonElement extends Components.StencilaButton, HTMLStencilElement {
    }
    var HTMLStencilaButtonElement: {
        prototype: HTMLStencilaButtonElement;
        new (): HTMLStencilaButtonElement;
    };
    interface HTMLStencilaCodeChunkElement extends Components.StencilaCodeChunk, HTMLStencilElement {
    }
    var HTMLStencilaCodeChunkElement: {
        prototype: HTMLStencilaCodeChunkElement;
        new (): HTMLStencilaCodeChunkElement;
    };
    interface HTMLStencilaCodeErrorElement extends Components.StencilaCodeError, HTMLStencilElement {
    }
    var HTMLStencilaCodeErrorElement: {
        prototype: HTMLStencilaCodeErrorElement;
        new (): HTMLStencilaCodeErrorElement;
    };
    interface HTMLStencilaCodeExpressionElement extends Components.StencilaCodeExpression, HTMLStencilElement {
    }
    var HTMLStencilaCodeExpressionElement: {
        prototype: HTMLStencilaCodeExpressionElement;
        new (): HTMLStencilaCodeExpressionElement;
    };
    interface HTMLStencilaDataTableElement extends Components.StencilaDataTable, HTMLStencilElement {
    }
    var HTMLStencilaDataTableElement: {
        prototype: HTMLStencilaDataTableElement;
        new (): HTMLStencilaDataTableElement;
    };
    interface HTMLStencilaDetailsElement extends Components.StencilaDetails, HTMLStencilElement {
    }
    var HTMLStencilaDetailsElement: {
        prototype: HTMLStencilaDetailsElement;
        new (): HTMLStencilaDetailsElement;
    };
    interface HTMLStencilaEditorElement extends Components.StencilaEditor, HTMLStencilElement {
    }
    var HTMLStencilaEditorElement: {
        prototype: HTMLStencilaEditorElement;
        new (): HTMLStencilaEditorElement;
    };
    interface HTMLStencilaExecutableDocumentToolbarElement extends Components.StencilaExecutableDocumentToolbar, HTMLStencilElement {
    }
    var HTMLStencilaExecutableDocumentToolbarElement: {
        prototype: HTMLStencilaExecutableDocumentToolbarElement;
        new (): HTMLStencilaExecutableDocumentToolbarElement;
    };
    interface HTMLStencilaIconElement extends Components.StencilaIcon, HTMLStencilElement {
    }
    var HTMLStencilaIconElement: {
        prototype: HTMLStencilaIconElement;
        new (): HTMLStencilaIconElement;
    };
    interface HTMLStencilaImageObjectElement extends Components.StencilaImageObject, HTMLStencilElement {
    }
    var HTMLStencilaImageObjectElement: {
        prototype: HTMLStencilaImageObjectElement;
        new (): HTMLStencilaImageObjectElement;
    };
    interface HTMLStencilaInputElement extends Components.StencilaInput, HTMLStencilElement {
    }
    var HTMLStencilaInputElement: {
        prototype: HTMLStencilaInputElement;
        new (): HTMLStencilaInputElement;
    };
    interface HTMLStencilaMenuElement extends Components.StencilaMenu, HTMLStencilElement {
    }
    var HTMLStencilaMenuElement: {
        prototype: HTMLStencilaMenuElement;
        new (): HTMLStencilaMenuElement;
    };
    interface HTMLStencilaMenuItemElement extends Components.StencilaMenuItem, HTMLStencilElement {
    }
    var HTMLStencilaMenuItemElement: {
        prototype: HTMLStencilaMenuItemElement;
        new (): HTMLStencilaMenuItemElement;
    };
    interface HTMLStencilaNodeListElement extends Components.StencilaNodeList, HTMLStencilElement {
    }
    var HTMLStencilaNodeListElement: {
        prototype: HTMLStencilaNodeListElement;
        new (): HTMLStencilaNodeListElement;
    };
    interface HTMLStencilaTabElement extends Components.StencilaTab, HTMLStencilElement {
    }
    var HTMLStencilaTabElement: {
        prototype: HTMLStencilaTabElement;
        new (): HTMLStencilaTabElement;
    };
    interface HTMLStencilaTabListElement extends Components.StencilaTabList, HTMLStencilElement {
    }
    var HTMLStencilaTabListElement: {
        prototype: HTMLStencilaTabListElement;
        new (): HTMLStencilaTabListElement;
    };
    interface HTMLStencilaToastElement extends Components.StencilaToast, HTMLStencilElement {
    }
    var HTMLStencilaToastElement: {
        prototype: HTMLStencilaToastElement;
        new (): HTMLStencilaToastElement;
    };
    interface HTMLStencilaTocElement extends Components.StencilaToc, HTMLStencilElement {
    }
    var HTMLStencilaTocElement: {
        prototype: HTMLStencilaTocElement;
        new (): HTMLStencilaTocElement;
    };
    interface HTMLStencilaToolbarElement extends Components.StencilaToolbar, HTMLStencilElement {
    }
    var HTMLStencilaToolbarElement: {
        prototype: HTMLStencilaToolbarElement;
        new (): HTMLStencilaToolbarElement;
    };
    interface HTMLStencilaTooltipElement extends Components.StencilaTooltip, HTMLStencilElement {
    }
    var HTMLStencilaTooltipElement: {
        prototype: HTMLStencilaTooltipElement;
        new (): HTMLStencilaTooltipElement;
    };
    interface HTMLStencilaTooltipElementElement extends Components.StencilaTooltipElement, HTMLStencilElement {
    }
    var HTMLStencilaTooltipElementElement: {
        prototype: HTMLStencilaTooltipElementElement;
        new (): HTMLStencilaTooltipElementElement;
    };
    interface HTMLStencilaVerticalNavElement extends Components.StencilaVerticalNav, HTMLStencilElement {
    }
    var HTMLStencilaVerticalNavElement: {
        prototype: HTMLStencilaVerticalNavElement;
        new (): HTMLStencilaVerticalNavElement;
    };
    interface HTMLElementTagNameMap {
        "stencila-action-menu": HTMLStencilaActionMenuElement;
        "stencila-button": HTMLStencilaButtonElement;
        "stencila-code-chunk": HTMLStencilaCodeChunkElement;
        "stencila-code-error": HTMLStencilaCodeErrorElement;
        "stencila-code-expression": HTMLStencilaCodeExpressionElement;
        "stencila-data-table": HTMLStencilaDataTableElement;
        "stencila-details": HTMLStencilaDetailsElement;
        "stencila-editor": HTMLStencilaEditorElement;
        "stencila-executable-document-toolbar": HTMLStencilaExecutableDocumentToolbarElement;
        "stencila-icon": HTMLStencilaIconElement;
        "stencila-image-object": HTMLStencilaImageObjectElement;
        "stencila-input": HTMLStencilaInputElement;
        "stencila-menu": HTMLStencilaMenuElement;
        "stencila-menu-item": HTMLStencilaMenuItemElement;
        "stencila-node-list": HTMLStencilaNodeListElement;
        "stencila-tab": HTMLStencilaTabElement;
        "stencila-tab-list": HTMLStencilaTabListElement;
        "stencila-toast": HTMLStencilaToastElement;
        "stencila-toc": HTMLStencilaTocElement;
        "stencila-toolbar": HTMLStencilaToolbarElement;
        "stencila-tooltip": HTMLStencilaTooltipElement;
        "stencila-tooltip-element": HTMLStencilaTooltipElementElement;
        "stencila-vertical-nav": HTMLStencilaVerticalNavElement;
    }
}
declare namespace LocalJSX {
    interface StencilaActionMenu {
        /**
          * List of buttons to include in Action Menu.
         */
        "actions"?: HTMLButtonElement[];
        /**
          * Defines whether the Action Menu can be collapsed and expanded
         */
        "expandable"?: boolean;
    }
    interface StencilaButton {
        /**
          * Screen-reader accessible label to read out.
         */
        "ariaLabel"?: string;
        /**
          * The type of button to render, options correspond to HTML Button `type` attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button Only applies if the button is not an anchor link.
         */
        "buttonType"?: 'button' | 'submit' | 'reset';
        /**
          * The color of the button
         */
        "color"?: Colors;
        /**
          * An optional data attribute set on the button element for easier targeting using JavaScript.
         */
        "dataEl"?: string;
        /**
          * If true, prevents the user from interacting with the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "disabled"?: boolean;
        /**
          * If true, the button will take up the full width of the parent container
         */
        "fill"?: boolean;
        /**
          * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
         */
        "href"?: string;
        /**
          * Name of the icon to render inside the button
          * @see Icon component for possible values
         */
        "icon"?: HTMLElement | IconNames;
        /**
          * If true, removes extra padding from Icon inside the button TODO: See if we can automatically infer removal of padding through CSS
         */
        "iconOnly"?: boolean;
        /**
          * If true, shows a loading spinner icon and sets a `disabled` attribute on the button. Note: Not all browser prevent the click handler from firing on disabled buttons.
         */
        "isLoading"?: boolean;
        /**
          * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
         */
        "isSecondary"?: boolean;
        /**
          * Renders the button without initial background color or border.
         */
        "minimal"?: boolean;
        /**
          * Relationship of the link
          * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel Only applied if `href` prop is also set.
         */
        "rel"?: string;
        /**
          * The overall size of the Button.
         */
        "size"?: 'xsmall' | 'small' | 'default' | 'large';
        /**
          * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute. Only applies if the button is an anchor link. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
         */
        "target"?: HTMLAnchorElement['target'];
        /**
          * An optional help text to display for button focus and hover states.
         */
        "tooltip"?: string;
    }
    interface StencilaCodeChunk {
        /**
          * Autofocus the editor on page load
         */
        "autofocus"?: boolean;
        /**
          * A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`.
         */
        "executeHandler"?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
        /**
          * @deprecated Use `isCodeVisible` prop (`is-code-visible` attribute) instead Whether the code section is visible or not
         */
        "isCodeCollapsed"?: boolean;
        /**
          * Whether the code section is visible or not
         */
        "isCodeVisible"?: boolean;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https://codemirror.net/6/docs/ref/#keymap
         */
        "keymap"?: Keymap[];
        /**
          * Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code, leaving only the results visible.
         */
        "onSetAllCodeVisibility"?: (event: CustomEvent<any>) => void;
        /**
          * Callback function to call when a language of the editor is changed
         */
        "onSetLanguage"?: (language: string) => void;
        /**
          * Programming language of the CodeChunk
         */
        "programmingLanguageProp"?: string;
    }
    interface StencilaCodeError {
        /**
          * The severity of the error message
         */
        "hasStacktrace"?: boolean;
        /**
          * The severity of the error message
         */
        "kind"?: 'incapable' | 'warning' | 'error';
        /**
          * Determines whether the stacktrace is visible or not
         */
        "open"?: boolean;
    }
    interface StencilaCodeExpression {
        /**
          * A callback function to be called with the value of the `CodeExpression` node when execting the `CodeExpression`.
         */
        "executeHandler"?: (
    codeExpression: CodeExpression
  ) => Promise<CodeExpression>;
        /**
          * Programming language of the CodeExpression
         */
        "programmingLanguage"?: string;
    }
    interface StencilaDataTable {
        /**
          * The `Datatable` node to render
         */
        "table"?: Datatable;
    }
    interface StencilaDetails {
        /**
          * Determines whether the contents are visible or not
         */
        "open"?: boolean;
    }
    interface StencilaEditor {
        /**
          * Programming language of the Editor
         */
        "activeLanguage"?: string;
        /**
          * Autofocus the editor on page load
         */
        "autofocus"?: boolean;
        /**
          * Function to be evaluated over the contents of the editor.
         */
        "executeHandler"?: (contents: EditorContents) => Promise<unknown>;
        /**
          * Enables abiility to fold sections of code
         */
        "foldGutter"?: boolean;
        /**
          * Custom keyboard shortcuts to pass along to CodeMirror
          * @see https://codemirror.net/6/docs/ref/#keymap
         */
        "keymap"?: Keymap[];
        /**
          * List of all supported programming languages
         */
        "languageCapabilities"?: string[];
        /**
          * Determines the visibility of line numbers
         */
        "lineNumbers"?: boolean;
        /**
          * Callback function to call when a language of the editor is changed
         */
        "onSetLanguage"?: (language: string) => void;
        /**
          * Disallow editing of the editor contents when set to `true`
         */
        "readOnly"?: boolean;
    }
    interface StencilaExecutableDocumentToolbar {
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position"?: 'fixed' | 'static';
        /**
          * The URL for requesting a SoftwareSession as defined in Stencila Schema. Passed to Stencila Executa for instantiating the session. TODO: If undefined user should be able to set one themselves (e.g. running a local machine)
         */
        "sessionProviderUrl"?: string;
        /**
          * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
         */
        "sourceUrl"?: string;
    }
    interface StencilaIcon {
        /**
          * Name of the icon to be rendered. Corresponds to icon names from the [Remix Icon set](http://remixicon.com)
         */
        "icon"?: IconNames;
        /**
          * Style with which to render the icon
         */
        "iconStyle"?: 'fill' | 'line';
    }
    interface StencilaImageObject {
        /**
          * The `ImageObject` node to render
         */
        "image"?: ImageObject;
    }
    interface StencilaInput {
        /**
          * Automatically bring cursor focus to the input field on render.
         */
        "autoFocus"?: boolean;
        /**
          * Visually conceal the input label. Use sparingly for simple forms only with a descriptive action button.
         */
        "hideLabel"?: boolean;
        "iconStart"?: IconNames;
        /**
          * Render the label and input field as inline elements.
         */
        "inline"?: boolean;
        /**
          * A hint to the browser for which keyboard to display.
         */
        "inputmode"?: | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        /**
          * Accessible text label for the input field. Defaults to the input's `name` prop.
         */
        "label"?: string;
        /**
          * The name of the input, submitted as the value's label inside the form data.
         */
        "name": string;
        "placeholder"?: string;
        /**
          * When `true` value must be provided before submitting.
         */
        "required"?: boolean;
        "type"?: 'text' | 'password' | 'number' | 'search';
        /**
          * Text value of the input.
         */
        "value"?: number | string;
    }
    interface StencilaMenu {
        /**
          * Determines whether the Menu is shown or not
         */
        "isOpen"?: boolean;
    }
    interface StencilaMenuItem {
        "icon"?: IconNames | undefined;
    }
    interface StencilaNodeList {
        /**
          * Array of nodes to render.
         */
        "nodes"?: Node[] | undefined;
    }
    interface StencilaTab {
        /**
          * The link the tab should navigate to
         */
        "href"?: string;
        /**
          * Indicates whether the current tab is "selected"
         */
        "isSelected"?: boolean;
        /**
          * The displayed text of the Tab
         */
        "label"?: string;
    }
    interface StencilaTabList {
        /**
          * A list of string values to use as tab labels
         */
        "tabs": ChildTab[];
    }
    interface StencilaToast {
        /**
          * Duration in milliseconds for how long the toast should be display
         */
        "duration"?: number;
        /**
          * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
         */
        "position"?: ToastPosition | undefined;
        /**
          * Type of the toast to show. Affects the component color scheme.
         */
        "type"?: ToastType;
    }
    interface StencilaToc {
        /**
          * Where to grab the headings to build the table of contents.
         */
        "contentSelector"?: string;
        /**
          * Which headings to grab inside of the contentSelector element.
         */
        "headingSelector"?: string;
    }
    interface StencilaToolbar {
        /**
          * The background fill color of the Navbar
         */
        "color"?: Colors | string;
        /**
          * When `fixed` the Navbar will remain pinned to the top of the screen. Note that if the Navbar component is not followed by a sibling element, you will have to set `margin-top: 3rem` on the following element yourself.
         */
        "position"?: 'static' | 'fixed';
    }
    interface StencilaTooltip {
        /**
          * The text content of the Tooltip.
         */
        "text": string;
    }
    interface StencilaTooltipElement {
    }
    interface StencilaVerticalNav {
        /**
          * Collection schema from which to generate a table of contents
         */
        "collection"?: Collection;
    }
    interface IntrinsicElements {
        "stencila-action-menu": StencilaActionMenu;
        "stencila-button": StencilaButton;
        "stencila-code-chunk": StencilaCodeChunk;
        "stencila-code-error": StencilaCodeError;
        "stencila-code-expression": StencilaCodeExpression;
        "stencila-data-table": StencilaDataTable;
        "stencila-details": StencilaDetails;
        "stencila-editor": StencilaEditor;
        "stencila-executable-document-toolbar": StencilaExecutableDocumentToolbar;
        "stencila-icon": StencilaIcon;
        "stencila-image-object": StencilaImageObject;
        "stencila-input": StencilaInput;
        "stencila-menu": StencilaMenu;
        "stencila-menu-item": StencilaMenuItem;
        "stencila-node-list": StencilaNodeList;
        "stencila-tab": StencilaTab;
        "stencila-tab-list": StencilaTabList;
        "stencila-toast": StencilaToast;
        "stencila-toc": StencilaToc;
        "stencila-toolbar": StencilaToolbar;
        "stencila-tooltip": StencilaTooltip;
        "stencila-tooltip-element": StencilaTooltipElement;
        "stencila-vertical-nav": StencilaVerticalNav;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencila-action-menu": LocalJSX.StencilaActionMenu & JSXBase.HTMLAttributes<HTMLStencilaActionMenuElement>;
            "stencila-button": LocalJSX.StencilaButton & JSXBase.HTMLAttributes<HTMLStencilaButtonElement>;
            "stencila-code-chunk": LocalJSX.StencilaCodeChunk & JSXBase.HTMLAttributes<HTMLStencilaCodeChunkElement>;
            "stencila-code-error": LocalJSX.StencilaCodeError & JSXBase.HTMLAttributes<HTMLStencilaCodeErrorElement>;
            "stencila-code-expression": LocalJSX.StencilaCodeExpression & JSXBase.HTMLAttributes<HTMLStencilaCodeExpressionElement>;
            "stencila-data-table": LocalJSX.StencilaDataTable & JSXBase.HTMLAttributes<HTMLStencilaDataTableElement>;
            "stencila-details": LocalJSX.StencilaDetails & JSXBase.HTMLAttributes<HTMLStencilaDetailsElement>;
            "stencila-editor": LocalJSX.StencilaEditor & JSXBase.HTMLAttributes<HTMLStencilaEditorElement>;
            "stencila-executable-document-toolbar": LocalJSX.StencilaExecutableDocumentToolbar & JSXBase.HTMLAttributes<HTMLStencilaExecutableDocumentToolbarElement>;
            "stencila-icon": LocalJSX.StencilaIcon & JSXBase.HTMLAttributes<HTMLStencilaIconElement>;
            "stencila-image-object": LocalJSX.StencilaImageObject & JSXBase.HTMLAttributes<HTMLStencilaImageObjectElement>;
            "stencila-input": LocalJSX.StencilaInput & JSXBase.HTMLAttributes<HTMLStencilaInputElement>;
            "stencila-menu": LocalJSX.StencilaMenu & JSXBase.HTMLAttributes<HTMLStencilaMenuElement>;
            "stencila-menu-item": LocalJSX.StencilaMenuItem & JSXBase.HTMLAttributes<HTMLStencilaMenuItemElement>;
            "stencila-node-list": LocalJSX.StencilaNodeList & JSXBase.HTMLAttributes<HTMLStencilaNodeListElement>;
            "stencila-tab": LocalJSX.StencilaTab & JSXBase.HTMLAttributes<HTMLStencilaTabElement>;
            "stencila-tab-list": LocalJSX.StencilaTabList & JSXBase.HTMLAttributes<HTMLStencilaTabListElement>;
            "stencila-toast": LocalJSX.StencilaToast & JSXBase.HTMLAttributes<HTMLStencilaToastElement>;
            "stencila-toc": LocalJSX.StencilaToc & JSXBase.HTMLAttributes<HTMLStencilaTocElement>;
            "stencila-toolbar": LocalJSX.StencilaToolbar & JSXBase.HTMLAttributes<HTMLStencilaToolbarElement>;
            "stencila-tooltip": LocalJSX.StencilaTooltip & JSXBase.HTMLAttributes<HTMLStencilaTooltipElement>;
            "stencila-tooltip-element": LocalJSX.StencilaTooltipElement & JSXBase.HTMLAttributes<HTMLStencilaTooltipElementElement>;
            "stencila-vertical-nav": LocalJSX.StencilaVerticalNav & JSXBase.HTMLAttributes<HTMLStencilaVerticalNavElement>;
        }
    }
}
