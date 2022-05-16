(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/DBu":
/*!********************************************************!*\
  !*** ./src/app/componentes/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






const _c0 = function (a0) { return { imgScroll: a0 }; };
const _c1 = function (a0) { return { fondoNavbarDark: a0 }; };
const _c2 = function (a0) { return { fondoIcon: a0 }; };
const _c3 = function () { return { exact: true }; };
const _c4 = function (a0) { return { logoBarra2: a0 }; };
class NavbarComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.color = 'rgba(204, 204, 204, 0.288)';
        this.centrado = true;
        this.radius = 20;
    }
    ngOnInit() {
    }
    inicioBarra() {
        window.scroll(0, 0);
        this.crudService.scrolled = false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 46, vars: 88, consts: [[1, "fixed-top", "margenes", "fondo", 2, "top", "-5px"], [1, "flex-container"], ["src", "../../../assets/logo2.png", 1, "fixed", "logoMuseo", 2, "margin-left", "10px", "transition", "all 0.2s ease", 3, "ngClass"], ["src", "../../../assets/logomuni.png", 1, "fixed", "logomMuni", 2, "margin-top", "25px", "margin-right", "20px", "transition", "all 0.2s ease", 3, "ngClass"], [1, "menu"], [1, "itemMenu", "flex-container1", 3, "ngClass"], [2, "margin-left", "10px!important"], ["matRipple", "", "routerLink", "/", 3, "matRippleColor", "matRippleCentered", "matRippleRadius"], [1, "agregar600", "navbarResponsive", "as", 2, "margin-top", "6px", 3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", "click"], [1, "subtituloResposive2", "font", "mr-1", "quitar600", 2, "margin-left", "10px!important", 3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", "click"], ["matRipple", "", "routerLink", "/todos/Art\u00EDculos", 3, "matRippleColor", "matRippleCentered", "matRippleRadius"], [1, "agregar600", "navbarResponsive", 3, "ngClass", "routerLinkActive", "click"], [1, "material-icons-outlined"], [1, "subtituloResposive2", "font", "mr-1", "quitar600", 3, "ngClass", "routerLinkActive", "click"], ["matRipple", "", "routerLink", "/todos/Exposici\u00F3n", 3, "matRippleColor", "matRippleCentered", "matRippleRadius"], ["matRipple", "", "routerLink", "../sin", 3, "matRippleColor", "matRippleCentered", "matRippleRadius"], ["matRipple", "", "routerLink", "/todos/Videos", 3, "matRippleColor", "matRippleCentered", "matRippleRadius"], ["matRipple", "", "routerLink", "../museo", 3, "matRippleColor", "matRippleCentered", "matRippleRadius"], [2, "float", "right", "margin-top", "-32px"], ["src", "../../../assets/logobarra.JPG", "alt", "", 1, "logoBarra", "imgMuseo", 2, "margin-bottom", "0px", "margin-top", "-20px!important", "margin-right", "10px", 3, "ngClass"], ["href", "https://web.facebook.com/museodelavidarural", "target", "_blank", 2, "color", "black"], [2, "font-size", "26px", "margin-right", "5px", "margin-top", "-3px", 3, "ngClass"], ["href", "https://www.youtube.com/channel/UCLzgeQS4y6a-NAgkzuXVdSA", "target", "_blank", 2, "color", "black"], [2, "font-size", "26px", "margin-right", "15px", "margin-top", "-3px", 3, "ngClass"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_8_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "museum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h3_click_10_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "INICIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_13_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h3_click_16_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NOVEDADES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_19_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "photo_camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h3_click_21_listener() { return ctx.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "EXPOSICION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_24_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h3_click_26_listener() { return ctx.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PUBLICACIONES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_29_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "play_circle_filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h3_click_31_listener() { return ctx.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "VIDEOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_34_listener() { return ctx.crudService.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h3_click_36_listener() { return ctx.inicioBarra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "MUSEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "play_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx.crudService.scrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx.crudService.scrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c1, ctx.crudService.scrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx.color)("matRippleCentered", ctx.centrado)("matRippleRadius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx.color)("matRippleCentered", ctx.centrado)("matRippleRadius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx.color)("matRippleCentered", ctx.centrado)("matRippleRadius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx.color)("matRippleCentered", ctx.centrado)("matRippleRadius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](72, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx.color)("matRippleCentered", ctx.centrado)("matRippleRadius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleColor", ctx.color)("matRippleCentered", ctx.centrado)("matRippleRadius", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](78, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](80, _c2, ctx.crudService.scrolled))("routerLinkActive", "activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](82, _c4, ctx.crudService.scrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](84, _c2, ctx.crudService.scrolled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](86, _c2, ctx.crudService.scrolled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');\r\n\r\n.fondoIcon[_ngcontent-%COMP%]{color:white!important; }\r\n\r\n.fondoIconMuseo[_ngcontent-%COMP%]{color:white!important}\r\n\r\n.fondoNavbarDark[_ngcontent-%COMP%]{background-color: rgb(0, 0, 0)!important; border:none!important; border-radius: 5px!important; }\r\n\r\n.imgScroll[_ngcontent-%COMP%]{margin-top: -110px!important;}\r\n\r\n.navbarResponsive[_ngcontent-%COMP%]{\r\n    color: rgb(0, 0, 0);\r\n    margin-top:6px;\r\n    margin-left: 10px;}\r\n\r\n.logoMuseo[_ngcontent-%COMP%]{width: 300px; margin-top:0px}\r\n\r\n.logomMuni[_ngcontent-%COMP%]{width: 170px; }\r\n\r\nhr[_ngcontent-%COMP%]{margin-top: 5px; }\r\n\r\nh3[_ngcontent-%COMP%]{font-size: 17px!important;}\r\n\r\n.font[_ngcontent-%COMP%]{font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  color:rgb(34, 34, 34); font-size:22px; margin-top:7px; margin-left: 10px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.logoBarra[_ngcontent-%COMP%]{display: none;}\r\n\r\n.logoBarra2[_ngcontent-%COMP%]{display: inline;}\r\n\r\n.fondo[_ngcontent-%COMP%]{ background-color: rgb(255, 255, 255);}\r\n\r\n\r\n\r\n.menu[_ngcontent-%COMP%]{height: 40px;  margin-top:10px; background-color: rgb(255, 255, 255); }\r\n\r\n.itemMenu[_ngcontent-%COMP%]{display:flex ; align-items: flex-start; margin-top:-5px;\r\n          border:1px solid rgb(223, 223, 223);\r\n          border-left: none; border-right: none; height: 40px;\r\n          }\r\n\r\n.activo[_ngcontent-%COMP%]{\r\n        transition: all 0.3s ease-in-out;\r\n        color:rgb(199, 83, 83)!important;  \r\n        }\r\n\r\na[_ngcontent-%COMP%]{text-decoration: none;}\r\n\r\n.agregar600[_ngcontent-%COMP%]{display:none;}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-content: stretch;\r\n  align-items: flex-start;\r\n  }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n\r\n@media  (max-width: 1300px){\r\n\r\n  }\r\n\r\n@media  (max-width: 800px){\r\n  .logoMuseo[_ngcontent-%COMP%]{width: 240px;}\r\n  .logomMuni[_ngcontent-%COMP%]{width: 120px;}\r\n\r\n}\r\n\r\n@media  (max-width: 600px){\r\n\r\n  .logomMuni[_ngcontent-%COMP%]{display: none;}\r\n  .quitar600[_ngcontent-%COMP%]{display:none}\r\n  .agregar600[_ngcontent-%COMP%]{display:block}\r\n  .navbarResponsive[_ngcontent-%COMP%]{margin-left:15px!important; }\r\n  .imgMuseo[_ngcontent-%COMP%]{display:none!important}\r\n  .activo[_ngcontent-%COMP%]{font-size:24px!important;}\r\n  .fondoNavbarDark[_ngcontent-%COMP%]{ border-radius: 0px!important; }\r\n    .as[_ngcontent-%COMP%]{margin-left:5px!important }\r\n  \r\n}\r\n\r\n.flex-container1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-content: stretch;\r\n  }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(3) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0UsV0FBVyxxQkFBcUIsRUFBRTs7QUFDbEMsZ0JBQWdCLHFCQUFxQjs7QUFDckMsaUJBQWlCLHdDQUF3QyxFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFOztBQUNoSCxXQUFXLDRCQUE0QixDQUFDOztBQUN4QztJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCLENBQUM7O0FBQ3RCLFdBQVcsWUFBWSxFQUFFLGNBQWM7O0FBQ3ZDLFdBQVcsWUFBWSxFQUFFOztBQUN6QixHQUFHLGVBQWUsRUFBRTs7QUFDcEIsR0FBRyx5QkFBeUIsQ0FBQzs7QUFDN0IsTUFBTSw0Q0FBNEM7RUFDaEQscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxpQkFBaUI7RUFDeEUsbUJBQW1CO0FBQ3JCOztBQUNBLFdBQVcsYUFBYSxDQUFDOztBQUN6QixZQUFZLGVBQWUsQ0FBQzs7QUFDNUIsUUFBUSxvQ0FBb0MsQ0FBQzs7QUFFN0MsdURBQXVEOztBQUV2RCxNQUFNLFlBQVksR0FBRyxlQUFlLEVBQUUsb0NBQW9DLEVBQUU7O0FBRTVFLFVBQVUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGVBQWU7VUFDdkQsbUNBQW1DO1VBQ25DLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVk7VUFDbkQ7O0FBRVY7UUFDUSxnQ0FBZ0M7UUFDaEMsZ0NBQWdDLEdBQUcscUJBQXFCO1FBQ3hEOztBQUVSLEVBQUUscUJBQXFCLENBQUM7O0FBRXhCLFlBQVksWUFBWSxDQUFDOztBQUV6QjtFQUdFLGFBQWE7RUFHYixtQkFBbUI7RUFHbkIsaUJBQWlCO0VBR2pCLDhCQUE4QjtFQUc5QixzQkFBc0I7RUFHdEIsdUJBQXVCO0VBQ3ZCOztBQUVGO0VBR0UsUUFBUTtFQUdSLGNBQWM7RUFHZCxnQkFBZ0I7RUFDaEI7O0FBRUY7RUFHRSxRQUFRO0VBR1IsY0FBYztFQUdkLGdCQUFnQjtFQUNoQjs7QUFLQTs7RUFFQTs7QUFLRjtFQUNFLFdBQVcsWUFBWSxDQUFDO0VBQ3hCLFdBQVcsWUFBWSxDQUFDOztBQUUxQjs7QUFFQTs7RUFFRSxXQUFXLGFBQWEsQ0FBQztFQUN6QixXQUFXLFlBQVk7RUFDdkIsWUFBWSxhQUFhO0VBQ3pCLGtCQUFrQiwwQkFBMEIsRUFBRTtFQUM5QyxVQUFVLHNCQUFzQjtFQUNoQyxRQUFRLHdCQUF3QixDQUFDO0VBQ2pDLGtCQUFrQiw0QkFBNEIsRUFBRTtJQUM5QyxJQUFJLDBCQUEwQjs7QUFFbEM7O0FBRUE7RUFJRSxhQUFhO0VBR2IsbUJBQW1CO0VBR25CLGlCQUFpQjtFQUdqQiwyQkFBMkI7RUFHM0Isc0JBQXNCO0VBQ3RCOztBQUVGO0VBR0UsUUFBUTtFQUdSLGNBQWM7RUFHZCxnQkFBZ0I7RUFDaEI7O0FBRUY7RUFHRSxRQUFRO0VBR1IsY0FBYztFQUdkLGdCQUFnQjtFQUNoQjs7QUFFRjtFQUdFLFFBQVE7RUFHUixjQUFjO0VBR2QsZ0JBQWdCO0VBQ2hCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG8rSHllb24mZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uZm9uZG9JY29ue2NvbG9yOndoaXRlIWltcG9ydGFudDsgfVxyXG4uZm9uZG9JY29uTXVzZW97Y29sb3I6d2hpdGUhaW1wb3J0YW50fVxyXG4uZm9uZG9OYXZiYXJEYXJre2JhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKSFpbXBvcnRhbnQ7IGJvcmRlcjpub25lIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDsgfVxyXG4uaW1nU2Nyb2xse21hcmdpbi10b3A6IC0xMTBweCFpbXBvcnRhbnQ7fVxyXG4ubmF2YmFyUmVzcG9uc2l2ZXtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O31cclxuLmxvZ29NdXNlb3t3aWR0aDogMzAwcHg7IG1hcmdpbi10b3A6MHB4fVxyXG4ubG9nb21NdW5pe3dpZHRoOiAxNzBweDsgfVxyXG5ocnttYXJnaW4tdG9wOiA1cHg7IH1cclxuaDN7Zm9udC1zaXplOiAxN3B4IWltcG9ydGFudDt9XHJcbi5mb250e2ZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOnJnYigzNCwgMzQsIDM0KTsgZm9udC1zaXplOjIycHg7IG1hcmdpbi10b3A6N3B4OyBtYXJnaW4tbGVmdDogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5sb2dvQmFycmF7ZGlzcGxheTogbm9uZTt9XHJcbi5sb2dvQmFycmEye2Rpc3BsYXk6IGlubGluZTt9XHJcbi5mb25kb3sgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO31cclxuXHJcbi8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2RhbGUuanBnJyk7ICovXHJcblxyXG4ubWVudXtoZWlnaHQ6IDQwcHg7ICBtYXJnaW4tdG9wOjEwcHg7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgfVxyXG5cclxuLml0ZW1NZW51e2Rpc3BsYXk6ZmxleCA7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBtYXJnaW4tdG9wOi01cHg7XHJcbiAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lOyBib3JkZXItcmlnaHQ6IG5vbmU7IGhlaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbi5hY3Rpdm97XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgY29sb3I6cmdiKDE5OSwgODMsIDgzKSFpbXBvcnRhbnQ7ICAvKkNvbG9yIHRleHRvLWFjdGl2byovXHJcbiAgICAgICAgfVxyXG5cclxuYXt0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxyXG5cclxuLmFncmVnYXI2MDB7ZGlzcGxheTpub25lO31cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbi5mbGV4LWl0ZW06bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xyXG4gIG9yZGVyOiAwO1xyXG4gIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG5cclxuLmZsZXgtaXRlbTpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtb3JkZXI6IDA7XHJcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgb3JkZXI6IDA7XHJcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcclxuICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAgKG1heC13aWR0aDogMTMwMHB4KXtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgLmxvZ29NdXNlb3t3aWR0aDogMjQwcHg7fVxyXG4gIC5sb2dvbU11bml7d2lkdGg6IDEyMHB4O31cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogNjAwcHgpe1xyXG5cclxuICAubG9nb21NdW5pe2Rpc3BsYXk6IG5vbmU7fVxyXG4gIC5xdWl0YXI2MDB7ZGlzcGxheTpub25lfVxyXG4gIC5hZ3JlZ2FyNjAwe2Rpc3BsYXk6YmxvY2t9XHJcbiAgLm5hdmJhclJlc3BvbnNpdmV7bWFyZ2luLWxlZnQ6MTVweCFpbXBvcnRhbnQ7IH1cclxuICAuaW1nTXVzZW97ZGlzcGxheTpub25lIWltcG9ydGFudH1cclxuICAuYWN0aXZve2ZvbnQtc2l6ZToyNHB4IWltcG9ydGFudDt9XHJcbiAgLmZvbmRvTmF2YmFyRGFya3sgYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDsgfVxyXG4gICAgLmFze21hcmdpbi1sZWZ0OjVweCFpbXBvcnRhbnQgfVxyXG4gIFxyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIxIHtcclxuXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC1vcmRlcjogMDtcclxuICAtbXMtZmxleC1vcmRlcjogMDtcclxuICBvcmRlcjogMDtcclxuICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XHJcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIH1cclxuXHJcbi5mbGV4LWl0ZW06bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xyXG4gIG9yZGVyOiAwO1xyXG4gIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG5cclxuLmZsZXgtaXRlbTpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtb3JkZXI6IDA7XHJcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgb3JkZXI6IDA7XHJcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcclxuICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\evaristo\Desktop\mvr\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1kjM":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/publi-card-mobile/publi-card-mobile.component.ts ***!
  \******************************************************************************/
/*! exports provided: PubliCardMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubliCardMobileComponent", function() { return PubliCardMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PubliCardMobileComponent {
    constructor() {
        this.stringIM = '';
    }
    ngOnInit() {
        var _a;
        this.stringIM = (_a = this.data) === null || _a === void 0 ? void 0 : _a.imagen4.slice(8);
        this.stringIM = "https://www.museodelavidarural.com/upload/" + this.stringIM;
        if (this.data.categoria === "Categoria") {
            this.data.categoria = "Categoría";
        }
    }
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
}
PubliCardMobileComponent.ɵfac = function PubliCardMobileComponent_Factory(t) { return new (t || PubliCardMobileComponent)(); };
PubliCardMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PubliCardMobileComponent, selectors: [["app-publi-card-mobile"]], inputs: { data: "data" }, decls: 23, vars: 6, consts: [[1, "card", "sombraBox", "as", 2, "padding", "10px", "padding-bottom", "0px", "background-color", "rgb(255, 255, 255)", "margin-bottom", "-80px", "margin-left", "15px", "margin-right", "15px"], [1, "row", "pm0"], [1, "col-4", "pm0"], [3, "routerLink"], ["width", "100%", 3, "src"], [1, "col-8", "pm0", 2, "padding-left", "10px!important"], [1, "card-content"], [1, "card-title"], [1, "cate", 2, "font-size", "12px", "font-family", "'Yanone Kaffeesatz', sans-serif", "color", "brown", "margin-left", "3px"], [2, "margin-top", "-10px"], [1, "titulo"], [1, "text1", "subtitulo"], [1, ""], [1, "card-read-more", 2, "margin-top", "10px"]], template: function PubliCardMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.stringIM, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.data == null ? null : ctx.data.categoria, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../todos/", ctx.data == null ? null : ctx.data.titulo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.subtitulo);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');\r\n\r\nimg[_ngcontent-%COMP%]{object-fit: cover; border-radius: 10px; height: 110px!important; margin:0px; padding: 0px;}\r\n\r\n.titulo[_ngcontent-%COMP%]{font-size: 24px;font-family: 'Pattaya', sans-serif;\r\n letter-spacing: 0px;margin-left:5px;\r\n  margin-top:0px;\r\n  color:rgb(68, 68, 68)\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{margin-left:7px; margin-top:-9px; line-height:16px; font-size:11px }\r\n\r\na[_ngcontent-%COMP%]{color:rgb(0, 0, 0)}\r\n\r\n.as[_ngcontent-%COMP%]:active{opacity: 0.5; }\r\n\r\n.text2[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n\r\n.pm0[_ngcontent-%COMP%]{padding: 0px; margin:0px;}\r\n\r\n.text1[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n\r\n@media  (max-width: 600px){\r\n   .cate[_ngcontent-%COMP%]{font-size:12px!important;}\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpLWNhcmQtbW9iaWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RSxJQUFJLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7O0FBQzlGLFFBQVEsZUFBZSxDQUFDLGtDQUFrQztDQUN6RCxtQkFBbUIsQ0FBQyxlQUFlO0VBQ2xDLGNBQWM7RUFDZDtBQUNGOztBQUNBLFdBQVcsZUFBZSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlOztBQUM5RSxFQUFFLGtCQUFrQjs7QUFFcEIsV0FBVyxZQUFZLEVBQUU7O0FBRXpCOztFQUVFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixnQkFBZ0I7O0FBRWxCLEtBQUssWUFBWSxFQUFFLFVBQVUsQ0FBQzs7QUFDOUI7O0VBRUUsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7O0VBRTVCLGdCQUFnQjs7QUFNaEI7R0FDQyxNQUFNLHdCQUF3QixDQUFDO01BQzVCIiwiZmlsZSI6InB1YmxpLWNhcmQtbW9iaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXR0YXlhJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW1ne29iamVjdC1maXQ6IGNvdmVyOyBib3JkZXItcmFkaXVzOiAxMHB4OyBoZWlnaHQ6IDExMHB4IWltcG9ydGFudDsgbWFyZ2luOjBweDsgcGFkZGluZzogMHB4O31cclxuLnRpdHVsb3tmb250LXNpemU6IDI0cHg7Zm9udC1mYW1pbHk6ICdQYXR0YXlhJywgc2Fucy1zZXJpZjtcclxuIGxldHRlci1zcGFjaW5nOiAwcHg7bWFyZ2luLWxlZnQ6NXB4O1xyXG4gIG1hcmdpbi10b3A6MHB4O1xyXG4gIGNvbG9yOnJnYig2OCwgNjgsIDY4KVxyXG59XHJcbi5zdWJ0aXR1bG97bWFyZ2luLWxlZnQ6N3B4OyBtYXJnaW4tdG9wOi05cHg7IGxpbmUtaGVpZ2h0OjE2cHg7IGZvbnQtc2l6ZToxMXB4IH1cclxuYXtjb2xvcjpyZ2IoMCwgMCwgMCl9XHJcblxyXG4uYXM6YWN0aXZle29wYWNpdHk6IDAuNTsgfVxyXG5cclxuLnRleHQyIHtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG4ucG0we3BhZGRpbmc6IDBweDsgbWFyZ2luOjBweDt9XHJcbi50ZXh0MSB7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgIC5jYXRle2ZvbnQtc2l6ZToxMnB4IWltcG9ydGFudDt9XHJcbiAgICAgIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "4CGP":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/articulo-card/articulo-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: ArticuloCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticuloCardComponent", function() { return ArticuloCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _img_loader_img_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img-loader/img-loader.component */ "nG6N");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class ArticuloCardComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.stringIM = '';
        this.stringCategoria = '';
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        var _a, _b, _c;
        this.stringIM = (_a = this.data) === null || _a === void 0 ? void 0 : _a.imagen4.slice(8);
        this.stringIM = "https://www.museodelavidarural.com/upload/" + this.stringIM;
        if (((_b = this.data) === null || _b === void 0 ? void 0 : _b.categoria) === "Articulos") {
            this.data.categoria = "Artículos";
        }
        if (((_c = this.data) === null || _c === void 0 ? void 0 : _c.categoria) === "Exposicion") {
            this.data.categoria = "Exposición";
        }
    }
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
    scrollTop() {
        window.scrollTo(0, 0);
    }
    agregarVista(data) {
        this.crudService.unProducto = data;
        this.crudService.unProducto.vistas = Number(this.crudService.unProducto.vistas) + 1;
        console.log('dale', this.crudService.unProducto.vistas);
        if (data._id) {
            this.crudService.modificarProducto(this.crudService.unProducto)
                .subscribe(res => {
                console.log("modificado  contanor");
            });
        }
        else {
            //  this.crudService.unProducto.vistas = 0
            //    this.crudService.addProducto(this.crudService.unProducto).subscribe(res => { console.log(res) })
        }
    }
    ;
}
ArticuloCardComponent.ɵfac = function ArticuloCardComponent_Factory(t) { return new (t || ArticuloCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
ArticuloCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticuloCardComponent, selectors: [["app-articulo-card"]], inputs: { data: "data" }, decls: 34, vars: 7, consts: [[1, "card", "principal", "sombraBox", "marginB", 2, "min-height", "300px", "border", "2px solid rgb(240, 240, 240)"], [1, "card-content"], [1, "card-title"], [2, "font-size", "15px", "font-family", "'Yanone Kaffeesatz', sans-serif", "color", "brown", "margin-left", "3px"], [2, "margin-top", "-10px"], [3, "routerLink", "click"], [1, "titulo", "text1", "mt-2"], [1, "text2", "subtitulo", 2, "margin-bottom", "0px"], [3, "routerLink"], ["loader", "../../../assets/loading.gif", 3, "image"], [2, "display", "flex", "justify-content", "left", "margin-left", "15px", "margin-top", "5px", "margin-bottom", "-40px"], [2, "display", "flex", "align-items", "flex-start", "margin-top", "2px", "margin-left", "-20px", "margin-right", "2px"], [1, "mr-corre", "mr-2", "ml-2", 2, "font-size", "19px", "color", "rgb(161, 161, 161)"], [1, "subtituloResposive2", 2, "font-size", "11px", "margin-top", "-3px", "margin-left", "-10px", "color", "rgb(161, 161, 161)"], [2, "display", "flex", "align-items", "flex-start", "margin-top", "5px", "margin-right", "5px"], [1, "mr-2", 2, "font-size", "16px", "color", "rgb(161, 161, 161)", "margin-top", "9px"], [1, "subtituloResposive2", 2, "font-size", "11px", "margin-top", "4px", "margin-left", "-14px", "color", "rgb(161, 161, 161)"], [1, ""]], template: function ArticuloCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticuloCardComponent_Template_a_click_6_listener() { return ctx.agregarVista(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-img-loader", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "event_available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MVR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.data == null ? null : ctx.data.categoria, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.subtitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("image", "", ctx.stringIM, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.crudService.fechaPipe(ctx.data.creado));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _img_loader_img_loader_component__WEBPACK_IMPORTED_MODULE_3__["ImgLoaderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');\r\n.principal[_ngcontent-%COMP%]{padding: 10px;margin-right:10px; background-color: white;padding-bottom:10px;margin-left:10px!important}\r\nimg[_ngcontent-%COMP%]{object-fit: cover; border-radius: 1px; height: 200px!important;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 120%;font-family: 'Bree Serif', serif; line-height: 23px;margin-left:5px; color:rgb(0, 0, 0);\r\n\r\n\r\n}\r\n.subtitulo[_ngcontent-%COMP%]{margin-left:4px;min-height: 50px; margin-top:-5px; line-height:17px; font-size:12px ; font-family: 'Ubuntu', sans-serif; }\r\n.subtituloResposive2[_ngcontent-%COMP%]{font-family: 'Ubuntu', sans-serif; font-size:10px;margin-right: 5px; margin-top:0px; margin-left: -16px; color:rgb(148, 148, 148)}\r\n.color[_ngcontent-%COMP%]{color:rgba(165, 42, 42, 0.795)!important}\r\na[_ngcontent-%COMP%]{color:rgb(0, 0, 0)}\r\n.text2[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n.text1[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n@media  (max-width: 2500px){\r\n  img[_ngcontent-%COMP%]{height: 140px!important;}\r\n .titulo[_ngcontent-%COMP%]{font-size: 120%; line-height: 20px;text-transform: uppercase;\r\n  color: rgb(37, 37, 37) ; \r\n}\r\n  }\r\n@media  (max-width: 1200px){\r\n    img[_ngcontent-%COMP%]{height: 150px!important;}\r\n\r\n    }\r\n@media  (max-width: 1000px){\r\n  img[_ngcontent-%COMP%]{height: 150px!important;}\r\n  .marginB[_ngcontent-%COMP%]{margin-bottom:-70px!important}\r\n  .titulo[_ngcontent-%COMP%]{font-size: 123%;}\r\n  }\r\n@media  (max-width: 770px){\r\n    img[_ngcontent-%COMP%]{height: 200px!important;}\r\n\r\n    }\r\n@media  (max-width: 600px){\r\n\r\n      .principal[_ngcontent-%COMP%]{margin-bottom:0px}\r\n      .principal[_ngcontent-%COMP%]{margin-right: -5px!important;}\r\n      .titulo[_ngcontent-%COMP%]{font-size: 130%; line-height: 20px;}\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljdWxvLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFDL0UsV0FBVyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsMEJBQTBCO0FBRWxILElBQUksaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7QUFDbkUsUUFBUSxlQUFlLENBQUMsZ0NBQWdDLEVBQUUsaUJBQWlCLENBQUMsZUFBZSxFQUFFLGtCQUFrQjs7O0FBRy9HO0FBQ0EsV0FBVyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxpQ0FBaUMsRUFBRTtBQUVwSSxxQkFBcUIsaUNBQWlDLEVBQUUsY0FBYyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSx3QkFBd0I7QUFFdEosT0FBTyx3Q0FBd0M7QUFDL0MsRUFBRSxrQkFBa0I7QUFFcEI7O0VBRUUsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7O0VBRTVCLGdCQUFnQjtBQUdsQjs7RUFFRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0Qjs7RUFFNUIsZ0JBQWdCO0FBSWxCO0VBQ0UsSUFBSSx1QkFBdUIsQ0FBQztDQUM3QixRQUFRLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyx5QkFBeUI7RUFDbkUsdUJBQXVCO0FBQ3pCO0VBQ0U7QUFFQTtJQUNFLElBQUksdUJBQXVCLENBQUM7O0lBRTVCO0FBRUo7RUFDRSxJQUFJLHVCQUF1QixDQUFDO0VBQzVCLFNBQVMsNkJBQTZCO0VBQ3RDLFFBQVEsZUFBZSxDQUFDO0VBQ3hCO0FBQ0E7SUFDRSxJQUFJLHVCQUF1QixDQUFDOztJQUU1QjtBQUVBOztNQUVFLFdBQVcsaUJBQWlCO01BQzVCLFdBQVcsNEJBQTRCLENBQUM7TUFDeEMsUUFBUSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7TUFDM0MiLCJmaWxlIjoiYXJ0aWN1bG8tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJlZStTZXJpZiZkaXNwbGF5PXN3YXAnKTtcclxuLnByaW5jaXBhbHtwYWRkaW5nOiAxMHB4O21hcmdpbi1yaWdodDoxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtwYWRkaW5nLWJvdHRvbToxMHB4O21hcmdpbi1sZWZ0OjEwcHghaW1wb3J0YW50fVxyXG5cclxuaW1ne29iamVjdC1maXQ6IGNvdmVyOyBib3JkZXItcmFkaXVzOiAxcHg7IGhlaWdodDogMjAwcHghaW1wb3J0YW50O31cclxuLnRpdHVsb3tmb250LXNpemU6IDEyMCU7Zm9udC1mYW1pbHk6ICdCcmVlIFNlcmlmJywgc2VyaWY7IGxpbmUtaGVpZ2h0OiAyM3B4O21hcmdpbi1sZWZ0OjVweDsgY29sb3I6cmdiKDAsIDAsIDApO1xyXG5cclxuXHJcbn1cclxuLnN1YnRpdHVsb3ttYXJnaW4tbGVmdDo0cHg7bWluLWhlaWdodDogNTBweDsgbWFyZ2luLXRvcDotNXB4OyBsaW5lLWhlaWdodDoxN3B4OyBmb250LXNpemU6MTJweCA7IGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjsgfVxyXG5cclxuLnN1YnRpdHVsb1Jlc3Bvc2l2ZTJ7Zm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmOyBmb250LXNpemU6MTBweDttYXJnaW4tcmlnaHQ6IDVweDsgbWFyZ2luLXRvcDowcHg7IG1hcmdpbi1sZWZ0OiAtMTZweDsgY29sb3I6cmdiKDE0OCwgMTQ4LCAxNDgpfVxyXG5cclxuLmNvbG9ye2NvbG9yOnJnYmEoMTY1LCA0MiwgNDIsIDAuNzk1KSFpbXBvcnRhbnR9XHJcbmF7Y29sb3I6cmdiKDAsIDAsIDApfVxyXG5cclxuLnRleHQyIHtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG5cclxuLnRleHQxIHtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMjUwMHB4KXtcclxuICBpbWd7aGVpZ2h0OiAxNDBweCFpbXBvcnRhbnQ7fVxyXG4gLnRpdHVsb3tmb250LXNpemU6IDEyMCU7IGxpbmUtaGVpZ2h0OiAyMHB4O3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KSA7IFxyXG59XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICBpbWd7aGVpZ2h0OiAxNTBweCFpbXBvcnRhbnQ7fVxyXG5cclxuICAgIH1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICBpbWd7aGVpZ2h0OiAxNTBweCFpbXBvcnRhbnQ7fVxyXG4gIC5tYXJnaW5Ce21hcmdpbi1ib3R0b206LTcwcHghaW1wb3J0YW50fVxyXG4gIC50aXR1bG97Zm9udC1zaXplOiAxMjMlO31cclxuICB9XHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgICBpbWd7aGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuXHJcbiAgICAgIC5wcmluY2lwYWx7bWFyZ2luLWJvdHRvbTowcHh9XHJcbiAgICAgIC5wcmluY2lwYWx7bWFyZ2luLXJpZ2h0OiAtNXB4IWltcG9ydGFudDt9XHJcbiAgICAgIC50aXR1bG97Zm9udC1zaXplOiAxMzAlOyBsaW5lLWhlaWdodDogMjBweDt9XHJcbiAgICAgIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "4oof":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _portada_portada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../portada/portada.component */ "5tja");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../publi-card/publi-card.component */ "vCn4");
/* harmony import */ var _articulo_card_articulo_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../articulo-card/articulo-card.component */ "4CGP");
/* harmony import */ var _articulo_card_desktop_articulo_card_desktop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../articulo-card-desktop/articulo-card-desktop.component */ "eZ8n");
/* harmony import */ var _publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../publi-card-mobile/publi-card-mobile.component */ "1kjM");
/* harmony import */ var _videos_card_videos_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../videos-card/videos-card.component */ "5TKp");
/* harmony import */ var _pipes_filtrox4_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/filtrox4.pipe */ "vEVZ");
/* harmony import */ var _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/filtro.pipe */ "7ebX");














function PrincipalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PrincipalComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-articulo-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", producto_r7);
} }
function PrincipalComponent_div_2_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-articulo-card-desktop", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", producto_r8);
} }
function PrincipalComponent_div_2_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-publi-card-mobile", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", producto_r9);
} }
function PrincipalComponent_div_2_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-articulo-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", producto_r10);
} }
function PrincipalComponent_div_2_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-videos-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", producto_r11);
} }
function PrincipalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-portada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u00DAltimas Novedades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "- Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PrincipalComponent_div_2_div_20_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "filtrox4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PrincipalComponent_div_2_div_24_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "filtrox4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "account_balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Publicaciones Archivos PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "- Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "app-publi-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, PrincipalComponent_div_2_div_45_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "photo_camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Exposici\u00F3n de objetos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "- Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, PrincipalComponent_div_2_div_61_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "filtrox4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "photo_camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Videos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "- Ver m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, PrincipalComponent_div_2_div_76_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "filtrox4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 8, ctx_r1.productos, "Art\u00EDculos"), 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 14, ctx_r1.productos, "Art\u00EDculos"), 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](46, 17, ctx_r1.productos, "Categoria"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](62, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](63, 23, ctx_r1.productos, "Exposici\u00F3n"), 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](77, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](78, 29, ctx_r1.productos, "Videos"), 4));
} }
class PrincipalComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.clientes$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.clientes = 0;
    }
    ngOnInit() {
        this.crudService.$loading.emit(true);
        this.crudService.$loading.subscribe(res => this.loader = res);
        this.pedirProductos();
        var az = Number(localStorage.getItem('pedidos'));
        // window.scrollTo(0,az);
    }
    pedirProductos() {
        this.productos = [] = [];
        this.loader = true;
        this.crudService.getProductos().subscribe(res => {
            this.crudService.productos = res; // guardo resultados de la peticion en el servicio
            this.productos = res; // guardo resultados de la peticion en variable productos del este componente.
            console.log(this.productos);
            this.crudService.$loading.emit(false);
        }); //fin de subscribe
        // falta agregar loading
    } //fin de pedirProductos
    ngOnDestroy() {
        var aux = window.pageYOffset;
        localStorage.setItem('pedidos', JSON.stringify(aux));
        this.crudService.$loading.emit(true);
    }
    //  ngAfterViewInit() {
    //
    //   }
    evento($event) {
        if (window.pageYOffset > 210) {
            this.crudService.scrolled = true;
        }
        else {
            this.crudService.scrolled = false;
        }
    }
    ;
}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) { return new (t || PrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"])); };
PrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrincipalComponent, selectors: [["app-principal"]], hostBindings: function PrincipalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function PrincipalComponent_scroll_HostBindingHandler($event) { return ctx.ngOnInit($event); });
    } }, decls: 3, vars: 2, consts: [[3, "scroll"], ["class", "marginResposive", 4, "ngIf"], [4, "ngIf"], [1, "marginResposive"], [1, "text-center", 2, "height", "40vh"], ["src", "../../../assets/loading4.gif", "alt", "", "align", "center", 1, "loader"], [1, "mt-1", "pm0", 2, "width", "100%", "background-color", "rgba(240, 240, 240, 0.802)"], [1, "flex-container3", 2, "margin-top", "-5px!important"], [2, "margin-top", "20px", "margin-bottom", "10px", "background-color", "rgb(255, 255, 255)", "border-top", "1px solid gainsboro", "border-bottom", "1px solid gainsboro"], [1, "flex-container", "margin600"], [2, "margin-top", "6px", "margin-left", "0px", "color", "brown"], ["routerLink", "/todos/Art\u00EDculos", 2, "z-index", "100"], [1, "tituloBarra", 2, "color", "rgb(56, 56, 56)"], [2, "color", "brown"], [2, "margin-bottom", "0px", "padding-bottom", "0px"], [1, "flex-container3"], [2, "background-color", "rgba(255, 255, 255, 0)", "margin-left", "0px", "margin-right", "0px", "margin-top", "-40px"], [1, "row", "pm0"], ["class", "pm0 col-sm-12 col-md-6 col-lg-3 col-xl-3 ocultar600 ocultar;", 4, "ngFor", "ngForOf"], [1, "row", "pm0", 2, "margin-left", "15px!important", "margin-right", "15px!important"], ["class", "pm0 col-sm-12 col-md-6 col-lg-3 col-xl-3 mostrar600", "style", "padding: 0px; padding-left:10px; margin-bottom:-0px", 4, "ngFor", "ngForOf"], [1, "separadorPubli"], ["routerLink", "../sin", 2, "z-index", "100"], [1, "tituloBarra"], [2, "padding-bottom", "0px", "margin-bottom", "0px"], [1, "ocultar600", 2, "margin-top", "-15px"], [1, "mostrar600"], [1, "row", "pm0", 2, "margin-top", "-30px!important"], ["class", "pm0 col-sm-12 col-md-6 col-lg-3 col-xl-3 mostrar600", "style", "padding-left:10px;", 4, "ngFor", "ngForOf"], [1, "separador1"], [1, "flex-container"], [2, "margin-top", "6px", "margin-left", "14px", "color", "brown"], ["routerLink", "/todos/Exposici\u00F3n", 2, "z-index", "100"], [2, "font-family", "'Yanone Kaffeesatz', sans-serif", "font-size", "22px", "margin-left", "5px", "margin-bottom", "0px", "border-radius", "1px", "margin-top", "3px", "color", "black"], [2, "background-color", "rgba(255, 255, 255, 0)"], [1, "row", "pm0", 2, "margin-right", "20px!important"], ["class", "col-sm-12 col-md-6 col-lg-3 col-xl-3 pm0 cardExpo", 4, "ngFor", "ngForOf"], [1, "marginB", "separadorVideo"], ["routerLink", "/todos/Videos", 2, "z-index", "100"], ["class", "col-sm-12 col-md-6 col-lg-3 col-xl- 3 pm0 ", 4, "ngFor", "ngForOf"], [1, "pm0", "col-sm-12", "col-md-6", "col-lg-3", "col-xl-3", "ocultar600", "ocultar;"], [3, "data"], [1, "pm0", "col-sm-12", "col-md-6", "col-lg-3", "col-xl-3", "mostrar600", 2, "padding", "0px", "padding-left", "10px", "margin-bottom", "-0px"], [1, "pm0", "col-sm-12", "col-md-6", "col-lg-3", "col-xl-3", "mostrar600", 2, "padding-left", "10px"], [1, "col-sm-12", "col-md-6", "col-lg-3", "col-xl-3", "pm0", "cardExpo"], [1, "col-sm-12", "col-md-6", "col-lg-3", "col-xl-", "3", "pm0"]], template: function PrincipalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function PrincipalComponent_Template_div_scroll_0_listener($event) { return ctx.evento($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PrincipalComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PrincipalComponent_div_2_Template, 79, 32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _portada_portada_component__WEBPACK_IMPORTED_MODULE_4__["PortadaComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_7__["PubliCardComponent"], _articulo_card_articulo_card_component__WEBPACK_IMPORTED_MODULE_8__["ArticuloCardComponent"], _articulo_card_desktop_articulo_card_desktop_component__WEBPACK_IMPORTED_MODULE_9__["ArticuloCardDesktopComponent"], _publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_10__["PubliCardMobileComponent"], _videos_card_videos_card_component__WEBPACK_IMPORTED_MODULE_11__["VideosCardComponent"]], pipes: [_pipes_filtrox4_pipe__WEBPACK_IMPORTED_MODULE_12__["Filtrox4Pipe"], _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_13__["FiltroPipe"]], styles: [".separador[_ngcontent-%COMP%]{\r\n    margin-bottom: 35px;\r\n    background-color: rgb(255, 255, 255);\r\n    margin-top:-80px;\r\n    border-top: 1px solid gainsboro;\r\n    border-bottom: 1px solid gainsboro;\r\n  }\r\n.loader[_ngcontent-%COMP%]{width:100px}\r\na[_ngcontent-%COMP%]{text-decoration: none;}\r\n.marginResposive[_ngcontent-%COMP%]{margin-top:250px}\r\n.marginB[_ngcontent-%COMP%]{margin-top:-80px!important; }\r\n.tituloBarra[_ngcontent-%COMP%]{color:rgba(53, 53, 53, 0.877); font-family: 'Yanone Kaffeesatz', sans-serif;\r\n   font-size: 22px; margin-left: 5px; margin-bottom: 0px;  border-radius: 1px; margin-top:4px}\r\n.separador1[_ngcontent-%COMP%]{\r\n  margin-bottom: 35px;\r\n  background-color: white;\r\n   margin-top:-70px; border-top: 1px solid gainsboro;border-bottom: 1px solid gainsboro;\r\n }\r\n.separadorPubli[_ngcontent-%COMP%]{margin-bottom: 10px; background-color: rgb(255, 255, 255);\r\n  border-top: 1px solid gainsboro;\r\n  border-bottom: 1px solid gainsboro;\r\n   margin-top:-65px}\r\n.separadorVideo[_ngcontent-%COMP%]{margin-bottom: 35px; background-color: rgb(255, 255, 255); border-top: 1px solid gainsboro;\r\n    border-bottom: 1px solid gainsboro; margin-top:20px}\r\n.mostrar600[_ngcontent-%COMP%]{display:none}\r\n.cardExpo[_ngcontent-%COMP%]{margin-top:-80px!important}\r\n.pm0[_ngcontent-%COMP%]{padding:0px!important; margin:0px!important}\r\n.flex-container3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-content: stretch;\r\n  align-items: flex-start;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(3) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-content: stretch;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(3) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n@media  (max-width: 1000px){\r\n  .separadorPubli[_ngcontent-%COMP%]{margin-top:0px}\r\n  .separadorVideo[_ngcontent-%COMP%]{margin-top:0px}\r\n  .marginB[_ngcontent-%COMP%]{margin-top:0px!important; }\r\n  }\r\n@media  (max-width: 620px){\r\n    .mostrar600[_ngcontent-%COMP%]{display:block}\r\n    .ocultar600[_ngcontent-%COMP%]{display:none}\r\n    .ocultar[_ngcontent-%COMP%]{display:none!important}\r\n    .marginPadding0[_ngcontent-%COMP%]{margin:0px!important; padding: 0px!important;}\r\n    .separador[_ngcontent-%COMP%]{margin-top:10px;}\r\n    .separador1[_ngcontent-%COMP%]{margin-top:-45px;}\r\n    .marginResposive[_ngcontent-%COMP%]{margin-top:200px;}\r\n    .margin600[_ngcontent-%COMP%]{margin-left:15px!important}\r\n    .separadorPubli[_ngcontent-%COMP%]{margin-top: 10px!important;}\r\n    .cardExpo[_ngcontent-%COMP%]{margin-bottom:-10px!important}\r\n    .marginB[_ngcontent-%COMP%]{margin-top: 5px!important;}\r\n    .loader[_ngcontent-%COMP%]{width:70px}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGtDQUFrQztFQUNwQztBQUNGLFFBQVEsV0FBVztBQUVuQixFQUFFLHFCQUFxQixDQUFDO0FBQ3RCLGlCQUFpQixnQkFBZ0I7QUFDakMsU0FBUywwQkFBMEIsRUFBRTtBQUNyQyxhQUFhLDZCQUE2QixFQUFFLDRDQUE0QztHQUN2RixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEdBQUcsa0JBQWtCLEVBQUUsY0FBYztBQUU1RjtFQUNDLG1CQUFtQjtFQUNuQix1QkFBdUI7R0FDdEIsZ0JBQWdCLEVBQUUsK0JBQStCLENBQUMsa0NBQWtDO0NBQ3RGO0FBQ0EsZ0JBQWdCLG1CQUFtQixFQUFFLG9DQUFvQztFQUN4RSwrQkFBK0I7RUFDL0Isa0NBQWtDO0dBQ2pDLGdCQUFnQjtBQUVoQixnQkFBZ0IsbUJBQW1CLEVBQUUsb0NBQW9DLEVBQUUsK0JBQStCO0lBQ3pHLGtDQUFrQyxFQUFFLGVBQWU7QUFFdkQsWUFBWSxZQUFZO0FBQ3hCLFVBQVUsMEJBQTBCO0FBRXBDLEtBQUsscUJBQXFCLEVBQUUsb0JBQW9CO0FBRWhEO0VBR0UsYUFBYTtFQUdiLG1CQUFtQjtFQUduQixpQkFBaUI7RUFHakIsOEJBQThCO0VBRzlCLHNCQUFzQjtFQUd0Qix1QkFBdUI7RUFDdkI7QUFFRjtFQUdFLFFBQVE7RUFHUixjQUFjO0VBR2QsZ0JBQWdCO0VBQ2hCO0FBRUY7RUFHRSxRQUFRO0VBR1IsY0FBYztFQUdkLGdCQUFnQjtFQUNoQjtBQUVGO0VBR0UsUUFBUTtFQUdSLGNBQWM7RUFHZCxnQkFBZ0I7RUFDaEI7QUFFRjtFQUlFLGFBQWE7RUFHYixtQkFBbUI7RUFHbkIsaUJBQWlCO0VBR2pCLDJCQUEyQjtFQUczQixzQkFBc0I7RUFDdEI7QUFFRjtFQUdFLFFBQVE7RUFHUixjQUFjO0VBR2QsZ0JBQWdCO0VBQ2hCO0FBRUY7RUFHRSxRQUFRO0VBR1IsY0FBYztFQUdkLGdCQUFnQjtFQUNoQjtBQUVGO0VBR0UsUUFBUTtFQUdSLGNBQWM7RUFHZCxnQkFBZ0I7RUFDaEI7QUFFQTtFQUNBLGdCQUFnQixjQUFjO0VBQzlCLGdCQUFnQixjQUFjO0VBQzlCLFNBQVMsd0JBQXdCLEVBQUU7RUFDbkM7QUFFQTtJQUNFLFlBQVksYUFBYTtJQUN6QixZQUFZLFlBQVk7SUFDeEIsU0FBUyxzQkFBc0I7SUFDL0IsZ0JBQWdCLG9CQUFvQixFQUFFLHNCQUFzQixDQUFDO0lBQzdELFdBQVcsZUFBZSxDQUFDO0lBQzNCLFlBQVksZ0JBQWdCLENBQUM7SUFDN0IsaUJBQWlCLGdCQUFnQixDQUFDO0lBQ2xDLFdBQVcsMEJBQTBCO0lBQ3JDLGdCQUFnQiwwQkFBMEIsQ0FBQztJQUMzQyxVQUFVLDZCQUE2QjtJQUN2QyxTQUFTLHlCQUF5QixDQUFDO0lBQ25DLFFBQVEsVUFBVTtFQUNwQiIsImZpbGUiOiJwcmluY2lwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXBhcmFkb3J7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgbWFyZ2luLXRvcDotODBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gIH1cclxuLmxvYWRlcnt3aWR0aDoxMDBweH1cclxuXHJcbmF7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxuICAubWFyZ2luUmVzcG9zaXZle21hcmdpbi10b3A6MjUwcHh9XHJcbiAgLm1hcmdpbkJ7bWFyZ2luLXRvcDotODBweCFpbXBvcnRhbnQ7IH1cclxuICAudGl0dWxvQmFycmF7Y29sb3I6cmdiYSg1MywgNTMsIDUzLCAwLjg3Nyk7IGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xyXG4gICBmb250LXNpemU6IDIycHg7IG1hcmdpbi1sZWZ0OiA1cHg7IG1hcmdpbi1ib3R0b206IDBweDsgIGJvcmRlci1yYWRpdXM6IDFweDsgbWFyZ2luLXRvcDo0cHh9XHJcblxyXG4gLnNlcGFyYWRvcjF7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgbWFyZ2luLXRvcDotNzBweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gfVxyXG4gLnNlcGFyYWRvclB1Ymxpe21hcmdpbi1ib3R0b206IDEwcHg7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgIG1hcmdpbi10b3A6LTY1cHh9XHJcblxyXG4gICAuc2VwYXJhZG9yVmlkZW97bWFyZ2luLWJvdHRvbTogMzVweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybzsgbWFyZ2luLXRvcDoyMHB4fVxyXG5cclxuLm1vc3RyYXI2MDB7ZGlzcGxheTpub25lfVxyXG4uY2FyZEV4cG97bWFyZ2luLXRvcDotODBweCFpbXBvcnRhbnR9XHJcblxyXG4ucG0we3BhZGRpbmc6MHB4IWltcG9ydGFudDsgbWFyZ2luOjBweCFpbXBvcnRhbnR9XHJcblxyXG4uZmxleC1jb250YWluZXIzIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuLmZsZXgtaXRlbTpudGgtY2hpbGQoMSkge1xyXG4gIC13ZWJraXQtb3JkZXI6IDA7XHJcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgb3JkZXI6IDA7XHJcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcclxuICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgLXdlYmtpdC1vcmRlcjogMDtcclxuICAtbXMtZmxleC1vcmRlcjogMDtcclxuICBvcmRlcjogMDtcclxuICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XHJcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIH1cclxuXHJcbi5mbGV4LWl0ZW06bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xyXG4gIG9yZGVyOiAwO1xyXG4gIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC1vcmRlcjogMDtcclxuICAtbXMtZmxleC1vcmRlcjogMDtcclxuICBvcmRlcjogMDtcclxuICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XHJcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIH1cclxuXHJcbi5mbGV4LWl0ZW06bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xyXG4gIG9yZGVyOiAwO1xyXG4gIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG5cclxuLmZsZXgtaXRlbTpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtb3JkZXI6IDA7XHJcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgb3JkZXI6IDA7XHJcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcclxuICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAuc2VwYXJhZG9yUHVibGl7bWFyZ2luLXRvcDowcHh9XHJcbiAgLnNlcGFyYWRvclZpZGVve21hcmdpbi10b3A6MHB4fVxyXG4gIC5tYXJnaW5Ce21hcmdpbi10b3A6MHB4IWltcG9ydGFudDsgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA2MjBweCl7XHJcbiAgICAubW9zdHJhcjYwMHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgLm9jdWx0YXI2MDB7ZGlzcGxheTpub25lfVxyXG4gICAgLm9jdWx0YXJ7ZGlzcGxheTpub25lIWltcG9ydGFudH1cclxuICAgIC5tYXJnaW5QYWRkaW5nMHttYXJnaW46MHB4IWltcG9ydGFudDsgcGFkZGluZzogMHB4IWltcG9ydGFudDt9XHJcbiAgICAuc2VwYXJhZG9ye21hcmdpbi10b3A6MTBweDt9XHJcbiAgICAuc2VwYXJhZG9yMXttYXJnaW4tdG9wOi00NXB4O31cclxuICAgIC5tYXJnaW5SZXNwb3NpdmV7bWFyZ2luLXRvcDoyMDBweDt9XHJcbiAgICAubWFyZ2luNjAwe21hcmdpbi1sZWZ0OjE1cHghaW1wb3J0YW50fVxyXG4gICAgLnNlcGFyYWRvclB1Ymxpe21hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O31cclxuICAgIC5jYXJkRXhwb3ttYXJnaW4tYm90dG9tOi0xMHB4IWltcG9ydGFudH1cclxuICAgIC5tYXJnaW5Ce21hcmdpbi10b3A6IDVweCFpbXBvcnRhbnQ7fVxyXG4gICAgLmxvYWRlcnt3aWR0aDo3MHB4fVxyXG4gIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "5TKp":
/*!******************************************************************!*\
  !*** ./src/app/componentes/videos-card/videos-card.component.ts ***!
  \******************************************************************/
/*! exports provided: VideosCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosCardComponent", function() { return VideosCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/safe.pipe */ "YYwF");




class VideosCardComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.stringIM = '';
    }
    ngOnInit() {
        var _a;
        this.stringIM = (_a = this.data) === null || _a === void 0 ? void 0 : _a.imagen4.slice(8);
        this.stringIM = "https://www.museodelavidarural.com/upload/" + this.stringIM;
    }
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
}
VideosCardComponent.ɵfac = function VideosCardComponent_Factory(t) { return new (t || VideosCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
VideosCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosCardComponent, selectors: [["app-videos-card"]], inputs: { data: "data" }, decls: 21, vars: 7, consts: [[1, "card", "sombraBox", "principal"], [1, "card-content"], [1, "card-title"], [2, "font-size", "15px", "font-family", "'Yanone Kaffeesatz', sans-serif", "color", "brown"], [2, "margin-top", "-10px"], [1, "titulo", "text2"], [2, "margin-top", "-5px"], [1, ""], [3, "routerLink"], ["width", "100%", "height", "200", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], [1, "text3", 2, "margin-left", "4px", "margin-top", "10px", "line-height", "15px", 3, "innerHTML"], [1, "card-read-more", 2, "margin-top", "-10px"]], template: function VideosCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.data == null ? null : ctx.data.categoria, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx.data == null ? null : ctx.data.imagen2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data == null ? null : ctx.data.descripcion1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]], styles: ["img[_ngcontent-%COMP%]{object-fit: cover; border-radius: 6px; height: 250px!important;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 150%;font-family: 'Yanone Kaffeesatz', sans-serif; line-height: 25px; letter-spacing: 0.2px;}\r\n.subtitulo[_ngcontent-%COMP%]{margin-top:5px; line-height:18px; font-size: 14px;}\r\na[_ngcontent-%COMP%]{color:rgb(0, 0, 0)}\r\n.principal[_ngcontent-%COMP%]{padding: 10px;background-color: white; margin-left:10px; margin-right: 15px; }\r\n.bottomArre[_ngcontent-%COMP%]{margin-bottom:10px!important}\r\n.text3[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n@media  (max-width: 1500px){\r\n  img[_ngcontent-%COMP%]{height: 180px!important;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 140%; line-height: 22px;}\r\n  }\r\n@media  (max-width: 1200px){\r\n    img[_ngcontent-%COMP%]{height: 150px!important;}\r\n\r\n    }\r\n@media  (max-width: 1000px){\r\n  img[_ngcontent-%COMP%]{height: 200px!important;}\r\n\r\n  }\r\n@media  (max-width: 770px){\r\n    img[_ngcontent-%COMP%]{height: 200px!important;}\r\n    .principal[_ngcontent-%COMP%]{margin-bottom:-0px!important}\r\n\r\n    }\r\n@media  (max-width: 620px){\r\n\r\n.principal[_ngcontent-%COMP%]{margin-bottom:-70px!important }\r\n\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvcy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQztBQUNuRSxRQUFRLGVBQWUsQ0FBQyw0Q0FBNEMsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQztBQUMvRyxXQUFXLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7QUFDN0QsRUFBRSxrQkFBa0I7QUFFcEIsV0FBVyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUU7QUFDeEYsWUFBWSw0QkFBNEI7QUFDeEM7O0VBRUUsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7O0VBRTVCLGdCQUFnQjtBQUlsQjtFQUNFLElBQUksdUJBQXVCLENBQUM7QUFDOUIsUUFBUSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7RUFDekM7QUFFQTtJQUNFLElBQUksdUJBQXVCLENBQUM7O0lBRTVCO0FBRUo7RUFDRSxJQUFJLHVCQUF1QixDQUFDOztFQUU1QjtBQUNBO0lBQ0UsSUFBSSx1QkFBdUIsQ0FBQztJQUM1QixXQUFXLDRCQUE0Qjs7SUFFdkM7QUFHQTs7QUFFSixXQUFXLDhCQUE4Qjs7TUFFbkMiLCJmaWxlIjoidmlkZW9zLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tvYmplY3QtZml0OiBjb3ZlcjsgYm9yZGVyLXJhZGl1czogNnB4OyBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDt9XHJcbi50aXR1bG97Zm9udC1zaXplOiAxNTAlO2ZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMjVweDsgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O31cclxuLnN1YnRpdHVsb3ttYXJnaW4tdG9wOjVweDsgbGluZS1oZWlnaHQ6MThweDsgZm9udC1zaXplOiAxNHB4O31cclxuYXtjb2xvcjpyZ2IoMCwgMCwgMCl9XHJcblxyXG4ucHJpbmNpcGFse3BhZGRpbmc6IDEwcHg7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IG1hcmdpbi1sZWZ0OjEwcHg7IG1hcmdpbi1yaWdodDogMTVweDsgfVxyXG4uYm90dG9tQXJyZXttYXJnaW4tYm90dG9tOjEwcHghaW1wb3J0YW50fVxyXG4udGV4dDMge1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbn1cclxuXHJcblxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiAxNTAwcHgpe1xyXG4gIGltZ3toZWlnaHQ6IDE4MHB4IWltcG9ydGFudDt9XHJcbi50aXR1bG97Zm9udC1zaXplOiAxNDAlOyBsaW5lLWhlaWdodDogMjJweDt9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICBpbWd7aGVpZ2h0OiAxNTBweCFpbXBvcnRhbnQ7fVxyXG5cclxuICAgIH1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICBpbWd7aGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7fVxyXG5cclxuICB9XHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgICBpbWd7aGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7fVxyXG4gICAgLnByaW5jaXBhbHttYXJnaW4tYm90dG9tOi0wcHghaW1wb3J0YW50fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgQG1lZGlhICAobWF4LXdpZHRoOiA2MjBweCl7XHJcblxyXG4ucHJpbmNpcGFse21hcmdpbi1ib3R0b206LTcwcHghaW1wb3J0YW50IH1cclxuXHJcbiAgICAgIH1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "5tja":
/*!**********************************************************!*\
  !*** ./src/app/componentes/portada/portada.component.ts ***!
  \**********************************************************/
/*! exports provided: PortadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortadaComponent", function() { return PortadaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class PortadaComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortadaComponent.ɵfac = function PortadaComponent_Factory(t) { return new (t || PortadaComponent)(); };
PortadaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortadaComponent, selectors: [["app-portada"]], decls: 29, vars: 0, consts: [["src", "../../../assets/15.jpg", "height", "580px", 1, "w-100", 2, "object-fit", "cover"], [1, "card-img-overlay", "margenes", 2, "padding", "0px"], [1, "superPosicion", "correBottom"], [1, "tituloOver"], [1, "card-text", "tituloEncima2", "categoria"], ["routerLink", "/muestra"], [1, "card-title", "tituloEncima", "fuenteTitulo"], [1, "fuenteSubTitulo", "subtitulo", "text1"], [1, "piePortada"], [1, "textoIcon", 2, "margin-left", "-3px"], [1, "mr-corre", "mr-2", "ml-2", "fontColor"], [1, "subtituloResposive2", "fechaStyle"], [2, "margin-top", "5px"], [1, "textIcon2", "logoMuseoseva"], [1, "mr-2", "fontColor"]], template: function PortadaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Muestra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "M\u00FAsica de Dionisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Una invitaci\u00F3n a compartir la \u201CM\u00DASICA DE DIONISIA\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "24/05/2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Museo de la vida Rural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".imgPortada[_ngcontent-%COMP%]{object-fit:cover; margin-top:90px}\r\n.superPosicion[_ngcontent-%COMP%]{background-color: rgba(0, 0, 0, 0.699); position:relative; bottom:-1px;  margin-left:0px!important; margin-right:0px!important}\r\n.categoria[_ngcontent-%COMP%]{line-height: 30px; margin-bottom: -.5px;}\r\n.piePortada[_ngcontent-%COMP%]{display: flex; justify-content: left; margin-left:-5px; margin-top:-0px }\r\n.textoIcon[_ngcontent-%COMP%]{display:flex ; align-items: flex-start; margin-top:-5px; margin-left:-10px; margin-right: 5px}\r\n.textIcon2[_ngcontent-%COMP%]{display:flex ; align-items: flex-start; margin-top:-10px; margin-right: 5px}\r\n.fontColor[_ngcontent-%COMP%]{font-size:19px; color:white}\r\n.fechaStyle[_ngcontent-%COMP%]{font-size:11px;  margin-top:-3px; margin-left: -10px;  color:rgb(219, 219, 219)}\r\n.tituloEncima[_ngcontent-%COMP%]{\r\n\r\n  margin-top:4px;\r\n  font-size: 35px;\r\n  color: white;\r\n  text-shadow: 1px 0px 10px rgb(0, 0, 0);\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  letter-spacing: 1px;\r\n  line-height: 20px;\r\n    }\r\n.tituloEncima2[_ngcontent-%COMP%]{\r\n\r\n      margin-top: 450px;\r\n      letter-spacing: 1px;\r\n      color: rgb(238, 98, 98) ;\r\n      font-size: 14px;\r\n      text-shadow: 1px 0px 10px rgb(0, 0, 0);\r\n      margin-bottom: 5px;\r\n\r\n  }\r\n.sombra[_ngcontent-%COMP%]{box-shadow: 7px 10px 19px -4px rgba(0,0,0,0.75);  }\r\n.tituloOver[_ngcontent-%COMP%]{margin-left:15px; margin-right:15px}\r\n.subtitulo[_ngcontent-%COMP%]{color:wheat; font-size: 15px; margin-top:-25px; }\r\n@media  (max-width: 1000px){\r\n      .correccion1[_ngcontent-%COMP%]{margin: 0px!important}\r\n      .fuenteSubTitulo[_ngcontent-%COMP%]{font-size: 14px;}\r\n      .correBottom[_ngcontent-%COMP%]{bottom:0!important}\r\n      .tituloEncima2[_ngcontent-%COMP%]{margin-top:453px!important}\r\n\r\n  }\r\n.text1[_ngcontent-%COMP%] {\r\n\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n}\r\n@media  (max-width: 600px){\r\n  .correBottom[_ngcontent-%COMP%]{bottom:10px!important}\r\n  .fuenteSubTitulo[_ngcontent-%COMP%]{margin-top:-25px}\r\n  .fuenteTitulo[_ngcontent-%COMP%]{font-size: 30px; margin-top:-10px}\r\n  \r\n  .paddingOff[_ngcontent-%COMP%]{padding:0px!important}\r\n  .fuenteSubTitulo[_ngcontent-%COMP%]{font-size: 13px; margin-top:-32px}\r\n  .tituloEncima[_ngcontent-%COMP%]{line-height: 30px!important;}\r\n  .tituloEncima2[_ngcontent-%COMP%]{margin-top:450px!important}\r\n  .tituloEncima2[_ngcontent-%COMP%]{margin-top:455px!important}\r\n\r\n\r\n\r\n  .text1[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    line-height: 16px;\r\n}\r\n\r\n}\r\n@media  (max-width: 350px){\r\n.fuenteTitulo[_ngcontent-%COMP%]{font-size: 25px!important; margin-top:-10px}\r\n.subtitulo[_ngcontent-%COMP%]{font-size: 12px; margin-top:-35px; line-height: 13px;}\r\n.tituloEncima2[_ngcontent-%COMP%]{margin-top:464px!important}\r\n.logoMuseoseva[_ngcontent-%COMP%]{display: none;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRhZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWSxnQkFBZ0IsRUFBRSxlQUFlO0FBQzdDLGVBQWUsc0NBQXNDLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxHQUFHLHlCQUF5QixFQUFFLDBCQUEwQjtBQUM3SSxXQUFXLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDO0FBQ25ELFlBQVksYUFBYSxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQjtBQUNwRixXQUFXLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCO0FBQ3hHLFdBQVcsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQjtBQUN0RixXQUFXLGNBQWMsRUFBRSxXQUFXO0FBQ3RDLFlBQVksY0FBYyxHQUFHLGVBQWUsRUFBRSxrQkFBa0IsR0FBRyx3QkFBd0I7QUFDM0Y7O0VBRUUsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsaUJBQWlCO0lBQ2Y7QUFFSjs7TUFFTSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLHdCQUF3QjtNQUN4QixlQUFlO01BQ2Ysc0NBQXNDO01BQ3RDLGtCQUFrQjs7RUFFdEI7QUFFQSxRQUFzSCwrQ0FBK0MsR0FBRztBQUV4SyxZQUFZLGdCQUFnQixFQUFFLGlCQUFpQjtBQUUvQyxXQUFXLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFNekQ7TUFDRSxhQUFhLHFCQUFxQjtNQUNsQyxpQkFBaUIsZUFBZSxDQUFDO01BQ2pDLGFBQWEsa0JBQWtCO01BQy9CLGVBQWUsMEJBQTBCOztFQUU3QztBQUdBOztJQUVFLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUdBO0VBQ0UsYUFBYSxxQkFBcUI7RUFDbEMsaUJBQWlCLGdCQUFnQjtFQUNqQyxjQUFjLGVBQWUsRUFBRSxnQkFBZ0I7RUFDL0MsbUNBQW1DO0VBQ25DLFlBQVkscUJBQXFCO0VBQ2pDLGlCQUFpQixlQUFlLEVBQUUsZ0JBQWdCO0VBQ2xELGNBQWMsMkJBQTJCLENBQUM7RUFDMUMsZUFBZSwwQkFBMEI7RUFDekMsZUFBZSwwQkFBMEI7Ozs7RUFJekM7SUFDRSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0FBRUE7QUFDQSxjQUFjLHlCQUF5QixFQUFFLGdCQUFnQjtBQUN6RCxXQUFXLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztBQUNoRSxlQUFlLDBCQUEwQjtBQUN6QyxlQUFlLGFBQWEsQ0FBQztBQUM3QiIsImZpbGUiOiJwb3J0YWRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZ1BvcnRhZGF7b2JqZWN0LWZpdDpjb3ZlcjsgbWFyZ2luLXRvcDo5MHB4fVxyXG4uc3VwZXJQb3NpY2lvbntiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjk5KTsgcG9zaXRpb246cmVsYXRpdmU7IGJvdHRvbTotMXB4OyAgbWFyZ2luLWxlZnQ6MHB4IWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OjBweCFpbXBvcnRhbnR9XHJcbi5jYXRlZ29yaWF7bGluZS1oZWlnaHQ6IDMwcHg7IG1hcmdpbi1ib3R0b206IC0uNXB4O31cclxuLnBpZVBvcnRhZGF7ZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBsZWZ0OyBtYXJnaW4tbGVmdDotNXB4OyBtYXJnaW4tdG9wOi0wcHggfVxyXG4udGV4dG9JY29ue2Rpc3BsYXk6ZmxleCA7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBtYXJnaW4tdG9wOi01cHg7IG1hcmdpbi1sZWZ0Oi0xMHB4OyBtYXJnaW4tcmlnaHQ6IDVweH1cclxuLnRleHRJY29uMntkaXNwbGF5OmZsZXggOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgbWFyZ2luLXRvcDotMTBweDsgbWFyZ2luLXJpZ2h0OiA1cHh9XHJcbi5mb250Q29sb3J7Zm9udC1zaXplOjE5cHg7IGNvbG9yOndoaXRlfVxyXG4uZmVjaGFTdHlsZXtmb250LXNpemU6MTFweDsgIG1hcmdpbi10b3A6LTNweDsgbWFyZ2luLWxlZnQ6IC0xMHB4OyAgY29sb3I6cmdiKDIxOSwgMjE5LCAyMTkpfVxyXG4udGl0dWxvRW5jaW1he1xyXG5cclxuICBtYXJnaW4tdG9wOjRweDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMHB4IDEwcHggcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4udGl0dWxvRW5jaW1hMntcclxuXHJcbiAgICAgIG1hcmdpbi10b3A6IDQ1MHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBjb2xvcjogcmdiKDIzOCwgOTgsIDk4KSA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1zaGFkb3c6IDFweCAwcHggMTBweCByZ2IoMCwgMCwgMCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuc29tYnJheyAtd2Via2l0LWJveC1zaGFkb3c6IDdweCAxMHB4IDE5cHggLTRweCByZ2JhKDAsMCwwLDAuNzUpOy1tb3otYm94LXNoYWRvdzogN3B4IDEwcHggMTlweCAtNHB4IHJnYmEoMCwwLDAsMC43NSk7Ym94LXNoYWRvdzogN3B4IDEwcHggMTlweCAtNHB4IHJnYmEoMCwwLDAsMC43NSk7ICB9XHJcblxyXG4gIC50aXR1bG9PdmVye21hcmdpbi1sZWZ0OjE1cHg7IG1hcmdpbi1yaWdodDoxNXB4fVxyXG5cclxuICAuc3VidGl0dWxve2NvbG9yOndoZWF0OyBmb250LXNpemU6IDE1cHg7IG1hcmdpbi10b3A6LTI1cHg7IH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgQG1lZGlhICAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAuY29ycmVjY2lvbjF7bWFyZ2luOiAwcHghaW1wb3J0YW50fVxyXG4gICAgICAuZnVlbnRlU3ViVGl0dWxve2ZvbnQtc2l6ZTogMTRweDt9XHJcbiAgICAgIC5jb3JyZUJvdHRvbXtib3R0b206MCFpbXBvcnRhbnR9XHJcbiAgICAgIC50aXR1bG9FbmNpbWEye21hcmdpbi10b3A6NDUzcHghaW1wb3J0YW50fVxyXG5cclxuICB9XHJcblxyXG5cclxuICAudGV4dDEge1xyXG5cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAuY29ycmVCb3R0b217Ym90dG9tOjEwcHghaW1wb3J0YW50fVxyXG4gIC5mdWVudGVTdWJUaXR1bG97bWFyZ2luLXRvcDotMjVweH1cclxuICAuZnVlbnRlVGl0dWxve2ZvbnQtc2l6ZTogMzBweDsgbWFyZ2luLXRvcDotMTBweH1cclxuICAvKiAuZnVlbnRlU3ViVGl0dWxve2Rpc3BsYXk6bm9uZX0gKi9cclxuICAucGFkZGluZ09mZntwYWRkaW5nOjBweCFpbXBvcnRhbnR9XHJcbiAgLmZ1ZW50ZVN1YlRpdHVsb3tmb250LXNpemU6IDEzcHg7IG1hcmdpbi10b3A6LTMycHh9XHJcbiAgLnRpdHVsb0VuY2ltYXtsaW5lLWhlaWdodDogMzBweCFpbXBvcnRhbnQ7fVxyXG4gIC50aXR1bG9FbmNpbWEye21hcmdpbi10b3A6NDUwcHghaW1wb3J0YW50fVxyXG4gIC50aXR1bG9FbmNpbWEye21hcmdpbi10b3A6NDU1cHghaW1wb3J0YW50fVxyXG5cclxuXHJcblxyXG4gIC50ZXh0MSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMzUwcHgpe1xyXG4uZnVlbnRlVGl0dWxve2ZvbnQtc2l6ZTogMjVweCFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6LTEwcHh9XHJcbi5zdWJ0aXR1bG97Zm9udC1zaXplOiAxMnB4OyBtYXJnaW4tdG9wOi0zNXB4OyBsaW5lLWhlaWdodDogMTNweDt9XHJcbi50aXR1bG9FbmNpbWEye21hcmdpbi10b3A6NDY0cHghaW1wb3J0YW50fVxyXG4ubG9nb011c2Vvc2V2YXtkaXNwbGF5OiBub25lO31cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "7ebX":
/*!**************************************!*\
  !*** ./src/app/pipes/filtro.pipe.ts ***!
  \**************************************/
/*! exports provided: FiltroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroPipe", function() { return FiltroPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FiltroPipe {
    transform(value = [], arg) {
        if (arg === '' || arg.length < 0)
            return value;
        const resultPost = [];
        var todo;
        for (const categoria of value) {
            var todo = categoria.imagen3 + categoria.categoria;
            if (todo.indexOf(arg) > -1) {
                resultPost.push(categoria);
            }
            ;
        }
        ;
        return resultPost;
    }
}
FiltroPipe.ɵfac = function FiltroPipe_Factory(t) { return new (t || FiltroPipe)(); };
FiltroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filtro", type: FiltroPipe, pure: true });


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

/***/ "BRH/":
/*!**********************************************************!*\
  !*** ./src/app/componentes/muestra/muestra.component.ts ***!
  \**********************************************************/
/*! exports provided: MuestraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuestraComponent", function() { return MuestraComponent; });
/* harmony import */ var _modelos_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modelos/productos */ "QhdB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function MuestraComponent_div_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MuestraComponent_div_14_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Museo de la Vida Rural");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MuestraComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MuestraComponent_div_14_mat_icon_1_Template, 2, 0, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MuestraComponent_div_14_h3_3_Template, 2, 0, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
} }
class MuestraComponent {
    constructor(ruta, crudService, location) {
        this.ruta = ruta;
        this.crudService = crudService;
        this.location = location;
        this.loading = true;
        this.nota = new _modelos_productos__WEBPACK_IMPORTED_MODULE_0__["Producto"]();
        this.ruta.params.subscribe(params => {
            params['_id'];
            this.crudService.getOneCard(params['_id'])
                .subscribe(res => {
                this.nota = res;
                this.loading = false;
            });
        });
    }
    ngOnInit() {
        window.scrollTo(-1000, -1000);
        window.scrollTo(0, 0);
    }
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
    cancel() {
        this.location.back(); // <-- go back to previous location on cancel
    }
    saltos(data) {
        return data.split("\n").join("<br />");
    }
    ;
}
MuestraComponent.ɵfac = function MuestraComponent_Factory(t) { return new (t || MuestraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
MuestraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MuestraComponent, selectors: [["app-muestra"]], decls: 141, vars: 1, consts: [[1, "margen", "arreglo", 2, "margin-top", "160px"], [1, "ajusteFoto", 2, "padding", "0px"], [1, "ml-2", "mr-2", "mt-2", 2, "border-left", "5px solid rgba(90, 9, 9, 0.575)", "background-color", "rgba(141, 141, 141, 0.055)"], [1, "ml-2"], [2, "color", "brown", "font-size", "12px"], [1, "titulo", "sombra1"], [1, "mt-2"], [2, "display", "flex", "justify-content", "left"], [2, "margin-top", "0px", "margin-right", "10px"], ["style", "display:flex ; align-items: flex-start; margin-top:-5px; margin-right: 5px", 4, "ngIf"], [1, "row", 2, "padding", "0px", "margin-right", "0px"], [1, "col-sm-12", "col-lg-6"], [1, "capital", 2, "margin-left", "15px", "font-size", "16px", "line-height", "25px"], [2, "margin-left", "15px", "font-size", "16px", "line-height", "25px"], [1, "col-sm-12", "col-lg-6", "cale", 2, "display", "none"], ["src", "../../../assets/banda.jpg", "width", "100%", "alt", "", 2, "height", "100vh", "object-fit", "cover", "margin-top", "-0px", "opacity", "0.5"], [2, "margin-left", "15px"], [2, "margin-top", "-10px"], [1, "row", 2, "margin", "0px", "padding", "0px"], [1, "col-sm-12", "col-xl-3"], ["href", "../../../assets/16.jpg", "target", "_blank"], ["src", "../../../assets/16.jpg", "width", "100%", "alt", "", 2, "height", "250px", "object-fit", "cover"], [1, "mt-1"], ["href", "../../../assets/15.jpg", "target", "_blank"], ["src", "../../../assets/15.jpg", "width", "100%", "alt", "", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/17.jpg", "target", "_blank"], ["src", "../../../assets/17.jpg", "width", "100%", "alt", "", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/18.jpg", "target", "_blank"], ["src", "../../../assets/18.jpg", "width", "100%", "alt", "", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/2.jpg", "target", "_blank"], ["src", "../../../assets/2.jpg", "width", "100%", "alt", "", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/21.jpg", "target", "_blank"], ["src", "../../../assets/21.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/3 (2).jpg", "target", "_blank"], ["src", "../../../assets/3 (2).jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px"], ["href", "../../../assets/4 (2).jpg", "target", "_blank"], ["src", "../../../assets/4 (2).jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/5 (2).jpg", "target", "_blank"], ["src", "../../../assets/5 (2) - copia.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/20.jpg", "target", "_blank"], ["src", "../../../assets/20.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/7 (2).jpg", "target", "_blank"], ["src", "../../../assets/7 (2).jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/8 (2).jpg", "target", "_blank"], ["src", "../../../assets/8 (2).jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/9.jpg", "target", "_blank"], ["src", "../../../assets/9.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/10.jpg", "target", "_blank"], ["src", "../../../assets/10.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/11.jpg", "target", "_blank"], ["src", "../../../assets/11.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/12.jpg", "target", "_blank"], ["src", "../../../assets/12.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/13.jpg", "target", "_blank"], ["src", "../../../assets/13.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/14.jpg", "target", "_blank"], ["src", "../../../assets/14.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/1 (1).jpg", "target", "_blank"], ["src", "../../../assets/1 (1).jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], ["href", "../../../assets/19.jpg", "target", "_blank"], ["src", "../../../assets/19.jpg", "width", "100%", "alt", "", "loading", "lazy", 2, "height", "250px", "object-fit", "cover"], [2, "display", "flex", "align-items", "flex-start", "margin-top", "-5px", "margin-right", "5px"], ["class", "mr-2", "style", "font-size:19px; color:gray", 4, "ngIf"], ["class", "subtituloResposive2", "style", "font-size:11px; margin-top:-3px; margin-left: -10px;  color:gray", 4, "ngIf"], [1, "mr-2", 2, "font-size", "19px", "color", "gray"], [1, "subtituloResposive2", 2, "font-size", "11px", "margin-top", "-3px", "margin-left", "-10px", "color", "gray"]], template: function MuestraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "#Muestra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "M\u00FAsica de Dionisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "del pueblo de Cdte. Nicanor Otamendi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MuestraComponent_div_14_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " La m\u00FAsica acompa\u00F1\u00F3 el nacimiento del pueblo de Comandante Nicanor Otamendi (\u201CDionisia\u201D) el 24 de febrero de 1911, d\u00EDa en que fue habilitada la estaci\u00F3n de ferrocarril \u201CDionisia\u201D del Ferrocarril Sud y empezaron a llegar los pioneros. No obstante, en los papeles, la fecha de fundaci\u00F3n oficial de la localidad es 29 de mayo de 1911, d\u00EDa que las autoridades provinciales aprobaron el proyecto de trazado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Los primeros datos conocidos hasta el momento sobre la m\u00FAsica local se remontan al \u201CCuadro Filodram\u00E1tico Almafuerte\u201D, creado hacia 1918. La compa\u00F1\u00EDa se presentaba en el primer teatro del pueblo, el \u201CExcelsior\u201D y actuaba con acompa\u00F1amiento de una orquesta en vivo integrada por Celina Mart\u00EDnez Castro de Gonz\u00E1lez, el constructor de carros Juan B. Tuquet, Juan B. Gonz\u00E1lez, Gino Boccanera y el ni\u00F1o Carlos Sap\u00EAre, hijo del primer farmac\u00E9utico del pueblo. Antes de 1920 el Cuadro compart\u00EDa escenario con la se\u00F1orita Dora Massone, que ejecutaba el himno nacional, seguramente en piano, y con Mar\u00EDa P. de Forcella (seguramente esposa del Ing. Adolfo Forcella, vecino del pueblo y autor del primer plano oficial del partido de General Alvarado) quien tocaba obras de piano con acompa\u00F1amiento coro. En esa misma \u00E9poca, en el sal\u00F3n del Club Cultural, Dolores M. de Vuotto interpretaba el himno nacional en el piano, y adem\u00E1s acompa\u00F1aba en piano sus mon\u00F3logos a la ni\u00F1a In\u00E9s Forcella. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " El primer intento serio de crear una banda de m\u00FAsica local pudo ser el proyecto del sastre Octavio Archiprete. No existen registros que indiquen que su iniciativa lleg\u00F3 a concretarse, pero avanz\u00F3 la suficiente como para que en 1927 se creara una partida para su sostenimiento. En 1929 Archiprete comenz\u00F3 a ense\u00F1ar m\u00FAsica a ni\u00F1os y adultos, y m\u00E1s tarde se sumaron Rub\u00E9n Efra\u00EDn D\u00EDaz, a mediados de los a\u00F1os 1940, y el \u201CConservatorio Musical Beethoven\u201D, dirigido por Velia M. Chiocchi, que ya exist\u00EDa en 1944. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " A partir de los a\u00F1os 1950 se abre una nueva etapa donde aparecen varios m\u00FAsicos profesionales y gran cantidad de aficionados/as, cuya lista completa desconocemos y esperamos nos ayuden a completar. Esta muestra es un primer paso en el camino de reconstruir la historia de la m\u00FAsica local. Las/los invitamos a disfrutar de la misma! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " (Fuente: Brittez, F. (2020). \u201CLos pagos de Dionisia\u201D. Ayacucho, Libros del Espinillo). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Galer\u00EDa de Im\u00E1genes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Mar\u00EDa Ulia Nerea Ojea de Guy\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Naci\u00F3 en 1910 y vivi\u00F3 en el campo y en Dionisia, la \u00FAltima parte de su vida. Siendo muy joven su padre le obsequi\u00F3 una guitarra de \u201Ccuerda de tripa\u201D que hab\u00EDa pertenecido al guitarrista y pe\u00F3n de estancia Ruperto T\u00E9vez. En la foto aparece con aquel antiguo instrumento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Mar\u00EDa del Pilar Sarasa de Falcone (\u201CTiti\u201D). Estudi\u00F3 piano con Raquel Francisca Figueroa (\u201CQuelo\u201D) y en Mar del Plata con Elsa Miolato, recibi\u00E9ndose de profesora en 1952. Vivi\u00F3 en el pueblo desde ni\u00F1a y ense\u00F1\u00F3 m\u00FAsica durante muchos a\u00F1os. Varias de sus estudiantes continuaron sus carreras pian\u00EDsticas en conservatorios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Marta Fern\u00E1ndez (piano) y Pilar Lagunas Gorr\u00EDa. Ambas pianistas y alumnas de la profesora Velia M. Chiochi (tomada en el D\u00EDa de la M\u00FAsica el 22 de noviembre de 1953, en Cine-teatro Dionisia).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Marta Fern\u00E1ndez (piano) y los gitanillos: Carmen Susana Lagunas Gorr\u00EDa, Mar\u00EDa Elena Boccanera, Norma Mabel Boccanera, Francisco N\u00E9stor Alberola (\u201CToto\u201D) y Rub\u00E9n Cano. A\u00F1os m\u00E1s tarde Mar\u00EDa Elena Boccanera (sentada) ser\u00EDa la primera profesora de m\u00FAsica del Jard\u00EDn de Infantes Santa Teresita (tomada en el D\u00EDa de la M\u00FAsica el 22 de noviembre de 1953, en Cine-teatro Dionisia). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u201COrquesta T\u00EDpica Sur\u201D, con Enrique Falcone en bandone\u00F3n (Mar del Plata, ca. 1950). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Antonio Falcone (bandone\u00F3n) y Juan Falcone (guitarra). (Dionisia) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u201COrquesta Continental\u201D, con Luis Mazarella, \u00C1ngel Gambina, Eduardo \u201CPetiso\u201D Boccanera, Mart\u00EDnez, Pascual De Rosa (Club C\u00EDrculo Deportivo, 1950). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u201COrquesta de Elio Paoloni\u201D, con Pascual De Rosa en acorde\u00F3n (Mar del Plata, Club Jara, 1950/1958). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Pascual De Rosa (\u201CPascualito\u201D) naci\u00F3 en Italia 1932 y lleg\u00F3 a Argentina en 1950. Dedic\u00F3 su vida entera a la m\u00FAsica, como docente y m\u00FAsico profesional. En la foto se lo ve con sus alumnos (izq. a der): Juan Carlos L\u00F3pez, Gina Blandino, H\u00E9ctor Vignolo, Pascual De Rosa, Aparicio, \u00BF?, Atairo (arriba), Urrutia, Oscar Parra, Tuf\u00ED, Duhalde, Rub\u00E9n Lima y Salvador Blandino (abajo). Pascual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "El cantautor Peppino di Capri (Giuseppe Faiella), una de las voces m\u00E1s populares de la canci\u00F3n napolitana y de la canci\u00F3n popular rom\u00E1ntica italiana. De visita a la familia De Rosa, en Dionisia, durante su gira por Argentina (1962). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Pascual De Rosa, con Pedro De Rosa, Jos\u00E9 Llona, Juan Vizcarra y H\u00E9ctor Vignolo (Club Juventud Unida de Bat\u00E1n, 1965) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Eduardo Pedro Boccanera (\u201CPetiso\u201D), en el patio de su casa. Hijo de una familia de m\u00FAsicos, fue integrante de la primera orquesta de Pascual De Rosa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Premiterio Cipriano Peralta (\u201CEl Gringo\u201D). Naci\u00F3 en Dionisia (Otamendi) en 1922. Su padre fue acordeonista y \u00E9l se dedic\u00F3 a la guitarra desde los diecisiete a\u00F1os. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Visita al pueblo de Juan Manuel Fangio. Con sus guitarras: Premiterio Cipriano Peralta (a la izq. con corbata, al lado de guitarrista desconocido) y Miguel D\u00EDaz (\u201CMiguelito\u201D) al centro, atr\u00E1s de Fangio (Dionisia, casa de Ferreira, 1961) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Manuel Delgadillo en el Cine-teatro Dionisia (Otamendi). Su padre era bandoneonista y \u00E9l descubri\u00F3 tempranamente su pasi\u00F3n por el instrumento. Toc\u00F3 de manera profesional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Abel Sierra (piano) y Manuel Delgadillo (Club C\u00EDrculo Deportivo) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Reuni\u00F3n familiar. Sentados, izq. a der.: Alfredo Carballo (bandone\u00F3n), Jos\u00E9 Bausela (guitarra) y Jos\u00E9 Mart\u00EDnez (bandone\u00F3n). Arriba: Ger\u00F3nimo Ripoll (guitarra) y Carlos L\u00F3pez (guitarra). Izquierda: Sr Ortega, de Necochea (cantando de pie). Derecha: Benito Bausela (cantando de pie) Familiares y amigos (Dionisia (Otamendi), quinta de Jos\u00E9 Bausela, 1963) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Reuni\u00F3n familiar. Al frente, de izq. a der.: Benito Bausela y Mario Carballo (bandone\u00F3n), Jos\u00E9 Mart\u00EDnez (guitarra). Segunda l\u00EDnea: Ger\u00F3nimo Ripoll y Ortega (guitarras). Familiares y amigos (Dionisia, quinta de Jos\u00E9 Bausela, 1963) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "\u201COrquesta T\u00EDpica Valentini\u201D, con Pascual De Rosa, Enrique Falcone y Salvador Falcone (Fiesta de casamiento de Miguel De Rosa y Ana Mar\u00EDa Falcone, (Club C\u00EDrculo Deportivo, 1985) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "\u201CYul\u00EDn\u201D, con la cantautora Marisa S\u00E1enz en la 28\u00BA Fiesta Provincial de la Papa. M\u00FAsico litorale\u00F1o famoso en el pueblo, que muri\u00F3 en Entre R\u00EDos con m\u00E1s 100 a\u00F1os de edad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nota.descripcion3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');\r\n\r\np[_ngcontent-%COMP%]{margin-bottom:20px}\r\n.blink_me[_ngcontent-%COMP%] {\r\n\r\n    animation: blinker 1.2s alternate-reverse;\r\n    animation-delay: -0.5s;\r\n  }\r\n@keyframes blinker {\r\n    90% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n@keyframes hideShow {\r\n    100%, 16.6%, 33.33%, 100% { width: 0; }\r\n    16.66%, 33.3% { width: auto; }\r\n  }\r\n.sombra1[_ngcontent-%COMP%]{\r\ntext-shadow: 1px 1px 1px rgb(221, 221, 221)\r\n}\r\n.capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n  float: right;\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 310%;\r\n  float: left;\r\n  margin-top: 10px;\r\n  margin-bottom: 0px;\r\n  margin-right: 10px;\r\n  line-height: 60%;\r\n  color:rgb(136, 136, 136)\r\n}\r\n.titulo[_ngcontent-%COMP%] {\r\n          display: -webkit-box;\r\n        -webkit-line-clamp: 3;\r\n        -webkit-box-orient: vertical;\r\n        overflow: hidden; }\r\n.text[_ngcontent-%COMP%] {\r\n\r\n        display: -webkit-box;\r\n        -webkit-line-clamp: 4;\r\n        -webkit-box-orient: vertical;\r\n        overflow: hidden;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto Condensed';\r\n    margin-bottom: 4px;\r\n    margin-top: -5px;\r\n    color: rgb(0, 0, 0);\r\nfont-size: 40px;\r\n\r\n\r\n    }\r\nh2[_ngcontent-%COMP%]{font-family: 'Roboto Condensed';\r\n    font-size:calc(0.9em + 0.3vw);\r\n    margin-top:calc(0.2em + 0.5vw);\r\n    line-height: calc(1.2em + 0.2vw);\r\n    color: rgb(70, 70, 70);\r\n}\r\n@media  (max-width: 900px)\r\n{\r\n\r\n.ajusteFontSub[_ngcontent-%COMP%]{font-size: 15px!important;}\r\n\r\n\r\n\r\n}\r\n@media  (min-width: 600px)\r\n    {\r\n      .cale[_ngcontent-%COMP%]{ display:block !important} ;\r\n    .ajustetop[_ngcontent-%COMP%]{margin-top:110px!important}\r\n.quitar600[_ngcontent-%COMP%]{display:none}\r\n.inter[_ngcontent-%COMP%]{ line-height: 50px !important} ;\r\n\r\n}\r\n@media  (max-width: 1200px)\r\n{\r\n\r\n.dale[_ngcontent-%COMP%]{ display:inline-block !important;}\r\n\r\n\r\n}\r\n@media  (max-width: 990px)\r\n{\r\n\r\n.ajusteFoto[_ngcontent-%COMP%]{ margin-top:110px!important};\r\n.ajusteFontSub[_ngcontent-%COMP%]{background-color: black;}\r\n\r\n\r\n}\r\n@media  (max-width: 600px)\r\n{\r\n\r\n\r\n  .arreglo[_ngcontent-%COMP%]{margin-top:125px!important;\r\n}\r\narreglo2[_ngcontent-%COMP%]{margin-bottom:-10px}\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11ZXN0cmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOEZBQThGO0FBQzlGLG1CQUFtQjtBQUVuQixFQUFFLGtCQUFrQjtBQUNwQjs7SUFFSSx5Q0FBeUM7SUFDekMsc0JBQXNCO0VBQ3hCO0FBR0E7SUFDRTtNQUNFLFVBQVU7SUFDWjtFQUNGO0FBQ0E7SUFDRSw0QkFBNEIsUUFBUSxFQUFFO0lBQ3RDLGdCQUFnQixXQUFXLEVBQUU7RUFDL0I7QUFDRjtBQUNBO0FBQ0E7QUFHQTs7RUFFRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCO0FBQ0Y7QUFFSTtVQUNNLG9CQUFvQjtRQUN0QixxQkFBcUI7UUFDckIsNEJBQTRCO1FBQzVCLGdCQUFnQixFQUFFO0FBRXRCOztRQUVJLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsNEJBQTRCO1FBQzVCLGdCQUFnQjtBQUN4QjtBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCLGVBQWU7OztJQUdYO0FBRUosR0FBRywrQkFBK0I7SUFDOUIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCO0FBRUE7O0FBRUEsNkNBQTZDO0FBQzdDLGVBQWUseUJBQXlCLENBQUM7Ozs7QUFJekM7QUFFSTs7TUFFRSxPQUFPLHdCQUF3QixFQUFBO0lBQ2pDLFdBQVcsMEJBQTBCO0FBQ3pDLFdBQVcsWUFBWTtBQUN2QixRQUFRLDRCQUE0QixFQUFBOztBQUVwQztBQUVJOzs7QUFHSixPQUFPLCtCQUErQixDQUFDOzs7QUFHdkM7QUFHQTs7QUFFQSw2Q0FBNkM7QUFDN0MsYUFBYSwwQkFBMEIsQ0FBQTtBQUN2QyxlQUFlLHVCQUF1QixDQUFDOzs7QUFHdkM7QUFFQTs7OztFQUlFLFNBQVMsMEJBQTBCO0FBQ3JDO0FBQ0EsU0FBUyxtQkFBbUI7OztBQUc1QiIsImZpbGUiOiJtdWVzdHJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLyogcmVzcG9uc2l2ZSB0ZXh0Ki9cclxuXHJcbnB7bWFyZ2luLWJvdHRvbToyMHB4fVxyXG4uYmxpbmtfbWUge1xyXG5cclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxLjJzIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICB9XHJcblxyXG5cclxuICBAa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgOTAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBoaWRlU2hvdyB7XHJcbiAgICAxMDAlLCAxNi42JSwgMzMuMzMlLCAxMDAlIHsgd2lkdGg6IDA7IH1cclxuICAgIDE2LjY2JSwgMzMuMyUgeyB3aWR0aDogYXV0bzsgfVxyXG4gIH1cclxuLnNvbWJyYTF7XHJcbnRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMjIxLCAyMjEsIDIyMSlcclxufVxyXG5cclxuXHJcbi5jYXBpdGFsOjpmaXJzdC1sZXR0ZXIge1xyXG5cclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBsaW5lLWhlaWdodDogNjAlO1xyXG4gIGNvbG9yOnJnYigxMzYsIDEzNiwgMTM2KVxyXG59XHJcblxyXG4gICAgLnRpdHVsbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XHJcblxyXG4gICAgLnRleHQge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbmZvbnQtc2l6ZTogNDBweDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuaDJ7Zm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJztcclxuICAgIGZvbnQtc2l6ZTpjYWxjKDAuOWVtICsgMC4zdncpO1xyXG4gICAgbWFyZ2luLXRvcDpjYWxjKDAuMmVtICsgMC41dncpO1xyXG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4yZW0gKyAwLjJ2dyk7XHJcbiAgICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xyXG59XHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDkwMHB4KVxyXG57XHJcbi8qIC5zb2xvcmVzeyB2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0gKi9cclxuLmFqdXN0ZUZvbnRTdWJ7Zm9udC1zaXplOiAxNXB4IWltcG9ydGFudDt9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiAgICBAbWVkaWEgIChtaW4td2lkdGg6IDYwMHB4KVxyXG4gICAge1xyXG4gICAgICAuY2FsZXsgZGlzcGxheTpibG9jayAhaW1wb3J0YW50fSA7XHJcbiAgICAuYWp1c3RldG9we21hcmdpbi10b3A6MTEwcHghaW1wb3J0YW50fVxyXG4ucXVpdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuLmludGVyeyBsaW5lLWhlaWdodDogNTBweCAhaW1wb3J0YW50fSA7XHJcblxyXG59XHJcblxyXG4gICAgQG1lZGlhICAobWF4LXdpZHRoOiAxMjAwcHgpXHJcbntcclxuXHJcbi5kYWxleyBkaXNwbGF5OmlubGluZS1ibG9jayAhaW1wb3J0YW50O31cclxuXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiA5OTBweClcclxue1xyXG4vKiAuc29sb3Jlc3sgdmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9ICovXHJcbi5hanVzdGVGb3RveyBtYXJnaW4tdG9wOjExMHB4IWltcG9ydGFudH07XHJcbi5hanVzdGVGb250U3Vie2JhY2tncm91bmQtY29sb3I6IGJsYWNrO31cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDYwMHB4KVxyXG57XHJcblxyXG5cclxuICAuYXJyZWdsb3ttYXJnaW4tdG9wOjEyNXB4IWltcG9ydGFudDtcclxufVxyXG5hcnJlZ2xvMnttYXJnaW4tYm90dG9tOi0xMHB4fVxyXG5cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Fzpo":
/*!******************************************************!*\
  !*** ./src/app/componentes/todos/todos.component.ts ***!
  \******************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _articulo_card_articulo_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../articulo-card/articulo-card.component */ "4CGP");
/* harmony import */ var _videos_card_videos_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../videos-card/videos-card.component */ "5TKp");
/* harmony import */ var _articulo_card_desktop_articulo_card_desktop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../articulo-card-desktop/articulo-card-desktop.component */ "eZ8n");
/* harmony import */ var _publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../publi-card/publi-card.component */ "vCn4");
/* harmony import */ var _publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../publi-card-mobile/publi-card-mobile.component */ "1kjM");
/* harmony import */ var _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/filtro.pipe */ "7ebX");











function TodosComponent_div_14_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-articulo-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", producto_r3);
} }
function TodosComponent_div_14_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-videos-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", producto_r3);
} }
function TodosComponent_div_14_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-articulo-card-desktop", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", producto_r3);
} }
function TodosComponent_div_14_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-videos-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", producto_r3);
} }
function TodosComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodosComponent_div_14_div_1_div_2_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodosComponent_div_14_div_1_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodosComponent_div_14_div_1_div_5_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodosComponent_div_14_div_1_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoria != "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoria === "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoria != "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoria === "Videos");
} }
function TodosComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodosComponent_div_14_div_1_Template, 7, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.productos.reverse(), ctx_r0.categoria));
} }
function TodosComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-publi-card-mobile", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", producto_r13);
} }
function TodosComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-publi-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodosComponent_div_15_div_5_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r1.productos, ctx_r1.categoria));
} }
class TodosComponent {
    constructor(crudService, ruta, location) {
        this.crudService = crudService;
        this.ruta = ruta;
        this.location = location;
        this.categoriaString = '';
        this.cambioPlantilla = true;
        this.loader = true;
        this.crudService.scrolled = false;
        window.scrollTo(0, 0);
    }
    ngOnInit() {
        this.ruta.params.subscribe(params => {
            this.categoria = params['categoria'];
            this.categoriaString = '';
            this.categoriaString = this.categoria;
            window.scrollTo(0, 0);
            console.log(this.categoria);
            if (this.categoria === "Articulos") {
                this.categoriaString = "Artículos - Novedades";
            }
            if (this.categoria === "Exposicion") {
                this.categoriaString = "Exposición de Objetos";
            }
            if (this.categoria === "Categoria") {
                this.categoria = 'Categoria';
                this.cambioPlantilla = false;
                this.categoriaString = 'Publicaciones en PDF';
                this.categoria = 'Categoria';
                console.log(this.cambioPlantilla);
                // window.location.reload();
            }
            else {
                this.cambioPlantilla = true;
            }
            if (this.categoria === "Publicaciones") {
                this.categoria = 'Categoria';
                this.cambioPlantilla = false;
                this.categoriaString = 'Publicaciones en PDF';
                this.categoria = 'Categoria';
                console.log(this.cambioPlantilla);
                // window.location.reload();
            }
            else {
                this.cambioPlantilla = true;
            }
        });
        this.pedirProductos();
    }
    ngDoCheck() {
        if (this.categoria === "Categoria") {
            this.categoria = 'Categoria';
            this.cambioPlantilla = false;
            this.categoriaString = 'Publicaciones en PDF';
            this.categoria = 'Categoria';
        }
        else {
            this.cambioPlantilla = true;
        }
    }
    pedirProductos() {
        this.productos = [] = [];
        this.crudService.getProductos().subscribe(res => {
            this.crudService.productos = res; // guardo resultados de la peticion en el servicio
            this.productos = res; // guardo resultados de la peticion en variable productos del este componente.
            this.loader = false;
            // if(this.categoria === "Articulos"){
            //   this.cantidad = this.filtro(this.productos, 'Articulos' )
            //   this.cantidad = this.cantidad.length
            //      }
            // if(this.categoria === "Exposicion"){
            //   this.cantidad = this.filtro(this.productos, 'Exposicion' )
            //   this.cantidad = this.cantidad.length}
        }); //fin de subscribe
        // falta agregar loading
    } //fin de pedirProductos
    filtro(value, arg) {
        const resultPost = [];
        var todo;
        for (const categoria of value) {
            var todo = categoria.imagen3 + categoria.categoria;
            if (todo.indexOf(arg) > -1) {
                resultPost.push(categoria);
                this.scrollTop();
            }
            ;
        }
        ;
        return resultPost;
    }
    evento($event) {
        if (window.pageYOffset > 310) {
            this.crudService.scrolled = true;
        }
        else {
            this.crudService.scrolled = false;
        }
    }
    ;
    scrollTop() {
        window.scrollTo(0, 0);
    }
    cancel() {
        this.crudService.loading = true;
        this.location.back(); // <-- go back to previous location on cancel
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosComponent, selectors: [["app-todos"]], hostBindings: function TodosComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TodosComponent_scroll_HostBindingHandler($event) { return ctx.categoria($event); });
    } }, decls: 16, vars: 3, consts: [[1, "mt-1", "divPrincipal", 3, "scroll"], [2, "margin-bottom", "10px", "background-color", "rgb(255, 255, 255)", "border-top", "1px solid gainsboro", "border-bottom", "1px solid gainsboro"], [1, "flex-container2"], [1, "flex-container"], [2, "margin-top", "5px", "margin-left", "20px"], [1, "categoriaString", 2, "color", "brown"], [3, "click"], [2, "margin-top", "5px", "margin-right", "20px"], [2, "background-color", "rgba(255, 255, 255, 0)", "margin-left", "15px", "margin-right", "15px"], ["class", "row", "style", "padding: 0px; padding-left: 0px; margin-right: 0px;", 4, "ngIf"], [4, "ngIf"], [1, "row", 2, "padding", "0px", "padding-left", "0px", "margin-right", "0px"], ["class", "col-sm-12 col-md-6 col-lg-3 col-xl- 3  ajusteResposive", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-3", "col-xl-", "3", "ajusteResposive"], [1, "ocultar600"], [1, "mostrar600"], [3, "data"], [1, "row", "pm0"], ["class", "pm0 col-sm-12 col-md-6 col-lg-3 col-xl-3 mostrar600", "style", "padding: 0px; padding-left:0px; margin-bottom:-0px", 4, "ngFor", "ngForOf"], [1, "pm0", "col-sm-12", "col-md-6", "col-lg-3", "col-xl-3", "mostrar600", 2, "padding", "0px", "padding-left", "0px", "margin-bottom", "-0px"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TodosComponent_Template_div_scroll_0_listener($event) { return ctx.evento($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosComponent_Template_a_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TodosComponent_div_14_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TodosComponent_div_15_Template, 7, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.categoriaString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cambioPlantilla);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cambioPlantilla);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _articulo_card_articulo_card_component__WEBPACK_IMPORTED_MODULE_5__["ArticuloCardComponent"], _videos_card_videos_card_component__WEBPACK_IMPORTED_MODULE_6__["VideosCardComponent"], _articulo_card_desktop_articulo_card_desktop_component__WEBPACK_IMPORTED_MODULE_7__["ArticuloCardDesktopComponent"], _publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_8__["PubliCardComponent"], _publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_9__["PubliCardMobileComponent"]], pipes: [_pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_10__["FiltroPipe"]], styles: [".mostrar600[_ngcontent-%COMP%]{display:none}\r\n.marginResposive[_ngcontent-%COMP%]{margin-top: 250px!important; height: 40vh;}\r\n.categoriaString[_ngcontent-%COMP%]{font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  font-size: 18px;\r\n  margin-left: 10px;\r\n  margin-bottom: 0px;\r\n  border-radius: 1px;\r\n  \r\n   margin-top:4px}\r\n.divPrincipal[_ngcontent-%COMP%]{margin-top:130px!important; width:100%; min-height: 120vh;\r\n  background-color: rgba(226, 226, 226, 0.24);\r\n}\r\n.ajusteResposive[_ngcontent-%COMP%]{\r\n  padding: 0px;margin-left:0px; padding-right: 0px; padding-left:10px ; margin-bottom:-70px!important\r\n}\r\na[_ngcontent-%COMP%]{cursor:pointer}\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-content: stretch;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(3) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-container2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    align-content: space-around;\r\n    align-items: flex-start;\r\n    }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n    order: 0;\r\n    flex: 0 1 auto;\r\n    align-self: auto;\r\n    }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n    order: 0;\r\n    flex: 0 1 auto;\r\n    align-self: auto;\r\n    }\r\n@media  (max-width: 620px){\r\n    .mostrar600[_ngcontent-%COMP%]{display:inline}\r\n    .ocultar600[_ngcontent-%COMP%]{display:none}\r\n    .ajusteResposive[_ngcontent-%COMP%]{  padding: 0px;margin-left:15px; padding-right: 0px; padding-left:0px ; margin-bottom:0px!important}\r\n    .divPrincipal[_ngcontent-%COMP%]{margin-top: 110px!important}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxZQUFZO0FBQ3hCLGlCQUFpQiwyQkFBMkIsRUFBRSxZQUFZLENBQUM7QUFDM0QsaUJBQWlCLDRDQUE0QztFQUMzRCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0NBQXdDO0dBQ3ZDLGNBQWM7QUFHakIsY0FBYywwQkFBMEIsRUFBRSxVQUFVLEVBQUUsaUJBQWlCO0VBQ3JFLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsWUFBWSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRTtBQUN4RTtBQUNBLEVBQUUsY0FBYztBQUVoQjtFQUlFLGFBQWE7RUFHYixtQkFBbUI7RUFHbkIsaUJBQWlCO0VBR2pCLDJCQUEyQjtFQUczQixzQkFBc0I7RUFDdEI7QUFFRjtFQUdFLFFBQVE7RUFHUixjQUFjO0VBR2QsZ0JBQWdCO0VBQ2hCO0FBRUY7RUFHRSxRQUFRO0VBR1IsY0FBYztFQUdkLGdCQUFnQjtFQUNoQjtBQUVGO0VBR0UsUUFBUTtFQUdSLGNBQWM7RUFHZCxnQkFBZ0I7RUFDaEI7QUFFQTtJQUdFLGFBQWE7SUFHYixtQkFBbUI7SUFHbkIsaUJBQWlCO0lBR2pCLDhCQUE4QjtJQUc5QiwyQkFBMkI7SUFHM0IsdUJBQXVCO0lBQ3ZCO0FBRUo7SUFHSSxRQUFRO0lBR1IsY0FBYztJQUdkLGdCQUFnQjtJQUNoQjtBQUVKO0lBR0ksUUFBUTtJQUdSLGNBQWM7SUFHZCxnQkFBZ0I7SUFDaEI7QUFHRjtJQUNFLFlBQVksY0FBYztJQUMxQixZQUFZLFlBQVk7SUFDeEIsbUJBQW1CLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSwyQkFBMkI7SUFDcEgsY0FBYywyQkFBMkI7RUFDM0MiLCJmaWxlIjoidG9kb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3N0cmFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuLm1hcmdpblJlc3Bvc2l2ZXttYXJnaW4tdG9wOiAyNTBweCFpbXBvcnRhbnQ7IGhlaWdodDogNDB2aDt9XHJcbi5jYXRlZ29yaWFTdHJpbmd7Zm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4ICMwMDAwMDA5MTsgKi9cclxuICAgbWFyZ2luLXRvcDo0cHh9XHJcblxyXG5cclxuLmRpdlByaW5jaXBhbHttYXJnaW4tdG9wOjEzMHB4IWltcG9ydGFudDsgd2lkdGg6MTAwJTsgbWluLWhlaWdodDogMTIwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDIyNiwgMjI2LCAwLjI0KTtcclxufVxyXG4uYWp1c3RlUmVzcG9zaXZle1xyXG4gIHBhZGRpbmc6IDBweDttYXJnaW4tbGVmdDowcHg7IHBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OjEwcHggOyBtYXJnaW4tYm90dG9tOi03MHB4IWltcG9ydGFudFxyXG59XHJcbmF7Y3Vyc29yOnBvaW50ZXJ9XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG5cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIH1cclxuXHJcbi5mbGV4LWl0ZW06bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xyXG4gIG9yZGVyOiAwO1xyXG4gIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG5cclxuLmZsZXgtaXRlbTpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtb3JkZXI6IDA7XHJcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgb3JkZXI6IDA7XHJcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcclxuICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC1vcmRlcjogMDtcclxuICAtbXMtZmxleC1vcmRlcjogMDtcclxuICBvcmRlcjogMDtcclxuICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XHJcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZsZXgtY29udGFpbmVyMiB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZGlzdHJpYnV0ZTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuXHJcbi5mbGV4LWl0ZW06bnRoLWNoaWxkKDEpIHtcclxuICAgIC13ZWJraXQtb3JkZXI6IDA7XHJcbiAgICAtbXMtZmxleC1vcmRlcjogMDtcclxuICAgIG9yZGVyOiAwO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcclxuICAgIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcclxuICAgIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gICAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgICBvcmRlcjogMDtcclxuICAgIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA2MjBweCl7XHJcbiAgICAubW9zdHJhcjYwMHtkaXNwbGF5OmlubGluZX1cclxuICAgIC5vY3VsdGFyNjAwe2Rpc3BsYXk6bm9uZX1cclxuICAgIC5hanVzdGVSZXNwb3NpdmV7ICBwYWRkaW5nOiAwcHg7bWFyZ2luLWxlZnQ6MTVweDsgcGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6MHB4IDsgbWFyZ2luLWJvdHRvbTowcHghaW1wb3J0YW50fVxyXG4gICAgLmRpdlByaW5jaXBhbHttYXJnaW4tdG9wOiAxMTBweCFpbXBvcnRhbnR9XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "GvZh":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/publicaciones/publicaciones.component.ts ***!
  \**********************************************************************/
/*! exports provided: PublicacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesComponent", function() { return PublicacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/filtro.pipe */ "7ebX");





function PublicacionesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PublicacionesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Resumen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicacionesComponent_div_6_Template_a_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const producto_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.agregarVista(producto_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Descargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://www.museodelavidarural.com/upload/", ctx_r1.cut(producto_r2.imagen4), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Imagen: ", producto_r2.imagen2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Por: ", producto_r2.imagen3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", producto_r2.descripcion1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 9, producto_r2.creado, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r2.imagen3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r2.vistas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://157.230.228.106:3000/upload/", ctx_r1.cut(producto_r2.imagen5), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PublicacionesComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.productos = [];
        this.loading = true;
        this.aux = 0;
        this.vacio = false;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.pedirProductos();
    }
    agregarVista(value) {
        this.crudService.unProducto = value;
        this.crudService.unProducto.vistas = Number(this.crudService.unProducto.vistas) + 1;
        console.log('dale', this.crudService.unProducto.vistas);
        if (value._id) {
            this.crudService.modificarProducto(this.crudService.unProducto)
                .subscribe(res => { });
        }
        else {
        }
    }
    ;
    pedirProductos() {
        this.crudService.getProductos().subscribe(res => {
            this.crudService.productos = res; // guardo resultados de la peticion en el servicio
            this.productos = res; // guardo resultados de la peticion en variable productos del este componente.
            this.loading = false;
        }); //fin de subscribe
        this.aux = Number(this.crudService.numeroPublicaciones(this.productos, 'Historia rural y de los pueblos'));
        if (this.aux === 0) {
            this.vacio = true;
        }
        else {
            this.vacio = false;
        }
        // falta agregar loading
    } //fin de pedirProductos
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
}
PublicacionesComponent.ɵfac = function PublicacionesComponent_Factory(t) { return new (t || PublicacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
PublicacionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicacionesComponent, selectors: [["app-publicaciones"]], decls: 8, vars: 5, consts: [[1, "margen", "mtCategoria", 2, "margin-top", "160px"], [2, "margin-left", "5px"], [2, "color", "brown"], [4, "ngIf"], ["style", "margin-top:-10px", 4, "ngFor", "ngForOf"], ["align", "center"], ["src", "../../../assets/loading4.gif", "width", "100px", "alt", ""], [2, "margin-top", "-10px"], [1, "row", 2, "margin", "5px", "padding", "0px"], [1, "col-sm-12", "col-lg-3", 2, "margin", "0px", "padding", "0px"], ["alt", "", 1, "sombra", "only1;", "mt-1", 2, "object-fit", "scale-down", "height", "250px", "margin-right", "10px", "padding", "0px", "width", "100%", 3, "src"], [1, "only1"], [1, "col-sm-12", "col-lg-8", 2, "margin-left", "12px", "padding", "0px"], [1, "text2", 2, "margin-bottom", "5px"], [2, "margin-top", "-5px"], [1, "text4", 2, "margin-top", "-5px"], [2, "display", "flex", "justify-content", "left"], [1, "aca", 2, "display", "flex", "align-items", "flex-start", "margin-top", "-5px", "margin-right", "5px", "margin-left", "-10px"], [1, "mr-corre", "mr-2", "ml-2", 2, "font-size", "19px", "color", "rgb(145,145,145)"], [1, "subtituloResposive2", 2, "font-size", "11px", "margin-top", "-3px", "margin-left", "-10px", "color", "rgb(145, 145, 145)"], [2, "margin-top", "0px", "margin-right", "10px"], [2, "display", "flex", "align-items", "flex-start", "margin-top", "-5px", "margin-right", "5px"], [1, "mr-2", 2, "font-size", "19px", "color", "gray"], ["target", "_blank", "download", "Archivo", 1, "mb-4", "btn", "btn-sm", "btn-danger", 2, "margin-top", "-10px", 3, "href", "click"]], template: function PublicacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "| Publicaciones | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Naturaleza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicacionesComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PublicacionesComponent_div_6_Template, 43, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, ctx.productos, "Naturaleza"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], pipes: [_pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".text4[_ngcontent-%COMP%]{\r\n\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden\r\n}\r\n\r\n\r\n.text3[_ngcontent-%COMP%]{\r\n\r\n\r\ndisplay: -webkit-box;\r\n-webkit-line-clamp: 3;\r\n-webkit-box-orient: vertical;\r\noverflow: hidden\r\n}\r\n\r\n\r\n@media  (max-width: 600px)\r\n{\r\n\r\n.mtCategoria[_ngcontent-%COMP%]{margin-top:130px!important;\r\n\r\n}\r\n\r\n}\r\n\r\n\r\n@media  (max-width: 993px)\r\n{\r\n\r\n.dale[_ngcontent-%COMP%]{ display:block !important; }\r\n\r\n}\r\n\r\n\r\n@media  (max-width: 991px)\r\n{\r\n\r\n.only1[_ngcontent-%COMP%]{ display:none !important}\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2FjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztFQUdFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCO0FBQ0Y7OztBQUdBOzs7QUFHQSxvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QjtBQUNBOzs7QUFFQTs7QUFFQSw2Q0FBNkM7QUFDN0MsYUFBYSwwQkFBMEI7O0FBRXZDOztBQUVBOzs7QUFHQTs7QUFFQSw2Q0FBNkM7QUFDN0MsT0FBTyx3QkFBd0IsRUFBRTs7QUFFakM7OztBQUlBOztBQUVBLDZDQUE2QztBQUM3QyxRQUFRLHVCQUF1Qjs7O0FBRy9CIiwiZmlsZSI6InB1YmxpY2FjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGV4dDR7XHJcblxyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcblxyXG4udGV4dDN7XHJcblxyXG5cclxuZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbi13ZWJraXQtbGluZS1jbGFtcDogMztcclxuLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxub3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDYwMHB4KVxyXG57XHJcbi8qIC5zb2xvcmVzeyB2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0gKi9cclxuLm10Q2F0ZWdvcmlhe21hcmdpbi10b3A6MTMwcHghaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogOTkzcHgpXHJcbntcclxuLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4uZGFsZXsgZGlzcGxheTpibG9jayAhaW1wb3J0YW50OyB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogOTkxcHgpXHJcbntcclxuLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4ub25seTF7IGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50fVxyXG5cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "H0w5":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/img-loader-ex/img-loader-ex.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImgLoaderExComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgLoaderExComponent", function() { return ImgLoaderExComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ImgLoaderExComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.loader, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1, a2) { return { visibility: a0, height: a1, width: a2 }; };
class ImgLoaderExComponent {
    constructor() {
        this.loader = '';
        this.height = 400;
        this.width = 100;
        this.image = '';
        this.imagenEstado = false;
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
        this.imagenEstado = true;
    }
}
ImgLoaderExComponent.ɵfac = function ImgLoaderExComponent_Factory(t) { return new (t || ImgLoaderExComponent)(); };
ImgLoaderExComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgLoaderExComponent, selectors: [["app-img-loader-ex"]], inputs: { loader: "loader", height: "height", width: "width", image: "image" }, decls: 3, vars: 8, consts: [[1, "loading"], [4, "ngIf"], [2, "object-fit", "cover", "margin-top", "10px", "width", "100%", 3, "hidden", "src", "ngStyle", "load"], [1, "text-center", 2, "margin", "10px auto 10px", "display", "block", 3, "src"]], template: function ImgLoaderExComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImgLoaderExComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImgLoaderExComponent_Template_img_load_2_listener() { return ctx.hideLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.imagenEstado)("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.isLoading ? "hidden" : "", ctx.height + "px", ctx.width + "%"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".loading[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1sb2FkZXItZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7O0VBRVgiLCJmaWxlIjoiaW1nLWxvYWRlci1leC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "J1/Y":
/*!************************************************************!*\
  !*** ./src/app/componentes/sinpubli/sinpubli.component.ts ***!
  \************************************************************/
/*! exports provided: SinpubliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinpubliComponent", function() { return SinpubliComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../publi-card/publi-card.component */ "vCn4");
/* harmony import */ var _publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../publi-card-mobile/publi-card-mobile.component */ "1kjM");
/* harmony import */ var _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/filtro.pipe */ "7ebX");








function SinpubliComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-publi-card-mobile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", producto_r1);
} }
class SinpubliComponent {
    constructor(crudService, ruta, location) {
        this.crudService = crudService;
        this.ruta = ruta;
        this.location = location;
        this.categoriaString = '';
        this.cambioPlantilla = true;
        this.loader = true;
        this.crudService.scrolled = false;
        window.scrollTo(0, 0);
    }
    ngOnInit() {
        this.pedirProductos();
    }
    pedirProductos() {
        this.productos = [] = [];
        this.crudService.getProductos().subscribe(res => {
            this.crudService.productos = res; // guardo resultados de la peticion en el servicio
            this.productos = res; // guardo resultados de la peticion en variable productos del este componente.
            this.loader = false;
            // if(this.categoria === "Articulos"){
            //   this.cantidad = this.filtro(this.productos, 'Articulos' )
            //   this.cantidad = this.cantidad.length
            //      }
            // if(this.categoria === "Exposicion"){
            //   this.cantidad = this.filtro(this.productos, 'Exposicion' )
            //   this.cantidad = this.cantidad.length}
        }); //fin de subscribe
        // falta agregar loading
    } //fin de pedirProductos
    filtro(value, arg) {
        const resultPost = [];
        var todo;
        for (const categoria of value) {
            var todo = categoria.imagen3 + categoria.categoria;
            if (todo.indexOf(arg) > -1) {
                resultPost.push(categoria);
                this.scrollTop();
            }
            ;
        }
        ;
        return resultPost;
    }
    evento($event) {
        if (window.pageYOffset > 310) {
            this.crudService.scrolled = true;
        }
        else {
            this.crudService.scrolled = false;
        }
    }
    ;
    scrollTop() {
        window.scrollTo(0, 0);
    }
    cancel() {
        this.crudService.loading = true;
        this.location.back(); // <-- go back to previous location on cancel
    }
}
SinpubliComponent.ɵfac = function SinpubliComponent_Factory(t) { return new (t || SinpubliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
SinpubliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SinpubliComponent, selectors: [["app-sinpubli"]], hostBindings: function SinpubliComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SinpubliComponent_scroll_HostBindingHandler($event) { return ctx.categoria($event); });
    } }, decls: 19, vars: 4, consts: [[1, "mt-1", "divPrincipal", 3, "scroll"], [2, "margin-bottom", "10px", "background-color", "rgb(255, 255, 255)", "border-top", "1px solid gainsboro", "border-bottom", "1px solid gainsboro"], [1, "flex-container2"], [1, "flex-container"], [2, "margin-top", "5px", "margin-left", "20px"], [1, "categoriaString", 2, "color", "brown"], [2, "margin-top", "5px", "margin-right", "20px", 3, "click"], [1, "ocultar600"], [1, "mostrar600"], [1, "row", "pm0"], ["class", "pm0 col-sm-12 col-md-6 col-lg-3 col-xl-3 mostrar600", "style", "padding: 0px; padding-left:0px; margin-bottom:-0px;\n      margin-left:10px; margin-right: 10px;", 4, "ngFor", "ngForOf"], [1, "pm0", "col-sm-12", "col-md-6", "col-lg-3", "col-xl-3", "mostrar600", 2, "padding", "0px", "padding-left", "0px", "margin-bottom", "-0px", "margin-left", "10px", "margin-right", "10px"], [3, "data"]], template: function SinpubliComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SinpubliComponent_Template_div_scroll_0_listener($event) { return ctx.evento($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Publicaciones PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SinpubliComponent_Template_mat_icon_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-publi-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SinpubliComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 1, ctx.productos, "Categoria"));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_5__["PubliCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_6__["PubliCardMobileComponent"]], pipes: [_pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroPipe"]], styles: [".mostrar600[_ngcontent-%COMP%]{display:none}\r\n.marginResposive[_ngcontent-%COMP%]{margin-top: 250px!important; height: 40vh;}\r\n.categoriaString[_ngcontent-%COMP%]{font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  font-size: 18px;\r\n  margin-left: 10px;\r\n  margin-bottom: 0px;\r\n  border-radius: 1px;\r\n  \r\n   margin-top:4px}\r\n.divPrincipal[_ngcontent-%COMP%]{margin-top:130px!important; width:100%; min-height: 120vh;\r\n  background-color: rgba(226, 226, 226, 0.24);\r\n}\r\n.ajusteResposive[_ngcontent-%COMP%]{\r\n  padding: 0px;margin-left:0px; padding-right: 0px; padding-left:10px ; margin-bottom:-70px!important\r\n}\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\r\n  align-content: stretch;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(3) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\r\n.flex-container2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    align-content: space-around;\r\n    align-items: flex-start;\r\n    }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n    order: 0;\r\n    flex: 0 1 auto;\r\n    align-self: auto;\r\n    }\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n    order: 0;\r\n    flex: 0 1 auto;\r\n    align-self: auto;\r\n    }\r\n@media  (max-width: 620px){\r\n    .mostrar600[_ngcontent-%COMP%]{display:inline}\r\n    .ocultar600[_ngcontent-%COMP%]{display:none}\r\n    .ajusteResposive[_ngcontent-%COMP%]{  padding: 0px;margin-left:15px; padding-right: 0px; padding-left:0px ; margin-bottom:0px!important}\r\n    .divPrincipal[_ngcontent-%COMP%]{margin-top: 110px!important}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbnB1YmxpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxZQUFZO0FBQ3hCLGlCQUFpQiwyQkFBMkIsRUFBRSxZQUFZLENBQUM7QUFDM0QsaUJBQWlCLDRDQUE0QztFQUMzRCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0NBQXdDO0dBQ3ZDLGNBQWM7QUFHakIsY0FBYywwQkFBMEIsRUFBRSxVQUFVLEVBQUUsaUJBQWlCO0VBQ3JFLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsWUFBWSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRTtBQUN4RTtBQUNBO0VBSUUsYUFBYTtFQUdiLG1CQUFtQjtFQUduQixpQkFBaUI7RUFHakIsMkJBQTJCO0VBRzNCLHNCQUFzQjtFQUN0QjtBQUVGO0VBR0UsUUFBUTtFQUdSLGNBQWM7RUFHZCxnQkFBZ0I7RUFDaEI7QUFFRjtFQUdFLFFBQVE7RUFHUixjQUFjO0VBR2QsZ0JBQWdCO0VBQ2hCO0FBRUY7RUFHRSxRQUFRO0VBR1IsY0FBYztFQUdkLGdCQUFnQjtFQUNoQjtBQUVBO0lBR0UsYUFBYTtJQUdiLG1CQUFtQjtJQUduQixpQkFBaUI7SUFHakIsOEJBQThCO0lBRzlCLDJCQUEyQjtJQUczQix1QkFBdUI7SUFDdkI7QUFFSjtJQUdJLFFBQVE7SUFHUixjQUFjO0lBR2QsZ0JBQWdCO0lBQ2hCO0FBRUo7SUFHSSxRQUFRO0lBR1IsY0FBYztJQUdkLGdCQUFnQjtJQUNoQjtBQUdGO0lBQ0UsWUFBWSxjQUFjO0lBQzFCLFlBQVksWUFBWTtJQUN4QixtQkFBbUIsWUFBWSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLDJCQUEyQjtJQUNwSCxjQUFjLDJCQUEyQjtFQUMzQyIsImZpbGUiOiJzaW5wdWJsaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vc3RyYXI2MDB7ZGlzcGxheTpub25lfVxyXG4ubWFyZ2luUmVzcG9zaXZle21hcmdpbi10b3A6IDI1MHB4IWltcG9ydGFudDsgaGVpZ2h0OiA0MHZoO31cclxuLmNhdGVnb3JpYVN0cmluZ3tmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAvKiB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggIzAwMDAwMDkxOyAqL1xyXG4gICBtYXJnaW4tdG9wOjRweH1cclxuXHJcblxyXG4uZGl2UHJpbmNpcGFse21hcmdpbi10b3A6MTMwcHghaW1wb3J0YW50OyB3aWR0aDoxMDAlOyBtaW4taGVpZ2h0OiAxMjB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjI2LCAyMjYsIDAuMjQpO1xyXG59XHJcbi5hanVzdGVSZXNwb3NpdmV7XHJcbiAgcGFkZGluZzogMHB4O21hcmdpbi1sZWZ0OjBweDsgcGFkZGluZy1yaWdodDogMHB4OyBwYWRkaW5nLWxlZnQ6MTBweCA7IG1hcmdpbi1ib3R0b206LTcwcHghaW1wb3J0YW50XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIHtcclxuXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC1vcmRlcjogMDtcclxuICAtbXMtZmxleC1vcmRlcjogMDtcclxuICBvcmRlcjogMDtcclxuICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XHJcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIH1cclxuXHJcbi5mbGV4LWl0ZW06bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xyXG4gIG9yZGVyOiAwO1xyXG4gIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG5cclxuLmZsZXgtaXRlbTpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtb3JkZXI6IDA7XHJcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgb3JkZXI6IDA7XHJcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcclxuICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xyXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICB9XHJcblxyXG4gIC5mbGV4LWNvbnRhaW5lcjIge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGRpc3RyaWJ1dGU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gICAgLW1zLWZsZXgtb3JkZXI6IDA7XHJcbiAgICBvcmRlcjogMDtcclxuICAgIC13ZWJraXQtZmxleDogMCAxIGF1dG87XHJcbiAgICAtbXMtZmxleDogMCAxIGF1dG87XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcclxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XHJcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuLmZsZXgtaXRlbTpudGgtY2hpbGQoMikge1xyXG4gICAgLXdlYmtpdC1vcmRlcjogMDtcclxuICAgIC1tcy1mbGV4LW9yZGVyOiAwO1xyXG4gICAgb3JkZXI6IDA7XHJcbiAgICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xyXG4gICAgLW1zLWZsZXg6IDAgMSBhdXRvO1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XHJcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogYXV0bztcclxuICAgIH1cclxuXHJcblxyXG4gIEBtZWRpYSAgKG1heC13aWR0aDogNjIwcHgpe1xyXG4gICAgLm1vc3RyYXI2MDB7ZGlzcGxheTppbmxpbmV9XHJcbiAgICAub2N1bHRhcjYwMHtkaXNwbGF5Om5vbmV9XHJcbiAgICAuYWp1c3RlUmVzcG9zaXZleyAgcGFkZGluZzogMHB4O21hcmdpbi1sZWZ0OjE1cHg7IHBhZGRpbmctcmlnaHQ6IDBweDsgcGFkZGluZy1sZWZ0OjBweCA7IG1hcmdpbi1ib3R0b206MHB4IWltcG9ydGFudH1cclxuICAgIC5kaXZQcmluY2lwYWx7bWFyZ2luLXRvcDogMTEwcHghaW1wb3J0YW50fVxyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ "JXp3":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/informacion-museo/informacion-museo.component.ts ***!
  \******************************************************************************/
/*! exports provided: InformacionMuseoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionMuseoComponent", function() { return InformacionMuseoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InformacionMuseoComponent {
    constructor() { }
    ngOnInit() {
    }
}
InformacionMuseoComponent.ɵfac = function InformacionMuseoComponent_Factory(t) { return new (t || InformacionMuseoComponent)(); };
InformacionMuseoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformacionMuseoComponent, selectors: [["app-informacion-museo"]], decls: 41, vars: 0, consts: [[1, "textSombra", "categoriaResposive", "mt-0", 2, "cursor", "pointer"], [2, "color", "brown"], [1, "mt-4"], [1, "row", 2, "margin", "0px", "padding", "0px", "margin-left", "-10px"], [1, "col-12"], [1, "material-icons", "quitar320", 2, "color", "brown", "float", "left", "font-size", "35px", "margin-right", "7px"], [2, "line-height", "20px"], ["href", "tel:+54 9 02291 48-0198"], [2, "line-height", "20px", "margin-top", "-1px"]], template: function InformacionMuseoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "| Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "location_on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Moreno N\u00B0 2277 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Comandante Nicanor Otamendi, Buenos Aires, Argentina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "query_builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " El museo se encuentra actualmente cerrado al p\u00FAblico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "accessible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Instalaciones con accesibilidad para personas con movilidad reducida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "museum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cel: +54 9 02291 48-0198 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "museodelavidarural.ga@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "record_voice_over");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Visita guiadas a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "instituciones educativas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 0223-154363479");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".categoriaResposive[_ngcontent-%COMP%]{\r\n  font-size: calc(1.5em + 0.2vw); color:rgb(0, 0, 0);\r\n font-family: 'Roboto Condensed';\r\n  letter-spacing: 0px;\r\n}\r\n\r\n  h4[_ngcontent-%COMP%]{font-size:13px}\r\n\r\n  .tituloResponsive[_ngcontent-%COMP%]{\r\n    text-shadow: 2px 2px 2px rgb(180, 180, 180);\r\n    font-size: calc(1.2em + 0.3vw);\r\n    font-family: 'Roboto Condensed';\r\n    margin-top:-20px;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden\r\n  }\r\n\r\n  .tituloResponsive2[_ngcontent-%COMP%]{\r\n\r\n    font-size: calc(1.2em + 0.3vw);\r\n    line-height: 25px;\r\n    margin-top:-10px;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden\r\n  }\r\n\r\n  .subtituloResposive[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n\r\n    font-size:12px;\r\n    margin-top: -16px;\r\n    line-height: 14px;\r\n\r\n\r\n\r\n  }\r\n\r\n  input[_ngcontent-%COMP%]{border-radius: 5px;\r\n\r\n\r\n\r\n\r\n  }\r\n\r\n  .subtituloResposive2[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    margin-top: -6px;\r\n    font-size:14px;\r\n    margin-top: -6px;\r\n    line-height: 18px;\r\n\r\n\r\n\r\n  }\r\n\r\n  .serie[_ngcontent-%COMP%]{\r\n    font-size:10px;\r\n    margin-top:-25px;}\r\n\r\n  .ColorFondo[_ngcontent-%COMP%]{\r\n      background-color:rgb(255, 255, 255); \r\n\r\n   }\r\n\r\n  #Ventana2[_ngcontent-%COMP%]{display:none}\r\n\r\n  .wanda[_ngcontent-%COMP%]{\r\n\r\n   font-size:70px;\r\n   background-color: red\r\n\r\n         }\r\n\r\n  .contenedor[_ngcontent-%COMP%]{\r\n       position: relative;\r\n       display: inline-block;\r\n       text-align: center;\r\n   }\r\n\r\n  .texto-encima[_ngcontent-%COMP%]{\r\n       position: absolute;\r\n       top: 10px;\r\n       left: 10px;\r\n   }\r\n\r\n  .text[_ngcontent-%COMP%] {\r\n\r\n           display: -webkit-box;\r\n           -webkit-line-clamp: 3;\r\n           -webkit-box-orient: vertical;\r\n           overflow: hidden}\r\n\r\n  .text2[_ngcontent-%COMP%] {\r\n\r\n            display: -webkit-box;\r\n            -webkit-line-clamp: 2;\r\n            -webkit-box-orient: vertical;\r\n            overflow: hidden}\r\n\r\n  .text3[_ngcontent-%COMP%] {\r\n\r\n              display: -webkit-box;\r\n              -webkit-line-clamp: 3;\r\n              -webkit-box-orient: vertical;\r\n\r\n              overflow: hidden}\r\n\r\n  img[_ngcontent-%COMP%]{border-radius: 3px;\r\n           object-fit: cover;\r\n\r\n       }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n           display: block;\r\n         }\r\n\r\n  .contenedorNavbar[_ngcontent-%COMP%] {\r\n   background-color: rgb(0, 0, 0);  \r\n   width: 100%;\r\n   height: 45px;\r\n   margin-top:-10px;\r\n   margin-bottom: -30px;\r\n                     }\r\n\r\n  \r\n\r\n  li[_ngcontent-%COMP%] {\r\n             display: inline;\r\n            }\r\n\r\n  .menuTexto[_ngcontent-%COMP%] {\r\n           font-family:'Roboto', sans-serif;\r\n           font-size: 13px;\r\n           letter-spacing: 2px;\r\n           text-decoration: none;\r\n           float: left;\r\n           padding: 10px;\r\n           color: rgb(107, 107, 107); \r\n           margin-top:3px;\r\n           margin-left:3px;\r\n                   }\r\n\r\n  .activo[_ngcontent-%COMP%]{\r\n                 color:rgb(255, 255, 255);  \r\n                }\r\n\r\n  .cartelCorona[_ngcontent-%COMP%]{opacity:0.9;\r\n       border-radius: 2%!important;\r\n       width: 18rem;\r\n       background-color: rgba(255, 255, 255, 0.856) ;\r\n       color:rgb(0, 0, 0) ;\r\n       margin-top:-380px;\r\n       margin-right: 5%;\r\n       float:right}\r\n\r\n  \r\n\r\n  \r\n\r\n  @media  (min-width: 330px)\r\n    {\r\n    \r\n    .imgfuera[_ngcontent-%COMP%]{ display:none !important;}\r\n    ;\r\n    }\r\n\r\n  @media (max-width: 750px)\r\n    {\r\n    \r\n    .ajusteCorona[_ngcontent-%COMP%]{float:none ; margin-left:auto; margin-right: auto; margin-bottom: 40px}\r\n    .dale[_ngcontent-%COMP%]{margin-top:50px;}\r\n\r\n\r\n    }\r\n\r\n  @media  (max-width: 990px)\r\n  {.correcionMT[_ngcontent-%COMP%]{ margin-top:-10px}\r\n  .dale2[_ngcontent-%COMP%]{ display:block !important; }\r\n  \r\n  .acomoda2[_ngcontent-%COMP%]{margin-top:-15px; font-size:12px; margin-right: 15px;}\r\n   .only[_ngcontent-%COMP%]{ display:none !important ; }\r\n   .onlyImg[_ngcontent-%COMP%]{ display:none; }\r\n   .acomoda[_ngcontent-%COMP%]{margin-top:20px;}\r\n  .borderRes[_ngcontent-%COMP%]{border-radius:0%!important}\r\n  .mt1[_ngcontent-%COMP%]{margin-top:20px}\r\n\r\n  .dale[_ngcontent-%COMP%]{ display:inline !important; }\r\n\r\n  .float[_ngcontent-%COMP%]{float:left; }\r\n\r\n  }\r\n\r\n  @media  (min-width: 420px)\r\n  {\r\n  \r\n  .only1[_ngcontent-%COMP%]{ display:none !important;}\r\n  ;\r\n  }\r\n\r\n  @media  (min-width: 750px)\r\n  {\r\n  \r\n  .acomode[_ngcontent-%COMP%]{margin-top:-45px}\r\n  ;\r\n  }\r\n\r\n  @media  (max-width: 990px)\r\n  {\r\n  \r\n  .ajusteFoto[_ngcontent-%COMP%]{margin-top:60px!important};\r\n\r\n\r\n  }\r\n\r\n  @media  (max-width: 335px)\r\n  {\r\n  \r\n  .quitar320[_ngcontent-%COMP%]{display: none!important}\r\n\r\n\r\n  }\r\n\r\n  @media  (max-width: 1200px)\r\n  {\r\n  \r\n  .quitarMargen[_ngcontent-%COMP%]{margin-left:10px; margin-right:10px}\r\n\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWFjaW9uLW11c2VvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEIsRUFBRSxrQkFBa0I7Q0FDbkQsK0JBQStCO0VBQzlCLG1CQUFtQjtBQUNyQjs7RUFFRSxHQUFHLGNBQWM7O0VBR2pCO0lBQ0UsMkNBQTJDO0lBQzNDLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCO0VBQ0Y7O0VBRUE7O0lBRUUsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUI7RUFDRjs7RUFHQTtJQUNFLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjs7SUFFaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7Ozs7RUFJbkI7O0VBRUEsTUFBTSxrQkFBa0I7Ozs7O0VBS3hCOztFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7OztFQUluQjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsQ0FBQzs7RUFHbkI7TUFDSSxtQ0FBbUMsRUFBRSxvQkFBb0I7O0dBRTVEOztFQUNBLFVBQVUsWUFBWTs7RUFFaEI7O0dBRU4sY0FBYztHQUNkOztTQUVNOztFQUdOO09BQ0ksa0JBQWtCO09BQ2xCLHFCQUFxQjtPQUNyQixrQkFBa0I7R0FDdEI7O0VBRUE7T0FDSSxrQkFBa0I7T0FDbEIsU0FBUztPQUNULFVBQVU7R0FDZDs7RUFHTTs7V0FFRSxvQkFBb0I7V0FDcEIscUJBQXFCO1dBQ3JCLDRCQUE0QjtXQUM1QixnQkFBZ0I7O0VBRWhCOztZQUVDLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsNEJBQTRCO1lBQzVCLGdCQUFnQjs7RUFDaEI7O2NBRUUsb0JBQW9CO2NBQ3BCLHFCQUFxQjtjQUNyQiw0QkFBNEI7O2NBRTVCLGdCQUFnQjs7RUFFckIsSUFBSSxrQkFBa0I7V0FDcEIsaUJBQWlCOztPQUVyQjs7RUFLRTtXQUNFLGNBQWM7U0FDaEI7O0VBRU47R0FDQSw4QkFBOEIsR0FBRyxxQkFBcUI7R0FDdEQsV0FBVztHQUNYLFlBQVk7R0FDWixnQkFBZ0I7R0FDaEIsb0JBQW9CO3FCQUNGOztFQUlsQix1QkFBdUI7O0VBQ2pCO2FBQ0ksZUFBZTtZQUNoQjs7RUFFVDtXQUNRLGdDQUFnQztXQUNoQyxlQUFlO1dBQ2YsbUJBQW1CO1dBQ25CLHFCQUFxQjtXQUNyQixXQUFXO1dBQ1gsYUFBYTtXQUNiLHlCQUF5QixFQUFFLGNBQWM7V0FDekMsY0FBYztXQUNkLGVBQWU7bUJBQ1A7O0VBR2hCO2lCQUNjLHdCQUF3QixHQUFHLHFCQUFxQjtnQkFDakQ7O0VBRWQsY0FBYyxXQUFXO09BQ3BCLDJCQUEyQjtPQUMzQixZQUFZO09BQ1osNkNBQTZDO09BQzdDLG1CQUFtQjtPQUNuQixpQkFBaUI7T0FDakIsZ0JBQWdCO09BQ2hCLFdBQVc7O0VBRVgsbUJBQW1COztFQUNuQjs7S0FFRjs7RUFDRDs7SUFFQSw2Q0FBNkM7SUFDN0MsV0FBVyx1QkFBdUIsQ0FBQztJQUFBO0lBRW5DOztFQUlBOztJQUVBLDZDQUE2QztJQUM3QyxjQUFjLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUI7SUFDcEYsTUFBTSxlQUFlLENBQUM7OztJQUd0Qjs7RUFHRjtHQUNDLGNBQWMsZ0JBQWdCO0VBQy9CLFFBQVEsd0JBQXdCLEVBQUU7RUFDbEMsNkNBQTZDO0VBQzdDLFVBQVUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDO0dBQzlELE9BQU8sd0JBQXdCLEVBQUU7R0FDakMsVUFBVSxZQUFZLEVBQUU7R0FDeEIsU0FBUyxlQUFlLENBQUM7RUFDMUIsV0FBVywwQkFBMEI7RUFDckMsS0FBSyxlQUFlOztFQUVwQixPQUFPLHlCQUF5QixFQUFFOztFQUVsQyxPQUFPLFVBQVUsRUFBRTs7RUFFbkI7O0VBS0E7O0VBRUEsNkNBQTZDO0VBQzdDLFFBQVEsdUJBQXVCLENBQUM7RUFBQTtFQUVoQzs7RUFFQTs7RUFFQSw2Q0FBNkM7RUFDN0MsU0FBUyxnQkFBZ0I7RUFBQTtFQUV6Qjs7RUFJQTs7RUFFQSw2Q0FBNkM7RUFDN0MsWUFBWSx5QkFBeUIsQ0FBQTs7O0VBR3JDOztFQUlBOztFQUVBLDZDQUE2QztFQUM3QyxXQUFXLHVCQUF1Qjs7O0VBR2xDOztFQUdBOztFQUVBLDZDQUE2QztFQUM3QyxjQUFjLGdCQUFnQixFQUFFLGlCQUFpQjs7O0VBR2pEIiwiZmlsZSI6ImluZm9ybWFjaW9uLW11c2VvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmlhUmVzcG9zaXZle1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxLjVlbSArIDAuMnZ3KTsgY29sb3I6cmdiKDAsIDAsIDApO1xyXG4gZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJztcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG59XHJcblxyXG4gIGg0e2ZvbnQtc2l6ZToxM3B4fVxyXG5cclxuXHJcbiAgLnRpdHVsb1Jlc3BvbnNpdmV7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuMmVtICsgMC4zdncpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJztcclxuICAgIG1hcmdpbi10b3A6LTIwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgfVxyXG5cclxuICAudGl0dWxvUmVzcG9uc2l2ZTJ7XHJcblxyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuMmVtICsgMC4zdncpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gIH1cclxuXHJcblxyXG4gIC5zdWJ0aXR1bG9SZXNwb3NpdmV7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGlucHV0e2JvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG4gIC5zdWJ0aXR1bG9SZXNwb3NpdmUye1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgLnNlcmlle1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOi0yNXB4O31cclxuXHJcblxyXG4gIC5Db2xvckZvbmRve1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTsgLypDb2xvciBmb25kbyBiYXJyYSovXHJcblxyXG4gICB9XHJcbiAgICNWZW50YW5hMntkaXNwbGF5Om5vbmV9XHJcblxyXG4gICAgICAgICAud2FuZGF7XHJcblxyXG4gICBmb250LXNpemU6NzBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXHJcblxyXG4gICAgICAgICB9XHJcblxyXG5cclxuICAgLmNvbnRlbmVkb3J7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuXHJcbiAgIC50ZXh0by1lbmNpbWF7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICB9XHJcblxyXG5cclxuICAgICAgICAgLnRleHQge1xyXG5cclxuICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVufVxyXG5cclxuICAgICAgICAgICAudGV4dDIge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbn1cclxuICAgICAgICAgICAgLnRleHQzIHtcclxuXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG4gICAgICAgICBpbWd7Ym9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgIC5jb250ZW5lZG9yTmF2YmFyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAgLypDb2xvciBGb25kbyBOYXZiYXIqL1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiA0NXB4O1xyXG4gICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAvKiBFc3RpbG9zIE1lbnUgTmF2YmFyKi9cclxuICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAubWVudVRleHRvIHtcclxuICAgICAgICAgICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICBjb2xvcjogcmdiKDEwNywgMTA3LCAxMDcpOyAvKkNvbG9yIHRleHRvKi9cclxuICAgICAgICAgICBtYXJnaW4tdG9wOjNweDtcclxuICAgICAgICAgICBtYXJnaW4tbGVmdDozcHg7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgLmFjdGl2b3tcclxuICAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7ICAvKkNvbG9yIHRleHRvLWFjdGl2byovXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gIC5jYXJ0ZWxDb3JvbmF7b3BhY2l0eTowLjk7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAyJSFpbXBvcnRhbnQ7XHJcbiAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KSA7XHJcbiAgICAgICBjb2xvcjpyZ2IoMCwgMCwgMCkgO1xyXG4gICAgICAgbWFyZ2luLXRvcDotMzgwcHg7XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgZmxvYXQ6cmlnaHR9XHJcblxyXG4gICAgICAgLyogRXN0YWRvIENhcnJpdG8gKi9cclxuICAgICAgIC8qIC5vcHQye2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NhcnJpdG9mYWxzZTEuanBnJyk7IHdpZHRoOiA1NXB4OyBoZWlnaHQ6IDMwcHg7fVxyXG4gICAgICAgLm9wdDF7YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvY2Fycml0b3RydWUyLmpwZycpOyAgd2lkdGg6IDU1cHg7IGhlaWdodDogMzBweDsgY29sb3I6cmdiKDI1NSwgMjAzLCAzMil9XHJcbiAgICAqL1xyXG4gICAgQG1lZGlhICAobWluLXdpZHRoOiAzMzBweClcclxuICAgIHtcclxuICAgIC8qIC5zb2xvcmVzeyB2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0gKi9cclxuICAgIC5pbWdmdWVyYXsgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fVxyXG4gICAgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KVxyXG4gICAge1xyXG4gICAgLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4gICAgLmFqdXN0ZUNvcm9uYXtmbG9hdDpub25lIDsgbWFyZ2luLWxlZnQ6YXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvOyBtYXJnaW4tYm90dG9tOiA0MHB4fVxyXG4gICAgLmRhbGV7bWFyZ2luLXRvcDo1MHB4O31cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA5OTBweClcclxuICB7LmNvcnJlY2lvbk1UeyBtYXJnaW4tdG9wOi0xMHB4fVxyXG4gIC5kYWxlMnsgZGlzcGxheTpibG9jayAhaW1wb3J0YW50OyB9XHJcbiAgLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4gIC5hY29tb2RhMnttYXJnaW4tdG9wOi0xNXB4OyBmb250LXNpemU6MTJweDsgbWFyZ2luLXJpZ2h0OiAxNXB4O31cclxuICAgLm9ubHl7IGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50IDsgfVxyXG4gICAub25seUltZ3sgZGlzcGxheTpub25lOyB9XHJcbiAgIC5hY29tb2Rhe21hcmdpbi10b3A6MjBweDt9XHJcbiAgLmJvcmRlclJlc3tib3JkZXItcmFkaXVzOjAlIWltcG9ydGFudH1cclxuICAubXQxe21hcmdpbi10b3A6MjBweH1cclxuXHJcbiAgLmRhbGV7IGRpc3BsYXk6aW5saW5lICFpbXBvcnRhbnQ7IH1cclxuXHJcbiAgLmZsb2F0e2Zsb2F0OmxlZnQ7IH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBAbWVkaWEgIChtaW4td2lkdGg6IDQyMHB4KVxyXG4gIHtcclxuICAvKiAuc29sb3Jlc3sgdmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9ICovXHJcbiAgLm9ubHkxeyBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XHJcbiAgO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICAobWluLXdpZHRoOiA3NTBweClcclxuICB7XHJcbiAgLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4gIC5hY29tb2Rle21hcmdpbi10b3A6LTQ1cHh9XHJcbiAgO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBAbWVkaWEgIChtYXgtd2lkdGg6IDk5MHB4KVxyXG4gIHtcclxuICAvKiAuc29sb3Jlc3sgdmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9ICovXHJcbiAgLmFqdXN0ZUZvdG97bWFyZ2luLXRvcDo2MHB4IWltcG9ydGFudH07XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiAzMzVweClcclxuICB7XHJcbiAgLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4gIC5xdWl0YXIzMjB7ZGlzcGxheTogbm9uZSFpbXBvcnRhbnR9XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgIChtYXgtd2lkdGg6IDEyMDBweClcclxuICB7XHJcbiAgLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4gIC5xdWl0YXJNYXJnZW57bWFyZ2luLWxlZnQ6MTBweDsgbWFyZ2luLXJpZ2h0OjEwcHh9XHJcblxyXG5cclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "NM3I":
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "page-footer", "margen", 2, "margin-top", "80px", "transition", "all 0.2s ease"], ["src", "../../../assets/imgfooter.jpg", "width", "100%", "alt", "", 2, "opacity", "0.6"], [1, "text-center", "mt-2", 2, "color", "rgb(168, 168, 168)"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 2020 | \u24C7 Museo de la vida Rural ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "OO/t":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/img-loader-sm/img-loader-sm.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImgLoaderSMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgLoaderSMComponent", function() { return ImgLoaderSMComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ImgLoaderSMComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.loader, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1, a2) { return { visibility: a0, height: a1, width: a2 }; };
class ImgLoaderSMComponent {
    constructor() {
        this.loader = '';
        this.height = 104;
        this.width = 100;
        this.image = '';
        this.imagenEstado = false;
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
        this.imagenEstado = true;
    }
}
ImgLoaderSMComponent.ɵfac = function ImgLoaderSMComponent_Factory(t) { return new (t || ImgLoaderSMComponent)(); };
ImgLoaderSMComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgLoaderSMComponent, selectors: [["app-img-loader-sm"]], inputs: { loader: "loader", height: "height", width: "width", image: "image" }, decls: 3, vars: 8, consts: [[4, "ngIf"], [2, "object-fit", "cover", "margin-top", "0px", 3, "hidden", "src", "ngStyle", "load"], [1, "text-center", 2, "width", "20%!important", "margin-left", "42%", "margin-top", "25%", "margin-bottom", "20%", 3, "src"]], template: function ImgLoaderSMComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImgLoaderSMComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImgLoaderSMComponent_Template_img_load_2_listener() { return ctx.hideLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.imagenEstado)("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.isLoading ? "hidden" : "", ctx.height + "px", ctx.width + "%"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".loading[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1sb2FkZXItc20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7O0VBRVgiLCJmaWxlIjoiaW1nLWxvYWRlci1zbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "QhdB":
/*!**************************************!*\
  !*** ./src/app/modelos/productos.ts ***!
  \**************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
class Producto {
    constructor(_id = '', subtitulo = '', titulo = '', imagen = '', imagen2 = '', imagen3 = '', imagen4 = '', imagen5 = '', description = '', description2 = '', description3 = 'a', description4 = '', description5 = '', creado = new Date(), vistas = 0, categoria = "") {
        this._id = _id;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.imagen1 = imagen;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
        this.imagen4 = imagen4;
        this.imagen5 = imagen5;
        this.descripcion1 = description;
        this.descripcion2 = description2;
        this.descripcion3 = description3;
        this.descripcion4 = description4;
        this.descripcion5 = description5;
        this.categoria = categoria;
        this.vistas = vistas;
        this.creado = creado;
    }
}


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ "/DBu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "NM3I");




class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "margenes", 2, "overflow", "hidden"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "T9WQ":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/laterl-articulo/laterl-articulo.component.ts ***!
  \**************************************************************************/
/*! exports provided: LaterlArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaterlArticuloComponent", function() { return LaterlArticuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LaterlArticuloComponent {
    constructor() {
        this.stringIM = '';
    }
    ngOnInit() {
        var _a;
        this.stringIM = (_a = this.data) === null || _a === void 0 ? void 0 : _a.imagen4.slice(8);
        this.stringIM = "https://www.museodelavidarural.com/upload/" + this.stringIM;
        console.log('asa', this.stringIM);
    }
}
LaterlArticuloComponent.ɵfac = function LaterlArticuloComponent_Factory(t) { return new (t || LaterlArticuloComponent)(); };
LaterlArticuloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaterlArticuloComponent, selectors: [["app-laterl-articulo"]], inputs: { data: "data" }, decls: 9, vars: 4, consts: [[2, "margin-top", "10px", "margin-left", "10px"], [1, "categoria"], [3, "routerLink"], [1, "titulo"], [1, "parrafo"]], template: function LaterlArticuloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.subtitulo);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');\r\n\r\n.categoria[_ngcontent-%COMP%]{font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  font-size: 15px ;\r\n }\r\n\r\n.titulo[_ngcontent-%COMP%]{\r\n  margin-top:-10px;\r\n  font-family: 'Bree Serif', serif;\r\n  color:brown;\r\n  font-size:20px;\r\n  line-height: 23px;\r\n  margin-left:5px;\r\n  margin-bottom:25px;\r\n\r\n}\r\n\r\n.subtitulo[_ngcontent-%COMP%]{font-size: 20px;\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;\r\n   line-height: 24px; margin-top:8px;\r\n    margin-bottom:20px;\r\n    margin-left:5px; margin-right:5px;\r\n    \r\n    color:brown;\r\n  }\r\n\r\n.parrafo[_ngcontent-%COMP%]{\r\n    margin-top:-20px;\r\n    margin-left:5px\r\n  }\r\n\r\n.imagen[_ngcontent-%COMP%]{ width:95%; height:180px; border-radius: 10px; margin-top:-10px}\r\n\r\n.categoria[_ngcontent-%COMP%]{margin-left:5px; color:black}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdGVybC1hcnRpY3Vsby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTs7QUFFL0UsV0FBVyw0Q0FBNEM7RUFDckQsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQjs7QUFFQSxXQUFXLGVBQWU7RUFDeEIsNENBQTRDO0dBQzNDLGlCQUFpQixFQUFFLGNBQWM7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBRSxnQkFBZ0I7O0lBRWpDLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQjtFQUNGOztBQUVBLFNBQVMsU0FBUyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0I7O0FBRXZFLFdBQVcsZUFBZSxFQUFFLFdBQVciLCJmaWxlIjoibGF0ZXJsLWFydGljdWxvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CcmVlK1NlcmlmJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmNhdGVnb3JpYXtmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHggO1xyXG4gfVxyXG5cclxuLnRpdHVsb3tcclxuICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQnJlZSBTZXJpZicsIHNlcmlmO1xyXG4gIGNvbG9yOmJyb3duO1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxuICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcblxyXG59XHJcblxyXG4uc3VidGl0dWxve2ZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcclxuICAgbGluZS1oZWlnaHQ6IDI0cHg7IG1hcmdpbi10b3A6OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4OyBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjpicm93bjtcclxuICB9XHJcblxyXG4gIC5wYXJyYWZve1xyXG4gICAgbWFyZ2luLXRvcDotMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjVweFxyXG4gIH1cclxuXHJcbiAgLmltYWdlbnsgd2lkdGg6OTUlOyBoZWlnaHQ6MTgwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IG1hcmdpbi10b3A6LTEwcHh9XHJcblxyXG4gIC5jYXRlZ29yaWF7bWFyZ2luLWxlZnQ6NXB4OyBjb2xvcjpibGFja31cclxuIl19 */"] });


/***/ }),

/***/ "TKYy":
/*!********************************************************************!*\
  !*** ./src/app/componentes/videos-todos/videos-todos.component.ts ***!
  \********************************************************************/
/*! exports provided: VideosTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosTodosComponent", function() { return VideosTodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/safe.pipe */ "YYwF");




class VideosTodosComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.stringIM = '';
    }
    ngOnInit() {
        var _a;
        this.stringIM = (_a = this.data) === null || _a === void 0 ? void 0 : _a.imagen4.slice(8);
        this.stringIM = "https://www.museodelavidarural.com/upload/" + this.stringIM;
        console.log('asa', this.stringIM);
    }
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
}
VideosTodosComponent.ɵfac = function VideosTodosComponent_Factory(t) { return new (t || VideosTodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
VideosTodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosTodosComponent, selectors: [["app-videos-todos"]], inputs: { data: "data" }, decls: 22, vars: 8, consts: [[1, "card", "sombraBox", 2, "padding", "10px", "background-color", "white", "margin-left", "10px", "margin-right", "15px", "margin-bottom", "10px!important"], [1, "card-content"], [1, "card-title"], [2, "font-size", "15px", "font-family", "'Yanone Kaffeesatz', sans-serif", "color", "brown"], [2, "margin-top", "-10px"], [3, "routerLink"], [1, "titulo", "text2"], [2, "margin-top", "-5px"], [1, ""], ["width", "100%", "height", "200", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], [1, "text3", 2, "margin-left", "4px", "margin-top", "10px", "line-height", "15px", 3, "innerHTML"], [1, "card-read-more", 2, "margin-top", "-10px"]], template: function VideosTodosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.data == null ? null : ctx.data.categoria, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.data == null ? null : ctx.data.imagen2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data == null ? null : ctx.data.descripcion1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]], styles: ["img[_ngcontent-%COMP%]{object-fit: cover; border-radius: 6px; height: 250px!important;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 150%;font-family: 'Yanone Kaffeesatz', sans-serif; line-height: 25px; letter-spacing: 0.2px;}\r\n.subtitulo[_ngcontent-%COMP%]{margin-top:5px; line-height:18px; font-size: 14px;}\r\na[_ngcontent-%COMP%]{color:rgb(0, 0, 0)}\r\n.text3[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n@media  (max-width: 1500px){\r\n  img[_ngcontent-%COMP%]{height: 180px!important;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 140%; line-height: 22px;}\r\n  }\r\n@media  (max-width: 1200px){\r\n    img[_ngcontent-%COMP%]{height: 150px!important;}\r\n\r\n    }\r\n@media  (max-width: 1000px){\r\n  img[_ngcontent-%COMP%]{height: 2z00px!important;}\r\n\r\n  }\r\n@media  (max-width: 770px){\r\n    img[_ngcontent-%COMP%]{height: 200px!important;}\r\n\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvcy10b2Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7QUFDbkUsUUFBUSxlQUFlLENBQUMsNENBQTRDLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLENBQUM7QUFDL0csV0FBVyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQzdELEVBQUUsa0JBQWtCO0FBRXBCOztFQUVFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixnQkFBZ0I7QUFJbEI7RUFDRSxJQUFJLHVCQUF1QixDQUFDO0FBQzlCLFFBQVEsZUFBZSxFQUFFLGlCQUFpQixDQUFDO0VBQ3pDO0FBRUE7SUFDRSxJQUFJLHVCQUF1QixDQUFDOztJQUU1QjtBQUVKO0VBQ0UsSUFBSSx3QkFBd0IsQ0FBQzs7RUFFN0I7QUFDQTtJQUNFLElBQUksdUJBQXVCLENBQUM7O0lBRTVCIiwiZmlsZSI6InZpZGVvcy10b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne29iamVjdC1maXQ6IGNvdmVyOyBib3JkZXItcmFkaXVzOiA2cHg7IGhlaWdodDogMjUwcHghaW1wb3J0YW50O31cclxuLnRpdHVsb3tmb250LXNpemU6IDE1MCU7Zm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7IGxpbmUtaGVpZ2h0OiAyNXB4OyBsZXR0ZXItc3BhY2luZzogMC4ycHg7fVxyXG4uc3VidGl0dWxve21hcmdpbi10b3A6NXB4OyBsaW5lLWhlaWdodDoxOHB4OyBmb250LXNpemU6IDE0cHg7fVxyXG5he2NvbG9yOnJnYigwLCAwLCAwKX1cclxuXHJcbi50ZXh0MyB7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDE1MDBweCl7XHJcbiAgaW1ne2hlaWdodDogMTgwcHghaW1wb3J0YW50O31cclxuLnRpdHVsb3tmb250LXNpemU6IDE0MCU7IGxpbmUtaGVpZ2h0OiAyMnB4O31cclxuICB9XHJcblxyXG4gIEBtZWRpYSAgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgIGltZ3toZWlnaHQ6IDE1MHB4IWltcG9ydGFudDt9XHJcblxyXG4gICAgfVxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gIGltZ3toZWlnaHQ6IDJ6MDBweCFpbXBvcnRhbnQ7fVxyXG5cclxuICB9XHJcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgICBpbWd7aGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7fVxyXG5cclxuICAgIH1cclxuIl19 */"] });


/***/ }),

/***/ "UmPh":
/*!**************************************************!*\
  !*** ./src/app/componentes/adm/adm.component.ts ***!
  \**************************************************/
/*! exports provided: AdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmComponent", function() { return AdmComponent; });
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../servicios/crud.service */ "e9dD");
/* harmony import */ var _modelos_productos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modelos/productos */ "QhdB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _buscador_buscador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buscador/buscador.component */ "mX5T");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _pipes_buscar_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/buscar.pipe */ "j2Af");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ "h/Hl");











function AdmComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdmComponent_app_buscador_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-buscador", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("buscar", function AdmComponent_app_buscador_5_Template_app_buscador_buscar_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.buscar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdmComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.cerrarForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdmComponent_table_8_tbody_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmComponent_table_8_tbody_12_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const publi_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.publiForm(publi_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmComponent_table_8_tbody_12_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const publi_r24 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.editar(publi_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publi_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](publi_r24.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 3, publi_r24.titulo, "50"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](publi_r24.vistas);
} }
function AdmComponent_table_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Titulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AdmComponent_table_8_tbody_12_Template, 16, 6, "tbody", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "buscar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 1, ctx_r3.productos, ctx_r3.filtro_valor));
} }
function AdmComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "T\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_57_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.crudService.unProducto.titulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.crudService.unProducto.titulo);
} }
function AdmComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Subtitulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_58_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.crudService.unProducto.subtitulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.crudService.unProducto.subtitulo);
} }
function AdmComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ckeditor", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_59_Template_ckeditor_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r36.crudService.unProducto.descripcion1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.crudService.unProducto.descripcion1);
} }
function AdmComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Abstrac");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "textarea", 66, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_60_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.crudService.unProducto.descripcion1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.crudService.unProducto.descripcion1);
} }
function AdmComponent_div_61_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdmComponent_div_61_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713 Archivo Subido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdmComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdmComponent_div_61_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmComponent_div_61_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.loading2 = true; })("click", function AdmComponent_div_61_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.onUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Subir");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdmComponent_div_61_div_7_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdmComponent_div_61_div_8_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.loading2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.loading3);
} }
function AdmComponent_div_62_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdmComponent_div_62_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713 Archivo Subido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdmComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdmComponent_div_62_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r50.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmComponent_div_62_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.loading4 = true; })("click", function AdmComponent_div_62_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r53.onUpload2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Subir");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdmComponent_div_62_div_7_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdmComponent_div_62_div_8_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.loading4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.loading5);
} }
function AdmComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Fuente Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_63_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r55.crudService.unProducto.imagen2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r13.crudService.unProducto.imagen2);
} }
function AdmComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Link relacionado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_64_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r58.crudService.unProducto.imagen1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r14.crudService.unProducto.imagen1);
} }
function AdmComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Autor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_65_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.crudService.unProducto.imagen3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r15.crudService.unProducto.imagen3);
} }
function AdmComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Fecha: Inicio/cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_66_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r64.crudService.unProducto.descripcion3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r16.crudService.unProducto.descripcion3);
} }
function AdmComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Horario inicio/cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_67_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r67.crudService.unProducto.descripcion4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r17.crudService.unProducto.descripcion4);
} }
function AdmComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Lugar / Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_68_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r70.crudService.unProducto.descripcion5 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r18.crudService.unProducto.descripcion5);
} }
class AdmComponent {
    constructor(crudService, location) {
        this.crudService = crudService;
        this.location = location;
        this.uploadedFiles = [];
        this.productos = [];
        this.loading = true;
        this.loading2 = false;
        this.loading3 = false;
        this.loading4 = false;
        this.loading5 = false;
        this.tituloShow = false;
        this.subtituloShow = false;
        this.textoShow = false;
        this.imagenShow = false;
        this.archivoShow = false;
        this.fuenteImagenShow = false;
        this.fuenteShow = false;
        this.autorShow = false;
        this.fechaShow = false;
        this.horaShow = false;
        this.lugarShow = false;
        this.abstractShow = false;
        this.filtro_valor = '';
        history.pushState(null, window.location.href);
        this.location.onPopState(() => {
            history.pushState(null, window.location.href);
        });
    }
    buscar(value) {
        this.filtro_valor = value;
    }
    ;
    ngOnInit() {
        window.scrollTo(0, 0);
        this.pedirProductos();
    }
    publiForm(publi) {
        this.publi2 = publi;
    }
    pedirProductos() {
        this.crudService.getProductos().subscribe(res => {
            this.crudService.productos = res; // guardo resultados de la peticion en el servicio
            this.productos = res; // guardo resultados de la peticion en variable productos del este componente.
            this.loading = false;
        }); //fin de subscribe
        // falta agregar loading
    } //fin de pedirProductos
    openEditor(value) {
        this.crudService.unProducto = new _modelos_productos__WEBPACK_IMPORTED_MODULE_1__["Producto"];
        this.crudService.unProducto.categoria = value;
        switch (value) {
            case 'Pueblos Originarios':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Exposición':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.textoShow = true;
                this.imagenShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Historia rural y de los pueblos':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.textoShow = true;
                this.imagenShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Historia Rural y de los pueblos':
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Misceláneas':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Historias de vida y migraciones':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Ruralidad':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Patrimonio Rural':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Reseñas':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Naturaleza':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Artículos':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.textoShow = true;
                this.imagenShow = true;
                this.fuenteImagenShow = true;
                this.fuenteShow = true;
                this.autorShow = true;
                break;
            case 'Categoria':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                break;
            case 'Consultas':
                this.cerrarForm();
                this.tituloShow = true;
                this.textoShow = true;
                break;
            case 'Videos':
                this.cerrarForm();
                this.tituloShow = true;
                this.textoShow = true;
                this.fuenteImagenShow = true;
                break;
            default:
                console.log("No such day exists!");
                break;
        }
    }
    editar(producto) {
        this.crudService.unProducto = producto;
        this.crudService.unProducto.categoria = producto.categoria;
        switch (producto.categoria) {
            case 'Pueblos Originarios':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Historia Rural y de los pueblos':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Historia de los pueblos':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Historias de vida y migraciones':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Ruralidad':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Patrimonio Rural':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Reseñas':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Naturaleza':
                this.cerrarForm();
                this.tituloShow = true;
                this.abstractShow = true;
                this.imagenShow = true;
                this.archivoShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Actividades':
                this.tituloShow = true;
                this.textoShow = true;
                this.imagenShow = true;
                this.fuenteImagenShow = true;
                this.fechaShow = true;
                this.horaShow = true;
                this.lugarShow = true;
                break;
            case 'Archivo':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.textoShow = true;
                this.imagenShow = true;
                this.fuenteImagenShow = true;
                this.fuenteShow = true;
                this.autorShow = true;
                break;
            case 'Exposición':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.textoShow = true;
                this.imagenShow = true;
                this.fuenteImagenShow = true;
                this.autorShow = true;
                break;
            case 'Artículos':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.textoShow = true;
                this.imagenShow = true;
                this.fuenteImagenShow = true;
                this.fuenteShow = true;
                this.autorShow = true;
                break;
            case 'Categoria':
                this.cerrarForm();
                this.tituloShow = true;
                this.subtituloShow = true;
                this.archivoShow = true;
                this.imagenShow = true;
                this.imagenShow = true;
                break;
            case 'Consultas':
                this.cerrarForm();
                this.tituloShow = true;
                this.textoShow = true;
                break;
            case 'Videos':
                this.cerrarForm();
                this.tituloShow = true;
                this.textoShow = true;
                this.fuenteImagenShow = true;
                break;
            default:
                console.log("No such day exists!");
                break;
        }
        // this.crudService.unProducto= producto
    }
    ;
    cerrarForm() {
        this.tituloShow = false;
        this.subtituloShow = false;
        this.textoShow = false;
        this.imagenShow = false;
        this.archivoShow = false;
        this.fuenteImagenShow = false;
        this.fuenteShow = false;
        this.autorShow = false;
        this.fechaShow = false;
        this.horaShow = false;
        this.lugarShow = false;
        this.abstractShow = false;
    }
    agregarPublicacion() {
        if (this.crudService.unProducto._id) {
            this.crudService.modificarProducto(this.crudService.unProducto)
                .subscribe(res => {
                this.crudService.unProducto = new _modelos_productos__WEBPACK_IMPORTED_MODULE_1__["Producto"];
                this.crudService.snack('Modificado!');
            });
        }
        else {
            this.crudService.addProducto(this.crudService.unProducto).subscribe(res => {
                console.log(res);
                this.crudService.unProducto = new _modelos_productos__WEBPACK_IMPORTED_MODULE_1__["Producto"];
            });
            this.pedirProductos();
            this.crudService.snack('Guardado!');
            this.pedirProductos();
        }
    }
    ;
    resetForm(form) {
        form.reset();
    }
    ;
    onUpload() {
        let formData = new FormData();
        for (let i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        this.crudService.uploadFile(formData).subscribe(res => {
            var ass = String(res);
            this.crudService.unProducto.imagen4 = ass;
            console.log(ass);
            this.loading2 = false;
            this.loading3 = true;
        });
    }
    ;
    onUpload2() {
        let formData = new FormData();
        for (let i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        this.crudService.uploadFile(formData).subscribe(res => {
            var ass = String(res);
            this.crudService.unProducto.imagen5 = ass;
            this.loading4 = false;
            this.loading5 = true;
        });
    }
    ;
    onFileChange(e) {
        this.uploadedFiles = e.target.files;
    }
    ;
    borrarProducto(producto) {
        console.log(producto._id);
        this.crudService.deleteProducto(producto._id).subscribe(res => console.log(res));
        this.crudService.snack('Eliminado!');
        this.pedirProductos();
    }
    ;
}
AdmComponent.ɵfac = function AdmComponent_Factory(t) { return new (t || AdmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"])); };
AdmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdmComponent, selectors: [["app-adm"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_servicios_crud_service__WEBPACK_IMPORTED_MODULE_0__["CrudService"]])], decls: 92, vars: 18, consts: [[2, "margin-top", "calc(6em + 4vw)", "margin-left", "calc(-2em + 8vw)", "margin-right", "calc(-2em + 8vw)"], [2, "margin-right", "7px", "margin-left", "7px"], ["class", "mtSeries", 4, "ngIf"], ["style", "margin-top:5px;", 3, "buscar", 4, "ngIf"], [2, "float", "right", "margin-top", "15px", "margin-right", "5px"], ["class", "btn btn-sm btn-danger mt-1", "style", "outline:none!important;  ", "data-toggle", "modal", "data-target", "#exampleModal", "data-whatever", "@getbootstrap", 3, "click", 4, "ngIf"], ["class", "table table-sm table-bordered", "style", "margin-top:-10px", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", 2, "margin", "0px", "padding", "0px!important", "color", "brown"], ["type", "button", "data-dismiss", "modal", "aria-label", "closed", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["Form", "ngForm"], [2, "margin-bottom", "-4px"], ["id", "categoria", "type", "text", "name", "categoria", "placeholder", "Categorias", 1, "form-control", 2, "margin-top", "5px", "width", "100%", 3, "ngModel", "change", "ngModelChange"], ["categoria", "ngModel"], ["value", "Naturaleza"], ["value", "Pueblos Originarios"], ["value", "Historia Rural y de los pueblos"], ["value", "Historias de vida y migraciones"], ["value", "Patrimonio Rural"], ["value", "Ruralidad"], ["value", "Miscel\u00E1neas"], ["value", "Rese\u00F1as"], ["value", "Art\u00EDculos"], ["value", "Videos"], ["value", "Categoria"], ["value", "Exposici\u00F3n"], ["value", "Consultas"], ["type", "hidden", "name", "id", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "ngModel"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["id", "exampleModal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel1", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exampleModalLabel1", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "mtSeries"], ["align", "center", 2, "margin", "0px"], ["src", "../../../assets/loading4.gif", "width", "100px", "alt", ""], [2, "margin-top", "5px", 3, "buscar"], ["data-toggle", "modal", "data-target", "#exampleModal", "data-whatever", "@getbootstrap", 1, "btn", "btn-sm", "btn-danger", "mt-1", 2, "outline", "none!important", 3, "click"], [1, "table", "table-sm", "table-bordered", 2, "margin-top", "-10px"], [2, "background-color", "gray", "color", "floralwhite"], ["scope", "col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "text-center"], [3, "click"], ["data-toggle", "modal", "data-target", "#exampleModal1", 1, "mr-2", "material-icons", 2, "cursor", "pointer", "font-size", "calc(1.5em + 0.7vw)", "color", "brown"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "material-icons", 2, "cursor", "pointer", "font-size", "calc(1.5em + 0.7vw)", "color", "rgb(15, 167, 1)"], [2, "margin-top", "10px"], [2, "margin-bottom", "-2px"], ["name", "titulo", "type", "text", "autocomplete", "off", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["titulo", "ngModel"], ["name", "subtitulo", "type", "text", "autocomplete", "off", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["subtitulo", "ngModel"], [2, "margin-top", "5px"], ["rows", "5", "name", "descripcion1", "placeholder", "Parrafo", 3, "ngModel", "ngModelChange"], ["description", "ngModel", "description1", "ngModel"], ["rows", "5", "aria-label", "With textarea", "autocomplete", "off", "name", "descripcion1", "placeholder", "Parrafo", 1, "form-control", 2, "margin-top", "25px", "margin-top", "-5px", 3, "ngModel", "ngModelChange"], [2, "margin-top", "20px"], ["type", "file", 2, "width", "260px", "overflow", "none", 3, "change"], [1, "btn-sm", "btn", "btn-dark", "btn-upload", "ml-2", 3, "click"], ["src", "../../../assets/loading4.gif", "width", "50px", "alt", ""], [2, "color", "green"], [2, "margin-top", "0px"], ["type", "file", 2, "width", "260px", 3, "change"], ["src", "../../../assets/loading4.gif", "alt", "", "width", "50px"], ["name", "imagen2", "type", "text", "autocomplete", "off", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["imagen2", "ngModel"], ["name", "imagen1", "type", "text", "autocomplete", "off", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["imagen1", "ngModel"], ["name", "imagen3", "type", "text", "autocomplete", "off", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["imagen4", "ngModel"], ["name", "descripcion3", "autocomplete", "off", "type", "text", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["descripcion3", "ngModel"], ["name", "descripcion4", "autocomplete", "off", "type", "text", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["descripcion4", "ngModel"], ["name", "descripcion5", "autocomplete", "off", "type", "text", "aria-describedby", "TextoHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["descripcion5", "ngModel"]], template: function AdmComponent_Template(rf, ctx) { if (rf & 1) {
        const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdmComponent_div_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AdmComponent_app_buscador_5_Template, 1, 0, "app-buscador", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdmComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdmComponent_table_8_Template, 14, 4, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Nueva publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "form", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Seleccione la categor\u00EDa de su publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdmComponent_Template_select_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r72); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27); return ctx.openEditor(_r5.value); })("ngModelChange", function AdmComponent_Template_select_ngModelChange_26_listener($event) { return ctx.crudService.unProducto.categoria = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Serie Naturaleza y ambiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Serie Pueblos orginarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Serie Historia Rural y de los pueblos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Serie Historia de vida y migraciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Serie Patrimonio Rural");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Serie Ruralidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Serie Miscel\u00E1neas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Serie Rese\u00F1as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Articulos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Sala de exposicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Consultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdmComponent_Template_input_ngModelChange_55_listener($event) { return ctx.crudService.unProducto._id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, AdmComponent_div_57_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, AdmComponent_div_58_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, AdmComponent_div_59_Template, 7, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, AdmComponent_div_60_Template, 7, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, AdmComponent_div_61_Template, 9, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, AdmComponent_div_62_Template, 9, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, AdmComponent_div_63_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, AdmComponent_div_64_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, AdmComponent_div_65_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, AdmComponent_div_66_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, AdmComponent_div_67_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, AdmComponent_div_68_Template, 6, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmComponent_Template_button_click_72_listener() { return ctx.agregarPublicacion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Eliminar publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\u00BFEsta completamente seguro que desea eliminar \u00E9sta publicaci\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmComponent_Template_button_click_89_listener() { return ctx.borrarProducto(ctx.publi2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.crudService.unProducto.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.crudService.unProducto._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tituloShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.subtituloShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.textoShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.abstractShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.archivoShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fuenteImagenShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fuenteShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.autorShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fechaShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.horaShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lugarShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _buscador_buscador_component__WEBPACK_IMPORTED_MODULE_5__["BuscadorComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorComponent"]], pipes: [_pipes_buscar_pipe__WEBPACK_IMPORTED_MODULE_8__["BuscarPipe"], _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__["TruncatePipe"]], styles: ["input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {border-radius: 5px;\r\n  background-color: #eee;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 12px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n\r\n\r\n}\r\n\r\nthead[_ngcontent-%COMP%]{background-color: rgb(156, 78, 78); color:floralwhite}\r\n\r\nspan[_ngcontent-%COMP%]{cursor:pointer; font-size:calc(1.5em + 0.7vw); color:rgb(11, 128, 0)}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]{width: 100%; margin-top:13px}\r\n\r\n.menuTexto[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  float: left;\r\n  padding: 10px;\r\n  color: rgb(0, 0, 0); \r\n  margin-top:10px;\r\n  margin-left:3px;\r\n          }  ;\r\n\r\na[_ngcontent-%COMP%]:hover{cursor:pointer}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden}\r\n\r\n@media  (max-width: 600px)\r\n{\r\n.mtSeries[_ngcontent-%COMP%]{margin-top:100px!important}\r\n};\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QixrQkFBa0I7RUFDekMsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7OztBQUdyQjs7QUFFQSxNQUFNLGtDQUFrQyxFQUFFLGlCQUFpQjs7QUFDM0QsS0FBSyxjQUFjLEVBQUUsNkJBQTZCLEVBQUUscUJBQXFCOztBQUN6RSxnQkFBZ0IsV0FBVyxFQUFFLGVBQWU7O0FBRTVDO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CLEVBQUUsY0FBYztFQUNuQyxlQUFlO0VBQ2YsZUFBZTtVQUNQLEdBQUE7O0FBQ1YsUUFBUSxjQUFjOztBQUV0Qjs7RUFFRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7O0FBR2xCOztBQUVBLFVBQVUsMEJBQTBCO0FBQ3BDIiwiZmlsZSI6ImFkbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge2JvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbnRoZWFke2JhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDc4LCA3OCk7IGNvbG9yOmZsb3JhbHdoaXRlfVxyXG5zcGFue2N1cnNvcjpwb2ludGVyOyBmb250LXNpemU6Y2FsYygxLjVlbSArIDAuN3Z3KTsgY29sb3I6cmdiKDExLCAxMjgsIDApfVxyXG4ubWF0LWZvcm0tZmllbGR7d2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6MTNweH1cclxuXHJcbi5tZW51VGV4dG8ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qQ29sb3IgdGV4dG8qL1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxuICBtYXJnaW4tbGVmdDozcHg7XHJcbiAgICAgICAgICB9ICA7XHJcbmE6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9XHJcblxyXG4udGV4dCB7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiA2MDBweClcclxue1xyXG4ubXRTZXJpZXN7bWFyZ2luLXRvcDoxMDBweCFpbXBvcnRhbnR9XHJcbn07XHJcbiJdfQ== */"] });


/***/ }),

/***/ "YYwF":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ "/DBu");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "4oof");
/* harmony import */ var _componentes_articulo_card_articulo_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/articulo-card/articulo-card.component */ "4CGP");
/* harmony import */ var _componentes_publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/publi-card/publi-card.component */ "vCn4");
/* harmony import */ var _componentes_videos_card_videos_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/videos-card/videos-card.component */ "5TKp");
/* harmony import */ var _componentes_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/info-card/info-card.component */ "eGhk");
/* harmony import */ var _componentes_todos_todos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/todos/todos.component */ "Fzpo");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "NM3I");
/* harmony import */ var _componentes_portada_portada_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/portada/portada.component */ "5tja");
/* harmony import */ var _componentes_museo_museo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/museo/museo.component */ "gbJf");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/filtro.pipe */ "7ebX");
/* harmony import */ var _pipes_filtrox4_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/filtrox4.pipe */ "vEVZ");
/* harmony import */ var _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/articulo/articulo.component */ "gAua");
/* harmony import */ var _componentes_laterl_articulo_laterl_articulo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/laterl-articulo/laterl-articulo.component */ "T9WQ");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/safe.pipe */ "YYwF");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "h/Hl");
/* harmony import */ var _componentes_articulo_card_desktop_articulo_card_desktop_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/articulo-card-desktop/articulo-card-desktop.component */ "eZ8n");
/* harmony import */ var _componentes_publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/publi-card-mobile/publi-card-mobile.component */ "1kjM");
/* harmony import */ var _componentes_muestra_muestra_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/muestra/muestra.component */ "BRH/");
/* harmony import */ var _componentes_informacion_museo_informacion_museo_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./componentes/informacion-museo/informacion-museo.component */ "JXp3");
/* harmony import */ var _componentes_videos_todos_videos_todos_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/videos-todos/videos-todos.component */ "TKYy");
/* harmony import */ var _componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./componentes/adm/adm.component */ "UmPh");
/* harmony import */ var _componentes_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/buscador/buscador.component */ "mX5T");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _pipes_buscar_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/buscar.pipe */ "j2Af");
/* harmony import */ var _componentes_publicaciones_publicaciones_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./componentes/publicaciones/publicaciones.component */ "GvZh");
/* harmony import */ var _componentes_sinpubli_sinpubli_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./componentes/sinpubli/sinpubli.component */ "J1/Y");
/* harmony import */ var _componentes_img_loader_img_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./componentes/img-loader/img-loader.component */ "nG6N");
/* harmony import */ var _componentes_img_loader_xl_img_loader_xl_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./componentes/img-loader-xl/img-loader-xl.component */ "gmHm");
/* harmony import */ var _componentes_img_loader_sm_img_loader_sm_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./componentes/img-loader-sm/img-loader-sm.component */ "OO/t");
/* harmony import */ var _componentes_img_loader_ex_img_loader_ex_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./componentes/img-loader-ex/img-loader-ex.component */ "H0w5");
/* harmony import */ var _componentes_cate_publi_mobile_cate_publi_mobile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./componentes/cate-publi-mobile/cate-publi-mobile.component */ "lZaO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/core */ "fXoL");



//MATERIAL












































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({ providers: [_app_servicios_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__["PrincipalComponent"],
        _componentes_articulo_card_articulo_card_component__WEBPACK_IMPORTED_MODULE_14__["ArticuloCardComponent"],
        _componentes_publi_card_publi_card_component__WEBPACK_IMPORTED_MODULE_15__["PubliCardComponent"],
        _componentes_videos_card_videos_card_component__WEBPACK_IMPORTED_MODULE_16__["VideosCardComponent"],
        _componentes_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_17__["InfoCardComponent"],
        _componentes_todos_todos_component__WEBPACK_IMPORTED_MODULE_18__["TodosComponent"],
        _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _componentes_portada_portada_component__WEBPACK_IMPORTED_MODULE_20__["PortadaComponent"],
        _componentes_museo_museo_component__WEBPACK_IMPORTED_MODULE_21__["MuseoComponent"],
        _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_23__["FiltroPipe"],
        _pipes_filtrox4_pipe__WEBPACK_IMPORTED_MODULE_24__["Filtrox4Pipe"],
        _componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_25__["ArticuloComponent"],
        _componentes_laterl_articulo_laterl_articulo_component__WEBPACK_IMPORTED_MODULE_26__["LaterlArticuloComponent"],
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_27__["SafePipe"],
        _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__["TruncatePipe"],
        _componentes_articulo_card_desktop_articulo_card_desktop_component__WEBPACK_IMPORTED_MODULE_29__["ArticuloCardDesktopComponent"],
        _componentes_publi_card_mobile_publi_card_mobile_component__WEBPACK_IMPORTED_MODULE_30__["PubliCardMobileComponent"],
        _componentes_muestra_muestra_component__WEBPACK_IMPORTED_MODULE_31__["MuestraComponent"],
        _componentes_informacion_museo_informacion_museo_component__WEBPACK_IMPORTED_MODULE_32__["InformacionMuseoComponent"],
        _componentes_videos_todos_videos_todos_component__WEBPACK_IMPORTED_MODULE_33__["VideosTodosComponent"],
        _componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_34__["AdmComponent"],
        _componentes_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_35__["BuscadorComponent"],
        _pipes_buscar_pipe__WEBPACK_IMPORTED_MODULE_37__["BuscarPipe"],
        _componentes_publicaciones_publicaciones_component__WEBPACK_IMPORTED_MODULE_38__["PublicacionesComponent"],
        _componentes_sinpubli_sinpubli_component__WEBPACK_IMPORTED_MODULE_39__["SinpubliComponent"],
        _componentes_img_loader_img_loader_component__WEBPACK_IMPORTED_MODULE_40__["ImgLoaderComponent"],
        _componentes_img_loader_xl_img_loader_xl_component__WEBPACK_IMPORTED_MODULE_41__["ImgLoaderXLComponent"],
        _componentes_img_loader_sm_img_loader_sm_component__WEBPACK_IMPORTED_MODULE_42__["ImgLoaderSMComponent"],
        _componentes_img_loader_ex_img_loader_ex_component__WEBPACK_IMPORTED_MODULE_43__["ImgLoaderExComponent"],
        _componentes_cate_publi_mobile_cate_publi_mobile_component__WEBPACK_IMPORTED_MODULE_44__["CatePubliMobileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"],
        ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]] }); })();


/***/ }),

/***/ "e9dD":
/*!*******************************************!*\
  !*** ./src/app/servicios/crud.service.ts ***!
  \*******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modelos_productos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelos/productos */ "QhdB");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class CrudService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.URL_API = "https://www.museodelavidarural.com/productos";
        this.$loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.productos = [];
        this.loading = true;
        this.scroll = false;
        this.unProducto = new _modelos_productos__WEBPACK_IMPORTED_MODULE_1__["Producto"]();
    }
    getProductos() {
        // var precio:number = Number(this.pedido.precio)    no se pa que funciona
        return this.http.get(this.URL_API);
    }
    ;
    getOneCard(_id) {
        return this.http.get(this.URL_API + `/${_id}`);
    }
    addProducto(productos) {
        return this.http.post(this.URL_API, productos);
    }
    ;
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
    modificarProducto(productos) {
        return this.http.put(this.URL_API + `/${productos._id}`, productos);
    }
    ;
    deleteProducto(_id) {
        return this.http.delete(this.URL_API + `/${_id}`);
    }
    ;
    uploadFile(formData) {
        return this.http.post('/upload', formData);
    }
    snack(value) {
        this.snackBar.open(value, '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'bottom', panelClass: ['blue-snackbar'] });
    }
    numeroPublicaciones(value = [], arg) {
        if (arg === '' || arg.length < 0)
            return value;
        const resultPost = [];
        var todo;
        for (const categoria of value) {
            var todo = categoria.imagen3 + categoria.categoria;
            if (todo.indexOf(arg) > -1) {
                resultPost.push(categoria);
            }
            ;
        }
        ;
        this.productos = resultPost;
        return resultPost.length;
    }
    ;
    fechaPipe(value) {
        let requerido = moment__WEBPACK_IMPORTED_MODULE_2__(value);
        let creacion = moment__WEBPACK_IMPORTED_MODULE_2__();
        let dias = creacion.diff(requerido, 'minutes');
        if (dias > 59) {
            let requerido = moment__WEBPACK_IMPORTED_MODULE_2__(value);
            let creacion = moment__WEBPACK_IMPORTED_MODULE_2__();
            let dias = creacion.diff(requerido, 'hours');
            if (dias > 24) {
                let requerido = moment__WEBPACK_IMPORTED_MODULE_2__(value);
                let creacion = moment__WEBPACK_IMPORTED_MODULE_2__();
                let dias = creacion.diff(requerido, 'days');
                return dias + 'd';
            }
            return dias + 'h';
        }
        return dias + 'm';
    }
    inicioBarra() {
        window.scroll(0, 0);
        this.scrolled = false;
    }
} //FIN DE CLASE GENERAL
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eGhk":
/*!**************************************************************!*\
  !*** ./src/app/componentes/info-card/info-card.component.ts ***!
  \**************************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InfoCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoCardComponent.ɵfac = function InfoCardComponent_Factory(t) { return new (t || InfoCardComponent)(); };
InfoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoCardComponent, selectors: [["app-info-card"]], decls: 2, vars: 0, template: function InfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "info-card works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "eZ8n":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/articulo-card-desktop/articulo-card-desktop.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ArticuloCardDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticuloCardDesktopComponent", function() { return ArticuloCardDesktopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _img_loader_sm_img_loader_sm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img-loader-sm/img-loader-sm.component */ "OO/t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ArticuloCardDesktopComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.subtitulo);
} }
function ArticuloCardDesktopComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data == null ? null : ctx_r1.data.descripcion1);
} }
class ArticuloCardDesktopComponent {
    constructor() {
        this.stringIM = '';
    }
    ngOnInit() {
        var _a;
        this.stringIM = (_a = this.data) === null || _a === void 0 ? void 0 : _a.imagen4.slice(8);
        this.stringIM = "https://www.museodelavidarural.com/upload/" + this.stringIM;
    }
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
}
ArticuloCardDesktopComponent.ɵfac = function ArticuloCardDesktopComponent_Factory(t) { return new (t || ArticuloCardDesktopComponent)(); };
ArticuloCardDesktopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticuloCardDesktopComponent, selectors: [["app-articulo-card-desktop"]], inputs: { data: "data" }, decls: 23, vars: 7, consts: [[1, "card", "sombraBox", "as", 2, "padding", "10px", "padding-bottom", "0px", "background-color", "white", "margin-bottom", "-80px"], [1, "row", "pm0"], [1, "col-4", "pm0"], [3, "routerLink"], ["loader", "../../../assets/loading.gif", 3, "image"], [1, "col-8", "pm0", 2, "padding-left", "10px!important"], [1, "card-content"], [1, "card-title"], [1, "cate", 2, "font-size", "15px", "font-family", "'Yanone Kaffeesatz', sans-serif", "color", "brown", "margin-left", "3px"], [2, "margin-top", "-10px"], [1, "titulo", "text1"], ["class", "text1 subtitulo", 4, "ngIf"], ["class", "text2 subtitulo", 4, "ngIf"], [1, ""], [1, "card-read-more", 2, "margin-top", "10px"], [1, "text1", "subtitulo"], [1, "text2", "subtitulo"]], template: function ArticuloCardDesktopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-img-loader-sm", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ArticuloCardDesktopComponent_small_14_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ArticuloCardDesktopComponent_small_15_Template, 2, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("image", "", ctx.stringIM, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.data == null ? null : ctx.data.categoria, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../articulos/", ctx.data == null ? null : ctx.data._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.subtitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.data == null ? null : ctx.data.subtitulo));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _img_loader_sm_img_loader_sm_component__WEBPACK_IMPORTED_MODULE_2__["ImgLoaderSMComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["img[_ngcontent-%COMP%]{object-fit: cover; border-radius: 3px; height: 110px!important; margin:0px; padding: 0px;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 160%;font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  line-height: 25px; letter-spacing: 0.2px;margin-left:5px;\r\nmargin-top:-15px}\r\n.subtitulo[_ngcontent-%COMP%]{margin-left:4px; margin-top:-10px; line-height:16px; font-size:11px }\r\na[_ngcontent-%COMP%]{color:rgb(0, 0, 0)}\r\n.as[_ngcontent-%COMP%]:active{opacity: 0.5; }\r\n.text2[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n.pm0[_ngcontent-%COMP%]{padding: 0px; margin:0px;}\r\n.text1[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n@media  (max-width: 1500px){\r\n.titulo[_ngcontent-%COMP%]{font-size: 135%; line-height: 19px;}\r\n.subtitulo[_ngcontent-%COMP%]{font-size: 12px; line-height: 15px;}\r\n  }\r\n@media  (max-width: 600px){\r\n   .cate[_ngcontent-%COMP%]{font-size:12px!important;}\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljdWxvLWNhcmQtZGVza3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQztBQUM3RixRQUFRLGVBQWUsQ0FBQyw0Q0FBNEM7RUFDbEUsaUJBQWlCLEVBQUUscUJBQXFCLENBQUMsZUFBZTtBQUMxRCxnQkFBZ0I7QUFDaEIsV0FBVyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZTtBQUMvRSxFQUFFLGtCQUFrQjtBQUVwQixXQUFXLFlBQVksRUFBRTtBQUV6Qjs7RUFFRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0Qjs7RUFFNUIsZ0JBQWdCO0FBRWxCLEtBQUssWUFBWSxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7RUFFRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0Qjs7RUFFNUIsZ0JBQWdCO0FBSWxCO0FBQ0EsUUFBUSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7QUFDM0MsV0FBVyxlQUFlLEVBQUUsaUJBQWlCLENBQUM7RUFDNUM7QUFHQTtHQUNDLE1BQU0sd0JBQXdCLENBQUM7TUFDNUIiLCJmaWxlIjoiYXJ0aWN1bG8tY2FyZC1kZXNrdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7b2JqZWN0LWZpdDogY292ZXI7IGJvcmRlci1yYWRpdXM6IDNweDsgaGVpZ2h0OiAxMTBweCFpbXBvcnRhbnQ7IG1hcmdpbjowcHg7IHBhZGRpbmc6IDBweDt9XHJcbi50aXR1bG97Zm9udC1zaXplOiAxNjAlO2ZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4OyBsZXR0ZXItc3BhY2luZzogMC4ycHg7bWFyZ2luLWxlZnQ6NXB4O1xyXG5tYXJnaW4tdG9wOi0xNXB4fVxyXG4uc3VidGl0dWxve21hcmdpbi1sZWZ0OjRweDsgbWFyZ2luLXRvcDotMTBweDsgbGluZS1oZWlnaHQ6MTZweDsgZm9udC1zaXplOjExcHggfVxyXG5he2NvbG9yOnJnYigwLCAwLCAwKX1cclxuXHJcbi5hczphY3RpdmV7b3BhY2l0eTogMC41OyB9XHJcblxyXG4udGV4dDIge1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbn1cclxuXHJcbi5wbTB7cGFkZGluZzogMHB4OyBtYXJnaW46MHB4O31cclxuLnRleHQxIHtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMTUwMHB4KXtcclxuLnRpdHVsb3tmb250LXNpemU6IDEzNSU7IGxpbmUtaGVpZ2h0OiAxOXB4O31cclxuLnN1YnRpdHVsb3tmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxNXB4O31cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgLmNhdGV7Zm9udC1zaXplOjEycHghaW1wb3J0YW50O31cclxuICAgICAgfVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "gAua":
/*!************************************************************!*\
  !*** ./src/app/componentes/articulo/articulo.component.ts ***!
  \************************************************************/
/*! exports provided: ArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticuloComponent", function() { return ArticuloComponent; });
/* harmony import */ var _modelos_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modelos/productos */ "QhdB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/crud.service */ "e9dD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _img_loader_xl_img_loader_xl_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img-loader-xl/img-loader-xl.component */ "gmHm");
/* harmony import */ var _laterl_articulo_laterl_articulo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../laterl-articulo/laterl-articulo.component */ "T9WQ");
/* harmony import */ var _pipes_filtrox4_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/filtrox4.pipe */ "vEVZ");
/* harmony import */ var _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/filtro.pipe */ "7ebX");









function ArticuloComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticuloComponent_div_2_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx_r2.nota.categoria, "");
} }
function ArticuloComponent_div_2_div_11_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Imagen: ", ctx_r10.nota.imagen2, "");
} }
function ArticuloComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ArticuloComponent_div_2_div_11_h5_3_Template, 2, 1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://museodelavidarural.com/upload/", ctx_r3.cut(ctx_r3.nota.imagen4), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
} }
function ArticuloComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-img-loader-xl", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("image", "https://museodelavidarural.com/upload/", ctx_r4.cut(ctx_r4.nota.imagen4), " ");
} }
function ArticuloComponent_div_2_div_15_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Imagen: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.nota.imagen2);
} }
function ArticuloComponent_div_2_div_15_hr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr", 29);
} }
function ArticuloComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticuloComponent_div_2_div_15_h5_1_Template, 4, 1, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloComponent_div_2_div_15_hr_2_Template, 1, 0, "hr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
} }
function ArticuloComponent_div_2_hr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr", 30);
} }
function ArticuloComponent_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArticuloComponent_div_2_div_20_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Descargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://www.museodelavidarural.com/upload/", ctx_r13.cut(ctx_r13.nota.imagen5), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ArticuloComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticuloComponent_div_2_div_20_a_1_Template, 2, 1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticuloComponent_div_2_div_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.nota.subtitulo);
} }
function ArticuloComponent_div_2_div_21_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-laterl-articulo", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", producto_r18);
} }
function ArticuloComponent_div_2_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloComponent_div_2_div_21_div_1_div_2_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filtrox4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, ctx_r16.notas, "Art\u00EDculos"), 3));
} }
function ArticuloComponent_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticuloComponent_div_2_div_21_div_1_Template, 6, 7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.nota.subtitulo);
} }
function ArticuloComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ArticuloComponent_div_2_h5_5_Template, 2, 1, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ArticuloComponent_div_2_div_11_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ArticuloComponent_div_2_div_14_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ArticuloComponent_div_2_div_15_Template, 3, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ArticuloComponent_div_2_hr_17_Template, 1, 0, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ArticuloComponent_div_2_div_19_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ArticuloComponent_div_2_div_20_Template, 7, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ArticuloComponent_div_2_div_21_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.nota.titulo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.saltos(ctx_r1.nota.subtitulo), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.saltos(ctx_r1.nota.descripcion1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota.descripcion3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota.creado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nota.creado);
} }
class ArticuloComponent {
    constructor(ruta, crudService, location) {
        this.ruta = ruta;
        this.crudService = crudService;
        this.location = location;
        this.loader = true;
        this.crudService.$loading.emit(true);
        this.nota = new _modelos_productos__WEBPACK_IMPORTED_MODULE_0__["Producto"]();
    }
    ngOnInit() {
        this.loader = true;
        this.ruta.params.subscribe(params => {
            params['_id'];
            this.crudService.getOneCard(params['_id']).subscribe(res => {
                this.nota = res;
                window.scrollTo(0, 0);
            });
        });
        this.crudService.scrolled = false;
        this.crudService.getProductos().subscribe(res => {
            this.notas = res;
            this.loader = false;
        });
    } //FIN
    ngAfterViewInit() {
    } //FIN
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
    cancel() {
        this.crudService.loading = true;
        this.location.back(); // <-- go back to previous location on cancel
    }
    saltos(data) {
        return data;
    }
    ;
    evento($event) {
        if (window.pageYOffset > 310) {
            this.crudService.scrolled = true;
        }
        else {
            this.crudService.scrolled = false;
        }
    }
    ;
    ngOnDestroy() {
        this.crudService.$loading.emit(true);
    }
}
ArticuloComponent.ɵfac = function ArticuloComponent_Factory(t) { return new (t || ArticuloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
ArticuloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticuloComponent, selectors: [["app-articulo"]], hostBindings: function ArticuloComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ArticuloComponent_scroll_HostBindingHandler($event) { return ctx.nota($event); });
    } }, decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "marginTop", 3, "scroll"], [1, "text-center", 2, "margin-top", "100px"], ["src", "../../../assets/loading4.gif", "alt", "", "align", "center", "width", "100px", 1, "marginResponsive"], [1, "row", "pm0"], [1, "col-sm-12", "col-lg-12", "col-sm-12", "col-xl-9", "pm0"], [1, "ml-2", "mr-2", "mt-2", "pm0"], ["class", "categoria", 4, "ngIf"], [1, "ajusteFontTitulo", "titulo"], [1, "ajusteFontSub", "subtitulo", 3, "innerHTML"], [2, "margin-top", "-8px!important", "margin-bottom", "15px!important", "margin-left", "10px", "margin-right", "20px"], [1, "col-12", "pm0"], ["class", "mobilePoner ml-1 mr-1 mb-1", "style", "display: none;", 4, "ngIf"], [2, "margin-right", "30px"], [1, "capital", "mr-3", "ml-2", "nota", 3, "innerHTML"], ["style", "margin-right: 30px; margin-left: 10px;", 4, "ngIf"], [1, "ml-2"], ["style", "display:flex ; align-items: flex-start; margin-top:-5px; margin-left:10px; margin-right: 5px", 4, "ngIf"], ["style", "margin-top:0px; margin-right: 10px;", 4, "ngIf"], ["class", "col-3 pm0 IMGdesktop ", "style", "background-color: rgba(255, 255, 255, 0.301);", 4, "ngIf"], [1, "categoria"], [1, "mobilePoner", "ml-1", "mr-1", "mb-1", 2, "display", "none"], ["width", "100%", 3, "src"], ["style", "display:none;", 4, "ngIf"], [2, "display", "none"], ["loader", "../../../assets/loading.gif", 1, "IMGdesktop", 3, "image"], ["style", "margin-left:10px!important", 4, "ngIf"], ["style", "margin-left: 10px;", 4, "ngIf"], [2, "margin-left", "10px!important"], [2, "margin-left", "10px"], [2, "margin-right", "30px", "margin-left", "10px"], [2, "display", "flex", "align-items", "flex-start", "margin-top", "-5px", "margin-left", "10px", "margin-right", "5px"], [2, "margin-top", "0px", "margin-right", "10px"], ["target", "_blank", "download", "Archivo", "class", "btn btn-success", 3, "href", 4, "ngIf"], [1, "btn", "btn-danger", 2, "margin-left", "5px", 3, "click"], ["target", "_blank", "download", "Archivo", 1, "btn", "btn-success", 3, "href"], [1, "col-3", "pm0", "IMGdesktop", 2, "background-color", "rgba(255, 255, 255, 0.301)"], ["src", "../../../assets/fondolateral.JPG", "alt", "", 2, "object-fit", "cover", "width", "100%", "opacity", "0.5"], ["style", "margin-bottom:5px;", 4, "ngFor", "ngForOf"], ["src", "../../../assets/fondolateral2.jpg", "alt", "", 2, "object-fit", "cover", "width", "100%", "opacity", "0.6"], [2, "margin-bottom", "5px"], [3, "data"]], template: function ArticuloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ArticuloComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ArticuloComponent_Template_div_scroll_1_listener($event) { return ctx.evento($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArticuloComponent_div_2_Template, 22, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _img_loader_xl_img_loader_xl_component__WEBPACK_IMPORTED_MODULE_5__["ImgLoaderXLComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _laterl_articulo_laterl_articulo_component__WEBPACK_IMPORTED_MODULE_6__["LaterlArticuloComponent"]], pipes: [_pipes_filtrox4_pipe__WEBPACK_IMPORTED_MODULE_7__["Filtrox4Pipe"], _pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroPipe"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');\r\n.marginResponsive[_ngcontent-%COMP%]{margin-top:100px!important}\r\n.marginTop[_ngcontent-%COMP%]{margin-top:145px}\r\n.margenesArticulo[_ngcontent-%COMP%]{margin-top:100px;}\r\n.pm0[_ngcontent-%COMP%]{margin:0px!important; padding: 0px!important;}\r\n.categoria[_ngcontent-%COMP%]{font-size: 20px;font-family: 'Yanone Kaffeesatz', sans-serif; line-height: 25px; color:brown; margin-left:10px}\r\n.titulo[_ngcontent-%COMP%]{font-size: 35px;\r\n  font-family: 'Bree Serif', serif; line-height: 43px;\r\n  margin-top:-10px;\r\n  margin-bottom:5px;\r\n  margin-left:10px;\r\n  margin-right:30px!important;\r\n  color:rgb(41, 41, 41)\r\n}\r\n.subtitulo[_ngcontent-%COMP%]{font-size: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  line-height: 25px;\r\n  margin-top:15px;\r\n   margin-left:12px;\r\n   letter-spacing: 0  px;\r\n   margin-right:30px!important\r\n  }\r\n\r\n.IMGdesktop[_ngcontent-%COMP%]{margin-top:-10px; padding-right: 30px; margin-left:10px; height: 400px; object-fit: cover;}\r\n.nota[_ngcontent-%COMP%]{font-family: 'Roboto', sans-serif; font-size: 15px;line-height: 24px;margin-left:10px}\r\n.sombra-text[_ngcontent-%COMP%]{\r\ntext-shadow: 1px 1px 1px rgb(221, 221, 221)\r\n}\r\n.capital[_ngcontent-%COMP%]::first-letter {\r\n\r\n  float: right;\r\n  font-family: 'Source Serif Pro', serif;\r\n  font-size: 310%;\r\n  float: left;\r\n  margin-top: 10px;\r\n  margin-bottom: 0px;\r\n  margin-right: 10px;\r\n  line-height: 60%;\r\n  color:rgb(136, 136, 136)\r\n}\r\n.blink_me[_ngcontent-%COMP%] {\r\n\r\n  animation: blinker 1.2s alternate-reverse;\r\n  animation-delay: -0.5s;\r\n}\r\n@keyframes blinker {\r\n  90% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes hideShow {\r\n  100%, 16.6%, 33.33%, 100% { width: 0; }\r\n  16.66%, 33.3% { width: auto; }\r\n}\r\n@media  (max-width: 700px)\r\n{\r\np[_ngcontent-%COMP%]{margin-left:10px!important; margin-right: -10px!important;}\r\nimg[_ngcontent-%COMP%]{margin-left:0px!important; margin-right: -20px!important;}\r\n}\r\n@media  (max-width: 800px)\r\n{\r\n .marginTop[_ngcontent-%COMP%]{margin-top: 130px;}\r\n .titulo[_ngcontent-%COMP%]{font-size: 30px; line-height: 30px; margin-top:-5px;}\r\n .subtitulo[_ngcontent-%COMP%]{font-size: 14px; line-height: 19px;}\r\n .categoria[_ngcontent-%COMP%]{font-size: 15px!important; margin-bottom: 2px }\r\n .IMGdesktop[_ngcontent-%COMP%]{display:none}\r\n .mobilePoner[_ngcontent-%COMP%]{display: inline-block!important;margin-right: 5px!important;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljdWxvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDRGQUE0RjtBQUM1RiwrRUFBK0U7QUFDL0Usb0ZBQW9GO0FBRXBGLGtCQUFrQiwwQkFBMEI7QUFDNUMsV0FBVyxnQkFBZ0I7QUFDM0Isa0JBQWtCLGdCQUFnQixDQUFDO0FBRW5DLEtBQUssb0JBQW9CLEVBQUUsc0JBQXNCLENBQUM7QUFDbEQsV0FBVyxlQUFlLENBQUMsNENBQTRDLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGdCQUFnQjtBQUV6SCxRQUFRLGVBQWU7RUFDckIsZ0NBQWdDLEVBQUUsaUJBQWlCO0VBQ25ELGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQjtBQUNGO0FBRUEsV0FBVyxlQUFlO0VBQ3hCLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZUFBZTtHQUNkLGdCQUFnQjtHQUNoQixxQkFBcUI7R0FDckI7RUFDRDtBQUVGLG1CQUFtQjtBQUNuQixZQUFZLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztBQUN0RyxNQUFNLGlDQUFpQyxFQUFFLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0I7QUFFM0Y7QUFDQTtBQUNBO0FBTUE7O0VBRUUsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtBQUNGO0FBTUE7O0VBRUUseUNBQXlDO0VBQ3pDLHNCQUFzQjtBQUN4QjtBQUdBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsNEJBQTRCLFFBQVEsRUFBRTtFQUN0QyxnQkFBZ0IsV0FBVyxFQUFFO0FBQy9CO0FBR0E7O0FBRUEsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsQ0FBQztBQUM1RCxJQUFJLHlCQUF5QixFQUFFLDZCQUE2QixDQUFDO0FBQzdEO0FBRUE7O0NBRUMsV0FBVyxpQkFBaUIsQ0FBQztDQUM3QixRQUFRLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7Q0FDNUQsV0FBVyxlQUFlLEVBQUUsaUJBQWlCLENBQUM7Q0FDOUMsV0FBVyx5QkFBeUIsRUFBRSxtQkFBbUI7Q0FDekQsWUFBWSxZQUFZO0NBQ3hCLGFBQWEsK0JBQStCLENBQUMsMkJBQTJCLENBQUM7QUFDMUUiLCJmaWxlIjoiYXJ0aWN1bG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJyZWUrU2VyaWYmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CcmVlK1NlcmlmJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWFyZ2luUmVzcG9uc2l2ZXttYXJnaW4tdG9wOjEwMHB4IWltcG9ydGFudH1cclxuLm1hcmdpblRvcHttYXJnaW4tdG9wOjE0NXB4fVxyXG4ubWFyZ2VuZXNBcnRpY3Vsb3ttYXJnaW4tdG9wOjEwMHB4O31cclxuXHJcbi5wbTB7bWFyZ2luOjBweCFpbXBvcnRhbnQ7IHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7fVxyXG4uY2F0ZWdvcmlhe2ZvbnQtc2l6ZTogMjBweDtmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjsgbGluZS1oZWlnaHQ6IDI1cHg7IGNvbG9yOmJyb3duOyBtYXJnaW4tbGVmdDoxMHB4fVxyXG5cclxuLnRpdHVsb3tmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdCcmVlIFNlcmlmJywgc2VyaWY7IGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICBtYXJnaW4tcmlnaHQ6MzBweCFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6cmdiKDQxLCA0MSwgNDEpXHJcbn1cclxuXHJcbi5zdWJ0aXR1bG97Zm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgIG1hcmdpbi1sZWZ0OjEycHg7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAwICBweDtcclxuICAgbWFyZ2luLXJpZ2h0OjMwcHghaW1wb3J0YW50XHJcbiAgfVxyXG5cclxuLyogcmVzcG9uc2l2ZSB0ZXh0Ki9cclxuLklNR2Rlc2t0b3B7bWFyZ2luLXRvcDotMTBweDsgcGFkZGluZy1yaWdodDogMzBweDsgbWFyZ2luLWxlZnQ6MTBweDsgaGVpZ2h0OiA0MDBweDsgb2JqZWN0LWZpdDogY292ZXI7fVxyXG4ubm90YXtmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTVweDtsaW5lLWhlaWdodDogMjRweDttYXJnaW4tbGVmdDoxMHB4fVxyXG5cclxuLnNvbWJyYS10ZXh0e1xyXG50ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDIyMSwgMjIxLCAyMjEpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2FwaXRhbDo6Zmlyc3QtbGV0dGVyIHtcclxuXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzEwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwJTtcclxuICBjb2xvcjpyZ2IoMTM2LCAxMzYsIDEzNilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5ibGlua19tZSB7XHJcblxyXG4gIGFuaW1hdGlvbjogYmxpbmtlciAxLjJzIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gIDkwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGhpZGVTaG93IHtcclxuICAxMDAlLCAxNi42JSwgMzMuMzMlLCAxMDAlIHsgd2lkdGg6IDA7IH1cclxuICAxNi42NiUsIDMzLjMlIHsgd2lkdGg6IGF1dG87IH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogNzAwcHgpXHJcbntcclxucHttYXJnaW4tbGVmdDoxMHB4IWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OiAtMTBweCFpbXBvcnRhbnQ7fVxyXG5pbWd7bWFyZ2luLWxlZnQ6MHB4IWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OiAtMjBweCFpbXBvcnRhbnQ7fVxyXG59XHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDgwMHB4KVxyXG57XHJcbiAubWFyZ2luVG9we21hcmdpbi10b3A6IDEzMHB4O31cclxuIC50aXR1bG97Zm9udC1zaXplOiAzMHB4OyBsaW5lLWhlaWdodDogMzBweDsgbWFyZ2luLXRvcDotNXB4O31cclxuIC5zdWJ0aXR1bG97Zm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMTlweDt9XHJcbiAuY2F0ZWdvcmlhe2ZvbnQtc2l6ZTogMTVweCFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDJweCB9XHJcbiAuSU1HZGVza3RvcHtkaXNwbGF5Om5vbmV9XHJcbiAubW9iaWxlUG9uZXJ7ZGlzcGxheTogaW5saW5lLWJsb2NrIWltcG9ydGFudDttYXJnaW4tcmlnaHQ6IDVweCFpbXBvcnRhbnQ7fVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "gbJf":
/*!******************************************************!*\
  !*** ./src/app/componentes/museo/museo.component.ts ***!
  \******************************************************/
/*! exports provided: MuseoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuseoComponent", function() { return MuseoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _informacion_museo_informacion_museo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../informacion-museo/informacion-museo.component */ "JXp3");


class MuseoComponent {
    constructor() { }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
MuseoComponent.ɵfac = function MuseoComponent_Factory(t) { return new (t || MuseoComponent)(); };
MuseoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MuseoComponent, selectors: [["app-museo"]], decls: 24, vars: 0, consts: [[2, "margin-top", "155px"], [1, "row", 2, "margin", "0px", "padding", "0px", "margin-top", "30px"], [1, "col-sm-12", "col-lg-6"], [1, "", 2, "font-size", "44px", "letter-spacing", "-1px", "line-height", "50px"], [1, "capital", 2, "font-size", "17px", "line-height", "22px"], [1, "lead"], [1, "text-justify", 2, "margin-top", "-17px", "font-size", "17px", "line-height", "22px"], [1, "text-justify", 2, "margin-top", "-15px", "font-size", "17px", "line-height", "22px"], [1, "col-sm-12", "col-lg-5"], ["src", "../../../assets/vitrinas.jpg", "alt", "", "width", "100%", 1, "sombra"], [2, "padding", "20px"]], template: function MuseoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Historia del Museo de la vida Rural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "El Museo de la vida rural de General Alvarado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "fu\u00E9 creado el 13 de agosto de 2005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " por un grupo de vecinos del pueblo, interesados en la recuperaci\u00F3n y conservaci\u00F3n del patrimonio cultural y natural de Comandante Nicanor Otamendi y el partido de General Alvarado. Despu\u00E9s de pasar por varias sedes transitorias la instituci\u00F3n encontr\u00F3 su lugar definitivo en el Centro Cultural Dima Sp\u00F3sito de Parodi, donde funciona desde el 6 de marzo de 2015 en el marco de la Direcci\u00F3n de Cultura municipal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Nuestra Misi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " El MVR tiene como objetivo investigar, preservar y educar en materia patrimonio, memoria e identidad, promoviendo los valores democr\u00E1ticos, el respeto a la diferencia y la libertad de pensamiento, tarea que desarrolla en estrecha relaci\u00F3n con las instituciones educativas locales de todos los niveles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Colecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " El museo tiene una orientaci\u00F3n hist\u00F3rica y etnogr\u00E1fica, ocup\u00E1ndose tanto de lo local como en general de la forma de vida propia de las comunidades rurales del sudeste bonaerense. Su acervo se compone de objetos de la vida cotidiana, herramientas de trabajo, material arqueol\u00F3gico, documentos escritos y fotograf\u00EDas entre otros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-informacion-museo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_informacion_museo_informacion_museo_component__WEBPACK_IMPORTED_MODULE_1__["InformacionMuseoComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');\r\n\r\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family: 'Roboto Condensed' ; font-size:30px}\r\n\r\n@media (max-width: 1000px)\r\n  {\r\n\r\n    .respon[_ngcontent-%COMP%]{margin-left:10px!important; margin-right: 10px!important}\r\n\r\n  }\r\n\r\n@media (min-width: 1000px)\r\n  {\r\n\r\n\r\n  h1[_ngcontent-%COMP%]{text-align:left!important; margin-left:0px; font-family: 'Roboto Condensed'!important }\r\n  .categoriaResposive[_ngcontent-%COMP%]{\r\n    font-size: calc(1.5em + 0.2vw); color:rgb(0, 0, 0);\r\n   font-family: 'Roboto Condensed';\r\n    letter-spacing: 0px;\r\n  }\r\n\r\n    h4[_ngcontent-%COMP%]{font-size:13px}\r\n\r\n\r\n    .tituloResponsive[_ngcontent-%COMP%]{\r\n      text-shadow: 2px 2px 2px rgb(180, 180, 180);\r\n      font-size: calc(1.2em + 0.3vw);\r\n      font-family: 'Roboto Condensed';\r\n      margin-top:-20px;\r\n      display: -webkit-box;\r\n      -webkit-line-clamp: 1;\r\n      -webkit-box-orient: vertical;\r\n      overflow: hidden\r\n    }\r\n\r\n    .tituloResponsive2[_ngcontent-%COMP%]{\r\n\r\n      font-size: calc(1.2em + 0.3vw);\r\n      line-height: 25px;\r\n      margin-top:-10px;\r\n      display: -webkit-box;\r\n      -webkit-line-clamp: 2;\r\n      -webkit-box-orient: vertical;\r\n      overflow: hidden\r\n    }\r\n\r\n\r\n    .subtituloResposive[_ngcontent-%COMP%]{\r\n      display: -webkit-box;\r\n      -webkit-line-clamp: 2;\r\n      -webkit-box-orient: vertical;\r\n      overflow: hidden;\r\n\r\n      font-size:12px;\r\n      margin-top: -16px;\r\n      line-height: 14px;\r\n\r\n\r\n\r\n    }\r\n\r\n    input[_ngcontent-%COMP%]{border-radius: 5px;\r\n\r\n\r\n\r\n\r\n    }\r\n    .subtituloResposive2[_ngcontent-%COMP%]{\r\n      display: -webkit-box;\r\n      -webkit-line-clamp: 4;\r\n      -webkit-box-orient: vertical;\r\n      overflow: hidden;\r\n      margin-top: -6px;\r\n      font-size:14px;\r\n      margin-top: -6px;\r\n      line-height: 18px;\r\n\r\n\r\n\r\n    }\r\n    .serie[_ngcontent-%COMP%]{\r\n      font-size:10px;\r\n      margin-top:-25px;}\r\n\r\n\r\n    .ColorFondo[_ngcontent-%COMP%]{\r\n        background-color:rgb(255, 255, 255); \r\n\r\n     }\r\n     #Ventana2[_ngcontent-%COMP%]{display:none}\r\n\r\n           .wanda[_ngcontent-%COMP%]{\r\n\r\n     font-size:70px;\r\n     background-color: red\r\n\r\n           }\r\n\r\n\r\n     .contenedor[_ngcontent-%COMP%]{\r\n         position: relative;\r\n         display: inline-block;\r\n         text-align: center;\r\n     }\r\n\r\n     .texto-encima[_ngcontent-%COMP%]{\r\n         position: absolute;\r\n         top: 10px;\r\n         left: 10px;\r\n     }\r\n\r\n\r\n           .text[_ngcontent-%COMP%] {\r\n\r\n             display: -webkit-box;\r\n             -webkit-line-clamp: 3;\r\n             -webkit-box-orient: vertical;\r\n             overflow: hidden}\r\n\r\n             .text2[_ngcontent-%COMP%] {\r\n\r\n              display: -webkit-box;\r\n              -webkit-line-clamp: 2;\r\n              -webkit-box-orient: vertical;\r\n              overflow: hidden}\r\n              .text3[_ngcontent-%COMP%] {\r\n\r\n                display: -webkit-box;\r\n                -webkit-line-clamp: 3;\r\n                -webkit-box-orient: vertical;\r\n\r\n                overflow: hidden}\r\n\r\n           img[_ngcontent-%COMP%]{border-radius: 3px;\r\n             object-fit: cover;\r\n\r\n         }\r\n\r\n\r\n\r\n\r\n           footer[_ngcontent-%COMP%] {\r\n             display: block;\r\n           }\r\n\r\n     .contenedorNavbar[_ngcontent-%COMP%] {\r\n     background-color: rgb(0, 0, 0);  \r\n     width: 100%;\r\n     height: 45px;\r\n     margin-top:-10px;\r\n     margin-bottom: -30px;\r\n                       }\r\n\r\n\r\n\r\n     \r\n           li[_ngcontent-%COMP%] {\r\n               display: inline;\r\n              }\r\n\r\n     .menuTexto[_ngcontent-%COMP%] {\r\n             font-family:'Roboto', sans-serif;\r\n             font-size: 13px;\r\n             letter-spacing: 2px;\r\n             text-decoration: none;\r\n             float: left;\r\n             padding: 10px;\r\n             color: rgb(107, 107, 107); \r\n             margin-top:3px;\r\n             margin-left:3px;\r\n                     }\r\n\r\n\r\n     .activo[_ngcontent-%COMP%]{\r\n                   color:rgb(255, 255, 255);  \r\n                  }\r\n\r\n    .cartelCorona[_ngcontent-%COMP%]{opacity:0.9;\r\n         border-radius: 2%!important;\r\n         width: 18rem;\r\n         background-color: rgba(255, 255, 255, 0.856) ;\r\n         color:rgb(0, 0, 0) ;\r\n         margin-top:-380px;\r\n         margin-right: 5%;\r\n         float:right}\r\n\r\n         \r\n         \r\n      @media  (min-width: 330px)\r\n      {\r\n      \r\n      .imgfuera[_ngcontent-%COMP%]{ display:none !important;}\r\n      ;\r\n      }\r\n\r\n\r\n\r\n      @media (max-width: 750px)\r\n      {\r\n      \r\n      .ajusteCorona[_ngcontent-%COMP%]{float:none ; margin-left:auto; margin-right: auto; margin-bottom: 40px}\r\n      .dale[_ngcontent-%COMP%]{margin-top:50px;}\r\n\r\n\r\n      }\r\n\r\n\r\n    @media  (max-width: 990px)\r\n    {.correcionMT[_ngcontent-%COMP%]{ margin-top:-10px}\r\n    .dale2[_ngcontent-%COMP%]{ display:block !important; }\r\n    \r\n    .acomoda2[_ngcontent-%COMP%]{margin-top:-15px; font-size:12px; margin-right: 15px;}\r\n     .only[_ngcontent-%COMP%]{ display:none !important ; }\r\n     .onlyImg[_ngcontent-%COMP%]{ display:none; }\r\n     .acomoda[_ngcontent-%COMP%]{margin-top:20px;}\r\n    .borderRes[_ngcontent-%COMP%]{border-radius:0%!important}\r\n    .mt1[_ngcontent-%COMP%]{margin-top:20px}\r\n\r\n    .dale[_ngcontent-%COMP%]{ display:inline !important; }\r\n\r\n    .float[_ngcontent-%COMP%]{float:left; }\r\n\r\n    }\r\n\r\n\r\n\r\n\r\n    @media  (min-width: 420px)\r\n    {\r\n    \r\n    .only1[_ngcontent-%COMP%]{ display:none !important;}\r\n    ;\r\n    }\r\n\r\n    @media  (min-width: 750px)\r\n    {\r\n    \r\n    .acomode[_ngcontent-%COMP%]{margin-top:-45px}\r\n    ;\r\n    }\r\n\r\n\r\n\r\n    @media  (max-width: 990px)\r\n    {\r\n    \r\n    .ajusteFoto[_ngcontent-%COMP%]{margin-top:60px!important};\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n    @media  (max-width: 335px)\r\n    {\r\n    \r\n    .quitar320[_ngcontent-%COMP%]{display: none!important}\r\n\r\n\r\n    }\r\n\r\n\r\n    @media  (max-width: 1200px)\r\n    {\r\n    \r\n    .quitarMargen[_ngcontent-%COMP%]{margin-left:10px; margin-right:10px}\r\n\r\n\r\n    }\r\n\r\n\r\n  };\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2VvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEZBQThGOztBQUU5RixNQUFNLGdDQUFnQyxFQUFFLGNBQWM7O0FBR3BEOzs7SUFHRSxRQUFRLDBCQUEwQixFQUFFLDRCQUE0Qjs7RUFFbEU7O0FBS0E7Ozs7RUFJQSxHQUFHLHlCQUF5QixFQUFFLGVBQWUsRUFBRSwwQ0FBMEM7RUFDekY7SUFDRSw4QkFBOEIsRUFBRSxrQkFBa0I7R0FDbkQsK0JBQStCO0lBQzlCLG1CQUFtQjtFQUNyQjs7SUFFRSxHQUFHLGNBQWM7OztJQUdqQjtNQUNFLDJDQUEyQztNQUMzQyw4QkFBOEI7TUFDOUIsK0JBQStCO01BQy9CLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIscUJBQXFCO01BQ3JCLDRCQUE0QjtNQUM1QjtJQUNGOztJQUVBOztNQUVFLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixxQkFBcUI7TUFDckIsNEJBQTRCO01BQzVCO0lBQ0Y7OztJQUdBO01BQ0Usb0JBQW9CO01BQ3BCLHFCQUFxQjtNQUNyQiw0QkFBNEI7TUFDNUIsZ0JBQWdCOztNQUVoQixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGlCQUFpQjs7OztJQUluQjs7SUFFQSxNQUFNLGtCQUFrQjs7Ozs7SUFLeEI7SUFDQTtNQUNFLG9CQUFvQjtNQUNwQixxQkFBcUI7TUFDckIsNEJBQTRCO01BQzVCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixpQkFBaUI7Ozs7SUFJbkI7SUFDQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0IsQ0FBQzs7O0lBR25CO1FBQ0ksbUNBQW1DLEVBQUUsb0JBQW9COztLQUU1RDtLQUNBLFVBQVUsWUFBWTs7V0FFaEI7O0tBRU4sY0FBYztLQUNkOztXQUVNOzs7S0FHTjtTQUNJLGtCQUFrQjtTQUNsQixxQkFBcUI7U0FDckIsa0JBQWtCO0tBQ3RCOztLQUVBO1NBQ0ksa0JBQWtCO1NBQ2xCLFNBQVM7U0FDVCxVQUFVO0tBQ2Q7OztXQUdNOzthQUVFLG9CQUFvQjthQUNwQixxQkFBcUI7YUFDckIsNEJBQTRCO2FBQzVCLGdCQUFnQjs7YUFFaEI7O2NBRUMsb0JBQW9CO2NBQ3BCLHFCQUFxQjtjQUNyQiw0QkFBNEI7Y0FDNUIsZ0JBQWdCO2NBQ2hCOztnQkFFRSxvQkFBb0I7Z0JBQ3BCLHFCQUFxQjtnQkFDckIsNEJBQTRCOztnQkFFNUIsZ0JBQWdCOztXQUVyQixJQUFJLGtCQUFrQjthQUNwQixpQkFBaUI7O1NBRXJCOzs7OztXQUtFO2FBQ0UsY0FBYztXQUNoQjs7S0FFTjtLQUNBLDhCQUE4QixHQUFHLHFCQUFxQjtLQUN0RCxXQUFXO0tBQ1gsWUFBWTtLQUNaLGdCQUFnQjtLQUNoQixvQkFBb0I7dUJBQ0Y7Ozs7S0FJbEIsdUJBQXVCO1dBQ2pCO2VBQ0ksZUFBZTtjQUNoQjs7S0FFVDthQUNRLGdDQUFnQzthQUNoQyxlQUFlO2FBQ2YsbUJBQW1CO2FBQ25CLHFCQUFxQjthQUNyQixXQUFXO2FBQ1gsYUFBYTthQUNiLHlCQUF5QixFQUFFLGNBQWM7YUFDekMsY0FBYzthQUNkLGVBQWU7cUJBQ1A7OztLQUdoQjttQkFDYyx3QkFBd0IsR0FBRyxxQkFBcUI7a0JBQ2pEOztJQUVkLGNBQWMsV0FBVztTQUNwQiwyQkFBMkI7U0FDM0IsWUFBWTtTQUNaLDZDQUE2QztTQUM3QyxtQkFBbUI7U0FDbkIsaUJBQWlCO1NBQ2pCLGdCQUFnQjtTQUNoQixXQUFXOztTQUVYLG1CQUFtQjtTQUNuQjs7T0FFRjtNQUNEOztNQUVBLDZDQUE2QztNQUM3QyxXQUFXLHVCQUF1QixDQUFDO01BQUE7TUFFbkM7Ozs7TUFJQTs7TUFFQSw2Q0FBNkM7TUFDN0MsY0FBYyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CO01BQ3BGLE1BQU0sZUFBZSxDQUFDOzs7TUFHdEI7OztJQUdGO0tBQ0MsY0FBYyxnQkFBZ0I7SUFDL0IsUUFBUSx3QkFBd0IsRUFBRTtJQUNsQyw2Q0FBNkM7SUFDN0MsVUFBVSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLENBQUM7S0FDOUQsT0FBTyx3QkFBd0IsRUFBRTtLQUNqQyxVQUFVLFlBQVksRUFBRTtLQUN4QixTQUFTLGVBQWUsQ0FBQztJQUMxQixXQUFXLDBCQUEwQjtJQUNyQyxLQUFLLGVBQWU7O0lBRXBCLE9BQU8seUJBQXlCLEVBQUU7O0lBRWxDLE9BQU8sVUFBVSxFQUFFOztJQUVuQjs7Ozs7SUFLQTs7SUFFQSw2Q0FBNkM7SUFDN0MsUUFBUSx1QkFBdUIsQ0FBQztJQUFBO0lBRWhDOztJQUVBOztJQUVBLDZDQUE2QztJQUM3QyxTQUFTLGdCQUFnQjtJQUFBO0lBRXpCOzs7O0lBSUE7O0lBRUEsNkNBQTZDO0lBQzdDLFlBQVkseUJBQXlCLENBQUE7OztJQUdyQzs7OztJQUlBOztJQUVBLDZDQUE2QztJQUM3QyxXQUFXLHVCQUF1Qjs7O0lBR2xDOzs7SUFHQTs7SUFFQSw2Q0FBNkM7SUFDN0MsY0FBYyxnQkFBZ0IsRUFBRSxpQkFBaUI7OztJQUdqRDs7O0VBR0YiLCJmaWxlIjoibXVzZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5oMSwgcHtmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnIDsgZm9udC1zaXplOjMwcHh9XHJcblxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KVxyXG4gIHtcclxuXHJcbiAgICAucmVzcG9ue21hcmdpbi1sZWZ0OjEwcHghaW1wb3J0YW50OyBtYXJnaW4tcmlnaHQ6IDEwcHghaW1wb3J0YW50fVxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpXHJcbiAge1xyXG5cclxuXHJcbiAgaDF7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6MHB4OyBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnIWltcG9ydGFudCB9XHJcbiAgLmNhdGVnb3JpYVJlc3Bvc2l2ZXtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVlbSArIDAuMnZ3KTsgY29sb3I6cmdiKDAsIDAsIDApO1xyXG4gICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICB9XHJcblxyXG4gICAgaDR7Zm9udC1zaXplOjEzcHh9XHJcblxyXG5cclxuICAgIC50aXR1bG9SZXNwb25zaXZle1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoMS4yZW0gKyAwLjN2dyk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCc7XHJcbiAgICAgIG1hcmdpbi10b3A6LTIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgIH1cclxuXHJcbiAgICAudGl0dWxvUmVzcG9uc2l2ZTJ7XHJcblxyXG4gICAgICBmb250LXNpemU6IGNhbGMoMS4yZW0gKyAwLjN2dyk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zdWJ0aXR1bG9SZXNwb3NpdmV7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0e2JvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAuc3VidGl0dWxvUmVzcG9zaXZlMntcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgLnNlcmlle1xyXG4gICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMjVweDt9XHJcblxyXG5cclxuICAgIC5Db2xvckZvbmRve1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpOyAvKkNvbG9yIGZvbmRvIGJhcnJhKi9cclxuXHJcbiAgICAgfVxyXG4gICAgICNWZW50YW5hMntkaXNwbGF5Om5vbmV9XHJcblxyXG4gICAgICAgICAgIC53YW5kYXtcclxuXHJcbiAgICAgZm9udC1zaXplOjcwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXHJcblxyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgIC5jb250ZW5lZG9ye1xyXG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLnRleHRvLWVuY2ltYXtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgLnRleHQge1xyXG5cclxuICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG4gICAgICAgICAgICAgLnRleHQyIHtcclxuXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbn1cclxuICAgICAgICAgICAgICAudGV4dDMge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVufVxyXG5cclxuICAgICAgICAgICBpbWd7Ym9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgIC5jb250ZW5lZG9yTmF2YmFyIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7ICAvKkNvbG9yIEZvbmRvIE5hdmJhciovXHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgIC8qIEVzdGlsb3MgTWVudSBOYXZiYXIqL1xyXG4gICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgLm1lbnVUZXh0byB7XHJcbiAgICAgICAgICAgICBmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICBjb2xvcjogcmdiKDEwNywgMTA3LCAxMDcpOyAvKkNvbG9yIHRleHRvKi9cclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6M3B4O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAuYWN0aXZve1xyXG4gICAgICAgICAgICAgICAgICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpOyAgLypDb2xvciB0ZXh0by1hY3Rpdm8qL1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLmNhcnRlbENvcm9uYXtvcGFjaXR5OjAuOTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMiUhaW1wb3J0YW50O1xyXG4gICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NTYpIDtcclxuICAgICAgICAgY29sb3I6cmdiKDAsIDAsIDApIDtcclxuICAgICAgICAgbWFyZ2luLXRvcDotMzgwcHg7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgIGZsb2F0OnJpZ2h0fVxyXG5cclxuICAgICAgICAgLyogRXN0YWRvIENhcnJpdG8gKi9cclxuICAgICAgICAgLyogLm9wdDJ7YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvY2Fycml0b2ZhbHNlMS5qcGcnKTsgd2lkdGg6IDU1cHg7IGhlaWdodDogMzBweDt9XHJcbiAgICAgICAgIC5vcHQxe2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NhcnJpdG90cnVlMi5qcGcnKTsgIHdpZHRoOiA1NXB4OyBoZWlnaHQ6IDMwcHg7IGNvbG9yOnJnYigyNTUsIDIwMywgMzIpfVxyXG4gICAgICAqL1xyXG4gICAgICBAbWVkaWEgIChtaW4td2lkdGg6IDMzMHB4KVxyXG4gICAgICB7XHJcbiAgICAgIC8qIC5zb2xvcmVzeyB2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0gKi9cclxuICAgICAgLmltZ2Z1ZXJheyBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XHJcbiAgICAgIDtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpXHJcbiAgICAgIHtcclxuICAgICAgLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4gICAgICAuYWp1c3RlQ29yb25he2Zsb2F0Om5vbmUgOyBtYXJnaW4tbGVmdDphdXRvOyBtYXJnaW4tcmlnaHQ6IGF1dG87IG1hcmdpbi1ib3R0b206IDQwcHh9XHJcbiAgICAgIC5kYWxle21hcmdpbi10b3A6NTBweDt9XHJcblxyXG5cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgIChtYXgtd2lkdGg6IDk5MHB4KVxyXG4gICAgey5jb3JyZWNpb25NVHsgbWFyZ2luLXRvcDotMTBweH1cclxuICAgIC5kYWxlMnsgZGlzcGxheTpibG9jayAhaW1wb3J0YW50OyB9XHJcbiAgICAvKiAuc29sb3Jlc3sgdmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9ICovXHJcbiAgICAuYWNvbW9kYTJ7bWFyZ2luLXRvcDotMTVweDsgZm9udC1zaXplOjEycHg7IG1hcmdpbi1yaWdodDogMTVweDt9XHJcbiAgICAgLm9ubHl7IGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50IDsgfVxyXG4gICAgIC5vbmx5SW1neyBkaXNwbGF5Om5vbmU7IH1cclxuICAgICAuYWNvbW9kYXttYXJnaW4tdG9wOjIwcHg7fVxyXG4gICAgLmJvcmRlclJlc3tib3JkZXItcmFkaXVzOjAlIWltcG9ydGFudH1cclxuICAgIC5tdDF7bWFyZ2luLXRvcDoyMHB4fVxyXG5cclxuICAgIC5kYWxleyBkaXNwbGF5OmlubGluZSAhaW1wb3J0YW50OyB9XHJcblxyXG4gICAgLmZsb2F0e2Zsb2F0OmxlZnQ7IH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgQG1lZGlhICAobWluLXdpZHRoOiA0MjBweClcclxuICAgIHtcclxuICAgIC8qIC5zb2xvcmVzeyB2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0gKi9cclxuICAgIC5vbmx5MXsgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fVxyXG4gICAgO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAgKG1pbi13aWR0aDogNzUwcHgpXHJcbiAgICB7XHJcbiAgICAvKiAuc29sb3Jlc3sgdmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9ICovXHJcbiAgICAuYWNvbW9kZXttYXJnaW4tdG9wOi00NXB4fVxyXG4gICAgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgQG1lZGlhICAobWF4LXdpZHRoOiA5OTBweClcclxuICAgIHtcclxuICAgIC8qIC5zb2xvcmVzeyB2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0gKi9cclxuICAgIC5hanVzdGVGb3Rve21hcmdpbi10b3A6NjBweCFpbXBvcnRhbnR9O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBAbWVkaWEgIChtYXgtd2lkdGg6IDMzNXB4KVxyXG4gICAge1xyXG4gICAgLyogLnNvbG9yZXN7IHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fSAqL1xyXG4gICAgLnF1aXRhcjMyMHtkaXNwbGF5OiBub25lIWltcG9ydGFudH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgIChtYXgtd2lkdGg6IDEyMDBweClcclxuICAgIHtcclxuICAgIC8qIC5zb2xvcmVzeyB2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0gKi9cclxuICAgIC5xdWl0YXJNYXJnZW57bWFyZ2luLWxlZnQ6MTBweDsgbWFyZ2luLXJpZ2h0OjEwcHh9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "gmHm":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/img-loader-xl/img-loader-xl.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImgLoaderXLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgLoaderXLComponent", function() { return ImgLoaderXLComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ImgLoaderXLComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.loader, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1, a2) { return { visibility: a0, height: a1, width: a2 }; };
class ImgLoaderXLComponent {
    constructor() {
        this.loader = '';
        this.height = 400;
        this.width = 100;
        this.image = '';
        this.imagenEstado = false;
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
        this.imagenEstado = true;
    }
}
ImgLoaderXLComponent.ɵfac = function ImgLoaderXLComponent_Factory(t) { return new (t || ImgLoaderXLComponent)(); };
ImgLoaderXLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgLoaderXLComponent, selectors: [["app-img-loader-xl"]], inputs: { loader: "loader", height: "height", width: "width", image: "image" }, decls: 3, vars: 8, consts: [[4, "ngIf"], [2, "object-fit", "cover", "margin-top", "10px", 3, "hidden", "src", "ngStyle", "load"], [1, "text-center", 2, "width", "10%!important", "margin-left", "40%", "margin-top", "10%", "margin-bottom", "20%", 3, "src"]], template: function ImgLoaderXLComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImgLoaderXLComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImgLoaderXLComponent_Template_img_load_2_listener() { return ctx.hideLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.imagenEstado)("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.isLoading ? "hidden" : "", ctx.height + "px", ctx.width + "%"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".loading[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1sb2FkZXIteGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7O0VBRVgiLCJmaWxlIjoiaW1nLWxvYWRlci14bC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "h/Hl":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TruncatePipe {
    transform(value, limite) {
        let limit = parseInt(limite);
        return value.length > limit ? value.substring(0, limit) + "..." : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });


/***/ }),

/***/ "j2Af":
/*!**************************************!*\
  !*** ./src/app/pipes/buscar.pipe.ts ***!
  \**************************************/
/*! exports provided: BuscarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPipe", function() { return BuscarPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BuscarPipe {
    transform(value, texto) {
        if (!texto)
            return value;
        return value.filter(match => match.titulo.toUpperCase().includes(texto.toUpperCase()) ||
            match.categoria.toUpperCase().includes(texto.toUpperCase())
            ||
                match.subtitulo.toUpperCase().includes(texto.toUpperCase())
            ||
                match.descripcion1.toUpperCase().includes(texto.toUpperCase()));
    }
}
BuscarPipe.ɵfac = function BuscarPipe_Factory(t) { return new (t || BuscarPipe)(); };
BuscarPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "buscar", type: BuscarPipe, pure: true });


/***/ }),

/***/ "lZaO":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/cate-publi-mobile/cate-publi-mobile.component.ts ***!
  \******************************************************************************/
/*! exports provided: CatePubliMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatePubliMobileComponent", function() { return CatePubliMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _img_loader_sm_img_loader_sm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img-loader-sm/img-loader-sm.component */ "OO/t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CatePubliMobileComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.subtitulo);
} }
function CatePubliMobileComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data == null ? null : ctx_r1.data.descripcion1);
} }
class CatePubliMobileComponent {
    constructor() {
        this.stringIM = '';
    }
    ngOnInit() {
        var _a;
        this.stringIM = (_a = this.data) === null || _a === void 0 ? void 0 : _a.imagen4.slice(8);
        this.stringIM = "https://www.museodelavidarural.com/upload/" + this.stringIM;
    }
    cut(value) {
        var corte = value.slice(8);
        return corte;
    }
    ;
}
CatePubliMobileComponent.ɵfac = function CatePubliMobileComponent_Factory(t) { return new (t || CatePubliMobileComponent)(); };
CatePubliMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatePubliMobileComponent, selectors: [["app-cate-publi-mobile"]], inputs: { data: "data" }, decls: 23, vars: 7, consts: [[1, "card", "sombraBox", "as", 2, "padding", "10px", "padding-bottom", "0px", "background-color", "white", "margin-bottom", "-80px"], [1, "row", "pm0"], [1, "col-4", "pm0"], [3, "routerLink"], ["loader", "../../../assets/loading.gif", 3, "image"], [1, "col-8", "pm0", 2, "padding-left", "10px!important"], [1, "card-content"], [1, "card-title"], [1, "cate", 2, "font-size", "15px", "font-family", "'Yanone Kaffeesatz', sans-serif", "color", "brown", "margin-left", "3px"], [2, "margin-top", "-10px"], [1, "titulo", "text1"], ["class", "text1 subtitulo", 4, "ngIf"], ["class", "text2 subtitulo", 4, "ngIf"], [1, ""], [1, "card-read-more", 2, "margin-top", "10px"], [1, "text1", "subtitulo"], [1, "text2", "subtitulo"]], template: function CatePubliMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-img-loader-sm", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CatePubliMobileComponent_small_14_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CatePubliMobileComponent_small_15_Template, 2, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../todos/", ctx.data == null ? null : ctx.data.titulo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("image", "", ctx.stringIM, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.data == null ? null : ctx.data.categoria, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../todos/", ctx.data == null ? null : ctx.data.titulo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.subtitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.data == null ? null : ctx.data.subtitulo));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _img_loader_sm_img_loader_sm_component__WEBPACK_IMPORTED_MODULE_2__["ImgLoaderSMComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["img[_ngcontent-%COMP%]{object-fit: cover; border-radius: 3px; height: 110px!important; margin:0px; padding: 0px;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 160%;font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  line-height: 25px; letter-spacing: 0.2px;margin-left:5px;\r\nmargin-top:-15px}\r\n.subtitulo[_ngcontent-%COMP%]{margin-left:4px; margin-top:-10px; line-height:16px; font-size:11px }\r\na[_ngcontent-%COMP%]{color:rgb(0, 0, 0)}\r\n.as[_ngcontent-%COMP%]:active{border: 10px solid white }\r\n.text2[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n.pm0[_ngcontent-%COMP%]{padding: 0px; margin:0px;}\r\n.text1[_ngcontent-%COMP%] {\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n\r\n  overflow: hidden}\r\n@media  (max-width: 1500px){\r\n.titulo[_ngcontent-%COMP%]{font-size: 135%; line-height: 19px;}\r\n.subtitulo[_ngcontent-%COMP%]{font-size: 12px; line-height: 15px;}\r\n  }\r\n@media  (max-width: 600px){\r\n   .cate[_ngcontent-%COMP%]{font-size:12px!important;}\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGUtcHVibGktbW9iaWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDO0FBQzdGLFFBQVEsZUFBZSxDQUFDLDRDQUE0QztFQUNsRSxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQyxlQUFlO0FBQzFELGdCQUFnQjtBQUNoQixXQUFXLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlO0FBQy9FLEVBQUUsa0JBQWtCO0FBRXBCLFdBQVcseUJBQXlCO0FBRXBDOztFQUVFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixnQkFBZ0I7QUFFbEIsS0FBSyxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQzlCOztFQUVFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixnQkFBZ0I7QUFJbEI7QUFDQSxRQUFRLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztBQUMzQyxXQUFXLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztFQUM1QztBQUdBO0dBQ0MsTUFBTSx3QkFBd0IsQ0FBQztNQUM1QiIsImZpbGUiOiJjYXRlLXB1YmxpLW1vYmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne29iamVjdC1maXQ6IGNvdmVyOyBib3JkZXItcmFkaXVzOiAzcHg7IGhlaWdodDogMTEwcHghaW1wb3J0YW50OyBtYXJnaW46MHB4OyBwYWRkaW5nOiAwcHg7fVxyXG4udGl0dWxve2ZvbnQtc2l6ZTogMTYwJTtmb250LWZhbWlseTogJ1lhbm9uZSBLYWZmZWVzYXR6Jywgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMjVweDsgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O21hcmdpbi1sZWZ0OjVweDtcclxubWFyZ2luLXRvcDotMTVweH1cclxuLnN1YnRpdHVsb3ttYXJnaW4tbGVmdDo0cHg7IG1hcmdpbi10b3A6LTEwcHg7IGxpbmUtaGVpZ2h0OjE2cHg7IGZvbnQtc2l6ZToxMXB4IH1cclxuYXtjb2xvcjpyZ2IoMCwgMCwgMCl9XHJcblxyXG4uYXM6YWN0aXZle2JvcmRlcjogMTBweCBzb2xpZCB3aGl0ZSB9XHJcblxyXG4udGV4dDIge1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbn1cclxuXHJcbi5wbTB7cGFkZGluZzogMHB4OyBtYXJnaW46MHB4O31cclxuLnRleHQxIHtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMTUwMHB4KXtcclxuLnRpdHVsb3tmb250LXNpemU6IDEzNSU7IGxpbmUtaGVpZ2h0OiAxOXB4O31cclxuLnN1YnRpdHVsb3tmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxNXB4O31cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgLmNhdGV7Zm9udC1zaXplOjEycHghaW1wb3J0YW50O31cclxuICAgICAgfVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "mX5T":
/*!************************************************************!*\
  !*** ./src/app/componentes/buscador/buscador.component.ts ***!
  \************************************************************/
/*! exports provided: BuscadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorComponent", function() { return BuscadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");







class BuscadorComponent {
    constructor() {
        this.buscar = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.buscarEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.buscar.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300)).subscribe(value => this.buscarEmitter.emit(value));
    }
}
BuscadorComponent.ɵfac = function BuscadorComponent_Factory(t) { return new (t || BuscadorComponent)(); };
BuscadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscadorComponent, selectors: [["app-buscador"]], outputs: { buscarEmitter: "buscar" }, decls: 4, vars: 1, consts: [[1, "example-form-field"], [2, "color", "rgb(175, 175, 175)!important"], ["spellcheck", "false", "autocomplete", "off", "matInput", "", "type", "text", 2, "width", "200px", 3, "formControl"]], template: function BuscadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.buscar);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".mat-form-field[_ngcontent-%COMP%]{font-size: 18px; width: 200px; color:brown}\r\n.mat-label[_ngcontent-%COMP%]{color:brown!important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2NhZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFnQixlQUFlLEVBQUUsWUFBWSxFQUFFLFdBQVc7QUFDMUQsV0FBVyxxQkFBcUIiLCJmaWxlIjoiYnVzY2Fkb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOiAxOHB4OyB3aWR0aDogMjAwcHg7IGNvbG9yOmJyb3dufVxyXG4ubWF0LWxhYmVse2NvbG9yOmJyb3duIWltcG9ydGFudH1cclxuIl19 */"] });


/***/ }),

/***/ "nG6N":
/*!****************************************************************!*\
  !*** ./src/app/componentes/img-loader/img-loader.component.ts ***!
  \****************************************************************/
/*! exports provided: ImgLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgLoaderComponent", function() { return ImgLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ImgLoaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.loader, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1, a2) { return { visibility: a0, height: a1, width: a2 }; };
class ImgLoaderComponent {
    constructor() {
        this.loader = '';
        this.height = 200;
        this.width = 100;
        this.image = '';
        this.imagenEstado = false;
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
        this.imagenEstado = true;
    }
}
ImgLoaderComponent.ɵfac = function ImgLoaderComponent_Factory(t) { return new (t || ImgLoaderComponent)(); };
ImgLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgLoaderComponent, selectors: [["app-img-loader"]], inputs: { loader: "loader", height: "height", width: "width", image: "image" }, decls: 3, vars: 8, consts: [[4, "ngIf"], [2, "object-fit", "cover", "margin-top", "10px", 3, "hidden", "src", "ngStyle", "load"], [1, "text-center", 2, "width", "10%!important", "margin-left", "42%", "margin-top", "20%", "margin-bottom", "20%", 3, "src"]], template: function ImgLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImgLoaderComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImgLoaderComponent_Template_img_load_2_listener() { return ctx.hideLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.imagenEstado)("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.isLoading ? "hidden" : "", ctx.height + "px", ctx.width + "%"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".loading[_ngcontent-%COMP%]{\r\nwidth: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7O0FBRVgiLCJmaWxlIjoiaW1nLWxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XHJcbndpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "vCn4":
/*!****************************************************************!*\
  !*** ./src/app/componentes/publi-card/publi-card.component.ts ***!
  \****************************************************************/
/*! exports provided: PubliCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubliCardComponent", function() { return PubliCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PubliCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PubliCardComponent.ɵfac = function PubliCardComponent_Factory(t) { return new (t || PubliCardComponent)(); };
PubliCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PubliCardComponent, selectors: [["app-publi-card"]], decls: 37, vars: 0, consts: [[2, "margin-left", "5px"], [1, "row", 2, "padding", "0px"], [1, "col-xs-12", "col-sm-3", "mr8", 2, "margin-left", "10px"], [1, "sombraBox", 2, "padding", "0px", "margin", "0px"], ["routerLink", "/todos/Naturaleza"], ["src", "../../../assets/1.png", "width", "100%"], [1, "col-xs-12", "col-sm-3", "mr8", 2, "margin-left", "6px"], [1, "sombraBox"], ["routerLink", "/todos/Pueblos Originarios"], ["src", "../../../assets/2.png", "width", "100%"], ["routerLink", "/todos/Historia Rural y de los pueblos"], ["src", "../../../assets/3.jpg", "width", "100%"], ["routerLink", "/todos/Historias de vida y migraciones"], ["src", "../../../assets/4.jpg", "width", "100%"], [1, "col-xs-12", "col-sm-3", "mt-4", "mr8", 2, "margin-left", "10px"], ["routerLink", "/todos/Patrimonio Rural"], ["src", "../../../assets/5.jpg", "width", "100%"], [1, "col-xs-12", "col-sm-3", "mt-4", "mr8", 2, "margin-left", "6px"], ["routerLink", "/todos/Ruralidad"], ["src", "../../../assets/6.jpg", "width", "100%"], ["routerLink", "/sin"], ["src", "../../../assets/7.jpg", "width", "100%"], ["routerLink", "/todos/Rese\u00F1as"], ["src", "../../../assets/8.jpg", "width", "100%"]], template: function PubliCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".titulo[_ngcontent-%COMP%]{font-size: 170%;font-family: 'Yanone Kaffeesatz', sans-serif; line-height: 25px;}\r\n.subtitulo[_ngcontent-%COMP%]{margin-top:5px; line-height:18px; font-size: 14px;}\r\nimg[_ngcontent-%COMP%]{border-radius: 5px; height: 280px; object-fit: cover; }\r\n.mr8[_ngcontent-%COMP%]{margin-right: -15px; }\r\n@media  (max-width: 1500px){\r\n  img[_ngcontent-%COMP%]{height: 80%;}\r\n.titulo[_ngcontent-%COMP%]{font-size: 130%; line-height: 20px;}\r\n  }\r\n@media  (max-width: 1200px){\r\n        img[_ngcontent-%COMP%]{height: 70%;}\r\n      }\r\n@media  (max-width: 1000px){\r\n\r\n}\r\n@media  (max-width: 800px){\r\n\r\n}\r\n@media  (max-width: 600px){\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsUUFBUSxlQUFlLENBQUMsNENBQTRDLEVBQUUsaUJBQWlCLENBQUM7QUFDeEYsV0FBVyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQzdELElBQUksa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFO0FBRTFELEtBQUssbUJBQW1CLEVBQUU7QUFFMUI7RUFDRSxJQUFJLFdBQVcsQ0FBQztBQUNsQixRQUFRLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztFQUN6QztBQUlGO1FBQ1EsSUFBSSxXQUFXLENBQUM7TUFDbEI7QUFFTjs7QUFFQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoicHVibGktY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXR1bG97Zm9udC1zaXplOiAxNzAlO2ZvbnQtZmFtaWx5OiAnWWFub25lIEthZmZlZXNhdHonLCBzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMjVweDt9XHJcbi5zdWJ0aXR1bG97bWFyZ2luLXRvcDo1cHg7IGxpbmUtaGVpZ2h0OjE4cHg7IGZvbnQtc2l6ZTogMTRweDt9XHJcbmltZ3tib3JkZXItcmFkaXVzOiA1cHg7IGhlaWdodDogMjgwcHg7IG9iamVjdC1maXQ6IGNvdmVyOyB9XHJcblxyXG4ubXI4e21hcmdpbi1yaWdodDogLTE1cHg7IH1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMTUwMHB4KXtcclxuICBpbWd7aGVpZ2h0OiA4MCU7fVxyXG4udGl0dWxve2ZvbnQtc2l6ZTogMTMwJTsgbGluZS1oZWlnaHQ6IDIwcHg7fVxyXG4gIH1cclxuXHJcblxyXG5cclxuQG1lZGlhICAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICAgIGltZ3toZWlnaHQ6IDcwJTt9XHJcbiAgICAgIH1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogMTAwMHB4KXtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxufVxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "vEVZ":
/*!****************************************!*\
  !*** ./src/app/pipes/filtrox4.pipe.ts ***!
  \****************************************/
/*! exports provided: Filtrox4Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filtrox4Pipe", function() { return Filtrox4Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Filtrox4Pipe {
    transform(value = [], num) {
        var pasaje = value;
        var indice = value.length;
        var indice1 = indice - num;
        return pasaje.slice(indice1, indice).reverse();
    }
}
Filtrox4Pipe.ɵfac = function Filtrox4Pipe_Factory(t) { return new (t || Filtrox4Pipe)(); };
Filtrox4Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filtrox4", type: Filtrox4Pipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/componentes/principal/principal.component */ "4oof");
/* harmony import */ var _app_componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/componentes/articulo/articulo.component */ "gAua");
/* harmony import */ var _app_componentes_todos_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/componentes/todos/todos.component */ "Fzpo");
/* harmony import */ var _app_componentes_muestra_muestra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/componentes/muestra/muestra.component */ "BRH/");
/* harmony import */ var _app_componentes_museo_museo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/componentes/museo/museo.component */ "gbJf");
/* harmony import */ var _app_componentes_videos_todos_videos_todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/componentes/videos-todos/videos-todos.component */ "TKYy");
/* harmony import */ var _app_componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/componentes/adm/adm.component */ "UmPh");
/* harmony import */ var _componentes_sinpubli_sinpubli_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/sinpubli/sinpubli.component */ "J1/Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: '', component: _app_componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_1__["PrincipalComponent"], pathMatch: "full" },
    { path: 'inicio', component: _app_componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_1__["PrincipalComponent"] },
    { path: 'museo', component: _app_componentes_museo_museo_component__WEBPACK_IMPORTED_MODULE_5__["MuseoComponent"] },
    { path: 'articulos/:_id', component: _app_componentes_articulo_articulo_component__WEBPACK_IMPORTED_MODULE_2__["ArticuloComponent"] },
    { path: 'todos/:categoria', component: _app_componentes_todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"] },
    { path: 'todos/:categoria', component: _app_componentes_videos_todos_videos_todos_component__WEBPACK_IMPORTED_MODULE_6__["VideosTodosComponent"] },
    { path: 'muestra', component: _app_componentes_muestra_muestra_component__WEBPACK_IMPORTED_MODULE_4__["MuestraComponent"] },
    { path: 'adm', component: _app_componentes_adm_adm_component__WEBPACK_IMPORTED_MODULE_7__["AdmComponent"] },
    { path: 'sin', component: _componentes_sinpubli_sinpubli_component__WEBPACK_IMPORTED_MODULE_8__["SinpubliComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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