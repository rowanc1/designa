export declare class Error {
  /**
   * Determines whether the stacktrace is visible or not
   */
  open: boolean;
  /**
   * The severity of the error message
   */
  kind: 'incapable' | 'warning' | 'error';
  /**
   * The severity of the error message
   */
  hasStacktrace: boolean;
  render(): any;
}
