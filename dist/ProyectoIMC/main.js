(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alexi/Escritorio/ProyectoIMC/src/main.ts */"zUnb");


/***/ }),

/***/ "3/jv":
/*!******************************!*\
  !*** ./src/app/pi-m/pi-m.ts ***!
  \******************************/
/*! exports provided: piM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "piM", function() { return piM; });
function piM(altura) {
    //refactoring
    let pi = 0;
    pi = ((altura - 150) * 0.6) + 50;
    return pi;
}


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ui.component */ "lxnM");



class AppComponent {
    constructor() {
        this.title = 'ProyectoIMC';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ui");
    } }, directives: [_ui_ui_component__WEBPACK_IMPORTED_MODULE_1__["UiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui.component */ "lxnM");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__["UiComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__["UiComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "d5PK":
/*!******************************!*\
  !*** ./src/app/pi-h/pi-h.ts ***!
  \******************************/
/*! exports provided: piH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "piH", function() { return piH; });
function piH(altura) {
    // refactoring
    let pi = 0;
    pi = ((altura - 150) * 0.75) + 50;
    return pi;
}


/***/ }),

/***/ "iv7n":
/*!********************************!*\
  !*** ./src/app/imc-h/imc-h.ts ***!
  \********************************/
/*! exports provided: imc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imc", function() { return imc; });
function imc(peso, altura) {
    // refactoring
    let imc = 0;
    imc = peso / Math.pow(altura * .01, 2);
    return imc;
}


/***/ }),

/***/ "lxnM":
/*!************************************!*\
  !*** ./src/app/ui/ui.component.ts ***!
  \************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _imc_h_imc_h__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imc-h/imc-h */ "iv7n");
/* harmony import */ var _clasificacion_seedo_h_clasificacion_seedo_h__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clasificacion-seedo-h/clasificacion-seedo-h */ "snD+");
/* harmony import */ var _pi_h_pi_h__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pi-h/pi-h */ "d5PK");
/* harmony import */ var _pi_m_pi_m__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pi-m/pi-m */ "3/jv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = "body[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 0;\n    background: #04b7d6;\n    background-size: cover;\n    font-family: sans-serif;\n    height: 93.5vh;\n  }\n\n.container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: start;\n    justify-content: center;\n}\n\n.child[_ngcontent-%COMP%] {\n    background: #60e0b0;\n    padding: .2rem;\n}\n\nlabel[_ngcontent-%COMP%]{\n    font-weight: 800;\n    font-size: 20px;\n    font-family: sans-serif;\n}\n\n.boton_personalizado[_ngcontent-%COMP%]{\n    text-decoration: none;\n    padding: 8px;\n    font-weight: 600;\n    font-size: 20px;\n    color: #ffffff;\n    background-color: #1883ba;\n    border-radius: 5px;\n    border: 1px solid #0016b0;\n  }\n\n.boton_personalizado[_ngcontent-%COMP%]:hover{\n    color: #1883ba;\n    background-color: #ffffff;\n  }\n\n\n\n.switch[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n\n\n.slider[_ngcontent-%COMP%] {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n  }\n\n.slider[_ngcontent-%COMP%]:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n  }\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n    background-color: #2196F3;\n  }\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n    box-shadow: 0 0 1px #2196F3;\n  }\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n    transform: translateX(26px);\n  }\n\n\n\n.slider.round[_ngcontent-%COMP%] {\n    border-radius: 34px;\n  }\n\n.slider.round[_ngcontent-%COMP%]:before {\n    border-radius: 50%;\n  }\n\n.modalDialog[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tfont-family: Arial, Helvetica, sans-serif;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(0,0,0,0.8);\n\tz-index: 99999;\n\topacity:0;\n\ttransition: opacity 400ms ease-in;\n\tpointer-events: none;\n}\n\n.modalDialog[_ngcontent-%COMP%]:target {\n\topacity:1;\n\tpointer-events: auto;\n}\n\n.modalDialog[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\twidth: 400px;\n\tposition: relative;\n\tmargin: 10% auto;\n\tpadding: 5px 20px 13px 20px;\n\tborder-radius: 10px;\n\tbackground: #fff;\n\tbackground: -o-linear-gradient(#fff, #999);\ntransition: opacity 400ms ease-in;\n}\n\n.close[_ngcontent-%COMP%] {\n\tbackground: #606061;\n\tcolor: #FFFFFF;\n\tline-height: 25px;\n\tposition: absolute;\n\tright: -12px;\n\ttext-align: center;\n\ttop: -10px;\n\twidth: 24px;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tborder-radius: 12px;\n\tbox-shadow: 1px 1px 3px #000;\n}\n\n.close[_ngcontent-%COMP%]:hover { background: #00d9ff; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7QUFFRjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0VBQzNCOztBQUVGLDJDQUEyQzs7QUFDM0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUEsK0JBQStCOztBQUMvQjtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztBQUVBLGVBQWU7O0FBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBR0UsMkJBQTJCO0VBQzdCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7Q0FDRCxlQUFlO0NBQ2YseUNBQXlDO0NBQ3pDLE1BQU07Q0FDTixRQUFRO0NBQ1IsU0FBUztDQUNULE9BQU87Q0FDUCwyQkFBMkI7Q0FDM0IsY0FBYztDQUNkLFNBQVM7Q0FHVCxpQ0FBaUM7Q0FDakMsb0JBQW9CO0FBQ3JCOztBQUNBO0NBQ0MsU0FBUztDQUNULG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBR2hCLDBDQUEwQztBQUczQyxpQ0FBaUM7QUFDakM7O0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FHakIsbUJBQW1CO0NBR25CLDRCQUE0QjtBQUM3Qjs7QUFDQSxlQUFlLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvdWkvdWkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICMwNGI3ZDY7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBoZWlnaHQ6IDkzLjV2aDtcbiAgfVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kOiAjNjBlMGIwO1xuICAgIHBhZGRpbmc6IC4ycmVtO1xufVxuXG5sYWJlbHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJvdG9uX3BlcnNvbmFsaXphZG97XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg4M2JhO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAxNmIwO1xuICB9XG5cbiAgLmJvdG9uX3BlcnNvbmFsaXphZG86aG92ZXJ7XG4gICAgY29sb3I6ICMxODgzYmE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gIH1cbiAgXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4gIC5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAvKiBUaGUgc2xpZGVyICovXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICB9XG4gIFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgfVxuICBcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG4gIC5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIH1cbiAgXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAubW9kYWxEaWFsb2cge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTtcblx0ei1pbmRleDogOTk5OTk7XG5cdG9wYWNpdHk6MDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XG5cdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm1vZGFsRGlhbG9nOnRhcmdldCB7XG5cdG9wYWNpdHk6MTtcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4ubW9kYWxEaWFsb2cgPiBkaXYge1xuXHR3aWR0aDogNDAwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOiAxMCUgYXV0bztcblx0cGFkZGluZzogNXB4IDIwcHggMTNweCAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjZmZmLCAjOTk5KTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZmZiwgIzk5OSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjZmZmLCAjOTk5KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XG4tbW96LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcbnRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcbn1cbi5jbG9zZSB7XG5cdGJhY2tncm91bmQ6ICM2MDYwNjE7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRsaW5lLWhlaWdodDogMjVweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogLTEycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAtMTBweDtcblx0d2lkdGg6IDI0cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTJweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHQtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDA7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzAwMDtcblx0Ym94LXNoYWRvdzogMXB4IDFweCAzcHggIzAwMDtcbn1cbi5jbG9zZTpob3ZlciB7IGJhY2tncm91bmQ6ICMwMGQ5ZmY7IH0iXX0= */";
class UiComponent {
    constructor() {
        this.hombre = true;
        this.mujer = false;
        this.edad = null;
        this.altura = null;
        this.peso = null;
        this.pi = 0;
        this.imcLocal = 0;
        this.diaActual = new Date();
    }
    ngOnInit() {
    }
    cambioH() {
        if (this.mujer) {
            this.mujer = false;
        }
    }
    cambioM() {
        if (this.hombre) {
            this.hombre = false;
        }
    }
    calculos() {
        this.imcLocal = Object(_imc_h_imc_h__WEBPACK_IMPORTED_MODULE_1__["imc"])(this.peso, this.altura);
        if (this.hombre) {
            this.pi = Object(_pi_h_pi_h__WEBPACK_IMPORTED_MODULE_3__["piH"])(this.altura);
        }
        else {
            this.pi = Object(_pi_m_pi_m__WEBPACK_IMPORTED_MODULE_4__["piM"])(this.altura);
        }
        this.clasificacion = Object(_clasificacion_seedo_h_clasificacion_seedo_h__WEBPACK_IMPORTED_MODULE_2__["clasificacion"])(this.imcLocal);
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(); };
UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["app-ui"]], decls: 83, vars: 12, consts: [["charset", "utf-8"], ["name", "description", "content", ""], [1, "container"], ["for", "label"], [1, "switch"], ["type", "checkbox", "id", "switchH", 3, "ngModel", "click", "ngModelChange"], [1, "slider", "round"], ["type", "checkbox", "id", "switchM", 3, "ngModel", "click", "ngModelChange"], ["for", "edad"], ["type", "edad", "name", "edad", "id", "edad", "placeholder", "", 3, "ngModel", "ngModelChange"], ["for", "altura"], ["type", "altura", "name", "altura", "id", "altura", "placeholder", "", 3, "ngModel", "ngModelChange"], ["for", "peso"], ["type", "peso", "name", "peso", "id", "peso", "placeholder", "", 3, "ngModel", "ngModelChange"], ["href", "#openModal", 1, "boton_personalizado", 3, "click"], ["id", "openModal", 1, "modalDialog"], ["href", "#close", "title", "Close", 1, "close"], [1, "diaActual"], [1, "peso"], [1, "altura"], [1, "edad"], [1, "imcLocal"], [1, "clasificacion"], ["src", "../../assets/img/TablaSEEDO.png", "alt", "TablaSEEDO", 1, "logo"], [1, "pi"]], template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Calculadora IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Calculadora de IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_input_click_15_listener() { return ctx.cambioH(); })("ngModelChange", function UiComponent_Template_input_ngModelChange_15_listener($event) { return ctx.hombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mujer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_input_click_21_listener() { return ctx.cambioM(); })("ngModelChange", function UiComponent_Template_input_ngModelChange_21_listener($event) { return ctx.mujer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edad: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_26_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Altura(cm): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_30_listener($event) { return ctx.altura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Peso(kg): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_34_listener($event) { return ctx.peso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiComponent_Template_a_click_36_listener() { return ctx.calculos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Calcular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Resultados IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Fecha: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "-----------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "PESO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "ALTURA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "EDAD: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "-----------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "IMC: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Indice de Masa Corporal: Peso(kg)/Altura(m)2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Tu estado es: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "PI: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Peso Ideal: Hombre: Altura(cm) - 150 x 0,75 + 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Mujer: Altura(cm) - 150 x 0,6 + 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mujer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.altura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.peso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.diaActual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.peso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.altura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.imcLocal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clasificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pi);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]], styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui',
                templateUrl: './ui.component.html',
                styleUrls: ['./ui.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "snD+":
/*!****************************************************************!*\
  !*** ./src/app/clasificacion-seedo-h/clasificacion-seedo-h.ts ***!
  \****************************************************************/
/*! exports provided: clasificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clasificacion", function() { return clasificacion; });
function clasificacion(imc) {
    //refactoring
    if (imc < 18.5) {
        return ('Desnutricion');
    }
    if (imc > 18.4 && imc < 25) {
        return "Normal";
    }
    if (imc > 24.9 && imc < 27) {
        return "Sobre peso grado 1";
    }
    if (imc > 26.9 && imc < 30) {
        return "Sobre peso grado 2";
    }
    if (imc > 29.9 && imc < 35) {
        return "Obesidad tipo 1";
    }
    if (imc > 34.9 && imc < 40) {
        return "Obesidad tipo 2";
    }
    if (imc > 39.9 && imc < 50) {
        return "Obesidad tipo 3 Morbida";
    }
    else {
        return "Obesidad tipo 4 Extrema";
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map