import { Component, Element, Event, h, Host, Listen, Method, Prop, State, } from '@stencil/core';
import { codeChunk } from '@stencila/schema';
export class CodeChunkComponent {
  constructor() {
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    /**
     * @deprecated Use `isCodeVisible` prop (`is-code-visible` attribute) instead
     * Whether the code section is visible or not
     */
    this.isCodeCollapsed = false;
    /**
     * Whether the code section is visible or not
     */
    this.isCodeVisible = false;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    this.executeCodeState = 'INITIAL';
    this.isCodeVisibleState = this.isCodeVisible;
    this.toggleCodeVisibility = (e) => {
      if (e.shiftKey) {
        this.toggleAllCodeVisibility();
      }
      else {
        this.isCodeVisibleState = !this.isCodeVisibleState;
      }
    };
    this.toggleAllCodeVisibility = () => this.setAllCodeVisibilityHandler(!this.isCodeVisibleState);
    this.onExecuteHandler = async () => {
      this.executeCodeState = 'PENDING';
      const node = await this.getContents();
      if (this.executeHandler !== undefined) {
        const computed = await this.executeHandler(node);
        this.executeCodeState = 'RESOLVED';
        this.updateErrors(computed.errors);
        this.outputs = computed.outputs;
        return computed;
      }
      this.executeCodeState = 'RESOLVED';
      return node;
    };
    // Create an execute handler bound to this instance
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
    this.executeRef = () => this.execute();
    this.updateErrors = (errors = []) => {
      this.codeErrors = errors.map((error) => (h("stencila-code-error", { kind: error.errorType, hasStacktrace: error.stackTrace !== undefined },
        error.errorMessage,
        h("pre", { slot: "stacktrace" }, error.stackTrace))));
    };
    this.setCodeVisibility = (e) => {
      var _a;
      // TODO: Remove usage of `isCodeCollapsed` once prop is fully deprecated.
      this.isCodeVisibleState = (_a = e.detail.isVisible) !== null && _a !== void 0 ? _a : e.detail.isCodeCollapsed;
    };
  }
  onSetAllCodeVisibility(event) {
    this.setCodeVisibility(event);
  }
  componentDidLoad() {
    this.editorRef = this.el.querySelector('stencila-editor');
  }
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  async getContents() {
    var _a;
    if (this.editorRef) {
      const { text, language } = await ((_a = this.editorRef) === null || _a === void 0 ? void 0 : _a.getContents());
      return codeChunk({ text, programmingLanguage: language });
    }
    return codeChunk({ text: '' });
  }
  /**
   * Run the `CodeChunk`
   */
  async execute() {
    this.executeCodeState = 'PENDING';
    try {
      const res = await this.onExecuteHandler();
      // Add artificial delay to allow user to register the spinner
      window.setTimeout(() => (this.executeCodeState = 'RESOLVED'), 250);
      return res;
    }
    catch (err) {
      console.error(err);
      this.executeCodeState = 'RESOLVED';
      return err;
    }
  }
  setAllCodeVisibilityHandler(isVisible) {
    this.setAllCodeVisibility.emit({ isVisible });
  }
  render() {
    return (h(Host, { class: {
        isCodeVisible: this.isCodeVisibleState,
      } },
      h("stencila-action-menu", { expandable: true },
        this.executeHandler !== undefined && (h("stencila-button", { icon: "play", minimal: true, color: "key", class: "run", size: "xsmall", tooltip: "Run", iconOnly: true, slot: "persistentActions", onClick: this.executeRef, isLoading: this.executeCodeState === 'PENDING' })),
        h("stencila-button", { minimal: true, color: "key", class: "sourceToggle", onClick: this.toggleCodeVisibility, icon: this.isCodeVisibleState ? 'eye-off' : 'eye', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isCodeVisibleState ? 'Hide' : 'Show'} Code` })),
      h("div", null,
        h("div", { class: {
            editorContainer: true,
            hidden: !this.isCodeVisibleState,
          } },
          h("stencila-editor", { activeLanguage: this.programmingLanguageProp, autofocus: this.autofocus, executeHandler: this.onExecuteHandler, keymap: this.keymap, readOnly: this.executeHandler === undefined },
            h("slot", { name: CodeChunkComponent.slots.text }))),
        h("stencila-node-list", { nodes: this.outputs },
          h("slot", { name: CodeChunkComponent.slots.outputs }),
          this.codeErrors))));
  }
  static get is() { return "stencila-code-chunk"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["codeChunk.css"],
    "material": ["codeChunk.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["codeChunk.css"],
    "material": ["codeChunk.material.css"]
  }; }
  static get properties() { return {
    "autofocus": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Autofocus the editor on page load"
      },
      "attribute": "autofocus",
      "reflect": false,
      "defaultValue": "false"
    },
    "programmingLanguageProp": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Programming language of the CodeChunk"
      },
      "attribute": "data-programminglanguage",
      "reflect": false
    },
    "onSetLanguage": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(language: string) => void",
        "resolved": "((language: string) => void) | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Callback function to call when a language of the editor is changed"
      }
    },
    "isCodeCollapsed": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "Use `isCodeVisible` prop (`is-code-visible` attribute) instead\nWhether the code section is visible or not",
            "name": "deprecated"
          }],
        "text": ""
      },
      "attribute": "data-collapsed",
      "reflect": false,
      "defaultValue": "false"
    },
    "isCodeVisible": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the code section is visible or not"
      },
      "attribute": "is-code-visible",
      "reflect": false,
      "defaultValue": "false"
    },
    "executeHandler": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(codeChunk: CodeChunk) => Promise<CodeChunk>",
        "resolved": "((codeChunk: CodeChunk) => Promise<CodeChunk>) | undefined",
        "references": {
          "CodeChunk": {
            "location": "import",
            "path": "@stencila/schema"
          },
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`."
      }
    },
    "keymap": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Keymap[]",
        "resolved": "KeyBinding[]",
        "references": {
          "Keymap": {
            "location": "import",
            "path": "../editor/editor"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "https://codemirror.net/6/docs/ref/#keymap",
            "name": "see"
          }],
        "text": "Custom keyboard shortcuts to pass along to CodeMirror"
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "executeCodeState": {},
    "outputs": {},
    "codeErrors": {},
    "isCodeVisibleState": {}
  }; }
  static get events() { return [{
      "method": "setAllCodeVisibility",
      "name": "setAllCodeVisibility",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code,\nleaving only the results visible."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getContents": {
      "complexType": {
        "signature": "() => Promise<CodeChunk>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CodeChunk": {
            "location": "import",
            "path": "@stencila/schema"
          }
        },
        "return": "Promise<CodeChunk>"
      },
      "docs": {
        "text": "Returns the `CodeChunk` node with the updated `text` content from the editor.",
        "tags": []
      }
    },
    "execute": {
      "complexType": {
        "signature": "() => Promise<CodeChunk>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CodeChunk": {
            "location": "import",
            "path": "@stencila/schema"
          }
        },
        "return": "Promise<CodeChunk>"
      },
      "docs": {
        "text": "Run the `CodeChunk`",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "collapseAllCode",
      "method": "onSetAllCodeVisibility",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "setAllCodeVisibility",
      "method": "onSetAllCodeVisibility",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
CodeChunkComponent.slots = {
  text: 'text',
  outputs: 'outputs',
};
