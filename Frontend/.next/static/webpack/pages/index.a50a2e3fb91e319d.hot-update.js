/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nexports.numberWithCommas = function(x) {\n    return x.toString().replace(/\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))/g, \",\");\n};\nexports.truncateString = function(str, num) {\n    if (str.length > num) {\n        return str.slice(0, num) + \"...\";\n    } else {\n        return str;\n    }\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFFQUEsd0JBQXdCLEdBQUMsUUFDekIsQ0FEMEJFLENBQUMsRUFBRyxDQUFDO0lBQzNCLE1BQU0sQ0FBQ0EsQ0FBQyxDQUFDQyxRQUFRLEdBQUdDLE9BQU8sb0NBQW9DLENBQUc7QUFDdEUsQ0FBQztBQUVESixzQkFBc0IsR0FBQyxRQUFRLENBQVBNLEdBQUcsRUFBRUMsR0FBRyxFQUFHLENBQUM7SUFDaEMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sR0FBR0QsR0FBRyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDRCxHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUVGLEdBQUcsSUFBSSxDQUFLO0lBQ2xDLENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxDQUFDRCxHQUFHO0lBQ1osQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pbmRleC5qcz84YWZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0cy5udW1iZXJXaXRoQ29tbWFzPSh4KT0+e1xyXG4gICAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPzwhXFwuXFxkKikoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbn1cclxuXHJcbmV4cG9ydHMudHJ1bmNhdGVTdHJpbmc9KHN0ciwgbnVtKT0+e1xyXG4gICAgaWYgKHN0ci5sZW5ndGggPiBudW0pIHtcclxuICAgICAgcmV0dXJuIHN0ci5zbGljZSgwLCBudW0pICsgXCIuLi5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgfSJdLCJuYW1lcyI6WyJleHBvcnRzIiwibnVtYmVyV2l0aENvbW1hcyIsIngiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ0cnVuY2F0ZVN0cmluZyIsInN0ciIsIm51bSIsImxlbmd0aCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/index.js\n");

/***/ })

});