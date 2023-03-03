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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_store_admin_admin_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/store/admin/admin.hooks */ \"./src/store/admin/admin.hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_views_AdminBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/views/AdminBody */ \"./src/views/AdminBody.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_store_user_user_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/store/user/user.hook */ \"./src/store/user/user.hook.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AdminPage() {\n    _s();\n    const { currentUser  } = (0,_src_store_user_user_hook__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    const [admin, setAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const token = currentUser === null || currentUser === void 0 ? void 0 : currentUser.access_token;\n    const bearer = \"Bearer \".concat(token);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getUser() {\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:2121/admin\", {\n                    headers: {\n                        Authorization: bearer\n                    }\n                });\n                console.log(res.data);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        getUser();\n    }, []);\n    const { orders , fetchAdminProducts , adminProducts , fetchAllOrders  } = (0,_src_store_admin_admin_hooks__WEBPACK_IMPORTED_MODULE_1__.useAdmin)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchAdminProducts();\n        fetchAllOrders();\n    }, []);\n    let editProduct = null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_views_AdminBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        adminProducts: adminProducts,\n        orders: orders\n    }, void 0, false, {\n        fileName: \"/home/kyleh/Desktop/next-test/e-commerce/packages/web/pages/admin/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 12\n    }, this);\n}\n_s(AdminPage, \"uUnXjlUlRwD7Qln75QGlQpd74Dc=\", false, function() {\n    return [\n        _src_store_user_user_hook__WEBPACK_IMPORTED_MODULE_4__.useUser,\n        _src_store_admin_admin_hooks__WEBPACK_IMPORTED_MODULE_1__.useAdmin\n    ];\n});\n_c = AdminPage;\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDYjtBQUtFO0FBQ3BCO0FBQzJCO0FBa0J0QyxTQUFTTSxZQUFZOztJQUNoQyxNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHRixrRUFBT0E7SUFDL0IsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFVLElBQUk7SUFFaEQsTUFBTVEsUUFBUUgsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhSSxZQUFZO0lBQ3ZDLE1BQU1DLFNBQVMsVUFBZ0IsT0FBTkY7SUFDekJULGdEQUFTQSxDQUFDLElBQU07UUFDWixlQUFlWSxVQUFVO1lBQ3JCLElBQUk7Z0JBQ0EsTUFBTUMsTUFBTSxNQUFNVixpREFBUyxDQUV0QiwrQkFDRDtvQkFDSVksU0FBUzt3QkFBRUMsZUFBZUw7b0JBQU87Z0JBQ3JDO2dCQUVKTSxRQUFRQyxHQUFHLENBQUNMLElBQUlNLElBQUk7WUFDeEIsRUFBRSxPQUFPQyxPQUFPO2dCQUNaSCxRQUFRQyxHQUFHLENBQUNFO1lBQ2hCO1FBQ0o7UUFDQVI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQUVTLE9BQU0sRUFBRUMsbUJBQWtCLEVBQUVDLGNBQWEsRUFBRUMsZUFBYyxFQUFFLEdBQy9EekIsc0VBQVFBO0lBRVpDLGdEQUFTQSxDQUFDLElBQU07UUFDWnNCO1FBQ0FFO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBSUMsY0FBYyxJQUFJO0lBQ3RCLHFCQUFPLDhEQUFDdkIsNERBQVNBO1FBQUNxQixlQUFlQTtRQUFlRixRQUFRQTs7Ozs7O0FBQzVELENBQUM7R0FsQ3VCaEI7O1FBQ0lELDhEQUFPQTtRQXdCM0JMLGtFQUFRQTs7O0tBekJRTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9pbmRleC50c3g/YTk1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBZG1pbiB9IGZyb20gXCJAL3NyYy9zdG9yZS9hZG1pbi9hZG1pbi5ob29rc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiQC9zcmMvc3RvcmUvY2FydC9jYXJ0Lm1vZGVsXCI7XG5cbmltcG9ydCB7IFByb2R1Y3RJdGVtIH0gZnJvbSBcIkAvc3JjL3N0b3JlL2FkbWluL2FkbWluLm1vZGVsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBBZG1pbkJvZHkgZnJvbSBcIkAvc3JjL3ZpZXdzL0FkbWluQm9keVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAL3NyYy9zdG9yZS91c2VyL3VzZXIuaG9va1wiO1xuXG5pbnRlcmZhY2UgSVR5cGUge1xuICAgIHJlYWRvbmx5IG9yZGVyc1Byb3A6IE9yZGVyW107XG4gICAgcmVhZG9ubHkgZWRpdFByb2R1Y3Q6IFByb2R1Y3RJdGVtIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGhhc2g6IHN0cmluZztcbiAgICBpc0FkbWluOiBib29sZWFuO1xuICAgIG9yZGVyczogT3JkZXJbXTtcbiAgICB1c2VyTmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pblBhZ2UoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IFthZG1pbiwgc2V0QWRtaW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4obnVsbCk7XG5cbiAgICBjb25zdCB0b2tlbiA9IGN1cnJlbnRVc2VyPy5hY2Nlc3NfdG9rZW47XG4gICAgY29uc3QgYmVhcmVyID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAvL3B1dCBpdCBpbiBlbnZcbiAgICAgICAgICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MjEyMS9hZG1pbmAsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYmVhcmVyIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFVzZXIoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB7IG9yZGVycywgZmV0Y2hBZG1pblByb2R1Y3RzLCBhZG1pblByb2R1Y3RzLCBmZXRjaEFsbE9yZGVycyB9ID1cbiAgICAgICAgdXNlQWRtaW4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQWRtaW5Qcm9kdWN0cygpO1xuICAgICAgICBmZXRjaEFsbE9yZGVycygpO1xuICAgIH0sIFtdKTtcblxuICAgIGxldCBlZGl0UHJvZHVjdCA9IG51bGw7XG4gICAgcmV0dXJuIDxBZG1pbkJvZHkgYWRtaW5Qcm9kdWN0cz17YWRtaW5Qcm9kdWN0c30gb3JkZXJzPXtvcmRlcnN9IC8+O1xufVxuIl0sIm5hbWVzIjpbInVzZUFkbWluIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBZG1pbkJvZHkiLCJheGlvcyIsInVzZVVzZXIiLCJBZG1pblBhZ2UiLCJjdXJyZW50VXNlciIsImFkbWluIiwic2V0QWRtaW4iLCJ0b2tlbiIsImFjY2Vzc190b2tlbiIsImJlYXJlciIsImdldFVzZXIiLCJyZXMiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJvcmRlcnMiLCJmZXRjaEFkbWluUHJvZHVjdHMiLCJhZG1pblByb2R1Y3RzIiwiZmV0Y2hBbGxPcmRlcnMiLCJlZGl0UHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.tsx\n"));

/***/ })

});