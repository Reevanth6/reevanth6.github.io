(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _common_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utility.service */ "./src/app/common/utility.service.ts");
/* harmony import */ var _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/component/nav/nav.component */ "./src/app/common/component/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/component/footer/footer.component */ "./src/app/common/component/footer/footer.component.ts");








class AppComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
        this.title = 'ui';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({ duration: 2400 });
        this.utilityService
            .getSettings()
            .pipe()
            .subscribe((url) => {
            this.utilityService.defaultUrl = url.defaultUrl;
            console.log(this.utilityService.defaultUrl);
        }, (error) => { });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _common_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _common_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utility.service */ "./src/app/common/utility.service.ts");
/* harmony import */ var _common_intercepter_httpinterceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/intercepter/httpinterceptor */ "./src/app/common/intercepter/httpinterceptor.ts");
/* harmony import */ var _common_intercepter_errorInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/intercepter/errorInterceptor */ "./src/app/common/intercepter/errorInterceptor.ts");
/* harmony import */ var _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/component/nav/nav.component */ "./src/app/common/component/nav/nav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/component/footer/footer.component */ "./src/app/common/component/footer/footer.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__);
















// import { MDBBootstrapModule } from 'angular-bootstrap-md';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_httpinterceptor__WEBPACK_IMPORTED_MODULE_7__["AuthTokenInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_errorInterceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
        _common_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _common_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _common_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_httpinterceptor__WEBPACK_IMPORTED_MODULE_7__["AuthTokenInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _common_intercepter_errorInterceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
                    _common_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/common/component/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/component/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "copyright", "mb-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A9 Copyrights reserved Vrushabha 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  background-color: #EA6625;\n  color: #FFF;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE2NjI1O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmNvcHlyaWdodHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb290ZXIgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/component/nav/nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/component/nav/nav.component.ts ***!
  \*******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility.service */ "./src/app/common/utility.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "active": a0 }; };
class NavComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
        this.selection = 1;
    }
    ngOnInit() { }
    goToDiv(id) {
        window.scrollTo({ top: 0 });
        let el = document.getElementById(id);
        // el.scrollTop = el.scrollHeight;
        // el.scrollIntoView({behavior:"smooth"});
        var headerOffset = 150;
        var elementPosition = el.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 28, vars: 18, consts: [["id", "ftco-navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "ftco_navbar", "ftco-navbar-light"], [1, "row"], [1, "col-12", "org-baground"], [1, "col-12", "container-fluid", 2, "height", "9rem"], [1, "navbar-brand", "img", "logo", 2, "background-image", "url(assets/images/vrushubha/logo.svg)", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#ftco-nav", "aria-controls", "ftco-nav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fa", "fa-bars"], ["id", "ftco-nav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_4_listener() { return ctx.goToDiv("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_11_listener() { return ctx.goToDiv("home"); })("click", function NavComponent_Template_a_click_11_listener() { return ctx.utilityService.activeNav = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_14_listener() { return ctx.goToDiv("about"); })("click", function NavComponent_Template_a_click_14_listener() { return ctx.utilityService.activeNav = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() { return ctx.goToDiv("attraction"); })("click", function NavComponent_Template_a_click_17_listener() { return ctx.utilityService.activeNav = 3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ATTRACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_20_listener() { return ctx.goToDiv("facility"); })("click", function NavComponent_Template_a_click_20_listener() { return ctx.utilityService.activeNav = 4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "FACILITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_23_listener() { return ctx.goToDiv("gallery"); })("click", function NavComponent_Template_a_click_23_listener() { return ctx.utilityService.activeNav = 5; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_26_listener() { return ctx.goToDiv("contact"); })("click", function NavComponent_Template_a_click_26_listener() { return ctx.utilityService.activeNav = 6; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.utilityService.activeNav == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.utilityService.activeNav == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.utilityService.activeNav == 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.utilityService.activeNav == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.utilityService.activeNav == 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.utilityService.activeNav == 6));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  width: 136px;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #02020269 !important;\n  z-index: 100;\n}\n\n.org-baground[_ngcontent-%COMP%] {\n  height: 11px;\n  width: 100vw !important;\n  position: relative;\n  background: #EA6625;\n  margin-top: -8px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 279px;\n  height: 100px;\n  margin-left: 8%;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: 700 !important;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%] {\n  background: #fff !important;\n  z-index: 3;\n  padding: 0;\n  box-shadow: 0 5px 20px -17px rgba(0, 0, 0, 0.34);\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #EA6625;\n  position: relative;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\n  color: #000000;\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding: 1rem 0vw;\n  font-weight: 200;\n  text-align: center;\n  color: #9a9898;\n  position: relative;\n  opacity: 1 !important;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 7px;\n  bottom: 0;\n  left: 0;\n  background-color: #EA6625;\n  visibility: hidden;\n  transform: scaleX(0);\n  transition: all 0.5s ease-in-out 0s;\n  z-index: -1;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover {\n  font-weight: 600;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover:before, .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link.active[_ngcontent-%COMP%]::before {\n  visibility: visible;\n  background-color: #EA6625;\n  transform: scaleX(0.8);\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n    padding: 0.7rem 0;\n    color: rgba(0, 0, 0, 0.7);\n  }\n\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:hover:before {\n    display: none;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  background: #fff;\n  box-shadow: 0 10px 34px -20px rgba(0, 0, 0, 0.41);\n  border-radius: 4px;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000000;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus {\n  background: #EA6625;\n  color: #fff;\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    background: #fff;\n    box-shadow: none;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #EA6625;\n  border-radius: 0;\n}\n\n@media (max-width: 767.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #EA6625;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n  visibility: visible;\n  background-color: #EA6625;\n  transform: scaleX(1);\n}\n\n@media (max-width: 991.98px) {\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #000000;\n  }\n\n  .ftco-navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .nav-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n  color: rgba(0, 0, 0, 0.5) !important;\n  cursor: pointer;\n  padding-right: 0;\n  text-transform: uppercase;\n  font-size: 16px;\n  letter-spacing: 0.1em;\n}\n\n.ftco-navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n@media only screen and (max-width: 480px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 228px;\n    height: 82px;\n    margin-left: 0;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    width: 140px;\n    background: white;\n    border: solid 1px purple;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7Ozs7RUFJSSxzQkFBQTtFQUNBLDJCQUFBO0FBUUo7O0FBSkE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBR0EsZ0RBQUE7QUFPSjs7QUFMQTtFQUNJO0lBQ0ksa0JBQUE7RUFRTjtBQUNGOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBOztFQUVJLGNBQUE7QUFVSjs7QUFSQTtFQUNJO0lBQ0ksb0JBQUE7RUFXTjtBQUNGOztBQVRBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUdBLG9CQUFBO0VBR0EsbUNBQUE7RUFDQSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxnQkFBQTtBQWFKOztBQVhBOztFQUVJLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxzQkFBQTtBQWNKOztBQVpBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLHlCQUFBO0VBZU47O0VBYkU7SUFDSSxhQUFBO0VBZ0JOO0FBQ0Y7O0FBZEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSxpREFBQTtFQUNBLGtCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFpQko7O0FBZkE7O0VBRUksbUJBQUE7RUFDQSxXQUFBO0FBa0JKOztBQWhCQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxnQkFBQTtJQUVBLGdCQUFBO0VBbUJOO0FBQ0Y7O0FBakJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFtQko7O0FBakJBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VBb0JOO0FBQ0Y7O0FBbEJBO0VBQ0ksY0FBQTtBQW9CSjs7QUFsQkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBR0Esb0JBQUE7QUFxQko7O0FBbkJBO0VBQ0k7SUFDSSxjQUFBO0VBc0JOOztFQXBCRTtJQUNJLGFBQUE7RUF1Qk47QUFDRjs7QUFyQkE7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSx3QkFBQTtBQXdCSjs7QUFyQkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQXdCTjs7RUF0QkU7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSx3QkFBQTtFQXlCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kLFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbmssXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgICB3aWR0aDogMTM2cHg7XHJcbn1cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuYWN0aXZlID4gLm5hdi1saW5rIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5iZy1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMjAyNjkgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4ub3JnLWJhZ3JvdW5kIHtcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI0VBNjYyNTtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDI3OXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxufVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLnNob3cgPiAubmF2LWxpbmssXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAuYWN0aXZlID4gLm5hdi1saW5rLFxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLnNob3csXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZnRjby1uYXZiYXItbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggLTE3cHggcmdiYSgwLCAwLCAwLCAwLjM0KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA1cHggMjBweCAtMTdweCByZ2JhKDAsIDAsIDAsIDAuMzQpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCAtMTdweCByZ2JhKDAsIDAsIDAsIDAuMzQpO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAuZnRjby1uYXZiYXItbGlnaHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIH1cclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCBzcGFuIHtcclxuICAgIGNvbG9yOiAjRUE2NjI1O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kOmhvdmVyLFxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZDpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gPiAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZzogMXJlbSAwdnc7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5YTk4OTg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtID4gLm5hdi1saW5rOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUE2NjI1O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAwcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gPiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gPiAubmF2LWxpbms6aG92ZXI6YmVmb3JlLFxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gPiAubmF2LWxpbmsuYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTY2MjU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuOCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoMC44KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuOCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluayB7XHJcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIH1cclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSA+IC5uYXYtbGluazpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLmZ0Y28tbmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2ID4gLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzNHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40MSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCAzNHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC40MSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzRweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUE2NjI1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5jdGEgPiBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI0VBNjYyNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5jdGEgPiBhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0uYWN0aXZlID4gYSB7XHJcbiAgICBjb2xvcjogI0VBNjYyNTtcclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgPiAubmF2LWl0ZW0uYWN0aXZlID4gYTpiZWZvcmUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTY2MjU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5hY3RpdmUgPiBhIHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLW5hdiA+IC5uYXYtaXRlbS5hY3RpdmUgPiBhOmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4uZnRjby1uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcbi5mdGNvLW5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMjI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1uYXZ7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHB1cnBsZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-nav', templateUrl: './nav.component.html', styleUrls: ['./nav.component.scss'] }]
    }], function () { return [{ type: _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/intercepter/errorInterceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/common/intercepter/errorInterceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import { AuthenticationService } from '../services/authentication.service';
class ErrorInterceptor {
    constructor() { }
    intercept(request, newRequest) {
        return newRequest.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                let sessionId = localStorage.getItem('SessionID');
                // this.authenticationService.logout(sessionId);
                if (err.error && err.error.Code == 409)
                    err.message = 'There are currently multiple sessions logged in with this username. Please login again.';
                else
                    err.message = 'Session timed out. Please login again';
            }
            else if (err.status === 417) {
                err.message = err.statusText;
            }
            else {
                // const error = err.error.message || err.statusText;
                err.message = 'Server failed to respond.';
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/common/intercepter/httpinterceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/intercepter/httpinterceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function() { return AuthTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility.service */ "./src/app/common/utility.service.ts");

// import { LoaderService } from '../common/loader.service';



class AuthTokenInterceptor {
    constructor(utilityService) {
        this.utilityService = utilityService;
        this.totalRequests = 0;
    }
    intercept(request, newRequest) {
        let tokenInfo = JSON.parse(localStorage.getItem('TokenInfo'));
        var headers = null;
        if (request.url.includes('/Import/Upload') || request.url.includes('/Import/Import')) {
            headers = {
                Authorization: `Bearer ${tokenInfo}`
            };
        }
        else {
            headers = {
                Authorization: `Bearer ${tokenInfo}`,
                'Content-Type': 'application/json;charset=utf-8'
            };
        }
        if (tokenInfo) {
            request = request.clone({
                setHeaders: headers
            });
        }
        this.totalRequests++;
        // this.loaderService.showSpinner();
        this.updateToken();
        return newRequest.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => { this.decreaseRequests(); }));
    }
    decreaseRequests() {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            // this.loaderService.hideSpinner();
        }
    }
    updateToken() {
        var sessionTime = this.utilityService.try_parse_int(localStorage.getItem("sessionTimeInMin"));
        if (sessionTime > 0) {
            sessionTime = (sessionTime - 1) * 60;
            var currentTime = this.utilityService.try_parse_int(localStorage.getItem("activeFrom"));
            if (currentTime < 0) {
                return;
            }
            let secLeft = sessionTime - currentTime;
            // if (secLeft > 180 && secLeft < 600)
            //     // this.utilityService.updateToken = true;
        }
    }
}
AuthTokenInterceptor.ɵfac = function AuthTokenInterceptor_Factory(t) { return new (t || AuthTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"])); };
AuthTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthTokenInterceptor, factory: AuthTokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthTokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common/utility.service.ts":
/*!*******************************************!*\
  !*** ./src/app/common/utility.service.ts ***!
  \*******************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UtilityService {
    constructor(http) {
        this.http = http;
    }
    setUserName(userName) {
        this.user_name = userName;
    }
    setUserRole(role) {
        this.role = role;
    }
    getSettings() {
        return this.http.get('assets/appsetting.json', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            this.defaultUrl = result.defaultUrl;
            return result;
        }));
    }
    //getMLValue(defaultValue: string, jsonMLString: string): string {
    //  return (typeof jsonMLString != 'undefined' && jsonMLString != "" && typeof this.langCode != 'undefined' && this.langCode != "") ?
    //    JSON.parse(jsonMLString)[this.langCode] == null ? defaultValue : JSON.parse(jsonMLString)[this.langCode] : defaultValue;
    //
    //showNotificationPopup(type: any, title: string = null, html: string = null, text: string = null) {
    //  const myService = AppInjector.get(ToasterService);
    //  myService.show(type," ",title,Config.PopupTimer);
    //}
    try_parse_int(val) {
        try {
            if (val != null && val != undefined) {
                if (!isNaN(val))
                    return parseInt(val);
            }
            return -1;
        }
        catch (err) {
            return -1;
        }
    }
    checkJsonFormattor(stringML, labelName) {
        try {
            if (stringML) {
                if (!this.JsonValidator(stringML)) {
                    //   this.showNotificationPopup('warning', 'JSON is not proper for '+ labelName);
                    return false;
                }
            }
        }
        catch (ex) {
            return false;
        }
        return true;
    }
    JsonValidator(value) {
        try {
            return JSON.parse(value) ? true : false;
        }
        catch (ex) {
            return false;
        }
    }
}
UtilityService.ɵfac = function UtilityService_Factory(t) { return new (t || UtilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityService, factory: UtilityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/utility.service */ "./src/app/common/utility.service.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["home"];
const _c1 = ["about"];
const _c2 = ["attraction"];
const _c3 = ["facility"];
const _c4 = ["gallery"];
const _c5 = ["contact"];
function HomeComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/vrushubha/", image_r8.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r8.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r8.text);
} }
function HomeComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/vrushubha/", image_r10.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c6 = function () { return ["owl-theme", "row", "sliding"]; };
class HomeComponent {
    constructor(utilityService) {
        this.utilityService = utilityService;
        this.homeOffset = null;
        this.aboutOffset = null;
        this.attractionOffset = null;
        this.facilityOffset = null;
        this.galleryOffset = null;
        this.contactOffset = null;
        this.carouselOptions = {
            margin: 25,
            nav: true,
            navText: ["<div class='nav-btn prev-slide fa fa-chevron-circle-left'></div>", "<div class='nav-btn next-slide fa fa-chevron-circle-right'></div>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1500: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        };
        this.attractions = [];
        this.galleries = [];
    }
    ngOnInit() {
        this.attractions = [{ text: "Mullayanagiri Peak - 22 Kms", image: "img_5.png", name: "Mullayanagiri", desc: " is about 65 km away from the Vrushabha Homestay. This waterfalls is inside a coffee estate. Hebbe Falls gushes down from a height of 551 ft. in two stages to form Dodda Hebbe (Big Falls) and Chikka Hebbe (Small Falls.) The option of trekking is available, but the place is filled with leeches especially in the rainy season." },
            { text: "BabaBudangiri Peak - 33 Kms", image: "img_7_2x.png", name: "BabaBudangiri", desc: " is about 65 km away from the Vrushabha Homestay. This waterfalls is inside a coffee estate. Hebbe Falls gushes down from a height of 551 ft. in two stages to form Dodda Hebbe (Big Falls) and Chikka Hebbe (Small Falls.) The option of trekking is available, but the place is filled with leeches especially in the rainy season." },
            { name: "Hebbe Falls", text: "Hebbe Falls - 65 Kms", image: "img_6.png", desc: " is about 65 km away from the Vrushabha Homestay. This waterfalls is inside a coffee estate. Hebbe Falls gushes down from a height of 551 ft. in two stages to form Dodda Hebbe (Big Falls) and Chikka Hebbe (Small Falls.) The option of trekking is available, but the place is filled with leeches especially in the rainy season." }];
        this.galleries = [{ image: "img_1.png" },
            { image: "img_2.png" },
            { image: "img_8.png" },
            { image: "img_3.png" }];
    }
    ngAfterViewInit() {
        this.homeOffset = this.homeElement.nativeElement.offsetTop;
        this.contactOffset = this.contactElement.nativeElement.offsetTop;
        this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
        this.facilityOffset = this.facilityElement.nativeElement.offsetTop;
        this.galleryOffset = this.galleryElement.nativeElement.offsetTop;
        this.attractionOffset = this.attractionElement.nativeElement.offsetTop;
    }
    checkOffsetTop() {
        if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.aboutOffset) {
            this.utilityService.activeNav = 2;
        }
        else if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.attractionOffset) {
            this.utilityService.activeNav = 3;
        }
        else if (window.pageYOffset >= this.attractionOffset && window.pageYOffset < this.facilityOffset) {
            this.utilityService.activeNav = 4;
        }
        else if (window.pageYOffset >= this.facilityOffset && window.pageYOffset < this.galleryOffset) {
            this.utilityService.activeNav = 5;
        }
        else if (window.pageYOffset >= this.galleryOffset && window.pageYOffset < this.contactOffset) {
            this.utilityService.activeNav = 6;
        }
        else if (window.pageYOffset >= this.contactOffset) {
            this.utilityService.activeNav = 7;
        }
        else {
            this.utilityService.activeNav = 1;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.homeElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aboutElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.attractionElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.facilityElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.galleryElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contactElement = _t.first);
    } }, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.checkOffsetTop($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 127, vars: 10, consts: [["id", "home"], ["home", ""], ["data-stellar-background-ratio", "0.5", 1, "hero-wrap", "js-fullheight", 2, "background-image", "url(assets/images/vrushubha/img_4_2x.png)"], [1, "overlay"], [1, "container-fluid"], ["data-scrollax-parent", "true", 1, "row", "no-gutters", "slider-text", "js-fullheight", "align-items-center", "justify-content-start"], ["data-aos", "fade-in", 1, "col-md-12"], [1, "ml-7", "w-hed", 2, "padding-top", "3em"], [1, "ml-7", "w-hed"], [1, "ml-7", "mb-4", "subheading"], [1, "ml-7", "subheading", "subheading_2"], [1, "ml-7", "pt-1", "subheading", "subheading_3"], ["id", "about", 1, "ftco-section", "bg-light"], ["about", ""], [1, "container"], [1, "row", "justify-content-center", "pb-5", "mb-3"], [1, "col-md-12", "heading-section", "text-center"], [1, "samarkan", "v"], [1, "row", "no-gutters"], ["data-aos", "fade-down", 1, "col-md-6", "wrap-about"], [1, "img", "img-2", "mb-4", 2, "background-image", "url(assets/images/vrushubha/img_4_22_2x.png)"], [1, "col-md-6", "wrap-about"], [1, "pl-md-5", "about-body"], ["id", "attraction", 1, "ftco-section", "bg-light"], ["attraction", ""], [3, "options", "items", "carouselClasses"], ["class", "row d-flex item", 4, "ngFor", "ngForOf"], ["id", "facility", 1, "ftco-section", "bg-light", "failities"], ["facility", ""], [1, "row", "justify-content-center", "pb-2", "mb-3"], [1, "col-11", "row", "m-a", "d-flex"], ["data-aos", "fade-down", 1, "col-md-3", "col-6", "d-flex"], [1, "blog-entry-failities", "align-self-stretch"], [1, "img", 2, "background-image", "url(assets/images/vrushubha/food_icon.svg)"], [1, "text", "p-3", "text-center"], [1, "underscore"], [1, "img", "h", 2, "background-image", "url(assets/images/vrushubha/washing_icon.svg)"], [1, "img", 2, "background-image", "url(assets/images/vrushubha/telephon_icon.svg)"], [1, "img", "h", 2, "background-image", "url(assets/images/vrushubha/plus_icon.svg)"], ["id", "gallery", 1, "ftco-section", "bg-light"], ["gallery", ""], ["id", "contact", 1, "ftco-section", "bg-light", "contact"], ["contact", ""], [1, "row", "justify-content-center"], [1, "col-md-4", "col-sm-12", "row", "pl-5", "pb-sm-3"], [1, "col-3"], [1, "contact", "img", 2, "background-image", "url(assets/images/vrushubha/call_icon.svg)"], [1, "col-9", "row"], [1, "col-12"], [1, "col-md-8", "col-sm-12", "row"], [1, "address", "img", 2, "background-image", "url(assets/images/vrushubha/location_icon.svg)"], [1, "col-md-9", "col-sm-12"], [1, "row", "d-flex", "item"], ["data-aos", "fade-down", 1, "col-md-12", "d-flex"], [1, "blog-entry", "attraction-body", "align-self-stretch"], [1, "newsCard", "news-Slide-up"], [1, "block-20", "rounded", 3, "src"], [1, "newsCaption"], [1, "newsCaption-title"], [1, "newsCaption-content"], [1, "heading"], [1, "blog-entry", "gallery-body", "align-self-stretch"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WELCOME TO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "VRUSHABHA HOMESTAY!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your choice to an affordable and unique stay with breathtaking views. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " CALL US AND BOOK NOW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " +91 8762162290 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Vrushabha homestay offers a unique accommodation experience located in Chikkamaglur. We combine affordable stay with convenience to deliver a truly unique stay in one of Bengaluru\u2019s most loved neighborhoods. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " We are passionate in providing a complete and memorable accommodation experience for you, your family/friends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Perfect for the short getaway, special occasion, corporate checkin or longer term \u2018home away from home\u2019. Our friendly Guest Services team are available 7 days to create the perfect stay. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Attraction Around ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "owl-carousel", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HomeComponent_div_49_Template, 13, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "rushabha Facilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Food on Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Laundry Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Doctor on call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Gallery of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "owl-carousel", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, HomeComponent_div_99_Template, 4, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "section", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "rushabha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "+91 876 216 2290");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "+91 973 998 0704");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "+91 974 266 7338");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Vrushabha Home Stay Santhaveri Road, Heddarahalli, Kaimara, Chikkamagaluru - 577101 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.attractions)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attractions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.galleries)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.galleries);
    } }, directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".js-fullheight[_ngcontent-%COMP%] {\n  height: 80vh;\n  margin-top: 148px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: black;\n  opacity: 0.5;\n}\n\n.ml-7[_ngcontent-%COMP%] {\n  margin-left: 6.5rem !important;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  font-weight: lighter;\n  font-family: sans-serif;\n  width: 50vw;\n  padding-top: 0.5em;\n}\n\n.subheading_2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.subheading_3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n\n.hero-wrap[_ngcontent-%COMP%]   .slider-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 31px;\n  font-weight: 700;\n  color: #fff;\n  font-family: \"Playfair Display\", serif;\n  line-height: 1.3;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: #EA6625;\n}\n\n.v[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #EA6625;\n}\n\n.samarkan[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Samarkan\";\n}\n\n.wrap-about[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%] {\n  height: 325px;\n  border-radius: 18px;\n}\n\n.about-body[_ngcontent-%COMP%] {\n  margin-top: 8%;\n}\n\n.attraction-body[_ngcontent-%COMP%], .gallery-body[_ngcontent-%COMP%] {\n  border-bottom: #EA6625 solid 6px;\n  width: 100%;\n}\n\n.ftco-section[_ngcontent-%COMP%] {\n  padding: 2em 0;\n  position: relative;\n}\n\n.gallery-body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nfailities[_ngcontent-%COMP%]   .blog-entry-failities[_ngcontent-%COMP%] {\n  background: transparent;\n  margin: auto;\n}\n\n.failities[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: block;\n  height: 48px;\n  width: 66px;\n  margin: 2em 4em 0.5em;\n}\n\n.failities[_ngcontent-%COMP%]   .img.h[_ngcontent-%COMP%] {\n  height: 75px;\n}\n\n.failities[_ngcontent-%COMP%]   .underscore[_ngcontent-%COMP%] {\n  content: \"\";\n  position: relative;\n  width: 50%;\n  margin: auto;\n  height: 4px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  visibility: visible;\n  background-color: #EA6625;\n  transform: scaleX(0.8);\n}\n\n.contact.img[_ngcontent-%COMP%] {\n  display: block;\n  height: 43px;\n  width: 44px;\n  margin-left: 50%;\n  margin-top: 13px;\n}\n\n.address.img[_ngcontent-%COMP%] {\n  display: block;\n  height: 54px;\n  width: 39px;\n  margin-left: 54%;\n}\n\n.newsCard[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.newsCaption[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  opacity: 0.6;\n  left: 0;\n  width: 100%;\n  height: 90%;\n  background-color: #000;\n  color: #FFF;\n  padding: 15px;\n  opacity: 0;\n  transform: translateY(80%);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.8s, opacity 0.1s 0.3s;\n}\n\n.news-Slide-up[_ngcontent-%COMP%]:hover   .newsCaption[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 0.5;\n  transform: translateY(0px);\n  transition: transform 0.8s, opacity 0.1s;\n}\n\n@media only screen and (max-width: 480px) {\n  .pb-sm-3[_ngcontent-%COMP%] {\n    padding-bottom: 1rem !important;\n  }\n\n  .contact.img[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .owl-carousel[_ngcontent-%COMP%] {\n    width: 85% !important;\n    margin-left: 10% !important;\n  }\n\n  .failities[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    height: 17px;\n    width: 24px;\n    margin: 1em 3em 0.5em;\n  }\n\n  .failities[_ngcontent-%COMP%]   .img.h[_ngcontent-%COMP%] {\n    height: 26px;\n  }\n\n  .failities[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 1.5;\n  }\n\n  .attraction-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .js-fullheight[_ngcontent-%COMP%] {\n    margin-top: 166px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNJLDhCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtBQVNKOztBQVBBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBVUo7O0FBUkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFUQTtFQUNJLGNBQUE7QUFZSjs7QUFWQTs7RUFFSSxnQ0FBQTtFQUNBLFdBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtBQWVKOztBQWJBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBZ0JKOztBQWRBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFpQko7O0FBZkE7RUFDSSxZQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBb0JKOztBQWxCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBcUJKOztBQWxCQTtFQUNJLGtCQUFBO0FBcUJKOztBQWxCQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUdBLDZDQUFBO0FBc0JKOztBQWxCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLDBCQUFBO0VBR0Esd0NBQUE7QUFzQko7O0FBbEJBO0VBQ0k7SUFDSSwrQkFBQTtFQXFCTjs7RUFuQkU7SUFDSSxjQUFBO0VBc0JOOztFQXBCRTtJQUNJLHFCQUFBO0lBQ0EsMkJBQUE7RUF1Qk47O0VBckJFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQXdCTjs7RUF0QkU7SUFDSSxZQUFBO0VBeUJOOztFQXZCRTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBMEJOOztFQXhCRTtJQUNJLGVBQUE7RUEyQk47O0VBekJFO0lBQ0ksaUJBQUE7RUE0Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpzLWZ1bGxoZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgbWFyZ2luLXRvcDogMTQ4cHg7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5tbC03e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWJoZWFkaW5nIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxufVxyXG4uc3ViaGVhZGluZ18ye1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uc3ViaGVhZGluZ18ze1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaGVyby13cmFwIC5zbGlkZXItdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDMxcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiAjRUE2NjI1O1xyXG59XHJcbi52IHNwYW4ge1xyXG4gICAgY29sb3I6ICNFQTY2MjU7XHJcbn1cclxuLnNhbWFya2FuIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYW1hcmthbic7XHJcbn1cclxuLndyYXAtYWJvdXQgLmltZy0yIHtcclxuICAgIGhlaWdodDogMzI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcbi5hYm91dC1ib2R5IHtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG59XHJcbi5hdHRyYWN0aW9uLWJvZHksXHJcbi5nYWxsZXJ5LWJvZHkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI0VBNjYyNSBzb2xpZCA2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZnRjby1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDJlbSAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5nYWxsZXJ5LWJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuZmFpbGl0aWVzIC5ibG9nLWVudHJ5LWZhaWxpdGllcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uZmFpbGl0aWVzIC5pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIG1hcmdpbjogMmVtIDRlbSAwLjVlbTtcclxufVxyXG4uZmFpbGl0aWVzIC5pbWcuaCB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuLmZhaWxpdGllcyAudW5kZXJzY29yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTY2MjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjgpO1xyXG59XHJcbi5jb250YWN0LmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuLmFkZHJlc3MuaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgd2lkdGg6IDM5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTQlO1xyXG59XHJcblxyXG4ubmV3c0NhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmV3c0NhcHRpb24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4MCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIDAuNHMsIC13ZWJraXQtdHJhbnNmb3JtIDAuOHM7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cywgb3BhY2l0eSAwLjFzIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cywgb3BhY2l0eSAwLjFzIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XHJcbn1cclxuXHJcbi5uZXdzLVNsaWRlLXVwOmhvdmVyIC5uZXdzQ2FwdGlvbiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcywgLXdlYmtpdC10cmFuc2Zvcm0gMC40cztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcywgLXdlYmtpdC10cmFuc2Zvcm0gMC44cztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzLCBvcGFjaXR5IDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cywgb3BhY2l0eSAwLjFzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjRzO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5wYi1zbS0zIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QuaW1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5vd2wtY2Fyb3VzZWwge1xyXG4gICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmFpbGl0aWVzIC5pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW46IDFlbSAzZW0gMC41ZW07XHJcbiAgICB9XHJcbiAgICAuZmFpbGl0aWVzIC5pbWcuaCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG4gICAgLmZhaWxpdGllcyAudGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICAgIC5hdHRyYWN0aW9uLWJvZHkgLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5qcy1mdWxsaGVpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNjZweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss'] }]
    }], function () { return [{ type: src_app_common_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"] }]; }, { homeElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['home']
        }], aboutElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['about']
        }], attractionElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['attraction']
        }], facilityElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['facility']
        }], galleryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gallery']
        }], contactElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contact']
        }], checkOffsetTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\Vrushabha\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map