"use strict";
(() => {
var exports = {};
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 20:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_native),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "moralis"
const external_moralis_namespaceObject = require("moralis");
var external_moralis_default = /*#__PURE__*/__webpack_require__.n(external_moralis_namespaceObject);
;// CONCATENATED MODULE: external "@moralisweb3/evm-utils"
const evm_utils_namespaceObject = require("@moralisweb3/evm-utils");
;// CONCATENATED MODULE: ./pages/native.jsx



function Native({ nativeBalance , address  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                children: [
                    " Wallet: ",
                    address
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                children: [
                    " Balance: ",
                    nativeBalance
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    await external_moralis_default().start({
        apiKey: process.env.MORALIS_API_KEY
    });
    const address = "0x675951c3ECe300707A075d2f2714783284897E0A";
    const nativeBalance = await external_moralis_default().EvmApi.balance.getNativeBalance({
        chain: evm_utils_namespaceObject.EvmChain.BSC,
        address
    });
    return {
        props: {
            address,
            nativeBalance: nativeBalance.result.balance.ether
        }
    };
}
/* harmony default export */ const pages_native = (Native);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(20));
module.exports = __webpack_exports__;

})();