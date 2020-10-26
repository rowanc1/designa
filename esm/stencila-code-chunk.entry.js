import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-9edcbeb0.js';
import { l } from './schema-ceac4a12.js';

const defaultCodeChunkCss = "*.sc-stencila-code-chunk-default,.sc-stencila-code-chunk-default:after,.sc-stencila-code-chunk-default:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid}html.sc-stencila-code-chunk-default{font-size:16px}.hidden.sc-stencila-code-chunk-default{display:none}code.sc-stencila-code-chunk-default,code[class*=language-].sc-stencila-code-chunk-default,output.sc-stencila-code-chunk-default{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-default{border:1px solid #e2e8f0;border-color:var(--color-neutral-300,#e2e8f0);border-radius:.25rem;padding:.5rem;margin:.5rem;overflow:auto}.preReset.sc-stencila-code-chunk-default{padding:0;margin:0;border-width:0}.sc-stencila-code-chunk-default-h,stencila-code-chunk.sc-stencila-code-chunk-default{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-200,#edf2f7);--border:var(--color-neutral-300,#e2e8f0);position:relative;display:block;width:100%;margin-top:1rem;margin-bottom:1rem;overflow:hidden;border-width:1px;border-style:solid;border-radius:.25rem;border-color:var(--border)}.sc-stencila-code-chunk-default-h stencila-action-menu.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-action-menu.sc-stencila-code-chunk-default{position:relative;display:block;width:100%;padding:0;border-left-width:0;border-right-width:0;border-radius:0}.sc-stencila-code-chunk-default-h stencila-editor.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-editor.sc-stencila-code-chunk-default{--border-width:0;-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-default-h stencila-node-list.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default stencila-node-list.sc-stencila-code-chunk-default{padding:.5rem;margin:0;background-color:var(--background)}.editorContainer.sc-stencila-code-chunk-default{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto;margin:0;border-width:0 0 1px;border-radius:0;background:var(--background-editor);border-color:var(--border);height:intrinsic}.editorContainer.sc-stencila-code-chunk-default pre.sc-stencila-code-chunk-default,.editorContainer.sc-stencila-code-chunk-default pre[class*=language-].sc-stencila-code-chunk-default{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-default{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-default-h>div.sc-stencila-code-chunk-default,stencila-code-chunk.sc-stencila-code-chunk-default>div.sc-stencila-code-chunk-default{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:stretch;align-items:stretch;width:100%}.editorContainer.sc-stencila-code-chunk-default{width:50%;border-bottom-width:0;border-right-width:1px}stencila-node-list.sc-stencila-code-chunk-default{-ms-flex-positive:1;flex-grow:1;width:50%}}";

const codeChunkMaterialCss = "*.sc-stencila-code-chunk-material,.sc-stencila-code-chunk-material:after,.sc-stencila-code-chunk-material:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid}html.sc-stencila-code-chunk-material{font-size:16px}.hidden.sc-stencila-code-chunk-material{display:none}code.sc-stencila-code-chunk-material,code[class*=language-].sc-stencila-code-chunk-material,output.sc-stencila-code-chunk-material{font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:75%}pre.sc-stencila-code-chunk-material{border:1px solid #e2e8f0;border-color:var(--color-neutral-300,#e2e8f0);border-radius:.25rem;padding:.5rem;margin:.5rem;overflow:auto}.preReset.sc-stencila-code-chunk-material{padding:0;margin:0;border-width:0}.sc-stencila-code-chunk-material-h,stencila-code-chunk.sc-stencila-code-chunk-material{--background:var(--color-stock,#fff);--background-editor:var(--color-neutral-200,#edf2f7);--border:var(--color-neutral-300,#e2e8f0);position:relative;display:block;width:100%;margin-top:1rem;margin-bottom:1rem;overflow:hidden;border-width:1px;border-style:solid;border-radius:.25rem;border-color:var(--border)}.sc-stencila-code-chunk-material-h stencila-action-menu.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-action-menu.sc-stencila-code-chunk-material{position:relative;display:block;width:100%;padding:0;border-left-width:0;border-right-width:0;border-radius:0}.sc-stencila-code-chunk-material-h stencila-editor.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-editor.sc-stencila-code-chunk-material{--border-width:0;-ms-flex-positive:1;flex-grow:1}.sc-stencila-code-chunk-material-h stencila-node-list.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material stencila-node-list.sc-stencila-code-chunk-material{padding:.5rem;margin:0;background-color:var(--background)}.editorContainer.sc-stencila-code-chunk-material{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto;margin:0;border-width:0 0 1px;border-radius:0;background:var(--background-editor);border-color:var(--border);height:intrinsic}.editorContainer.sc-stencila-code-chunk-material pre.sc-stencila-code-chunk-material,.editorContainer.sc-stencila-code-chunk-material pre[class*=language-].sc-stencila-code-chunk-material{background-color:transparent}.editorContainer.hidden.sc-stencila-code-chunk-material{display:none}@media (min-width:1024px){.sc-stencila-code-chunk-material-h>div.sc-stencila-code-chunk-material,stencila-code-chunk.sc-stencila-code-chunk-material>div.sc-stencila-code-chunk-material{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:stretch;align-items:stretch;width:100%}.editorContainer.sc-stencila-code-chunk-material{width:50%;border-bottom-width:0;border-right-width:1px}stencila-node-list.sc-stencila-code-chunk-material{-ms-flex-positive:1;flex-grow:1;width:50%}}";

const CodeChunkComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.setAllCodeVisibility = createEvent(this, "setAllCodeVisibility", 7);
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
      this.codeErrors = errors.map((error) => (h("stencila-code-error", { kind: error.errorType, hasStacktrace: error.stackTrace !== undefined }, error.errorMessage, h("pre", { slot: "stacktrace" }, error.stackTrace))));
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
      return l({ text, programmingLanguage: language });
    }
    return l({ text: '' });
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
      } }, h("stencila-action-menu", { expandable: true }, this.executeHandler !== undefined && (h("stencila-button", { icon: "play", minimal: true, color: "key", class: "run", size: "xsmall", tooltip: "Run", iconOnly: true, slot: "persistentActions", onClick: this.executeRef, isLoading: this.executeCodeState === 'PENDING' })), h("stencila-button", { minimal: true, color: "key", class: "sourceToggle", onClick: this.toggleCodeVisibility, icon: this.isCodeVisibleState ? 'eye-off' : 'eye', iconOnly: true, size: "xsmall", slot: "persistentActions", tooltip: `${this.isCodeVisibleState ? 'Hide' : 'Show'} Code` })), h("div", null, h("div", { class: {
        editorContainer: true,
        hidden: !this.isCodeVisibleState,
      } }, h("stencila-editor", { activeLanguage: this.programmingLanguageProp, autofocus: this.autofocus, executeHandler: this.onExecuteHandler, keymap: this.keymap, readOnly: this.executeHandler === undefined }, h("slot", { name: CodeChunkComponent.slots.text }))), h("stencila-node-list", { nodes: this.outputs }, h("slot", { name: CodeChunkComponent.slots.outputs }), this.codeErrors))));
  }
  get el() { return getElement(this); }
};
CodeChunkComponent.slots = {
  text: 'text',
  outputs: 'outputs',
};
CodeChunkComponent.style = {
  default: defaultCodeChunkCss,
  material: codeChunkMaterialCss
};

export { CodeChunkComponent as stencila_code_chunk };
