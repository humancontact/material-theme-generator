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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _components = __webpack_require__(/*! ./components */ \"./components.js\");\n\nvar _myTheme = __webpack_require__(/*! ./my-theme */ \"./my-theme.js\");\n\nvar _myTheme2 = _interopRequireDefault(_myTheme);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// Import my theme variables\n\n\n//\n// Instantiate all components in the main content\n//\n\nvar mainEl = document.querySelector('.main-content');\n\n// Button\nvar buttonEls = Array.from(mainEl.querySelectorAll('.mdc-button'));\nbuttonEls.forEach(function (el) {\n  return new _components.MDCRipple(el);\n});\n\n// Icon button toggle\nvar iconToggleEl = mainEl.querySelector('#icon-toggle-button');\nvar iconToggle = new _components.MDCIconButtonToggle(iconToggleEl);\niconToggle.unbounded = true;\n\n// Card\nvar cardPrimaryActionEls = Array.from(mainEl.querySelectorAll('.mdc-card__primary-action'));\ncardPrimaryActionEls.forEach(function (el) {\n  return new _components.MDCRipple(el);\n});\n\n// Chips\nvar chipSetEls = Array.from(mainEl.querySelectorAll('.mdc-chip-set'));\nchipSetEls.forEach(function (el) {\n  return new _components.MDCChipSet(el);\n});\n\n// Text field\nvar textFieldEls = Array.from(mainEl.querySelectorAll('.mdc-text-field'));\ntextFieldEls.forEach(function (el) {\n  var textField = new _components.MDCTextField(el);\n  if (el.classList.contains('text-field-with-input')) {\n    textField.value = 'Input text';\n  }\n});\nvar helperTextEls = Array.from(mainEl.querySelectorAll('.mdc-text-field-helper-text'));\nhelperTextEls.forEach(function (el) {\n  return new _components.MDCTextFieldHelperText(el);\n});\n\n// Linear progress\nvar linearProgressEl = mainEl.querySelector('.mdc-linear-progress');\nvar linearProgress = new _components.MDCLinearProgress(linearProgressEl);\nlinearProgress.progress = 0.5;\n\n// FAB\nvar fabEls = Array.from(mainEl.querySelectorAll('.mdc-fab'));\nfabEls.forEach(function (el) {\n  return new _components.MDCRipple(el);\n});\n\n// Checkbox\nvar checkboxEls = Array.from(mainEl.querySelectorAll('.mdc-checkbox'));\ncheckboxEls.forEach(function (el) {\n  var checkbox = new _components.MDCCheckbox(el);\n  if (el.classList.contains('indeterminate-checkbox')) {\n    checkbox.indeterminate = true;\n  }\n});\n\n// Radio\nvar radioEls = Array.from(mainEl.querySelectorAll('.mdc-radio'));\nradioEls.forEach(function (el) {\n  return new _components.MDCRadio(el);\n});\n\n// Switch\nvar switchEls = Array.from(mainEl.querySelectorAll('.mdc-switch'));\nswitchEls.forEach(function (el) {\n  return new _components.MDCSwitch(el);\n});\n\n// Top app bar\nvar topAppBarEls = Array.from(mainEl.querySelectorAll('.mdc-top-app-bar'));\ntopAppBarEls.forEach(function (el) {\n  return new _components.MDCTopAppBar(el);\n});\n\n// List\nvar listEls = Array.from(mainEl.querySelectorAll('.mdc-list'));\nlistEls.forEach(function (el) {\n  var list = new _components.MDCList(el);\n  list.listElements.map(function (listItemEl) {\n    return new _components.MDCRipple(listItemEl);\n  });\n  list.singleSelection = true;\n});\n\n// Select\nvar selectEls = Array.from(mainEl.querySelectorAll('.mdc-select'));\nselectEls.forEach(function (el) {\n  return new _components.MDCSelect(el);\n});\n\n// Snackbar\nvar snackbarEl = mainEl.querySelector('.mdc-snackbar');\nnew _components.MDCSnackbar(snackbarEl);\n\n// Dialog\nvar dialogEl = mainEl.querySelector('.mdc-dialog');\nnew _components.MDCDialog(dialogEl);\n\n// Slider\nvar sliderEl = mainEl.querySelector('.mdc-slider');\nvar slider = new _components.MDCSlider(sliderEl);\nslider.value = 5;\n\n// Menu\nvar menuEl = mainEl.querySelector('.mdc-menu');\nvar menu = new _components.MDCMenu(menuEl);\nmenu.open = true;\n// Override MDCMenuSurfaceFoundation so the menu never closes\nmenu.menuSurface_.foundation_.close = function () {};\n// Focus first component when menu is done opening\nmenuEl.addEventListener('MDCMenuSurface:opened', function () {\n  return document.querySelector('.mdc-button').focus();\n});\n\n// Tabs\nvar tabBarEl = mainEl.querySelector('.mdc-tab-bar');\nnew _components.MDCTabBar(tabBarEl);\n\n// Data Table\nvar dataTable = document.querySelector('.mdc-data-table');\nnew _components.MDCDataTable(dataTable);\n\n//\n// Theme Builder drawer contents\n//\n\nvar themeBuilderDrawerEl = document.querySelector('.theme-builder-drawer');\n\n// Theme name\nthemeBuilderDrawerEl.querySelector('.theme-name').textContent = _myTheme2.default;\n\n// Theme Builder drawer tabs\nnew _components.MDCTabBar(themeBuilderDrawerEl.querySelector('.mdc-tab-bar'));\nvar instructions = themeBuilderDrawerEl.querySelector('.drawer-content--instructions');\nvar themeSummary = themeBuilderDrawerEl.querySelector('.drawer-content--theme-summary');\nthemeBuilderDrawerEl.querySelector('.drawer-tab--instructions').addEventListener('MDCTab:interacted', function () {\n  instructions.style.display = 'block';\n  themeSummary.style.display = 'none';\n});\nthemeBuilderDrawerEl.querySelector('.drawer-tab--theme-summary').addEventListener('MDCTab:interacted', function () {\n  instructions.style.display = 'none';\n  themeSummary.style.display = 'block';\n});\n\n// RTL Switch\nvar formField = new _components.MDCFormField(themeBuilderDrawerEl.querySelector('.mdc-form-field'));\nvar rtlSwitch = new _components.MDCSwitch(themeBuilderDrawerEl.querySelector('.rtl-switch'));\nformField.input = rtlSwitch;\nvar rtlInput = themeBuilderDrawerEl.querySelector('#rtl-input');\nrtlInput.addEventListener('change', function () {\n  [].forEach.call(mainEl.querySelectorAll('.column'), function (columnEl) {\n    if (rtlInput.checked) {\n      columnEl.setAttribute('dir', 'rtl');\n      linearProgressEl.classList.add('mdc-linear-progress--reversed');\n    } else {\n      columnEl.removeAttribute('dir');\n      linearProgressEl.classList.remove('mdc-linear-progress--reversed');\n    }\n    slider.layout();\n  });\n});\n\n//\n// Theme Builder app bar\n//\n\nvar themeBuilderAppBar = new _components.MDCTopAppBar(document.querySelector('.theme-builder-app-bar'));\n\n//\n// Handle responsive layout\n//\n\nvar themeBuilderDrawer = null;\nvar initModalDrawer = function initModalDrawer() {\n  themeBuilderDrawerEl.classList.add(\"mdc-drawer--modal\");\n  var themeBuilderDrawer = new _components.MDCDrawer(themeBuilderDrawerEl);\n  themeBuilderDrawer.open = false;\n  themeBuilderAppBar.setScrollTarget(mainEl);\n  themeBuilderAppBar.listen('MDCTopAppBar:nav', function () {\n    themeBuilderDrawer.open = !themeBuilderDrawer.open;\n  });\n};\nvar destroyModalDrawer = function destroyModalDrawer() {\n  themeBuilderDrawerEl.classList.remove(\"mdc-drawer--modal\");\n  if (themeBuilderDrawer) {\n    themeBuilderDrawer.destroy();\n  }\n};\n\n// Toggle between permanent drawer and modal drawer at 1310px\nvar layoutForScreenSize = function layoutForScreenSize() {\n  if (window.matchMedia(\"(max-width: 1310px)\").matches) {\n    initModalDrawer();\n    mainEl.classList.add('mdc-top-app-bar--fixed-adjust');\n  } else {\n    destroyModalDrawer();\n    mainEl.classList.remove('mdc-top-app-bar--fixed-adjust');\n  }\n};\n\nwindow.addEventListener('resize', layoutForScreenSize);\nlayoutForScreenSize();\n\n// Build out shape size visualizer\n[].concat(_toConsumableArray(document.querySelectorAll('.theme-summary-shape'))).forEach(function (elem) {\n  // Get background value of color component and sanitize\n  var sizeVals = getComputedStyle(elem).borderRadius;\n  var node = document.createElement(\"span\");\n  var textnode = document.createTextNode(sizeVals + ';');\n  node.classList.add('varValue');\n  node.appendChild(textnode);\n\n  // Append text of the element adjacent sibling to the end of the text string\n  elem.previousElementSibling.appendChild(node);\n});\n\n// Color Visualization\nvar rgbToHex = function rgbToHex(col) {\n  if (col.charAt(0) == 'r') {\n    col = col.replace('rgb(', '').replace(')', '').split(',');\n    var r = parseInt(col[0], 10).toString(16);\n    var g = parseInt(col[1], 10).toString(16);\n    var b = parseInt(col[2], 10).toString(16);\n    r = r.length == 1 ? '0' + r : r;g = g.length == 1 ? '0' + g : g;b = b.length == 1 ? '0' + b : b;\n    var colHex = '#' + r + g + b;\n    return colHex;\n  }\n};\n\n// Build out color variable visualizer\n[].concat(_toConsumableArray(document.querySelectorAll('.theme-summary-color'))).forEach(function (elem) {\n  // Get background value of color component and sanitize\n  var bgColor = rgbToHex(getComputedStyle(elem).backgroundColor) || '';\n  var node = document.createElement(\"span\");\n  var textnode = document.createTextNode(': ' + bgColor + ';');\n  node.classList.add('varValue');\n  node.appendChild(textnode);\n\n  // Append text of the element adjacent sibling to the end of the text string\n  elem.previousElementSibling.appendChild(node);\n});\n\n// Build out typography visualizer\nvar setVisibleFont = function setVisibleFont() {\n  var fontSample = document.querySelector('.mdc-typography--headline1');\n  var fontUrl = 'https://fonts.google.com/specimen/' + getComputedStyle(fontSample).fontFamily.split(',', 1)[0].replace(/ /g, '+').replace(/['\"]+/g, '');\n\n  // Set actual CSS\n  document.querySelector('.font-name').innerHTML = getComputedStyle(fontSample).fontFamily;\n\n  // Set Link\n  document.querySelector('.font-link').href = fontUrl;\n};\nsetVisibleFont();\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./app.scss":
/*!******************!*\
  !*** ./app.scss ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"bundle-parkland.css\";\n\n//# sourceURL=webpack:///./app.scss?");

/***/ }),

/***/ "./components.js":
/*!***************************************************************!*\
  !*** delegated ./components.js from dll-reference components ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference components */ \"dll-reference components\"))(\"./components.js\");\n\n//# sourceURL=webpack:///delegated_./components.js_from_dll-reference_components?");

/***/ }),

/***/ "./my-theme.js":
/*!*********************!*\
  !*** ./my-theme.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Enter your theme name here!\nvar themeName = '';\n\nexports.default = themeName;\n\n//# sourceURL=webpack:///./my-theme.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./app.scss ./app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app.scss */\"./app.scss\");\nmodule.exports = __webpack_require__(/*! ./app.js */\"./app.js\");\n\n\n//# sourceURL=webpack:///multi_./app.scss_./app.js?");

/***/ }),

/***/ "dll-reference components":
/*!*****************************!*\
  !*** external "components" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = components;\n\n//# sourceURL=webpack:///external_%22components%22?");

/***/ })

/******/ });