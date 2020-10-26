import { autocompletion, startCompletion } from '@codemirror/next/autocomplete';
import { closeBrackets, closeBracketsKeymap, } from '@codemirror/next/closebrackets';
import { defaultKeymap } from '@codemirror/next/commands';
import { commentKeymap } from '@codemirror/next/comment';
import { foldGutter, foldKeymap } from '@codemirror/next/fold';
import { lineNumbers } from '@codemirror/next/gutter';
import { defaultHighlighter } from '@codemirror/next/highlight';
import { history, historyKeymap } from '@codemirror/next/history';
import { python } from '@codemirror/next/lang-python';
import { bracketMatching } from '@codemirror/next/matchbrackets';
import { EditorState, tagExtension } from '@codemirror/next/state';
import { EditorView, highlightSpecialChars, keymap, drawSelection, } from '@codemirror/next/view';
import { Component, Element, h, Host, Method, Prop, Watch } from '@stencil/core';
import { deleteToLineStart } from './commands';
const slots = {
  text: 'text',
};
const cssClasses = {
  container: 'editorContainer',
  editor: 'editor',
};
const cssIds = {
  editorTarget: 'editorTarget',
};
export class Editor {
  constructor() {
    var _a, _b;
    /**
     * List of all supported programming languages
     */
    this.languageCapabilities = ['Bash', 'R', 'Python'];
    /**
     * Disallow editing of the editor contents when set to `true`
     */
    this.readOnly = false;
    // Mutable CodeMirror states need to be "tagged". @see https://codemirror.net/6/docs/ref/#state.tagExtension
    this.readOnlyTag = Symbol('readOnly');
    /**
     * Changes the active programming language of the editor.
     * Does not affect syntax highlighting.
     */
    this.setLanguage = (e) => {
      const target = e.currentTarget;
      this.activeLanguage = target.value.toLowerCase();
      if (this.onSetLanguage) {
        this.onSetLanguage(target.value);
      }
    };
    /**
     * Programming language of the Editor
     */
    // eslint-disable-next-line @stencil/strict-mutable
    this.activeLanguage = (_b = (_a = this.languageCapabilities[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
    /**
     * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
     */
    this.execute = () => {
      this.getContents()
        .then((contents) => {
        return this.executeHandler ? this.executeHandler(contents) : contents;
      })
        .catch((err) => {
        console.error(err);
        return false;
      });
      return true;
    };
    /**
     * Autofocus the editor on page load
     */
    this.autofocus = false;
    /**
     * Determines the visibility of line numbers
     */
    this.lineNumbers = true;
    /**
     * Enables abiility to fold sections of code
     */
    this.foldGutter = true;
    /**
     * Custom keyboard shortcuts to pass along to CodeMirror
     * @see https://codemirror.net/6/docs/ref/#keymap
     */
    this.keymap = [];
    this.initCodeMirror = () => {
      var _a, _b, _c, _d;
      const root = this.el;
      const slot = root.querySelector('[slot]');
      const textContent = (_c = (_a = slot === null || slot === void 0 ? void 0 : slot.textContent) !== null && _a !== void 0 ? _a : (_b = root === null || root === void 0 ? void 0 : root.querySelector(`#${cssIds.editorTarget}`)) === null || _b === void 0 ? void 0 : _b.textContent) !== null && _c !== void 0 ? _c : '';
      const extensions = [
        history(),
        autocompletion(),
        bracketMatching(),
        closeBrackets(),
        defaultHighlighter,
        python(),
        drawSelection(),
        EditorState.allowMultipleSelections.of(true),
        highlightSpecialChars(),
        keymap([
          ...defaultKeymap,
          ...commentKeymap,
          ...closeBracketsKeymap,
          ...historyKeymap,
          ...foldKeymap,
          {
            key: 'Ctrl-Space',
            run: startCompletion,
          },
          {
            key: 'Mod-Backspace',
            run: deleteToLineStart,
          },
          {
            key: 'Shift-Enter',
            run: this.execute,
          },
          ...this.keymap,
        ]),
        tagExtension(this.readOnlyTag, EditorView.editable.of(!this.readOnly)),
      ];
      if (this.lineNumbers) {
        extensions.push(lineNumbers());
      }
      if (this.foldGutter) {
        extensions.push(foldGutter());
      }
      this.editorRef = new EditorView({
        state: EditorState.create({
          doc: textContent,
          extensions,
        }),
      });
      return (_d = root === null || root === void 0 ? void 0 : root.querySelector(`#${cssIds.editorTarget}`)) === null || _d === void 0 ? void 0 : _d.replaceWith(this.editorRef.dom);
    };
    this.getContent = () => this.editorRef.state.doc.toString();
    /**
     * Prevents keyboard event listeners attached to parent DOM elements from firing.
     * This is to avoid conflicts when user has focused on the editor.
     */
    this.stopEventPropagation = (e) => {
      e.stopPropagation();
    };
    /**
     * Brings DOM focus to the editor
     */
    this.focusEditor = () => {
      this.editorRef.focus();
    };
  }
  /**
   * Update the CodeMirror internal state when the `readOnly` prop changes
   */
  readOnlyChanged(nextReadOnly, prevReadOnly) {
    if (nextReadOnly !== prevReadOnly) {
      this.editorRef.dispatch({
        reconfigure: {
          [this.readOnlyTag]: EditorView.editable.of(!this.readOnly),
        },
      });
    }
  }
  /**
   * Public method, returning the Editor contents and active language.
   */
  async getContents() {
    return Promise.resolve({
      text: this.getContent(),
      language: this.activeLanguage,
    });
  }
  /**
   * Public method, to replace the contents of the Editor with a supplied string.
   */
  setContents(contents) {
    const docState = this.editorRef.state;
    const transaction = docState.update({
      changes: {
        from: 0,
        to: docState.doc.length,
        insert: contents,
      },
      scrollIntoView: true,
    });
    this.editorRef.dispatch(transaction);
    return Promise.resolve(contents);
  }
  componentDidLoad() {
    this.initCodeMirror();
    if (this.autofocus) {
      this.focusEditor();
    }
  }
  disconnectedCallback() {
    this.editorRef.destroy();
  }
  render() {
    return (h(Host, null,
      h("div", { class: cssClasses.container },
        h("div", { class: cssClasses.editor, onKeyDown: this.stopEventPropagation, onClick: this.focusEditor },
          h("div", { class: "hidden" },
            h("slot", { name: slots.text })),
          h("div", { id: cssIds.editorTarget })),
        h("menu", null,
          h("label", { "aria-label": "Programming Language" },
            h("stencila-icon", { icon: "terminal" }),
            h("select", { onChange: this.setLanguage }, this.languageCapabilities.map((language) => (h("option", { value: language.toLowerCase(), selected: language.toLowerCase() === this.activeLanguage }, language)))))))));
  }
  static get is() { return "stencila-editor"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["editor.css"],
    "material": ["editor.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["editor.css"],
    "material": ["editor.material.css"]
  }; }
  static get properties() { return {
    "languageCapabilities": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "List of all supported programming languages"
      },
      "defaultValue": "['Bash', 'R', 'Python']"
    },
    "readOnly": {
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
        "text": "Disallow editing of the editor contents when set to `true`"
      },
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "false"
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
    "activeLanguage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Programming language of the Editor"
      },
      "attribute": "active-language",
      "reflect": true,
      "defaultValue": "this.languageCapabilities[0]?.toLowerCase() ?? ''"
    },
    "executeHandler": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(contents: EditorContents) => Promise<unknown>",
        "resolved": "((contents: EditorContents) => Promise<unknown>) | undefined",
        "references": {
          "EditorContents": {
            "location": "local"
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
        "text": "Function to be evaluated over the contents of the editor."
      }
    },
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
    "lineNumbers": {
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
        "text": "Determines the visibility of line numbers"
      },
      "attribute": "line-numbers",
      "reflect": false,
      "defaultValue": "true"
    },
    "foldGutter": {
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
        "text": "Enables abiility to fold sections of code"
      },
      "attribute": "fold-gutter",
      "reflect": false,
      "defaultValue": "true"
    },
    "keymap": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Keymap[]",
        "resolved": "KeyBinding[]",
        "references": {
          "Keymap": {
            "location": "local"
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
  static get methods() { return {
    "getContents": {
      "complexType": {
        "signature": "() => Promise<EditorContents>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "EditorContents": {
            "location": "local"
          }
        },
        "return": "Promise<EditorContents>"
      },
      "docs": {
        "text": "Public method, returning the Editor contents and active language.",
        "tags": []
      }
    },
    "setContents": {
      "complexType": {
        "signature": "(contents: string) => Promise<string>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<string>"
      },
      "docs": {
        "text": "Public method, to replace the contents of the Editor with a supplied string.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "readOnly",
      "methodName": "readOnlyChanged"
    }]; }
}
