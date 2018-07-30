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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let e = 6;\r\nconsole.log(`ES${e} is working`);\r\n\r\nlet start = () => {\r\n    let rowLength = 10;\r\n    let startPoint = 54;\r\n    console.log(startPoint);\r\n    const boxArr = Array.from(document.querySelectorAll('.box'));\r\n  \r\n  boxArr.forEach((el,ind) => {\r\n    //el.textContent = Math.round(Math.random()).toString();\r\n    \r\n    let index = ind.toString();\r\n    el.setAttribute('id','box-'+index);\r\n  });\r\n    document.getElementById(`box-${startPoint}`).textContent = 'X';\r\n    document.getElementById(`box-${startPoint}`).style.backgroundColor = '#41e5f4';\r\n    \r\n  \r\n  var newMatrix = arr2Matrix(boxArr,rowLength);\r\n    \r\n  document.querySelector('.start').addEventListener('click',() => {\r\n    document.getElementById('box-'+startPoint).textContent = '1';\r\n    swampSearch(newMatrix,startPoint);\r\n  });\r\n    \r\n  }\r\n    \r\n  \r\n  const arr2Matrix = (array,rowLength) => {\r\n    var matrix = [], i, j;\r\n   \r\n    for(i = 0, j = -1; i < array.length;i++){\r\n      \r\n      if(i % rowLength === 0){\r\n        j++;\r\n        matrix[j] = [];\r\n      }\r\n      matrix[j].push(array[i]);\r\n      \r\n    }\r\n    return matrix;\r\n  }\r\n  \r\n  let swampSearch = (swamp,id) => {\r\n      let call = 0;\r\n    \r\n      if((id<=9 && id >= 0) || (id>=90 && id< 100) || (id%10 === 0) || (id %10 === 9)){\r\n      document.getElementById('box-'+id).style.backgroundColor = 'green';\r\n      document.getElementById('box-'+id).textContent = 'O';\r\n      console.log(id);\r\n      return;\r\n      }\r\n    \r\n    \r\n    //left check\r\n    \r\n    if(document.getElementById('box-'+(id-1)).textContent.includes('1')){\r\n      document.getElementById('box-'+(id-1)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id-1));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }\r\n    \r\n    //right check\r\n    \r\n    if(document.getElementById('box-'+(id-11)).textContent.includes('1')){\r\n      document.getElementById('box-'+(id-11)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id-11));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }\r\n    \r\n    \r\n    if(document.getElementById('box-'+(id-10)).textContent.includes('1')){\r\n      document.getElementById('box-'+(id-10)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id-10));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }\r\n   \r\n   \r\n    if(document.getElementById('box-'+(id-9)).textContent.includes('1')){\r\n      document.getElementById('box-'+(id-9)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id-9));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }\r\n    \r\n    \r\n    \r\n    if(document.getElementById('box-'+(id+1)).textContent.includes('1')){\r\n      document.getElementById('box-'+(id+1)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id+1));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }\r\n    \r\n    \r\n    if(document.getElementById('box-'+(id+11)).textContent.includes('1')){\r\n     document.getElementById('box-'+(id+11)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id+11));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }\r\n    \r\n    \r\n    if(document.getElementById('box-'+(id+10)).textContent.includes('1')){\r\n      document.getElementById('box-'+(id+10)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id+10));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }  \r\n    \r\n    \r\n    if(document.getElementById('box-'+(id+9)).textContent.includes('1')){\r\n      document.getElementById('box-'+(id+9)).style.backgroundColor='orange';\r\n      document.getElementById('box-'+id).textContent = 'x';\r\n      call++;\r\n      swampSearch(swamp,(id+9));\r\n      document.getElementById('box-'+id).textContent = '1';\r\n    }\r\n    if(call === 0)\r\n        document.getElementById('box-'+id).style.backgroundColor = 'red';\r\n    return;\r\n  }\r\n  \r\n  \r\n  start();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });