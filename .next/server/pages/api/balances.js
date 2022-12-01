"use strict";
(() => {
var exports = {};
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "moralis"
const external_moralis_namespaceObject = require("moralis");
var external_moralis_default = /*#__PURE__*/__webpack_require__.n(external_moralis_namespaceObject);
;// CONCATENATED MODULE: external "@moralisweb3/evm-utils"
const evm_utils_namespaceObject = require("@moralisweb3/evm-utils");
;// CONCATENATED MODULE: ./pages/api/balances.js


async function handler(req, res) {
    // reads the api key from .env.local and starts Moralis SDK
    await external_moralis_default().start({
        apiKey: process.env.MORALIS_API_KEY
    });
    const address = "0x675951c3ECe300707A075d2f2714783284897E0A";
    const [nativeBalance, tokenBalances] = await Promise.all([
        external_moralis_default().EvmApi.balance.getNativeBalance({
            chain: evm_utils_namespaceObject.EvmChain.BSC,
            address
        }),
        external_moralis_default().EvmApi.token.getWalletTokenBalances({
            chain: evm_utils_namespaceObject.EvmChain.BSC,
            address
        })
    ]);
    res.status(200).json({
        // formatting the output
        nativeBalance: nativeBalance.result.balance.ether,
        tokenBalances: tokenBalances.result.map((token)=>token.display())
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(512));
module.exports = __webpack_exports__;

})();