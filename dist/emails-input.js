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
//# sourceMappingURL=emails-input.js.map