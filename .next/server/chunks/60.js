exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 2745:
/***/ ((module) => {

// Exports
module.exports = {
	"select": "Filters_select__qzTJV",
	"div": "Filters_div__YQG92"
};


/***/ }),

/***/ 6315:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__7F12w"
};


/***/ }),

/***/ 6614:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__DyPw5"
};


/***/ }),

/***/ 2141:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "Table_table__z9eDv",
	"thead": "Table_thead__Vm_gJ",
	"th": "Table_th__LycMF",
	"ascending": "Table_ascending__kAgPh",
	"descending": "Table_descending__P_yqC",
	"tbody": "Table_tbody__StmG7"
};


/***/ }),

/***/ 8890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filters_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2745);
/* harmony import */ var _Filters_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Filters_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6315);
/* harmony import */ var _UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6614);
/* harmony import */ var _UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);






function Filters() {
    const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const getConfig = [
        {
            id: 1,
            name: "decisionMakers",
            configs: [
                {
                    id: 1,
                    configKey: 1,
                    name: "email"
                },
                {
                    id: 1,
                    configKey: 1,
                    name: "cnpj"
                },
                {
                    id: 1,
                    configKey: 1,
                    name: "departament"
                },
                {
                    id: 1,
                    configKey: 1,
                    name: "office"
                }
            ]
        },
        {
            id: 2,
            name: "company",
            configs: [
                {
                    id: 2,
                    configKey: 2,
                    name: "document"
                },
                {
                    id: 2,
                    configKey: 2,
                    name: "companyName"
                },
                {
                    id: 2,
                    configKey: 2,
                    name: "cnae"
                },
                {
                    id: 2,
                    configKey: 2,
                    name: "sector"
                }
            ]
        },
        {
            id: 3,
            name: "departament",
            configs: [
                {
                    id: 3,
                    configKey: 3,
                    name: "name"
                }
            ]
        },
        {
            id: 4,
            name: "sector",
            configs: [
                {
                    id: 4,
                    configKey: 4,
                    name: "name"
                }
            ]
        },
        {
            id: 5,
            name: "cnae",
            configs: [
                {
                    id: 5,
                    configKey: 5,
                    name: "name"
                },
                {
                    id: 5,
                    configKey: 5,
                    name: "code"
                }
            ]
        }
    ];
    const handleSetConfig = (e)=>{
        setConfig(e.target.value);
        router.push(`/dados/${e.target.value}`);
    };
    const handleValue = (e)=>{
        setValue();
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const value = getConfig.filter((element)=>element.name === config);
        setList(value[0]);
    }, [
        config
    ]);
    const Inputs = (props)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Filters_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),
            children: [
                props.list?.configs?.map((element)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: element.name,
                        placeholder: element.name,
                        className: (_UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
                        value: value[element.name],
                        onChange: (e)=>setValue({
                                ...value,
                                [e.target.name]: e.target.value
                            })
                    })),
                list ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                            onClick: ()=>handleSendSearch(props.value),
                            children: "Enviar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            name: "cars",
                            id: "cars",
                            onChange: (e)=>handleSetConfig(e),
                            className: (_Filters_module_css__WEBPACK_IMPORTED_MODULE_3___default().select),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    defaultValue: true,
                                    children: "Exporta"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "csv",
                                    children: "CSV"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "xlsx",
                                    children: "XLSX"
                                })
                            ]
                        })
                    ]
                }) : ""
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Filters_module_css__WEBPACK_IMPORTED_MODULE_3___default().div),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Inputs, {
                    list: list
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "cars",
                    id: "cars",
                    onChange: (e)=>handleSetConfig(e),
                    className: (_Filters_module_css__WEBPACK_IMPORTED_MODULE_3___default().select),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            defaultValue: true,
                            children: "Escolha um filtro "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "decisionMakers",
                            children: "Decisores"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "company",
                            children: "Empresa"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "departament",
                            children: "Departamento"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "sector",
                            children: "Setor"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 9017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useSortableData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSortableData(items, config = null) {
    const [sortConfig, setSortConfig] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(config);
    const sortedItems = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(()=>{
        let sortableItems = [
            ...items
        ];
        if (sortConfig !== null) {
            sortableItems.sort((a, b)=>{
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [
        items,
        sortConfig
    ]);
    const requestSort = (key)=>{
        let direction = "ascending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({
            key,
            direction
        });
    };
    return {
        items: sortedItems,
        requestSort,
        sortConfig
    };
}
;


/***/ }),

/***/ 5470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_font_google_target_css_path_src_components_UI_Table_Table_jsx_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1543);
/* harmony import */ var next_font_google_target_css_path_src_components_UI_Table_Table_jsx_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_UI_Table_Table_jsx_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2141);
/* harmony import */ var _Table_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Table_module_css__WEBPACK_IMPORTED_MODULE_3__);




function ProductTable({ title, result }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (next_font_google_target_css_path_src_components_UI_Table_Table_jsx_import_Montserrat_arguments_subsets_latin_variable_font_montserrat_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2___default().variable),
        style: {
            maxWidth: "100%",
            overflow: "scroll"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: (_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default().table),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                    className: (_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default().thead),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                        children: title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    className: (_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default().tbody),
                    children: result
                })
            ]
        })
    });
}
;


/***/ })

};
;