exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 9453:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Menu_header__T_0no",
	"link": "Menu_link__EwNgO",
	"ul": "Menu_ul__as_HV",
	"li": "Menu_li__7rFAJ",
	"icon": "Menu_icon__BTmeO",
	"logo": "Menu_logo__U_A_v",
	"nav": "Menu_nav__3IvSt",
	"aside": "Menu_aside__04sw8",
	"div": "Menu_div__C5KLz"
};


/***/ }),

/***/ 4412:
/***/ ((module) => {

// Exports
module.exports = {
	"div": "Modal_div__MOl03",
	"button": "Modal_button__xgbUx"
};


/***/ }),

/***/ 3201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ }),

/***/ 1632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9453);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Contexts_MyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3201);
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(790);







function Menu() {
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Contexts_MyContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Provider, {
        value: {
            mounted,
            setMounted
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().aside),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/logo.svg",
                            alt: "bruta",
                            className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().ul),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                                                children: "Inicio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/icons/home.svg",
                                                alt: "Inicio",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/dados",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                                                children: "Dados"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/icons/data.svg",
                                                alt: "dados",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                                                onClick: ()=>setMounted(true),
                                                children: "Adicionar"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/icons/upload.svg",
                                                alt: "cadastrar",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().li),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),
                                                children: "Sair"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/icons/exit.svg",
                                                alt: "sair",
                                                className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Menu_module_css__WEBPACK_IMPORTED_MODULE_5___default().div),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Procurar Arquivo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "file",
                            name: "file",
                            id: "file"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4412);
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Contexts_MyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3201);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Modal({ children }) {
    const { mounted, setMounted, mountedLogin, setMountedLogin, alertModal, setAlertModal } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_MyContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const handleClose = ()=>{
        setMounted(false);
    };
    return mounted | mountedLogin | alertModal ? /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().div),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_Modal_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
                onClick: ()=>handleClose(),
                children: "X"
            }),
            children
        ]
    }), document.body) : null;
}


/***/ })

};
;