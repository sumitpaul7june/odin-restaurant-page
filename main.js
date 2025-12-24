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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css"
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css ***!
  \***********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-page: #faf7f2;\n  --bg-card: #ffffff;\n\n  --text-primary: #000000;\n  --text-secondary: #374151;\n  --text-muted: #4b5563;\n\n  --accent-primary: #dc2626;\n  --accent-button: rgba(124, 44, 18, 0.55);\n\n  --radius-sm: 4px;\n  --radius-lg: 18px;\n\n  --shadow-card: 0 20px 40px rgba(0, 0, 0, 0.06);\n\n  --font-ui: \"Raleway\", sans-serif;\n}\n\n.contact \n{\n    background-color: var(--bg-page);\n    width: 100%;\n}\n  \n\n.contact-container {\n    color: var(--text-primary);\n    font-family: var(--font-ui);\n  \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 3rem;\n  \n    padding: 4rem;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n  \n\n.contact-section {\n  display: grid;\n  gap: 0.5rem;\n  padding: 3rem;\n  background-color: var(--bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-card);\n}\n\n.contact-section h1 {\n  font-size: 2.6rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\n.contact-section h1::after {\n  content: \"\";\n  display: block;\n  width: 120px;\n  height: 4px;\n  background: var(--accent-primary);\n  margin-top: 10px;\n  border-radius: 2px;\n}\n\n.contact-description {\n  font-size: 1.1rem;\n  line-height: 1.7;\n  color: var(--text-muted);\n  max-width: 42ch;\n}\n\n.info-block {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: var(--text-secondary);\n}\n\n.info-item img {\n  width: 18px;\n  height: 18px;\n  margin-top: 3px;\n  opacity: 0.6;\n}\n\n.opening-hour-block {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.opening-hour-block h2 {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n\n.opening-hour-block ul {\n  padding: 0;\n}\n\n.opening-hour-block li {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n}\n\nform {\n  display: grid;\n  gap: 1.2rem;\n  padding: 3rem;\n  background-color: var(--bg-card);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-card);\n}\n\n.fieldset {\n  display: grid;\n  gap: 0.4rem;\n}\n\n.fieldset label {\n  font-size: 0.75rem;\n  letter-spacing: 0.12em;\n  color: var(--text-primary);\n}\n\n.fieldset input,\n.fieldset textarea {\n  padding: 0.75rem;\n  font-size: 1rem;\n  width: 100%;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n\ninput[type=\"date\"] \n{\n    font-family: \"Raleway\", sans-serif;\n    font-weight: 400;\n    color: #111827;\n}\n  \n.fieldset input:focus,\n.fieldset textarea:focus {\n  outline: none;\n  border-color: #111827;\n  box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.12);\n}\n\ntextarea {\n  resize: none;\n  min-height: 120px;\n}\n\nform button {\n  margin-top: 2rem;\n  padding: 1rem;\n  width: 100%;\n  background-color: var(--accent-button);\n  color: #ffffff;\n  font-family: var(--font-ui);\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\nform button:hover {\n  background-color: #000000;\n}\n\nform button:active {\n  transform: scale(0.98);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact/contact.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css"
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/home.css ***!
  \*****************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-page: #faf7f2;\n  --bg-header: #ffffff;\n\n  --color-primary: #7c2d12;\n  --color-accent: #dc2626;\n  --color-heading: #111827;\n  --color-text: #374151;\n\n  --font-ui: \"Raleway\", sans-serif;\n  --font-body: \"Inter\", sans-serif;\n  --font-heading: \"Playfair Display\", serif;\n\n  --shadow-header: 0 0 3px 1px gray;\n\n  --radius-sm: 2px;\n}\n\nbody {\n  min-height: 100vh;\n  min-width: 100vw;\n  display: grid;\n  grid-template-rows: max-content 1fr;\n}\n\nheader {\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  background: var(--bg-header);\n  box-shadow: var(--shadow-header);\n}\n\nheader h2 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-left: 20px;\n  font-family: var(--font-ui);\n  font-weight: 800;\n  color: var(--color-primary);\n}\n\nnav {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\nnav button {\n  background: none;\n  cursor: pointer;\n  border: none;\n  height: 2rem;\n  padding: 0 0.75rem;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n  font-family: var(--font-ui);\n  font-weight: 600;\n}\n\nnav button:hover {\n  color: var(--color-accent);\n  border-bottom: 2px solid var(--color-accent);\n}\n\n.home {\n  padding: 60px 20px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background: var(--bg-page);\n}\n\n.home-container {\n  width: 100%;\n  max-width: 1100px;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 60px;\n  align-items: center;\n  padding-top: 3rem;\n}\n\n.hero-text {\n  display: grid;\n  gap: 1.5rem;\n  max-width: 520px;\n  font-family: var(--font-body);\n}\n\n.hero-text h2 {\n  font-family: var(--font-heading);\n  font-size: 3.4rem;\n  font-weight: 700;\n  line-height: 1.15;\n  color: var(--color-heading);\n}\n\n.hero-text h2::after {\n  content: \"\";\n  display: block;\n  width: 80px;\n  height: 4px;\n  background: var(--color-accent);\n  margin-top: 14px;\n  border-radius: var(--radius-sm);\n}\n\n.hero-text p {\n  font-size: 1.1rem;\n  line-height: 1.75;\n  color: var(--color-text);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home/home.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css"
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css ***!
  \*****************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-page: #faf7f2;\n  --bg-card: #ffffff;\n\n  --color-primary: #7c2d12;\n  --color-accent: #dc2626;\n  --color-text: #57534e;\n  --color-price: #166534;\n\n  --shadow-card: 0 8px 25px rgba(0, 0, 0, 0.08);\n  --shadow-card-hover: 0 14px 40px rgba(0, 0, 0, 0.12);\n\n  --radius-sm: 10px;\n  --radius-md: 14px;\n\n  --font-heading: \"Playfair Display\", serif;\n  --font-body: \"Inter\", sans-serif;\n}\n\n.menu {\n  width: 100%;\n  padding: 60px 20px;\n  display: flex;\n  justify-content: center;\n  background: var(--bg-page);\n}\n\n.menu-container {\n  width: 100%;\n  max-width: 1100px;\n}\n\n.menu-title {\n  font-family: var(--font-heading);\n  font-size: 2.5rem;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 50px;\n  letter-spacing: 1px;\n  color: var(--color-primary);\n}\n\n.menu-title::after {\n  content: \"\";\n  display: block;\n  width: 80px;\n  height: 4px;\n  background: var(--color-accent);\n  margin: 14px auto 0;\n  border-radius: 2px;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 30px;\n  justify-content: center;\n}\n\n.card {\n  background: var(--bg-card);\n  width: 300px;\n  padding: 1.4rem;\n  font-family: var(--font-body);\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  gap: 0.8rem;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-card);\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n\n.card:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-card-hover);\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n}\n\n.card h3 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--color-primary);\n  text-align: center;\n}\n\n.card .item-description {\n  padding: 0.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.card p {\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: var(--color-text);\n  text-align: center;\n}\n\n.card p:last-child {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--color-price);\n  text-align: center;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu/menu.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n   \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/reset.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact/contact.css"
/*!*********************************!*\
  !*** ./src/contact/contact.css ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ \"./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact/contact.css?\n}");

/***/ },

/***/ "./src/contact/contact.js"
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/location.svg */ \"./src/images/location.svg\");\n/* harmony import */ var _images_mail_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/mail.svg */ \"./src/images/mail.svg\");\n/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/phone.svg */ \"./src/images/phone.svg\");\n\n\n\n\nconst contactPage = function () {\n    const content = document.querySelector('#content');\n    const wrapper = document.createElement('div');\n    const contactContainer = document.createElement('div');\n    const contactSection = document.createElement('div');\n    const form = document.createElement('form');\n   \n   \n    contactContainer.classList.add(\"contact-container\");\n    wrapper.classList.add(\"contact\");\n\n\n    contactContainer.append(contactSection, form);\n    wrapper.append(contactContainer);\n\n\n    contactSection.classList.add(\"contact-section\");\n    contactSection.innerHTML = `\n  <h1>Contact Us</h1>\n  <p class=\"contact-description\">\n    We’d love to hear from you.\n    Visit us for a comforting bowl of ramen, or reach out using the details below.\n  </p>\n\n  <div class=\"info-block\">\n    <div class=\"info-item\">\n      <img src=\"${_images_location_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Location icon\">\n      <p>\n      Mitsu’s Ramen, Sakura Heights 1F, Asakusa 1-16-8, Taito City, Tokyo 111-0032, Japan.\n      </p>\n    </div>\n\n    <div class=\"info-item\">\n      <img src=\"${_images_mail_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Phone icon\">\n      <p>+81 3-6455-8721</p>\n    </div>\n\n    <div class=\"info-item\">\n      <img src=\"${_images_phone_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Email icon\">\n      <p>hello@mitsuramen.com</p>\n    </div>\n  </div>\n\n  <div class=\"opening-hour-block\">\n    <h2>Opening Hours</h2>\n    <ul>\n      <li>\n        <span>Monday – Sunday</span>\n        <span>12:00 PM – 10:30 PM</span>\n      </li>\n    </ul>\n  </div>\n`;\n\n\n   \n\n\n\n   \n    function createFieldset(id, type, labelText, textarea = false) {\n        const div = document.createElement('div');\n        const label = document.createElement('label');\n\n        div.setAttribute(\"class\", \"fieldset\")\n        label.setAttribute(\"for\", id);\n        label.textContent = labelText;\n\n        if (textarea) {\n            const textarea = document.createElement('textarea');\n            textarea.setAttribute(\"id\", id);\n            textarea.setAttribute(\"rows\", \"4\");\n            textarea.setAttribute(\"cols\", \"5\");\n            div.appendChild(label);\n            div.appendChild(textarea);\n        }\n        else {\n            const input = document.createElement('input');\n            input.setAttribute(\"id\", id);\n            input.setAttribute(\"type\", type);\n            div.appendChild(label);\n            div.appendChild(input);\n        }\n\n        return div;\n\n\n    }\n\n\n    const nameGroup = createFieldset(\"name\", \"text\", \"NAME\");\n    const emailGroup = createFieldset(\"email\", \"email\", \"EMAIL\");\n    const phoneGroup = createFieldset(\"phone\", \"tel\", \"PHONE\");\n    const dateGroup = createFieldset(\"date\", \"date\", \"DATE\");\n    const messageGroup = createFieldset(\"comments\", \"comments\", \"MESSAGE\", true);\n\n\n    const submitButton = document.createElement('button');\n    submitButton.setAttribute(\"type\", \"submit\");\n    submitButton.textContent = \"SEND MESSAGE\";\n\n\n    form.append(nameGroup, emailGroup, phoneGroup, dateGroup, messageGroup, submitButton);\n    content.append(wrapper);\n\n    form.addEventListener(\"click\", (e) =>\n    {\n        e.preventDefault();\n    })\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact/contact.js?\n}");

/***/ },

/***/ "./src/home/home.css"
/*!***************************!*\
  !*** ./src/home/home.css ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/home/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home/home.css?\n}");

/***/ },

/***/ "./src/home/home.js"
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_delicious_ramen_bowl_with_soft_boiled_eggs_spring_onions_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delicious-ramen-bowl-with-soft-boiled-eggs-spring-onions.png */ \"./src/images/delicious-ramen-bowl-with-soft-boiled-eggs-spring-onions.png\");\n\n\n\nconst initialLoadPage = function()\n{\n    const content = document.querySelector('#content');\n\n    const wrapper = document.createElement('div');\n    wrapper.classList.add(\"home\");\n\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add(\"home-container\");\n\n    \n\n\n    const heroText = document.createElement('div');\n    const h2 = document.createElement(\"h2\");\n    const p = document.createElement(\"p\");\n    const img = document.createElement(\"img\");\n\n    h2.textContent = `Welcome to Mitsu's Ramen`;\n    p.textContent = `At Mitsu’s Ramen, we serve deeply comforting bowls inspired by traditional Japanese ramen.\n                    Slow-simmered broths, hand-picked ingredients, and perfectly cooked noodles come together to create flavors that feel both authentic and unforgettable.\n                    Whether you’re here for a quiet meal or a warm bowl after a long day, Mitsu’s Ramen is made to be savored — one slurp at a time.`\n    img.src = _images_delicious_ramen_bowl_with_soft_boiled_eggs_spring_onions_png__WEBPACK_IMPORTED_MODULE_0__;\n    img.setAttribute(\"width\", \"400\");\n    img.setAttribute(\"height\", \"400\");\n    heroText.setAttribute(\"class\", \"hero-text\");\n    \n    heroText.append(h2, p);\n\n    homeContainer.append(heroText, img);\n    wrapper.append(homeContainer);\n    content.append(wrapper);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoadPage);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home/home.js?\n}");

/***/ },

/***/ "./src/images/delicious-ramen-bowl-with-soft-boiled-eggs-spring-onions.png"
/*!*********************************************************************************!*\
  !*** ./src/images/delicious-ramen-bowl-with-soft-boiled-eggs-spring-onions.png ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"17b693e4a7290c3dcc55.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/delicious-ramen-bowl-with-soft-boiled-eggs-spring-onions.png?\n}");

/***/ },

/***/ "./src/images/location.svg"
/*!*********************************!*\
  !*** ./src/images/location.svg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"073d8f856bc7ece57779.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/location.svg?\n}");

/***/ },

/***/ "./src/images/mail.svg"
/*!*****************************!*\
  !*** ./src/images/mail.svg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3d8038e4f62f82bc1a5f.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/mail.svg?\n}");

/***/ },

/***/ "./src/images/miso_ramen.jpg"
/*!***********************************!*\
  !*** ./src/images/miso_ramen.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a99ccfbccac1aba4f2e6.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/miso_ramen.jpg?\n}");

/***/ },

/***/ "./src/images/phone.svg"
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"fff2840d54b297fd0137.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/phone.svg?\n}");

/***/ },

/***/ "./src/images/salt_ramen.jpg"
/*!***********************************!*\
  !*** ./src/images/salt_ramen.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"47966cb41552a02c3206.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/salt_ramen.jpg?\n}");

/***/ },

/***/ "./src/images/shoyu_ramen.jpg"
/*!************************************!*\
  !*** ./src/images/shoyu_ramen.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a0803ef5d1a9432f5bd6.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/shoyu_ramen.jpg?\n}");

/***/ },

/***/ "./src/images/tonkotsu_ramen.jpg"
/*!***************************************!*\
  !*** ./src/images/tonkotsu_ramen.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ddaac9b3a56c8963a4df.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/tonkotsu_ramen.jpg?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.js */ \"./src/home/home.js\");\n/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.js */ \"./src/menu/menu.js\");\n/* harmony import */ var _contact_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.js */ \"./src/contact/contact.js\");\n/* harmony import */ var _home_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.css */ \"./src/home/home.css\");\n/* harmony import */ var _menu_menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.css */ \"./src/menu/menu.css\");\n/* harmony import */ var _contact_contact_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.css */ \"./src/contact/contact.css\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_home_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst nav = document.querySelector('nav');\nconst content = document.querySelector('#content');\n\nnav.addEventListener(\"click\", (e) =>\n{\n    \n    if(e.target.id === \"home-btn\")\n    {\n        content.innerHTML = '';\n        (0,_home_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n    else if(e.target.id === \"menu-btn\")\n    {\n        content.innerHTML = '';\n        (0,_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    else if(e.target.id === \"contact-btn\")\n    {\n        content.innerHTML = '';\n        (0,_contact_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        \n        \n    }\n    else\n    {\n        return;\n    }\n})\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu/menu.css"
/*!***************************!*\
  !*** ./src/menu/menu.css ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu/menu.css?\n}");

/***/ },

/***/ "./src/menu/menu.js"
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/shoyu_ramen.jpg */ \"./src/images/shoyu_ramen.jpg\");\n/* harmony import */ var _images_miso_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/miso_ramen.jpg */ \"./src/images/miso_ramen.jpg\");\n/* harmony import */ var _images_tonkotsu_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tonkotsu_ramen.jpg */ \"./src/images/tonkotsu_ramen.jpg\");\n/* harmony import */ var _images_salt_ramen_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/salt_ramen.jpg */ \"./src/images/salt_ramen.jpg\");\n\n\n\n\n\nconst Menu = function () {\n\n    const content = document.querySelector('#content');\n\n    /* =========================\n       PAGE STRUCTURE\n       ========================= */\n\n    const wrapper = document.createElement('div');\n    wrapper.classList.add(\"menu\");\n\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add(\"menu-container\");\n\n    const menuTitle = document.createElement('h1');\n    menuTitle.classList.add(\"menu-title\");\n    menuTitle.textContent = \"Our Ramen Menu\";\n\n    const menuGrid = document.createElement('div');\n    menuGrid.classList.add(\"menu-grid\");\n\n    // assemble static layout ONCE\n    menuContainer.append(menuTitle, menuGrid);\n    wrapper.append(menuContainer);\n    content.append(wrapper);\n\n    /* =========================\n       DATA\n       ========================= */\n\n    const menuItems = [];\n\n    function addItem(img, name, desc, price) {\n        menuItems.push({ img, name, desc, price });\n    }\n\n    /* =========================\n       MENU ITEMS\n       ========================= */\n\n    addItem(\n        _images_shoyu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__,\n        \"Shoyu Ramen\",\n        \"Soy-based broth with chicken stock, chashu pork, soft-boiled egg, nori, and scallions. Classic, light, deeply flavorful.\",\n        13.99\n    );\n\n    addItem(\n        _images_miso_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__,\n        \"Miso Ramen\",\n        \"Rich miso-based broth with chicken stock, corn, butter, and soft-boiled egg. Deep, savory, and comforting.\",\n        14.99\n    );\n\n    addItem(\n        _images_tonkotsu_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__,\n        \"Tonkotsu Ramen\",\n        \"Creamy pork bone broth simmered for hours, served with tender chashu pork. Bold, rich, and indulgent.\",\n        15.99\n    );\n\n    addItem(\n        _images_salt_ramen_jpg__WEBPACK_IMPORTED_MODULE_3__,\n        \"Salt Ramen\",\n        \"Light salt-seasoned broth with chicken and seafood notes. Clean, delicate, and balanced.\",\n        13.49\n    );\n\n    /* =========================\n       RENDER\n       ========================= */\n\n    function renderItems() {\n        menuItems.forEach(item => {\n            const card = document.createElement('div');\n            card.classList.add(\"card\");\n\n            const img = document.createElement('img');\n            img.src = item.img;\n            img.alt = item.name;\n\n            const title = document.createElement('h3');\n            title.textContent = item.name;\n\n            const desc = document.createElement('p');\n            desc.classList.add(\"item-description\");\n            desc.textContent = item.desc;\n\n            const price = document.createElement('p');\n            price.textContent = `$${item.price}`;\n\n            card.append(img, title, desc, price);\n            menuGrid.append(card);\n        });\n    }\n\n    renderItems();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu/menu.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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