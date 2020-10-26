import { KeyBinding as KeymapI } from '@codemirror/next/view';
export interface EditorContents {
  text: string;
  language: string;
}
export declare type Keymap = KeymapI;
export declare class Editor {
  private el;
  private editorRef;
  /**
   * List of all supported programming languages
   */
  languageCapabilities: string[];
  /**
   * Disallow editing of the editor contents when set to `true`
   */
  readOnly: boolean;
  /**
   * Update the CodeMirror internal state when the `readOnly` prop changes
   */
  readOnlyChanged(nextReadOnly: boolean, prevReadOnly: boolean): void;
  private readOnlyTag;
  /**
   * Callback function to call when a language of the editor is changed
   */
  onSetLanguage?: (language: string) => void;
  /**
   * Changes the active programming language of the editor.
   * Does not affect syntax highlighting.
   */
  private setLanguage;
  /**
   * Programming language of the Editor
   */
  activeLanguage: string;
  /**
   * Function to be evaluated over the contents of the editor.
   */
  executeHandler?: (contents: EditorContents) => Promise<unknown>;
  /**
   * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
   */
  private execute;
  /**
   * Autofocus the editor on page load
   */
  autofocus: boolean;
  /**
   * Determines the visibility of line numbers
   */
  lineNumbers: boolean;
  /**
   * Enables abiility to fold sections of code
   */
  foldGutter: boolean;
  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  keymap: Keymap[];
  private initCodeMirror;
  private getContent;
  /**
   * Public method, returning the Editor contents and active language.
   */
  getContents(): Promise<EditorContents>;
  /**
   * Public method, to replace the contents of the Editor with a supplied string.
   */
  setContents(contents: string): Promise<string>;
  /**
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation;
  /**
   * Brings DOM focus to the editor
   */
  private focusEditor;
  protected componentDidLoad(): void;
  protected disconnectedCallback(): void;
  render(): any;
}
