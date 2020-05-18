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
exports.push([module.i, ".gct-emails-input {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 auto; }\n  .gct-emails-input * {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 14px; }\n  .gct-emails-input label,\n  .gct-emails-input label * {\n    font-size: 20px; }\n\n.gct-emails-input__blocks-window {\n  display: flex;\n  flex-direction: row;\n  align-content: flex-start;\n  flex: 1;\n  overflow-y: auto;\n  flex-wrap: wrap;\n  background-color: white;\n  border: 1px solid #c3c2cf;\n  border-radius: 4px;\n  margin-top: 24px;\n  padding: 8px 7px; }\n\n.gct-emails-input__block__valid, .gct-emails-input__block__invalid, .gct-emails-input__input-text {\n  height: 24px;\n  font-size: 14px;\n  border-radius: 12px;\n  padding-left: 10px;\n  margin: 0 6px 4px 0; }\n\n.gct-emails-input__block__valid, .gct-emails-input__block__invalid {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgba(102, 153, 255, 0.2); }\n  .gct-emails-input__block__valid div, .gct-emails-input__block__invalid div {\n    display: flex; }\n\n.gct-emails-input__block__invalid {\n  background-color: transparent;\n  border-bottom: 1px dashed #d92929;\n  border-radius: 0;\n  padding-left: 4px; }\n\n.gct-emails-input__input-text {\n  border: none;\n  outline: none; }\n\n.gct-emails-input__input-text:focus {\n  border-radius: 4px;\n  border-left: 1px solid #4262ff;\n  border-right: 1px solid #4262ff; }\n", ""]);
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
            // const closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var closeIcon = document.createElement('svg');
            closeIcon.innerHTML = EmailBlock.kSVG_CLOSE_ICON;
            closeIconDiv.appendChild(closeIcon);
            closeIconDiv.style.display = 'flex';
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
            elem.className = 'gct-emails-input__input-text';
            elem.type = 'text';
            elem.placeholder = _this.props.inputPlaceholderText;
            _this._blocksWindow.appendChild(elem);
            elem.addEventListener('keydown', function (evt) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vRW1haWxzSW5wdXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vc3JjL2VtYWlsLWJsb2NrLnRzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vc3JjL2VtYWlscy1pbnB1dC50cyIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3M/M2YzOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsc0JBQXNCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixtQ0FBbUMsbUJBQW1CLEVBQUUseUJBQXlCLDJDQUEyQyxzQkFBc0IsRUFBRSwyREFBMkQsc0JBQXNCLEVBQUUsc0NBQXNDLGtCQUFrQix3QkFBd0IsOEJBQThCLFlBQVkscUJBQXFCLG9CQUFvQiw0QkFBNEIsOEJBQThCLHVCQUF1QixxQkFBcUIscUJBQXFCLEVBQUUsdUdBQXVHLGlCQUFpQixvQkFBb0Isd0JBQXdCLHVCQUF1Qix3QkFBd0IsRUFBRSx3RUFBd0Usa0JBQWtCLHdCQUF3Qix3QkFBd0IsK0NBQStDLEVBQUUsZ0ZBQWdGLG9CQUFvQixFQUFFLHVDQUF1QyxrQ0FBa0Msc0NBQXNDLHFCQUFxQixzQkFBc0IsRUFBRSxtQ0FBbUMsaUJBQWlCLGtCQUFrQixFQUFFLHlDQUF5Qyx1QkFBdUIsbUNBQW1DLG9DQUFvQyxFQUFFO0FBQ3IrQztBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBTXBDO0lBYUUsb0JBQVksT0FBZSxFQUFFLEtBQXNCO1FBQW5ELGlCQVNDO1FBRU8sbUJBQWMsR0FBRyxVQUFDLE9BQWU7WUFDdkMsT0FBTywwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQztRQUVNLHdCQUFtQixHQUFHO1lBQzVCLDBDQUEwQztZQUMxQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELG1GQUFtRjtZQUNuRixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUNqRCxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNwQyxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUU3QyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBRztnQkFDN0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBRU0seUJBQW9CLEdBQUc7WUFDN0IsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUVwRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztZQUVoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUYsWUFBTyxHQUFHOztZQUNSLFdBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSwwQ0FBRSxXQUFXLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRTtRQUNqRSxDQUFDLENBQUM7UUE5Q0EsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQXJCTSwwQkFBZSxHQUFHLGtTQUVsQixDQUFDO0lBMERWLGlCQUFDO0NBQUE7QUE3RHNCOzs7Ozs7Ozs7Ozs7O0FDTnZCO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ087QUFXM0M7SUFXRSxxQkFDRSxhQUEwQixFQUMxQixLQUF3RTtRQUYxRSxpQkFxQkM7UUFuQkMsa0NBQTRCLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFO1FBeUNsRSx5QkFBb0IsR0FBRztZQUM3QixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7WUFDcEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsSUFBTSxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBRztnQkFDcEMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFTSxpQkFBWSxHQUFHOztZQUNyQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLFNBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsbUNBQUksRUFBRSxDQUFDO1lBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRU0sd0JBQW1CLEdBQUc7WUFDNUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNqQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFTSxpQkFBWSxHQUFHO1lBQ3JCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDbkQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUc7Z0JBQ25DLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7b0JBQzFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDckIsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN2RDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQUc7O2dCQUNqQyxJQUFNLE9BQU8sU0FBRyxHQUFHLENBQUMsYUFBYSwwQ0FBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxFQUFFLENBQUMsQ0FBQztnQkFFdEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFTSx1QkFBa0IsR0FBRyxVQUFDLE9BQWU7WUFDM0MsSUFBTSxLQUFLLEdBQUcsdUJBQXVCLENBQUM7WUFDdEMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksVUFBVSxDQUFDO1lBRWYsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUY7O1dBRUc7UUFDSCxhQUFRLEdBQUcsVUFBQyxPQUFlO1lBQ3pCLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDO1FBRU0sbUJBQWMsR0FBRyxVQUFDLE9BQWU7WUFDdkMsSUFBTSxVQUFVLEdBQUcsSUFBSSx1REFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDekMsUUFBUSxFQUFFLEtBQUksQ0FBQyx1QkFBdUI7YUFDdkMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQztRQUVNLHNCQUFpQixHQUFHLFVBQUMsVUFBc0I7WUFDakQsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsVUFBQyxFQUFFLElBQUssU0FBRSxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsT0FBTyxFQUFqQyxDQUFpQyxDQUMxQyxDQUFDO1lBQ0YsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGOztXQUVHO1FBQ0gsY0FBUyxHQUFHO1lBQ1YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLElBQUssWUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUI7Z0JBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDO1FBRUY7Ozs7V0FJRztRQUNLLDRCQUF1QixHQUFHLFVBQUMsT0FBZSxFQUFFLGNBQXVCO1lBQ3pFLElBQUk7Z0JBQ0YsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixJQUFJLGNBQWMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtvQkFDaEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDckQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDViwwREFBMEQ7YUFDM0Q7UUFDSCxDQUFDLENBQUM7UUFFRjs7V0FFRztRQUNILGVBQVUsR0FBRyxVQUFDLGdCQUErQjtZQUEvQix3REFBK0I7WUFDM0MsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxZQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7WUFDcEYsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtnQkFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUM7UUFFRixXQUFNLEdBQUcsVUFBQyxnQkFBK0I7WUFBL0Isd0RBQStCO1lBQ3ZDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxZQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7WUFDcEYsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtnQkFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUM7UUFFRjs7OztXQUlHO1FBQ0ssNEJBQXVCLEdBQUcsVUFDaEMscUJBQWlDLEVBQ2pDLGNBQXVCO1lBRXZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsSUFBSSxjQUFjLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUI7Z0JBQ2hELEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQztRQXhMQSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxzRUFBc0U7UUFDdEUsMkVBQTJFO1FBQzNFLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVsQyx3RkFBd0Y7UUFDeEYsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQkFBSSx1Q0FBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBRSxJQUFLLFNBQUUsQ0FBQyxPQUFPLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBZ0I7YUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQUMsRUFBRSxJQUFLLFNBQUUsQ0FBQyxLQUFLLEVBQVIsQ0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQWtCO2FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsSUFBSyxRQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQVQsQ0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFvSkgsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcE5ELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE5BQTRHOztBQUU5STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJlbWFpbHMtaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbWFpbHMtaW5wdXQudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdjdC1lbWFpbHMtaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAuZ2N0LWVtYWlscy1pbnB1dCAqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG4gIC5nY3QtZW1haWxzLWlucHV0IGxhYmVsLFxcbiAgLmdjdC1lbWFpbHMtaW5wdXQgbGFiZWwgKiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi5nY3QtZW1haWxzLWlucHV0X19ibG9ja3Mtd2luZG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjMmNmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIHBhZGRpbmc6IDhweCA3cHg7IH1cXG5cXG4uZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfX3ZhbGlkLCAuZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfX2ludmFsaWQsIC5nY3QtZW1haWxzLWlucHV0X19pbnB1dC10ZXh0IHtcXG4gIGhlaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW46IDAgNnB4IDRweCAwOyB9XFxuXFxuLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX192YWxpZCwgLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX19pbnZhbGlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxNTMsIDI1NSwgMC4yKTsgfVxcbiAgLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX192YWxpZCBkaXYsIC5nY3QtZW1haWxzLWlucHV0X19ibG9ja19faW52YWxpZCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX19pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDkyOTI5O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmctbGVmdDogNHB4OyB9XFxuXFxuLmdjdC1lbWFpbHMtaW5wdXRfX2lucHV0LXRleHQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5nY3QtZW1haWxzLWlucHV0X19pbnB1dC10ZXh0OmZvY3VzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQyNjJmZjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MjYyZmY7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9lbWFpbHMtaW5wdXQuc2Nzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxCbG9ja1Byb3BzIHtcbiAgb25EZWxldGU6IChlbWFpbEJsb2NrVG9CZURlbGV0ZWQ6IEVtYWlsQmxvY2ssIG5vdGlmeUNoYW5nZTogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtYWlsQmxvY2sge1xuICBzdGF0aWMga1NWR19DTE9TRV9JQ09OID0gYDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwiTTE2IDguODA1NzFMMTUuMTk0MyA4TDEyIDExLjE5NDNMOC44MDU3MSA4TDggOC44MDU3MUwxMS4xOTQzIDEyTDggMTUuMTk0M0w4LjgwNTcxIDE2TDEyIDEyLjgwNTdMMTUuMTk0MyAxNkwxNiAxNS4xOTQzTDEyLjgwNTcgMTJMMTYgOC44MDU3MVpcIiBmaWxsPVwiYmxhY2tcIi8+XG4gIDwvc3ZnPmA7XG5cbiAgLy8gRE9NIG1hcHBpbmcgcHJvcGVydGllc1xuICByZWFkb25seSBtYWluQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2xvc2VJY29uRGl2OiBIVE1MRGl2RWxlbWVudDtcbiAgLy8gRGF0YSBwcm9wZXJ0aWVzXG4gIHJlYWRvbmx5IGFkZHJlc3M6IHN0cmluZztcbiAgcmVhZG9ubHkgdmFsaWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IHByb3BzOiBFbWFpbEJsb2NrUHJvcHM7XG5cbiAgY29uc3RydWN0b3IoYWRkcmVzczogc3RyaW5nLCBwcm9wczogRW1haWxCbG9ja1Byb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIGlmIChhZGRyZXNzID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgY3JlYXRlIGEgRW1haWxCbG9jayB3aXRoIGFuIGVtcHR5IGVtYWlsIGFkZHJlc3MnKTtcbiAgICB9XG4gICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcbiAgICB0aGlzLnZhbGlkID0gdGhpcy5fdmFsaWRhdGVFbWFpbChhZGRyZXNzKTtcbiAgICB0aGlzLm1haW5Db250YWluZXIgPSB0aGlzLl9yZW5kZXJNYWluQ29udGFpbmVyKCk7XG4gICAgdGhpcy5fY2xvc2VJY29uRGl2ID0gdGhpcy5fcmVuZGVyQ2xvc2VJY29uRGl2KCk7XG4gIH1cblxuICBwcml2YXRlIF92YWxpZGF0ZUVtYWlsID0gKGFkZHJlc3M6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodGhpcy5hZGRyZXNzKTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJDbG9zZUljb25EaXYgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xuICAgIC8vIEdlbmVyYXRpbmcgYW5kIGFwcGVuZGluZyB0aGUgY2xvc2UgaWNvblxuICAgIGNvbnN0IGNsb3NlSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgY2xvc2VJY29uLmlubmVySFRNTCA9IEVtYWlsQmxvY2sua1NWR19DTE9TRV9JQ09OO1xuICAgIGNsb3NlSWNvbkRpdi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuICAgIGNsb3NlSWNvbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUljb25EaXYpO1xuXG4gICAgY2xvc2VJY29uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25EZWxldGUodGhpcywgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xvc2VJY29uRGl2O1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlck1haW5Db250YWluZXIgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTmFtZSA9ICdnY3QtZW1haWxzLWlucHV0X19ibG9ja19fJztcbiAgICBlbGVtLmNsYXNzTmFtZSArPSAhdGhpcy52YWxpZCA/ICdpbnZhbGlkJyA6ICd2YWxpZCc7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSB0aGlzLmFkZHJlc3M7XG5cbiAgICBlbGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgZGVzdHJveSA9ICgpID0+IHtcbiAgICB0aGlzLm1haW5Db250YWluZXIucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyKTtcbiAgfTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3MnO1xuaW1wb3J0IHsgRW1haWxCbG9jayB9IGZyb20gJy4vZW1haWwtYmxvY2snO1xuXG5pbnRlcmZhY2UgRW1haWxzSW5wdXRQcm9wcyB7XG4gIC8qKlxuICAgKiBodG1sIHN0cmluZyB0byBiZSB0aGUgY29udGVudCBvZiB0aGUgbGFiZWxcbiAgICovXG4gIGxhYmVsSFRNTENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsO1xuICBpbnB1dFBsYWNlaG9sZGVyVGV4dDogc3RyaW5nO1xuICBvbk1haWxzTGlzdENoYW5nZT86IChtYWlsc0xpc3Q6IEVtYWlsQmxvY2tbXSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxzSW5wdXQge1xuICByZWFkb25seSBwcm9wczogRW1haWxzSW5wdXRQcm9wcztcbiAgLy8gUHJvcGVydGllcyBtYXBwaW5nIERPTSBlbGVtZW50c1xuICByZWFkb25seSBjb250YWluZXJOb2RlOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfbWFpbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2xhYmVsOiBIVE1MU3BhbkVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIF9ibG9ja3NXaW5kb3c6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9pbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgLy8gRGF0YSBwcm9wZXJ0aWVzXG4gIHByaXZhdGUgX2VtYWlsQmxvY2tMaXN0OiBFbWFpbEJsb2NrW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29udGFpbmVyTm9kZTogSFRNTEVsZW1lbnQsXG4gICAgcHJvcHM6IEVtYWlsc0lucHV0UHJvcHMgPSB7IGlucHV0UGxhY2Vob2xkZXJUZXh0OiAnYWRkIG1vcmUgZW1haWxzLi4uJyB9XG4gICkge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLl9lbWFpbEJsb2NrTGlzdCA9IFtdO1xuICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgLy8gQVRURU5USU9OOiB0aGUgcmVuZGVyIG1ldGhvZHMgdGVuZHMgdG8gcG9zaXRpb24gZWxlbWVudHMgaW4gdGhlIERPTVxuICAgIC8vIGFuZCBhcyBzbywgdGhlIG9yZGVyIG1hdHRlcnMuIFNvbWUgcmVuZGVyaW5nIGNvdW50cyBvbiBwcmV2aW91cyBlbGVtZW50c1xuICAgIC8vIGJlaW5nIGFscmVhZHkgaW4gcGxhY2UuXG4gICAgdGhpcy5fbWFpbkNvbnRhaW5lciA9IHRoaXMuX3JlbmRlck1haW5Db250YWluZXIoKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYWJlbEhUTUxDb250ZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sYWJlbCA9IHRoaXMuX3JlbmRlckxhYmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fYmxvY2tzV2luZG93ID0gdGhpcy5fcmVuZGVyQmxvY2tzV2luZG93KCk7XG4gICAgdGhpcy5faW5wdXQgPSB0aGlzLl9yZW5kZXJJbnB1dCgpO1xuXG4gICAgLy8gTWFraW5nIHN1cmUgdGhhdCB0aGUgbm9kZSBwYXNzZWQgdG8gYmUgdGhlIG1vdW50aW5nIHBvaW50IGhhcyBhIGZsZXggZGlzcGxheSBtb2RlIHNldFxuICAgIGNvbnRhaW5lck5vZGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxuXG4gIGdldCBlbWFpbEJsb2NrTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxCbG9ja0xpc3Q7XG4gIH1cblxuICBnZXQgZW1haWxMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbEJsb2NrTGlzdC5tYXAoKGVCKSA9PiBlQi5hZGRyZXNzKTtcbiAgfVxuXG4gIGdldCB2YWxpZEVtYWlsc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbEJsb2NrTGlzdC5maWx0ZXIoKGVCKSA9PiBlQi52YWxpZCkubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGludmFsaWRFbWFpbHNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxCbG9ja0xpc3QuZmlsdGVyKChlQikgPT4gIWVCLnZhbGlkKS5sZW5ndGg7XG4gIH1cblxuICBnZXQgZW1haWxzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsQmxvY2tMaXN0Lmxlbmd0aDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlck1haW5Db250YWluZXIgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTmFtZSA9ICdnY3QtZW1haWxzLWlucHV0JztcbiAgICB0aGlzLmNvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXZ0KSA9PiB7fSk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ3JlYXRlRW1haWxCbG9jayh0aGlzLl9pbnB1dC52YWx1ZSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJMYWJlbCA9ICgpOiBIVE1MU3BhbkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVsZW0uaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5sYWJlbEhUTUxDb250ZW50ID8/ICcnO1xuICAgIHRoaXMuX21haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJCbG9ja3NXaW5kb3cgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTmFtZSA9ICdnY3QtZW1haWxzLWlucHV0X19ibG9ja3Mtd2luZG93JztcbiAgICB0aGlzLl9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW0pO1xuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJJbnB1dCA9ICgpOiBIVE1MSW5wdXRFbGVtZW50ID0+IHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbGVtLmNsYXNzTmFtZSA9ICdnY3QtZW1haWxzLWlucHV0X19pbnB1dC10ZXh0JztcbiAgICBlbGVtLnR5cGUgPSAndGV4dCc7XG4gICAgZWxlbS5wbGFjZWhvbGRlciA9IHRoaXMucHJvcHMuaW5wdXRQbGFjZWhvbGRlclRleHQ7XG4gICAgdGhpcy5fYmxvY2tzV2luZG93LmFwcGVuZENoaWxkKGVsZW0pO1xuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleSA9PT0gJywnKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDcmVhdGVFbWFpbEJsb2NrKHRoaXMuX2lucHV0LnZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgKGV2dCkgPT4ge1xuICAgICAgY29uc3QgcmF3VGV4dCA9IGV2dC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl90b2tlbnNGcm9tUmF3VGV4dChyYXdUZXh0ID8/ICcnKTtcblxuICAgICAgdGhpcy5hZGRBbGwodG9rZW5zKTtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgcHJpdmF0ZSBfdG9rZW5zRnJvbVJhd1RleHQgPSAocmF3VGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSAvWywgXSooW1xcd0BcXC5dKylbLCBdKi9nO1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGxldCBleGVjUmVzdWx0O1xuXG4gICAgd2hpbGUgKChleGVjUmVzdWx0ID0gcmVnZXguZXhlYyhyYXdUZXh0KSkgIT09IG51bGwpIHtcbiAgICAgIHRva2Vucy5wdXNoKGV4ZWNSZXN1bHRbMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNpbmdsZSBuZXcgZW1haWwgYnkgdGhlIGFkZHJlc3NcbiAgICovXG4gIGFkZEVtYWlsID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2soYWRkcmVzcywgdHJ1ZSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfYWRkRW1haWxCbG9jayA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBlbWFpbEJsb2NrID0gbmV3IEVtYWlsQmxvY2soYWRkcmVzcywge1xuICAgICAgb25EZWxldGU6IHRoaXMuX2hhbmRsZURlbGV0ZUVtYWlsQmxvY2ssXG4gICAgfSk7XG4gICAgdGhpcy5fZW1haWxCbG9ja0xpc3QucHVzaChlbWFpbEJsb2NrKTtcblxuICAgIHRoaXMuX2lucHV0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbWFpbEJsb2NrLm1haW5Db250YWluZXIpO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbW92ZUVtYWlsQmxvY2sgPSAoZW1haWxCbG9jazogRW1haWxCbG9jaykgPT4ge1xuICAgIHRoaXMuX2VtYWlsQmxvY2tMaXN0ID0gdGhpcy5fZW1haWxCbG9ja0xpc3QuZmlsdGVyKFxuICAgICAgKGVCKSA9PiBlQi5hZGRyZXNzICE9PSBlbWFpbEJsb2NrLmFkZHJlc3NcbiAgICApO1xuICAgIGVtYWlsQmxvY2suZGVzdHJveSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCB0aGUgY3VycmVudCBlbWFpbHMgYW5kIGNsZWFucyB0aGUgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmVBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5fZW1haWxCbG9ja0xpc3QuZm9yRWFjaCgoZUIpID0+IHRoaXMuX2hhbmRsZURlbGV0ZUVtYWlsQmxvY2soZUIsIGZhbHNlKSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UpIHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UodGhpcy5fZW1haWxCbG9ja0xpc3QpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBzdGF0ZSBhbHRlcmluZyBoYW5kbGVyXG4gICAqXG4gICAqIFRPRE8gY2FuIGltcHJvdmUgdG8gb2JzZXJ2ZSB0aGUgJ3NvdXJjZSBvZiB0cnV0aCcgdGhhdCBpcyB0aGUgZGF0YSBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGhhbmRsZXJzXG4gICAqL1xuICBwcml2YXRlIF9oYW5kbGVDcmVhdGVFbWFpbEJsb2NrID0gKGFkZHJlc3M6IHN0cmluZywgbm90aWZ5T2JzZXJ2ZXI6IGJvb2xlYW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fYWRkRW1haWxCbG9jayhhZGRyZXNzKTtcbiAgICAgIHRoaXMuX2lucHV0LnZhbHVlID0gJyc7XG4gICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgICAgaWYgKG5vdGlmeU9ic2VydmVyICYmIHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UpXG4gICAgICAgIHRoaXMucHJvcHMub25NYWlsc0xpc3RDaGFuZ2UodGhpcy5lbWFpbEJsb2NrTGlzdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVE9ETyBpbnNlcnQgYSBtZWNoYW5pc20gdG8ganVzdCBsb2cgZXJyb3IgaW4gZGV2IGJ1aWxkc1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY3VycmVudCBlbWFpbCBsaXN0IHdpdGggdGhlIHByb3ZpZGVkIGxpc3Qgb2YgbmV3IGVtYWlsIGFkZHJlc3Nlc1xuICAgKi9cbiAgcmVwbGFjZUFsbCA9IChlbWFpbEFkZHJlc3NMaXN0OiBzdHJpbmdbXSA9IFtdKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVBbGwoKTtcbiAgICBlbWFpbEFkZHJlc3NMaXN0LmZvckVhY2goKGFkZHJlc3MpID0+IHRoaXMuX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2soYWRkcmVzcywgZmFsc2UpKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSkgdGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSh0aGlzLl9lbWFpbEJsb2NrTGlzdCk7XG4gIH07XG5cbiAgYWRkQWxsID0gKGVtYWlsQWRkcmVzc0xpc3Q6IHN0cmluZ1tdID0gW10pID0+IHtcbiAgICBlbWFpbEFkZHJlc3NMaXN0LmZvckVhY2goKGFkZHJlc3MpID0+IHRoaXMuX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2soYWRkcmVzcywgZmFsc2UpKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSkgdGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSh0aGlzLl9lbWFpbEJsb2NrTGlzdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHN0YXRlIGFsdGVyaW5nIGhhbmRsZXJcbiAgICpcbiAgICogVE9ETyBjYW4gaW1wcm92ZSB0byBvYnNlcnZlIHRoZSAnc291cmNlIG9mIHRydXRoJyB0aGF0IGlzIHRoZSBkYXRhIHByb3BlcnR5IGluc3RlYWQgb2YgaGFuZGxlcnNcbiAgICovXG4gIHByaXZhdGUgX2hhbmRsZURlbGV0ZUVtYWlsQmxvY2sgPSAoXG4gICAgZW1haWxCbG9ja1RvQmVEZWxldGVkOiBFbWFpbEJsb2NrLFxuICAgIG5vdGlmeU9ic2VydmVyOiBib29sZWFuXG4gICkgPT4ge1xuICAgIHRoaXMuX3JlbW92ZUVtYWlsQmxvY2soZW1haWxCbG9ja1RvQmVEZWxldGVkKTtcbiAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIGlmIChub3RpZnlPYnNlcnZlciAmJiB0aGlzLnByb3BzLm9uTWFpbHNMaXN0Q2hhbmdlKVxuICAgICAgdGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSh0aGlzLmVtYWlsQmxvY2tMaXN0KTtcbiAgfTtcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZW1haWxzLWlucHV0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=