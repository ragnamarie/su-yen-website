"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contacts/[contacts._id]";
exports.ids = ["pages/api/contacts/[contacts._id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/dbConnect.js":
/*!*************************!*\
  !*** ./db/dbConnect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9kYkNvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUNSO0FBRUo7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUNBTixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhUyxNQUFNRyxJQUFJLENBQUMsQ0FBQ2I7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBQ0EsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHO1FBQ2pCLE1BQU1NO0lBQ1I7SUFFQSxPQUFPVCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS15ZW4td2Vic2l0ZS8uL2RiL2RiQ29ubmVjdC5qcz9mY2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICB9KTtcbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/dbConnect.js\n");

/***/ }),

/***/ "(api)/./db/models/Contact.js":
/*!******************************!*\
  !*** ./db/models/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst contactSchema = new Schema({\n    phone: {\n        type: String\n    },\n    mail: {\n        type: String\n    },\n    instagram: {\n        type: String\n    },\n    tiktok: {\n        type: String\n    }\n});\nconst Contact = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Contact || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Contact\", contactSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvQ29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQy9CRSxPQUFPO1FBQUVDLE1BQU1DO0lBQU87SUFDdEJDLE1BQU07UUFBRUYsTUFBTUM7SUFBTztJQUNyQkUsV0FBVztRQUFFSCxNQUFNQztJQUFPO0lBQzFCRyxRQUFRO1FBQUVKLE1BQU1DO0lBQU87QUFDekI7QUFFQSxNQUFNSSxVQUNKVCx3REFBZSxDQUFDUyxPQUFPLElBQUlULHFEQUFjLENBQUMsV0FBV0U7QUFFdkQsaUVBQWVPLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS15ZW4td2Vic2l0ZS8uL2RiL21vZGVscy9Db250YWN0LmpzPzc3NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IGNvbnRhY3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgcGhvbmU6IHsgdHlwZTogU3RyaW5nIH0sXG4gIG1haWw6IHsgdHlwZTogU3RyaW5nIH0sXG4gIGluc3RhZ3JhbTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgdGlrdG9rOiB7IHR5cGU6IFN0cmluZyB9LFxufSk7XG5cbmNvbnN0IENvbnRhY3QgPVxuICBtb25nb29zZS5tb2RlbHMuQ29udGFjdCB8fCBtb25nb29zZS5tb2RlbChcIkNvbnRhY3RcIiwgY29udGFjdFNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJjb250YWN0U2NoZW1hIiwicGhvbmUiLCJ0eXBlIiwiU3RyaW5nIiwibWFpbCIsImluc3RhZ3JhbSIsInRpa3RvayIsIkNvbnRhY3QiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/Contact.js\n");

/***/ }),

/***/ "(api)/./pages/api/contacts/[contacts._id].js":
/*!**********************************************!*\
  !*** ./pages/api/contacts/[contacts._id].js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.js\");\n/* harmony import */ var _db_models_Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/Contact */ \"(api)/./db/models/Contact.js\");\n\n\nasync function handler(request, response) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { id } = request.query;\n    if (request.method === \"GET\") {\n        const contact = await _db_models_Contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n        if (!contact) {\n            return response.status(404).json({\n                status: \"Not Found\"\n            });\n        }\n        response.status(200).json(contact);\n    }\n    if (request.method === \"PUT\") {\n        await _db_models_Contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, {\n            $set: request.body\n        });\n        response.status(200).json({\n            message: \"Success!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdHMvW2NvbnRhY3RzLl9pZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ0c7QUFFM0IsZUFBZUUsUUFBUUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3JELE1BQU1KLHlEQUFTQTtJQUNmLE1BQU0sRUFBRUssRUFBRSxFQUFFLEdBQUdGLFFBQVFHLEtBQUs7SUFFNUIsSUFBSUgsUUFBUUksTUFBTSxLQUFLLE9BQU87UUFDNUIsTUFBTUMsVUFBVSxNQUFNUCxtRUFBZ0IsQ0FBQ0k7UUFFdkMsSUFBSSxDQUFDRyxTQUFTO1lBQ1osT0FBT0osU0FBU00sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUQsUUFBUTtZQUFZO1FBQ3pEO1FBRUFOLFNBQVNNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0lBQzVCO0lBRUEsSUFBSUwsUUFBUUksTUFBTSxLQUFLLE9BQU87UUFDNUIsTUFBTU4sNEVBQXlCLENBQUNJLElBQUk7WUFDbENRLE1BQU1WLFFBQVFXLElBQUk7UUFDcEI7UUFFQVYsU0FBU00sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFSSxTQUFTO1FBQVc7SUFDbEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3N1LXllbi13ZWJzaXRlLy4vcGFnZXMvYXBpL2NvbnRhY3RzL1tjb250YWN0cy5faWRdLmpzP2YyZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9kYi9kYkNvbm5lY3RcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCJAL2RiL21vZGVscy9Db250YWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJlcXVlc3QucXVlcnk7XG5cbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZEJ5SWQoaWQpO1xuXG4gICAgaWYgKCFjb250YWN0KSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwNCkuanNvbih7IHN0YXR1czogXCJOb3QgRm91bmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKGNvbnRhY3QpO1xuICB9XG5cbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgYXdhaXQgQ29udGFjdC5maW5kQnlJZEFuZFVwZGF0ZShpZCwge1xuICAgICAgJHNldDogcmVxdWVzdC5ib2R5LFxuICAgIH0pO1xuXG4gICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiU3VjY2VzcyFcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIkNvbnRhY3QiLCJoYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiaWQiLCJxdWVyeSIsIm1ldGhvZCIsImNvbnRhY3QiLCJmaW5kQnlJZCIsInN0YXR1cyIsImpzb24iLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIiRzZXQiLCJib2R5IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contacts/[contacts._id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contacts/[contacts._id].js"));
module.exports = __webpack_exports__;

})();