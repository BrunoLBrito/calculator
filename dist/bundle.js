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

/***/ "./src/lib/Calculator.js":
/*!*******************************!*\
  !*** ./src/lib/Calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Calculator: () => (/* binding */ Calculator)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n  }\n\n  /**\n   * Converte uma string no formato 'hh:mm:ss' para segundos.\n   * @param {string} schedule - O horário no formato 'hh:mm:ss'.\n   * @returns {number} - O total de segundos.\n   */\n  _createClass(Calculator, [{\n    key: \"convertToSeconds\",\n    value: function convertToSeconds(schedule) {\n      return schedule.split(':').reduce(function (acc, time) {\n        return 60 * acc + Number(time);\n      });\n    }\n\n    /**\n     * Converte o total de segundos em uma string no formato 'hh:mm:ss'.\n     * @param {number} secsData - O total de segundos.\n     * @returns {string} - O horário no formato 'hh:mm:ss'.\n     */\n  }, {\n    key: \"secondsToSchedule\",\n    value: function secondsToSchedule(secsData) {\n      var secs = Math.floor(secsData);\n      var hours = Math.floor(secs / 3600);\n      var minutes = Math.floor(secs % 3600 / 60);\n      var seconds = secs % 60;\n      return [hours, minutes, seconds].map(function (unit) {\n        return String(unit).padStart(2, '0');\n      }).join(':');\n    }\n\n    /**\n     * Subtrai dois horários no formato 'hh:mm:ss' e retorna o resultado no mesmo formato.\n     * @param {string} first - O primeiro horário.\n     * @param {string} second - O segundo horário.\n     * @returns {string} - O resultado da subtração no formato 'hh:mm:ss'.\n     */\n  }, {\n    key: \"sub\",\n    value: function sub(first, second) {\n      var firstSeconds = this.convertToSeconds(first);\n      var secondSeconds = this.convertToSeconds(second);\n      var diffSeconds = Math.abs(firstSeconds - secondSeconds);\n      return this.secondsToSchedule(diffSeconds);\n    }\n\n    /**\n     * Soma dois horários no formato 'hh:mm:ss' e retorna o resultado no mesmo formato.\n     * @param {string} first - O primeiro horário.\n     * @param {string} second - O segundo horário.\n     * @returns {string} - O resultado da soma no formato 'hh:mm:ss'.\n     */\n  }, {\n    key: \"sum\",\n    value: function sum(first, second) {\n      var firstSeconds = this.convertToSeconds(first);\n      var secondSeconds = this.convertToSeconds(second);\n      var sumSeconds = Math.abs(firstSeconds + secondSeconds);\n      return this.secondsToSchedule(sumSeconds);\n    }\n  }, {\n    key: \"multi\",\n    value: function multi(time, number) {\n      var firstSeconds = this.convertToSeconds(time);\n      var multi = firstSeconds * number;\n      return this.secondsToSchedule(multi);\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(time, number) {\n      var firstSeconds = this.convertToSeconds(time);\n      var divide = firstSeconds / number;\n      return this.secondsToSchedule(divide);\n    }\n  }]);\n  return Calculator;\n}();\n\n\n//# sourceURL=webpack://calculator/./src/lib/Calculator.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Calculator.js */ \"./src/lib/Calculator.js\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar inputs = document.querySelectorAll('input[type=text]');\nvar selectOperator = document.querySelector('#operator');\nvar operatorText = document.querySelector('#operator-text');\nvar form = document.querySelector('form');\nvar result = document.querySelector('#result');\nfunction maskInputPlusMinus(input) {\n  var value = input.value.replace(/\\D/g, ''); // Remove all non-digits\n  var formattedValue = [];\n  for (var i = 0; i < value.length && i < 6; i++) {\n    if (i === 2 || i === 4) {\n      formattedValue.push(':');\n    }\n    formattedValue.push(value[i]);\n  }\n  input.value = formattedValue.join('');\n}\nfunction maskInputMultiplyDivide(input) {\n  var value = input.value.replace(/\\D/g, ''); // Remove all non-digits\n  var formattedValue = [];\n  for (var i = 0; i < value.length && i < 5; i++) {\n    formattedValue.push(value[i]);\n  }\n  input.value = formattedValue.join('');\n}\ninputs.forEach(function (input, index) {\n  input.addEventListener('input', function () {\n    var operator = selectOperator.options[selectOperator.selectedIndex].value;\n    if (index === 1 && (operator === '*' || operator === '/')) {\n      maskInputMultiplyDivide(input);\n    } else {\n      maskInputPlusMinus(input);\n    }\n  });\n});\ninputs.forEach(function (input) {\n  input.addEventListener('focus', function () {\n    input.setAttribute('type', 'tel');\n  });\n  input.addEventListener('blur', function () {\n    input.setAttribute('type', 'text');\n  });\n});\nselectOperator.onchange = function () {\n  var operator = selectOperator.options[selectOperator.selectedIndex].value;\n  var _document$querySelect = document.querySelectorAll('input'),\n    _document$querySelect2 = _slicedToArray(_document$querySelect, 2),\n    first = _document$querySelect2[0],\n    last = _document$querySelect2[1];\n  last.value = '';\n  first.value = '';\n  result.innerText = '00:00:00';\n  switch (operator) {\n    case '+':\n      operatorText.innerText = '+';\n      last.placeholder = '00:00:00';\n      break;\n    case '-':\n      operatorText.innerText = '-';\n      last.placeholder = '00:00:00';\n      break;\n    case '*':\n      operatorText.innerText = 'x';\n      last.placeholder = 'valor';\n      break;\n    case '/':\n      operatorText.innerText = '÷';\n      last.placeholder = 'valor';\n      break;\n  }\n};\nvar calculator = new _lib_Calculator_js__WEBPACK_IMPORTED_MODULE_0__.Calculator();\nform.onsubmit = function (e) {\n  e.preventDefault();\n  var value = '';\n  var operator = selectOperator.options[selectOperator.selectedIndex].value;\n  var _document$querySelect3 = document.querySelectorAll('input'),\n    _document$querySelect4 = _slicedToArray(_document$querySelect3, 2),\n    first = _document$querySelect4[0],\n    last = _document$querySelect4[1];\n  switch (operator) {\n    case '+':\n      value = calculator.sum(first.value, last.value);\n      break;\n    case '-':\n      value = calculator.sub(first.value, last.value);\n      break;\n    case '*':\n      value = calculator.multi(first.value, last.value);\n      break;\n    case '/':\n      value = calculator.divide(first.value, last.value);\n      break;\n  }\n  result.innerHTML = value;\n};\n\n//# sourceURL=webpack://calculator/./src/main.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://calculator/./src/css/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;