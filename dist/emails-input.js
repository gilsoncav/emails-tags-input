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
                _this._destroy();
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
        this._destroy = function () {
            var _a;
            _this.props.onDelete(_this);
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
                _this._handleCreateEmailBlock(_this._input.value);
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
            elem.id = 'input';
            elem.type = 'text';
            elem.placeholder = _this.props.inputPlaceholderText;
            _this._blocksWindow.appendChild(elem);
            elem.addEventListener('keypress', function (evt) {
                if (evt.key === 'Enter' || evt.key === ',') {
                    evt.preventDefault();
                    _this._handleCreateEmailBlock(_this._input.value);
                }
            });
            return elem;
        };
        this.addEmailBlock = function (address) {
            try {
                var emailBlock = new EmailBlock(address, {
                    onDelete: _this._handleDeleteEmailBlock,
                });
                _this._emailList.push(emailBlock);
                _this._input.insertAdjacentElement('beforebegin', emailBlock.mainContainer);
            }
            catch (e) {
                // TODO insert a mechanism to just log error in dev builds
                console.log('gct-emails-input ERROR: ', e);
            }
        };
        this._handleCreateEmailBlock = function (address) {
            _this.addEmailBlock(address);
            _this._input.value = '';
            _this._input.focus();
        };
        this._handleDeleteEmailBlock = function (emailBlockToBeDeleted) {
            console.log('EmailsInput._handleDeleEmailBlock(...)', emailBlockToBeDeleted);
            _this._removeEmailBlock(emailBlockToBeDeleted);
            _this._input.focus();
        };
        this.props = props;
        this._emailList = [];
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
    Object.defineProperty(EmailsInput.prototype, "emailList", {
        get: function () {
            return this._emailList;
        },
        enumerable: false,
        configurable: true
    });
    EmailsInput.prototype._removeEmailBlock = function (emailBlock) {
        this._emailList = this._emailList.filter(function (eB) { return eB.address !== emailBlock.address; });
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vRW1haWxzSW5wdXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0VtYWlsc0lucHV0Ly4vc3JjL2VtYWlscy1pbnB1dC50cyIsIndlYnBhY2s6Ly9FbWFpbHNJbnB1dC8uL3NyYy9zdHlsZXMvZW1haWxzLWlucHV0LnNjc3M/M2YzOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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QUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWxDLHdGQUF3RjtRQUN4RixhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUFJLGtDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUE4RE8sdUNBQWlCLEdBQXpCLFVBQTBCLFVBQXNCO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssU0FBRSxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsT0FBTyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQWFILGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlMRCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhOQUE0Rzs7QUFFOUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiZW1haWxzLWlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW1haWxzLWlucHV0LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nY3QtZW1haWxzLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgLmdjdC1lbWFpbHMtaW5wdXQgKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAuZ2N0LWVtYWlscy1pbnB1dCBsYWJlbCxcXG4gIC5nY3QtZW1haWxzLWlucHV0IGxhYmVsICoge1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4uZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tzLXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4OiAxO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzJjZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHggN3B4OyB9XFxuXFxuLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX192YWxpZCwgLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX19pbnZhbGlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxNTMsIDI1NSwgMC4yKTtcXG4gIGhlaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW46IDAgNnB4IDRweCAwOyB9XFxuICAuZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfX3ZhbGlkIGRpdiwgLmdjdC1lbWFpbHMtaW5wdXRfX2Jsb2NrX19pbnZhbGlkIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfX2ludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkOTI5Mjk7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiA0cHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9lbWFpbHMtaW5wdXQuc2Nzcyc7XG5cbmludGVyZmFjZSBFbWFpbEJsb2NrUHJvcHMge1xuICBvbkRlbGV0ZTogKGVtYWlsQmxvY2tUb0JlRGVsZXRlZDogRW1haWxCbG9jaykgPT4gdm9pZDtcbn1cblxuY2xhc3MgRW1haWxCbG9jayB7XG4gIHN0YXRpYyBrU1ZHX0NMT1NFX0lDT04gPSBgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNMTYgOC44MDU3MUwxNS4xOTQzIDhMMTIgMTEuMTk0M0w4LjgwNTcxIDhMOCA4LjgwNTcxTDExLjE5NDMgMTJMOCAxNS4xOTQzTDguODA1NzEgMTZMMTIgMTIuODA1N0wxNS4xOTQzIDE2TDE2IDE1LjE5NDNMMTIuODA1NyAxMkwxNiA4LjgwNTcxWlwiIGZpbGw9XCJibGFja1wiLz5cbiAgPC9zdmc+YDtcblxuICAvLyBET00gbWFwcGluZyBwcm9wZXJ0aWVzXG4gIHJlYWRvbmx5IG1haW5Db250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IF9jbG9zZUljb25EaXY6IEhUTUxEaXZFbGVtZW50O1xuICAvLyBEYXRhIHByb3BlcnRpZXNcbiAgcmVhZG9ubHkgYWRkcmVzczogc3RyaW5nO1xuICByZWFkb25seSB2YWxpZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgcHJvcHM6IEVtYWlsQmxvY2tQcm9wcztcblxuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBzdHJpbmcsIHByb3BzOiBFbWFpbEJsb2NrUHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgaWYgKGFkZHJlc3MgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBjcmVhdGUgYSBFbWFpbEJsb2NrIHdpdGggYW4gZW1wdHkgZW1haWwgYWRkcmVzcycpO1xuICAgIH1cbiAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgIHRoaXMudmFsaWQgPSB0aGlzLl92YWxpZGF0ZUVtYWlsKGFkZHJlc3MpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lciA9IHRoaXMuX3JlbmRlck1haW5Db250YWluZXIoKTtcbiAgICB0aGlzLl9jbG9zZUljb25EaXYgPSB0aGlzLl9yZW5kZXJDbG9zZUljb25EaXYoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbGlkYXRlRW1haWwgPSAoYWRkcmVzczogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh0aGlzLmFkZHJlc3MpO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckNsb3NlSWNvbkRpdiA9ICgpOiBIVE1MRGl2RWxlbWVudCA9PiB7XG4gICAgLy8gR2VuZXJhdGluZyBhbmQgYXBwZW5kaW5nIHRoZSBjbG9zZSBpY29uXG4gICAgY29uc3QgY2xvc2VJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjbG9zZUljb25EaXYuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcbiAgICBjbG9zZUljb24ub3V0ZXJIVE1MID0gRW1haWxCbG9jay5rU1ZHX0NMT1NFX0lDT047XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlSWNvbkRpdik7XG5cbiAgICBjbG9zZUljb25EaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsb3NlSWNvbkRpdjtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJNYWluQ29udGFpbmVyID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbS5jbGFzc05hbWUgPSAnZ2N0LWVtYWlscy1pbnB1dF9fYmxvY2tfXyc7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gIXRoaXMudmFsaWQgPyAnaW52YWxpZCcgOiAndmFsaWQnO1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdGhpcy5hZGRyZXNzO1xuXG4gICAgZWxlbS5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkRlbGV0ZSh0aGlzKTtcbiAgICB0aGlzLm1haW5Db250YWluZXIucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyKTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEVtYWlsc0lucHV0UHJvcHMge1xuICAvKipcbiAgICogaHRtbCBzdHJpbmcgdG8gYmUgdGhlIGNvbnRlbnQgb2YgdGhlIGxhYmVsXG4gICAqL1xuICBsYWJlbEhUTUxDb250ZW50Pzogc3RyaW5nIHwgbnVsbDtcbiAgaW5wdXRQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcbiAgb25NYWlsc0xpc3RDaGFuZ2U/OiAobWFpbHNMaXN0OiBFbWFpbEJsb2NrW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsc0lucHV0IHtcbiAgcmVhZG9ubHkgcHJvcHM6IEVtYWlsc0lucHV0UHJvcHM7XG4gIC8vIFByb3BlcnRpZXMgbWFwcGluZyBET00gZWxlbWVudHNcbiAgcmVhZG9ubHkgY29udGFpbmVyTm9kZTogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX21haW5Db250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9sYWJlbDogSFRNTFNwYW5FbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBfYmxvY2tzV2luZG93OiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIC8vIERhdGEgcHJvcGVydGllc1xuICBwcml2YXRlIF9lbWFpbExpc3Q6IEVtYWlsQmxvY2tbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb250YWluZXJOb2RlOiBIVE1MRWxlbWVudCxcbiAgICBwcm9wczogRW1haWxzSW5wdXRQcm9wcyA9IHsgaW5wdXRQbGFjZWhvbGRlclRleHQ6ICdhZGQgbW9yZSBlbWFpbHMuLi4nIH1cbiAgKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuX2VtYWlsTGlzdCA9IFtdO1xuICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgLy8gQVRURU5USU9OOiB0aGUgcmVuZGVyIG1ldGhvZHMgdGVuZHMgdG8gcG9zaXRpb24gZWxlbWVudHMgaW4gdGhlIERPTVxuICAgIC8vIGFuZCBhcyBzbywgdGhlIG9yZGVyIG1hdHRlcnMuIFNvbWUgcmVuZGVyaW5nIGNvdW50cyBvbiBwcmV2aW91cyBlbGVtZW50c1xuICAgIC8vIGJlaW5nIGFscmVhZHkgaW4gcGxhY2UuXG4gICAgdGhpcy5fbWFpbkNvbnRhaW5lciA9IHRoaXMuX3JlbmRlck1haW5Db250YWluZXIoKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYWJlbEhUTUxDb250ZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sYWJlbCA9IHRoaXMuX3JlbmRlckxhYmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fYmxvY2tzV2luZG93ID0gdGhpcy5fcmVuZGVyQmxvY2tzV2luZG93KCk7XG4gICAgdGhpcy5faW5wdXQgPSB0aGlzLl9yZW5kZXJJbnB1dCgpO1xuXG4gICAgLy8gTWFraW5nIHN1cmUgdGhhdCB0aGUgbm9kZSBwYXNzZWQgdG8gYmUgdGhlIG1vdW50aW5nIHBvaW50IGhhcyBhIGZsZXggZGlzcGxheSBtb2RlIHNldFxuICAgIGNvbnRhaW5lck5vZGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxuXG4gIGdldCBlbWFpbExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsTGlzdDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlck1haW5Db250YWluZXIgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTmFtZSA9ICdnY3QtZW1haWxzLWlucHV0JztcbiAgICB0aGlzLmNvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXZ0KSA9PiB7fSk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ3JlYXRlRW1haWxCbG9jayh0aGlzLl9pbnB1dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJMYWJlbCA9ICgpOiBIVE1MU3BhbkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVsZW0uaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5sYWJlbEhUTUxDb250ZW50ID8/ICcnO1xuICAgIHRoaXMuX21haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbiAgICByZXR1cm4gZWxlbTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJCbG9ja3NXaW5kb3cgPSAoKTogSFRNTERpdkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtLmNsYXNzTmFtZSA9ICdnY3QtZW1haWxzLWlucHV0X19ibG9ja3Mtd2luZG93JztcbiAgICB0aGlzLl9tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW0pO1xuXG4gICAgcmV0dXJuIGVsZW07XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVySW5wdXQgPSAoKTogSFRNTElucHV0RWxlbWVudCA9PiB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbS5pZCA9ICdpbnB1dCc7XG4gICAgZWxlbS50eXBlID0gJ3RleHQnO1xuICAgIGVsZW0ucGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLmlucHV0UGxhY2Vob2xkZXJUZXh0O1xuICAgIHRoaXMuX2Jsb2Nrc1dpbmRvdy5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleSA9PT0gJywnKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDcmVhdGVFbWFpbEJsb2NrKHRoaXMuX2lucHV0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtO1xuICB9O1xuXG4gIGFkZEVtYWlsQmxvY2sgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGVtYWlsQmxvY2sgPSBuZXcgRW1haWxCbG9jayhhZGRyZXNzLCB7XG4gICAgICAgIG9uRGVsZXRlOiB0aGlzLl9oYW5kbGVEZWxldGVFbWFpbEJsb2NrLFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9lbWFpbExpc3QucHVzaChlbWFpbEJsb2NrKTtcblxuICAgICAgdGhpcy5faW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVtYWlsQmxvY2subWFpbkNvbnRhaW5lcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVE9ETyBpbnNlcnQgYSBtZWNoYW5pc20gdG8ganVzdCBsb2cgZXJyb3IgaW4gZGV2IGJ1aWxkc1xuICAgICAgY29uc29sZS5sb2coJ2djdC1lbWFpbHMtaW5wdXQgRVJST1I6ICcsIGUpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIF9yZW1vdmVFbWFpbEJsb2NrKGVtYWlsQmxvY2s6IEVtYWlsQmxvY2spIHtcbiAgICB0aGlzLl9lbWFpbExpc3QgPSB0aGlzLl9lbWFpbExpc3QuZmlsdGVyKChlQikgPT4gZUIuYWRkcmVzcyAhPT0gZW1haWxCbG9jay5hZGRyZXNzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNyZWF0ZUVtYWlsQmxvY2sgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5hZGRFbWFpbEJsb2NrKGFkZHJlc3MpO1xuICAgIHRoaXMuX2lucHV0LnZhbHVlID0gJyc7XG4gICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgfTtcblxuICBwcml2YXRlIF9oYW5kbGVEZWxldGVFbWFpbEJsb2NrID0gKGVtYWlsQmxvY2tUb0JlRGVsZXRlZDogRW1haWxCbG9jaykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdFbWFpbHNJbnB1dC5faGFuZGxlRGVsZUVtYWlsQmxvY2soLi4uKScsIGVtYWlsQmxvY2tUb0JlRGVsZXRlZCk7XG4gICAgdGhpcy5fcmVtb3ZlRW1haWxCbG9jayhlbWFpbEJsb2NrVG9CZURlbGV0ZWQpO1xuICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gIH07XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VtYWlscy1pbnB1dC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9