var ToastTypes;
(function (ToastTypes) {
  ToastTypes["info"] = "info";
  ToastTypes["success"] = "success";
  ToastTypes["warn"] = "warn";
  ToastTypes["danger"] = "danger";
})(ToastTypes || (ToastTypes = {}));
var ToastPositions;
(function (ToastPositions) {
  ToastPositions["topStart"] = "topStart";
  ToastPositions["topCenter"] = "topCenter";
  ToastPositions["topEnd"] = "topEnd";
  ToastPositions["bottomStart"] = "bottomStart";
  ToastPositions["bottomCenter"] = "bottomCenter";
  ToastPositions["bottomEnd"] = "bottomEnd";
})(ToastPositions || (ToastPositions = {}));
const init = (options) => {
  const toastContainer = document.querySelector('.stencila-toast-container');
  if (toastContainer) {
    return toastContainer;
  }
  const container = document.createElement('animate-presence');
  container.classList.add('stencila-toast-container');
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('role', 'status');
  // TODO: Look into `aria-relevant="additions"` not silencing node removals in VoiceOver
  container.setAttribute('aria-relevant', 'additions');
  if (options.position !== undefined) {
    container.setAttribute('position', options.position);
  }
  document.body.append(container);
  return container;
};
// Base Toast controller function for managing the presentation of `stencila-toast` components
const toastController = (baseOptions = {}) => ({
  present: (message, options = {}) => {
    var _a, _b, _c, _d;
    const el = document.createElement('stencila-toast');
    el.type = (_b = (_a = options.type) !== null && _a !== void 0 ? _a : baseOptions.type) !== null && _b !== void 0 ? _b : ToastTypes.info;
    el.position = (_d = (_c = options.position) !== null && _c !== void 0 ? _c : baseOptions.position) !== null && _d !== void 0 ? _d : ToastPositions.topCenter;
    el.innerText = message;
    init(baseOptions).append(el);
  },
});

const toastController$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get ToastTypes () { return ToastTypes; },
  get ToastPositions () { return ToastPositions; },
  toastController: toastController
});

export { ToastTypes as T, toastController as a, ToastPositions as b, toastController$1 as t };
