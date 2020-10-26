import { CodeChunk, CodeExpression } from '@stencila/schema';
export interface CodeVisibilityEvent extends CustomEvent {
  detail: {
    isVisible: boolean;
    /** @deprecated Use `isVisible` instead */
    isCodeCollapsed: boolean;
  };
}
export declare abstract class CodeComponent<C extends CodeChunk | CodeExpression> {
  abstract onSetAllCodeVisibility(event: CodeVisibilityEvent): void;
  executeHandler?: (code: C) => Promise<C>;
  abstract execute: () => Promise<C>;
  abstract getContents(): Promise<C>;
}
