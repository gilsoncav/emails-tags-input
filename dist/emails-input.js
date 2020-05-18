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
            return elem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vRW1haWxzSW5wdXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vc3JjL2VtYWlsLWJsb2NrLnRzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vc3JjL2VtYWlscy1pbnB1dC50cyIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3M/M2YzOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Es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ZSI6ImVtYWlscy1pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VtYWlscy1pbnB1dC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2N0LWVtYWlscy1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMSAxIGF1dG87IH1cXG4gIC5nY3QtZW1haWxzLWlucHV0ICoge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgLmdjdC1lbWFpbHMtaW5wdXQgbGFiZWwsXFxuICAuZ2N0LWVtYWlscy1pbnB1dCBsYWJlbCAqIHtcXG4gICAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2Nrcy13aW5kb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleDogMTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MyY2Y7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgcGFkZGluZzogOHB4IDdweDsgfVxcblxcbi5nY3QtZW1haWxzLWlucHV0X19ibG9ja19fdmFsaWQsIC5nY3QtZW1haWxzLWlucHV0X19ibG9ja19faW52YWxpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTUzLCAyNTUsIDAuMik7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luOiAwIDZweCA0cHggMDsgfVxcbiAgLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX192YWxpZCBkaXYsIC5nY3QtZW1haWxzLWlucHV0X19ibG9ja19faW52YWxpZCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX19pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDkyOTI5O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmctbGVmdDogNHB4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCAnLi9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsQmxvY2tQcm9wcyB7XG4gIG9uRGVsZXRlOiAoZW1haWxCbG9ja1RvQmVEZWxldGVkOiBFbWFpbEJsb2NrLCBub3RpZnlDaGFuZ2U6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbWFpbEJsb2NrIHtcbiAgc3RhdGljIGtTVkdfQ0xPU0VfSUNPTiA9IGA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk0xNiA4LjgwNTcxTDE1LjE5NDMgOEwxMiAxMS4xOTQzTDguODA1NzEgOEw4IDguODA1NzFMMTEuMTk0MyAxMkw4IDE1LjE5NDNMOC44MDU3MSAxNkwxMiAxMi44MDU3TDE1LjE5NDMgMTZMMTYgMTUuMTk0M0wxMi44MDU3IDEyTDE2IDguODA1NzFaXCIgZmlsbD1cImJsYWNrXCIvPlxuICA8L3N2Zz5gO1xuXG4gIC8vIERPTSBtYXBwaW5nIHByb3BlcnRpZXNcbiAgcmVhZG9ubHkgbWFpbkNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Nsb3NlSWNvbkRpdjogSFRNTERpdkVsZW1lbnQ7XG4gIC8vIERhdGEgcHJvcGVydGllc1xuICByZWFkb25seSBhZGRyZXNzOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHZhbGlkOiBib29sZWFuO1xuICByZWFkb25seSBwcm9wczogRW1haWxCbG9ja1Byb3BzO1xuXG4gIGNvbnN0cnVjdG9yKGFkZHJlc3M6IHN0cmluZywgcHJvcHM6IEVtYWlsQmxvY2tQcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICBpZiAoYWRkcmVzcyA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGNyZWF0ZSBhIEVtYWlsQmxvY2sgd2l0aCBhbiBlbXB0eSBlbWFpbCBhZGRyZXNzJyk7XG4gICAgfVxuICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgdGhpcy52YWxpZCA9IHRoaXMuX3ZhbGlkYXRlRW1haWwoYWRkcmVzcyk7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyID0gdGhpcy5fcmVuZGVyTWFpbkNvbnRhaW5lcigpO1xuICAgIHRoaXMuX2Nsb3NlSWNvbkRpdiA9IHRoaXMuX3JlbmRlckNsb3NlSWNvbkRpdigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsaWRhdGVFbWFpbCA9IChhZGRyZXNzOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHRoaXMuYWRkcmVzcyk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyQ2xvc2VJY29uRGl2ID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgICAvLyBHZW5lcmF0aW5nIGFuZCBhcHBlbmRpbmcgdGhlIGNsb3NlIGljb25cbiAgICBjb25zdCBjbG9zZUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNsb3NlSWNvbkRpdi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuICAgIGNsb3NlSWNvbi5vdXRlckhUTUwgPSBFbWFpbEJsb2NrLmtTVkdfQ0xPU0VfSUNPTjtcbiAgICB0aGlzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VJY29uRGl2KTtcblxuICAgIGNsb3NlSWNvbkRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uRGVsZXRlKHRoaXMsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsb3NlSWNvbkRpdjtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJNYWluQ29udGFpbmVyID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc05hbWUgPSAnZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfXyc7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gIXRoaXMudmFsaWQgPyAnaW52YWxpZCcgOiAndmFsaWQnO1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdGhpcy5hZGRyZXNzO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHRoaXMubWFpbkNvbnRhaW5lcik7XG4gIH07XG59XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2VtYWlscy1pbnB1dC5zY3NzJztcbmltcG9ydCB7IEVtYWlsQmxvY2sgfSBmcm9tICcuL2VtYWlsLWJsb2NrJztcblxuaW50ZXJmYWNlIEVtYWlsc0lucHV0UHJvcHMge1xuICAvKipcbiAgICogaHRtbCBzdHJpbmcgdG8gYmUgdGhlIGNvbnRlbnQgb2YgdGhlIGxhYmVsXG4gICAqL1xuICBsYWJlbEhUTUxDb250ZW50Pzogc3RyaW5nIHwgbnVsbDtcbiAgaW5wdXRQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcbiAgb25NYWlsc0xpc3RDaGFuZ2U/OiAobWFpbHNMaXN0OiBFbWFpbEJsb2NrW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsc0lucHV0IHtcbiAgcmVhZG9ubHkgcHJvcHM6IEVtYWlsc0lucHV0UHJvcHM7XG4gIC8vIFByb3BlcnRpZXMgbWFwcGluZyBET00gZWxlbWVudHNcbiAgcmVhZG9ubHkgY29udGFpbmVyTm9kZTogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX21haW5Db250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9sYWJlbDogSFRNTFNwYW5FbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBfYmxvY2tzV2luZG93OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIC8vIERhdGEgcHJvcGVydGllc1xuICBwcml2YXRlIF9lbWFpbEJsb2NrTGlzdDogRW1haWxCbG9ja1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRhaW5lck5vZGU6IEhUTUxFbGVtZW50LFxuICAgIHByb3BzOiBFbWFpbHNJbnB1dFByb3BzID0geyBpbnB1dFBsYWNlaG9sZGVyVGV4dDogJ2FkZCBtb3JlIGVtYWlscy4uLicgfVxuICApIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5fZW1haWxCbG9ja0xpc3QgPSBbXTtcbiAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSBjb250YWluZXJOb2RlO1xuICAgIC8vIEFUVEVOVElPTjogdGhlIHJlbmRlciBtZXRob2RzIHRlbmRzIHRvIHBvc2l0aW9uIGVsZW1lbnRzIGluIHRoZSBET01cbiAgICAvLyBhbmQgYXMgc28sIHRoZSBvcmRlciBtYXR0ZXJzLiBTb21lIHJlbmRlcmluZyBjb3VudHMgb24gcHJldmlvdXMgZWxlbWVudHNcbiAgICAvLyBiZWluZyBhbHJlYWR5IGluIHBsYWNlLlxuICAgIHRoaXMuX21haW5Db250YWluZXIgPSB0aGlzLl9yZW5kZXJNYWluQ29udGFpbmVyKCk7XG4gICAgaWYgKHRoaXMucHJvcHMubGFiZWxIVE1MQ29udGVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbGFiZWwgPSB0aGlzLl9yZW5kZXJMYWJlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYWJlbCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2Jsb2Nrc1dpbmRvdyA9IHRoaXMuX3JlbmRlckJsb2Nrc1dpbmRvdygpO1xuICAgIHRoaXMuX2lucHV0ID0gdGhpcy5fcmVuZGVySW5wdXQoKTtcblxuICAgIC8vIE1ha2luZyBzdXJlIHRoYXQgdGhlIG5vZGUgcGFzc2VkIHRvIGJlIHRoZSBtb3VudGluZyBwb2ludCBoYXMgYSBmbGV4IGRpc3BsYXkgbW9kZSBzZXRcbiAgICBjb250YWluZXJOb2RlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cblxuICBnZXQgZW1haWxCbG9ja0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsQmxvY2tMaXN0O1xuICB9XG5cbiAgZ2V0IGVtYWlsTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxCbG9ja0xpc3QubWFwKChlQikgPT4gZUIuYWRkcmVzcyk7XG4gIH1cblxuICBnZXQgdmFsaWRFbWFpbHNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxCbG9ja0xpc3QuZmlsdGVyKChlQikgPT4gZUIudmFsaWQpLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBpbnZhbGlkRW1haWxzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsQmxvY2tMaXN0LmZpbHRlcigoZUIpID0+ICFlQi52YWxpZCkubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGVtYWlsc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbEJsb2NrTGlzdC5sZW5ndGg7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJNYWluQ29udGFpbmVyID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc05hbWUgPSAnZ2N0LWVtYWlscy1pbnB1dCc7XG4gICAgdGhpcy5jb250YWluZXJOb2RlLmFwcGVuZENoaWxkKGVsZW0pO1xuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2dCkgPT4ge30pO1xuXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldnQpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2sodGhpcy5faW5wdXQudmFsdWUsIHRydWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyTGFiZWwgPSAoKTogSFRNTFNwYW5FbGVtZW50ID0+IHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlbGVtLmlubmVySFRNTCA9IHRoaXMucHJvcHMubGFiZWxIVE1MQ29udGVudCA/PyAnJztcbiAgICB0aGlzLl9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW0pO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyQmxvY2tzV2luZG93ID0gKCk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc05hbWUgPSAnZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tzLXdpbmRvdyc7XG4gICAgdGhpcy5fbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlcklucHV0ID0gKCk6IEhUTUxJbnB1dEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVsZW0udHlwZSA9ICd0ZXh0JztcbiAgICBlbGVtLnBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5pbnB1dFBsYWNlaG9sZGVyVGV4dDtcbiAgICB0aGlzLl9ibG9ja3NXaW5kb3cuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXkgPT09ICcsJykge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ3JlYXRlRW1haWxCbG9jayh0aGlzLl9pbnB1dC52YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgc2luZ2xlIG5ldyBlbWFpbCBieSB0aGUgYWRkcmVzc1xuICAgKi9cbiAgYWRkRW1haWwgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5faGFuZGxlQ3JlYXRlRW1haWxCbG9jayhhZGRyZXNzLCB0cnVlKTtcbiAgfTtcblxuICBwcml2YXRlIF9hZGRFbWFpbEJsb2NrID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGVtYWlsQmxvY2sgPSBuZXcgRW1haWxCbG9jayhhZGRyZXNzLCB7XG4gICAgICBvbkRlbGV0ZTogdGhpcy5faGFuZGxlRGVsZXRlRW1haWxCbG9jayxcbiAgICB9KTtcbiAgICB0aGlzLl9lbWFpbEJsb2NrTGlzdC5wdXNoKGVtYWlsQmxvY2spO1xuXG4gICAgdGhpcy5faW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVtYWlsQmxvY2subWFpbkNvbnRhaW5lcik7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlRW1haWxCbG9jayA9IChlbWFpbEJsb2NrOiBFbWFpbEJsb2NrKSA9PiB7XG4gICAgdGhpcy5fZW1haWxCbG9ja0xpc3QgPSB0aGlzLl9lbWFpbEJsb2NrTGlzdC5maWx0ZXIoXG4gICAgICAoZUIpID0+IGVCLmFkZHJlc3MgIT09IGVtYWlsQmxvY2suYWRkcmVzc1xuICAgICk7XG4gICAgZW1haWxCbG9jay5kZXN0cm95KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIHRoZSBjdXJyZW50IGVtYWlscyBhbmQgY2xlYW5zIHRoZSBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICB0aGlzLl9lbWFpbEJsb2NrTGlzdC5mb3JFYWNoKChlQikgPT4gdGhpcy5faGFuZGxlRGVsZXRlRW1haWxCbG9jayhlQiwgZmFsc2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogSW50ZXJuYWwgc3RhdGUgYWx0ZXJpbmcgaGFuZGxlclxuICAgKlxuICAgKiBUT0RPIGNhbiBpbXByb3ZlIHRvIG9ic2VydmUgdGhlICdzb3VyY2Ugb2YgdHJ1dGgnIHRoYXQgaXMgdGhlIGRhdGEgcHJvcGVydHkgaW5zdGVhZCBvZiBoYW5kbGVyc1xuICAgKi9cbiAgcHJpdmF0ZSBfaGFuZGxlQ3JlYXRlRW1haWxCbG9jayA9IChhZGRyZXNzOiBzdHJpbmcsIG5vdGlmeU9ic2VydmVyOiBib29sZWFuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2FkZEVtYWlsQmxvY2soYWRkcmVzcyk7XG4gICAgICB0aGlzLl9pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgICAgIGlmIChub3RpZnlPYnNlcnZlciAmJiB0aGlzLnByb3BzLm9uTWFpbHNMaXN0Q2hhbmdlKVxuICAgICAgICB0aGlzLnByb3BzLm9uTWFpbHNMaXN0Q2hhbmdlKHRoaXMuZW1haWxCbG9ja0xpc3QpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gaW5zZXJ0IGEgbWVjaGFuaXNtIHRvIGp1c3QgbG9nIGVycm9yIGluIGRldiBidWlsZHNcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgZW1haWwgbGlzdCB3aXRoIHRoZSBwcm92aWRlZCBsaXN0IG9mIG5ldyBlbWFpbCBhZGRyZXNzZXNcbiAgICovXG4gIHJlcGxhY2VBbGwgPSAoZW1haWxBZGRyZXNzTGlzdDogc3RyaW5nW10gPSBbXSkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQWxsKCk7XG4gICAgZW1haWxBZGRyZXNzTGlzdC5mb3JFYWNoKChhZGRyZXNzKSA9PiB0aGlzLl9oYW5kbGVDcmVhdGVFbWFpbEJsb2NrKGFkZHJlc3MsIGZhbHNlKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHN0YXRlIGFsdGVyaW5nIGhhbmRsZXJcbiAgICpcbiAgICogVE9ETyBjYW4gaW1wcm92ZSB0byBvYnNlcnZlIHRoZSAnc291cmNlIG9mIHRydXRoJyB0aGF0IGlzIHRoZSBkYXRhIHByb3BlcnR5IGluc3RlYWQgb2YgaGFuZGxlcnNcbiAgICovXG4gIHByaXZhdGUgX2hhbmRsZURlbGV0ZUVtYWlsQmxvY2sgPSAoXG4gICAgZW1haWxCbG9ja1RvQmVEZWxldGVkOiBFbWFpbEJsb2NrLFxuICAgIG5vdGlmeU9ic2VydmVyOiBib29sZWFuXG4gICkgPT4ge1xuICAgIHRoaXMuX3JlbW92ZUVtYWlsQmxvY2soZW1haWxCbG9ja1RvQmVEZWxldGVkKTtcbiAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIGlmIChub3RpZnlPYnNlcnZlciAmJiB0aGlzLnByb3BzLm9uTWFpbHNMaXN0Q2hhbmdlKVxuICAgICAgdGhpcy5wcm9wcy5vbk1haWxzTGlzdENoYW5nZSh0aGlzLmVtYWlsQmxvY2tMaXN0KTtcbiAgfTtcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZW1haWxzLWlucHV0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=