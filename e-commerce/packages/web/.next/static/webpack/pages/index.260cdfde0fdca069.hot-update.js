"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Body.tsx":
/*!*********************************!*\
  !*** ./src/components/Body.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Body; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ \"./src/components/ProductCard.tsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/cart/cart.hook */ \"./src/store/cart/cart.hook.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Body() {\n    _s();\n    const { products  } = (0,_store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_3__.useCart)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products);\n    const getInput = (event)=>{\n        setInput(event.target.value);\n    };\n    function searchData(data) {\n        if (data === \"\") {\n            setProductList(products);\n        } else {\n            let tempArr = products.filter((product)=>{\n                const inputData = data.toLocaleLowerCase();\n                const productName = product.name.toLowerCase();\n                return productName.includes(inputData);\n            });\n            setProductList(tempArr);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n        sx: {\n            px: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"search-bar\",\n                label: \"Search Bar\",\n                variant: \"standard\",\n                onChange: getInput\n            }, void 0, false, {\n                fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/Body.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                variant: \"outlined\",\n                onClick: ()=>searchData(input),\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/Body.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                container: true,\n                children: productList.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        product: product\n                    }, void 0, false, {\n                        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/Body.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/Body.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/src/components/Body.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Body, \"/J4xZ0iUkSprOpZwTu0vBiCSLk4=\", false, function() {\n    return [\n        _store_cart_cart_hook__WEBPACK_IMPORTED_MODULE_3__.useCart\n    ];\n});\n_c = Body;\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb2R5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2dCO0FBQ3ZCO0FBQ2lCO0FBRW5DLFNBQVNNLE9BQU87O0lBQzNCLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdGLDhEQUFPQTtJQUU1QixNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDRztJQUMvQyxNQUFNSyxXQUFXLENBQUNDLFFBQVU7UUFDeEJKLFNBQVNJLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLFNBQVNDLFdBQVdDLElBQVksRUFBRTtRQUM5QixJQUFJQSxTQUFTLElBQUk7WUFDYk4sZUFBZUo7UUFDbkIsT0FBTztZQUNILElBQUlXLFVBQVVYLFNBQVNZLE1BQU0sQ0FBQyxDQUFDQyxVQUFZO2dCQUN2QyxNQUFNQyxZQUFZSixLQUFLSyxpQkFBaUI7Z0JBQ3hDLE1BQU1DLGNBQWNILFFBQVFJLElBQUksQ0FBQ0MsV0FBVztnQkFFNUMsT0FBT0YsWUFBWUcsUUFBUSxDQUFDTDtZQUNoQztZQUNBVixlQUFlTztRQUNuQixDQUFDO0lBQ0w7SUFDQSxxQkFDSSw4REFBQ2hCLCtDQUFJQTtRQUFDeUIsSUFBSTtZQUFFQyxJQUFJO1FBQUU7OzBCQUNkLDhEQUFDekIsb0RBQVNBO2dCQUNOMEIsSUFBRztnQkFDSEMsT0FBTTtnQkFDTkMsU0FBUTtnQkFDUkMsVUFBVXBCOzs7Ozs7MEJBRWQsOERBQUNYLGlEQUFNQTtnQkFBQzhCLFNBQVE7Z0JBQVdFLFNBQVMsSUFBTWpCLFdBQVdSOzBCQUFROzs7Ozs7MEJBRzdELDhEQUFDTiwrQ0FBSUE7Z0JBQUNnQyxTQUFTOzBCQUNWeEIsWUFBWXlCLEdBQUcsQ0FBQyxDQUFDZix3QkFDZCw4REFBQ3BCLG9EQUFXQTt3QkFBQ29CLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDO0dBeEN1QmQ7O1FBQ0NELDBEQUFPQTs7O0tBRFJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JvZHkudHN4Pzk1YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCIuLi9zdG9yZS9jYXJ0L2NhcnQuaG9va1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2R5KCkge1xuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZUNhcnQoKTtcblxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShwcm9kdWN0cyk7XG4gICAgY29uc3QgZ2V0SW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2VhcmNoRGF0YShkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHNldFByb2R1Y3RMaXN0KHByb2R1Y3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0ZW1wQXJyID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXREYXRhID0gZGF0YS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdE5hbWUuaW5jbHVkZXMoaW5wdXREYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0UHJvZHVjdExpc3QodGVtcEFycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgc3g9e3sgcHg6IDUgfX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2gtYmFyXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBCYXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldElucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4gc2VhcmNoRGF0YShpbnB1dCl9PlxuICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUHJvZHVjdENhcmQiLCJCdXR0b24iLCJHcmlkIiwiVGV4dEZpZWxkIiwidXNlU3RhdGUiLCJ1c2VDYXJ0IiwiQm9keSIsInByb2R1Y3RzIiwiaW5wdXQiLCJzZXRJbnB1dCIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJnZXRJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hEYXRhIiwiZGF0YSIsInRlbXBBcnIiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiaW5wdXREYXRhIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwcm9kdWN0TmFtZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3giLCJweCIsImlkIiwibGFiZWwiLCJ2YXJpYW50Iiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiY29udGFpbmVyIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Body.tsx\n"));

/***/ })

});