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
exports.id = "app/api/services/route";
exports.ids = ["app/api/services/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fservices%2Froute&page=%2Fapi%2Fservices%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fservices%2Froute.ts&appDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fservices%2Froute&page=%2Fapi%2Fservices%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fservices%2Froute.ts&appDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _var_www_Roman_BackUp_Protfolio_Roman_Admin_Dev_app_src_app_api_services_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/services/route.ts */ \"(rsc)/./src/app/api/services/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/services/route\",\n        pathname: \"/api/services\",\n        filename: \"route\",\n        bundlePath: \"app/api/services/route\"\n    },\n    resolvedPagePath: \"/var/www/Roman/BackUp/Protfolio/Roman-Admin/Dev-app/src/app/api/services/route.ts\",\n    nextConfigOutput,\n    userland: _var_www_Roman_BackUp_Protfolio_Roman_Admin_Dev_app_src_app_api_services_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZXJ2aWNlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2VydmljZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzZXJ2aWNlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZ2YXIlMkZ3d3clMkZSb21hbiUyRkJhY2tVcCUyRlByb3Rmb2xpbyUyRlJvbWFuLUFkbWluJTJGRGV2LWFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGdmFyJTJGd3d3JTJGUm9tYW4lMkZCYWNrVXAlMkZQcm90Zm9saW8lMkZSb21hbi1BZG1pbiUyRkRldi1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvdmFyL3d3dy9Sb21hbi9CYWNrVXAvUHJvdGZvbGlvL1JvbWFuLUFkbWluL0Rldi1hcHAvc3JjL2FwcC9hcGkvc2VydmljZXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlcnZpY2VzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VydmljZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlcnZpY2VzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL3Zhci93d3cvUm9tYW4vQmFja1VwL1Byb3Rmb2xpby9Sb21hbi1BZG1pbi9EZXYtYXBwL3NyYy9hcHAvYXBpL3NlcnZpY2VzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fservices%2Froute&page=%2Fapi%2Fservices%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fservices%2Froute.ts&appDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/services/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/services/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/db */ \"(rsc)/./src/services/db.ts\");\n/* harmony import */ var _models_serviceModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/serviceModel */ \"(rsc)/./src/models/serviceModel.ts\");\n\n\n\nasync function POST(req) {\n    await (0,_services_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    try {\n        const body = await req.json();\n        const newService = body;\n        const savedService = await _models_serviceModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(newService); // Create a new service\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Service successfully created',\n            data: savedService\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.log('Error saving service:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Failed to save service',\n            error: error.message || 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n// Handle GET requests for fetching services\nasync function GET(req) {\n    await (0,_services_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    try {\n        const id = req.nextUrl.searchParams.get('id');\n        if (id) {\n            const service = await _models_serviceModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n            if (!service) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: 'Service not found'\n                }, {\n                    status: 404\n                });\n            }\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Service fetched successfully',\n                data: service\n            }, {\n                status: 200\n            });\n        } else {\n            // Fetch all services\n            const services = await _models_serviceModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Services fetched successfully',\n                data: services\n            }, {\n                status: 200\n            });\n        }\n    } catch (error) {\n        console.log('Error fetching service(s):', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Failed to fetch service(s)',\n            error: error.message || 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZXJ2aWNlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNYO0FBQ007QUFFNUMsZUFBZUcsS0FBS0MsR0FBZ0I7SUFDekMsTUFBTUgsd0RBQVNBO0lBQ2YsSUFBSTtRQUNGLE1BQU1JLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUUzQixNQUFNQyxhQUFhRjtRQUNuQixNQUFNRyxlQUFlLE1BQU1OLDREQUFPQSxDQUFDTyxNQUFNLENBQUNGLGFBQWEsdUJBQXVCO1FBRTlFLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO1lBQ0VJLFNBQVM7WUFDVEMsTUFBTUg7UUFDUixHQUNBO1lBQUVJLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QkY7UUFDckMsT0FBT2IscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFDRUksU0FBUztZQUNURyxPQUFPQSxNQUFNSCxPQUFPLElBQUk7UUFDMUIsR0FDQTtZQUFFRSxRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUVBLDRDQUE0QztBQUNyQyxlQUFlSSxJQUFJWixHQUFnQjtJQUN4QyxNQUFNSCx3REFBU0E7SUFDZixJQUFJO1FBQ0YsTUFBTWdCLEtBQUtiLElBQUljLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7UUFFeEMsSUFBSUgsSUFBSTtZQUNOLE1BQU1JLFVBQVUsTUFBTW5CLDREQUFPQSxDQUFDb0IsUUFBUSxDQUFDTDtZQUV2QyxJQUFJLENBQUNJLFNBQVM7Z0JBQ1osT0FBT3JCLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO29CQUNFSSxTQUFTO2dCQUNYLEdBQ0E7b0JBQUVFLFFBQVE7Z0JBQUk7WUFFbEI7WUFFQSxPQUFPWixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFDRUksU0FBUztnQkFDVEMsTUFBTVU7WUFDUixHQUNBO2dCQUFFVCxRQUFRO1lBQUk7UUFFbEIsT0FBTztZQUNMLHFCQUFxQjtZQUNyQixNQUFNVyxXQUFXLE1BQU1yQiw0REFBT0EsQ0FBQ3NCLElBQUk7WUFFbkMsT0FBT3hCLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUNFSSxTQUFTO2dCQUNUQyxNQUFNWTtZQUNSLEdBQ0E7Z0JBQUVYLFFBQVE7WUFBSTtRQUVsQjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsOEJBQThCRjtRQUMxQyxPQUFPYixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtZQUNFSSxTQUFTO1lBQ1RHLE9BQU9BLE1BQU1ILE9BQU8sSUFBSTtRQUMxQixHQUNBO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvdmFyL3d3dy9Sb21hbi9CYWNrVXAvUHJvdGZvbGlvL1JvbWFuLUFkbWluL0Rldi1hcHAvc3JjL2FwcC9hcGkvc2VydmljZXMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGInO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3NlcnZpY2VNb2RlbCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgYXdhaXQgY29ubmVjdERCKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7IFxuXG4gICAgY29uc3QgbmV3U2VydmljZSA9IGJvZHk7XG4gICAgY29uc3Qgc2F2ZWRTZXJ2aWNlID0gYXdhaXQgU2VydmljZS5jcmVhdGUobmV3U2VydmljZSk7IC8vIENyZWF0ZSBhIG5ldyBzZXJ2aWNlXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6ICdTZXJ2aWNlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkJyxcbiAgICAgICAgZGF0YTogc2F2ZWRTZXJ2aWNlLFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDEgfSBcbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciBzYXZpbmcgc2VydmljZTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIHNhdmUgc2VydmljZScsXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfSBcbiAgICApO1xuICB9XG59XG5cbi8vIEhhbmRsZSBHRVQgcmVxdWVzdHMgZm9yIGZldGNoaW5nIHNlcnZpY2VzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgYXdhaXQgY29ubmVjdERCKCk7IFxuICB0cnkge1xuICAgIGNvbnN0IGlkID0gcmVxLm5leHRVcmwuc2VhcmNoUGFyYW1zLmdldCgnaWQnKTsgXG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSBhd2FpdCBTZXJ2aWNlLmZpbmRCeUlkKGlkKTtcblxuICAgICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnU2VydmljZSBub3QgZm91bmQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBzdGF0dXM6IDQwNCB9IFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnU2VydmljZSBmZXRjaGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgZGF0YTogc2VydmljZSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBzdGF0dXM6IDIwMCB9IFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmV0Y2ggYWxsIHNlcnZpY2VzXG4gICAgICBjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IFNlcnZpY2UuZmluZCgpO1xuXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnU2VydmljZXMgZmV0Y2hlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICAgIGRhdGE6IHNlcnZpY2VzLFxuICAgICAgICB9LFxuICAgICAgICB7IHN0YXR1czogMjAwIH0gXG4gICAgICApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgc2VydmljZShzKTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UocyknLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH0gXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3REQiIsIlNlcnZpY2UiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJuZXdTZXJ2aWNlIiwic2F2ZWRTZXJ2aWNlIiwiY3JlYXRlIiwibWVzc2FnZSIsImRhdGEiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJHRVQiLCJpZCIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzZXJ2aWNlIiwiZmluZEJ5SWQiLCJzZXJ2aWNlcyIsImZpbmQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/services/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/serviceModel.ts":
/*!************************************!*\
  !*** ./src/models/serviceModel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ServiceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Service = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Service || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Service', ServiceSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3NlcnZpY2VNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFPdEQsTUFBTUUsZ0JBQXdCLElBQUlELDRDQUFNQSxDQUFDO0lBQ3ZDRSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsYUFBYTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDOUMsR0FBRztJQUNERSxZQUFZO0FBQ2Q7QUFFQSxNQUFNQyxVQUFVVCx3REFBZSxDQUFDUyxPQUFPLElBQUlULHFEQUFjLENBQVcsV0FBV0U7QUFFL0UsaUVBQWVPLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L1JvbWFuL0JhY2tVcC9Qcm90Zm9saW8vUm9tYW4tQWRtaW4vRGV2LWFwcC9zcmMvbW9kZWxzL3NlcnZpY2VNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcblxuaW50ZXJmYWNlIElTZXJ2aWNlIGV4dGVuZHMgRG9jdW1lbnQge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBTZXJ2aWNlU2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG59LCB7XG4gIHRpbWVzdGFtcHM6IHRydWUsXG59KTtcblxuY29uc3QgU2VydmljZSA9IG1vbmdvb3NlLm1vZGVscy5TZXJ2aWNlIHx8IG1vbmdvb3NlLm1vZGVsPElTZXJ2aWNlPignU2VydmljZScsIFNlcnZpY2VTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiU2VydmljZVNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJ0aW1lc3RhbXBzIiwiU2VydmljZSIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/serviceModel.ts\n");

/***/ }),

/***/ "(rsc)/./src/services/db.ts":
/*!****************************!*\
  !*** ./src/services/db.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmljZXMvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBRW5DLElBQUlHLFNBQVNDLE9BQU9QLFFBQVE7QUFFNUIsSUFBSSxDQUFDTSxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9QLFFBQVEsR0FBRztRQUFFUSxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1QsdURBQWdCLENBQUNLLEtBQUtNLE1BQU1HLElBQUksQ0FBQyxDQUFDZDtZQUNqRCxPQUFPQTtRQUNUO0lBQ0Y7SUFFQSxJQUFJO1FBQ0ZNLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTU07SUFDUjtJQUVBLE9BQU9ULE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsiL3Zhci93d3cvUm9tYW4vQmFja1VwL1Byb3Rmb2xpby9Sb21hbi1BZG1pbi9EZXYtYXBwL3NyYy9zZXJ2aWNlcy9kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2VcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH1cblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdCh1cmksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2VcbiAgICB9KVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGxcbiAgICB0aHJvdyBlXG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/services/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fservices%2Froute&page=%2Fapi%2Fservices%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fservices%2Froute.ts&appDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fvar%2Fwww%2FRoman%2FBackUp%2FProtfolio%2FRoman-Admin%2FDev-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();