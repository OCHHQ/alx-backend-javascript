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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! exports provided: cpp, java, react, cTeacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cpp\", function() { return cpp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"java\", function() { return java; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"react\", function() { return react; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cTeacher\", function() { return cTeacher; });\n/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ \"./js/subjects/Cpp.ts\");\n/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ \"./js/subjects/Java.ts\");\n/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ \"./js/subjects/React.ts\");\n/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_2__);\n// main.ts\r\n\r\n\r\n\r\n// Create and export constants for each subject\r\nvar cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__[\"Cpp\"]();\r\nvar java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__[\"Java\"]();\r\nvar react = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__[\"React\"]();\r\n// Create and export a Teacher object with experienceTeachingC\r\nvar cTeacher = {\r\n    firstName: 'John',\r\n    lastName: 'Doe',\r\n    experienceTeachingC: 10\r\n};\r\n// For Cpp subject\r\nconsole.log('C++');\r\ncpp.setTeacher(cTeacher);\r\nconsole.log(cpp.getRequirements());\r\nconsole.log(cpp.getAvailableTeacher());\r\n// For Java subject\r\nconsole.log('Java');\r\njava.setTeacher(cTeacher);\r\nconsole.log(java.getRequirements());\r\nconsole.log(java.getAvailableTeacher());\r\n// For React subject\r\nconsole.log('React');\r\nreact.setTeacher(cTeacher);\r\nconsole.log(react.getRequirements());\r\nconsole.log(react.getAvailableTeacher());\r\n\n\n//# sourceURL=webpack:///./js/main.ts?");

/***/ }),

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Cpp.ts\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Subjects;\r\n(function (Subjects) {\r\n    var Cpp = /** @class */ (function (_super) {\r\n        __extends(Cpp, _super);\r\n        function Cpp() {\r\n            return _super !== null && _super.apply(this, arguments) || this;\r\n        }\r\n        Cpp.prototype.getRequirements = function () {\r\n            return 'Here is the list of requirements for Cpp';\r\n        };\r\n        Cpp.prototype.getAvailableTeacher = function () {\r\n            if (this.teacher.experienceTeachingC) {\r\n                return \"Available Teacher: \" + this.teacher.firstName;\r\n            }\r\n            return 'No available teacher';\r\n        };\r\n        return Cpp;\r\n    }(Subjects.Subject));\r\n    Subjects.Cpp = Cpp;\r\n})(Subjects || (Subjects = {}));\r\n\n\n//# sourceURL=webpack:///./js/subjects/Cpp.ts?");

/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Java.ts\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Subjects;\r\n(function (Subjects) {\r\n    var Java = /** @class */ (function (_super) {\r\n        __extends(Java, _super);\r\n        function Java() {\r\n            return _super !== null && _super.apply(this, arguments) || this;\r\n        }\r\n        Java.prototype.getRequirements = function () {\r\n            return 'Here is the list of requirements for Java';\r\n        };\r\n        Java.prototype.getAvailableTeacher = function () {\r\n            if (this.teacher.experienceTeachingJava) {\r\n                return \"Available Teacher: \" + this.teacher.firstName;\r\n            }\r\n            return 'No available teacher';\r\n        };\r\n        return Java;\r\n    }(Subjects.Subject));\r\n    Subjects.Java = Java;\r\n})(Subjects || (Subjects = {}));\r\n\n\n//# sourceURL=webpack:///./js/subjects/Java.ts?");

/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// React.ts\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Subjects;\r\n(function (Subjects) {\r\n    var React = /** @class */ (function (_super) {\r\n        __extends(React, _super);\r\n        function React() {\r\n            return _super !== null && _super.apply(this, arguments) || this;\r\n        }\r\n        React.prototype.getRequirements = function () {\r\n            return 'Here is the list of requirements for React';\r\n        };\r\n        React.prototype.getAvailableTeacher = function () {\r\n            if (this.teacher.experienceTeachingReact) {\r\n                return \"Available Teacher: \" + this.teacher.firstName;\r\n            }\r\n            return 'No available teacher';\r\n        };\r\n        return React;\r\n    }(Subjects.Subject));\r\n    Subjects.React = React;\r\n})(Subjects || (Subjects = {}));\r\n\n\n//# sourceURL=webpack:///./js/subjects/React.ts?");

/***/ })

/******/ });