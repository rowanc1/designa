export declare class TableOfContents {
  static readonly elementName = "stencila-toc";
  /**
   * Where to grab the headings to build the table of contents.
   */
  contentSelector: string;
  /**
   * Which headings to grab inside of the contentSelector element.
   */
  headingSelector: string;
  private initTOC;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): HTMLElement;
}
