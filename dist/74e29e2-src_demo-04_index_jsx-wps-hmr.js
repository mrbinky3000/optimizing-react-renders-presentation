"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetree_shake_test"]("src_demo-04_index_jsx",{

/***/ "./src/demo-04/userSlice.js":
/*!**********************************!*\
  !*** ./src/demo-04/userSlice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice),\n/* harmony export */   \"setUsername\": () => (/* binding */ setUsername),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'username',\n  initialState: {\n    username: 'Larry',\n    status: 'active'\n  },\n  reducers: {\n    setUsername: function setUsername(state, action) {\n      state.username = action.payload;\n    },\n    setStatus: function setStatus(state, action) {\n      state.status = action.payload;\n    }\n  }\n}); // Action creators are generated for each case reducer function\n\nvar setUsername = userSlice.actions.setUsername;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVtby0wNC91c2VyU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsU0FBUyxHQUFHRCw2REFBVyxDQUFDO0FBQ25DRSxFQUFBQSxJQUFJLEVBQUUsVUFENkI7QUFFbkNDLEVBQUFBLFlBQVksRUFBRTtBQUNaQyxJQUFBQSxRQUFRLEVBQUUsT0FERTtBQUVaQyxJQUFBQSxNQUFNLEVBQUU7QUFGSSxHQUZxQjtBQU1uQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRSxxQkFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzlCRCxNQUFBQSxLQUFLLENBQUNKLFFBQU4sR0FBaUJLLE1BQU0sQ0FBQ0MsT0FBeEI7QUFDRCxLQUhPO0FBSVJDLElBQUFBLFNBQVMsRUFBRSxtQkFBQ0gsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzVCRCxNQUFBQSxLQUFLLENBQUNILE1BQU4sR0FBZUksTUFBTSxDQUFDQyxPQUF0QjtBQUNEO0FBTk87QUFOeUIsQ0FBRCxDQUE3QixFQWdCUDs7QUFDTyxJQUFRSCxXQUFSLEdBQXdCTixTQUFTLENBQUNXLE9BQWxDLENBQVFMLFdBQVI7O0FBRVAsaUVBQWVOLFNBQVMsQ0FBQ1ksT0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVlLXNoYWtlLXRlc3QvLi9zcmMvZGVtby0wNC91c2VyU2xpY2UuanM/Y2NiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd1c2VybmFtZScsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHVzZXJuYW1lOiAnTGFycnknLFxuICAgIHN0YXR1czogJ2FjdGl2ZSdcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRVc2VybmFtZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICAgIHNldFN0YXR1czogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfVxuICB9XG59KVxuXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCB7IHNldFVzZXJuYW1lIH0gPSB1c2VyU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwidXNlclNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInVzZXJuYW1lIiwic3RhdHVzIiwicmVkdWNlcnMiLCJzZXRVc2VybmFtZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFN0YXR1cyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo-04/userSlice.js\n");

/***/ })

});