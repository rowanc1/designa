export declare enum ToastTypes {
  info = "info",
  success = "success",
  warn = "warn",
  danger = "danger"
}
export declare type ToastType = keyof typeof ToastTypes;
export declare enum ToastPositions {
  topStart = "topStart",
  topCenter = "topCenter",
  topEnd = "topEnd",
  bottomStart = "bottomStart",
  bottomCenter = "bottomCenter",
  bottomEnd = "bottomEnd"
}
export declare type ToastPosition = keyof typeof ToastPositions;
interface ToastOptions {
  type?: ToastTypes;
  position?: ToastPositions;
}
interface ToastController {
  present: (message: string, options?: ToastOptions) => void;
}
export declare const toastController: (baseOptions?: ToastOptions) => ToastController;
export {};
