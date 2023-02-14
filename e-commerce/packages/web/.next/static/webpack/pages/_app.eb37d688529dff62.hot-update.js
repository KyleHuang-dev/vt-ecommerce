"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/CartPreview.tsx":
/*!****************************************!*\
  !*** ./src/components/CartPreview.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CardPreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DeleteItemButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteItemButton */ \"./src/components/DeleteItemButton.tsx\");\n/* harmony import */ var _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/cart/cart.hook */ \"./src/store/cart/cart.hook.ts\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CardPreview() {\n    _s();\n    const { cartItems , clearItemFromCart  } = (0,_store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_2__.useCart)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        sx: {\n            flexGrow: 1,\n            maxWidth: 752\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n            display: \"flex\",\n            direction: \"column\",\n            justifyContent: \"center\",\n            item: true,\n            xs: 12,\n            md: 6,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    sx: {\n                        m: 2\n                    },\n                    variant: \"h6\",\n                    component: \"div\",\n                    children: cartItems.length > 0 ? \"Items in the cart\" : \"No item in the Cart\"\n                }, void 0, false, {\n                    fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.List, {\n                        children: cartItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                                secondaryAction: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                                    edge: \"end\",\n                                    \"aria-label\": \"delete\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteItemButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        item: item\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemAvatar, {\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CardMedia, {\n                                                sx: {\n                                                    height: 50\n                                                },\n                                                image: item.imageUrl,\n                                                title: item.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {\n                                        primary: item.name,\n                                        secondary: item.price\n                                    }, void 0, false, {\n                                        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                        variant: \"h6\",\n                                        children: [\n                                            \"x \",\n                                            item.quantity\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    component: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n                    href: \"/cart\",\n                    variant: \"contained\",\n                    children: \"Check Cart\"\n                }, void 0, false, {\n                    fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartPreview.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(CardPreview, \"G1vb1q5MsWCo/xeY5OCAD2KJMQk=\", false, function() {\n    return [\n        _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_2__.useCart\n    ];\n});\n_c = CardPreview;\nvar _c;\n$RefreshReg$(_c, \"CardPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJ0UHJldmlldy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNBO0FBWTNCO0FBQ007QUFFZCxTQUFTYSxjQUFjOztJQUNsQyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsa0JBQWlCLEVBQUUsR0FBR2QsOERBQU9BO0lBRWhELHFCQUNJLDhEQUFDVSw4Q0FBR0E7UUFBQ0ssSUFBSTtZQUFFQyxVQUFVO1lBQUdDLFVBQVU7UUFBSTtrQkFDbEMsNEVBQUNiLCtDQUFJQTtZQUNEYyxTQUFRO1lBQ1JDLFdBQVU7WUFDVkMsZ0JBQWU7WUFDZkMsSUFBSTtZQUNKQyxJQUFJO1lBQ0pDLElBQUk7OzhCQUVKLDhEQUFDcEIscURBQVVBO29CQUFDWSxJQUFJO3dCQUFFUyxHQUFHO29CQUFFO29CQUFHQyxTQUFRO29CQUFLQyxXQUFVOzhCQUM1Q2IsVUFBVWMsTUFBTSxHQUFHLElBQ2Qsc0JBQ0EscUJBQXFCOzs7Ozs7OEJBRS9CLDhEQUFDdkIsK0NBQUlBOzhCQUNELDRFQUFDSywrQ0FBSUE7a0NBQ0FJLFVBQVVlLEdBQUcsQ0FBQyxDQUFDUCxxQkFDWiw4REFBQ2IsbURBQVFBO2dDQUNMcUIsK0JBQ0ksOERBQUN4QixxREFBVUE7b0NBQUN5QixNQUFLO29DQUFNQyxjQUFXOzhDQUM5Qiw0RUFBQ2hDLHlEQUFnQkE7d0NBQUNzQixNQUFNQTs7OztrREFJaEMsOERBQUNkLHlEQUFjQTs7NENBQ1Y7MERBQ0QsOERBQUNMLG9EQUFTQTtnREFDTmEsSUFBSTtvREFBRWlCLFFBQVE7Z0RBQUc7Z0RBQ2pCQyxPQUFPWixLQUFLYSxRQUFRO2dEQUNwQkMsT0FBT2QsS0FBS2UsSUFBSTs7Ozs7Ozs7Ozs7O2tEQUd4Qiw4REFBQzlCLHVEQUFZQTt3Q0FDVCtCLFNBQVNoQixLQUFLZSxJQUFJO3dDQUNsQkUsV0FBV2pCLEtBQUtrQixLQUFLOzs7Ozs7a0RBRXpCLDhEQUFDcEMscURBQVVBO3dDQUFDc0IsU0FBUTs7NENBQUs7NENBQ2xCSixLQUFLbUIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT3BDLDhEQUFDdkMsaURBQU1BO29CQUFDeUIsV0FBV2Ysa0RBQUlBO29CQUFFOEIsTUFBSztvQkFBUWhCLFNBQVE7OEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFFLENBQUM7R0F0RHVCYjs7UUFDcUJaLDBEQUFPQTs7O0tBRDVCWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJ0UHJldmlldy50c3g/YzBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVsZXRlSXRlbUJ1dHRvbiBmcm9tIFwiLi9EZWxldGVJdGVtQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL3N0b3JlL2NhcnQvY2FydC5ob29rXCI7XG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBDYXJkTWVkaWEsXG4gICAgVHlwb2dyYXBoeSxcbiAgICBHcmlkLFxuICAgIEljb25CdXR0b24sXG4gICAgTGlzdEl0ZW1UZXh0LFxuICAgIExpc3RJdGVtQXZhdGFyLFxuICAgIExpc3RJdGVtLFxuICAgIExpc3QsXG4gICAgQm94LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkUHJldmlldygpIHtcbiAgICBjb25zdCB7IGNhcnRJdGVtcywgY2xlYXJJdGVtRnJvbUNhcnQgfSA9IHVzZUNhcnQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIG1heFdpZHRoOiA3NTIgfX0+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICAgIG1kPXs2fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG06IDIgfX0gdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkl0ZW1zIGluIHRoZSBjYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJObyBpdGVtIGluIHRoZSBDYXJ0XCJ9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwiZW5kXCIgYXJpYS1sYWJlbD1cImRlbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJdGVtQnV0dG9uIGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBoZWlnaHQ6IDUwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IHtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IGhyZWY9XCIvY2FydFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2hlY2sgQ2FydFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkRlbGV0ZUl0ZW1CdXR0b24iLCJ1c2VDYXJ0IiwiQnV0dG9uIiwiQ2FyZE1lZGlhIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiTGlzdEl0ZW1UZXh0IiwiTGlzdEl0ZW1BdmF0YXIiLCJMaXN0SXRlbSIsIkxpc3QiLCJCb3giLCJMaW5rIiwiQ2FyZFByZXZpZXciLCJjYXJ0SXRlbXMiLCJjbGVhckl0ZW1Gcm9tQ2FydCIsInN4IiwiZmxleEdyb3ciLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIml0ZW0iLCJ4cyIsIm1kIiwibSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJsZW5ndGgiLCJtYXAiLCJzZWNvbmRhcnlBY3Rpb24iLCJlZGdlIiwiYXJpYS1sYWJlbCIsImhlaWdodCIsImltYWdlIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsIm5hbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwicHJpY2UiLCJxdWFudGl0eSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CartPreview.tsx\n"));

/***/ }),

/***/ "./src/components/DeleteItemButton.tsx":
/*!*********************************************!*\
  !*** ./src/components/DeleteItemButton.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DeleteItemButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/cart/cart.hook */ \"./src/store/cart/cart.hook.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction DeleteItemButton(param) {\n    let { item  } = param;\n    _s();\n    const { clearItemFromCart , cartItems  } = (0,_store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_1__.useCart)();\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            onClick: ()=>clearItemFromCart(cartItems, item)\n        }, void 0, false, {\n            fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/DeleteItemButton.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(DeleteItemButton, \"feRc/B12zFlmDaFQpCKMjW/SyBY=\", false, function() {\n    return [\n        _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_1__.useCart\n    ];\n});\n_c = DeleteItemButton;\nvar _c;\n$RefreshReg$(_c, \"DeleteItemButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZWxldGVJdGVtQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9EO0FBQ0Y7QUFFbkMsU0FBU0UsaUJBQWlCLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUNyQyxNQUFNLEVBQUVDLGtCQUFpQixFQUFFQyxVQUFTLEVBQUUsR0FBR0osOERBQU9BO0lBQ2hEO2tCQUNBO2tCQUNJLDRFQUFDRCxrRUFBVUE7WUFBQ00sU0FBUyxJQUFNRixrQkFBa0JDLFdBQVdGOzs7Ozs7O0FBRWhFLENBQUM7R0FOdUJEOztRQUNxQkQsMERBQU9BOzs7S0FENUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RlbGV0ZUl0ZW1CdXR0b24udHN4PzljZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlXCI7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL3N0b3JlL2NhcnQvY2FydC5ob29rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZUl0ZW1CdXR0b24oeyBpdGVtIH0pIHtcbiAgICBjb25zdCB7IGNsZWFySXRlbUZyb21DYXJ0LCBjYXJ0SXRlbXMgfSA9IHVzZUNhcnQoKTtcbiAgICByZXR1cm47XG4gICAgPD5cbiAgICAgICAgPERlbGV0ZUljb24gb25DbGljaz17KCkgPT4gY2xlYXJJdGVtRnJvbUNhcnQoY2FydEl0ZW1zLCBpdGVtKX0gLz5cbiAgICA8Lz47XG59XG4iXSwibmFtZXMiOlsiRGVsZXRlSWNvbiIsInVzZUNhcnQiLCJEZWxldGVJdGVtQnV0dG9uIiwiaXRlbSIsImNsZWFySXRlbUZyb21DYXJ0IiwiY2FydEl0ZW1zIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DeleteItemButton.tsx\n"));

/***/ })

});