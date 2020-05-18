var EmailsInput =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/emails-input.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/emails-input.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/emails-input.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gct-emails-input {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 auto; }\n  .gct-emails-input * {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 14px; }\n  .gct-emails-input label,\n  .gct-emails-input label * {\n    font-size: 20px; }\n\n.gct-emails-input__blocks-window {\n  display: flex;\n  flex-direction: row;\n  align-content: flex-start;\n  flex: 1;\n  overflow-y: auto;\n  flex-wrap: wrap;\n  background-color: white;\n  border: 1px solid #c3c2cf;\n  border-radius: 4px;\n  margin-top: 24px;\n  padding: 8px 7px; }\n\n.gct-emails-input__block__valid, .gct-emails-input__block__invalid {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgba(102, 153, 255, 0.2);\n  height: 24px;\n  font-size: 14px;\n  border-radius: 12px;\n  padding-left: 10px;\n  margin: 0 6px 4px 0; }\n  .gct-emails-input__block__valid div, .gct-emails-input__block__invalid div {\n    display: flex; }\n\n.gct-emails-input__block__invalid {\n  background-color: transparent;\n  border-bottom: 1px dashed #d92929;\n  border-radius: 0;\n  padding-left: 4px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/email-block.ts":
/*!****************************!*\
  !*** ./src/email-block.ts ***!
  \****************************/
/*! exports provided: EmailBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailBlock", function() { return EmailBlock; });
/* harmony import */ var _styles_emails_input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/emails-input.scss */ "./src/styles/emails-input.scss");
/* harmony import */ var _styles_emails_input_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_emails_input_scss__WEBPACK_IMPORTED_MODULE_0__);

var EmailBlock = /** @class */ (function () {
    function EmailBlock(address, props) {
        var _this = this;
        this._validateEmail = function (address) {
            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(_this.address);
        };
        this._renderCloseIconDiv = function () {
            // Generating and appending the close icon
            var closeIconDiv = document.createElement('div');
            var closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            closeIconDiv.appendChild(closeIcon);
            closeIcon.outerHTML = EmailBlock.kSVG_CLOSE_ICON;
            _this.mainContainer.appendChild(closeIconDiv);
            closeIconDiv.addEventListener('mousedown', function (evt) {
                _this.props.onDelete(_this, true);
            });
            return closeIconDiv;
        };
        this._renderMainContainer = function () {
            var elem = document.createElement('div');
            elem.className = 'gct-emails-input__block__';
            elem.className += !_this.valid ? 'invalid' : 'valid';
            var span = document.createElement('span');
            span.textContent = _this.address;
            elem.appendChild(span);
            return elem;
        };
        this.destroy = function () {
            var _a;
            (_a = _this.mainContainer.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(_this.mainContainer);
        };
        this.props = props;
        if (address === '') {
            throw new Error('cannot create a EmailBlock with an empty email address');
        }
        this.address = address;
        this.valid = this._validateEmail(address);
        this.mainContainer = this._renderMainContainer();
        this._closeIconDiv = this._renderCloseIconDiv();
    }
    EmailBlock.kSVG_CLOSE_ICON = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M16 8.80571L15.1943 8L12 11.1943L8.80571 8L8 8.80571L11.1943 12L8 15.1943L8.80571 16L12 12.8057L15.1943 16L16 15.1943L12.8057 12L16 8.80571Z\" fill=\"black\"/>\n  </svg>";
    return EmailBlock;
}());



/***/ }),

/***/ "./src/emails-input.ts":
/*!*****************************!*\
  !*** ./src/emails-input.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_emails_input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/emails-input.scss */ "./src/styles/emails-input.scss");
/* harmony import */ var _styles_emails_input_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_emails_input_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _email_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-block */ "./src/email-block.ts");


var EmailsInput = /** @class */ (function () {
    function EmailsInput(containerNode, props) {
        var _this = this;
        if (props === void 0) { props = { inputPlaceholderText: 'add more emails...' }; }
        this._renderMainContainer = function () {
            var elem = document.createElement('div');
            elem.className = 'gct-emails-input';
            _this.containerNode.appendChild(elem);
            elem.addEventListener('focusin', function (evt) { });
            elem.addEventListener('focusout', function (evt) {
                _this._handleCreateEmailBlock(_this._input.value, true);
            });
            return elem;
        };
        this._renderLabel = function () {
            var _a;
            var elem = document.createElement('label');
            elem.innerHTML = (_a = _this.props.labelHTMLContent) !== null && _a !== void 0 ? _a : '';
            _this._mainContainer.appendChild(elem);
            return elem;
        };
        this._renderBlocksWindow = function () {
            var elem = document.createElement('div');
            elem.className = 'gct-emails-input__blocks-window';
            _this._mainContainer.appendChild(elem);
            elem.addEventListener('click', function (evt) {
                _this._input.focus();
            });
            return elem;
        };
        this._renderInput = function () {
            var elem = document.createElement('input');
            elem.type = 'text';
            elem.placeholder = _this.props.inputPlaceholderText;
            _this._blocksWindow.appendChild(elem);
            elem.addEventListener('keypress', function (evt) {
                if (evt.key === 'Enter' || evt.key === ',') {
                    evt.preventDefault();
                    _this._handleCreateEmailBlock(_this._input.value, true);
                }
            });
            elem.addEventListener('paste', function (evt) {
                var _a;
                var rawText = (_a = evt.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text');
                var tokens = _this._tokensFromRawText(rawText !== null && rawText !== void 0 ? rawText : '');
                _this.addAll(tokens);
                evt.preventDefault();
            });
            return elem;
        };
        this._tokensFromRawText = function (rawText) {
            var regex = /[, ]*([\w@\.]+)[, ]*/g;
            var tokens = [];
            var execResult;
            while ((execResult = regex.exec(rawText)) !== null) {
                tokens.push(execResult[1]);
            }
            return tokens;
        };
        /**
         * Add a single new email by the address
         */
        this.addEmail = function (address) {
            _this._handleCreateEmailBlock(address, true);
        };
        this._addEmailBlock = function (address) {
            var emailBlock = new _email_block__WEBPACK_IMPORTED_MODULE_1__["EmailBlock"](address, {
                onDelete: _this._handleDeleteEmailBlock,
            });
            _this._emailBlockList.push(emailBlock);
            _this._input.insertAdjacentElement('beforebegin', emailBlock.mainContainer);
        };
        this._removeEmailBlock = function (emailBlock) {
            _this._emailBlockList = _this._emailBlockList.filter(function (eB) { return eB.address !== emailBlock.address; });
            emailBlock.destroy();
        };
        /**
         * Removes all the current emails and cleans the component
         */
        this.removeAll = function () {
            _this._emailBlockList.forEach(function (eB) { return _this._handleDeleteEmailBlock(eB, false); });
            if (_this.props.onMailsListChange)
                _this.props.onMailsListChange(_this._emailBlockList);
        };
        /**
         * Internal state altering handler
         *
         * TODO can improve to observe the 'source of truth' that is the data property instead of handlers
         */
        this._handleCreateEmailBlock = function (address, notifyObserver) {
            try {
                _this._addEmailBlock(address);
                _this._input.value = '';
                _this._input.focus();
                if (notifyObserver && _this.props.onMailsListChange)
                    _this.props.onMailsListChange(_this.emailBlockList);
            }
            catch (e) {
                // TODO insert a mechanism to just log error in dev builds
            }
        };
        /**
         * Replace the current email list with the provided list of new email addresses
         */
        this.replaceAll = function (emailAddressList) {
            if (emailAddressList === void 0) { emailAddressList = []; }
            _this.removeAll();
            emailAddressList.forEach(function (address) { return _this._handleCreateEmailBlock(address, false); });
            if (_this.props.onMailsListChange)
                _this.props.onMailsListChange(_this._emailBlockList);
        };
        this.addAll = function (emailAddressList) {
            if (emailAddressList === void 0) { emailAddressList = []; }
            emailAddressList.forEach(function (address) { return _this._handleCreateEmailBlock(address, false); });
            if (_this.props.onMailsListChange)
                _this.props.onMailsListChange(_this._emailBlockList);
        };
        /**
         * Internal state altering handler
         *
         * TODO can improve to observe the 'source of truth' that is the data property instead of handlers
         */
        this._handleDeleteEmailBlock = function (emailBlockToBeDeleted, notifyObserver) {
            _this._removeEmailBlock(emailBlockToBeDeleted);
            _this._input.focus();
            if (notifyObserver && _this.props.onMailsListChange)
                _this.props.onMailsListChange(_this.emailBlockList);
        };
        this.props = props;
        this._emailBlockList = [];
        this.containerNode = containerNode;
        // ATTENTION: the render methods tends to position elements in the DOM
        // and as so, the order matters. Some rendering counts on previous elements
        // being already in place.
        this._mainContainer = this._renderMainContainer();
        if (this.props.labelHTMLContent !== null) {
            this._label = this._renderLabel();
        }
        else {
            this._label = null;
        }
        this._blocksWindow = this._renderBlocksWindow();
        this._input = this._renderInput();
        // Making sure that the node passed to be the mounting point has a flex display mode set
        containerNode.style.display = 'flex';
    }
    Object.defineProperty(EmailsInput.prototype, "emailBlockList", {
        get: function () {
            return this._emailBlockList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailsInput.prototype, "emailList", {
        get: function () {
            return this._emailBlockList.map(function (eB) { return eB.address; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailsInput.prototype, "validEmailsCount", {
        get: function () {
            return this._emailBlockList.filter(function (eB) { return eB.valid; }).length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailsInput.prototype, "invalidEmailsCount", {
        get: function () {
            return this._emailBlockList.filter(function (eB) { return !eB.valid; }).length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailsInput.prototype, "emailsCount", {
        get: function () {
            return this._emailBlockList.length;
        },
        enumerable: false,
        configurable: true
    });
    return EmailsInput;
}());
/* harmony default export */ __webpack_exports__["default"] = (EmailsInput);


/***/ }),

/***/ "./src/styles/emails-input.scss":
/*!**************************************!*\
  !*** ./src/styles/emails-input.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./emails-input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/emails-input.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vRW1haWxzSW5wdXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vc3JjL2VtYWlsLWJsb2NrLnRzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vc3JjL2VtYWlscy1pbnB1dC50cyIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3M/M2YzOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Es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LENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFtSkgsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbk5ELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE5BQTRHOztBQUU5STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJlbWFpbHMtaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbWFpbHMtaW5wdXQudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdjdC1lbWFpbHMtaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAuZ2N0LWVtYWlscy1pbnB1dCAqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG4gIC5nY3QtZW1haWxzLWlucHV0IGxhYmVsLFxcbiAgLmdjdC1lbWFpbHMtaW5wdXQgbGFiZWwgKiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi5nY3QtZW1haWxzLWlucHV0X19ibG9ja3Mtd2luZG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjMmNmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIHBhZGRpbmc6IDhweCA3cHg7IH1cXG5cXG4uZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfX3ZhbGlkLCAuZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfX2ludmFsaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDE1MywgMjU1LCAwLjIpO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIG1hcmdpbjogMCA2cHggNHB4IDA7IH1cXG4gIC5nY3QtZW1haWxzLWlucHV0X19ibG9ja19fdmFsaWQgZGl2LCAuZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfX2ludmFsaWQgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcblxcbi5nY3QtZW1haWxzLWlucHV0X19ibG9ja19faW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2Q5MjkyOTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDRweDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2VtYWlscy1pbnB1dC5zY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWFpbEJsb2NrUHJvcHMge1xuICBvbkRlbGV0ZTogKGVtYWlsQmxvY2tUb0JlRGVsZXRlZDogRW1haWxCbG9jaywgbm90aWZ5Q2hhbmdlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRW1haWxCbG9jayB7XG4gIHN0YXRpYyBrU1ZHX0NMT1NFX0lDT04gPSBgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNMTYgOC44MDU3MUwxNS4xOTQzIDhMMTIgMTEuMTk0M0w4LjgwNTcxIDhMOCA4LjgwNTcxTDExLjE5NDMgMTJMOCAxNS4xOTQzTDguODA1NzEgMTZMMTIgMTIuODA1N0wxNS4xOTQzIDE2TDE2IDE1LjE5NDNMMTIuODA1NyAxMkwxNiA4LjgwNTcxWlwiIGZpbGw9XCJibGFja1wiLz5cbiAgPC9zdmc+YDtcblxuICAvLyBET00gbWFwcGluZyBwcm9wZXJ0aWVzXG4gIHJlYWRvbmx5IG1haW5Db250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IF9jbG9zZUljb25EaXY6IEhUTUxEaXZFbGVtZW50O1xuICAvLyBEYXRhIHByb3BlcnRpZXNcbiAgcmVhZG9ubHkgYWRkcmVzczogc3RyaW5nO1xuICByZWFkb25seSB2YWxpZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgcHJvcHM6IEVtYWlsQmxvY2tQcm9wcztcblxuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBzdHJpbmcsIHByb3BzOiBFbWFpbEJsb2NrUHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgaWYgKGFkZHJlc3MgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjcmVhdGUgYSBFbWFpbEJsb2NrIHdpdGggYW4gZW1wdHkgZW1haWwgYWRkcmVzcycpO1xuICAgIH1cbiAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgIHRoaXMudmFsaWQgPSB0aGlzLl92YWxpZGF0ZUVtYWlsKGFkZHJlc3MpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lciA9IHRoaXMuX3JlbmRlck1haW5Db250YWluZXIoKTtcbiAgICB0aGlzLl9jbG9zZUljb25EaXYgPSB0aGlzLl9yZW5kZXJDbG9zZUljb25EaXYoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbGlkYXRlRW1haWwgPSAoYWRkcmVzczogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh0aGlzLmFkZHJlc3MpO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckNsb3NlSWNvbkRpdiA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XG4gICAgLy8gR2VuZXJhdGluZyBhbmQgYXBwZW5kaW5nIHRoZSBjbG9zZSBpY29uXG4gICAgY29uc3QgY2xvc2VJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjbG9zZUljb25EaXYuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcbiAgICBjbG9zZUljb24ub3V0ZXJIVE1MID0gRW1haWxCbG9jay5rU1ZHX0NMT1NFX0lDT047XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlSWNvbkRpdik7XG5cbiAgICBjbG9zZUljb25EaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkRlbGV0ZSh0aGlzLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjbG9zZUljb25EaXY7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyTWFpbkNvbnRhaW5lciA9ICgpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NOYW1lID0gJ2djdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX18nO1xuICAgIGVsZW0uY2xhc3NOYW1lICs9ICF0aGlzLnZhbGlkID8gJ2ludmFsaWQnIDogJ3ZhbGlkJztcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IHRoaXMuYWRkcmVzcztcblxuICAgIGVsZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0aGlzLm1haW5Db250YWluZXIpO1xuICB9O1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlcy9lbWFpbHMtaW5wdXQuc2Nzcyc7XG5pbXBvcnQgeyBFbWFpbEJsb2NrIH0gZnJvbSAnLi9lbWFpbC1ibG9jayc7XG5cbmludGVyZmFjZSBFbWFpbHNJbnB1dFByb3BzIHtcbiAgLyoqXG4gICAqIGh0bWwgc3RyaW5nIHRvIGJlIHRoZSBjb250ZW50IG9mIHRoZSBsYWJlbFxuICAgKi9cbiAgbGFiZWxIVE1MQ29udGVudD86IHN0cmluZyB8IG51bGw7XG4gIGlucHV0UGxhY2Vob2xkZXJUZXh0OiBzdHJpbmc7XG4gIG9uTWFpbHNMaXN0Q2hhbmdlPzogKG1haWxzTGlzdDogRW1haWxCbG9ja1tdKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbHNJbnB1dCB7XG4gIHJlYWRvbmx5IHByb3BzOiBFbWFpbHNJbnB1dFByb3BzO1xuICAvLyBQcm9wZXJ0aWVzIG1hcHBpbmcgRE9NIGVsZW1lbnRzXG4gIHJlYWRvbmx5IGNvbnRhaW5lck5vZGU6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9tYWluQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfbGFiZWw6IEhUTUxTcGFuRWxlbWVudCB8IG51bGw7XG4gIHByaXZhdGUgX2Jsb2Nrc1dpbmRvdzogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAvLyBEYXRhIHByb3BlcnRpZXNcbiAgcHJpdmF0ZSBfZW1haWxCbG9ja0xpc3Q6IEVtYWlsQmxvY2tbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb250YWluZXJOb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcm9wczogRW1haWxzSW5wdXRQcm9wcyA9IHsgaW5wdXRQbGFjZWhvbGRlclRleHQ6ICdhZGQgbW9yZSBlbWFpbHMuLi4nIH1cbiAgKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuX2VtYWlsQmxvY2tMaXN0ID0gW107XG4gICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICAvLyBBVFRFTlRJT046IHRoZSByZW5kZXIgbWV0aG9kcyB0ZW5kcyB0byBwb3NpdGlvbiBlbGVtZW50cyBpbiB0aGUgRE9NXG4gICAgLy8gYW5kIGFzIHNvLCB0aGUgb3JkZXIgbWF0dGVycy4gU29tZSByZW5kZXJpbmcgY291bnRzIG9uIHByZXZpb3VzIGVsZW1lbnRzXG4gICAgLy8gYmVpbmcgYWxyZWFkeSBpbiBwbGFjZS5cbiAgICB0aGlzLl9tYWluQ29udGFpbmVyID0gdGhpcy5fcmVuZGVyTWFpbkNvbnRhaW5lcigpO1xuICAgIGlmICh0aGlzLnByb3BzLmxhYmVsSFRNTENvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gdGhpcy5fcmVuZGVyTGFiZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGFiZWwgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9ibG9ja3NXaW5kb3cgPSB0aGlzLl9yZW5kZXJCbG9ja3NXaW5kb3coKTtcbiAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX3JlbmRlcklucHV0KCk7XG5cbiAgICAvLyBNYWtpbmcgc3VyZSB0aGF0IHRoZSBub2RlIHBhc3NlZCB0byBiZSB0aGUgbW91bnRpbmcgcG9pbnQgaGFzIGEgZmxleCBkaXNwbGF5IG1vZGUgc2V0XG4gICAgY29udGFpbmVyTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG5cbiAgZ2V0IGVtYWlsQmxvY2tMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbEJsb2NrTGlzdDtcbiAgfVxuXG4gIGdldCBlbWFpbExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsQmxvY2tMaXN0Lm1hcCgoZUIpID0+IGVCLmFkZHJlc3MpO1xuICB9XG5cbiAgZ2V0IHZhbGlkRW1haWxzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsQmxvY2tMaXN0LmZpbHRlcigoZUIpID0+IGVCLnZhbGlkKS5sZW5ndGg7XG4gIH1cblxuICBnZXQgaW52YWxpZEVtYWlsc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbEJsb2NrTGlzdC5maWx0ZXIoKGVCKSA9PiAhZUIudmFsaWQpLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBlbWFpbHNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxCbG9ja0xpc3QubGVuZ3RoO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyTWFpbkNvbnRhaW5lciA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NOYW1lID0gJ2djdC1lbWFpbHMtaW5wdXQnO1xuICAgIHRoaXMuY29udGFpbmVyTm9kZS5hcHBlbmRDaGlsZChlbGVtKTtcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldnQpID0+IHt9KTtcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDcmVhdGVFbWFpbEJsb2NrKHRoaXMuX2lucHV0LnZhbHVlLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckxhYmVsID0gKCk6IEhUTUxTcGFuRWxlbWVudCA9PiB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZWxlbS5pbm5lckhUTUwgPSB0aGlzLnByb3BzLmxhYmVsSFRNTENvbnRlbnQgPz8gJyc7XG4gICAgdGhpcy5fbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckJsb2Nrc1dpbmRvdyA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW0uY2xhc3NOYW1lID0gJ2djdC1lbWFpbHMtaW5wdXRfX2Jsb2Nrcy13aW5kb3cnO1xuICAgIHRoaXMuX21haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlcklucHV0ID0gKCk6IEhUTUxJbnB1dEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsZW0udHlwZSA9ICd0ZXh0JztcbiAgICBlbGVtLnBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5pbnB1dFBsYWNlaG9sZGVyVGV4dDtcbiAgICB0aGlzLl9ibG9ja3NXaW5kb3cuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleSA9PT0gJywnKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDcmVhdGVFbWFpbEJsb2NrKHRoaXMuX2lucHV0LnZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgKGV2dCkgPT4ge1xuICAgICAgY29uc3QgcmF3VGV4dCA9IGV2dC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl90b2tlbnNGcm9tUmF3VGV4dChyYXdUZXh0ID8/ICcnKTtcblxuICAgICAgdGhpcy5hZGRBbGwodG9rZW5zKTtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgcHJpdmF0ZSBfdG9rZW5zRnJvbVJhd1RleHQgPSAocmF3VGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSAvWywgXSooW1xcd0BcXC5dKylbLCBdKi9nO1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGxldCBleGVjUmVzdWx0O1xuXG4gICAgd2hpbGUgKChleGVjUmVzdWx0ID0gcmVnZXguZXhlYyhyYXdUZXh0KSkgIT09IG51bGwpIHtcbiAgICAgIHRva2Vucy5wdXNoKGV4ZWNSZXN1bHRbMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNpbmdsZSBuZXcgZW1haWwgYnkgdGhlIGFkZHJlc3NcbiAgICovXG4gIGFkZEVtYWlsID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2soYWRkcmVzcywgdHJ1ZSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfYWRkRW1haWxCbG9jayA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBlbWFpbEJsb2NrID0gbmV3IEVtYWlsQmxvY2soYWRkcmVzcywge1xuICAgICAgb25EZWxldGU6IHRoaXMuX2hhbmRsZURlbGV0ZUVtYWlsQmxvY2ssXG4gICAgfSk7XG4gICAgdGhpcy5fZW1haWxCbG9ja0xpc3QucHVzaChlbWFpbEJsb2NrKTtcblxuICAgIHRoaXMuX2lucHV0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbWFpbEJsb2NrLm1haW5Db250YWluZXIpO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbW92ZUVtYWlsQmxvY2sgPSAoZW1haWxCbG9jazogRW1haWxCbG9jaykgPT4ge1xuICAgIHRoaXMuX2VtYWlsQmxvY2tMaXN0ID0gdGhpcy5fZW1haWxCbG9ja0xpc3QuZmlsdGVyKFxuICAgICAgKGVCKSA9PiBlQi5hZGRyZXNzICE9PSBlbWFpbEJsb2NrLmFkZHJlc3NcbiAgICApO1xuICAgIGVtYWlsQmxvY2suZGVzdHJveSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCB0aGUgY3VycmVudCBlbWFpbHMgYW5kIGNsZWFucyB0aGUgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmVBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5fZW1haWxCbG9ja0xpc3QuZm9yRWFjaCgoZUIpID0+IHRoaXMuX2hhbmRsZURlbGV0ZUVtYWlsQmxvY2soZUIsIGZhbHNlKSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UpIHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UodGhpcy5fZW1haWxCbG9ja0xpc3QpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBzdGF0ZSBhbHRlcmluZyBoYW5kbGVyXG4gICAqXG4gICAqIFRPRE8gY2FuIGltcHJvdmUgdG8gb2JzZXJ2ZSB0aGUgJ3NvdXJjZSBvZiB0cnV0aCcgdGhhdCBpcyB0aGUgZGF0YSBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGhhbmRsZXJzXG4gICAqL1xuICBwcml2YXRlIF9oYW5kbGVDcmVhdGVFbWFpbEJsb2NrID0gKGFkZHJlc3M6IHN0cmluZywgbm90aWZ5T2JzZXJ2ZXI6IGJvb2xlYW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fYWRkRW1haWxCbG9jayhhZGRyZXNzKTtcbiAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gJyc7XG4gICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgICAgaWYgKG5vdGlmeU9ic2VydmVyICYmIHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UpXG4gICAgICAgIHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UodGhpcy5lbWFpbEJsb2NrTGlzdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVE9ETyBpbnNlcnQgYSBtZWNoYW5pc20gdG8ganVzdCBsb2cgZXJyb3IgaW4gZGV2IGJ1aWxkc1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY3VycmVudCBlbWFpbCBsaXN0IHdpdGggdGhlIHByb3ZpZGVkIGxpc3Qgb2YgbmV3IGVtYWlsIGFkZHJlc3Nlc1xuICAgKi9cbiAgcmVwbGFjZUFsbCA9IChlbWFpbEFkZHJlc3NMaXN0OiBzdHJpbmdbXSA9IFtdKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVBbGwoKTtcbiAgICBlbWFpbEFkZHJlc3NMaXN0LmZvckVhY2goKGFkZHJlc3MpID0+IHRoaXMuX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2soYWRkcmVzcywgZmFsc2UpKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSkgdGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSh0aGlzLl9lbWFpbEJsb2NrTGlzdCk7XG4gIH07XG5cbiAgYWRkQWxsID0gKGVtYWlsQWRkcmVzc0xpc3Q6IHN0cmluZ1tdID0gW10pID0+IHtcbiAgICBlbWFpbEFkZHJlc3NMaXN0LmZvckVhY2goKGFkZHJlc3MpID0+IHRoaXMuX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2soYWRkcmVzcywgZmFsc2UpKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSkgdGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSh0aGlzLl9lbWFpbEJsb2NrTGlzdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHN0YXRlIGFsdGVyaW5nIGhhbmRsZXJcbiAgICpcbiAgICogVE9ETyBjYW4gaW1wcm92ZSB0byBvYnNlcnZlIHRoZSAnc291cmNlIG9mIHRydXRoJyB0aGF0IGlzIHRoZSBkYXRhIHByb3BlcnR5IGluc3RlYWQgb2YgaGFuZGxlcnNcbiAgICovXG4gIHByaXZhdGUgX2hhbmRsZURlbGV0ZUVtYWlsQmxvY2sgPSAoXG4gICAgZW1haWxCbG9ja1RvQmVEZWxldGVkOiBFbWFpbEJsb2NrLFxuICAgIG5vdGlmeU9ic2VydmVyOiBib29sZWFuXG4gICkgPT4ge1xuICAgIHRoaXMuX3JlbW92ZUVtYWlsQmxvY2soZW1haWxCbG9ja1RvQmVEZWxldGVkKTtcbiAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIGlmIChub3RpZnlPYnNlcnZlciAmJiB0aGlzLnByb3BzLm9uTWFpbHNMaXN0Q2hhbmdlKVxuICAgICAgdGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSh0aGlzLmVtYWlsQmxvY2tMaXN0KTtcbiAgfTtcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZW1haWxzLWlucHV0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=