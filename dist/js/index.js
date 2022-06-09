/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/Gradient.js":
/*!*********************************!*\
  !*** ./src/scripts/Gradient.js ***!
  \*********************************/
/*! exports provided: Gradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return Gradient; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
*   Stripe WebGl Gradient Animation
*   All Credits to Stripe.com
*   ScrollObserver functionality to disable animation when not scrolled into view has been disabled and 
*   commented out for now.
*   https://kevinhufnagl.com
*/
//Converting colors to proper format
function normalizeColor(hexCode) {
  return [(hexCode >> 16 & 255) / 255, (hexCode >> 8 & 255) / 255, (255 & hexCode) / 255];
}

["SCREEN", "LINEAR_LIGHT"].reduce(function (hexCode, t, n) {
  return Object.assign(hexCode, _defineProperty({}, t, n));
}, {}); //Essential functionality of WebGl
//t = width
//n = height

var MiniGl = /*#__PURE__*/function () {
  function MiniGl(canvas, width, height) {
    var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, MiniGl);

    var _miniGl = this,
        debug_output = -1 !== document.location.search.toLowerCase().indexOf("debug=webgl");

    _miniGl.canvas = canvas, _miniGl.gl = _miniGl.canvas.getContext("webgl", {
      antialias: true
    }), _miniGl.meshes = [];
    var context = _miniGl.gl;
    width && height && this.setSize(width, height), _miniGl.lastDebugMsg, _miniGl.debug = debug && debug_output ? function (e) {
      var _console;

      var t = new Date();
      t - _miniGl.lastDebugMsg > 1e3 && console.log("---"), (_console = console).log.apply(_console, [t.toLocaleTimeString() + Array(Math.max(0, 32 - e.length)).join(" ") + e + ": "].concat(_toConsumableArray(Array.from(arguments).slice(1)))), _miniGl.lastDebugMsg = t;
    } : function () {}, Object.defineProperties(_miniGl, {
      Material: {
        enumerable: false,
        value: /*#__PURE__*/function () {
          function value(vertexShaders, fragments) {
            var uniforms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            _classCallCheck(this, value);

            var material = this;

            function getShaderByType(type, source) {
              var shader = context.createShader(type);
              return context.shaderSource(shader, source), context.compileShader(shader), context.getShaderParameter(shader, context.COMPILE_STATUS) || console.error(context.getShaderInfoLog(shader)), _miniGl.debug("Material.compileShaderSource", {
                source: source
              }), shader;
            }

            function getUniformVariableDeclarations(uniforms, type) {
              return Object.entries(uniforms).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    uniform = _ref2[0],
                    value = _ref2[1];

                return value.getDeclaration(uniform, type);
              }).join("\n");
            }

            material.uniforms = uniforms, material.uniformInstances = [];
            var prefix = "\n              precision highp float;\n            ";
            material.vertexSource = "\n              ".concat(prefix, "\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ").concat(getUniformVariableDeclarations(_miniGl.commonUniforms, "vertex"), "\n              ").concat(getUniformVariableDeclarations(uniforms, "vertex"), "\n              ").concat(vertexShaders, "\n            "), material.Source = "\n              ".concat(prefix, "\n              ").concat(getUniformVariableDeclarations(_miniGl.commonUniforms, "fragment"), "\n              ").concat(getUniformVariableDeclarations(uniforms, "fragment"), "\n              ").concat(fragments, "\n            "), material.vertexShader = getShaderByType(context.VERTEX_SHADER, material.vertexSource), material.fragmentShader = getShaderByType(context.FRAGMENT_SHADER, material.Source), material.program = context.createProgram(), context.attachShader(material.program, material.vertexShader), context.attachShader(material.program, material.fragmentShader), context.linkProgram(material.program), context.getProgramParameter(material.program, context.LINK_STATUS) || console.error(context.getProgramInfoLog(material.program)), context.useProgram(material.program), material.attachUniforms(void 0, _miniGl.commonUniforms), material.attachUniforms(void 0, material.uniforms);
          } //t = uniform


          _createClass(value, [{
            key: "attachUniforms",
            value: function attachUniforms(name, uniforms) {
              //n  = material
              var material = this;
              void 0 === name ? Object.entries(uniforms).forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    name = _ref4[0],
                    uniform = _ref4[1];

                material.attachUniforms(name, uniform);
              }) : "array" == uniforms.type ? uniforms.value.forEach(function (uniform, i) {
                return material.attachUniforms("".concat(name, "[").concat(i, "]"), uniform);
              }) : "struct" == uniforms.type ? Object.entries(uniforms.value).forEach(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                    uniform = _ref6[0],
                    i = _ref6[1];

                return material.attachUniforms("".concat(name, ".").concat(uniform), i);
              }) : (_miniGl.debug("Material.attachUniforms", {
                name: name,
                uniform: uniforms
              }), material.uniformInstances.push({
                uniform: uniforms,
                location: context.getUniformLocation(material.program, name)
              }));
            }
          }]);

          return value;
        }()
      },
      Uniform: {
        enumerable: !1,
        value: /*#__PURE__*/function () {
          function value(e) {
            _classCallCheck(this, value);

            this.type = "float", Object.assign(this, e);
            this.typeFn = {
              "float": "1f",
              "int": "1i",
              vec2: "2fv",
              vec3: "3fv",
              vec4: "4fv",
              mat4: "Matrix4fv"
            }[this.type] || "1f", this.update();
          }

          _createClass(value, [{
            key: "update",
            value: function update(_value) {
              void 0 !== this.value && context["uniform".concat(this.typeFn)](_value, 0 === this.typeFn.indexOf("Matrix") ? this.transpose : this.value, 0 === this.typeFn.indexOf("Matrix") ? this.value : null);
            } //e - name
            //t - type
            //n - length

          }, {
            key: "getDeclaration",
            value: function getDeclaration(name, type, length) {
              var uniform = this;

              if (uniform.excludeFrom !== type) {
                if ("array" === uniform.type) return uniform.value[0].getDeclaration(name, type, uniform.value.length) + "\nconst int ".concat(name, "_length = ").concat(uniform.value.length, ";");

                if ("struct" === uniform.type) {
                  var name_no_prefix = name.replace("u_", "");
                  return name_no_prefix = name_no_prefix.charAt(0).toUpperCase() + name_no_prefix.slice(1), "uniform struct ".concat(name_no_prefix, " \n                                  {\n") + Object.entries(uniform.value).map(function (_ref7) {
                    var _ref8 = _slicedToArray(_ref7, 2),
                        name = _ref8[0],
                        uniform = _ref8[1];

                    return uniform.getDeclaration(name, type).replace(/^uniform/, "");
                  }).join("") + "\n} ".concat(name).concat(length > 0 ? "[".concat(length, "]") : "", ";");
                }

                return "uniform ".concat(uniform.type, " ").concat(name).concat(length > 0 ? "[".concat(length, "]") : "", ";");
              }
            }
          }]);

          return value;
        }()
      },
      PlaneGeometry: {
        enumerable: !1,
        value: /*#__PURE__*/function () {
          function value(width, height, n, i, orientation) {
            _classCallCheck(this, value);

            context.createBuffer(), this.attributes = {
              position: new _miniGl.Attribute({
                target: context.ARRAY_BUFFER,
                size: 3
              }),
              uv: new _miniGl.Attribute({
                target: context.ARRAY_BUFFER,
                size: 2
              }),
              uvNorm: new _miniGl.Attribute({
                target: context.ARRAY_BUFFER,
                size: 2
              }),
              index: new _miniGl.Attribute({
                target: context.ELEMENT_ARRAY_BUFFER,
                size: 3,
                type: context.UNSIGNED_SHORT
              })
            }, this.setTopology(n, i), this.setSize(width, height, orientation);
          }

          _createClass(value, [{
            key: "setTopology",
            value: function setTopology() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              var n = this;
              n.xSegCount = e, n.ySegCount = t, n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1), n.quadCount = n.xSegCount * n.ySegCount * 2, n.attributes.uv.values = new Float32Array(2 * n.vertexCount), n.attributes.uvNorm.values = new Float32Array(2 * n.vertexCount), n.attributes.index.values = new Uint16Array(3 * n.quadCount);

              for (var _e2 = 0; _e2 <= n.ySegCount; _e2++) {
                for (var _t = 0; _t <= n.xSegCount; _t++) {
                  var i = _e2 * (n.xSegCount + 1) + _t;

                  if (n.attributes.uv.values[2 * i] = _t / n.xSegCount, n.attributes.uv.values[2 * i + 1] = 1 - _e2 / n.ySegCount, n.attributes.uvNorm.values[2 * i] = _t / n.xSegCount * 2 - 1, n.attributes.uvNorm.values[2 * i + 1] = 1 - _e2 / n.ySegCount * 2, _t < n.xSegCount && _e2 < n.ySegCount) {
                    var s = _e2 * n.xSegCount + _t;
                    n.attributes.index.values[6 * s] = i, n.attributes.index.values[6 * s + 1] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 2] = i + 1, n.attributes.index.values[6 * s + 3] = i + 1, n.attributes.index.values[6 * s + 4] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 5] = i + 2 + n.xSegCount;
                  }
                }
              }

              n.attributes.uv.update(), n.attributes.uvNorm.update(), n.attributes.index.update(), _miniGl.debug("Geometry.setTopology", {
                uv: n.attributes.uv,
                uvNorm: n.attributes.uvNorm,
                index: n.attributes.index
              });
            }
          }, {
            key: "setSize",
            value: function setSize() {
              var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "xz";
              var geometry = this;
              geometry.width = width, geometry.height = height, geometry.orientation = orientation, geometry.attributes.position.values && geometry.attributes.position.values.length === 3 * geometry.vertexCount || (geometry.attributes.position.values = new Float32Array(3 * geometry.vertexCount));
              var o = width / -2,
                  r = height / -2,
                  segment_width = width / geometry.xSegCount,
                  segment_height = height / geometry.ySegCount;

              for (var yIndex = 0; yIndex <= geometry.ySegCount; yIndex++) {
                var t = r + yIndex * segment_height;

                for (var xIndex = 0; xIndex <= geometry.xSegCount; xIndex++) {
                  var _r = o + xIndex * segment_width,
                      l = yIndex * (geometry.xSegCount + 1) + xIndex;

                  geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[0])] = _r, geometry.attributes.position.values[3 * l + "xyz".indexOf(orientation[1])] = -t;
                }
              }

              geometry.attributes.position.update(), _miniGl.debug("Geometry.setSize", {
                position: geometry.attributes.position
              });
            }
          }]);

          return value;
        }()
      },
      Mesh: {
        enumerable: !1,
        value: /*#__PURE__*/function () {
          function value(geometry, material) {
            _classCallCheck(this, value);

            var mesh = this;
            mesh.geometry = geometry, mesh.material = material, mesh.wireframe = !1, mesh.attributeInstances = [], Object.entries(mesh.geometry.attributes).forEach(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  e = _ref10[0],
                  attribute = _ref10[1];

              mesh.attributeInstances.push({
                attribute: attribute,
                location: attribute.attach(e, mesh.material.program)
              });
            }), _miniGl.meshes.push(mesh), _miniGl.debug("Mesh.constructor", {
              mesh: mesh
            });
          }

          _createClass(value, [{
            key: "draw",
            value: function draw() {
              context.useProgram(this.material.program), this.material.uniformInstances.forEach(function (_ref11) {
                var e = _ref11.uniform,
                    t = _ref11.location;
                return e.update(t);
              }), this.attributeInstances.forEach(function (_ref12) {
                var e = _ref12.attribute,
                    t = _ref12.location;
                return e.use(t);
              }), context.drawElements(this.wireframe ? context.LINES : context.TRIANGLES, this.geometry.attributes.index.values.length, context.UNSIGNED_SHORT, 0);
            }
          }, {
            key: "remove",
            value: function remove() {
              var _this = this;

              _miniGl.meshes = _miniGl.meshes.filter(function (e) {
                return e != _this;
              });
            }
          }]);

          return value;
        }()
      },
      Attribute: {
        enumerable: !1,
        value: /*#__PURE__*/function () {
          function value(e) {
            _classCallCheck(this, value);

            this.type = context.FLOAT, this.normalized = !1, this.buffer = context.createBuffer(), Object.assign(this, e), this.update();
          }

          _createClass(value, [{
            key: "update",
            value: function update() {
              void 0 !== this.values && (context.bindBuffer(this.target, this.buffer), context.bufferData(this.target, this.values, context.STATIC_DRAW));
            }
          }, {
            key: "attach",
            value: function attach(e, t) {
              var n = context.getAttribLocation(t, e);
              return this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(n), context.vertexAttribPointer(n, this.size, this.type, this.normalized, 0, 0)), n;
            }
          }, {
            key: "use",
            value: function use(e) {
              context.bindBuffer(this.target, this.buffer), this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(e), context.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0));
            }
          }]);

          return value;
        }()
      }
    });
    var a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    _miniGl.commonUniforms = {
      projectionMatrix: new _miniGl.Uniform({
        type: "mat4",
        value: a
      }),
      modelViewMatrix: new _miniGl.Uniform({
        type: "mat4",
        value: a
      }),
      resolution: new _miniGl.Uniform({
        type: "vec2",
        value: [1, 1]
      }),
      aspectRatio: new _miniGl.Uniform({
        type: "float",
        value: 1
      })
    };
  }

  _createClass(MiniGl, [{
    key: "setSize",
    value: function setSize() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 640;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 480;
      this.width = e, this.height = t, this.canvas.width = e, this.canvas.height = t, this.gl.viewport(0, 0, e, t), this.commonUniforms.resolution.value = [e, t], this.commonUniforms.aspectRatio.value = e / t, this.debug("MiniGL.setSize", {
        width: e,
        height: t
      });
    } //left, right, top, bottom, near, far

  }, {
    key: "setOrthographicCamera",
    value: function setOrthographicCamera() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -2e3;
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2e3;
      this.commonUniforms.projectionMatrix.value = [2 / this.width, 0, 0, 0, 0, 2 / this.height, 0, 0, 0, 0, 2 / (i - s), 0, e, t, n, 1], this.debug("setOrthographicCamera", this.commonUniforms.projectionMatrix.value);
    }
  }, {
    key: "render",
    value: function render() {
      this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach(function (e) {
        return e.draw();
      });
    }
  }]);

  return MiniGl;
}(); //Sets initial properties


function e(object, propertyName, val) {
  return propertyName in object ? Object.defineProperty(object, propertyName, {
    value: val,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : object[propertyName] = val, object;
} //Gradient object


var Gradient = /*#__PURE__*/function () {
  function Gradient() {
    var _this2 = this;

    _classCallCheck(this, Gradient);

    e(this, "el", void 0), e(this, "cssVarRetries", 0), e(this, "maxCssVarRetries", 200), e(this, "angle", 0), e(this, "isLoadedClass", !1), e(this, "isScrolling", !1),
    /*e(this, "isStatic", o.disableAmbientAnimations()),*/
    e(this, "scrollingTimeout", void 0), e(this, "scrollingRefreshDelay", 200), e(this, "isIntersecting", !1), e(this, "shaderFiles", void 0), e(this, "vertexShader", void 0), e(this, "sectionColors", void 0), e(this, "computedCanvasStyle", void 0), e(this, "conf", void 0), e(this, "uniforms", void 0), e(this, "t", 1253106), e(this, "last", 0), e(this, "width", void 0), e(this, "minWidth", 1111), e(this, "height", 600), e(this, "xSegCount", void 0), e(this, "ySegCount", void 0), e(this, "mesh", void 0), e(this, "material", void 0), e(this, "geometry", void 0), e(this, "minigl", void 0), e(this, "scrollObserver", void 0), e(this, "amp", 320), e(this, "seed", 5), e(this, "freqX", 14e-5), e(this, "freqY", 29e-5), e(this, "freqDelta", 1e-5), e(this, "activeColors", [1, 1, 1, 1]), e(this, "isMetaKey", !1), e(this, "isGradientLegendVisible", !1), e(this, "isMouseDown", !1), e(this, "handleScroll", function () {
      clearTimeout(_this2.scrollingTimeout), _this2.scrollingTimeout = setTimeout(_this2.handleScrollEnd, _this2.scrollingRefreshDelay), _this2.isGradientLegendVisible && _this2.hideGradientLegend(), _this2.conf.playing && (_this2.isScrolling = !0, _this2.pause());
    }), e(this, "handleScrollEnd", function () {
      _this2.isScrolling = !1, _this2.isIntersecting && _this2.play();
    }), e(this, "resize", function () {
      _this2.width = window.innerWidth, _this2.minigl.setSize(_this2.width, _this2.height), _this2.minigl.setOrthographicCamera(), _this2.xSegCount = Math.ceil(_this2.width * _this2.conf.density[0]), _this2.ySegCount = Math.ceil(_this2.height * _this2.conf.density[1]), _this2.mesh.geometry.setTopology(_this2.xSegCount, _this2.ySegCount), _this2.mesh.geometry.setSize(_this2.width, _this2.height), _this2.mesh.material.uniforms.u_shadow_power.value = _this2.width < 600 ? 5 : 6;
    }), e(this, "handleMouseDown", function (e) {
      _this2.isGradientLegendVisible && (_this2.isMetaKey = e.metaKey, _this2.isMouseDown = !0, !1 === _this2.conf.playing && requestAnimationFrame(_this2.animate));
    }), e(this, "handleMouseUp", function () {
      _this2.isMouseDown = !1;
    }), e(this, "animate", function (e) {
      if (!_this2.shouldSkipFrame(e) || _this2.isMouseDown) {
        if (_this2.t += Math.min(e - _this2.last, 1e3 / 15), _this2.last = e, _this2.isMouseDown) {
          var _e3 = 160;
          _this2.isMetaKey && (_e3 = -160), _this2.t += _e3;
        }

        _this2.mesh.material.uniforms.u_time.value = _this2.t, _this2.minigl.render();
      }

      if (0 !== _this2.last && _this2.isStatic) return _this2.minigl.render(), void _this2.disconnect();
      (
      /*this.isIntersecting && */
      _this2.conf.playing || _this2.isMouseDown) && requestAnimationFrame(_this2.animate);
    }), e(this, "addIsLoadedClass", function () {
      /*this.isIntersecting && */
      !_this2.isLoadedClass && (_this2.isLoadedClass = !0, _this2.el.classList.add("isLoaded"), setTimeout(function () {
        _this2.el.parentElement.classList.add("isLoaded");
      }, 3e3));
    }), e(this, "pause", function () {
      _this2.conf.playing = false;
    }), e(this, "play", function () {
      requestAnimationFrame(_this2.animate), _this2.conf.playing = true;
    }), e(this, "initGradient", function (selector) {
      _this2.el = document.querySelector(selector);

      _this2.connect();

      return _this2;
    });
  }

  _createClass(Gradient, [{
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.shaderFiles = {
                  vertex: "varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",
                  noise: "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",
                  blend: "//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n\treturn base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n\treturn blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n\treturn max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n\t// Note : Same implementation as BlendSubtractf\n\treturn max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendSubtract\n\treturn max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n\t// Note : Same implementation as BlendAddf\n\treturn min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendAdd\n\treturn min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",
                  fragment: "varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}"
                }, this.conf = {
                  presetName: "",
                  wireframe: false,
                  density: [.06, .16],
                  zoom: 1,
                  rotation: 0,
                  playing: true
                }, document.querySelectorAll("canvas").length < 1 ? console.log("DID NOT LOAD HERO STRIPE CANVAS") : (this.minigl = new MiniGl(this.el, null, null, !0), requestAnimationFrame(function () {
                  _this3.el && (_this3.computedCanvasStyle = getComputedStyle(_this3.el), _this3.waitForCssVars());
                })
                /*
                this.scrollObserver = await s.create(.1, !1),
                this.scrollObserver.observe(this.el),
                this.scrollObserver.onSeparate(() => {
                    window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.isIntersecting = !1, this.conf.playing && this.pause()
                }), 
                this.scrollObserver.onIntersect(() => {
                    window.addEventListener("scroll", this.handleScroll), window.addEventListener("mousedown", this.handleMouseDown), window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("keydown", this.handleKeyDown), this.isIntersecting = !0, this.addIsLoadedClass(), this.play()
                })*/
                );

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.scrollObserver && (window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.scrollObserver.disconnect()), window.removeEventListener("resize", this.resize);
    }
  }, {
    key: "initMaterial",
    value: function initMaterial() {
      this.uniforms = {
        u_time: new this.minigl.Uniform({
          value: 0
        }),
        u_shadow_power: new this.minigl.Uniform({
          value: 5
        }),
        u_darken_top: new this.minigl.Uniform({
          value: "" === this.el.dataset.jsDarkenTop ? 1 : 0
        }),
        u_active_colors: new this.minigl.Uniform({
          value: this.activeColors,
          type: "vec4"
        }),
        u_global: new this.minigl.Uniform({
          value: {
            noiseFreq: new this.minigl.Uniform({
              value: [this.freqX, this.freqY],
              type: "vec2"
            }),
            noiseSpeed: new this.minigl.Uniform({
              value: 5e-6
            })
          },
          type: "struct"
        }),
        u_vertDeform: new this.minigl.Uniform({
          value: {
            incline: new this.minigl.Uniform({
              value: Math.sin(this.angle) / Math.cos(this.angle)
            }),
            offsetTop: new this.minigl.Uniform({
              value: -.5
            }),
            offsetBottom: new this.minigl.Uniform({
              value: -.5
            }),
            noiseFreq: new this.minigl.Uniform({
              value: [3, 4],
              type: "vec2"
            }),
            noiseAmp: new this.minigl.Uniform({
              value: this.amp
            }),
            noiseSpeed: new this.minigl.Uniform({
              value: 10
            }),
            noiseFlow: new this.minigl.Uniform({
              value: 3
            }),
            noiseSeed: new this.minigl.Uniform({
              value: this.seed
            })
          },
          type: "struct",
          excludeFrom: "fragment"
        }),
        u_baseColor: new this.minigl.Uniform({
          value: this.sectionColors[0],
          type: "vec3",
          excludeFrom: "fragment"
        }),
        u_waveLayers: new this.minigl.Uniform({
          value: [],
          excludeFrom: "fragment",
          type: "array"
        })
      };

      for (var _e4 = 1; _e4 < this.sectionColors.length; _e4 += 1) {
        this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
          value: {
            color: new this.minigl.Uniform({
              value: this.sectionColors[_e4],
              type: "vec3"
            }),
            noiseFreq: new this.minigl.Uniform({
              value: [2 + _e4 / this.sectionColors.length, 3 + _e4 / this.sectionColors.length],
              type: "vec2"
            }),
            noiseSpeed: new this.minigl.Uniform({
              value: 11 + .3 * _e4
            }),
            noiseFlow: new this.minigl.Uniform({
              value: 6.5 + .3 * _e4
            }),
            noiseSeed: new this.minigl.Uniform({
              value: this.seed + 10 * _e4
            }),
            noiseFloor: new this.minigl.Uniform({
              value: .1
            }),
            noiseCeil: new this.minigl.Uniform({
              value: .63 + .07 * _e4
            })
          },
          type: "struct"
        }));
      }

      return this.vertexShader = [this.shaderFiles.noise, this.shaderFiles.blend, this.shaderFiles.vertex].join("\n\n"), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms);
    }
  }, {
    key: "initMesh",
    value: function initMesh() {
      this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry(), this.mesh = new this.minigl.Mesh(this.geometry, this.material);
    }
  }, {
    key: "shouldSkipFrame",
    value: function shouldSkipFrame(e) {
      return !!window.document.hidden || !this.conf.playing || parseInt(e, 10) % 2 == 0 || void 0;
    }
  }, {
    key: "updateFrequency",
    value: function updateFrequency(e) {
      this.freqX += e, this.freqY += e;
    }
  }, {
    key: "toggleColor",
    value: function toggleColor(index) {
      this.activeColors[index] = 0 === this.activeColors[index] ? 1 : 0;
    }
  }, {
    key: "showGradientLegend",
    value: function showGradientLegend() {
      this.width > this.minWidth && (this.isGradientLegendVisible = !0, document.body.classList.add("isGradientLegendVisible"));
    }
  }, {
    key: "hideGradientLegend",
    value: function hideGradientLegend() {
      this.isGradientLegendVisible = !1, document.body.classList.remove("isGradientLegendVisible");
    }
  }, {
    key: "init",
    value: function init() {
      this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate), window.addEventListener("resize", this.resize);
    }
    /*
    * Waiting for the css variables to become available, usually on page load before we can continue.
    * Using default colors assigned below if no variables have been found after maxCssVarRetries
    */

  }, {
    key: "waitForCssVars",
    value: function waitForCssVars() {
      var _this4 = this;

      if (this.computedCanvasStyle && -1 !== this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")) this.init(), this.addIsLoadedClass();else {
        if (this.cssVarRetries += 1, this.cssVarRetries > this.maxCssVarRetries) {
          return this.sectionColors = [16711680, 16711680, 16711935, 65280, 255], void this.init();
        }

        requestAnimationFrame(function () {
          return _this4.waitForCssVars();
        });
      }
    }
    /*
    * Initializes the four section colors by retrieving them from css variables.
    */

  }, {
    key: "initGradientColors",
    value: function initGradientColors() {
      var _this5 = this;

      this.sectionColors = ["--gradient-color-1", "--gradient-color-2", "--gradient-color-3", "--gradient-color-4"].map(function (cssPropertyName) {
        var hex = _this5.computedCanvasStyle.getPropertyValue(cssPropertyName).trim(); //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.


        if (4 === hex.length) {
          var hexTemp = hex.substr(1).split("").map(function (hexTemp) {
            return hexTemp + hexTemp;
          }).join("");
          hex = "#".concat(hexTemp);
        }

        return hex && "0x".concat(hex.substr(1));
      }).filter(Boolean).map(normalizeColor);
    }
  }]);

  return Gradient;
}();
/*
*Finally initializing the Gradient class, assigning a canvas to it and calling Gradient.connect() which initializes everything,
* Use Gradient.pause() and Gradient.play() for controls.
*
* Here are some default property values you can change anytime:
* Amplitude:    Gradient.amp = 0
* Colors:       Gradient.sectionColors (if you change colors, use normalizeColor(#hexValue)) before you assign it.
*
*
* Useful functions
* Gradient.toggleColor(index)
* Gradient.updateFrequency(freq)
*/




/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gradient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gradient.js */ "./src/scripts/Gradient.js");

document.addEventListener('DOMContentLoaded', function () {
  // Create your instance
  var gradient = new _Gradient_js__WEBPACK_IMPORTED_MODULE_0__["Gradient"](); // Call `initGradient` with the selector to your canvas

  gradient.initGradient('#gradient-canvas');
});

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./src/scripts/index.js ./src/styles/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ben/Code/demo/src/scripts/index.js */"./src/scripts/index.js");
module.exports = __webpack_require__(/*! /Users/ben/Code/demo/src/styles/style.scss */"./src/styles/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map