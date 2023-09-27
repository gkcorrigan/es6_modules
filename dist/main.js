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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car {\r\nconstructor(id, make, model, year){\r\n\r\nthis.id = id;\r\nthis.make = make;\r\nthis.model = model;\r\nthis.year = year;\r\n}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\nconsole.log(\"Hello World\");\r\n\r\n// TODO\r\nconst inputForm = document.querySelector(\"#submitForm\");\r\nconst carMakeInput = document.querySelector(\"#makeInput\");\r\nconst carModelInput = document.querySelector(\"#modelInput\");\r\nconst carYearInput = document.querySelector(\"#yearInput\");\r\nconst carMakePara = document.querySelector(\"#car-make\");\r\nconst carModelPara = document.querySelector(\"#car-model\");\r\nconst carYearPara = document.querySelector(\"#car-year\");\r\nconst removeBtn = document.querySelector(\".removeBtn\");\r\nconst wishlistUl = document.querySelector(\"#wishListContainer > ul\");\r\n\r\n//invoking the constructor on our class to create one instance\r\nconst wishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ninputForm.addEventListener(\"submit\", addCar);\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\n\r\n//what should happen when we click on a car in our list\r\nfunction showCarDetails(car) {\r\n  carMakePara.textContent = car.make;\r\n  carModelPara.textContent = car.model;\r\n  carYearPara.textContent = car.year;\r\n  removeBtn.disabled = false;\r\n  removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\n//Populate the list of cars on the page\r\n//Reset the list, and then make all the cars again\r\nfunction updateDOMList() {\r\n  wishlistUl.innerHTML = \"\";\r\n\r\nconsole.log(wishList);\r\nwishList.list.forEach((element, index, array) => {\r\n  //1. create the elements\r\n  \r\n  const li = document.createElement(\"li\");\r\n  //2. modify the elements\r\n  li.textContent = `Make ${element.make}; Model ${element.model}`;\r\n  li.addEventListener(\"click\", () => {\r\n    showCarDetails(element);\r\n  });\r\n  //3. append the elements\r\n  wishlistUl.append(li);\r\n});\r\n}\r\nconsole.log(carMakeInput, carModelInput, carYearInput);\r\n\r\nfunction addCar(event) {\r\n  console.log(event);\r\n  event.preventDefault();\r\n  wishList.add(carMakeInput.value, carModelInput.value, carYearInput.value);\r\n  updateDOMList();\r\n  \r\n}\r\n\r\nfunction removeCar() {\r\n  const carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n  wishList.remove(carId);\r\n  updateDOMList();\r\n  carMakePara.textContent = \"\";\r\n  carModelPara.textContent = \"\";\r\n  carYearPara.textContent = \"\";\r\n  removeBtn.disabled = true;\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\nclass Wishlist {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n\r\n  add(make, model, year) {\r\n    const carAdd = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n    this.list.push(carAdd);\r\n  }\r\n\r\n  remove(carId) {\r\n    // for (let i = 0; i < this.list.length; i++){\r\n\r\n    this.list = this.list.filter((car) => {\r\n      return car.id !== carId;\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wishlist);\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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