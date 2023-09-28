"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ListCompany)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _UI_Table_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5470);
/* harmony import */ var _UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2141);
/* harmony import */ var _UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_SortTable_SortTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9017);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Contexts_MyContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3201);
/* harmony import */ var _UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(790);
/* harmony import */ var _UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6614);
/* harmony import */ var _UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6315);
/* harmony import */ var _UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_9__);










function ListCompany(props) {
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({});
    const { items, requestSort, sortConfig } = (0,_UI_SortTable_SortTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props.products);
    const getClassNamesFor = (name)=>{
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    const handleSetOpen = (item)=>{
        setMounted(true);
        setData(item);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Contexts_MyContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Provider, {
        value: {
            mounted,
            setMounted
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Table_Table__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("edit"),
                            className: getClassNamesFor("edit"),
                            children: "Editar"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("name"),
                            className: getClassNamesFor("name"),
                            children: "Name"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("fantasyName"),
                            className: getClassNamesFor("fantasyName"),
                            children: "Nome Fantasia"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("document"),
                            className: getClassNamesFor("document"),
                            children: "Documento"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("telephone"),
                            className: getClassNamesFor("telephone"),
                            children: "Telefone"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("setor"),
                            className: getClassNamesFor("setor"),
                            children: "Setor"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("code"),
                            className: getClassNamesFor("code"),
                            children: "Code Cnae"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("cnae"),
                            className: getClassNamesFor("cnae"),
                            children: "Cnae"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                        className: (_UI_Table_Table_module_css__WEBPACK_IMPORTED_MODULE_7___default().th),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>requestSort("site"),
                            className: getClassNamesFor("site"),
                            children: "Site"
                        })
                    })
                ]
            }),
            result: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                style: {
                                    background: "none",
                                    border: "none"
                                },
                                onClick: ()=>handleSetOpen(item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/icons/edit.svg"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: item.companyName
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: item.fantasyName
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: item.document
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                            children: [
                                "(",
                                item.areaCode,
                                ") ",
                                item.telephone
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: item?.sector?.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: item?.cnae?.code
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: item?.cnae?.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                style: {
                                    color: "white",
                                    textDecoration: "none"
                                },
                                href: `${item.site}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/icons/navegation.svg"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Nome da Empresa"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                                        value: data.companyName,
                                        name: "companyName",
                                        onChange: (e)=>setData({
                                                ...data,
                                                [e.target.name]: e.target.value
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Nome Fantasia"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                                        value: data.fantasyName,
                                        name: "fantasyName",
                                        onChange: (e)=>setData({
                                                ...data,
                                                [e.target.name]: e.target.value
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "CNPJ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                                        value: data.document,
                                        name: "document",
                                        onChange: (e)=>setData({
                                                ...data,
                                                [e.target.name]: e.target.value
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Telefone"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: (_UI_Input_Input_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                                        value: data.telephone,
                                        name: "telephone",
                                        onChange: (e)=>setData({
                                                ...data,
                                                [e.target.name]: e.target.value
                                            })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_UI_Button_Button_module_css__WEBPACK_IMPORTED_MODULE_9___default().button),
                                                onClick: ()=>handleDeleteItem(item.id),
                                                children: "Salvar"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                style: {
                                                    background: "none",
                                                    border: "none"
                                                },
                                                onClick: ()=>handleDeleteItem(item.id),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/icons/trash-2.svg",
                                                    alt: "lixeira"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }, item.id))
        })
    });
}


/***/ })

};
;