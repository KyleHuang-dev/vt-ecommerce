"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./src/components/CartBody.tsx":
/*!*************************************!*\
  !*** ./src/components/CartBody.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartBody; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/cart/cart.hook */ \"./src/store/cart/cart.hook.ts\");\n/* harmony import */ var _CartTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartTable */ \"./src/components/CartTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CartBody() {\n    _s();\n    const { cartItems  } = (0,_store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_1__.useCart)();\n    if (cartItems.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n            gutterBottom: true,\n            variant: \"h5\",\n            component: \"div\",\n            children: \"Your cart is empty.\"\n        }, void 0, false, {\n            fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartBody.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/CartBody.tsx\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\n_s(CartBody, \"E8dd3RMRM0VfT3hDva0K4U3Wxn8=\", false, function() {\n    return [\n        _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_1__.useCart\n    ];\n});\n_c = CartBody;\nvar _c;\n$RefreshReg$(_c, \"CartBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJ0Qm9keS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTztBQUNkO0FBRXJCLFNBQVNHLFdBQVc7O0lBQy9CLE1BQU0sRUFBRUMsVUFBUyxFQUFFLEdBQUdILDhEQUFPQTtJQUM3QixJQUFJRyxVQUFVQyxNQUFNLEtBQUssR0FBRztRQUN4QixxQkFDSSw4REFBQ0wscURBQVVBO1lBQUNNLFlBQVk7WUFBQ0MsU0FBUTtZQUFLQyxXQUFVO3NCQUFNOzs7Ozs7SUFJOUQsQ0FBQztJQUNELHFCQUFPLDhEQUFDTixrREFBU0E7Ozs7O0FBQ3JCLENBQUM7R0FWdUJDOztRQUNFRiwwREFBT0E7OztLQURURSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJ0Qm9keS50c3g/MmRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vc3RvcmUvY2FydC9jYXJ0Lmhvb2tcIjtcbmltcG9ydCBDYXJ0VGFibGUgZnJvbSBcIi4vQ2FydFRhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRCb2R5KCkge1xuICAgIGNvbnN0IHsgY2FydEl0ZW1zIH0gPSB1c2VDYXJ0KCk7XG4gICAgaWYgKGNhcnRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICBZb3VyIGNhcnQgaXMgZW1wdHkuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8Q2FydFRhYmxlIC8+O1xufVxuIl0sIm5hbWVzIjpbIlR5cG9ncmFwaHkiLCJ1c2VDYXJ0IiwiQ2FydFRhYmxlIiwiQ2FydEJvZHkiLCJjYXJ0SXRlbXMiLCJsZW5ndGgiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CartBody.tsx\n"));

/***/ })

});