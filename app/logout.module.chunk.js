webpackJsonp(["logout.module"],{

/***/ "./src/app/logout/logout.component.css.shim.ngstyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/logout/logout.component.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
exports.HttpClient_1 = http_1.HttpClient;
exports.HttpHandler_2 = http_1.HttpHandler;
var i0 = __webpack_require__("./src/app/logout/logout.component.css.shim.ngstyle.js");
var i1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var i2 = __webpack_require__("./src/app/logout/logout.component.ts");
var i3 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var styles_LogoutComponent = [i0.styles];
var RenderType_LogoutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_LogoutComponent, data: {} });
exports.RenderType_LogoutComponent = RenderType_LogoutComponent;
function View_LogoutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "main"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; _ck(_v, 3, 0, currVal_0); }); }
exports.View_LogoutComponent_0 = View_LogoutComponent_0;
function View_LogoutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-logout", [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)), i1.ɵdid(1, 114688, null, 0, i2.LogoutComponent, [i3.HttpClient], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_LogoutComponent_Host_0 = View_LogoutComponent_Host_0;
var LogoutComponentNgFactory = i1.ɵccf("app-logout", i2.LogoutComponent, View_LogoutComponent_Host_0, {}, {}, []);
exports.LogoutComponentNgFactory = LogoutComponentNgFactory;


/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http) {
        this.http = http;
        this.message = '';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('/logout', null, { responseType: 'text' }).subscribe(function (res) {
            _this.message = 'Logout Successfully! Redirecting You to Homepage ...';
            window.location.href = '/home';
        }, function (err) {
            _this.message = 'Logout Failed! Please Try Again ...';
            window.location.href = '/home';
        });
    };
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;


/***/ }),

/***/ "./src/app/logout/logout.module.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
exports.NgLocalization_3 = common_1.NgLocalization;
exports.NgLocaleLocalization_4 = common_1.NgLocaleLocalization;
exports.ɵa_6 = common_1.ɵa;
exports.CommonModule_7 = common_1.CommonModule;
exports.DOCUMENT_14 = common_1.DOCUMENT;
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
exports.LOCALE_ID_5 = core_1.LOCALE_ID;
exports.PLATFORM_ID_15 = core_1.PLATFORM_ID;
exports.Injector_22 = core_1.Injector;
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
exports.ɵi_8 = http_1.ɵi;
exports.HttpXsrfTokenExtractor_9 = http_1.HttpXsrfTokenExtractor;
exports.ɵg_10 = http_1.ɵg;
exports.HttpClientXsrfModule_11 = http_1.HttpClientXsrfModule;
exports.HTTP_INTERCEPTORS_12 = http_1.HTTP_INTERCEPTORS;
exports.ɵh_13 = http_1.ɵh;
exports.ɵf_16 = http_1.ɵf;
exports.HttpClientModule_17 = http_1.HttpClientModule;
exports.HttpClient_18 = http_1.HttpClient;
exports.HttpHandler_19 = http_1.HttpHandler;
exports.ɵc_20 = http_1.ɵc;
exports.HttpBackend_21 = http_1.HttpBackend;
exports.HttpXhrBackend_23 = http_1.HttpXhrBackend;
exports.XhrFactory_24 = http_1.XhrFactory;
exports.ɵe_25 = http_1.ɵe;
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
exports.ROUTES_26 = router_1.ROUTES;
exports.RouterModule_27 = router_1.RouterModule;
exports.ɵa_28 = router_1.ɵa;
exports.Router_29 = router_1.Router;
var i0 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var i1 = __webpack_require__("./src/app/logout/logout.module.ts");
var i2 = __webpack_require__("./src/app/logout/logout.component.ngfactory.js");
var i3 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var i4 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var i5 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var i6 = __webpack_require__("./src/app/logout/logout.component.ts");
var LogoutModuleNgFactory = i0.ɵcmf(i1.LogoutModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.LogoutComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵa]]), i0.ɵmpd(4608, i4.HttpXsrfTokenExtractor, i4.ɵh, [i3.DOCUMENT, i0.PLATFORM_ID, i4.ɵf]), i0.ɵmpd(4608, i4.ɵi, i4.ɵi, [i4.HttpXsrfTokenExtractor, i4.ɵg]), i0.ɵmpd(5120, i4.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i4.ɵi]), i0.ɵmpd(4608, i4.ɵe, i4.ɵe, []), i0.ɵmpd(6144, i4.XhrFactory, null, [i4.ɵe]), i0.ɵmpd(4608, i4.HttpXhrBackend, i4.HttpXhrBackend, [i4.XhrFactory]), i0.ɵmpd(6144, i4.HttpBackend, null, [i4.HttpXhrBackend]), i0.ɵmpd(4608, i4.HttpHandler, i4.ɵc, [i4.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i4.HttpClient, i4.HttpClient, [i4.HttpHandler]), i0.ɵmpd(512, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(512, i5.RouterModule, i5.RouterModule, [[2, i5.ɵa], [2, i5.Router]]), i0.ɵmpd(512, i4.HttpClientXsrfModule, i4.HttpClientXsrfModule, []), i0.ɵmpd(512, i4.HttpClientModule, i4.HttpClientModule, []), i0.ɵmpd(512, i1.LogoutModule, i1.LogoutModule, []), i0.ɵmpd(256, i4.ɵf, "XSRF-TOKEN", []), i0.ɵmpd(256, i4.ɵg, "X-XSRF-TOKEN", []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i6.LogoutComponent }]]; }, [])]); });
exports.LogoutModuleNgFactory = LogoutModuleNgFactory;


/***/ }),

/***/ "./src/app/logout/logout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logout_component_1 = __webpack_require__("./src/app/logout/logout.component.ts");
var routes = [{ path: '', component: logout_component_1.LogoutComponent }];
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    return LogoutModule;
}());
exports.LogoutModule = LogoutModule;


/***/ })

});
//# sourceMappingURL=logout.module.chunk.js.map