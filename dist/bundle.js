/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/lib/Calculator.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  /**
   * Converte uma string no formato 'hh:mm:ss' para segundos.
   * @param {string} schedule - O horário no formato 'hh:mm:ss'.
   * @returns {number} - O total de segundos.
   */
  _createClass(Calculator, [{
    key: "convertToSeconds",
    value: function convertToSeconds(schedule) {
      return schedule.split(':').reduce(function (acc, time) {
        return 60 * acc + Number(time);
      });
    }

    /**
     * Converte o total de segundos em uma string no formato 'hh:mm:ss'.
     * @param {number} secsData - O total de segundos.
     * @returns {string} - O horário no formato 'hh:mm:ss'.
     */
  }, {
    key: "secondsToSchedule",
    value: function secondsToSchedule(secsData) {
      var secs = Math.floor(secsData);
      var hours = Math.floor(secs / 3600);
      var minutes = Math.floor(secs % 3600 / 60);
      var seconds = secs % 60;
      return [hours, minutes, seconds].map(function (unit) {
        return String(unit).padStart(2, '0');
      }).join(':');
    }

    /**
     * Subtrai dois horários no formato 'hh:mm:ss' e retorna o resultado no mesmo formato.
     * @param {string} first - O primeiro horário.
     * @param {string} second - O segundo horário.
     * @returns {string} - O resultado da subtração no formato 'hh:mm:ss'.
     */
  }, {
    key: "sub",
    value: function sub(first, second) {
      var firstSeconds = this.convertToSeconds(first);
      var secondSeconds = this.convertToSeconds(second);
      var diffSeconds = Math.abs(firstSeconds - secondSeconds);
      return this.secondsToSchedule(diffSeconds);
    }

    /**
     * Soma dois horários no formato 'hh:mm:ss' e retorna o resultado no mesmo formato.
     * @param {string} first - O primeiro horário.
     * @param {string} second - O segundo horário.
     * @returns {string} - O resultado da soma no formato 'hh:mm:ss'.
     */
  }, {
    key: "sum",
    value: function sum(first, second) {
      var firstSeconds = this.convertToSeconds(first);
      var secondSeconds = this.convertToSeconds(second);
      var sumSeconds = Math.abs(firstSeconds + secondSeconds);
      return this.secondsToSchedule(sumSeconds);
    }
  }, {
    key: "multi",
    value: function multi(time, number) {
      var firstSeconds = this.convertToSeconds(time);
      var multi = firstSeconds * number;
      return this.secondsToSchedule(multi);
    }
  }, {
    key: "divide",
    value: function divide(time, number) {
      var firstSeconds = this.convertToSeconds(time);
      var divide = firstSeconds / number;
      return this.secondsToSchedule(divide);
    }
  }]);
  return Calculator;
}();

;// CONCATENATED MODULE: ./src/main.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var inputs = document.querySelectorAll('input[type=text]');
var selectOperator = document.querySelector('#operator');
var operatorText = document.querySelector('#operator-text');
var main_form = document.querySelector('form');
var result = document.querySelector('#result');
function maskInputPlusMinus(input) {
  var value = input.value.replace(/\D/g, ''); // Remove all non-digits
  var formattedValue = [];
  for (var i = 0; i < value.length && i < 6; i++) {
    if (i === 2 || i === 4) {
      formattedValue.push(':');
    }
    formattedValue.push(value[i]);
  }
  input.value = formattedValue.join('');
}
function maskInputMultiplyDivide(input) {
  var value = input.value.replace(/\D/g, ''); // Remove all non-digits
  var formattedValue = [];
  for (var i = 0; i < value.length && i < 5; i++) {
    formattedValue.push(value[i]);
  }
  input.value = formattedValue.join('');
}
inputs.forEach(function (input, index) {
  input.addEventListener('input', function () {
    var operator = selectOperator.options[selectOperator.selectedIndex].value;
    if (index === 1 && (operator === '*' || operator === '/')) {
      maskInputMultiplyDivide(input);
    } else {
      maskInputPlusMinus(input);
    }
  });
});
inputs.forEach(function (input) {
  input.addEventListener('focus', function () {
    input.setAttribute('type', 'tel');
  });
  input.addEventListener('blur', function () {
    input.setAttribute('type', 'text');
  });
});
selectOperator.onchange = function () {
  var operator = selectOperator.options[selectOperator.selectedIndex].value;
  var _document$querySelect = document.querySelectorAll('input'),
    _document$querySelect2 = _slicedToArray(_document$querySelect, 2),
    first = _document$querySelect2[0],
    last = _document$querySelect2[1];
  last.value = '';
  first.value = '';
  result.innerText = '00:00:00';
  switch (operator) {
    case '+':
      operatorText.innerText = '+';
      last.placeholder = '00:00:00';
      break;
    case '-':
      operatorText.innerText = '-';
      last.placeholder = '00:00:00';
      break;
    case '*':
      operatorText.innerText = 'x';
      last.placeholder = 'valor';
      break;
    case '/':
      operatorText.innerText = '÷';
      last.placeholder = 'valor';
      break;
  }
};
var calculator = new Calculator();
main_form.onsubmit = function (e) {
  e.preventDefault();
  var value = '';
  var operator = selectOperator.options[selectOperator.selectedIndex].value;
  var _document$querySelect3 = document.querySelectorAll('input'),
    _document$querySelect4 = _slicedToArray(_document$querySelect3, 2),
    first = _document$querySelect4[0],
    last = _document$querySelect4[1];
  switch (operator) {
    case '+':
      value = calculator.sum(first.value, last.value);
      break;
    case '-':
      value = calculator.sub(first.value, last.value);
      break;
    case '*':
      value = calculator.multi(first.value, last.value);
      break;
    case '/':
      value = calculator.divide(first.value, last.value);
      break;
  }
  result.innerHTML = value;
};
/******/ })()
;