"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Products/ProductView.js":
/*!***************************************************!*\
  !*** ./components/layout/Products/ProductView.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ViewProductModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ViewProductModal */ \"./components/layout/ViewProductModal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar ProductView = function(param) {\n    var data = param.data;\n    var numberWithCommas = function numberWithCommas(x) {\n        return x.toString().replace(/\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))/g, \",\");\n    };\n    var ref;\n    _s1();\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref1[0], setOpen = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        class: \"col-sm-12\",\n        __source: {\n            fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                class: \"block2\",\n                __source: {\n                    fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        class: \"block2-pic hov-img0\",\n                        __source: {\n                            fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: data === null || data === void 0 ? void 0 : (ref = data.image) === null || ref === void 0 ? void 0 : ref.thumbnailUrl,\n                                alt: data === null || data === void 0 ? void 0 : data.name,\n                                __source: {\n                                    fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 17\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"#\",\n                                class: \"block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1\",\n                                __source: {\n                                    fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: \"Quick View\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        class: \"block2-txt flex-w flex-t p-t-14\",\n                        __source: {\n                            fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                class: \"block2-txt-child1 flex-col-l \",\n                                __source: {\n                                    fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        href: \"product-detail.html\",\n                                        class: \"stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6\",\n                                        __source: {\n                                            fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 21\n                                        },\n                                        __self: _this,\n                                        children: data === null || data === void 0 ? void 0 : data.name\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        class: \"stext-105 cl3\",\n                                        __source: {\n                                            fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 21\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            \"₹\",\n                                            numberWithCommas(data === null || data === void 0 ? void 0 : data.price)\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                class: \"block2-txt-child2 flex-r p-t-3\",\n                                __source: {\n                                    fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                    href: \"#\",\n                                    class: \"btn-addwish-b2 dis-block pos-relative js-addwish-b2\",\n                                    __source: {\n                                        fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            class: \"icon-heart1 dis-block trans-04\",\n                                            src: \"images/icons/icon-heart-01.png\",\n                                            alt: \"ICON\",\n                                            __source: {\n                                                fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 25\n                                            },\n                                            __self: _this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            class: \"icon-heart2 dis-block trans-04 ab-t-l\",\n                                            src: \"images/icons/icon-heart-02.png\",\n                                            alt: \"ICON\",\n                                            __source: {\n                                                fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 25\n                                            },\n                                            __self: _this\n                                        })\n                                    ]\n                                })\n                            })\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ViewProductModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data,\n                open: open,\n                toggle: function() {\n                    return setOpen(!open);\n                },\n                __source: {\n                    fileName: \"C:\\\\programming\\\\Ecom2023\\\\nnp\\\\components\\\\layout\\\\Products\\\\ProductView.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s1(ProductView, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = ProductView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductView);\nvar _c;\n$RefreshReg$(_c, \"ProductView\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0cy9Qcm9kdWN0Vmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxHQUFLLENBQUNFLFdBQVcsR0FBRyxRQUFRLFFBQUksQ0FBQztRQUFYQyxJQUFJLFNBQUpBLElBQUk7UUFFYkMsZ0JBQWdCLEdBQXpCLFFBQVEsQ0FBQ0EsZ0JBQWdCLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQ0EsQ0FBQyxDQUFDQyxRQUFRLEdBQUdDLE9BQU8sb0NBQW9DLENBQUc7SUFDdEUsQ0FBQztRQU1xQkosR0FBVzs7SUFUakMsR0FBSyxDQUFtQkgsSUFBcUIsa0JBQXJCQSxxREFBYyxDQUFDLEtBQUssT0FBckNTLElBQUksR0FBYVQsSUFBcUIsS0FBaENVLE9BQU8sR0FBSVYsSUFBcUI7SUFLN0MsTUFBTSx1RUFDRFcsQ0FBRztRQUFDQyxLQUFLLEVBQUMsQ0FBVzs7Ozs7Ozs7a0ZBQ3JCRCxDQUFHO2dCQUFDQyxLQUFLLEVBQUMsQ0FBUTs7Ozs7Ozs7MEZBQ2RELENBQUc7d0JBQUNDLEtBQUssRUFBQyxDQUFxQjs7Ozs7Ozs7aUdBQzNCQyxDQUFHO2dDQUFDQyxHQUFHLEVBQUVYLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLElBQVhBLEdBQVcsR0FBWEEsSUFBSSxDQUFFWSxLQUFLLGNBQVhaLEdBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxHQUFXLENBQUVhLFlBQVk7Z0NBQUVDLEdBQUcsRUFBRWQsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFFZSxJQUFJOzs7Ozs7OztpR0FFbkRDLENBQUM7Z0NBQUNDLElBQUksRUFBQyxDQUFHO2dDQUFDUixLQUFLLEVBQUMsQ0FBOEY7Ozs7Ozs7MENBQUMsQ0FFakg7Ozs7MEZBR0hELENBQUc7d0JBQUNDLEtBQUssRUFBQyxDQUFpQzs7Ozs7Ozs7a0dBQ3ZDRCxDQUFHO2dDQUFDQyxLQUFLLEVBQUMsQ0FBK0I7Ozs7Ozs7O3lHQUNyQ08sQ0FBQzt3Q0FBQ0MsSUFBSSxFQUFDLENBQXFCO3dDQUFDUixLQUFLLEVBQUMsQ0FBaUQ7Ozs7Ozs7a0RBQ2hGVCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUVlLElBQUk7OzBHQUdkRyxDQUFJO3dDQUFDVCxLQUFLLEVBQUMsQ0FBZTs7Ozs7Ozs7NENBQUMsQ0FDM0I7NENBQUNSLGdCQUFnQixDQUFDRCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUVtQixLQUFLOzs7OztpR0FJakNYLENBQUc7Z0NBQUNDLEtBQUssRUFBQyxDQUFnQzs7Ozs7OztnSEFDdENPLENBQUM7b0NBQUNDLElBQUksRUFBQyxDQUFHO29DQUFDUixLQUFLLEVBQUMsQ0FBcUQ7Ozs7Ozs7OzZHQUNsRUMsQ0FBRzs0Q0FBQ0QsS0FBSyxFQUFDLENBQWdDOzRDQUFDRSxHQUFHLEVBQUMsQ0FBZ0M7NENBQUNHLEdBQUcsRUFBQyxDQUFNOzs7Ozs7Ozs2R0FDMUZKLENBQUc7NENBQUNELEtBQUssRUFBQyxDQUF1Qzs0Q0FBQ0UsR0FBRyxFQUFDLENBQWdDOzRDQUFDRyxHQUFHLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7O2lGQUtqSGhCLHlEQUFnQjtnQkFBQ0UsSUFBSSxFQUFFQSxJQUFJO2dCQUFFTSxJQUFJLEVBQUVBLElBQUk7Z0JBQUVjLE1BQU0sRUFBRSxRQUFRO29CQUFKYixNQUFNLENBQU5BLE9BQU8sRUFBRUQsSUFBSTs7Ozs7Ozs7Ozs7QUFHM0UsQ0FBQztJQXZDS1AsV0FBVztLQUFYQSxXQUFXO0FBeUNqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0cy9Qcm9kdWN0Vmlldy5qcz84YjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFZpZXdQcm9kdWN0TW9kYWwgZnJvbSAnLi4vVmlld1Byb2R1Y3RNb2RhbCc7XHJcblxyXG5jb25zdCBQcm9kdWN0VmlldyA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGZ1bmN0aW9uIG51bWJlcldpdGhDb21tYXMoeCkge1xyXG4gICAgICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD88IVxcLlxcZCopKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2syXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jazItcGljIGhvdi1pbWcwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YT8uaW1hZ2U/LnRodW1ibmFpbFVybH0gYWx0PXtkYXRhPy5uYW1lfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJibG9jazItYnRuIGZsZXgtYy1tIHN0ZXh0LTEwMyBjbDIgc2l6ZS0xMDIgYmcwIGJvcjIgaG92LWJ0bjEgcC1sci0xNSB0cmFucy0wNCBqcy1zaG93LW1vZGFsMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFF1aWNrIFZpZXdcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2syLXR4dCBmbGV4LXcgZmxleC10IHAtdC0xNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrMi10eHQtY2hpbGQxIGZsZXgtY29sLWwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3QtZGV0YWlsLmh0bWxcIiBjbGFzcz1cInN0ZXh0LTEwNCBjbDQgaG92LWNsMSB0cmFucy0wNCBqcy1uYW1lLWIyIHAtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGV4dC0xMDUgY2wzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4oK5e251bWJlcldpdGhDb21tYXMoZGF0YT8ucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jazItdHh0LWNoaWxkMiBmbGV4LXIgcC10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLWFkZHdpc2gtYjIgZGlzLWJsb2NrIHBvcy1yZWxhdGl2ZSBqcy1hZGR3aXNoLWIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uLWhlYXJ0MSBkaXMtYmxvY2sgdHJhbnMtMDRcIiBzcmM9XCJpbWFnZXMvaWNvbnMvaWNvbi1oZWFydC0wMS5wbmdcIiBhbHQ9XCJJQ09OXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb24taGVhcnQyIGRpcy1ibG9jayB0cmFucy0wNCBhYi10LWxcIiBzcmM9XCJpbWFnZXMvaWNvbnMvaWNvbi1oZWFydC0wMi5wbmdcIiBhbHQ9XCJJQ09OXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFZpZXdQcm9kdWN0TW9kYWwgZGF0YT17ZGF0YX0gb3Blbj17b3Blbn0gdG9nZ2xlPXsoKT0+c2V0T3Blbighb3Blbil9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RWaWV3Il0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld1Byb2R1Y3RNb2RhbCIsIlByb2R1Y3RWaWV3IiwiZGF0YSIsIm51bWJlcldpdGhDb21tYXMiLCJ4IiwidG9TdHJpbmciLCJyZXBsYWNlIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImRpdiIsImNsYXNzIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ0aHVtYm5haWxVcmwiLCJhbHQiLCJuYW1lIiwiYSIsImhyZWYiLCJzcGFuIiwicHJpY2UiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Products/ProductView.js\n");

/***/ })

});