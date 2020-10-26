import { EventEmitter } from '../../stencil-public-runtime';
import { CodeChunk } from '@stencila/schema';
import { CodeComponent, CodeVisibilityEvent } from '../code/codeTypes';
import { Keymap } from '../editor/editor';
export declare class CodeChunkComponent implements CodeComponent<CodeChunk> {
  private static readonly slots;
  private el;
  private editorRef;
  /**
   * Autofocus the editor on page load
   */
  autofocus: boolean;
  /**
   * Programming language of the CodeChunk
   */
  programmingLanguageProp: string;
  /**
   * Callback function to call when a language of the editor is changed
   */
  onSetLanguage?: (language: string) => void;
  /**
   * @deprecated Use `isCodeVisible` prop (`is-code-visible` attribute) instead
   * Whether the code section is visible or not
   */
  isCodeCollapsed: boolean;
  /**
   * Whether the code section is visible or not
   */
  isCodeVisible: boolean;
  /**
   * A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`.
   */
  executeHandler?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  keymap: Keymap[];
  executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED';
  outputs: CodeChunk['outputs'];
  codeErrors: CodeChunk['errors'];
  private isCodeVisibleState;
  /**
   * Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code,
   * leaving only the results visible.
   */
  setAllCodeVisibility: EventEmitter;
  onSetAllCodeVisibility(event: CodeVisibilityEvent): void;
  private toggleCodeVisibility;
  private toggleAllCodeVisibility;
  private onExecuteHandler;
  componentDidLoad(): void;
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  getContents(): Promise<CodeChunk>;
  /**
   * Run the `CodeChunk`
   */
  execute(): Promise<CodeChunk>;
  private executeRef;
  private updateErrors;
  private setAllCodeVisibilityHandler;
  private setCodeVisibility;
  render(): HTMLElement;
}
