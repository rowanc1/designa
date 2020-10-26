import { ToastPosition, ToastType } from './toastController';
export declare class StencilaToast {
  private el;
  /**
   * Duration in milliseconds for how long the toast should be display
   */
  duration: number;
  /**
   * Type of the toast to show. Affects the component color scheme.
   */
  type: ToastType;
  /**
   * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
   */
  position: ToastPosition | undefined;
  componentDidLoad(): void;
  render(): any;
}
