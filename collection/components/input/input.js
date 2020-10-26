import { Component, Host, h, Prop } from '@stencil/core';
export class Input {
  constructor() {
    /**
     * Automatically bring cursor focus to the input field on render.
     */
    this.autoFocus = false;
    /*
     * Type of input field.
     */
    this.type = 'text';
    /**
     * Visually conceal the input label.
     * Use sparingly for simple forms only with a descriptive action button.
     */
    this.hideLabel = false;
    /**
     * Render the label and input field as inline elements.
     */
    this.inline = false;
    /**
     * When `true` value must be provided before submitting.
     */
    this.required = false;
    /**
     * Text value of the input.
     */
    this.value = '';
  }
  render() {
    var _a;
    const _type = this.type === 'number'
      ? {
        type: 'text',
        inputmode: 'numeric',
        pattern: '[0-9]*',
      }
      : { type: this.type };
    const _label = this.label === undefined || this.hideLabel
      ? {
        'aria-label': (_a = this.label) !== null && _a !== void 0 ? _a : this.name,
      }
      : { 'aria-labelledby': `${this.name}-label` };
    return (h(Host, { class: { inline: this.inline } },
      this.iconStart && (h("stencila-icon", { icon: this.iconStart })),
      h("input", Object.assign({}, _type, _label, { autoFocus: this.autoFocus, inputmode: this.inputmode, name: this.name, placeholder: this.placeholder, required: this.required, value: this.value }))));
  }
  static get is() { return "stencila-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["input.css"],
    "material": ["input.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["input.css"],
    "material": ["input.material.css"]
  }; }
  static get properties() { return {
    "autoFocus": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Automatically bring cursor focus to the input field on render."
      },
      "attribute": "auto-focus",
      "reflect": false,
      "defaultValue": "false"
    },
    "inputmode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'text'\n    | 'tel'\n    | 'url'\n    | 'email'\n    | 'numeric'\n    | 'decimal'\n    | 'search'",
        "resolved": "\"decimal\" | \"email\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A hint to the browser for which keyboard to display."
      },
      "attribute": "inputmode",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'text' | 'password' | 'number' | 'search'",
        "resolved": "\"number\" | \"password\" | \"search\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of the input, submitted as the value's label inside the form data."
      },
      "attribute": "name",
      "reflect": false
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Accessible text label for the input field. Defaults to the input's `name` prop."
      },
      "attribute": "label",
      "reflect": false
    },
    "hideLabel": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Visually conceal the input label.\nUse sparingly for simple forms only with a descriptive action button."
      },
      "attribute": "hide-label",
      "reflect": false,
      "defaultValue": "false"
    },
    "inline": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Render the label and input field as inline elements."
      },
      "attribute": "inline",
      "reflect": false,
      "defaultValue": "false"
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "iconStart": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconNames",
        "resolved": "\"function\" | \"key\" | \"stock\" | \"24-hours\" | \"4k\" | \"a-b\" | \"account-box\" | \"account-circle\" | \"account-pin-box\" | \"account-pin-circle\" | \"add\" | \"add-box\" | \"add-circle\" | \"admin\" | \"advertisement\" | \"airplay\" | \"alarm\" | \"alarm-warning\" | \"album\" | \"alert\" | \"aliens\" | \"align-bottom\" | \"align-center\" | \"align-justify\" | \"align-left\" | \"align-right\" | \"align-top\" | \"align-vertically\" | \"alipay\" | \"amazon\" | \"anchor\" | \"ancient-gate\" | \"ancient-pavilion\" | \"android\" | \"angularjs\" | \"anticlockwise\" | \"anticlockwise-2\" | \"app-store\" | \"apple\" | \"apps\" | \"apps-2\" | \"archive\" | \"archive-drawer\" | \"arrow-down\" | \"arrow-down-circle\" | \"arrow-down-s\" | \"arrow-drop-down\" | \"arrow-drop-left\" | \"arrow-drop-right\" | \"arrow-drop-up\" | \"arrow-go-back\" | \"arrow-go-forward\" | \"arrow-left\" | \"arrow-left-circle\" | \"arrow-left-down\" | \"arrow-left-right\" | \"arrow-left-s\" | \"arrow-left-up\" | \"arrow-right\" | \"arrow-right-circle\" | \"arrow-right-down\" | \"arrow-right-s\" | \"arrow-right-up\" | \"arrow-up\" | \"arrow-up-circle\" | \"arrow-up-down\" | \"arrow-up-s\" | \"artboard\" | \"artboard-2\" | \"article\" | \"aspect-ratio\" | \"asterisk\" | \"at\" | \"attachment\" | \"attachment-2\" | \"auction\" | \"award\" | \"baidu\" | \"ball-pen\" | \"bank\" | \"bank-card\" | \"bank-card-2\" | \"bar-chart\" | \"bar-chart-2\" | \"bar-chart-box\" | \"bar-chart-grouped\" | \"bar-chart-horizontal\" | \"barcode\" | \"barcode-box\" | \"barricade\" | \"base-station\" | \"basketball\" | \"battery\" | \"battery-2\" | \"battery-2-charge\" | \"battery-charge\" | \"battery-low\" | \"battery-saver\" | \"battery-share\" | \"bear-smile\" | \"behance\" | \"bell\" | \"bike\" | \"bilibili\" | \"bill\" | \"billiards\" | \"bit-coin\" | \"blaze\" | \"bluetooth\" | \"bluetooth-connect\" | \"blur-off\" | \"body-scan\" | \"bold\" | \"book\" | \"book-2\" | \"book-3\" | \"book-mark\" | \"book-open\" | \"book-read\" | \"booklet\" | \"bookmark\" | \"bookmark-2\" | \"bookmark-3\" | \"boxing\" | \"braces\" | \"brackets\" | \"briefcase\" | \"briefcase-2\" | \"briefcase-3\" | \"briefcase-4\" | \"briefcase-5\" | \"bring-forward\" | \"bring-to-front\" | \"broadcast\" | \"brush\" | \"brush-2\" | \"brush-3\" | \"brush-4\" | \"bubble-chart\" | \"bug\" | \"bug-2\" | \"building\" | \"building-2\" | \"building-3\" | \"building-4\" | \"bus\" | \"bus-2\" | \"bus-wifi\" | \"cactus\" | \"cake\" | \"cake-2\" | \"cake-3\" | \"calculator\" | \"calendar\" | \"calendar-2\" | \"calendar-check\" | \"calendar-event\" | \"calendar-todo\" | \"camera\" | \"camera-2\" | \"camera-3\" | \"camera-lens\" | \"camera-off\" | \"camera-switch\" | \"capsule\" | \"car\" | \"car-washing\" | \"caravan\" | \"cast\" | \"cellphone\" | \"celsius\" | \"centos\" | \"character-recognition\" | \"charging-pile\" | \"charging-pile-2\" | \"chat-1\" | \"chat-2\" | \"chat-3\" | \"chat-4\" | \"chat-check\" | \"chat-delete\" | \"chat-download\" | \"chat-follow-up\" | \"chat-forward\" | \"chat-heart\" | \"chat-history\" | \"chat-new\" | \"chat-off\" | \"chat-poll\" | \"chat-private\" | \"chat-quote\" | \"chat-settings\" | \"chat-smile\" | \"chat-smile-2\" | \"chat-smile-3\" | \"chat-upload\" | \"chat-voice\" | \"check\" | \"check-double\" | \"checkbox\" | \"checkbox-blank\" | \"checkbox-blank-circle\" | \"checkbox-circle\" | \"checkbox-indeterminate\" | \"checkbox-multiple\" | \"checkbox-multiple-blank\" | \"china-railway\" | \"chrome\" | \"clapperboard\" | \"clipboard\" | \"clockwise\" | \"clockwise-2\" | \"close\" | \"close-circle\" | \"closed-captioning\" | \"cloud\" | \"cloud-off\" | \"cloud-windy\" | \"cloudy\" | \"cloudy-2\" | \"code\" | \"code-box\" | \"code-s\" | \"code-s-slash\" | \"code-view\" | \"codepen\" | \"coin\" | \"coins\" | \"collage\" | \"command\" | \"community\" | \"compass\" | \"compass-2\" | \"compass-3\" | \"compass-4\" | \"compass-discover\" | \"compasses\" | \"compasses-2\" | \"computer\" | \"contacts\" | \"contacts-book\" | \"contacts-book-2\" | \"contacts-book-upload\" | \"contrast\" | \"contrast-2\" | \"contrast-drop\" | \"contrast-drop-2\" | \"copper-coin\" | \"copper-diamond\" | \"copyleft\" | \"copyright\" | \"coreos\" | \"coupon\" | \"coupon-2\" | \"coupon-3\" | \"coupon-4\" | \"coupon-5\" | \"cpu\" | \"creative-commons\" | \"creative-commons-by\" | \"creative-commons-nc\" | \"creative-commons-nd\" | \"creative-commons-sa\" | \"creative-commons-zero\" | \"criminal\" | \"crop\" | \"crop-2\" | \"css3\" | \"cup\" | \"currency\" | \"cursor\" | \"customer-service\" | \"customer-service-2\" | \"dashboard\" | \"dashboard-2\" | \"dashboard-3\" | \"database\" | \"database-2\" | \"delete-back\" | \"delete-back-2\" | \"delete-bin\" | \"delete-bin-2\" | \"delete-bin-3\" | \"delete-bin-4\" | \"delete-bin-5\" | \"delete-bin-6\" | \"delete-bin-7\" | \"delete-column\" | \"delete-row\" | \"device\" | \"device-recover\" | \"dingding\" | \"direction\" | \"disc\" | \"discord\" | \"discuss\" | \"dislike\" | \"disqus\" | \"divide\" | \"donut-chart\" | \"door\" | \"door-closed\" | \"door-lock\" | \"door-lock-box\" | \"door-open\" | \"dossier\" | \"douban\" | \"double-quotes-l\" | \"double-quotes-r\" | \"download\" | \"download-2\" | \"download-cloud\" | \"download-cloud-2\" | \"draft\" | \"drag-drop\" | \"drag-move\" | \"drag-move-2\" | \"dribbble\" | \"drive\" | \"drizzle\" | \"drop\" | \"dropbox\" | \"dual-sim-1\" | \"dual-sim-2\" | \"dv\" | \"dvd\" | \"e-bike\" | \"e-bike-2\" | \"earth\" | \"earthquake\" | \"edge\" | \"edit\" | \"edit-2\" | \"edit-box\" | \"edit-circle\" | \"eject\" | \"emotion\" | \"emotion-2\" | \"emotion-happy\" | \"emotion-laugh\" | \"emotion-normal\" | \"emotion-sad\" | \"emotion-unhappy\" | \"empathize\" | \"emphasis\" | \"emphasis-cn\" | \"english-input\" | \"equalizer\" | \"eraser\" | \"error-warning\" | \"evernote\" | \"exchange\" | \"exchange-box\" | \"exchange-cny\" | \"exchange-dollar\" | \"exchange-funds\" | \"external-link\" | \"eye\" | \"eye-2\" | \"eye-close\" | \"eye-off\" | \"facebook\" | \"facebook-box\" | \"facebook-circle\" | \"fahrenheit\" | \"feedback\" | \"file\" | \"file-2\" | \"file-3\" | \"file-4\" | \"file-add\" | \"file-chart\" | \"file-chart-2\" | \"file-cloud\" | \"file-code\" | \"file-copy\" | \"file-copy-2\" | \"file-damage\" | \"file-download\" | \"file-edit\" | \"file-excel\" | \"file-excel-2\" | \"file-forbid\" | \"file-gif\" | \"file-history\" | \"file-hwp\" | \"file-info\" | \"file-list\" | \"file-list-2\" | \"file-list-3\" | \"file-lock\" | \"file-mark\" | \"file-music\" | \"file-paper\" | \"file-paper-2\" | \"file-pdf\" | \"file-ppt\" | \"file-ppt-2\" | \"file-reduce\" | \"file-search\" | \"file-settings\" | \"file-shield\" | \"file-shield-2\" | \"file-shred\" | \"file-text\" | \"file-transfer\" | \"file-unknow\" | \"file-upload\" | \"file-user\" | \"file-warning\" | \"file-word\" | \"file-word-2\" | \"file-zip\" | \"film\" | \"filter\" | \"filter-2\" | \"filter-3\" | \"filter-off\" | \"find-replace\" | \"finder\" | \"fingerprint\" | \"fingerprint-2\" | \"fire\" | \"firefox\" | \"first-aid-kit\" | \"flag\" | \"flag-2\" | \"flashlight\" | \"flask\" | \"flight-land\" | \"flight-takeoff\" | \"flood\" | \"flow-chart\" | \"flutter\" | \"focus\" | \"focus-2\" | \"focus-3\" | \"foggy\" | \"folder\" | \"folder-2\" | \"folder-3\" | \"folder-4\" | \"folder-5\" | \"folder-add\" | \"folder-chart\" | \"folder-chart-2\" | \"folder-download\" | \"folder-forbid\" | \"folder-history\" | \"folder-info\" | \"folder-keyhole\" | \"folder-lock\" | \"folder-music\" | \"folder-open\" | \"folder-received\" | \"folder-reduce\" | \"folder-settings\" | \"folder-shared\" | \"folder-shield\" | \"folder-shield-2\" | \"folder-transfer\" | \"folder-unknow\" | \"folder-upload\" | \"folder-user\" | \"folder-warning\" | \"folder-zip\" | \"folders\" | \"font-color\" | \"font-size\" | \"font-size-2\" | \"football\" | \"footprint\" | \"forbid\" | \"forbid-2\" | \"format-clear\" | \"fridge\" | \"fullscreen\" | \"fullscreen-exit\" | \"functions\" | \"funds\" | \"funds-box\" | \"gallery\" | \"gallery-upload\" | \"game\" | \"gamepad\" | \"gas-station\" | \"gatsby\" | \"genderless\" | \"ghost\" | \"ghost-2\" | \"ghost-smile\" | \"gift\" | \"gift-2\" | \"git-branch\" | \"git-commit\" | \"git-merge\" | \"git-pull-request\" | \"git-repository\" | \"git-repository-commits\" | \"git-repository-private\" | \"github\" | \"gitlab\" | \"global\" | \"globe\" | \"goblet\" | \"google\" | \"google-play\" | \"government\" | \"gps\" | \"gradienter\" | \"grid\" | \"group\" | \"group-2\" | \"guide\" | \"h-1\" | \"h-2\" | \"h-3\" | \"h-4\" | \"h-5\" | \"h-6\" | \"hail\" | \"hammer\" | \"hand-coin\" | \"hand-heart\" | \"hand-sanitizer\" | \"handbag\" | \"hard-drive\" | \"hard-drive-2\" | \"hashtag\" | \"haze\" | \"haze-2\" | \"hd\" | \"heading\" | \"headphone\" | \"health-book\" | \"heart\" | \"heart-2\" | \"heart-3\" | \"heart-add\" | \"heart-pulse\" | \"hearts\" | \"heavy-showers\" | \"history\" | \"home\" | \"home-2\" | \"home-3\" | \"home-4\" | \"home-5\" | \"home-6\" | \"home-7\" | \"home-8\" | \"home-gear\" | \"home-heart\" | \"home-smile\" | \"home-smile-2\" | \"home-wifi\" | \"honor-of-kings\" | \"honour\" | \"hospital\" | \"hotel\" | \"hotel-bed\" | \"hotspot\" | \"hq\" | \"html5\" | \"ie\" | \"image\" | \"image-2\" | \"image-add\" | \"image-edit\" | \"inbox\" | \"inbox-archive\" | \"inbox-unarchive\" | \"increase-decrease\" | \"indent-decrease\" | \"indent-increase\" | \"indeterminate-circle\" | \"information\" | \"infrared-thermometer\" | \"ink-bottle\" | \"input-cursor-move\" | \"input-method\" | \"insert-column-left\" | \"insert-column-right\" | \"insert-row-bottom\" | \"insert-row-top\" | \"instagram\" | \"install\" | \"invision\" | \"italic\" | \"kakao-talk\" | \"key-2\" | \"keyboard\" | \"keyboard-box\" | \"keynote\" | \"knife\" | \"knife-blood\" | \"landscape\" | \"layout\" | \"layout-2\" | \"layout-3\" | \"layout-4\" | \"layout-5\" | \"layout-6\" | \"layout-bottom\" | \"layout-bottom-2\" | \"layout-column\" | \"layout-grid\" | \"layout-left\" | \"layout-left-2\" | \"layout-masonry\" | \"layout-right\" | \"layout-right-2\" | \"layout-row\" | \"layout-top\" | \"layout-top-2\" | \"leaf\" | \"lifebuoy\" | \"lightbulb\" | \"lightbulb-flash\" | \"line\" | \"line-chart\" | \"line-height\" | \"link\" | \"link-m\" | \"link-unlink\" | \"link-unlink-m\" | \"linkedin\" | \"linkedin-box\" | \"links\" | \"list-check\" | \"list-check-2\" | \"list-ordered\" | \"list-settings\" | \"list-unordered\" | \"live\" | \"loader\" | \"loader-2\" | \"loader-3\" | \"loader-4\" | \"loader-5\" | \"lock\" | \"lock-2\" | \"lock-password\" | \"lock-unlock\" | \"login-box\" | \"login-circle\" | \"logout-box\" | \"logout-box-r\" | \"logout-circle\" | \"logout-circle-r\" | \"luggage-cart\" | \"luggage-deposit\" | \"lungs\" | \"mac\" | \"macbook\" | \"magic\" | \"mail\" | \"mail-add\" | \"mail-check\" | \"mail-close\" | \"mail-download\" | \"mail-forbid\" | \"mail-lock\" | \"mail-open\" | \"mail-send\" | \"mail-settings\" | \"mail-star\" | \"mail-unread\" | \"mail-volume\" | \"map\" | \"map-2\" | \"map-pin\" | \"map-pin-2\" | \"map-pin-3\" | \"map-pin-4\" | \"map-pin-5\" | \"map-pin-add\" | \"map-pin-range\" | \"map-pin-time\" | \"map-pin-user\" | \"mark-pen\" | \"markdown\" | \"markup\" | \"mastercard\" | \"mastodon\" | \"medal\" | \"medal-2\" | \"medicine-bottle\" | \"medium\" | \"men\" | \"mental-health\" | \"menu\" | \"menu-2\" | \"menu-3\" | \"menu-4\" | \"menu-5\" | \"menu-add\" | \"menu-fold\" | \"merge-cells-horizontal\" | \"merge-cells-vertical\" | \"message\" | \"message-2\" | \"message-3\" | \"messenger\" | \"meteor\" | \"mic\" | \"mic-2\" | \"mic-off\" | \"mickey\" | \"microscope\" | \"microsoft\" | \"mind-map\" | \"mini-program\" | \"mist\" | \"money-cny-box\" | \"money-cny-circle\" | \"money-dollar-box\" | \"money-dollar-circle\" | \"money-euro-box\" | \"money-euro-circle\" | \"money-pound-box\" | \"money-pound-circle\" | \"moon\" | \"moon-clear\" | \"moon-cloudy\" | \"moon-foggy\" | \"more\" | \"more-2\" | \"motorbike\" | \"mouse\" | \"movie\" | \"movie-2\" | \"music\" | \"music-2\" | \"mv\" | \"navigation\" | \"netease-cloud-music\" | \"netflix\" | \"newspaper\" | \"node-tree\" | \"notification\" | \"notification-2\" | \"notification-3\" | \"notification-4\" | \"notification-badge\" | \"notification-off\" | \"npmjs\" | \"number-0\" | \"number-1\" | \"number-2\" | \"number-3\" | \"number-4\" | \"number-5\" | \"number-6\" | \"number-7\" | \"number-8\" | \"number-9\" | \"numbers\" | \"nurse\" | \"oil\" | \"omega\" | \"open-arm\" | \"open-source\" | \"opera\" | \"order-play\" | \"organization-chart\" | \"outlet\" | \"outlet-2\" | \"page-separator\" | \"pages\" | \"paint\" | \"paint-brush\" | \"palette\" | \"pantone\" | \"paragraph\" | \"parent\" | \"parentheses\" | \"parking\" | \"parking-box\" | \"passport\" | \"patreon\" | \"pause\" | \"pause-circle\" | \"pause-mini\" | \"paypal\" | \"pen-nib\" | \"pencil\" | \"pencil-ruler\" | \"pencil-ruler-2\" | \"percent\" | \"phone\" | \"phone-camera\" | \"phone-find\" | \"phone-lock\" | \"picture-in-picture\" | \"picture-in-picture-2\" | \"picture-in-picture-exit\" | \"pie-chart\" | \"pie-chart-2\" | \"pie-chart-box\" | \"pin-distance\" | \"ping-pong\" | \"pinterest\" | \"pinyin-input\" | \"pixelfed\" | \"plane\" | \"plant\" | \"play\" | \"play-circle\" | \"play-list\" | \"play-list-2\" | \"play-list-add\" | \"play-mini\" | \"playstation\" | \"plug\" | \"plug-2\" | \"polaroid\" | \"polaroid-2\" | \"police-car\" | \"price-tag\" | \"price-tag-2\" | \"price-tag-3\" | \"printer\" | \"printer-cloud\" | \"product-hunt\" | \"profile\" | \"projector\" | \"projector-2\" | \"psychotherapy\" | \"pulse\" | \"pushpin\" | \"pushpin-2\" | \"qq\" | \"qr-code\" | \"qr-scan\" | \"qr-scan-2\" | \"question\" | \"question-answer\" | \"question-mark\" | \"questionnaire\" | \"quill-pen\" | \"radar\" | \"radio\" | \"radio-2\" | \"radio-button\" | \"rainbow\" | \"rainy\" | \"reactjs\" | \"record-circle\" | \"record-mail\" | \"recycle\" | \"red-packet\" | \"reddit\" | \"refresh\" | \"refund\" | \"refund-2\" | \"registered\" | \"remixicon\" | \"remote-control\" | \"remote-control-2\" | \"repeat\" | \"repeat-2\" | \"repeat-one\" | \"reply\" | \"reply-all\" | \"reserved\" | \"rest-time\" | \"restart\" | \"restaurant\" | \"restaurant-2\" | \"rewind\" | \"rewind-mini\" | \"rhythm\" | \"riding\" | \"road-map\" | \"roadster\" | \"robot\" | \"rocket\" | \"rocket-2\" | \"rotate-lock\" | \"rounded-corner\" | \"route\" | \"router\" | \"rss\" | \"ruler\" | \"ruler-2\" | \"run\" | \"safari\" | \"safe\" | \"safe-2\" | \"sailboat\" | \"save\" | \"save-2\" | \"save-3\" | \"scales\" | \"scales-2\" | \"scales-3\" | \"scan\" | \"scan-2\" | \"scissors\" | \"scissors-2\" | \"scissors-cut\" | \"screenshot\" | \"screenshot-2\" | \"sd-card\" | \"sd-card-mini\" | \"search\" | \"search-2\" | \"search-eye\" | \"secure-payment\" | \"seedling\" | \"send-backward\" | \"send-plane\" | \"send-plane-2\" | \"send-to-back\" | \"sensor\" | \"separator\" | \"server\" | \"service\" | \"settings\" | \"settings-2\" | \"settings-3\" | \"settings-4\" | \"settings-5\" | \"settings-6\" | \"shape\" | \"shape-2\" | \"share\" | \"share-box\" | \"share-circle\" | \"share-forward\" | \"share-forward-2\" | \"share-forward-box\" | \"shield\" | \"shield-check\" | \"shield-cross\" | \"shield-flash\" | \"shield-keyhole\" | \"shield-star\" | \"shield-user\" | \"ship\" | \"ship-2\" | \"shirt\" | \"shopping-bag\" | \"shopping-bag-2\" | \"shopping-bag-3\" | \"shopping-basket\" | \"shopping-basket-2\" | \"shopping-cart\" | \"shopping-cart-2\" | \"showers\" | \"shuffle\" | \"shut-down\" | \"side-bar\" | \"signal-tower\" | \"signal-wifi\" | \"signal-wifi-1\" | \"signal-wifi-2\" | \"signal-wifi-3\" | \"signal-wifi-error\" | \"signal-wifi-off\" | \"sim-card\" | \"sim-card-2\" | \"single-quotes-l\" | \"single-quotes-r\" | \"sip\" | \"skip-back\" | \"skip-back-mini\" | \"skip-forward\" | \"skip-forward-mini\" | \"skull\" | \"skull-2\" | \"skype\" | \"slack\" | \"slice\" | \"slideshow\" | \"slideshow-2\" | \"slideshow-3\" | \"slideshow-4\" | \"smartphone\" | \"snapchat\" | \"snowy\" | \"sort-asc\" | \"sort-desc\" | \"sound-module\" | \"soundcloud\" | \"space\" | \"space-ship\" | \"spam\" | \"spam-2\" | \"spam-3\" | \"speaker\" | \"speaker-2\" | \"speaker-3\" | \"spectrum\" | \"speed\" | \"speed-mini\" | \"split-cells-horizontal\" | \"split-cells-vertical\" | \"spotify\" | \"spy\" | \"stack\" | \"stack-overflow\" | \"stackshare\" | \"star\" | \"star-half\" | \"star-half-s\" | \"star-s\" | \"star-smile\" | \"steam\" | \"steering\" | \"steering-2\" | \"stethoscope\" | \"sticky-note\" | \"sticky-note-2\" | \"stop\" | \"stop-circle\" | \"stop-mini\" | \"store\" | \"store-2\" | \"store-3\" | \"strikethrough\" | \"strikethrough-2\" | \"subscript\" | \"subscript-2\" | \"subtract\" | \"subway\" | \"subway-wifi\" | \"suitcase\" | \"suitcase-2\" | \"suitcase-3\" | \"sun\" | \"sun-cloudy\" | \"sun-foggy\" | \"superscript\" | \"superscript-2\" | \"surgical-mask\" | \"surround-sound\" | \"survey\" | \"swap\" | \"swap-box\" | \"switch\" | \"sword\" | \"syringe\" | \"t-box\" | \"t-shirt\" | \"t-shirt-2\" | \"t-shirt-air\" | \"table\" | \"table-2\" | \"table-alt\" | \"tablet\" | \"takeaway\" | \"taobao\" | \"tape\" | \"task\" | \"taxi\" | \"taxi-wifi\" | \"team\" | \"telegram\" | \"temp-cold\" | \"temp-hot\" | \"terminal\" | \"terminal-box\" | \"terminal-window\" | \"test-tube\" | \"text\" | \"text-direction-l\" | \"text-direction-r\" | \"text-spacing\" | \"text-wrap\" | \"thermometer\" | \"thumb-down\" | \"thumb-up\" | \"thunderstorms\" | \"ticket\" | \"ticket-2\" | \"time\" | \"timer\" | \"timer-2\" | \"timer-flash\" | \"todo\" | \"toggle\" | \"tools\" | \"tornado\" | \"trademark\" | \"traffic-light\" | \"train\" | \"train-wifi\" | \"translate\" | \"translate-2\" | \"travesti\" | \"treasure-map\" | \"trello\" | \"trophy\" | \"truck\" | \"tumblr\" | \"tv\" | \"tv-2\" | \"twitch\" | \"twitter\" | \"typhoon\" | \"u-disk\" | \"ubuntu\" | \"umbrella\" | \"underline\" | \"uninstall\" | \"unsplash\" | \"upload\" | \"upload-2\" | \"upload-cloud\" | \"upload-cloud-2\" | \"usb\" | \"user\" | \"user-2\" | \"user-3\" | \"user-4\" | \"user-5\" | \"user-6\" | \"user-add\" | \"user-follow\" | \"user-heart\" | \"user-location\" | \"user-received\" | \"user-received-2\" | \"user-search\" | \"user-settings\" | \"user-shared\" | \"user-shared-2\" | \"user-smile\" | \"user-star\" | \"user-unfollow\" | \"user-voice\" | \"video\" | \"video-add\" | \"video-chat\" | \"video-download\" | \"video-upload\" | \"vidicon\" | \"vidicon-2\" | \"vimeo\" | \"vip\" | \"vip-crown\" | \"vip-crown-2\" | \"vip-diamond\" | \"virus\" | \"visa\" | \"voice-recognition\" | \"voiceprint\" | \"volume-down\" | \"volume-mute\" | \"volume-off-vibrate\" | \"volume-up\" | \"volume-vibrate\" | \"vuejs\" | \"walk\" | \"wallet\" | \"wallet-2\" | \"wallet-3\" | \"water-flash\" | \"webcam\" | \"wechat\" | \"wechat-2\" | \"wechat-pay\" | \"weibo\" | \"whatsapp\" | \"wheelchair\" | \"wifi\" | \"wifi-off\" | \"window\" | \"window-2\" | \"windows\" | \"windy\" | \"wireless-charging\" | \"women\" | \"wubi-input\" | \"xbox\" | \"xing\" | \"youtube\" | \"zcool\" | \"zhihu\" | \"zoom-in\" | \"zoom-out\" | \"zzz\" | undefined",
        "references": {
          "IconNames": {
            "location": "import",
            "path": "../icon/iconNames"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-start",
      "reflect": false
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When `true` value must be provided before submitting."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | string",
        "resolved": "number | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Text value of the input."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
