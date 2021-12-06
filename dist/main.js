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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/MobileNav.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/MobileNav.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".mobileNav {\\n    padding: 50px;\\n    width: fit-content;\\n    z-index: 10;\\n    border-radius: 30px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-components/./src/styles/MobileNav.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dropDownMenu.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dropDownMenu.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nnav {\\n    padding: 50px;\\n    width: fit-content;\\n    z-index: 10;\\n}\\n\\nnav > ul {\\n    list-style: none;\\n    padding: 0;\\n    margin: 0;\\n    display: flex;\\n    border-radius: 5px;\\n    display: flex;\\n}\\n\\nnav li {\\n    display: flex;\\n    background: aquamarine;\\n    justify-content: center;\\n    gap: 12px;\\n    flex-wrap: wrap;\\n    align-items: center;\\n    width: 150px;\\n    height: 65px;\\n    position: relative;\\n    font-size: 14px;\\n}\\n\\nnav ul li:hover {\\n    background: aqua;\\n}\\n\\nul.drop-menu {\\n    position: absolute;\\n    top: 100%;\\n    left: 0%;\\n    width: 100%;\\n    padding: 0;\\n    display: none;\\n    flex-direction: column;\\n    transform-origin:  bottom;\\n}\\n\\nul.drop-menu.sub-menu {\\n    left: 100%;\\n    top: 0%;\\n}\\n\\nul.drop-menu li {\\n    background: aliceblue;\\n    display: flex;\\n}\\n\\nul.drop-menu li:last-child {\\n    border-radius: 0px 0px 5px 5px;\\n}\\n\\nli:hover > ul.drop-menu, ul.drop-menu.active {\\n    display: flex;\\n    perspective: 1000px;\\n}\\n\\nli:hover > ul.drop-menu > li, ul.drop-menu.active > li {\\n    opacity: 0;\\n    animation: menu1 300ms ease-in-out 0s forwards;\\n}\\n\\n@keyframes menu1 {\\n    0% {\\n        opacity: 0;\\n        transform: rotateY(90deg) translateX(50px);\\n    }\\n    100% {\\n        opacity: 1;\\n        transform: rotateY(0deg) translateX(0px);\\n    }\\n}\\n\\n@media screen and (max-width: 600px) {\\n    nav > ul {\\n        flex-direction: column;\\n        min-height: 150px;\\n        width: 65px;\\n    }\\n\\n    nav li, .drop-menu li {\\n        width: 100px;\\n        height: 40px;\\n        padding: 12px;\\n        align-items: flex-start;\\n    }\\n\\n    ul.drop-menu {\\n        left: 100%;\\n        top: 0%;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-components/./src/styles/dropDownMenu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/imageSlider.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/imageSlider.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Image Slider */\\nimg {\\n    height: auto;\\n    width: auto;\\n}\\n\\n.imageSliderContainer {\\n    position: relative;\\n    height: 400px;\\n    width: 80vw;\\n    background-color: #777;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    overflow: hidden;\\n}\\n\\n.imageFrameContainer {\\n    width: 100%;\\n    height: 100%;\\n    background-color: aliceblue;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 2px;\\n    flex-wrap: wrap;\\n}\\n\\n.imageFrame {\\n    height: 100%;\\n    width: 100%;\\n    display: none;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.imageFrame.active {\\n    animation: fade 300ms ease-in forwards;\\n}\\n\\n@keyframes fade {\\n    from {\\n        opacity: 0.7;\\n    }\\n    to {\\n        opacity: 1;\\n    }\\n}\\n\\n.imageFrame.active {\\n    display: flex;\\n}\\n\\n.imageFrame > img {\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n\\n.directionContainer {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: flex-end;\\n    padding: 12px;\\n}\\n\\n.roundButtonContainer{\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    gap: 6px;\\n    cursor: pointer;\\n}\\n\\n.roundButton {\\n    border-radius: 50%;\\n    height: 10px;\\n    width: 10px;\\n    background-color: lightgrey;\\n    opacity: .8;\\n    box-shadow: 0px 2px 3px grey;\\n}\\n\\n.roundButton:hover {\\n    opacity: 1;\\n}\\n\\n.roundButton.active {\\n    opacity: 1;\\n}\\n\\n.sliderDirection {\\n    font-size: 32px;\\n    color: lightgrey;\\n    opacity: .8;\\n    align-self: center;\\n    cursor: pointer;\\n}\\n\\n.sliderDirection:hover {\\n    opacity: 1;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-components/./src/styles/imageSlider.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ui-components/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ui-components/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/MobileNav.css":
/*!**********************************!*\
  !*** ./src/styles/MobileNav.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MobileNav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./MobileNav.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/MobileNav.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MobileNav_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MobileNav_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_MobileNav_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_MobileNav_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ui-components/./src/styles/MobileNav.css?");

/***/ }),

/***/ "./src/styles/dropDownMenu.css":
/*!*************************************!*\
  !*** ./src/styles/dropDownMenu.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dropDownMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dropDownMenu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/dropDownMenu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dropDownMenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dropDownMenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_dropDownMenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_dropDownMenu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ui-components/./src/styles/dropDownMenu.css?");

/***/ }),

/***/ "./src/styles/imageSlider.css":
/*!************************************!*\
  !*** ./src/styles/imageSlider.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_imageSlider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./imageSlider.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/imageSlider.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_imageSlider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_imageSlider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_imageSlider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_imageSlider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ui-components/./src/styles/imageSlider.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ui-components/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ImageSlider/imageSlider.js":
/*!****************************************!*\
  !*** ./src/ImageSlider/imageSlider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageSlider)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools */ \"./src/tools.js\");\n\n\nclass ImageSlider {\n  constructor() {\n    this.imageList = [];\n  }\n\n  renderImageSlider() {\n    let div = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\"div\", \"imageSliderContainer\");\n    div.appendChild(this.createImageList());\n    div.appendChild(this.createSliderButtons());\n    return div;\n  }\n\n  createImageList() {\n    let div = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\"div\", \"imageFrameContainer\");\n    for (let image of this.imageList) {\n      div.appendChild(this.createImageFrame(image));\n    }\n    div.firstChild.classList.add(\"active\");\n    return div;\n  }\n\n  createImageFrame(image) {\n    let div = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\"div\", \"imageFrame\");\n    div.appendChild(image);\n    return div;\n  }\n\n  createSliderButtons() {\n    let div = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\"div\", \"directionContainer\");\n    let leftArrow = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\n      \"div\",\n      \"leftArrow sliderDirection\",\n      \"<\"\n    );\n    div.appendChild(leftArrow);\n    let roundButtonContainer = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\n      \"div\",\n      \"roundButtonContainer\"\n    );\n    for (let i = 0; i < this.imageList.length; i++) {\n      let button = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\"span\", \"roundButton\");\n      button.dataset.slideId = i;\n      button.addEventListener(\"click\", imageSliderControls.changeSlide);\n      roundButtonContainer.appendChild(button);\n    }\n    let rightArrow = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\n      \"div\",\n      \"rightArrow sliderDirection\",\n      \">\"\n    );\n    leftArrow.addEventListener(\"click\", imageSliderControls.previousSlide);\n    rightArrow.addEventListener(\"click\", imageSliderControls.nextSlide);\n    div.appendChild(roundButtonContainer);\n    div.appendChild(rightArrow);\n    return div;\n  }\n\n  addImage(img) {\n    this.imageList.push(img);\n  }\n\n  addImageList(list) {\n    this.imageList = list;\n  }\n\n  startAutomatic() {\n    setInterval(imageSliderControls.nextSlide, 5000);\n  }\n\n  stopAutomatic() {\n    clearInterval(this.startAutomatic())\n  }\n}\n\nlet imageSliderControls = (function () {\n  let currentActiveIndex = 0;\n  let slideList = document.getElementsByClassName(\"imageFrame\");\n  let dots = document.getElementsByClassName(\"roundButton\");\n\n  function changeSlide(n) {\n    //To change Slide Based On SlideId Event\n    if (n.target) {\n      n = parseInt(n.target.dataset.slideId) || 0;\n    }\n    // let slides = document.getElementsByClassName(\"imageFrame\");\n    let slideLength = slideList.length;\n    for (let slide of slideList) {\n      removeActive(slide);\n    }\n    for (let dot of dots) {\n      removeActive(dot);\n    }\n    currentActiveIndex = n % slideLength;\n    slideList[currentActiveIndex].classList.add(\"active\");\n    dots[currentActiveIndex].classList.add(\"active\");\n  }\n\n  function nextSlide() {\n    changeSlide(currentActiveIndex + 1);\n  }\n\n  function previousSlide() {\n    changeSlide(currentActiveIndex - 1);\n  }\n\n  function removeActive(item) {\n    try {\n      item.classList.remove(\"active\");\n    } catch (error) {\n      console.error(`REMOVE ACTIVE: ${error}`);\n    }\n  }\n  return {\n    changeSlide: changeSlide,\n    nextSlide: nextSlide,\n    previousSlide: previousSlide,\n  };\n})();\n\n\n//# sourceURL=webpack://ui-components/./src/ImageSlider/imageSlider.js?");

/***/ }),

/***/ "./src/dropDownMenu.js":
/*!*****************************!*\
  !*** ./src/dropDownMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var _eventDelegation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventDelegation.js */ \"./src/eventDelegation.js\");\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.js */ \"./src/tools.js\");\n\n\n\nclass NavBar {\n  constructor() {\n    this.navList = [];\n  }\n\n  createOLForNav(optionalList) {\n    let list = optionalList || this.navList;\n    if (list === []) return;\n    let ul = document.createElement(\"ul\");\n    for (let key of list) {\n      let li = document.createElement(\"li\");\n      if (key.icon) {\n        console.log(key.icon);\n        li.appendChild(_tools_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createIcon(key.icon));\n        li.classList.add(\"iconListItem\");\n      }\n      if (key.link) {\n        let a = document.createElement(\"a\");\n        a.href = key.link;\n        if (key.target) {\n          a.target = key.target;\n        }\n        a.textContent = key.title;\n        a.classList.add(\"menuTitle\");\n        li.appendChild(a);\n      } else {\n        li.appendChild(_tools_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDomElement(\"div\", \"menuTitle\", key.title));\n      }\n      if (key.submenu) {\n        let innerList = this.createNestedListFromObject(key.submenu);\n        innerList.classList.add(\"drop-menu\");\n        if (key.class) {\n          let classes = key.class;\n          for (let userClass of classes) {\n            innerList.classList.add(userClass);\n          }\n        }\n        li.appendChild(innerList);\n      }\n\n      ul.appendChild(li);\n    }\n    return ul;\n  }\n\n  createNestedListFromObject(list) {\n    let ul = document.createElement(\"ul\");\n    for (let key of list) {\n      let li = document.createElement(\"li\");\n      if (key.icon) {\n        console.log(key.icon);\n        li.appendChild(_tools_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createIcon(key.icon));\n        li.classList.add(\"iconListItem\");\n      }\n      if (key.link) {\n        let a = document.createElement(\"a\");\n        a.href = key.link;\n        a.textContent = key.title;\n        if (key.target) {\n          a.target = key.target;\n        }\n        li.appendChild(a);\n      } else {\n        li.textContent = key.title;\n      }\n      if (key.submenu) {\n        let innerList = this.createNestedListFromObject(key.submenu);\n        innerList.classList.add(\"drop-menu\");\n        if (key.class) {\n          let classes = key.class;\n          for (let userClass of classes) {\n            innerList.classList.add(userClass);\n          }\n        }\n        li.appendChild(innerList);\n      }\n\n      ul.appendChild(li);\n    }\n    return ul;\n  }\n\n  renderNav() {\n    let nav = document.createElement(\"nav\");\n    nav.appendChild(this.createOLForNav());\n    nav.addEventListener(\"click\", navControls.dropDownFunction);\n    return nav;\n  }\n\n  createNavItem(title, link) {\n    let obj = { title, link };\n    this.navList.push(obj);\n  }\n\n  useTemplate(template) {\n    this.navList = template;\n  }\n}\n\nlet navControls = (function () {\n  function dropDownFunction(e) {\n    if (\n      (0,_eventDelegation_js__WEBPACK_IMPORTED_MODULE_0__.eventDelegationCheck)(e.target.firstChild.nextSibling, \"ul\", \"drop-menu\")\n    ) {\n      let parent = e.target.closest(\"li\");\n      let nav = e.target.closest(\"nav\");\n      let dropDownContent = parent.querySelector(\".drop-menu\");\n      let currentActive = findCurrentActive(nav);\n      if (currentActive && currentActive !== dropDownContent) {\n        removeActive(currentActive);\n      }\n      if (dropDownContent) {\n        dropDownContent.classList.toggle(\"active\");\n      }\n    }\n  }\n  function findCurrentActive(nav) {\n    let active = nav.querySelector(\".active\");\n    if (active) {\n      return active;\n    }\n  }\n\n  function removeActive(active) {\n    active.classList.remove(\"active\");\n  }\n  return {\n    dropDownFunction: dropDownFunction,\n  };\n})();\n\n\n//# sourceURL=webpack://ui-components/./src/dropDownMenu.js?");

/***/ }),

/***/ "./src/eventDelegation.js":
/*!********************************!*\
  !*** ./src/eventDelegation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventDelegation\": () => (/* binding */ eventDelegation),\n/* harmony export */   \"eventDelegationCheck\": () => (/* binding */ eventDelegationCheck)\n/* harmony export */ });\nfunction eventDelegation(event, nodeType, className) {\n    //attaching eventListeners to the main books div, checks if target is what we want\n    if (event.target && event.target.nodeName === nodeType.toUpperCase()) {\n        if (event.target.classList.contains(className)) {\n            return true;\n        }\n    }\n}\n\nfunction eventDelegationCheck(node, nodeType, className) {\n    //attaching eventListeners to the main books div, checks if target is what we want\n    if (node && node.nodeName === nodeType.toUpperCase()) {\n        if (node.classList.contains(className)) {\n            return true;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://ui-components/./src/eventDelegation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_imageSlider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/imageSlider.css */ \"./src/styles/imageSlider.css\");\n/* harmony import */ var _styles_MobileNav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/MobileNav.css */ \"./src/styles/MobileNav.css\");\n/* harmony import */ var _styles_dropDownMenu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/dropDownMenu.css */ \"./src/styles/dropDownMenu.css\");\n/* harmony import */ var _dropDownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropDownMenu */ \"./src/dropDownMenu.js\");\n/* harmony import */ var _ImageSlider_imageSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageSlider/imageSlider */ \"./src/ImageSlider/imageSlider.js\");\n/* harmony import */ var _mobileNav_mobileNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobileNav/mobileNav */ \"./src/mobileNav/mobileNav.js\");\n/* harmony import */ var _images_highway_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/highway.jpeg */ \"./src/images/highway.jpeg\");\n/* harmony import */ var _images_autumn_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/autumn.jpeg */ \"./src/images/autumn.jpeg\");\n/* harmony import */ var _images_sunbeam_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/sunbeam.jpeg */ \"./src/images/sunbeam.jpeg\");\n/* harmony import */ var _images_tree_road_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/tree-road.jpeg */ \"./src/images/tree-road.jpeg\");\n/* harmony import */ var _images_trees_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/trees.jpeg */ \"./src/images/trees.jpeg\");\n//import CSS files\n\n\n\n\n//Import JS files\n\n\n\n\n//import Images for Slider\n\n\n\n\n\n\n//Nav Bar Template\nlet navTemplate = [\n  {\n    title: \"Haily\",\n    link: \"#\",\n    submenu: [\n      { title: \"Nav 1\", link: \"#\" },\n      { title: \"Nav 2\", link: \"#\" },\n      {\n        title: \"Nav 3\",\n        link: \"#\",\n        submenu: [\n          { title: \"Sub 1\", link: \"#\" },\n          { title: \"Sub 2\", link: \"#\" },\n          { title: \"Sub 3\", link: \"#\" },\n          { title: \"Sub 4\", link: \"#\" },\n        ],\n        class: [\"sub-menu\"],\n      },\n      { title: \"Nav 4\", link: \"#\" },\n    ],\n  },\n  {\n    title: \"Christian\",\n    submenu: [\n      { title: \"Sub 1\", link: \"#\" },\n      { title: \"Sub 2\", link: \"#\" },\n      { title: \"Sub 3\", link: \"#\" },\n      { title: \"Sub 4\", link: \"#\" },\n    ],\n  },\n  {\n    title: \"Sophie\",\n    link: \"https://www.google.com\",\n    target: \"_blank\",\n  },\n  { title: \"Kaden\", link: \"#\", submenu: [{ title: \"Test\" }] },\n];\n\nconst navBar = new _dropDownMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nnavBar.useTemplate(navTemplate);\ndocument.body.appendChild(navBar.renderNav());\n\n//Images for Image Slider\nlet imageSrcList = [_images_autumn_jpeg__WEBPACK_IMPORTED_MODULE_7__, _images_highway_jpeg__WEBPACK_IMPORTED_MODULE_6__, _images_sunbeam_jpeg__WEBPACK_IMPORTED_MODULE_8__, _images_tree_road_jpeg__WEBPACK_IMPORTED_MODULE_9__, _images_trees_jpeg__WEBPACK_IMPORTED_MODULE_10__];\nlet imageList = [];\nfor (let image of imageSrcList) {\n  let container = new Image();\n  container.src = image;\n  imageList.push(container);\n}\n\n// Image Slider\nlet imgSlider = new _ImageSlider_imageSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nimgSlider.addImageList(imageList);\ndocument.body.appendChild(imgSlider.renderImageSlider());\nimgSlider.startAutomatic();\n\n//Nav Bar Template\nlet mobileNavTemplate = [\n  {\n    title: \"Haily\",\n    icon: \"home\",\n    link: \"#\",\n    submenu: [\n      { title: \"Nav 1\", link: \"#\" },\n      { title: \"Nav 2\", link: \"#\" },\n      {\n        title: \"Nav 3\",\n        link: \"#\",\n        submenu: [\n          { title: \"Sub 1\", link: \"#\" },\n          { title: \"Sub 2\", link: \"#\" },\n          { title: \"Sub 3\", link: \"#\" },\n          { title: \"Sub 4\", link: \"#\" },\n        ],\n        class: [\"sub-menu\"],\n      },\n      { title: \"Nav 4\", link: \"#\" },\n    ],\n  },\n  {\n    title: \"Christian\",\n    submenu: [\n      { title: \"Sub 1\", link: \"#\" },\n      { title: \"Sub 2\", link: \"#\" },\n      { title: \"Sub 3\", link: \"#\" },\n      { title: \"Sub 4\", link: \"#\" },\n    ],\n    icon: 'envelope'\n  },\n  {\n    title: \"Sophie\",\n    link: \"https://www.google.com\",\n    target: \"_blank\",\n    icon: \"bell\",\n  },\n  { title: \"Kaden\", link: \"#\", submenu: [{ title: \"Test\" }], icon: \"menu\" },\n];\n\n//Mobile Nav\nlet mobileNav = new _mobileNav_mobileNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nmobileNav.useTemplate(mobileNavTemplate);\ndocument.body.appendChild(mobileNav.renderNav());\n\n\n//# sourceURL=webpack://ui-components/./src/index.js?");

/***/ }),

/***/ "./src/mobileNav/mobileNav.js":
/*!************************************!*\
  !*** ./src/mobileNav/mobileNav.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MobileNav)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools */ \"./src/tools.js\");\n/* harmony import */ var _dropDownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropDownMenu */ \"./src/dropDownMenu.js\");\n\n\n\nclass MobileNav extends _dropDownMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\n  constructor() {\n    super()\n  }\n  renderNav() {\n    let nav = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDomElement(\"nav\", \"mobileNav\");\n    nav.appendChild(this.createOLForNav());\n    return nav;\n  }\n}\n\n\n//# sourceURL=webpack://ui-components/./src/mobileNav/mobileNav.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet Tool = (function () {\n  let iconList = {\n    home: \"fas fa-home\",\n    compass: \"far fa-compass\",\n    bell: \"far fa-bell\",\n    envelope: \"far fa-envelope-open\",\n    menu: \"fas fa-bars\",\n  };\n\n  function createDomElement(domType, userClass, userText) {\n    let cont = document.createElement(domType);\n    if (userClass) {\n      let classArray = userClass.split(\" \");\n      for (let classItem of classArray) {\n        cont.classList.add(classItem);\n      }\n    }\n    if (userText) {\n      cont.textContent = userText;\n    }\n    return cont;\n  }\n\n  function createIcon(iconName, classArray) {\n    let iconClassList = iconList[iconName];\n    let container = createDomElement(\"i\", iconClassList);\n    if (classArray) {\n      for (let classItem of classArray) {\n        container.classList.add(classItem);\n      }\n    }\n    return container;\n  }\n\n  return {\n    createDomElement: createDomElement,\n    createIcon: createIcon,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tool);\n\n\n//# sourceURL=webpack://ui-components/./src/tools.js?");

/***/ }),

/***/ "./src/images/autumn.jpeg":
/*!********************************!*\
  !*** ./src/images/autumn.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f87edc12cd83449460d1.jpeg\";\n\n//# sourceURL=webpack://ui-components/./src/images/autumn.jpeg?");

/***/ }),

/***/ "./src/images/highway.jpeg":
/*!*********************************!*\
  !*** ./src/images/highway.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9603beb74684915f4b1.jpeg\";\n\n//# sourceURL=webpack://ui-components/./src/images/highway.jpeg?");

/***/ }),

/***/ "./src/images/sunbeam.jpeg":
/*!*********************************!*\
  !*** ./src/images/sunbeam.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f1cce08b55398c7935c.jpeg\";\n\n//# sourceURL=webpack://ui-components/./src/images/sunbeam.jpeg?");

/***/ }),

/***/ "./src/images/tree-road.jpeg":
/*!***********************************!*\
  !*** ./src/images/tree-road.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d5b7408d6d5937ede5d.jpeg\";\n\n//# sourceURL=webpack://ui-components/./src/images/tree-road.jpeg?");

/***/ }),

/***/ "./src/images/trees.jpeg":
/*!*******************************!*\
  !*** ./src/images/trees.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c28e6bdd4f2548fda245.jpeg\";\n\n//# sourceURL=webpack://ui-components/./src/images/trees.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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