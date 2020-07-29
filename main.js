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
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/experience/experience.component */ "./src/app/modules/experience/experience.component.ts");
/* harmony import */ var _modules_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about/about.component */ "./src/app/modules/about/about.component.ts");
/* harmony import */ var _modules_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/projects/projects.component */ "./src/app/modules/projects/projects.component.ts");
/* harmony import */ var _modules_photography_photography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/photography/photography.component */ "./src/app/modules/photography/photography.component.ts");









const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about',
        component: _modules_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'experience',
        component: _modules_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]
    },
    {
        path: 'projects',
        component: _modules_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    },
    {
        path: 'photography',
        component: _modules_photography_photography_component__WEBPACK_IMPORTED_MODULE_6__["PhotographyComponent"]
    },
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'nikhar';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _modules_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/experience/experience.component */ "./src/app/modules/experience/experience.component.ts");
/* harmony import */ var _modules_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/about/about.component */ "./src/app/modules/about/about.component.ts");
/* harmony import */ var _modules_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/projects/projects.component */ "./src/app/modules/projects/projects.component.ts");
/* harmony import */ var _modules_photography_photography_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/photography/photography.component */ "./src/app/modules/photography/photography.component.ts");
/* harmony import */ var _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/background/background.component */ "./src/app/core/components/background/background.component.ts");
/* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-image-gallery */ "./node_modules/angular2-image-gallery/__ivy_ngcc__/fesm2015/angular2-image-gallery.js");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            angular2_image_gallery__WEBPACK_IMPORTED_MODULE_13__["Angular2ImageGalleryModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _modules_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
        _modules_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _modules_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
        _modules_photography_photography_component__WEBPACK_IMPORTED_MODULE_11__["PhotographyComponent"],
        _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_12__["BackgroundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        angular2_image_gallery__WEBPACK_IMPORTED_MODULE_13__["Angular2ImageGalleryModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _modules_experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
                    _modules_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _modules_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                    _modules_photography_photography_component__WEBPACK_IMPORTED_MODULE_11__["PhotographyComponent"],
                    _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_12__["BackgroundComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    angular2_image_gallery__WEBPACK_IMPORTED_MODULE_13__["Angular2ImageGalleryModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/components/background/background.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/background/background.component.ts ***!
  \********************************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["app-background"]], decls: 31, vars: 0, consts: [["id", "particle-container"], [1, "particle"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background: black;\n}\n\n.particle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n}\n\n@keyframes particle-animation-1 {\n  100% {\n    transform: translate3d(2vw, 34vh, 52px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(1) {\n  animation: particle-animation-1 60s infinite;\n  opacity: 0.62;\n  height: 6px;\n  width: 6px;\n  animation-delay: -0.2s;\n  transform: translate3d(84vw, 65vh, 40px);\n  background: #26d935;\n}\n\n@keyframes particle-animation-2 {\n  100% {\n    transform: translate3d(81vw, 11vh, 90px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(2) {\n  animation: particle-animation-2 60s infinite;\n  opacity: 0.97;\n  height: 6px;\n  width: 6px;\n  animation-delay: -0.4s;\n  transform: translate3d(8vw, 30vh, 44px);\n  background: #26d9bb;\n}\n\n@keyframes particle-animation-3 {\n  100% {\n    transform: translate3d(28vw, 86vh, 14px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(3) {\n  animation: particle-animation-3 60s infinite;\n  opacity: 0.38;\n  height: 10px;\n  width: 10px;\n  animation-delay: -0.6s;\n  transform: translate3d(25vw, 73vh, 59px);\n  background: #d9d926;\n}\n\n@keyframes particle-animation-4 {\n  100% {\n    transform: translate3d(45vw, 63vh, 12px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(4) {\n  animation: particle-animation-4 60s infinite;\n  opacity: 0.85;\n  height: 8px;\n  width: 8px;\n  animation-delay: -0.8s;\n  transform: translate3d(31vw, 85vh, 87px);\n  background: #c4d926;\n}\n\n@keyframes particle-animation-5 {\n  100% {\n    transform: translate3d(21vw, 46vh, 11px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(5) {\n  animation: particle-animation-5 60s infinite;\n  opacity: 0.99;\n  height: 10px;\n  width: 10px;\n  animation-delay: -1s;\n  transform: translate3d(38vw, 80vh, 77px);\n  background: #a3d926;\n}\n\n@keyframes particle-animation-6 {\n  100% {\n    transform: translate3d(14vw, 71vh, 4px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(6) {\n  animation: particle-animation-6 60s infinite;\n  opacity: 0.17;\n  height: 6px;\n  width: 6px;\n  animation-delay: -1.2s;\n  transform: translate3d(42vw, 75vh, 6px);\n  background: #3226d9;\n}\n\n@keyframes particle-animation-7 {\n  100% {\n    transform: translate3d(50vw, 86vh, 52px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(7) {\n  animation: particle-animation-7 60s infinite;\n  opacity: 0.9;\n  height: 6px;\n  width: 6px;\n  animation-delay: -1.4s;\n  transform: translate3d(31vw, 23vh, 34px);\n  background: #2691d9;\n}\n\n@keyframes particle-animation-8 {\n  100% {\n    transform: translate3d(60vw, 80vh, 34px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(8) {\n  animation: particle-animation-8 60s infinite;\n  opacity: 0.63;\n  height: 9px;\n  width: 9px;\n  animation-delay: -1.6s;\n  transform: translate3d(69vw, 75vh, 45px);\n  background: #3b26d9;\n}\n\n@keyframes particle-animation-9 {\n  100% {\n    transform: translate3d(44vw, 36vh, 38px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(9) {\n  animation: particle-animation-9 60s infinite;\n  opacity: 0.75;\n  height: 6px;\n  width: 6px;\n  animation-delay: -1.8s;\n  transform: translate3d(77vw, 21vh, 84px);\n  background: #32d926;\n}\n\n@keyframes particle-animation-10 {\n  100% {\n    transform: translate3d(56vw, 83vh, 84px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(10) {\n  animation: particle-animation-10 60s infinite;\n  opacity: 0.65;\n  height: 7px;\n  width: 7px;\n  animation-delay: -2s;\n  transform: translate3d(17vw, 71vh, 10px);\n  background: #38d926;\n}\n\n@keyframes particle-animation-11 {\n  100% {\n    transform: translate3d(64vw, 10vh, 29px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(11) {\n  animation: particle-animation-11 60s infinite;\n  opacity: 0.31;\n  height: 7px;\n  width: 7px;\n  animation-delay: -2.2s;\n  transform: translate3d(82vw, 73vh, 77px);\n  background: #d9c726;\n}\n\n@keyframes particle-animation-12 {\n  100% {\n    transform: translate3d(36vw, 57vh, 43px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(12) {\n  animation: particle-animation-12 60s infinite;\n  opacity: 0.01;\n  height: 6px;\n  width: 6px;\n  animation-delay: -2.4s;\n  transform: translate3d(34vw, 26vh, 57px);\n  background: #7426d9;\n}\n\n@keyframes particle-animation-13 {\n  100% {\n    transform: translate3d(47vw, 31vh, 63px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(13) {\n  animation: particle-animation-13 60s infinite;\n  opacity: 0.64;\n  height: 6px;\n  width: 6px;\n  animation-delay: -2.6s;\n  transform: translate3d(52vw, 64vh, 68px);\n  background: #d93526;\n}\n\n@keyframes particle-animation-14 {\n  100% {\n    transform: translate3d(5vw, 39vh, 89px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(14) {\n  animation: particle-animation-14 60s infinite;\n  opacity: 0.98;\n  height: 6px;\n  width: 6px;\n  animation-delay: -2.8s;\n  transform: translate3d(37vw, 54vh, 18px);\n  background: #d926b5;\n}\n\n@keyframes particle-animation-15 {\n  100% {\n    transform: translate3d(10vw, 89vh, 72px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(15) {\n  animation: particle-animation-15 60s infinite;\n  opacity: 0.24;\n  height: 9px;\n  width: 9px;\n  animation-delay: -3s;\n  transform: translate3d(59vw, 86vh, 1px);\n  background: #4126d9;\n}\n\n@keyframes particle-animation-16 {\n  100% {\n    transform: translate3d(86vw, 64vh, 94px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(16) {\n  animation: particle-animation-16 60s infinite;\n  opacity: 0.84;\n  height: 6px;\n  width: 6px;\n  animation-delay: -3.2s;\n  transform: translate3d(76vw, 76vh, 63px);\n  background: #d93e26;\n}\n\n@keyframes particle-animation-17 {\n  100% {\n    transform: translate3d(81vw, 18vh, 30px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(17) {\n  animation: particle-animation-17 60s infinite;\n  opacity: 0.7;\n  height: 7px;\n  width: 7px;\n  animation-delay: -3.4s;\n  transform: translate3d(36vw, 46vh, 73px);\n  background: #be26d9;\n}\n\n@keyframes particle-animation-18 {\n  100% {\n    transform: translate3d(43vw, 38vh, 50px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(18) {\n  animation: particle-animation-18 60s infinite;\n  opacity: 0.99;\n  height: 8px;\n  width: 8px;\n  animation-delay: -3.6s;\n  transform: translate3d(80vw, 11vh, 80px);\n  background: #26d956;\n}\n\n@keyframes particle-animation-19 {\n  100% {\n    transform: translate3d(33vw, 42vh, 20px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(19) {\n  animation: particle-animation-19 60s infinite;\n  opacity: 0.74;\n  height: 9px;\n  width: 9px;\n  animation-delay: -3.8s;\n  transform: translate3d(41vw, 73vh, 68px);\n  background: #80d926;\n}\n\n@keyframes particle-animation-20 {\n  100% {\n    transform: translate3d(13vw, 2vh, 14px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(20) {\n  animation: particle-animation-20 60s infinite;\n  opacity: 0.19;\n  height: 8px;\n  width: 8px;\n  animation-delay: -4s;\n  transform: translate3d(18vw, 64vh, 71px);\n  background: #4ad926;\n}\n\n@keyframes particle-animation-21 {\n  100% {\n    transform: translate3d(14vw, 80vh, 91px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(21) {\n  animation: particle-animation-21 60s infinite;\n  opacity: 0.27;\n  height: 6px;\n  width: 6px;\n  animation-delay: -4.2s;\n  transform: translate3d(30vw, 19vh, 35px);\n  background: #d9d026;\n}\n\n@keyframes particle-animation-22 {\n  100% {\n    transform: translate3d(67vw, 82vh, 68px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(22) {\n  animation: particle-animation-22 60s infinite;\n  opacity: 0.36;\n  height: 8px;\n  width: 8px;\n  animation-delay: -4.4s;\n  transform: translate3d(90vw, 78vh, 69px);\n  background: #d9b226;\n}\n\n@keyframes particle-animation-23 {\n  100% {\n    transform: translate3d(69vw, 44vh, 91px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(23) {\n  animation: particle-animation-23 60s infinite;\n  opacity: 0.24;\n  height: 8px;\n  width: 8px;\n  animation-delay: -4.6s;\n  transform: translate3d(23vw, 80vh, 76px);\n  background: #26d971;\n}\n\n@keyframes particle-animation-24 {\n  100% {\n    transform: translate3d(44vw, 50vh, 66px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(24) {\n  animation: particle-animation-24 60s infinite;\n  opacity: 0.38;\n  height: 9px;\n  width: 9px;\n  animation-delay: -4.8s;\n  transform: translate3d(54vw, 47vh, 40px);\n  background: #b5d926;\n}\n\n@keyframes particle-animation-25 {\n  100% {\n    transform: translate3d(69vw, 76vh, 18px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(25) {\n  animation: particle-animation-25 60s infinite;\n  opacity: 0.24;\n  height: 6px;\n  width: 6px;\n  animation-delay: -5s;\n  transform: translate3d(72vw, 14vh, 95px);\n  background: #d926d3;\n}\n\n@keyframes particle-animation-26 {\n  100% {\n    transform: translate3d(6vw, 61vh, 76px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(26) {\n  animation: particle-animation-26 60s infinite;\n  opacity: 0.23;\n  height: 10px;\n  width: 10px;\n  animation-delay: -5.2s;\n  transform: translate3d(43vw, 4vh, 37px);\n  background: #26d982;\n}\n\n@keyframes particle-animation-27 {\n  100% {\n    transform: translate3d(82vw, 46vh, 13px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(27) {\n  animation: particle-animation-27 60s infinite;\n  opacity: 0.91;\n  height: 10px;\n  width: 10px;\n  animation-delay: -5.4s;\n  transform: translate3d(85vw, 39vh, 6px);\n  background: #32d926;\n}\n\n@keyframes particle-animation-28 {\n  100% {\n    transform: translate3d(25vw, 89vh, 1px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(28) {\n  animation: particle-animation-28 60s infinite;\n  opacity: 0.42;\n  height: 10px;\n  width: 10px;\n  animation-delay: -5.6s;\n  transform: translate3d(9vw, 54vh, 92px);\n  background: #d926a9;\n}\n\n@keyframes particle-animation-29 {\n  100% {\n    transform: translate3d(40vw, 31vh, 21px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(29) {\n  animation: particle-animation-29 60s infinite;\n  opacity: 0.72;\n  height: 6px;\n  width: 6px;\n  animation-delay: -5.8s;\n  transform: translate3d(52vw, 52vh, 99px);\n  background: #6ed926;\n}\n\n@keyframes particle-animation-30 {\n  100% {\n    transform: translate3d(8vw, 21vh, 86px);\n  }\n}\n\n.particle[_ngcontent-%COMP%]:nth-child(30) {\n  animation: particle-animation-30 60s infinite;\n  opacity: 0.87;\n  height: 8px;\n  width: 8px;\n  animation-delay: -6s;\n  transform: translate3d(81vw, 26vh, 15px);\n  background: #a9d926;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDQyxrQkFBQTtFQUNDLGtCQUFBO0FBQ0Y7O0FBR0M7RUFDQztJQUNDLHVDQUFBO0VBQUQ7QUFDRjs7QUFHQztFQUNDLDRDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBWkM7RUFDQztJQUNDLHdDQUFBO0VBZUQ7QUFDRjs7QUFaQztFQUNDLDRDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBYUY7O0FBM0JDO0VBQ0M7SUFDQyx3Q0FBQTtFQThCRDtBQUNGOztBQTNCQztFQUNDLDRDQUFBO0VBRUEsYUFBQTtFQUNBLFlBRk87RUFHUCxXQUhPO0VBSVAsc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBNEJGOztBQTFDQztFQUNDO0lBQ0Msd0NBQUE7RUE2Q0Q7QUFDRjs7QUExQ0M7RUFDQyw0Q0FBQTtFQUVBLGFBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQTJDRjs7QUF6REM7RUFDQztJQUNDLHdDQUFBO0VBNEREO0FBQ0Y7O0FBekRDO0VBQ0MsNENBQUE7RUFFQSxhQUFBO0VBQ0EsWUFGTztFQUdQLFdBSE87RUFJUCxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUEwREY7O0FBeEVDO0VBQ0M7SUFDQyx1Q0FBQTtFQTJFRDtBQUNGOztBQXhFQztFQUNDLDRDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBeUVGOztBQXZGQztFQUNDO0lBQ0Msd0NBQUE7RUEwRkQ7QUFDRjs7QUF2RkM7RUFDQyw0Q0FBQTtFQUVBLFlBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQXdGRjs7QUF0R0M7RUFDQztJQUNDLHdDQUFBO0VBeUdEO0FBQ0Y7O0FBdEdDO0VBQ0MsNENBQUE7RUFFQSxhQUFBO0VBQ0EsV0FGTztFQUdQLFVBSE87RUFJUCxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUF1R0Y7O0FBckhDO0VBQ0M7SUFDQyx3Q0FBQTtFQXdIRDtBQUNGOztBQXJIQztFQUNDLDRDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBc0hGOztBQXBJQztFQUNDO0lBQ0Msd0NBQUE7RUF1SUQ7QUFDRjs7QUFwSUM7RUFDQyw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQXFJRjs7QUFuSkM7RUFDQztJQUNDLHdDQUFBO0VBc0pEO0FBQ0Y7O0FBbkpDO0VBQ0MsNkNBQUE7RUFFQSxhQUFBO0VBQ0EsV0FGTztFQUdQLFVBSE87RUFJUCxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFvSkY7O0FBbEtDO0VBQ0M7SUFDQyx3Q0FBQTtFQXFLRDtBQUNGOztBQWxLQztFQUNDLDZDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBbUtGOztBQWpMQztFQUNDO0lBQ0Msd0NBQUE7RUFvTEQ7QUFDRjs7QUFqTEM7RUFDQyw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQWtMRjs7QUFoTUM7RUFDQztJQUNDLHVDQUFBO0VBbU1EO0FBQ0Y7O0FBaE1DO0VBQ0MsNkNBQUE7RUFFQSxhQUFBO0VBQ0EsV0FGTztFQUdQLFVBSE87RUFJUCxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFpTUY7O0FBL01DO0VBQ0M7SUFDQyx3Q0FBQTtFQWtORDtBQUNGOztBQS9NQztFQUNDLDZDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsb0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBZ05GOztBQTlOQztFQUNDO0lBQ0Msd0NBQUE7RUFpT0Q7QUFDRjs7QUE5TkM7RUFDQyw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQStORjs7QUE3T0M7RUFDQztJQUNDLHdDQUFBO0VBZ1BEO0FBQ0Y7O0FBN09DO0VBQ0MsNkNBQUE7RUFFQSxZQUFBO0VBQ0EsV0FGTztFQUdQLFVBSE87RUFJUCxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUE4T0Y7O0FBNVBDO0VBQ0M7SUFDQyx3Q0FBQTtFQStQRDtBQUNGOztBQTVQQztFQUNDLDZDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBNlBGOztBQTNRQztFQUNDO0lBQ0Msd0NBQUE7RUE4UUQ7QUFDRjs7QUEzUUM7RUFDQyw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQTRRRjs7QUExUkM7RUFDQztJQUNDLHVDQUFBO0VBNlJEO0FBQ0Y7O0FBMVJDO0VBQ0MsNkNBQUE7RUFFQSxhQUFBO0VBQ0EsV0FGTztFQUdQLFVBSE87RUFJUCxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUEyUkY7O0FBelNDO0VBQ0M7SUFDQyx3Q0FBQTtFQTRTRDtBQUNGOztBQXpTQztFQUNDLDZDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBMFNGOztBQXhUQztFQUNDO0lBQ0Msd0NBQUE7RUEyVEQ7QUFDRjs7QUF4VEM7RUFDQyw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQXlURjs7QUF2VUM7RUFDQztJQUNDLHdDQUFBO0VBMFVEO0FBQ0Y7O0FBdlVDO0VBQ0MsNkNBQUE7RUFFQSxhQUFBO0VBQ0EsV0FGTztFQUdQLFVBSE87RUFJUCxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUF3VUY7O0FBdFZDO0VBQ0M7SUFDQyx3Q0FBQTtFQXlWRDtBQUNGOztBQXRWQztFQUNDLDZDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBdVZGOztBQXJXQztFQUNDO0lBQ0Msd0NBQUE7RUF3V0Q7QUFDRjs7QUFyV0M7RUFDQyw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxXQUZPO0VBR1AsVUFITztFQUlQLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQXNXRjs7QUFwWEM7RUFDQztJQUNDLHVDQUFBO0VBdVhEO0FBQ0Y7O0FBcFhDO0VBQ0MsNkNBQUE7RUFFQSxhQUFBO0VBQ0EsWUFGTztFQUdQLFdBSE87RUFJUCxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7QUFxWEY7O0FBbllDO0VBQ0M7SUFDQyx3Q0FBQTtFQXNZRDtBQUNGOztBQW5ZQztFQUNDLDZDQUFBO0VBRUEsYUFBQTtFQUNBLFlBRk87RUFHUCxXQUhPO0VBSVAsc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBb1lGOztBQWxaQztFQUNDO0lBQ0MsdUNBQUE7RUFxWkQ7QUFDRjs7QUFsWkM7RUFDQyw2Q0FBQTtFQUVBLGFBQUE7RUFDQSxZQUZPO0VBR1AsV0FITztFQUlQLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQW1aRjs7QUFqYUM7RUFDQztJQUNDLHdDQUFBO0VBb2FEO0FBQ0Y7O0FBamFDO0VBQ0MsNkNBQUE7RUFFQSxhQUFBO0VBQ0EsV0FGTztFQUdQLFVBSE87RUFJUCxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFrYUY7O0FBaGJDO0VBQ0M7SUFDQyx1Q0FBQTtFQW1iRDtBQUNGOztBQWhiQztFQUNDLDZDQUFBO0VBRUEsYUFBQTtFQUNBLFdBRk87RUFHUCxVQUhPO0VBSVAsb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBaWJGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ucGFydGljbGUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMzAge1xuXHRAa2V5ZnJhbWVzIHBhcnRpY2xlLWFuaW1hdGlvbi0jeyRpfSB7XG5cdFx0MTAwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKChyYW5kb20oOTApICogMXZ3KSwgKHJhbmRvbSg5MCkgKiAxdmgpLCAocmFuZG9tKDEwMCkgKiAxcHgpKTtcblx0XHR9XG5cdH1cblx0XG5cdC5wYXJ0aWNsZTpudGgtY2hpbGQoI3skaX0pe1xuXHRcdGFuaW1hdGlvbjogcGFydGljbGUtYW5pbWF0aW9uLSN7JGl9IDYwcyBpbmZpbml0ZTtcblx0XHQkc2l6ZTogcmFuZG9tKDUpICsgNSArIHB4O1xuXHRcdG9wYWNpdHk6IHJhbmRvbSgxMDApLzEwMDtcblx0XHRoZWlnaHQ6ICRzaXplO1xuXHRcdHdpZHRoOiAkc2l6ZTtcblx0XHRhbmltYXRpb24tZGVsYXk6IC0kaSAqIC4ycztcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKChyYW5kb20oOTApICogMXZ3KSwgKHJhbmRvbSg5MCkgKiAxdmgpLCAocmFuZG9tKDEwMCkgKiAxcHgpKTtcblx0XHRiYWNrZ3JvdW5kOiBoc2wocmFuZG9tKDM2MCksIDcwJSwgNTAlKTtcblx0fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "content", "has-text-centered"], ["href", "https://twitter.com/nikhararora41"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Made with <3 by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nikhar Arora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/about"]; };
const _c1 = function () { return ["/experience"]; };
const _c2 = function () { return ["/projects"]; };
const _c3 = function () { return ["/photography"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 8, consts: [[1, "container"], [1, "all"], [1, "lefter", 3, "routerLink"], [1, "left", 3, "routerLink"], ["routerLink", "", 1, "center"], [1, "right", 3, "routerLink"], [1, "righter", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  background: black;\n  overflow-x: hidden;\n  position: fixed;\n  overflow: hidden;\n  top: 0px;\n  width: 100%;\n  z-index: 999;\n}\n.container[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%] {\n  display: flex;\n  perspective: 10px;\n  transform: perspective(300px) rotateX(20deg);\n  will-change: perspective;\n  perspective-origin: center center;\n  transition: all 1.3s ease-out;\n  justify-content: center;\n  transform-style: preserve-3d;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.container[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]:hover {\n  perspective: 1000px;\n  transition: all 1s ease-in;\n  transform: perspective(10000px) rotateX(0deg);\n}\n.container[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0s;\n}\n.container[_ngcontent-%COMP%]   .all[_ngcontent-%COMP%]:hover   .explainer[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 105px;\n  transform-style: preserve-3d;\n  opacity: 0;\n  transition: all 0.3s ease;\n  transition-delay: 1s;\n  position: relative;\n  background-position: center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  background-blend-mode: color-burn;\n}\n.container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .lefter[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .righter[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  padding-top: 2rem;\n  transform-style: preserve-3d;\n  opacity: 0;\n  transition: all 0.3s ease;\n  transition-delay: 1s;\n  position: relative;\n  background-position: center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  background-blend-mode: color-burn;\n}\n.container[_ngcontent-%COMP%]   .lefter[_ngcontent-%COMP%] {\n  transform: translateX(-60px) translateZ(-50px) rotateY(-10deg);\n  background-image: url('user.png');\n}\n.container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  transform: translateX(-30px) translateZ(-25px) rotateY(-5deg);\n  background-image: url('resume.png');\n}\n.container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-image: url('logo.png');\n}\n.container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  transform: translateX(30px) translateZ(-25px) rotateY(5deg);\n  background-image: url('prog.png');\n}\n.container[_ngcontent-%COMP%]   .righter[_ngcontent-%COMP%] {\n  transform: translateX(60px) translateZ(-50px) rotateY(10deg);\n  background-image: url('camera.png');\n}\n@media (max-width: 1024px) {\n  .all[_ngcontent-%COMP%] {\n    width: 50% !important;\n    margin: 0 auto !important;\n    transition: none !important;\n    transform: none !important;\n    perspective: 1000px !important;\n  }\n  .all[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n    transition-delay: 0s;\n  }\n  .all[_ngcontent-%COMP%]   .explainer[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n\n  .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%], .lefter[_ngcontent-%COMP%], .righter[_ngcontent-%COMP%] {\n    padding-top: 3rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZDQUFBO0FBQ0o7QUFBSTtFQUNFLFVBQUE7QUFFTjtBQUFJO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBRU47QUFBSTtFQUNFLFVBQUE7QUFFTjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQURKO0FBSUU7RUFDRSw4REFBQTtFQUNBLGlDQUFBO0FBRko7QUFJRTtFQUNFLDZEQUFBO0VBQ0EsbUNBQUE7QUFGSjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGlDQUFBO0FBRko7QUFJRTtFQUNFLDJEQUFBO0VBQ0EsaUNBQUE7QUFGSjtBQUlFO0VBQ0UsNERBQUE7RUFDQSxtQ0FBQTtBQUZKO0FBTUE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsOEJBQUE7RUFIRjtFQUlFO0lBQ0UscUJBQUE7SUFDQSxvQkFBQTtFQUZKO0VBSUU7SUFDRSxVQUFBO0VBRko7O0VBS0E7SUFDRSw0QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOmJsYWNrO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG5cbiAgLmFsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwZXJzcGVjdGl2ZTogMTBweDtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDMwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgICB3aWxsLWNoYW5nZTogcGVyc3BlY3RpdmU7XG4gICAgcGVyc3BlY3RpdmUtb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAxLjNzIGVhc2Utb3V0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cbiAgLmFsbDpob3ZlciB7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDAwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gICAgLnRleHQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgJiA+IGRpdiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuICAgIC5leHBsYWluZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jZW50ZXIge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcbiAgfVxuXG4gIC5sZWZ0LCAucmlnaHQsIC5sZWZ0ZXIsIC5yaWdodGVyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xuICB9XG4gIFxuICAubGVmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwcHgpIHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoLTEwZGVnKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3VzZXIucG5nXCIpO1xuICB9XG4gIC5sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpIHRyYW5zbGF0ZVooLTI1cHgpIHJvdGF0ZVkoLTVkZWcpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVzdW1lLnBuZ1wiKTtcbiAgfVxuICAuY2VudGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nby5wbmdcIik7XG4gIH1cbiAgLnJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWigtMjVweCkgcm90YXRlWSg1ZGVnKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Byb2cucG5nXCIpO1xuICB9XG4gIC5yaWdodGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjBweCkgdHJhbnNsYXRlWigtNTBweCkgcm90YXRlWSgxMGRlZyk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9jYW1lcmEucG5nXCIpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFsbCB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHggIWltcG9ydGFudDtcbiAgICAmID4gZGl2IHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIH1cbiAgICAuZXhwbGFpbmVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIC5sZWZ0LCAucmlnaHQsIC5sZWZ0ZXIsIC5yaWdodGVyIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/background/background.component */ "./src/app/core/components/background/background.component.ts");




class AboutComponent {
    constructor() {
        this.intro = "Hello! I am an undergraduate at the University of California, Berkeley studying Electrical \
          Engineering and Computer Science (EECS) and Business Administration. I'm interested in Machine Learning, \
          Deep Neural Networks, Full-Stack Web Development, and Mobile Development.";
        this.interests = "I am a passionate follower of Bay Area sports teams (SF Giants, GS Warriors, SF 49ers). \
              In my free time I love to cook and bake, play the guitar and ukulele, \
              take and edit photos, and beat my family at Settlers of Catan.";
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 53, vars: 2, consts: [[1, "container"], [1, "imagetext"], [1, "portrait"], ["src", "assets/img/headshot.JPG"], [1, "box"], [1, "text"], [1, "title"], [1, "block"], [1, "role"], [1, "p"], [1, "interests"], [1, "buttons"], ["id", "testbutton", "href", "assets/resume.pdf", 1, "resume", "mr-0", "ml-auto"], [1, "social-links", 2, "float", "right"], ["href", "https://www.facebook.com/nikyarora41"], [1, "fa", "fa-facebook"], ["href", "https://twitter.com/nikyarora41"], [1, "fa", "fa-twitter"], ["href", "https://www.instagram.com/nikyarora/"], [1, "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/nikhararora/"], [1, "fa", "fa-linkedin"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.intro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.interests);
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]], styles: ["@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap\");\n@font-face {\n  font-family: theinhardt;\n  src: url('TheinhardtPan-Regular.otf') format(\"opentype\");\n}\n.container[_ngcontent-%COMP%] {\n  background: black;\n  width: 100%;\n  height: 100vh;\n  padding-top: 8rem;\n  overflow-y: scroll;\n}\n.container[_ngcontent-%COMP%]   .imagetext[_ngcontent-%COMP%] {\n  display: flex;\n  width: 70%;\n  margin: 0 auto;\n  text-align: justify;\n  padding-top: 8rem;\n}\n.container[_ngcontent-%COMP%]   .portrait[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-left: 3rem;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 0.6rem;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0 auto;\n  padding-top: 4rem;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .resume[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 23.5rem;\n  border-radius: 50%;\n  padding-top: 0.15rem;\n}\n.container[_ngcontent-%COMP%]   .portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  color: #fff;\n  font-size: 30px;\n}\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"theinhardt\";\n  color: #ffffff;\n  font-size: 18px;\n  font-weight: 300;\n}\n@media (max-width: 1024px) {\n  .imagetext[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 70%;\n    margin: 0 auto;\n    text-align: justify;\n    padding-top: 5rem !important;\n  }\n\n  .portrait[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 200px !important;\n    display: block !important;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    width: 100% !important;\n    flex-direction: column;\n    margin: 0 auto !important;\n    text-align: center !important;\n    display: block !important;\n  }\n  .box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   title[_ngcontent-%COMP%] {\n    margin: 0 auto !important;\n    text-align: center !important;\n  }\n  .box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    width: 200px !important;\n    position: relative !important;\n    margin: 0 auto !important;\n    padding-right: 1rem !important;\n    padding-top: 2rem !important;\n    flex-direction: column !important;\n  }\n  .box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .resume[_ngcontent-%COMP%] {\n    margin-right: auto !important;\n    padding-left: 1.5rem;\n  }\n  .box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n    width: 100% !important;\n    position: relative !important;\n    left: 0 !important;\n    border-radius: 20% !important;\n    padding-top: 2rem !important;\n    padding-bottom: 3rem !important;\n    display: inline-block !important;\n  }\n  .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background: black;\n  }\n  .box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    background: black;\n  }\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #00071c;\n}\nul[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  transform-style: preserve-3d;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  width: 50px !important;\n  height: 50px !important;\n  margin: 0 15px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex !important;\n  background: #2a2a2a;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 30px !important;\n  border-radius: 50%;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  z-index: 1000;\n  transition: 0.3s;\n  color: #fff;\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.5);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(5) {\n  transform: translate(5px, -5px);\n  opacity: 1;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translate(0, 0);\n  opacity: 0.2;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1):hover   span[_ngcontent-%COMP%] {\n  background: #3b5998;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   span[_ngcontent-%COMP%] {\n  background: #00acee;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   span[_ngcontent-%COMP%] {\n  background: #F56040;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4):hover   span[_ngcontent-%COMP%] {\n  background: #0e76a8;\n}\n#testbutton[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 50px;\n  border-radius: 180px;\n  position: relative;\n  left: calc(50% - 75px);\n  top: calc(50% - 25px);\n  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n  cursor: pointer;\n  line-height: 12px;\n  font-weight: 300;\n  font-family: \"Lato\";\n  color: #ffffff;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n#testbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  z-index: 1;\n  position: absolute;\n  display: block;\n  width: 80%;\n  height: 70%;\n  top: 15%;\n  left: 10%;\n  transition: 0.3s opacity ease-in-out;\n  filter: blur(15px);\n  opacity: 0;\n  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n}\n#testbutton[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n  transition: 0.3s opacity ease-in-out;\n  filter: blur(25px);\n  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n}\n#testbutton[_ngcontent-%COMP%]:after {\n  content: \"Resume\";\n  text-align: center;\n  font-family: \"Lato\";\n  line-height: 40px;\n  font-size: 15px;\n  color: #ebebeb;\n  z-index: 5;\n  position: absolute;\n  display: block;\n  border-radius: 180px;\n  width: 92%;\n  height: 80%;\n  top: 10%;\n  left: 4%;\n  background-color: #131416;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUNBLG9HQUFBO0FBQ1I7RUFDRSx1QkFBQTtFQUNBLHdEQUFBO0FBQ0Y7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRFI7QUFJSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDSSxtQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFIWjtBQUlZO0VBQ0Usb0JBQUE7QUFGZDtBQUlZO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUZkO0FBT0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUxSO0FBUUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTlI7QUFTSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBSO0FBV0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0VBUkY7O0VBV0E7SUFDRSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBUkY7O0VBV0E7SUFDRSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSw2QkFBQTtJQUNBLHlCQUFBO0VBUkY7RUFVRTtJQUNFLHlCQUFBO0lBQ0EsNkJBQUE7RUFSSjtFQVdFO0lBQ0ksdUJBQUE7SUFDQSw2QkFBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7SUFDQSw0QkFBQTtJQUNBLGlDQUFBO0VBVE47RUFXTTtJQUNFLDZCQUFBO0lBQ0Esb0JBQUE7RUFUUjtFQVdNO0lBQ0Usc0JBQUE7SUFDQSw2QkFBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsZ0NBQUE7RUFUUjtFQVlFO0lBQ0UsaUJBQUE7RUFWSjtFQWFFO0lBQ0UsaUJBQUE7RUFYSjtBQUNGO0FBZUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQWJGO0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFiRjtBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBYkY7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFiRjtBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFiRjtBQWdCQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQWJGO0FBZ0JBO0VBQ0UsK0JBQUE7RUFDQSxVQUFBO0FBYkY7QUFlQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQVpGO0FBZUE7RUFDRSxtQkFBQTtBQVpGO0FBZUE7RUFDRSxtQkFBQTtBQVpGO0FBZUE7RUFDRSxtQkFBQTtBQVpGO0FBZUE7RUFDRSxtQkFBQTtBQVpGO0FBZUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFlQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEdBQUE7QUFaRjtBQWVBO0VBQ0UsVUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwwR0FBQTtBQVpGO0FBZUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0FBYkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDB8UG9wcGluczozMDAsNDAwLDgwMCZkaXNwbGF5PXN3YXAnKTtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogdGhlaW5oYXJkdDtcbiAgc3JjOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9UaGVpbmhhcmR0UGFuLVJlZ3VsYXIub3RmJykgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6YmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgXG4gICAgLmltYWdldGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICB9XG4gICAgXG4gICAgLnBvcnRyYWl0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgLmJveCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgICAgICBcbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLnJlc3VtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogMjMuNXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC4xNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgIFxuICAgIC5wb3J0cmFpdCBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogJ3RoZWluaGFyZHQnO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaW1hZ2V0ZXh0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nLXRvcDogNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBvcnRyYWl0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufVxuXG4gIC5ib3gge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgLnRleHQsIHRpdGxlIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLnJlc3VtZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHVsIGxpIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgfVxuXG4gICAgdWwgbGk6aG92ZXIgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB9XG4gIH1cbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMDAwNzFjO1xufVxuXG51bCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxudWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxudWwgbGkgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMyYTJhMmE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxudWwgbGk6aG92ZXIgc3BhbiB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRyYW5zaXRpb246IC4zcztcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIC41KTtcbn1cblxudWwgbGk6aG92ZXIgc3BhbjpudGgtY2hpbGQoNSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xuICBvcGFjaXR5OiAxO1xufVxudWwgbGk6aG92ZXIgc3BhbjpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgb3BhY2l0eTogLjI7XG59XG5cbnVsIGxpOm50aC1jaGlsZCgxKTpob3ZlciBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cblxudWwgbGk6bnRoLWNoaWxkKDIpOmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDBhY2VlO1xufVxuXG51bCBsaTpudGgtY2hpbGQoMyk6aG92ZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNGNTYwNDA7XG59XG5cbnVsIGxpOm50aC1jaGlsZCg0KTpob3ZlciBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzBlNzZhODtcbn1cblxuI3Rlc3RidXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDo1MHB4O1xuICBib3JkZXItcmFkaXVzOjE4MHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDpjYWxjKDUwJSAtIDc1cHgpO1xuICB0b3A6Y2FsYyg1MCUgLSAyNXB4KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZjc5NTMzLCAjZjM3MDU1LCAjZWY0ZTdiLCAjYTE2NmFiLCAjNTA3M2I4LCAjMTA5OGFkLCAjMDdiMzliLCAjNmZiYTgyKTtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OjEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiN0ZXN0YnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6Jyc7XG4gIHotaW5kZXg6MTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjgwJTtcbiAgaGVpZ2h0OjcwJTtcbiAgdG9wOjE1JTtcbiAgbGVmdDoxMCU7XG4gIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eSBlYXNlLWluLW91dDtcbiAgZmlsdGVyOmJsdXIoMTVweCk7XG4gIG9wYWNpdHk6MDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZjc5NTMzLCAjZjM3MDU1LCAjZWY0ZTdiLCAjYTE2NmFiLCAjNTA3M2I4LCAjMTA5OGFkLCAjMDdiMzliLCAjNmZiYTgyKTtcbn1cblxuI3Rlc3RidXR0b246aG92ZXI6YmVmb3JlIHtcbiAgb3BhY2l0eToxO1xuICB0cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XG4gIGZpbHRlcjpibHVyKDI1cHgpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmNzk1MzMsICNmMzcwNTUsICNlZjRlN2IsICNhMTY2YWIsICM1MDczYjgsICMxMDk4YWQsICMwN2IzOWIsICM2ZmJhODIpOyAgXG59XG5cbiN0ZXN0YnV0dG9uOmFmdGVyIHtcbiAgY29udGVudDonUmVzdW1lJztcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gIGxpbmUtaGVpZ2h0OjQwcHg7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBjb2xvcjpyZ2JhKDIzNSwyMzUsMjM1LDEpO1xuICAvLyBmb250LXdlaWdodDpib2xkO1xuICB6LWluZGV4OjU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBkaXNwbGF5OmJsb2NrO1xuICBib3JkZXItcmFkaXVzOjE4MHB4O1xuICB3aWR0aDo5MiU7XG4gIGhlaWdodDo4MCU7XG4gIHRvcDoxMCU7XG4gIGxlZnQ6NCU7ICBcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTksIDIwLCAyMik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/background/background.component */ "./src/app/core/components/background/background.component.ts");




class ExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 94, vars: 0, consts: [[1, "container"], ["id", "timeline", 1, "timeline"], [1, "title"], [1, "block"], [1, "title-color"], [1, "demo-card-wrapper"], [1, "demo-card", "demo-card--step1"], [1, "head"], [1, "logo"], ["src", "assets/img/mckinsey.jpg", "alt", "Graphic"], [1, "small"], [1, "body"], [1, "demo-card", "demo-card--step2"], ["src", "assets/img/mdb.png", "alt", "Graphic"], [1, "demo-card", "demo-card--step3"], ["src", "assets/img/google.jpg", "alt", "Graphic"], [1, "demo-card", "demo-card--step4"], [1, "demo-card", "demo-card--step5"], ["src", "assets/img/ck12.png", "alt", "CK-12"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Summer Digital Analyst (Summer 2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " McKinsey & Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Guided digital business strategy for a Fortune 500 client to decrease company operational costs by 15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Guided Agile project management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Architected and developed .NET Web APIs and Angular PWAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Responsible for Dev Ops, including automated testing, build/release pipelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "President (Jan 2018-Present)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " MDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Raised over $20,000 for the Mobile Developers of Berkeley by negotiating and managing mobile contracts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Instruct marketing and fundraising teams on new avenues for professional growth and club recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Increase website engagement by 50% in redesign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Plan, design, and develop iOS apps for UC Berkeley's premier mobile development incubator in 6-week intensive training program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Software Engineering Intern (Summer 2019)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Increased recommendation model CTR by 1-3% daily by training new model, running model validation, and pushing to production daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Migrated the Google News content recommendation and user engagements machine learning model into a TensorFlow Extended pipeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Technologies: Python, TensorFlow, TensorFlow Extended (TFX), Deep Neural Networks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Engineering Practicum Intern (Summer 2018)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Increased face detection speeds within Google Photos iOS by 14x through designing and implementing a single shot convolutional neural network on the GPU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Developed a testing framework in TensorFlow to compare results from mobile application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Technologies: Python, TensorFlow, C++, Objective C, Metal Performance Shaders, Convolutional Neural Networks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Interactives Intern (Summer 2017)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " CK-12 Foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Build over 50 interactive learning resources for CK-12\u2019s e-textbooks with animations, movable objects, graphs, buttons, scripted using Javascript with design components created using Adobe Illustrator and Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Developed content for subjects ranging Elementary Math, Algebra, and Calculus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Created free visual learning tools used by students and teachers nationally and internationally across 5 e-textbooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap\");\n@font-face {\n  font-family: theinhardt;\n  src: url('TheinhardtPan-Regular.otf') format(\"opentype\");\n}\n.container[_ngcontent-%COMP%] {\n  background: black;\n  width: 100%;\n  height: 100vh;\n  overflow-y: scroll;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 94%;\n  margin: 0 auto;\n  align-items: center;\n  padding-left: 4.5rem;\n  padding-top: 2rem;\n}\n.container[_ngcontent-%COMP%]   .title-color[_ngcontent-%COMP%] {\n  color: white;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  color: black;\n  font-size: 30px;\n}\n\n@media (max-width: 1024px) {\n  .title[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    text-align: center;\n    padding-right: 4rem;\n  }\n}\n\n\n\n\n@media (min-width: 1050px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(even)   .head[_ngcontent-%COMP%]::after, #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(odd)   .head[_ngcontent-%COMP%]::after {\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n  }\n\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(even)   .head[_ngcontent-%COMP%]::before, #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(odd)   .head[_ngcontent-%COMP%]::before {\n    position: absolute;\n    content: \"\";\n    width: 9px;\n    height: 9px;\n    background-color: #bdbdbd;\n    border-radius: 9px;\n    box-shadow: 0px 0px 2px 8px #f7f7f7;\n  }\n}\n\n.demo-card[_ngcontent-%COMP%]:nth-child(1) {\n  order: 1;\n}\n.demo-card[_ngcontent-%COMP%]:nth-child(2) {\n  order: 4;\n}\n.demo-card[_ngcontent-%COMP%]:nth-child(3) {\n  order: 2;\n}\n.demo-card[_ngcontent-%COMP%]:nth-child(4) {\n  order: 5;\n}\n.demo-card[_ngcontent-%COMP%]:nth-child(5) {\n  order: 3;\n}\n.demo-card[_ngcontent-%COMP%]:nth-child(6) {\n  order: 6;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"theinhardt\";\n}\n#timeline[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  padding-top: 10rem;\n  background: black;\n  border-top: 1px solid rgba(191, 191, 191, 0.4);\n  border-bottom: 1px solid rgba(191, 191, 191, 0.4);\n}\n#timeline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3rem;\n  font-weight: 200;\n  margin-bottom: 20px;\n}\n#timeline[_ngcontent-%COMP%]   p.leader[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 90%;\n  margin: auto;\n  margin-bottom: 45px;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n}\n@media (min-width: 1050px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column wrap;\n    width: 1370px;\n    height: 1350px;\n    margin: 0 auto;\n  }\n}\n#timeline[_ngcontent-%COMP%]   .demo-card-wrapper[_ngcontent-%COMP%]::after {\n  z-index: 1;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  border-left: 1px solid rgba(191, 191, 191, 0.4);\n}\n@media (min-width: 1050px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card-wrapper[_ngcontent-%COMP%]::after {\n    border-left: 1px solid #bdbdbd;\n  }\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin: 10px auto 80px;\n  max-width: 94%;\n  z-index: 2;\n}\n@media (min-width: 480px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n    max-width: 60%;\n    box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);\n  }\n}\n@media (min-width: 720px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n    max-width: 40%;\n  }\n}\n@media (min-width: 1050px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n    max-width: 550px;\n    height: 300px;\n    margin: 90px;\n    margin-top: 45px;\n    margin-bottom: 45px;\n  }\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(odd) {\n    margin-right: 45px;\n  }\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(odd)   .head[_ngcontent-%COMP%]::after {\n    border-left-width: 15px;\n    border-left-style: solid;\n    left: 100%;\n  }\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(odd)   .head[_ngcontent-%COMP%]::before {\n    left: 591.5px;\n  }\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(even) {\n    margin-left: 45px;\n  }\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(even)   .head[_ngcontent-%COMP%]::after {\n    border-right-width: 15px;\n    border-right-style: solid;\n    right: 100%;\n  }\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(even)   .head[_ngcontent-%COMP%]::before {\n    right: 589.5px;\n  }\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 180px;\n  }\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 10px;\n  padding: 10px;\n  font-size: 35px;\n  line-height: 35px;\n  font-weight: 600;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 75px;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  font-weight: inherit;\n  letter-spacing: 2px;\n  margin: 0;\n  padding-bottom: 6px;\n  line-height: 1rem;\n}\n@media (min-width: 480px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 165%;\n    line-height: 1.2rem;\n  }\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6rem;\n  margin: 0;\n}\n@media (min-width: 480px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(191, 191, 191, 0.4);\n  padding: 10px;\n}\n@media (min-width: 1050px) {\n  #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    height: 215px;\n  }\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 18px;\n  margin-bottom: 10px;\n  font-family: \"theinhardt\";\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px 0px;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step1[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  background-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step1[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::after {\n  border-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step2[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  background-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step2[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::after {\n  border-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step3[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  background-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step3[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::after {\n  border-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step4[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  background-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step4[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::after {\n  border-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step5[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  background-color: white;\n}\n#timeline[_ngcontent-%COMP%]   .demo-card--step5[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]::after {\n  border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0dBQUE7QUFDUjtFQUNFLHVCQUFBO0VBQ0Esd0RBQUE7QUFDRjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFHSTtFQUNFLFlBQUE7QUFETjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUZSO0FBS0Esa0JBQUE7QUFFQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFIRjtBQUNGO0FBb0NFLGdCQUFBO0FBVUEsV0FBQTtBQVNBLGlCQUFBO0FBUUEsaUJBQUE7QUF0Q0U7RUF5Q0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGtDQUFBO0lBQ0EscUNBQUE7RUEzREo7O0VBNkRFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFqQ1U7SUFrQ1YsV0FsQ1U7SUFtQ1YseUJBMUJPO0lBMkJQLGtCQXBDVTtJQXFDVixtQ0FBQTtFQTFESjtBQUNGO0FBOERFLG9CQUFBO0FBSUU7RUFBb0MsUUFEekI7QUE3RGY7QUErREk7RUFBb0MsUUFINUI7QUF4RFo7QUEwREk7RUFBb0MsUUFEekI7QUFyRGY7QUF1REk7RUFBb0MsUUFDMUI7QUFwRGQ7QUFrREk7RUFBb0MsUUFEekI7QUE3Q2Y7QUErQ0k7RUFBb0MsUUFDMUI7QUE1Q2Q7QUErQ0UsZUFBQTtBQUVBO0VBQ0Usc0JBQUE7QUE3Q0o7QUFnREUsVUFBQTtBQUVBO0VBQ0UseUJBQUE7QUE5Q0o7QUFpREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0EvRU87RUFnRlAsaURBaEZPO0FBa0NYO0FBK0NJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTdDTjtBQStDSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTdDTjtBQStDSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTdDTjtBQXpESTtFQW9HQTtJQUlJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGFBekVZO0lBMEVaLGNBM0VhO0lBNEViLGNBQUE7RUEzQ047QUFDRjtBQTRDTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwrQ0E5R0c7QUFvRVg7QUEzRUk7RUE4R0U7SUFTSSw4QkFBQTtFQXhDUjtBQUNGO0FBMkNJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQXpDTjtBQW5HSTtFQXVJQTtJQU9JLGNBQUE7SUFDQSxnREE3SE87RUFzRmI7QUFDRjtBQW5HSTtFQWlJQTtJQVdJLGNBQUE7RUFyQ047QUFDRjtBQWxHSTtFQTJIQTtJQWNJLGdCQTNITztJQTRIUCxhQTdIUTtJQThIUixZQXpIUztJQTBIVCxnQkFBQTtJQUNBLG1CQUFBO0VBbkNOO0VBb0NNO0lBQ0Usa0JBQUE7RUFsQ1I7RUFtQ1E7SUFFRSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQWxDVjtFQW9DUTtJQUVFLGFBQUE7RUFuQ1Y7RUFzQ007SUFDRSxpQkFBQTtFQXBDUjtFQXFDUTtJQUVFLHdCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VBcENWO0VBc0NRO0lBRUUsY0FBQTtFQXJDVjtFQXdDTTtJQUNFLGlCQXhKRTtFQWtIVjtBQUNGO0FBd0NNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXRDUjtBQXVDUTtFQUNFLGVBQUE7RUFDQSxZQXBLTztFQXFLUCxhQUFBO0VBQ0EsZUFyS007RUFzS04saUJBdEtNO0VBdUtOLGdCQUFBO0FBckNWO0FBc0NVO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFwQ1o7QUF1Q1E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBckNWO0FBM0tJO0VBeU1JO0lBU0ksZUFBQTtJQUNBLG1CQUFBO0VBbkNWO0FBQ0Y7QUFvQ1U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBbENaO0FBdExJO0VBcU5NO0lBS0ksaUJBQUE7RUFoQ1o7QUFDRjtBQW9DTTtFQUNFLGdCQUFBO0VBQ0EsMENBOU1HO0VBZ05ILGFBeE1TO0FBcUtqQjtBQXBMSTtFQW1ORTtJQU1JLGFBdExNO0VBcUpkO0FBQ0Y7QUFrQ1E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkEvTU87RUFnTlAseUJBQUE7QUFoQ1Y7QUFrQ1E7RUFBUSxnQkFBQTtBQS9CaEI7QUFnQ1E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQTlCVjtBQWtDUTtFQUVFLFlBQUE7RUFDQSx1QkFGUTtBQS9CbEI7QUFrQ1U7RUFDRSxtQkFKTTtBQTVCbEI7QUEyQlE7RUFFRSxZQUFBO0VBQ0EsdUJBRlE7QUF4QmxCO0FBMkJVO0VBQ0UsbUJBSk07QUFyQmxCO0FBb0JRO0VBRUUsWUFBQTtFQUNBLHVCQUZRO0FBakJsQjtBQW9CVTtFQUNFLG1CQUpNO0FBZGxCO0FBYVE7RUFFRSxZQUFBO0VBQ0EsdUJBRlE7QUFWbEI7QUFhVTtFQUNFLG1CQUpNO0FBUGxCO0FBTVE7RUFFRSxZQUFBO0VBQ0EsdUJBRlE7QUFIbEI7QUFNVTtFQUNFLG1CQUpNO0FBQWxCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMHxQb3BwaW5zOjMwMCw0MDAsODAwJmRpc3BsYXk9c3dhcCcpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiB0aGVpbmhhcmR0O1xuICBzcmM6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1RoZWluaGFyZHRQYW4tUmVndWxhci5vdGYnKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDpibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIHdpZHRoOiA5NCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQuNXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLnRpdGxlLWNvbG9yIHtcbiAgICAgIGNvbG9yOiB3aGl0ZSA7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cbi8qIE1lZGlhIFF1ZXJpZXMgKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAudGl0bGUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xuICB9IFxufVxuXG5AbWl4aW4gbXEteHMge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIFxuICBAbWl4aW4gbXEtc20ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIFxuICBAbWl4aW4gbXEtbWQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIFxuICBAbWl4aW4gbXEtbGcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDUwcHgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBcbiAgJGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICRib3gtc2hhZG93OiAwcHggMXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuNCk7XG4gICRpdGVtczogNTtcbiAgJHJvd3M6IGNlaWwoJGl0ZW1zLzIpO1xuICBcbiAgLyogQ2FyZCBzaXppbmcgKi9cbiAgXG4gICRjYXJkLWhlaWdodDogMzAwcHg7XG4gICRjYXJkLXdpZHRoOiA1NTBweDtcbiAgJGlubmVyLW1hcmdpbjogMTBweDtcbiAgJG51bWJlci1zaXplOiAzNXB4O1xuICAkc3RhZ2dlcjogMTgwcHg7XG4gICRvdXRlci1tYXJnaW46IDkwcHg7XG4gICRtYXJrZXItc2l6ZTogOXB4O1xuICBcbiAgLyogQ29sb3JzICovXG4gIFxuICAkc3RlcHM6ICM0NmI4ZTk7XG4gICRjb2xvcnM6ICM0NmI4ZTksXG4gICMzZWU5ZDEsXG4gICNjZTQzZWIsXG4gICM0ZDkyZWI7XG4gICR0aW1lbGluZTogI2JkYmRiZDtcbiAgXG4gIC8qIENhbGN1bGF0aW9ucyAqL1xuICBcbiAgJGNvbnRhaW5lci1oZWlnaHQ6ICRyb3dzICogKCRjYXJkLWhlaWdodCArICRvdXRlci1tYXJnaW4pICsgJHN0YWdnZXI7XG4gICRjb250YWluZXItd2lkdGg6ICRjYXJkLXdpZHRoKjIgKyAkb3V0ZXItbWFyZ2luKjM7XG4gICRoZWFkLWhlaWdodDogJG51bWJlci1zaXplICsgNTA7XG4gICRib2R5LWhlaWdodDogJGNhcmQtaGVpZ2h0IC0gJGhlYWQtaGVpZ2h0O1xuICAkbWFya2VyLWRpc3Q6ICRjYXJkLXdpZHRoICsgJG91dGVyLW1hcmdpbi8yIC0gJG1hcmtlci1zaXplLzI7XG4gIFxuICAvKiBQbGFjZWhvbGRlcnMgKi9cbiAgXG4gIEBpbmNsdWRlIG1xLWxnIHtcbiAgICAlYXJyb3cge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICVtYXJrZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAkbWFya2VyLXNpemU7XG4gICAgICBoZWlnaHQ6ICRtYXJrZXItc2l6ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aW1lbGluZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRtYXJrZXItc2l6ZTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDhweCAkYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBTb21lIENvb2wgU3R1ZmYgKi9cbiAgXG4gICRjb3VudGVyOiAkaXRlbXMgLSAkcm93cyArIDI7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJHJvd3Mge1xuICAgIC5kZW1vLWNhcmQ6bnRoLWNoaWxkKCN7JGkqMi0xfSkgICB7IG9yZGVyOiAkaSB9XG4gICAgLmRlbW8tY2FyZDpudGgtY2hpbGQoI3skaSoyfSkgICAgIHsgb3JkZXI6ICRjb3VudGVyIH1cbiAgICAkY291bnRlcjogJGNvdW50ZXIgKyAxO1xuICB9XG4gIFxuICAvKiBCb3JkZXIgQm94ICovXG4gIFxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAvKiBGb250cyAqL1xuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICd0aGVpbmhhcmR0JztcbiAgfVxuICBcbiAgI3RpbWVsaW5lIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItdG9wOiAkYm9yZGVyO1xuICAgIGJvcmRlci1ib3R0b206ICRib3JkZXI7XG4gICAgaDEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIHAubGVhZGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG4gICAgLmRlbW8tY2FyZC13cmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIEBpbmNsdWRlIG1xLWxnIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgICAgd2lkdGg6ICRjb250YWluZXItd2lkdGg7XG4gICAgICAgIGhlaWdodDogJGNvbnRhaW5lci1oZWlnaHQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyO1xuICAgICAgICBAaW5jbHVkZSBtcS1sZyB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkdGltZWxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRlbW8tY2FyZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvIDgwcHg7XG4gICAgICBtYXgtd2lkdGg6IDk0JTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBAaW5jbHVkZSBtcS1zbSB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG1xLW1kIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtcS1sZyB7XG4gICAgICAgIG1heC13aWR0aDogJGNhcmQtd2lkdGg7XG4gICAgICAgIGhlaWdodDogJGNhcmQtaGVpZ2h0O1xuICAgICAgICBtYXJnaW46ICRvdXRlci1tYXJnaW47XG4gICAgICAgIG1hcmdpbi10b3A6ICRvdXRlci1tYXJnaW4vMjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJG91dGVyLW1hcmdpbi8yO1xuICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRvdXRlci1tYXJnaW4vMjtcbiAgICAgICAgICAuaGVhZDo6YWZ0ZXIge1xuICAgICAgICAgICAgQGV4dGVuZCAlYXJyb3c7XG4gICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkOjpiZWZvcmUge1xuICAgICAgICAgICAgQGV4dGVuZCAlbWFya2VyO1xuICAgICAgICAgICAgbGVmdDogJG1hcmtlci1kaXN0ICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkb3V0ZXItbWFyZ2luLzI7XG4gICAgICAgICAgLmhlYWQ6OmFmdGVyIHtcbiAgICAgICAgICAgIEBleHRlbmQgJWFycm93O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZDo6YmVmb3JlIHtcbiAgICAgICAgICAgIEBleHRlbmQgJW1hcmtlcjtcbiAgICAgICAgICAgIHJpZ2h0OiAkbWFya2VyLWRpc3QgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHN0YWdnZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5oZWFkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIG1hcmdpbjogJGlubmVyLW1hcmdpbjtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJG51bWJlci1zaXplO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbnVtYmVyLXNpemU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgICBAaW5jbHVkZSBtcS1zbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2NSU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBAaW5jbHVkZSBtcS1zbSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6ICRib3JkZXI7XG4gICAgICAgIC8vIGJvcmRlci10b3A6IDA7XG4gICAgICAgIHBhZGRpbmc6ICRpbm5lci1tYXJnaW47XG4gICAgICAgIEBpbmNsdWRlIG1xLWxnIHtcbiAgICAgICAgICBoZWlnaHQ6ICRib2R5LWhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBwLCB1bCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRpbm5lci1tYXJnaW47XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICd0aGVpbmhhcmR0JztcbiAgICAgICAgfVxuICAgICAgICB1bCBsaSB7IHBhZGRpbmc6IDNweCAwcHg7IH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkaXRlbXMge1xuICAgICAgICAmLS1zdGVwI3skaX0ge1xuICAgICAgICAgICRjb2xvcjogd2hpdGU7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICAuaGVhZDo6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/background/background.component */ "./src/app/core/components/background/background.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "circular--portrait"], ["src", "assets/img/headshot.JPG"], [1, "box"], [1, "title"], [1, "block"], [1, "role"], ["id", "text1", "routerLink", "about", 1, "p1"], ["id", "text2", "routerLink", "experience", 1, "p2"], ["id", "text3", "routerLink", "projects", 1, "p3"], ["id", "text4", "routerLink", "photography", 1, "p4"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hello, I'm Nikhar Arora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Photography ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_background_background_component__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap\");\n@font-face {\n  font-family: theinhardt;\n  src: url('TheinhardtPan-Regular.otf') format(\"opentype\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .circular--portrait[_ngcontent-%COMP%] {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-right: 3rem;\n  border: white solid 3px;\n}\n.container[_ngcontent-%COMP%]   .circular--portrait[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 50px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 0%;\n  height: inherit;\n  background: #ffb510;\n  position: absolute;\n  animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  display: flex;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"theinhardt\";\n  color: #fff;\n  font-size: 32px;\n  animation: mainFadeIn 2s forwards;\n  animation-delay: 1.6s;\n  opacity: 0;\n  display: flex;\n  align-items: baseline;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 30px;\n  margin-top: -10px;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 0%;\n  height: inherit;\n  background: #2c3456;\n  position: absolute;\n  animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  animation-delay: 2s;\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p3[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p4[_ngcontent-%COMP%] {\n  animation: secFadeIn 2s forwards;\n  animation-delay: 3.2s;\n  animation-iteration-count: 1;\n  animation-duration: 1s;\n  opacity: 0;\n  font-weight: 400;\n  font-family: \"Lato\";\n  color: #ffffff;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  margin-right: 1rem;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   #text2[_ngcontent-%COMP%] {\n  animation-delay: 4s;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   #text3[_ngcontent-%COMP%] {\n  animation-delay: 4.8s;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   #text4[_ngcontent-%COMP%] {\n  animation-delay: 5.6s;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p1[_ngcontent-%COMP%]:hover {\n  color: #af1212;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%]:hover {\n  color: #ffb510;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p3[_ngcontent-%COMP%]:hover {\n  color: #1c8d29;\n}\n.container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]   .p4[_ngcontent-%COMP%]:hover {\n  color: #1c658d;\n}\n@media (max-width: 700px) {\n  .circular--portrait[_ngcontent-%COMP%] {\n    margin-left: 3rem !important;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    padding-top: 1.5rem !important;\n  }\n\n  .role[_ngcontent-%COMP%] {\n    padding-top: 1.5rem !important;\n    flex-direction: column !important;\n  }\n}\n@keyframes mainBlock {\n  0% {\n    width: 0%;\n    left: 0;\n  }\n  50% {\n    width: 100%;\n    left: 0;\n  }\n  100% {\n    width: 0;\n    left: 100%;\n  }\n}\n@keyframes secBlock {\n  0% {\n    width: 0%;\n    left: 0;\n  }\n  50% {\n    width: 100%;\n    left: 0;\n  }\n  100% {\n    width: 0;\n    left: 100%;\n  }\n}\n@keyframes mainFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes popIn {\n  0% {\n    width: 0px;\n    height: 0px;\n    background: #e9d856;\n    border: 0px solid #ddd;\n    opacity: 0;\n  }\n  50% {\n    width: 10px;\n    height: 10px;\n    background: #e9d856;\n    opacity: 1;\n    bottom: 45px;\n  }\n  65% {\n    width: 7px;\n    height: 7px;\n    bottom: 0px;\n    width: 15px;\n  }\n  80% {\n    width: 10px;\n    height: 10px;\n    bottom: 20px;\n  }\n  100% {\n    width: 7px;\n    height: 7px;\n    background: #e9d856;\n    border: 0px solid #222;\n    bottom: 13px;\n  }\n}\n@keyframes secFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 80px;\n  background: #ffb510;\n  position: absolute;\n  right: 0;\n  bottom: -80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: top 0.8s forwards;\n  animation-delay: 4s;\n}\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: #232323;\n  font-family: \"Poppins\";\n}\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 25px;\n  font-size: 22px;\n  color: #232323;\n  animation: icon 2s forwards;\n  animation-delay: 4s;\n  opacity: 0;\n}\n@keyframes top {\n  0% {\n    opacity: 0;\n    bottom: -80px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n@keyframes icon {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.3) rotate(-2deg);\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0dBQUE7QUFDUjtFQUNFLHVCQUFBO0VBQ0Esd0RBQUE7QUFDRjtBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0csZ0JBQUE7QUFBSDtBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0VBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQU1NO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUdBLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQVFJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTk47QUFRTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1FQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBTlI7QUFTTTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBSO0FBU007RUFDSSxtQkFBQTtBQVBWO0FBU007RUFDSSxxQkFBQTtBQVBWO0FBU007RUFDRSxxQkFBQTtBQVBSO0FBU007RUFDSSxjQUFBO0FBUFY7QUFTTTtFQUNJLGNBQUE7QUFQVjtBQVNNO0VBQ0UsY0FBQTtBQVBSO0FBU007RUFDRSxjQUFBO0FBUFI7QUFhQTtFQUVFO0lBQ0UsNEJBQUE7RUFYRjs7RUFjQTtJQUNFLGlDQUFBO0VBWEY7O0VBY0E7SUFDRSxpQ0FBQTtJQUNBLDhCQUFBO0VBWEY7O0VBY0E7SUFDRSw4QkFBQTtJQUNBLGlDQUFBO0VBWEY7QUFDRjtBQWVBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsT0FBQTtFQWJGO0VBZ0JBO0lBQ0UsV0FBQTtJQUNBLE9BQUE7RUFkRjtFQWlCQTtJQUNFLFFBQUE7SUFDQSxVQUFBO0VBZkY7QUFDRjtBQWtCQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLE9BQUE7RUFoQkY7RUFtQkE7SUFDRSxXQUFBO0lBQ0EsT0FBQTtFQWpCRjtFQW9CQTtJQUNFLFFBQUE7SUFDQSxVQUFBO0VBbEJGO0FBQ0Y7QUFxQkE7RUFDRTtJQUNFLFVBQUE7RUFuQkY7RUFxQkE7SUFDRSxVQUFBO0VBbkJGO0FBQ0Y7QUF1QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7RUFyQkY7RUF1QkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFyQkY7RUF1QkM7SUFDRyxVQUFBO0lBQ0YsV0FBQTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VBckJKO0VBdUJDO0lBQ0csV0FBQTtJQUNGLFlBQUE7SUFDRSxZQUFBO0VBckJKO0VBdUJBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtFQXJCRjtBQUNGO0FBeUJBO0VBQ0U7SUFDRSxVQUFBO0VBdkJGO0VBeUJBO0lBQ0UsWUFBQTtFQXZCRjtBQUNGO0FBMEJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNDLDRCQUFBO0VBQ0EsbUJBQUE7QUF4Qkg7QUF5QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUF2Qko7QUF5Qkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUF2Qk47QUE0QkE7RUFDRTtJQUNFLFVBQUE7SUFDQyxhQUFBO0VBekJIO0VBMkJBO0lBQ0UsVUFBQTtJQUNDLFdBQUE7RUF6Qkg7QUFDRjtBQTZCQTtFQUNFO0lBQ0UsVUFBQTtJQUNDLG1CQUFBO0VBM0JIO0VBNkJDO0lBQ0csVUFBQTtJQUNELG1DQUFBO0VBM0JIO0VBNkJBO0lBQ0UsVUFBQTtJQUNDLFdBQUE7RUEzQkg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDB8UG9wcGluczozMDAsNDAwLDgwMCZkaXNwbGF5PXN3YXAnKTtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogdGhlaW5oYXJkdDtcbiAgc3JjOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9UaGVpbmhhcmR0UGFuLVJlZ3VsYXIub3RmJykgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHksIGh0bWwge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuY2lyY3VsYXItLXBvcnRyYWl0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgIGJvcmRlcjogd2hpdGUgc29saWQgM3B4O1xuICB9XG4gIFxuICAuY2lyY3VsYXItLXBvcnRyYWl0IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC50aXRsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuXG4gICAgICAuYmxvY2sge1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYjUxMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBhbmltYXRpb246IG1haW5CbG9jayAycyBjdWJpYy1iZXppZXIoLjc0LCAuMDYsIC40LCAuOTIpIGZvcndhcmRzO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICd0aGVpbmhhcmR0JztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG1haW5GYWRlSW4gMnMgZm9yd2FyZHM7XG4gICAgICAgIC1vLWFuaW1hdGlvbjogbWFpbkZhZGVJbiAycyBmb3J3YXJkcztcbiAgICAgICAgYW5pbWF0aW9uOiBtYWluRmFkZUluIDJzIGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yb2xlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcblxuICAgICAgLmJsb2NrIHtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyYzM0NTY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYW5pbWF0aW9uOiBzZWNCbG9jayAycyBjdWJpYy1iZXppZXIoLjc0LCAuMDYsIC40LCAuOTIpIGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAucDEsIC5wMiwgLnAzLCAucDR7XG4gICAgICAgIGFuaW1hdGlvbjogc2VjRmFkZUluIDJzIGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMnM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIH1cbiAgICAgICN0ZXh0MiB7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0LjBzXG4gICAgICB9XG4gICAgICAjdGV4dDMge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNC44cztcbiAgICAgIH1cbiAgICAgICN0ZXh0NCB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogNS42cztcbiAgICAgIH1cbiAgICAgIC5wMTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNhZjEyMTI7XG4gICAgICB9XG4gICAgICAucDI6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmZiNTEwO1xuICAgICAgfVxuICAgICAgLnAzOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMxYzhkMjk7XG4gICAgICB9XG4gICAgICAucDQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzFjNjU4ZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG5cbiAgLmNpcmN1bGFyLS1wb3J0cmFpdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ib3gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucm9sZSB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuICBcbn1cblxuQGtleWZyYW1lcyBtYWluQmxvY2sge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICAgIGxlZnQ6IDA7XG5cbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG5cbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2VjQmxvY2sge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICAgIGxlZnQ6IDA7XG5cbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG5cbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbWFpbkZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHBvcEluIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2U5ZDg1NjtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZGRkO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2U5ZDg1NjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvdHRvbTogNDVweDtcbiAgfVxuICAgNjUlIHtcbiAgICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHdpZHRoOiAxNXB4XG4gICB9XG4gICA4MCUge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgYm90dG9tOiAyMHB4XG4gICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYmFja2dyb3VuZDogI2U5ZDg1NjtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMjIyO1xuICAgIGJvdHRvbTogMTNweDtcblxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2VjRmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZiNTEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC04MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGFuaW1hdGlvbjogdG9wIDAuOHMgZm9yd2FyZHM7XG4gICBhbmltYXRpb24tZGVsYXk6IDRzO1xuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMjMyMzIzO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5cbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiAjMjMyMzIzO1xuICAgICAgYW5pbWF0aW9uOiBpY29uIDJzIGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgdG9wIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgIGJvdHRvbTogLTgwcHhcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgICBib3R0b206IDBweFxuXG4gIH1cbn1cblxuQGtleWZyYW1lcyBpY29uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgfVxuICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoLTAyZGVnKTtcbiAgIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAgYm90dG9tOiAwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/photography/photography.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/photography/photography.component.ts ***!
  \**************************************************************/
/*! exports provided: PhotographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotographyComponent", function() { return PhotographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/background/background.component */ "./src/app/core/components/background/background.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-image-gallery */ "./node_modules/angular2-image-gallery/__ivy_ngcc__/fesm2015/angular2-image-gallery.js");






function PhotographyComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gallery", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexBorderSize", 20)("flexImageSize", 9)("galleryName", "landscape")("maxRowsPerPage", 100);
} }
function PhotographyComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gallery", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexBorderSize", 20)("flexImageSize", 7)("galleryName", "wildlife")("maxRowsPerPage", 100);
} }
function PhotographyComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "gallery", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexBorderSize", 20)("flexImageSize", 10)("galleryName", "portrait")("maxRowsPerPage", 100);
} }
class PhotographyComponent {
    constructor() { }
    ngOnInit() {
        this.landscape = true;
        this.wildlife = false;
        this.portrait = false;
    }
    onWildlifeClick() {
        this.wildlife = true;
        this.landscape = false;
        this.portrait = false;
    }
    onLandscapeClick() {
        this.wildlife = false;
        this.landscape = true;
        this.portrait = false;
    }
    onPortraitClick() {
        this.wildlife = false;
        this.landscape = false;
        this.portrait = true;
    }
}
PhotographyComponent.ɵfac = function PhotographyComponent_Factory(t) { return new (t || PhotographyComponent)(); };
PhotographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotographyComponent, selectors: [["app-photography"]], decls: 20, vars: 3, consts: [[1, "container"], [1, "title"], [1, "title-color"], [1, "image-container"], ["role", "button", 3, "click"], ["id", "indicator"], ["class", "images", 4, "ngIf"], [1, "images"], [3, "flexBorderSize", "flexImageSize", "galleryName", "maxRowsPerPage"]], template: function PhotographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographyComponent_Template_a_click_10_listener() { return ctx.onLandscapeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Landscape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographyComponent_Template_a_click_12_listener() { return ctx.onWildlifeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wildlife");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotographyComponent_Template_a_click_14_listener() { return ctx.onPortraitClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PhotographyComponent_div_17_Template, 2, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PhotographyComponent_div_18_Template, 2, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PhotographyComponent_div_19_Template, 2, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.landscape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wildlife);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portrait);
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular2_image_gallery__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap\");\n@font-face {\n  font-family: theinhardt;\n  src: url('TheinhardtPan-Regular.otf') format(\"opentype\");\n}\n.container[_ngcontent-%COMP%] {\n  background: black;\n  width: 100%;\n  height: 100vh;\n  overflow-y: visible;\n}\n.container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  align-items: center;\n  padding-left: 4.5rem;\n  padding-top: 190px;\n}\n.container[_ngcontent-%COMP%]   .title-color[_ngcontent-%COMP%] {\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  padding-left: 4rem;\n  padding-right: 4rem;\n  padding-top: 20px;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  color: black;\n  font-size: 30px;\n}\n@media (max-width: 1024px) {\n  .title[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    text-align: center;\n    padding-right: 4.5rem;\n    padding-bottom: 3rem;\n  }\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #292929;\n  overflow: hidden;\n}\nnav[_ngcontent-%COMP%] {\n  width: 319px;\n  display: table;\n  margin: 0 auto;\n  transform: translateY(-50%);\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  width: 33.333%;\n  display: table-cell;\n  text-align: center;\n  color: #949494;\n  text-decoration: none;\n  font-family: \"theinhardt\";\n  font-size: 18px;\n  font-weight: bold;\n  padding: 10px 20px;\n  transition: 0.2s ease color;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: 0.2s ease transform;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  top: 0;\n  left: 10px;\n  width: 6px;\n  height: 6px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  top: 5px;\n  left: 18px;\n  width: 4px;\n  height: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):before {\n  background-color: yellow;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):after {\n  background-color: red;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):before {\n  background-color: #00e2ff;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):after {\n  background-color: #89ff00;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):before {\n  background-color: purple;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):after {\n  background-color: palevioletred;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  transform: scale(1);\n}\n#ytd-url[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  padding: 10px 14px;\n  margin: 20px;\n  color: #fff;\n  font-size: 14px;\n  text-decoration: none;\n  background-color: #000;\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);\n  z-index: 125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9waG90b2dyYXBoeS9waG90b2dyYXBoeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvR0FBQTtBQUNSO0VBQ0ksdUJBQUE7RUFDQSx3REFBQTtBQUNKO0FBRUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksdUJBQUE7QUFBUjtBQUdJO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0FBRlI7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhSO0FBTUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSlI7QUFRQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxvQkFBQTtFQUxOO0FBQ0Y7QUFRQTtFQUVJLFlBQUE7QUFQSjtBQVVBO0VBRUksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVdBO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFUSjtBQVlBO0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQVZKO0FBYUE7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFYSjtBQWNBO0VBRUksTUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVpKO0FBZUE7RUFFSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBYko7QUFnQkE7RUFFSSx3QkFBQTtBQWRKO0FBaUJBO0VBRUkscUJBQUE7QUFmSjtBQWtCQTtFQUVJLHlCQUFBO0FBaEJKO0FBbUJBO0VBRUkseUJBQUE7QUFqQko7QUFvQkE7RUFFSSx3QkFBQTtBQWxCSjtBQXFCQTtFQUVJLCtCQUFBO0FBbkJKO0FBc0JBO0VBRUksV0FBQTtBQXBCSjtBQXVCQTtFQUVJLG1CQUFBO0FBckJKO0FBd0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FBckJGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9waG90b2dyYXBoeS9waG90b2dyYXBoeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwfFBvcHBpbnM6MzAwLDQwMCw4MDAmZGlzcGxheT1zd2FwJyk7XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogdGhlaW5oYXJkdDtcbiAgICBzcmM6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1RoZWluaGFyZHRQYW4tUmVndWxhci5vdGYnKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDpibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG5cbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNC41cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTkwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlLWNvbG9yIHtcbiAgICAgICAgY29sb3I6IHdoaXRlIDtcbiAgICAgIH1cblxuICAgIC5pbWFnZXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0LjVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIH1cbn1cblxuaHRtbCwgYm9keVxue1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keVxue1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm5hdlxue1xuICAgIHdpZHRoOiAzMTlweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbm5hdiBhXG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LWZhbWlseTogJ3RoZWluaGFyZHQnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGNvbG9yO1xufVxuXG5uYXYgYTpiZWZvcmUsIG5hdiBhOmFmdGVyXG57XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIHRyYW5zZm9ybTtcbn1cblxubmF2IGE6YmVmb3JlXG57XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbn1cblxubmF2IGE6YWZ0ZXJcbntcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAxOHB4O1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHhcbn1cblxubmF2IGE6bnRoLWNoaWxkKDEpOmJlZm9yZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxubmF2IGE6bnRoLWNoaWxkKDEpOmFmdGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5uYXYgYTpudGgtY2hpbGQoMik6YmVmb3JlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZTJmZjtcbn1cblxubmF2IGE6bnRoLWNoaWxkKDIpOmFmdGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZmYwMDtcbn1cblxubmF2IGE6bnRoLWNoaWxkKDMpOmJlZm9yZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxubmF2IGE6bnRoLWNoaWxkKDMpOmFmdGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbn1cblxubmF2IGE6aG92ZXJcbntcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxubmF2IGE6aG92ZXI6YmVmb3JlLCBuYXYgYTpob3ZlcjphZnRlclxue1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbiN5dGQtdXJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgei1pbmRleDogMTI1O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photography',
                templateUrl: './photography.component.html',
                styleUrls: ['./photography.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_components_background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/background/background.component */ "./src/app/core/components/background/background.component.ts");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");




class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 82, vars: 0, consts: [[1, "container"], [1, "title"], [1, "block"], [1, "cards"], [1, "card", "card--1"], [1, "card__info-hover"], [1, "card__img"], ["href", "https://apps.apple.com/us/app/preserve-expiration-tracking/id1375271432", 1, "card_link"], [1, "card__img--hover"], [1, "card__info"], [1, "card__category"], [1, "card__title"], [1, "card__by"], [1, "card", "card--2"], ["href", "https://devpost.com/software/chatitude", 1, "card_link"], [1, "card", "card--3"], ["href", "assets/RFNetworkLocalizationMethodforRoboticsRovers.pdf", 1, "card_link"], [1, "card", "card--4"], ["href", "https://ewb.berkeley.edu/projects/panama-project/", 1, "card_link"], [1, "card", "card--5"], ["href", "assets/FinalASRPaper.pdf", 1, "card_link"], [1, "card", "card--6"], ["href", "https://devpost.com/software/amsterdam", 1, "card_link"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Preserve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Preserve incorporates OCR technology to scan grocery receipts and track food expiration dates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Swift \u2022\u00A0Xcode \u2022\u00A0Firebase \u2022\u00A0OCR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "article", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Chatitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chatitude is a sentiment analysis chat bot that is used in a customer service setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Swift \u2022\u00A0Xcode \u2022\u00A0IBM Watson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "article", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " RF Localization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mobile network of nodes for real-time navigation of autonomous robotic rovers using RSSI signals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "C++ \u2022\u00A0Python \u2022\u00A0UAV Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "article", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Engineers Without Borders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Designed and mapped out a water distribution system for a Panama community.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "AutoCAD Inventor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "article", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 3D Scanner + 3D Printer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Designed and programmed a fused filament fabrication 3D printer; Built a laser triangulation 3D scanner.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "AutoCAD Inventor \u2022\u00A0Arduino \u2022\u00A0C++ \u2022\u00A0PCL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "article", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Amsterdam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Amsterdam integrates third party transportation services with Google Maps to help people get places faster.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Swift \u2022\u00A0Xcode \u2022\u00A0jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_background_background_component__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"], _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap\");\n@font-face {\n  font-family: theinhardt;\n  src: url('TheinhardtPan-Regular.otf') format(\"opentype\");\n}\n.container[_ngcontent-%COMP%] {\n  background: black;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  padding-bottom: 4rem;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  align-items: center;\n  padding-top: 12rem;\n  padding-left: 2rem;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  color: #fff;\n  font-size: 30px;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.7;\n}\n@media (max-width: 1024px) {\n  .title[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    text-align: center;\n    padding-right: 2rem;\n  }\n\n  .cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 50px;\n    padding-top: 0rem !important;\n    margin-bottom: -3rem !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 125% !important;\n    height: auto;\n    margin-bottom: 2rem !important;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #D2DBDD;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: center;\n}\n.cards[_ngcontent-%COMP%] {\n  display: inline-block;\n  display: -webkit-flex;\n  justify-content: center;\n  -webkit-justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  padding-top: 3rem;\n}\n.card--1[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%], .card--1[_ngcontent-%COMP%]   .card__img--hover[_ngcontent-%COMP%] {\n  background-image: url('preserve.png');\n}\n.card--2[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%], .card--2[_ngcontent-%COMP%]   .card__img--hover[_ngcontent-%COMP%] {\n  background-image: url('chatitude.png');\n}\n.card--3[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%], .card--3[_ngcontent-%COMP%]   .card__img--hover[_ngcontent-%COMP%] {\n  background-image: url('rflocalization.png');\n}\n.card--4[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%], .card--4[_ngcontent-%COMP%]   .card__img--hover[_ngcontent-%COMP%] {\n  background-image: url('panama.png');\n}\n.card--5[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%], .card--5[_ngcontent-%COMP%]   .card__img--hover[_ngcontent-%COMP%] {\n  background-image: url('printer.png');\n}\n.card--6[_ngcontent-%COMP%]   .card__img[_ngcontent-%COMP%], .card--6[_ngcontent-%COMP%]   .card__img--hover[_ngcontent-%COMP%] {\n  background-image: url('amsterdam.png');\n}\n.card__like[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.card__img[_ngcontent-%COMP%] {\n  visibility: hidden;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 235px;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.card__info-hover[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 16px;\n  width: 100%;\n  opacity: 0;\n  top: 0;\n}\n.card__img--hover[_ngcontent-%COMP%] {\n  transition: 0.2s all ease-out;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  position: absolute;\n  height: 235px;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  top: 0;\n}\n.card[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  margin-left: 2rem;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);\n  background-color: #fff;\n  width: 400px;\n  height: 400px;\n  display: block;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);\n  transform: scale(1.1, 1.1);\n}\n.card__info[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: #fff;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  padding: 16px 24px 24px 24px;\n}\n.card__category[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 2px;\n  font-weight: 500;\n  color: #868686;\n}\n.card__title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-family: \"theinhardt\";\n  font-size: 13px !important;\n}\n.card__by[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n}\n.card__author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n  color: #AD7D52;\n}\n.card[_ngcontent-%COMP%]:hover   .card__img--hover[_ngcontent-%COMP%] {\n  height: 100%;\n  opacity: 0.3;\n}\n.card[_ngcontent-%COMP%]:hover   .card__info[_ngcontent-%COMP%] {\n  background-color: transparent;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]:hover   .card__info-hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrRkFBQTtBQUNBLDZIQUFBO0FBQ0Esb0dBQUE7QUFDUjtFQUNJLHVCQUFBO0VBQ0Esd0RBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQU1BO0VBQ0k7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUhOOztFQUtFO0lBQ0ksc0JBQUE7SUFDQSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtFQUZOOztFQUtFO0lBQ0ksc0JBQUE7SUFDQSxZQUFBO0lBQ0EsOEJBQUE7RUFGTjtBQUNGO0FBS0E7RUFDSSxzQkFBQTtBQUhKO0FBTUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUVBLHVCQUFBO0FBSEo7QUFNQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSEo7QUFNQTtFQUNJLHFDQUFBO0FBSEo7QUFNQTtFQUNJLHNDQUFBO0FBSEo7QUFNQTtFQUNJLDJDQUFBO0FBSEo7QUFNQTtFQUNJLG1DQUFBO0FBSEo7QUFNQTtFQUNJLG9DQUFBO0FBSEo7QUFNQTtFQUNJLHNDQUFBO0FBSEo7QUFNQTtFQUNJLFdBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBSEo7QUFNQTtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxNQUFBO0FBSEo7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7QUFGSjtBQUlBO0VBQ0EsaURBQUE7RUFDSSwwQkFBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUFESjtBQUlBO0VBQ0ksa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBREo7QUFJQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBREo7QUFJQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlBO0VBQ0ksVUFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK1NsYWI6MTAwLDMwMCw0MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGksODAwLDgwMGksOTAwLDkwMGknKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDAsNDAwfFBvcHBpbnM6MzAwLDQwMCw4MDAmZGlzcGxheT1zd2FwJyk7XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogdGhlaW5oYXJkdDtcbiAgICBzcmM6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1RoZWluaGFyZHRQYW4tUmVndWxhci5vdGYnKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDpibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICAgIFxuICAgIC50aXRsZSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICB9XG4gICAgLmNhcmRzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMjUlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDJEQkREO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cblxuLmNhcmQtLTEgLmNhcmRfX2ltZywgLmNhcmQtLTEgLmNhcmRfX2ltZy0taG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9wcmVzZXJ2ZS5wbmcnKTtcbn1cblxuLmNhcmQtLTIgLmNhcmRfX2ltZywgLmNhcmQtLTIgLmNhcmRfX2ltZy0taG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jaGF0aXR1ZGUucG5nJyk7XG59XG5cbi5jYXJkLS0zIC5jYXJkX19pbWcsIC5jYXJkLS0zIC5jYXJkX19pbWctLWhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmZsb2NhbGl6YXRpb24ucG5nJyk7XG59XG5cbi5jYXJkLS00IC5jYXJkX19pbWcsIC5jYXJkLS00IC5jYXJkX19pbWctLWhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGFuYW1hLnBuZycpO1xufVxuXG4uY2FyZC0tNSAuY2FyZF9faW1nLCAuY2FyZC0tNSAuY2FyZF9faW1nLS1ob3ZlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3ByaW50ZXIucG5nJyk7XG59XG5cbi5jYXJkLS02IC5jYXJkX19pbWcsIC5jYXJkLS02IC5jYXJkX19pbWctLWhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYW1zdGVyZGFtLnBuZycpO1xufVxuXG4uY2FyZF9fbGlrZSB7XG4gICAgd2lkdGg6IDE4cHg7XG59XG5cbi5jYXJkX19pbWcge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjM1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDsgIFxufVxuXG4uY2FyZF9faW5mby1ob3ZlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG59XG5cbi5jYXJkX19pbWctLWhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIzNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgdG9wOiAwOyAgXG59XG4uY2FyZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsMC4xKTtcbn1cbi5jYXJkOmhvdmVyIHtcbmJveC1zaGFkb3c6IDBweCAzMHB4IDE4cHggLThweCByZ2JhKDAsIDAsIDAsMC4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTAsIDEuMTApO1xufVxuXG4uY2FyZF9faW5mbyB7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4IDI0cHggMjRweDtcbn1cblxuLmNhcmRfX2NhdGVnb3J5IHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzg2ODY4Njtcbn1cblxuLmNhcmRfX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAndGhlaW5oYXJkdCc7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkX19ieSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcmRfX2F1dGhvciB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNBRDdENTI7XG59XG5cbi5jYXJkOmhvdmVyIC5jYXJkX19pbWctLWhvdmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuXG4uY2FyZDpob3ZlciAuY2FyZF9faW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZDpob3ZlciAuY2FyZF9faW5mby1ob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikyarora/niky/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map