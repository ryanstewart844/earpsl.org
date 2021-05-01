!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = !0;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    };
    __webpack_require__.t = function(value, mode) {
        1 & mode && (value = __webpack_require__(value));
        if (8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return {}.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    __webpack_require__(__webpack_require__.s = 47);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "m", (function() {
        return BUTTON_STYLE_OPTIONS;
    }));
    __webpack_require__.d(__webpack_exports__, "f", (function() {
        return BUTTON_LABEL;
    }));
    __webpack_require__.d(__webpack_exports__, "e", (function() {
        return BUTTON_COLOR;
    }));
    __webpack_require__.d(__webpack_exports__, "i", (function() {
        return BUTTON_LOGO_COLOR;
    }));
    __webpack_require__.d(__webpack_exports__, "l", (function() {
        return BUTTON_SIZE;
    }));
    __webpack_require__.d(__webpack_exports__, "n", (function() {
        return BUTTON_TAGLINE_COLOR;
    }));
    __webpack_require__.d(__webpack_exports__, "k", (function() {
        return BUTTON_SHAPE;
    }));
    __webpack_require__.d(__webpack_exports__, "d", (function() {
        return BUTTON_BRANDING;
    }));
    __webpack_require__.d(__webpack_exports__, "g", (function() {
        return BUTTON_LAYOUT;
    }));
    __webpack_require__.d(__webpack_exports__, "j", (function() {
        return BUTTON_NUMBER;
    }));
    __webpack_require__.d(__webpack_exports__, "h", (function() {
        return BUTTON_LOGO;
    }));
    __webpack_require__.d(__webpack_exports__, "q", (function() {
        return CHECKOUT_OVERLAY_COLOR;
    }));
    __webpack_require__.d(__webpack_exports__, "v", (function() {
        return FUNDING;
    }));
    __webpack_require__.d(__webpack_exports__, "w", (function() {
        return FUNDING_BRAND_LABEL;
    }));
    __webpack_require__.d(__webpack_exports__, "o", (function() {
        return CARD;
    }));
    __webpack_require__.d(__webpack_exports__, "x", (function() {
        return FUNDING_ELIGIBILITY_REASON;
    }));
    __webpack_require__.d(__webpack_exports__, "p", (function() {
        return CARD_PRIORITY;
    }));
    __webpack_require__.d(__webpack_exports__, "u", (function() {
        return FPTI;
    }));
    __webpack_require__.d(__webpack_exports__, "r", (function() {
        return COUNTRY;
    }));
    __webpack_require__.d(__webpack_exports__, "y", (function() {
        return LANG;
    }));
    __webpack_require__.d(__webpack_exports__, "z", (function() {
        return LANG_TO_DEFAULT_COUNTRY;
    }));
    __webpack_require__.d(__webpack_exports__, "a", (function() {
        return ALLOWED_INSTALLMENT_COUNTRIES;
    }));
    __webpack_require__.d(__webpack_exports__, "b", (function() {
        return ALLOWED_INSTALLMENT_PERIOD;
    }));
    __webpack_require__.d(__webpack_exports__, "t", (function() {
        return ENV;
    }));
    __webpack_require__.d(__webpack_exports__, "G", (function() {
        return USERS;
    }));
    __webpack_require__.d(__webpack_exports__, "F", (function() {
        return SOURCE;
    }));
    __webpack_require__.d(__webpack_exports__, "B", (function() {
        return LOG_LEVEL;
    }));
    __webpack_require__.d(__webpack_exports__, "C", (function() {
        return PAYMENT_TYPE;
    }));
    __webpack_require__.d(__webpack_exports__, "E", (function() {
        return PPTM_ID;
    }));
    __webpack_require__.d(__webpack_exports__, "c", (function() {
        return ATTRIBUTE;
    }));
    __webpack_require__.d(__webpack_exports__, "D", (function() {
        return PLATFORM;
    }));
    __webpack_require__.d(__webpack_exports__, "s", (function() {
        return DEFAULT;
    }));
    __webpack_require__.d(__webpack_exports__, "A", (function() {
        return LOCALE;
    }));
    var BUTTON_STYLE_OPTIONS = {
        LABEL: "label",
        SIZE: "size",
        SHAPE: "shape",
        COLOR: "color",
        LAYOUT: "layout",
        MAXBUTTONS: "maxbuttons",
        FUNDINGICONS: "fundingicons",
        BRANDING: "branding",
        TAGLINE: "tagline",
        HEIGHT: "height",
        INSTALLMENTPERIOD: "installmentperiod"
    };
    var BUTTON_LABEL = {
        PAYPAL: "paypal",
        CHECKOUT: "checkout",
        PAY: "pay",
        CREDIT: "credit",
        CARD: "card",
        BUYNOW: "buynow",
        INSTALLMENT: "installment",
        VENMO: "venmo",
        ITAU: "itau",
        IDEAL: "ideal",
        ELV: "elv",
        BANCONTACT: "bancontact",
        GIROPAY: "giropay",
        SOFORT: "sofort",
        EPS: "eps",
        MYBANK: "mybank",
        P24: "p24",
        BLIK: "blik",
        MAXIMA: "maxima",
        BOLETO: "boleto",
        OXXO: "oxxo",
        MERCADOPAGO: "mercadopago"
    };
    var BUTTON_COLOR = {
        GOLD: "gold",
        BLUE: "blue",
        SILVER: "silver",
        BLACK: "black",
        DARKBLUE: "darkblue",
        WHITE: "white",
        TRANSPARENT: "transparent"
    };
    var BUTTON_LOGO_COLOR = {
        BLUE: "blue",
        WHITE: "white",
        BLACK: "black",
        ANY: "any"
    };
    var BUTTON_SIZE = {
        TINY: "tiny",
        SMALL: "small",
        MEDIUM: "medium",
        LARGE: "large",
        HUGE: "huge",
        RESPONSIVE: "responsive"
    };
    var BUTTON_TAGLINE_COLOR = {
        BLACK: "black",
        BLUE: "blue"
    };
    var BUTTON_SHAPE = {
        PILL: "pill",
        RECT: "rect"
    };
    var BUTTON_BRANDING = {
        BRANDED: "branded",
        UNBRANDED: "unbranded"
    };
    var BUTTON_LAYOUT = {
        HORIZONTAL: "horizontal",
        VERTICAL: "vertical"
    };
    var BUTTON_NUMBER = {
        SINGLE: "single",
        MULTIPLE: "multiple"
    };
    var BUTTON_LOGO = {
        PP: "pp",
        PAYPAL: "paypal",
        VENMO: "venmo",
        ITAU: "itau",
        CREDIT: "credit",
        IDEAL: "ideal",
        ELV: "elv",
        BANCONTACT: "bancontact",
        GIROPAY: "giropay",
        SOFORT: "sofort",
        EPS: "eps",
        MYBANK: "mybank",
        P24: "p24",
        BLIK: "blik",
        MAXIMA: "maxima",
        BOLETO: "boleto",
        OXXO: "oxxo",
        MERCADOPAGO: "mercadopago"
    };
    var CHECKOUT_OVERLAY_COLOR = {
        BLACK: "black",
        WHITE: "white"
    };
    var FUNDING = {
        PAYPAL: "paypal",
        VENMO: "venmo",
        ITAU: "itau",
        CREDIT: "credit",
        CARD: "card",
        IDEAL: "ideal",
        ELV: "elv",
        BANCONTACT: "bancontact",
        GIROPAY: "giropay",
        SOFORT: "sofort",
        EPS: "eps",
        MYBANK: "mybank",
        P24: "p24",
        ZIMPLER: "zimpler",
        BLIK: "blik",
        MAXIMA: "maxima",
        BOLETO: "boleto",
        OXXO: "oxxo",
        MERCADOPAGO: "mercadopago"
    };
    var FUNDING_BRAND_LABEL = {
        PAYPAL: "PayPal",
        CREDIT: "PayPal Credit",
        CARD: "Debit or Credit Card"
    };
    var CARD = {
        VISA: "visa",
        MASTERCARD: "mastercard",
        AMEX: "amex",
        DISCOVER: "discover",
        SWITCH: "switch",
        MAESTRO: "maestro",
        HIPER: "hiper",
        ELO: "elo",
        JCB: "jcb",
        CUP: "cup",
        COFINOGA: "cofinoga",
        COFIDIS: "cofidis",
        CETELEM: "cetelem",
        CBNATIONALE: "cbnationale"
    };
    var FUNDING_ELIGIBILITY_REASON = {
        PRIMARY: "The funding source is the primary source",
        NOT_ENABLED: "The funding source is not currently enabled for use",
        SECONDARY_DISALLOWED: "The funding source is disallowed as a secondary button",
        OPT_OUT: "The funding source was disallowed in funding.disallowed",
        OPT_IN: "The funding source was allowed in funding.allowed",
        DISALLOWED_COUNTRY: "The funding source is not enabled for the current locale",
        DEFAULT_COUNTRY: "The funding source is enabled by default for the current locale",
        DEFAULT: "The funding source is enabled by default for all users",
        REMEMBERED: "The funding source was remembered for the current user",
        NEED_OPT_IN: "The funding source needs to be allowed in funding.allowed",
        COMMIT_NOT_SET: "The funding source is not enabled when commit is not set as true",
        INVALID_ENV: "The funding source is not supported in this environment"
    };
    var CARD_PRIORITY = [ CARD.VISA, CARD.MASTERCARD, CARD.AMEX, CARD.DISCOVER, CARD.SWITCH, CARD.MAESTRO, CARD.HIPER, CARD.ELO, CARD.JCB, CARD.CUP, CARD.COFINOGA, CARD.COFIDIS, CARD.CETELEM, CARD.CBNATIONALE ];
    var ENV = {
        LOCAL: "local",
        STAGE: "stage",
        SANDBOX: "sandbox",
        PRODUCTION: "production",
        TEST: "test",
        DEMO: "demo"
    };
    var USERS = {
        ALL: "all",
        REMEMBERED: "remembered"
    };
    var SOURCE = {
        MANUAL: "manual",
        BUTTON_FACTORY: "button_factory"
    };
    var LOG_LEVEL = {
        DEBUG: "debug",
        INFO: "info",
        WARN: "warn",
        ERROR: "error"
    };
    var PAYMENT_TYPE = {
        EC_TOKEN: "ec_token",
        BA_TOKEN: "ba_token",
        PAY_ID: "pay_id"
    };
    var PPTM_ID = "xo-pptm";
    var ATTRIBUTE = {
        BUTTON: "data-button",
        FUNDING_SOURCE: "data-funding-source",
        CARD: "data-card",
        VERSION: "data-version",
        LAYOUT: "data-layout",
        SIZE: "data-size",
        SMART_BUTTON_VERSION: "data-paypal-smart-button-version"
    };
    var PLATFORM = {
        DESKTOP: "desktop",
        MOBILE: "mobile"
    };
    var DEFAULT = "default";
    var _CONTEXT_TYPE;
    var FPTI = {
        KEY: {
            FEED: "feed_name",
            STATE: "state_name",
            TRANSITION: "transition_name",
            BUTTON_TYPE: "button_type",
            SESSION_UID: "page_session_id",
            BUTTON_SESSION_UID: "button_session_id",
            TOKEN: "token",
            CONTEXT_ID: "context_id",
            CONTEXT_TYPE: "context_type",
            REFERER: "referer_url",
            PAY_ID: "pay_id",
            SELLER_ID: "seller_id",
            DATA_SOURCE: "serverside_data_source",
            BUTTON_SOURCE: "button_source",
            ERROR_CODE: "ext_error_code",
            ERROR_DESC: "ext_error_desc",
            PAGE_LOAD_TIME: "page_load_time",
            EXPERIMENT_NAME: "pxp_exp_id",
            TREATMENT_NAME: "pxp_trtmnt_id",
            TRANSITION_TIME: "transition_time",
            FUNDING_LIST: "eligible_payment_methods",
            FUNDING_COUNT: "eligible_payment_count",
            CHOSEN_FUNDING: "selected_payment_method",
            BUTTON_LAYOUT: "button_layout",
            BUTTON_COLOR: "button_color",
            BUTTON_SIZE: "button_size",
            BUTTON_SHAPE: "button_shape",
            BUTTON_LABEL: "button_label",
            BUTTON_WIDTH: "button_width",
            VERSION: "checkoutjs_version",
            MAX_BUTTONS: "max_buttons",
            FUNDING_REMEMBERED: "funding_remembered",
            BUTTON_TAGLINE_ENABLED: "button_tagline_enabled",
            RESPONSE_DURATION: "response_duration",
            PAYMENT_FLOW: "payment_flow",
            BUTTON_VERSION: "button_version",
            PAGE_TYPE: "pp_placement",
            TIMESTAMP: "t"
        },
        BUTTON_TYPE: {
            IFRAME: "iframe",
            HTML: "html",
            CUSTOM: "custom"
        },
        DATA_SOURCE: {
            CHECKOUT: "checkout"
        },
        CONTEXT_TYPE: (_CONTEXT_TYPE = {
            BUTTON_SESSION_ID: "button_session_id"
        }, _CONTEXT_TYPE[PAYMENT_TYPE.PAY_ID] = "Pay-ID", _CONTEXT_TYPE[PAYMENT_TYPE.EC_TOKEN] = "EC-Token", 
        _CONTEXT_TYPE[PAYMENT_TYPE.BA_TOKEN] = "EC-Token", _CONTEXT_TYPE),
        FEED: {
            CHECKOUTJS: "checkoutjs"
        },
        STATE: {
            LOAD: "checkoutjs_load",
            BUTTON: "checkoutjs_button",
            CHECKOUT: "checkoutjs_checkout",
            PPTM: "checkoutjs_pptm"
        },
        TRANSITION: {
            SCRIPT_LOAD: "process_script_load",
            BUTTON_RENDER: "process_button_render",
            BUTTON_LOAD: "process_button_load",
            BUTTON_CLICK: "process_button_click",
            BUTTON_RENDER_INTRANET_MODE: "process_button_render_intranet_mode",
            BUTTON_CLICK_INTRANET_MODE: "process_button_click_intranet_mode",
            CREATE_PAYMENT: "process_create_payment",
            RECIEVE_PAYMENT: "process_recieve_payment",
            CHECKOUT_INIT: "process_checkout_init",
            CHECKOUT_APPROVE: "process_checkout_approve",
            CHECKOUT_SHIPPING_CHANGE: "process_checkout_shipping_change",
            CHECKOUT_CANCEL: "process_checkout_cancel",
            CHECKOUT_ERROR: "process_checkout_error",
            EXTERNAL_EXPERIMENT: "process_external_experiment",
            EXTERNAL_EXPERIMENT_COMPLETE: "process_external_experiment_complete",
            PPTM_LOAD: "process_pptm_load",
            PPTM_LOADED: "process_pptm_loaded"
        }
    };