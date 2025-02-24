/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Password Visibility\n */\nvar passwordInput = document.getElementById('password');\nvar passwordVisibilityButtons = document.querySelectorAll('.password-visibility button');\nvar changeButton = function () {\n    passwordVisibilityButtons.forEach(function (button) {\n        return button.classList.toggle('hidden');\n    });\n};\nif (passwordInput && passwordVisibilityButtons.length) {\n    passwordVisibilityButtons.forEach(function (button) {\n        return button.addEventListener('click', function () {\n            changeButton();\n            var inputType = passwordInput.getAttribute('type');\n            var newType = inputType === 'text' ? 'password' : 'text';\n            passwordInput.setAttribute('type', newType);\n        });\n    });\n}\n\n\n//# sourceURL=webpack://coffee-login-page-design/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;