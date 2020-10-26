export declare class ActionMenu {
  private el;
  /**
   * List of buttons to include in Action Menu.
   */
  actions: HTMLButtonElement[];
  /**
   * Defines whether the Action Menu can be collapsed and expanded
   */
  expandable: boolean;
  private hasSecondaryActions;
  private isCollapsed;
  private toggleActionMenu;
  private width;
  private isAnimating;
  private actionContainerRef;
  private isTransitioning;
  private calculateWidth;
  private observer;
  private checkForSecondaryActions;
  protected componentDidLoad(): void;
  protected disconnectedCallback(): void;
  render(): any;
}
