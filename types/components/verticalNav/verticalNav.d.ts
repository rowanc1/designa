import { Collection } from '@stencila/schema';
export declare class VerticalNav {
  /**
   * Collection schema from which to generate a table of contents
   */
  collection?: Collection;
  private _collection?;
  componentWillLoad(): void;
  render(): HTMLElement;
}
