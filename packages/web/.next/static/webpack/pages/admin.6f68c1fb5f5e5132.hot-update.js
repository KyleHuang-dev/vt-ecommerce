"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./pages/admin/index.tsx":
/*!*******************************!*\
  !*** ./pages/admin/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_store_admin_admin_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/store/admin/admin.hooks */ \"./src/store/admin/admin.hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_views_AdminBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/views/AdminBody */ \"./src/views/AdminBody.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AdminPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { orders , fetchAllOrders , fetchAdminProducts , adminProducts  } = (0,_src_store_admin_admin_hooks__WEBPACK_IMPORTED_MODULE_1__.useAdmin)();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"1\");\n    const handleChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchAdminProducts();\n    }, []);\n    let editProduct = null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_views_AdminBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        adminProducts: adminProducts,\n        orders: orders\n    }, void 0, false, {\n        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/pages/admin/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 12\n    }, this);\n}\n_s(AdminPage, \"1p7pjtYG7Q6Q0M7cAgKng8uqE3s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _src_store_admin_admin_hooks__WEBPACK_IMPORTED_MODULE_1__.useAdmin\n    ];\n});\n_c = AdminPage;\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDYjtBQUlKO0FBQ007QUFPL0IsU0FBU0ssWUFBWTs7SUFDaEMsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUksT0FBTSxFQUFFQyxlQUFjLEVBQUVDLG1CQUFrQixFQUFFQyxjQUFhLEVBQUUsR0FDL0RWLHNFQUFRQTtJQUVaLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNVyxlQUFlLENBQUNDLE9BQTZCQyxXQUFxQjtRQUNwRUgsU0FBU0c7SUFDYjtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pRO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSU8sY0FBYyxJQUFJO0lBQ3RCLHFCQUFPLDhEQUFDWiw0REFBU0E7UUFBQ00sZUFBZUE7UUFBZUgsUUFBUUE7Ozs7OztBQUM1RCxDQUFDO0dBaEJ1QkY7O1FBQ0xGLGtEQUFTQTtRQUVwQkgsa0VBQVFBOzs7S0FIUUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vaW5kZXgudHN4P2E5NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQWRtaW4gfSBmcm9tIFwiQC9zcmMvc3RvcmUvYWRtaW4vYWRtaW4uaG9va3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIkAvc3JjL3N0b3JlL2NhcnQvY2FydC5tb2RlbFwiO1xuXG5pbXBvcnQgeyBQcm9kdWN0SXRlbSB9IGZyb20gXCJAL3NyYy9zdG9yZS9hZG1pbi9hZG1pbi5tb2RlbFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQWRtaW5Cb2R5IGZyb20gXCJAL3NyYy92aWV3cy9BZG1pbkJvZHlcIjtcblxuaW50ZXJmYWNlIElUeXBlIHtcbiAgICByZWFkb25seSBvcmRlcnNQcm9wOiBPcmRlcltdO1xuICAgIHJlYWRvbmx5IGVkaXRQcm9kdWN0OiBQcm9kdWN0SXRlbSB8IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluUGFnZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IG9yZGVycywgZmV0Y2hBbGxPcmRlcnMsIGZldGNoQWRtaW5Qcm9kdWN0cywgYWRtaW5Qcm9kdWN0cyB9ID1cbiAgICAgICAgdXNlQWRtaW4oKTtcblxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIxXCIpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQsIG5ld1ZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEFkbWluUHJvZHVjdHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBsZXQgZWRpdFByb2R1Y3QgPSBudWxsO1xuICAgIHJldHVybiA8QWRtaW5Cb2R5IGFkbWluUHJvZHVjdHM9e2FkbWluUHJvZHVjdHN9IG9yZGVycz17b3JkZXJzfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBZG1pbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQWRtaW5Cb2R5IiwiQWRtaW5QYWdlIiwicm91dGVyIiwib3JkZXJzIiwiZmV0Y2hBbGxPcmRlcnMiLCJmZXRjaEFkbWluUHJvZHVjdHMiLCJhZG1pblByb2R1Y3RzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJlZGl0UHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.tsx\n"));

/***/ })

});