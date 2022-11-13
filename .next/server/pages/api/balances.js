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
exports.id = "pages/api/balances";
exports.ids = ["pages/api/balances"];
exports.modules = {

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

/***/ "(api)/./pages/api/balances.js":
/*!*******************************!*\
  !*** ./pages/api/balances.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    // reads the api key from .env.local and starts Moralis SDK\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = \"0x675951c3ECe300707A075d2f2714783284897E0A\";\n    const [nativeBalance, tokenBalances] = await Promise.all([\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.balance.getNativeBalance({\n            chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__.EvmChain.BSC,\n            address\n        }),\n        moralis__WEBPACK_IMPORTED_MODULE_0___default().EvmApi.token.getWalletTokenBalances({\n            chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_1__.EvmChain.BSC,\n            address\n        })\n    ]);\n    res.status(200).json({\n        // formatting the output\n        nativeBalance: nativeBalance.result.balance.ether,\n        tokenBalances: tokenBalances.result.map((token)=>token.display())\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFsYW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDb0I7QUFFbkMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsMkRBQTJEO0lBQzNELE1BQU1KLG9EQUFhLENBQUM7UUFBRU0sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQUM7SUFFMUQsTUFBTUMsVUFBVTtJQUVoQixNQUFNLENBQUNDLGVBQWVDLGNBQWMsR0FBRyxNQUFNQyxRQUFRQyxHQUFHLENBQUM7UUFDckRkLDhFQUF1QyxDQUFDO1lBQ3BDa0IsT0FBT2pCLGdFQUFZO1lBQ25CUztRQUVKO1FBQ0FWLGtGQUEyQyxDQUFDO1lBQ3hDa0IsT0FBT2pCLGdFQUFZO1lBQ25CUztRQUNKO0tBQ0g7SUFFRE4sSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDakIsd0JBQXdCO1FBQ3hCWixlQUFlQSxjQUFjYSxNQUFNLENBQUNSLE9BQU8sQ0FBQ1MsS0FBSztRQUNqRGIsZUFBZUEsY0FBY1ksTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBQ04sUUFBVUEsTUFBTU8sT0FBTztJQUNwRTtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLWRhcHAvLi9wYWdlcy9hcGkvYmFsYW5jZXMuanM/MGI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcbmltcG9ydCB7IEV2bUNoYWluIH0gZnJvbSAnQG1vcmFsaXN3ZWIzL2V2bS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAvLyByZWFkcyB0aGUgYXBpIGtleSBmcm9tIC5lbnYubG9jYWwgYW5kIHN0YXJ0cyBNb3JhbGlzIFNES1xuICAgIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSAnMHg2NzU5NTFjM0VDZTMwMDcwN0EwNzVkMmYyNzE0NzgzMjg0ODk3RTBBJztcblxuICAgIGNvbnN0IFtuYXRpdmVCYWxhbmNlLCB0b2tlbkJhbGFuY2VzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgTW9yYWxpcy5Fdm1BcGkuYmFsYW5jZS5nZXROYXRpdmVCYWxhbmNlKHtcbiAgICAgICAgICAgIGNoYWluOiBFdm1DaGFpbi5CU0MsXG4gICAgICAgICAgICBhZGRyZXNzLFxuXG4gICAgICAgIH0pLFxuICAgICAgICBNb3JhbGlzLkV2bUFwaS50b2tlbi5nZXRXYWxsZXRUb2tlbkJhbGFuY2VzKHtcbiAgICAgICAgICAgIGNoYWluOiBFdm1DaGFpbi5CU0MsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KSxcbiAgICBdKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgLy8gZm9ybWF0dGluZyB0aGUgb3V0cHV0XG4gICAgICAgIG5hdGl2ZUJhbGFuY2U6IG5hdGl2ZUJhbGFuY2UucmVzdWx0LmJhbGFuY2UuZXRoZXIsXG4gICAgICAgIHRva2VuQmFsYW5jZXM6IHRva2VuQmFsYW5jZXMucmVzdWx0Lm1hcCgodG9rZW4pID0+IHRva2VuLmRpc3BsYXkoKSksXG4gICAgfSk7XG59Il0sIm5hbWVzIjpbIk1vcmFsaXMiLCJFdm1DaGFpbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGFydCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNT1JBTElTX0FQSV9LRVkiLCJhZGRyZXNzIiwibmF0aXZlQmFsYW5jZSIsInRva2VuQmFsYW5jZXMiLCJQcm9taXNlIiwiYWxsIiwiRXZtQXBpIiwiYmFsYW5jZSIsImdldE5hdGl2ZUJhbGFuY2UiLCJjaGFpbiIsIkJTQyIsInRva2VuIiwiZ2V0V2FsbGV0VG9rZW5CYWxhbmNlcyIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJldGhlciIsIm1hcCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/balances.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/balances.js"));
module.exports = __webpack_exports__;

})();