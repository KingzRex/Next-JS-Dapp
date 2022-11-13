"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/native";
exports.ids = ["pages/native"];
exports.modules = {

/***/ "./pages/native.jsx":
/*!**************************!*\
  !*** ./pages/native.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \" Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Next-JS-Dapp/pages/native.jsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \" Balance: \",\n                    nativeBalance\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/Next-JS-Dapp/pages/native.jsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/Next-JS-Dapp/pages/native.jsx\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, this);\n}\nasync function getServerSideProps(context) {\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = \"0x675951c3ECe300707A075d2f2714783284897E0A\";\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.balance.getNativeBalance({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.BSC,\n        address\n    });\n    return {\n        props: {\n            address,\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsU0FBU0UsT0FBTyxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBQ3hDLHFCQUFPLDhEQUFDQzs7MEJBQ0osOERBQUNDOztvQkFBRztvQkFBVUY7Ozs7Ozs7MEJBQ2QsOERBQUNFOztvQkFBRztvQkFBV0g7Ozs7Ozs7Ozs7Ozs7QUFFdkI7QUFFTyxlQUFlSSxtQkFBbUJDLE9BQU8sRUFBRTtJQUU5QyxNQUFNUixvREFBYSxDQUFDO1FBQUVVLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUFDO0lBQzFELE1BQU1ULFVBQVU7SUFDaEIsTUFBTUQsZ0JBQWdCLE1BQU1ILDhFQUF1QyxDQUFDO1FBQ2hFaUIsT0FBT2hCLGdFQUFZO1FBQ25CRztJQUNKO0lBQ0EsT0FBTztRQUNMZSxPQUFPO1lBQ0xmO1lBQ0FELGVBQWVBLGNBQWNpQixNQUFNLENBQUNMLE9BQU8sQ0FBQ00sS0FBSztRQUNuRDtJQUNGO0FBQ0YsQ0FBQztBQUVILGlFQUFlbkIsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtZGFwcC8uL3BhZ2VzL25hdGl2ZS5qc3g/ZTI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcbmltcG9ydCB7IEV2bUNoYWluIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2V2bS11dGlscyc7XG5cbmZ1bmN0aW9uIE5hdGl2ZSh7IG5hdGl2ZUJhbGFuY2UsIGFkZHJlc3MgfSkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDM+IFdhbGxldDoge2FkZHJlc3N9PC9oMz5cbiAgICAgICAgPGgzPiBCYWxhbmNlOiB7bmF0aXZlQmFsYW5jZX08L2gzPlxuICAgIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cbiAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG4gICAgY29uc3QgYWRkcmVzcyA9ICcweDY3NTk1MWMzRUNlMzAwNzA3QTA3NWQyZjI3MTQ3ODMyODQ4OTdFMEEnO1xuICAgIGNvbnN0IG5hdGl2ZUJhbGFuY2UgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS5iYWxhbmNlLmdldE5hdGl2ZUJhbGFuY2Uoe1xuICAgICAgICBjaGFpbjogRXZtQ2hhaW4uQlNDLFxuICAgICAgICBhZGRyZXNzLFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBuYXRpdmVCYWxhbmNlOiBuYXRpdmVCYWxhbmNlLnJlc3VsdC5iYWxhbmNlLmV0aGVyXG4gICAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICB9O1xuICB9IFxuXG5leHBvcnQgZGVmYXVsdCBOYXRpdmVcbiJdLCJuYW1lcyI6WyJNb3JhbGlzIiwiRXZtQ2hhaW4iLCJOYXRpdmUiLCJuYXRpdmVCYWxhbmNlIiwiYWRkcmVzcyIsImRpdiIsImgzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsIkV2bUFwaSIsImJhbGFuY2UiLCJnZXROYXRpdmVCYWxhbmNlIiwiY2hhaW4iLCJCU0MiLCJwcm9wcyIsInJlc3VsdCIsImV0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

/***/ }),

/***/ "@moralisweb3/evm-utils":
/*!*****************************************!*\
  !*** external "@moralisweb3/evm-utils" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/evm-utils");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/native.jsx"));
module.exports = __webpack_exports__;

})();