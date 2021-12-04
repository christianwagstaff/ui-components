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

/***/ "./src/dropDownMenu.js":
/*!*****************************!*\
  !*** ./src/dropDownMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\nclass NavBar {\n  constructor() {\n    this.navList = [];\n  }\n\n  createOLForNav() {\n    let list = this.navList;\n    let ul = document.createElement(\"ul\");\n    for (let key of list) {\n      let li = document.createElement(\"li\");\n      if (key[\"link\"]) {\n        let a = document.createElement(\"a\");\n        a.href = key[\"link\"];\n        a.textContent = key.title;\n        if (key[\"target\"]) {\n          a.target = key[\"target\"];\n        }\n        li.appendChild(a);\n      } else {\n        li.textContent = key.title;\n      }\n      if (key[\"submenu\"]) {\n        let innerList = this.createNestedListFromObject(key[\"submenu\"]);\n        innerList.classList.add(\"drop-menu\");\n        if (key[\"class\"]) {\n          let classes = key[\"class\"];\n          for (let userClass of classes) {\n            innerList.classList.add(userClass);\n          }\n        }\n        li.appendChild(innerList);\n      }\n\n      ul.appendChild(li);\n    }\n    return ul;\n  }\n\n  createNestedListFromObject(list) {\n    let ul = document.createElement(\"ul\");\n    for (let key of list) {\n      let li = document.createElement(\"li\");\n      if (key[\"link\"]) {\n        let a = document.createElement(\"a\");\n        a.href = key[\"link\"];\n        a.textContent = key.title;\n        if (key[\"target\"]) {\n          a.target = key[\"target\"];\n        }\n        li.appendChild(a);\n      } else {\n        li.textContent = key.title;\n      }\n      if (key[\"submenu\"]) {\n        let innerList = this.createNestedListFromObject(key[\"submenu\"]);\n        innerList.classList.add(\"drop-menu\");\n        if (key[\"class\"]) {\n          let classes = key[\"class\"];\n          for (let userClass of classes) {\n            innerList.classList.add(userClass);\n          }\n        }\n        li.appendChild(innerList);\n      }\n\n      ul.appendChild(li);\n    }\n    return ul;\n  }\n\n  renderNav() {\n    let nav = document.createElement(\"nav\");\n    nav.appendChild(this.createOLForNav());\n    return nav;\n  }\n\n  createNavItem(title, link) {\n    let obj = { title, link };\n    this.navList.push(obj);\n  }\n\n  useTemplate(template) {\n    this.navList = template;\n  }\n}\n\n\n//# sourceURL=webpack://ui-components/./src/dropDownMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropDownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDownMenu */ \"./src/dropDownMenu.js\");\n\n\nfunction dropDownFunction(e) {\n  let parent = e.target.closest(\"li\");\n  let dropDownContent = parent.querySelector(\".drop-menu\");\n  let currentActive = findCurrentActive();\n  if (currentActive && currentActive !== dropDownContent) {\n    removeActive(currentActive);\n  }\n  if (dropDownContent) {\n    dropDownContent.classList.toggle(\"active\");\n  }\n}\n\nfunction findCurrentActive() {\n  let active = document.querySelector(\".active\");\n  if (active) {\n    return active;\n  }\n}\n\nfunction removeActive(active) {\n  active.classList.remove(\"active\");\n}\n\nlet navTemplate = [\n  {\n    title: \"Haily\",\n    link: \"#\",\n    submenu: [\n      { title: \"Nav 1\", link: \"#\" },\n      { title: \"Nav 2\", link: \"#\" },\n      {\n        title: \"Nav 3\",\n        link: \"#\",\n        submenu: [\n          { title: \"Sub 1\", link: \"#\" },\n          { title: \"Sub 2\", link: \"#\" },\n          { title: \"Sub 3\", link: \"#\" },\n          { title: \"Sub 4\", link: \"#\" },\n        ],\n        class: [\"sub-menu\"],\n      },\n      { title: \"Nav 4\", link: \"#\" },\n    ],\n  },\n  {\n    title: \"Christian\",\n    submenu: [\n      { title: \"Sub 1\", link: \"#\" },\n      { title: \"Sub 2\", link: \"#\" },\n      { title: \"Sub 3\", link: \"#\" },\n      { title: \"Sub 4\", link: \"#\" },\n    ],\n  },\n  {\n    title: \"Sophie\",\n    link: \"https://www.google.com\",\n    target: \"_blank\",\n  },\n  { title: \"Kaden\", link: \"#\", submenu: [{ title: \"Test\" }] },\n];\n\nconst navItem = new _dropDownMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nnavItem.useTemplate(navTemplate);\ndocument.body.appendChild(navItem.renderNav());\nconst nav = document.querySelector(\"nav\");\nnav.addEventListener(\"click\", dropDownFunction);\n\n\n//# sourceURL=webpack://ui-components/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;