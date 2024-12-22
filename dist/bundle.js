/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formManager: () => (/* binding */ formManager)\n/* harmony export */ });\nclass formManager {\n    constructor() {\n        this.Elements = {};\n    }\n    getInputElement(id) {\n        const element = document.getElementById(id);\n        if (element instanceof HTMLInputElement) {\n            return element;\n        }\n        else {\n            console.error(`Element with ID \"${id}\" is not an HTMLInputElement`);\n            return null;\n        }\n    }\n    setElement(id) {\n        const element = this.getInputElement(id);\n        if (element) {\n            this.Elements[id] = element;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://dangeongame/./src/form.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.ts\");\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    //localStorageのテスト用\n    const text = localStorage.getItem(\"name\");\n    const email = localStorage.getItem(\"email\");\n    //sessionStorageのテスト用\n    // const text  = sessionStorage.getItem(\"name\")\n    // const email = sessionStorage.getItem(\"email\")\n    const test = new _form__WEBPACK_IMPORTED_MODULE_0__.formManager();\n    const keyArr = [\"name\", \"email\"];\n    keyArr.forEach((v) => {\n        test.setElement(v);\n    });\n    if (text) {\n        test.Elements.name.value = text;\n    }\n    if (email) {\n        test.Elements.email.value = email;\n    }\n    test.Elements.name.addEventListener(\"change\", () => {\n        localStorage.setItem(\"name\", test.Elements.name.value);\n        console.log(text);\n    });\n    test.Elements.email.addEventListener(\"change\", () => {\n        localStorage.setItem(\"email\", test.Elements.email.value);\n        console.log(email);\n    });\n});\n\n\n//# sourceURL=webpack://dangeongame/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;