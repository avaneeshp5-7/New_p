(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ads/ads.component.css":
/*!***************************************!*\
  !*** ./src/app/ads/ads.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ads/ads.component.html":
/*!****************************************!*\
  !*** ./src/app/ads/ads.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ads works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ads/ads.component.ts":
/*!**************************************!*\
  !*** ./src/app/ads/ads.component.ts ***!
  \**************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdsComponent = /** @class */ (function () {
    function AdsComponent() {
    }
    AdsComponent.prototype.ngOnInit = function () {
    };
    AdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(/*! ./ads.component.html */ "./src/app/ads/ads.component.html"),
            styles: [__webpack_require__(/*! ./ads.component.css */ "./src/app/ads/ads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdsComponent);
    return AdsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item\r\n{\r\n\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 20px;\r\n}\r\n\r\n#im1{\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n\r\n.clr1{\r\n    color: white;\r\n}\r\n\r\n.bbtne{\r\n   border-radius: 0px;\r\n   background-color: red;\r\n}\r\n\r\n/*  */\r\n\r\n.frmdiv{\r\n    margin-left: 80px;\r\n}\r\n\r\n.texbox{\r\n    padding: 7px;\r\n    width:200px;\r\n    height: 39px;\r\n    border: 1px solid silver;\r\n    color: rgb(112, 32, 8);\r\n    font-size:22px;\r\n    /* font-weight:-500; */\r\n    font-family: French Script MT;\r\n}\r\n\r\n.area{\r\n    margin-left: 60px;\r\n    width: 520px;\r\n    color: rgb(112, 32, 8);\r\n    font-size: 12px;\r\n    /* font-weight:-500; */\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n\r\n}\r\n\r\n.sett1{\r\n    margin-left: 60px;\r\n}\r\n\r\n.valsp{\r\n    font-size: 12px;\r\n    color: rgb(246, 139, 180);\r\n    position:absolute;\r\n    left: 100px;\r\n    font-size:22px;\r\n    /* font-weight:-500; */\r\n    font-family: French Script MT;\r\n}\r\n\r\n.valsp1{\r\n    font-size: 12px;\r\n    color: rgb(246, 139, 180);\r\n    position:absolute;\r\n    left: 100px;\r\n    font-size:22px;\r\n    /* font-weight:-500; */\r\n    font-family: French Script MT;\r\n}\r\n\r\n.stl{\r\n    color: white;\r\n    font-size: 20px;\r\n    /* margin-left: -70px; */\r\n\r\n}\r\n\r\n.spn{\r\n    color: white;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.tbox{\r\n    border-radius: 0px;\r\n    width: 200px;\r\n}\r\n\r\n.bbtnn{\r\n    width:100px;\r\n    border-radius: 0px;\r\n}\r\n\r\n.lbtn{\r\n    border-radius:0px;\r\n    width: 49px;\r\n\r\n}\r\n\r\n.ssppnn{\r\n    margin-left: 100px;\r\n}\r\n\r\n.lbtnn{\r\n    width: 100px;\r\n    border-radius: 0px;\r\n}\r\n\r\n.forrgot{\r\n    float: right;\r\n    margin-right: 50px;\r\n}\r\n\r\n.awesom{\r\n    color: white;\r\n    background-color: #26A640;\r\n    font-size: 36px;\r\n    height: 45px;\r\n    width: 45px;\r\n    padding-left: 10px;\r\n    padding-top: 2px;\r\n}\r\n\r\n.awesom1{\r\n    color: white;\r\n    background-color: #26A640;\r\n    font-size: 25px;\r\n    height: 45px;\r\n    width: 45px;\r\n    padding-left: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.regg{\r\n\r\n    color: rgb(246, 139, 180);\r\n    /* font-size: 12px; */\r\n    font-size:22px;\r\n    /* font-weight:-500; */\r\n    font-family: French Script MT;\r\n\r\n}\r\n\r\n/* Seacrch */\r\n\r\n.SearchIcon\r\n{\r\n    color:#fff;\r\n\r\n}\r\n\r\n.SearchButton\r\n{\r\n    background-color:rgb(245, 99, 1);\r\n    border-radius:1px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.SearchButton:hover{\r\n    background-color:#C4161C;\r\n}\r\n\r\n.SearchBar{\r\n    border-radius: 0px;\r\n    margin-top: 15px;\r\n}\r\n\r\n/* MultiDrop */\r\n\r\n.dropdown-submenu {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-submenu>.dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -6px;\r\n    margin-left: -1px;\r\n    border-radius: 0 6px 6px 6px;\r\n}\r\n\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown-submenu>a:after {\r\n    display: block;\r\n    content: \" \";\r\n    float: right;\r\n    width: 0;\r\n    height: 0;\r\n    border-color: transparent;\r\n    border-style: solid;\r\n    border-width: 5px 0 5px 5px;\r\n    border-left-color: #ccc;\r\n    margin-top: 5px;\r\n    margin-right: -10px;\r\n}\r\n\r\n.dropdown-submenu:hover>a:after {\r\n    border-left-color: #fff;\r\n}\r\n\r\n.dropdown-submenu.pull-left {\r\n    float: none;\r\n}\r\n\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n    left: -100%;\r\n    margin-left: 10px;\r\n    border-radius: 6px 0 6px 6px;\r\n}\r\n\r\n.fa{\r\n    font-size: 16px;\r\n    padding: 0px;\r\n    margin-top: 5px;\r\n\r\n}\r\n\r\n/*=======================================Search box====================================== */\r\n\r\n.search-form .form-group {\r\n    float: right !important;\r\n    transition: all 0.35s, border-radius 0s;\r\n    width: 350px;\r\n    height: 40px;\r\n    margin-top: 20px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\r\n    border-radius: 25px;\r\n    border: 1px solid #ccc;\r\n    font-size: 20px;\r\n  }\r\n\r\n.search-form .form-group input.form-control {\r\n    padding-right: 30px;\r\n    border: 0 none;\r\n    background: transparent;\r\n    box-shadow: none;\r\n    display:block;\r\n  }\r\n\r\n.search-form .form-group input.form-control::-webkit-input-placeholder {\r\n    display: none;\r\n  }\r\n\r\n.search-form .form-group input.form-control:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    display: none;\r\n  }\r\n\r\n.search-form .form-group input.form-control::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    display: none;\r\n  }\r\n\r\n.search-form .form-group input.form-control:-ms-input-placeholder {\r\n    display: none;\r\n  }\r\n\r\n.tt{\r\n      border-radius: 0px;\r\n      border: 1px solid silver;\r\n      height: 40px;\r\n      color: rgb(112, 32, 8);\r\n      font-size:22px;\r\n      /* font-weight:-500; */\r\n      font-family: French Script MT;\r\n  }\r\n\r\n.ltt\r\n {\r\n    color: rgb(112, 32, 8);\r\n    font-size:22px;\r\n    /* font-weight:-500; */\r\n    padding: 5px;\r\n    font-family: French Script MT;\r\n }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n <!-- <app-header-menu></app-header-menu> -->\r\n  <div class=\"container-fluid\" style=\"background-color:rgb(158, 198, 233);\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 col-sm-12 col-xm-12 \">\r\n        <img src=\"../assets/NGX_Logo2016_Wide.png\" width=\"170\" height=\"70px;\">\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12 col-xm-12 \"  >\r\n        <form action=\"\" class=\"search-form\">\r\n          <div class=\"form-group has-feedback\">\r\n          <input type=\"text\" (keyup)=\"search_keyup()\"  class=\"form-control\" name=\"search\" id=\"search\" placeholder=\"search\" [(ngModel)]=\"txtsearch\" (keyup)=\"fun_search_product()\">\r\n        <div *ngIf=\"tmpforsearch\" (mouseover)=\"search_keyup()\"  style=\"background-color:white;overflow:auto;max-height:500px;z-index:1001;position:absolute;border-radius:10px;box-shadow:0px 2px 10px black;padding:5px;min-width:600px\">\r\n        <img src=\"../assets/close.png\" width=\"30px\" (click)=\"fun_search_out()\" style=\"position: fixed\">\r\n        <br>\r\n          <div *ngFor=\"let ser of searchdata\" style='padding:0px;cursor:pointer;background-color:honeydew' (mouseover)=\"fun_over_style(this)\" (mouseout)=\"fun_out_style(this)\" (click)=\"searchDetial(ser._id)\">\r\n             <img src=\"../../assets/uploads/{{ser.images}}\"style=\"float:right;width:100px;height:80px\">\r\n           <h4 style=\"color:crimson\"> {{ser.pname}}</h4>\r\n           <b> {{ser.pprice | currency:'INR'}}</b>\r\n            <span style=\"background-color:'{{ser.pcolor}}'\">....</span>\r\n            <br>\r\n           <span style=\"color:darkslategray;font-size:15px\"> {{ser.pdesc}}</span>\r\n            <hr>\r\n            </div>\r\n        </div>\r\n        </div>\r\n      </form>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xm-12\">\r\n        <span class=\"fa fa-shopping-cart dropdown\" data-toggle=\"dropdown\" aria-hidden=\"true\" style=\"width:50px;color:rgb(250, 242, 242);font-size:20px;float: right;margin-top:22px;cursor: pointer;background-color: plum;width: 30px;height: 30px;padding: 5px;margin-top: 18px;box-shadow: 0px 0px 8px #fff;border-radius: 4px;\"> &nbsp;&nbsp;\r\n          &nbsp;\r\n         \r\n          <span class=\"dropdown-menu dropdown-menu-right text-center\" style=\"width: auto;border-radius: 0px;margin-right: 50px;margin-top: 20px;box-shadow: 0px 0px 10px black;border-radius: 4px;\">\r\n            <span class=\"dropdown-brand\" href=\"#\">\r\n              <h4>About Cart</h4>\r\n            </span>\r\n            <hr>\r\n              <input type=\"button\" class=\"btn btn-primary\" value=\"Clear Item\" (click)=\"fun_clear_cart_detail()\" style=\"border-radius: 0px; font-family: arial\">    \r\n               <br><br>\r\n              <input type=\"button\" class=\"btn btn-primary\" value=\"Show Items\" (click)=\"fun_cart_detail()\" style=\"border-radius: 0px; font-family: arial\">\r\n          </span>\r\n        </span>\r\n        <button class=\"text-center\"  style=\"color:white;width: 30px;height: 30px; border-radius: 50%;background-color: rgb(34, 238, 85);border: 3px solid rgb(34, 238, 85); float: right;margin-top: 19px;margin-right:4px;box-shadow: 0px 0px 8px #fff;border-radius: 4px;\"\r\n          (click)=\"fun_cart_detail()\">\r\n          {{msg}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <nav class=\"navbar navbar-expand-md  navbar-dark bg-dark\">\r\n    <span class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </span>\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" href=\"\" style=\"color:white; font-size:15px;\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" *ngFor=\"let cat of getcat\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\" style=\"color:white; font-size:15px;\">\r\n            {{cat.cname}}\r\n          </a>\r\n          <ul class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\r\n            <li class=\"dropdown-submenu\" *ngFor=\"let subcat of getsub\">\r\n              <a class=\"dropdown-item\" *ngIf=\"cat._id==subcat.catid\">{{subcat.scatname}}</a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li class=\"nav-item\" *ngFor=\"let ssub of ssubdata\">\r\n                  <a class=\"dropdown-item\" [routerLink]=\"['/protemp', ssub]\" *ngIf=\"subcat._id == ssub.scatid\">{{ssub.subscatname}}</a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <form class=\"form-inline\">\r\n      <span class=\"lgn_sup_btn\">\r\n        <!-- *ngIf=\"login_display\" -->\r\n        <i class=\"fa fa-user stl\" style=\"color: mediumspringgreen\"></i>&nbsp;&nbsp;\r\n        <span href=\"#myModal\" class=\"trigger-btn spn\" id=\"snupp\" (click)=\"toRegister()\">SignUp</span>&nbsp;&nbsp;&nbsp;\r\n        <i class=\"fa fa-sign-in stl\" style=\"color: mediumspringgreen\"></i> &nbsp;&nbsp;\r\n        <span href=\"#myModal1\" class=\"trigger-btn spn\"   (click)=\"toLogin()\">LogIn</span>\r\n      </span>\r\n      <span class=\"showwelcome\">\r\n        <!--*ngIf=\"welcome_display\" -->\r\n        \r\n        <span style=\"color:rgb(7, 138, 161)\" *ngIf=\"dis\">\r\n          Welcome\r\n          <span style=\"color:rgb(16, 215, 241)\" (click)=\"showUserProfile()\">{{fullname}}</span>\r\n          <span class=\"dropdown\" title=\"User Profiles\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" >\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right text-center  drpprof \" style=\"margin-right:200px;\" style=\"width: 250px;box-shadow: 0px 0px 10px black;\" >\r\n              <span class=\"dropdown-brand\" href=\"#\"><i class=\"fa fa-user-circle\" style=\"color: rgb(143, 160, 116);font-size: 40px;\"></i></span>\r\n              <hr>\r\n              <a class=\"dropdown-item\" href=\"#\">{{fullname}}</a>\r\n              <a class=\"dropdown-item\" href=\"#\">{{contact}}</a> \r\n              <a class=\"dropdown-item\" href=\"#\">{{email}}</a><br>\r\n              <button  class=\"btn btn-primary text-center\" style=\"font-size:13px ;border-radius:0px;font-size: 16px;width: 164px\" (click)=\"proedit(pp)\"><i class=\"fa fa-edit\"></i>&nbsp; Profile</button>&nbsp;&nbsp;\r\n              <button  class=\"btn btn-primary text-center\" style=\"font-size:13px ;border-radius:0px;font-size: 16px;margin-top: 8px;\" (click)=\"shopp_histry()\"><i class=\"fa fa-folder-open\"></i>&nbsp; Shopping Histry</button>&nbsp;&nbsp;\r\n              <button  class=\"btn btn-primary text-center\" style=\"font-size:13px ;border-radius:0px;font-size: 16px ;width: 164px ;margin-top: 8px;margin-left: -8px;\" (click)=\"logOut()\"><i class=\"fa fa-sign-out\"></i>&nbsp;LogOut</button>\r\n            <br><br>\r\n            </div>\r\n          </span>&nbsp;&nbsp;\r\n        </span>\r\n      </span>\r\n    </form>\r\n  </nav>\r\n  <br>\r\n  <div>\r\n    <router-outlet>\r\n    </router-outlet>\r\n  </div>\r\n  <app-footer>\r\n  </app-footer>\r\n\r\n</body>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-cart-image-service.service */ "./src/app/show-cart-image-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(cobj, show_cart_icon_service, rout) {
        var _this = this;
        this.cobj = cobj;
        this.show_cart_icon_service = show_cart_icon_service;
        this.rout = rout;
        this.msg = "0";
        this.searchdata = "abcd";
        this.login_display = true;
        this.welcome_display = false;
        this.dis = false;
        this.tmpforsearch = false;
        this.bcolor = "blue";
        this.title = 'app';
        this.rpage = "invisible";
        this.reg = "rsh"; /*bodystate="bshow" */
        this.lpage = "hide";
        this.catcab = function (dt) {
            console.log('menu data', dt);
            _this.getcat = JSON.parse(dt._body);
            _this.cobj.post("/category/subcat").subscribe(_this.subcback);
        };
        this.subcback = function (dt) {
            _this.getsub = JSON.parse(dt._body);
            _this.cobj.get("/category/ssub").subscribe(_this.brdbck);
            _this.cobj.get("/category/products").subscribe(_this.procback);
        };
        this.brdbck = function (dt) {
            _this.ssubdata = JSON.parse(dt._body);
            //console.log(this.ssubdata)
        };
        this.procback = function (dt) {
            _this.prodata = JSON.parse(dt._body);
        };
        this.getCatRec();
    }
    AppComponent.prototype.fun_search_product = function () {
        var _this = this;
        //alert( this.txtsearch)
        if (this.txtsearch.length == 0) {
            this.tmpforsearch = false;
        }
        else {
            var ob = { pname: this.txtsearch };
            this.cobj.post("/searchapi/searchproduct", ob).subscribe(function (dt) {
                _this.searchdata = JSON.parse(dt._body);
            });
        }
    };
    AppComponent.prototype.search_keyup = function () {
        this.tmpforsearch = true;
    };
    AppComponent.prototype.fun_over_style = function (t) {
        t.style.backgroundColor = "lightblue";
    };
    AppComponent.prototype.fun_out_style = function (t) {
        t.style.backgroundColor = "lightblue";
    };
    AppComponent.prototype.fun_search_out = function () {
        this.tmpforsearch = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usid = localStorage.getItem("userid");
        if (localStorage.getItem("email") != null) {
            this.email = localStorage.getItem("email");
            this.fullname = localStorage.getItem("fullname");
            this.dis = true;
            this.contact = localStorage.getItem("Contact");
        }
        /////////// For showing Cart item in Cart Icons
        this.show_cart_icon_service.currentMessage.subscribe(function (message) { return _this.msg = message; });
        if (localStorage.getItem("login_check") != null) {
            this.lgn_sup_btn();
            this.showwelcome();
        }
        else {
            this.login_display = true;
            this.welcome_display = true;
        }
    };
    AppComponent.prototype.funReg = function () {
        this.rpage = "visible";
        this.lpage = "hide";
    };
    AppComponent.prototype.logReg = function () {
        this.lpage = "show";
        this.rpage = "invisible";
    };
    AppComponent.prototype.getCatRec = function () {
        this.cobj.get("/category/getcato").subscribe(this.catcab);
    };
    AppComponent.prototype.logOut = function () {
        localStorage.removeItem("email");
        localStorage.removeItem("Contact");
        localStorage.removeItem("fullname");
        localStorage.removeItem("userid");
        localStorage.removeItem("userdata");
        localStorage.removeItem("login_check");
        this.rout.navigateByUrl("/");
        window.location.href = "";
    };
    AppComponent.prototype.showUserProfile = function () {
        //alert("j query")
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".drpprof").show("slow");
    };
    AppComponent.prototype.proedit = function (userdata) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".drpprof").hide("slow");
        this.rout.navigateByUrl("/profile");
    };
    AppComponent.prototype.fun_cart_detail = function () {
        //alert("Hi")
        this.rout.navigateByUrl('/cartdet');
    };
    AppComponent.prototype.fun_clear_cart_detail = function () {
        if (localStorage.getItem("cart_items")) {
            localStorage.removeItem("cart_items");
            this.show_cart_icon_service.changeMessage(null);
            alert("Cart is empty");
            window.location.href = "";
        }
    };
    AppComponent.prototype.lgn_sup_btn = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".lgn_sup_btn").hide(100);
    };
    AppComponent.prototype.showwelcome = function () {
        //alert("hii ")
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".showwelcome").show(100);
    };
    //================== Search detals =====================//
    AppComponent.prototype.searchDetial = function (pid) {
        this.rout.navigateByUrl("/prodetail;proid=" + pid);
        this.fun_search_out();
    };
    AppComponent.prototype.shopp_histry = function () {
        this.rout.navigateByUrl("/shopp;userid=" + this.usid);
    };
    AppComponent.prototype.checkPass = function (rpwd) {
        if (rpwd != this.rpassword) {
            alert(" Password is not matched !");
        }
        else {
            this.psms = "";
        }
    };
    AppComponent.prototype.toLogin = function () {
        this.rout.navigateByUrl('/user-login-securly');
    };
    AppComponent.prototype.toRegister = function () {
        this.rout.navigateByUrl('/new-user-regitration');
    };
    AppComponent.prototype.funforgote = function () {
        this.rout.navigateByUrl("/send-otp-on");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"])),
        __metadata("design:paramtypes", [Object, _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_3__["ShowCartImageServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _producttemplate_producttemplate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./producttemplate/producttemplate.component */ "./src/app/producttemplate/producttemplate.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _image_slide_image_slide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-slide/image-slide.component */ "./src/app/image-slide/image-slide.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");
/* harmony import */ var _new_arival_new_arival_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-arival/new-arival.component */ "./src/app/new-arival/new-arival.component.ts");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ads/ads.component */ "./src/app/ads/ads.component.ts");
/* harmony import */ var _buttons_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./buttons.directive */ "./src/app/buttons.directive.ts");
/* harmony import */ var _button_directive_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./button-directive.directive */ "./src/app/button-directive.directive.ts");
/* harmony import */ var _product_dtail_product_dtail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-dtail/product-dtail.component */ "./src/app/product-dtail/product-dtail.component.ts");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var angular2_image_zoom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-image-zoom */ "./node_modules/angular2-image-zoom/index.js");
/* harmony import */ var angular2_image_zoom__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_image_zoom__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-slider */ "./node_modules/ngx-slider/ngx-slider.es5.js");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-rating */ "./node_modules/ngx-rating/index.js");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ngx_rating__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./show-cart-image-service.service */ "./src/app/show-cart-image-service.service.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./upcomming/upcomming.component */ "./src/app/upcomming/upcomming.component.ts");
/* harmony import */ var _show_cart_details_show_cart_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./show-cart-details/show-cart-details.component */ "./src/app/show-cart-details/show-cart-details.component.ts");
/* harmony import */ var _product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./product-slider/product-slider.component */ "./src/app/product-slider/product-slider.component.ts");
/* harmony import */ var _purchagedetails_purchagedetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./purchagedetails/purchagedetails.component */ "./src/app/purchagedetails/purchagedetails.component.ts");
/* harmony import */ var _shoppinghistry_shoppinghistry_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shoppinghistry/shoppinghistry.component */ "./src/app/shoppinghistry/shoppinghistry.component.ts");
/* harmony import */ var _moblile_moblile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./moblile/moblile.component */ "./src/app/moblile/moblile.component.ts");
/* harmony import */ var _header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./header-menu/header-menu.component */ "./src/app/header-menu/header-menu.component.ts");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./otp/otp.component */ "./src/app/otp/otp.component.ts");
/* harmony import */ var _newpassord_newpassord_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./newpassord/newpassord.component */ "./src/app/newpassord/newpassord.component.ts");
/* harmony import */ var _send_otp_send_otp_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./send-otp/send-otp.component */ "./src/app/send-otp/send-otp.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _app_userauth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../app/userauth.service */ "./src/app/userauth.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var robj = [
    { path: "", component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_17__["FirstPageComponent"] },
    { path: "profile", component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_22__["UserprofileComponent"], canActivate: [_app_userauth_service__WEBPACK_IMPORTED_MODULE_35__["UserauthService"]] },
    { path: "upcon", component: _upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_23__["UpcommingComponent"] },
    { path: "protemp", component: _producttemplate_producttemplate_component__WEBPACK_IMPORTED_MODULE_7__["ProducttemplateComponent"] },
    { path: "prodetail", component: _product_dtail_product_dtail_component__WEBPACK_IMPORTED_MODULE_16__["ProductDtailComponent"] },
    { path: "cartdet", component: _show_cart_details_show_cart_details_component__WEBPACK_IMPORTED_MODULE_24__["ShowCartDetailsComponent"], canActivate: [_app_userauth_service__WEBPACK_IMPORTED_MODULE_35__["UserauthService"]] },
    { path: "shopp", component: _shoppinghistry_shoppinghistry_component__WEBPACK_IMPORTED_MODULE_27__["ShoppinghistryComponent"], canActivate: [_app_userauth_service__WEBPACK_IMPORTED_MODULE_35__["UserauthService"]] },
    { path: "p_details", component: _purchagedetails_purchagedetails_component__WEBPACK_IMPORTED_MODULE_26__["PurchagedetailsComponent"], canActivate: [_app_userauth_service__WEBPACK_IMPORTED_MODULE_35__["UserauthService"]] },
    { path: "mobil", component: _moblile_moblile_component__WEBPACK_IMPORTED_MODULE_28__["MoblileComponent"] },
    { path: "otp_enter", component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_30__["OtpComponent"] },
    { path: "gen_new_pass", component: _newpassord_newpassord_component__WEBPACK_IMPORTED_MODULE_31__["NewpassordComponent"] },
    { path: "send-otp-on", component: _send_otp_send_otp_component__WEBPACK_IMPORTED_MODULE_32__["SendOtpComponent"] },
    { path: "create-new-password", component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__["ResetPasswordComponent"] },
    { path: "user-login-securly", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "new-user-regitration", component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_34__["RegistrationComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_36__["PageNotFoundComponent"] },
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(robj);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _producttemplate_producttemplate_component__WEBPACK_IMPORTED_MODULE_7__["ProducttemplateComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _image_slide_image_slide_component__WEBPACK_IMPORTED_MODULE_10__["ImageSlideComponent"],
                _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_11__["NewProductComponent"],
                _new_arival_new_arival_component__WEBPACK_IMPORTED_MODULE_12__["NewArivalComponent"],
                _ads_ads_component__WEBPACK_IMPORTED_MODULE_13__["AdsComponent"],
                _buttons_directive__WEBPACK_IMPORTED_MODULE_14__["ButtonsDirective"],
                _button_directive_directive__WEBPACK_IMPORTED_MODULE_15__["ButtonDirectiveDirective"],
                _product_dtail_product_dtail_component__WEBPACK_IMPORTED_MODULE_16__["ProductDtailComponent"],
                _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_17__["FirstPageComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_22__["UserprofileComponent"],
                _upcomming_upcomming_component__WEBPACK_IMPORTED_MODULE_23__["UpcommingComponent"],
                _show_cart_details_show_cart_details_component__WEBPACK_IMPORTED_MODULE_24__["ShowCartDetailsComponent"],
                _product_slider_product_slider_component__WEBPACK_IMPORTED_MODULE_25__["ProductSliderComponent"],
                _purchagedetails_purchagedetails_component__WEBPACK_IMPORTED_MODULE_26__["PurchagedetailsComponent"],
                _shoppinghistry_shoppinghistry_component__WEBPACK_IMPORTED_MODULE_27__["ShoppinghistryComponent"],
                _moblile_moblile_component__WEBPACK_IMPORTED_MODULE_28__["MoblileComponent"],
                _header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_29__["HeaderMenuComponent"],
                _otp_otp_component__WEBPACK_IMPORTED_MODULE_30__["OtpComponent"],
                _newpassord_newpassord_component__WEBPACK_IMPORTED_MODULE_31__["NewpassordComponent"],
                _send_otp_send_otp_component__WEBPACK_IMPORTED_MODULE_32__["SendOtpComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__["ResetPasswordComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_34__["RegistrationComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_36__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], router, angular2_image_zoom__WEBPACK_IMPORTED_MODULE_18__["ImageZoomModule"], ngx_slider__WEBPACK_IMPORTED_MODULE_19__["SliderModule"], ngx_rating__WEBPACK_IMPORTED_MODULE_20__["RatingModule"]
            ],
            providers: [_show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_21__["ShowCartImageServiceService"], _app_userauth_service__WEBPACK_IMPORTED_MODULE_35__["UserauthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/button-directive.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/button-directive.directive.ts ***!
  \***********************************************/
/*! exports provided: ButtonDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirectiveDirective", function() { return ButtonDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonDirectiveDirective = /** @class */ (function () {
    function ButtonDirectiveDirective(rend, ele) {
        this.rend = rend;
        this.ele = ele;
        rend.setStyle(ele.nativeElement, "color", "red"),
            rend.setStyle(ele.nativeElement, "background-color", "green");
    }
    ButtonDirectiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtonDirective]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ButtonDirectiveDirective);
    return ButtonDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/buttons.directive.ts":
/*!**************************************!*\
  !*** ./src/app/buttons.directive.ts ***!
  \**************************************/
/*! exports provided: ButtonsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsDirective", function() { return ButtonsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsDirective = /** @class */ (function () {
    function ButtonsDirective() {
    }
    ButtonsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appButtons]'
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsDirective);
    return ButtonsDirective;
}());



/***/ }),

/***/ "./src/app/first-page/first-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/first-page/first-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/first-page/first-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/first-page/first-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-image-slide>\r\n</app-image-slide>\r\n<br>\r\n<app-new-product>   \r\n</app-new-product>\r\n<br>\r\n<app-product-slider>\r\n</app-product-slider>\r\n<app-upcomming>\r\n</app-upcomming><br>\r\n<app-moblile>\r\n</app-moblile>\r\n"

/***/ }),

/***/ "./src/app/first-page/first-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/first-page/first-page.component.ts ***!
  \****************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstPageComponent = /** @class */ (function () {
    function FirstPageComponent() {
    }
    FirstPageComponent.prototype.ngOnInit = function () {
    };
    FirstPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-page',
            template: __webpack_require__(/*! ./first-page.component.html */ "./src/app/first-page/first-page.component.html"),
            styles: [__webpack_require__(/*! ./first-page.component.css */ "./src/app/first-page/first-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstPageComponent);
    return FirstPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nsection {\r\n    padding: 60px 0;\r\n    height:200px ;\r\n}\r\n#footer {\r\n    \r\n    background-color: rgb(75, 82, 88);\r\n}\r\n#footer a {\r\n    color: orange;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n.mrg{\r\n    padding: 10px;\r\n    width: 30px;   \r\n}\r\n.poss{\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n\r\n<div style=\"background-color: rgb(75, 82, 88);height: auto;\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\" col-md-4 col-xs-12 col-sm-12  mt-2 mt-sm-2 text-center\">\r\n\t\t\t<i class=\"fa fa-cogs\" style=\"color: rgb(185, 134, 233)\"></i> <span  style=\"color: rgb(185, 134, 233)\"> Services</span>\r\n\t\t\t<br>\r\n\t\t\t<ul class=\"list-unstyled quick-links\" style=\"text-align: justify;\">\r\n\t\t\t\t<li style=\"margin-left: 175px;\">\r\n\t\t\t\t\t<a href=\"#\" style=\"color: rgb(226, 223, 223)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-angle-double-right\" style=\"color: rgb(226, 223, 223)\"></i>&nbsp;Home</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li style=\"margin-left: 175px;\">\r\n\t\t\t\t\t<a href=\"#\" style=\"color: rgb(226, 223, 223)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-angle-double-right\" style=\"color: rgb(226, 223, 223)\"></i>&nbsp;About</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li style=\"margin-left: 175px;\">\r\n\t\t\t\t\t<a href=\"#\" style=\"color: rgb(226, 223, 223)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-angle-double-right\" style=\"color: rgb(226, 223, 223)\"></i>&nbsp;FAQ</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\r\n\t\t</div>\r\n\t\t<div class=\" col-md-4 col-xs-12 col-sm-12  mt-2 mt-sm-2 text-center\">\r\n\t\t\t<i class=\"fa fa-phone\" style=\"color: rgb(185, 134, 233)\"></i> <span style=\"color: rgb(185, 134, 233)\"> Help & Contact </span>\r\n\t\t\t<br><i class=\"fa fa-mobile-phone\" style=\"color: rgb(226, 223, 223);margin-top: 7px;font-size: 20px;\">&nbsp;</i><span style=\"color: rgb(226, 223, 223)\">+919598219514</span>\r\n\t\t\t<br><i class=\"fa fa-envelope\" style=\"color: rgb(226, 223, 223);margin-top: 7px;font-family: arial\">&nbsp;Avi507@gmail.com</i>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\" col-md-4 col-xs-12 col-sm-12  mt-2 mt-sm-2 text-center\">\r\n\t\t\t<i class=\"fa fa-map-marker\" style=\"color: rgb(226, 223, 223)\"></i><span style=\"color: rgb(185, 134, 233)\"> Location </span></div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center \">\r\n\t\t\t<img src=\"../../assets/Payment.png\" class=\"img-responsive poss\">\r\n\t\t\t<img src=\"../../assets/1.png\" class=\"img-responsive poss\">\r\n\t\t\t<img src=\"../../assets/3.png\" class=\"img-responsive poss\">\r\n\t\t\t<img src=\"../../assets/4.png\" class=\"img-responsive poss\">\r\n\t\t\t<p style=\"color: rgb(226, 223, 223)\">National Transaction Corporation is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp,\r\n\t\t\t\tMinneapolis, MN]</p>\r\n\t\t\t<div>\r\n\t\t\t\t<a href=\"#\" style=\"  border-radius: 70%; background:#3B5998; color: white; margin: 5px; padding: 2px;\">\r\n\t\t\t\t\t<i class=\"fa fa-facebook mrg\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\" style=\" border-radius: 70%; background: #55ACEE; color: white; margin: 5px; padding: 2px;\">\r\n\t\t\t\t\t<i class=\"fa fa-twitter mrg\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\" style=\" border-radius: 70%; background: #dd4b39; color: white; margin: 5px; padding: 2px;\">\r\n\t\t\t\t\t<i class=\"fa fa-google mrg\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\" style=\" border-radius: 70%; background: #007bb5; color: white; margin: 5px; padding: 2px;\">\r\n\t\t\t\t\t<i class=\"fa fa-linkedin mrg\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\" style=\" border-radius: 70%; background: #bb0000; color: white; margin: 5px; padding: 2px;\">\r\n\t\t\t\t\t<i class=\"fa fa-youtube mrg\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<p class=\"h6\" style=\"color:#e4c0c0\" >copy All right Reversed.\r\n\t\t\t\t<a class=\"text-green ml-2\" href=\"https://www.sunlimetech.com\" target=\"_blank\">Avaneesh Prajapti</a>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header-menu/header-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/header-menu/header-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heah{\r\n    /* background-color: rgb(235, 36, 36); */\r\n    padding: 10px;\r\n    color: white;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n}\r\nspan{\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    color: white\r\n}\r\na:hover{\r\n text-decoration: none;\r\n}\r\na{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/header-menu/header-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/header-menu/header-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: rgb(83, 87, 92)\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-4\">\r\n      <span class=\"heah\">\r\n        <i>Welcome  To My VAP Cart Club</i>\r\n      </span>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <a href=\"#\">\r\n        <span class=\"fa fa-map-marker\"></span> Shopp locator\r\n      </a>&nbsp;&nbsp;\r\n      <a href=\"#\">\r\n        <span class=\"fa fa-truck\" aria-hidden=\"true\"></span> Track Order</a>&nbsp; &nbsp;\r\n      <a href=\"#\">\r\n        <span class=\"fa fa-phone\"></span>+9 999 999 999</a>&nbsp;&nbsp;\r\n      <a href=\"#\">\r\n        <span class=\"fa fa-photo\"></span> Gallery</a> &nbsp;&nbsp;\r\n      <a href=\"#\">\r\n        <span class=\"fa fa-thumbs-o-up\"></span> Like Us</a>&nbsp;&nbsp;\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header-menu/header-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/header-menu/header-menu.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuComponent", function() { return HeaderMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent() {
    }
    HeaderMenuComponent.prototype.ngOnInit = function () {
    };
    HeaderMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-menu',
            template: __webpack_require__(/*! ./header-menu.component.html */ "./src/app/header-menu/header-menu.component.html"),
            styles: [__webpack_require__(/*! ./header-menu.component.css */ "./src/app/header-menu/header-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());



/***/ }),

/***/ "./src/app/image-slide/image-slide.component.css":
/*!*******************************************************!*\
  !*** ./src/app/image-slide/image-slide.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/image-slide/image-slide.component.html":
/*!********************************************************!*\
  !*** ./src/app/image-slide/image-slide.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\" style=\"margin-top:-23px;\">\r\n    <!-- Indicators -->\r\n    <ul class=\"carousel-indicators\">\r\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"3\"></li>\r\n    </ul>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img src=\"../../assets/sl4.jpg\" alt=\"First slide\" style=\"height: 400px;width: 100%\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../../assets/sl5.jpg\" alt=\"Second slide\" style=\"height: 400px;width: 100%\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../../assets/baner/susm.jpg\" alt=\"Third slide\" style=\"height: 400px;width: 100%\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../../assets/sl2.jpg\" alt=\"Third slide\" style=\"height: 400px;width: 100%\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\"></span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\"></span>\r\n    </a>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/image-slide/image-slide.component.ts":
/*!******************************************************!*\
  !*** ./src/app/image-slide/image-slide.component.ts ***!
  \******************************************************/
/*! exports provided: ImageSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSlideComponent", function() { return ImageSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-slider */ "./node_modules/ngx-slider/ngx-slider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageSlideComponent = /** @class */ (function () {
    function ImageSlideComponent() {
        this.slider = new ngx_slider__WEBPACK_IMPORTED_MODULE_1__["Slider"]();
        this.slider.config.loop = true;
        this.slider.config.showPreview = false;
    }
    ImageSlideComponent.prototype.ngOnInit = function () {
        //   $(document).ready(function(){
        //     $("#div1").cycle({fx:"shuffle"})
        // });
        //   const slideItems = [
        //     { src: '/assets/baner/susm.jpg'  },
        //     { src: '/assets/baner/banner4.jpg'  },
        //     { src: '/assets/sl4.jpg' },
        //     { src: '/assets/baner/susm.jpg' },
        //     { src: '/assets/sl4.jpg' }
        //   ];
        //   this.slider.items = slideItems;
        // }
    };
    ImageSlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-slide',
            template: __webpack_require__(/*! ./image-slide.component.html */ "./src/app/image-slide/image-slide.component.html"),
            styles: [__webpack_require__(/*! ./image-slide.component.css */ "./src/app/image-slide/image-slide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageSlideComponent);
    return ImageSlideComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content{\r\n  box-shadow:   0px 0px 8px rgb(156, 163, 155);\r\n  border: 1px solid silver;\r\n}\r\n.ltt:focus{\r\n  outline: none;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n  </div>\r\n  <div class=\"col-md-4\" >\r\n    <div class=\"col-lg-12 col-sm-12 col-12 main-section\">\r\n      <div class=\"modal-content\" >\r\n        <div class=\"col-lg-12 col-sm-12 col-12 user-img\" style=\"text-align: center\"><br>\r\n          <img src=\"assets/man.png\" style=\"width: 50px;height: 50px\">\r\n        </div><br>\r\n        <div class=\"col-lg-12 col-sm-12 col-12 form-input text-center\">\r\n          <form name=\"frm1\" #lform=\"ngForm\">\r\n            <div class=\"row text-center\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <br>\r\n                  <div>\r\n                    <input type=\"text\" class=\"form-control ltt\" name=\"log1\" [(ngModel)]=\"usrname\" placeholder=\"Enter User ID\" #up=\"ngModel\"\r\n                           required style=\"border-radius: 0px\" />\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"input-group text-center\">\r\n                    <input type=\"password\" class=\"form-control ltt\"  name=\"log2\" [(ngModel)]=\"upass\" placeholder=\"Enter Password\" #uid=\"ngModel\"\r\n                           required style=\"border-radius: 0px ; width: 300px;\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"up.errors && up.errors.required\" class=\"valsp1\">{{m1}}</span>\r\n            <span *ngIf=\"uid.errors && uid.errors.required\" class=\"valsp\">{{m2}}</span>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <a (click)=\"funforgote()\" style=\"color:rgb(176, 231, 213);cursor: pointer;\" data-dismiss=\"modal\">Fogot password ?</a>\r\n                <input type=\"button\" value=\"Google+\" class=\"btn btn-danger lbtnn\" (click)=\"google_login()\" style=\"float: right;\" >&nbsp;&nbsp;\r\n                <input type=\"button\" value=\"LogIn\" class=\"btn btn-success lbtnn\" (click)=\"funlog(lform)\" style=\"float: right;margin-right: 8px;\">&nbsp;&nbsp;\r\n                <!-- <input type=\"button\" value=\"Reset\" class=\"btn btn-danger lbtnn\" data-dismiss=\"modal\" style=\"float: right;margin-right: 7px;\" > -->\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {ShowCartImageServiceService} from "./show-cart-image-service.service";


var LoginComponent = /** @class */ (function () {
    function LoginComponent(cobj, rout) {
        var _this = this;
        this.cobj = cobj;
        this.rout = rout;
        this.logcback = function (dt) {
            _this.userdet = (JSON.parse(dt._body));
            if (_this.userdet.length == 1) {
                localStorage.setItem("login_check", "1");
                localStorage.setItem("userdata", _this.userdet);
                localStorage.setItem("fullname", _this.userdet[0].fullname);
                localStorage.setItem("email", _this.userdet[0].email);
                localStorage.setItem("Contact", _this.userdet[0].Contact);
                localStorage.setItem("userid", _this.userdet[0]._id);
                _this.email = localStorage.getItem("email");
                _this.fullname = localStorage.getItem("fullname");
                alert('User LoggedIn');
                window.location.href = "";
            }
            else {
                alert("try agin ! !");
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.funlog = function (ldata) {
        if (ldata.valid == false) {
            this.m1 = " * Don't forget any !";
            this.m2 = " * Don't forget any !";
            this.usrname = "";
            this.upass = "";
        }
        else {
            var logData = { userid: this.usrname, password: this.upass };
            this.cobj.post("/register/logData", logData).subscribe(this.logcback);
        }
    };
    LoginComponent.prototype.funforgote = function () {
        this.rout.navigateByUrl("/send-otp-on");
    };
    LoginComponent.prototype.google_login = function () {
        this.cobj.get("/register/google_log").subscribe(function (dt) {
            alert('Logged');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/moblile/moblile.component.css":
/*!***********************************************!*\
  !*** ./src/app/moblile/moblile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\r\n   \r\n    transition: -webkit-transform .4s;\r\n   \r\n    transition: transform .4s;\r\n   \r\n    transition: transform .4s, -webkit-transform .4s;\r\n    margin: 0 auto;\r\n}\r\n\r\n.img:hover { /* IE 9 */\r\n    -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n    transform: scale(1.1); \r\n}\r\n\r\n.ads {\r\n   \r\n\ttransition: -webkit-transform .4s;\r\n   \r\n\ttransition: transform .4s;\r\n   \r\n\ttransition: transform .4s, -webkit-transform .4s;\r\n\tmargin: 0 auto;\r\n  }\r\n\r\n.ads:hover { /* IE 9 */\r\n\t-webkit-transform: scale(0.5); /* Safari 3-8 */\r\n\ttransform: scale(1.1); \r\n  }"

/***/ }),

/***/ "./src/app/moblile/moblile.component.html":
/*!************************************************!*\
  !*** ./src/app/moblile/moblile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h5 class=\"text-center\" style=\"color:rgb(14, 9, 1);text-transform: uppercase;margin-left: 20px;font-weight: bold\">Some Special Offer's</h5>\r\n        <span id=\"prospn12\">\r\n          <span *ngFor=\"let upro of mdata\" id=\"prospn\" style=\"height: 350px;border: 1px solid silver;float: left;width: 210px;margin: 7px;padding: 17px; border-radius:4px;background-color: rgba(241, 221, 221, 0.137);box-shadow: 0px 0px 5px rgb(192, 186, 186);\">\r\n            <span class=\"spn\" id=\"prospn1\">\r\n              <span class=\"spn\">\r\n                <span></span>\r\n                <img src=\"../../assets/uploads/{{upro.images}}\" class=\"img\" width=\"110\" height=\"200\"  (click)=\"funDetails(upro._id)\"\r\n                  style=\"cursor: pointer;margin-left: 32px;\">\r\n              </span>\r\n              <br>\r\n              <br>\r\n              <span style=\"color:black;font-weight:bolder;font-size: 14px;text-align: justify;text-transform: uppercase;font-family: arial\">\r\n               {{upro.pname}}\r\n               </span>\r\n            </span>\r\n            <br>\r\n            <span class=\"spn\" style=\"color: rgb(55, 241, 18);font-size: 18px;\">\r\n              {{upro.pprice | currency: \"INR\"}}\r\n            </span>\r\n            <br>\r\n            <span class=\"spn\" [ngStyle]=\"{backgroundColor:upro.pcolor,color:upro.pcolor}\">. . . . .\r\n            </span>\r\n            <br>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"row\"><br> \r\n    <div class=\"col-md-12\">\r\n        <p style=\"text-align: center;font-size: 35px;\">SOME SPECIAL OFFER'S</p><hr><br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-12\" *ngFor=\"let pro of mdata\" style=\"text-align: center;margin-top:40ppx;\">\r\n          <span>\r\n            <span>\r\n              <span>\r\n              </span>\r\n              <img src=\"../../assets/uploads/{{pro.images}}\" class=\"img\" width=\"110px;\" height=\"200\"\r\n                (click)=\"funDetails(pro._id)\"\r\n                style=\"cursor: pointer;margin-left: 15px;margin-top: -16px;\"></span><br><br>\r\n            <span\r\n              style=\"color:black;font-weight:bolder;font-size: 14px;text-align: \r\n              justify;text-transform: uppercase;font-family: arial\">&nbsp;&nbsp;&nbsp;&nbsp;{{pro.pname}}</span>\r\n              </span><br>\r\n          <span>\r\n            <span style=\"color: rgb(55, 241, 18);font-size: 18px;\">&nbsp;&nbsp;{{pro.pprice | currency: \"INR\"}}</span>\r\n          </span>\r\n          <br>\r\n          <span>\r\n            &nbsp; <span [ngStyle]=\"{backgroundColor:pro.pcolor,color:pro.pcolor}\">. . . . .</span>\r\n          </span>\r\n          <br>\r\n          <span>\r\n            <span style=\"color: rgb(230, 40, 49)\">&nbsp; {{pro.pdesc}} </span>\r\n          </span>\r\n          <br>\r\n          &nbsp;&nbsp;\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/moblile/moblile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/moblile/moblile.component.ts ***!
  \**********************************************/
/*! exports provided: MoblileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoblileComponent", function() { return MoblileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoblileComponent = /** @class */ (function () {
    function MoblileComponent(http, rout) {
        var _this = this;
        this.http = http;
        this.rout = rout;
        this.bcak = function (dt) {
            _this.mdata = JSON.parse(dt._body);
        };
        this.funMobile();
    }
    MoblileComponent.prototype.ngOnInit = function () {
    };
    MoblileComponent.prototype.funMobile = function () {
        // alert("hhhhhhhh")
        this.http.get("moblile/getmob").subscribe(this.bcak);
    };
    MoblileComponent.prototype.funDetails = function (x) {
        this.rout.navigateByUrl("/prodetail;proid=" + x);
    };
    MoblileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moblile',
            template: __webpack_require__(/*! ./moblile.component.html */ "./src/app/moblile/moblile.component.html"),
            styles: [__webpack_require__(/*! ./moblile.component.css */ "./src/app/moblile/moblile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MoblileComponent);
    return MoblileComponent;
}());



/***/ }),

/***/ "./src/app/new-arival/new-arival.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-arival/new-arival.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-arival/new-arival.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-arival/new-arival.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  new-arival works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/new-arival/new-arival.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-arival/new-arival.component.ts ***!
  \****************************************************/
/*! exports provided: NewArivalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewArivalComponent", function() { return NewArivalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewArivalComponent = /** @class */ (function () {
    function NewArivalComponent() {
    }
    NewArivalComponent.prototype.ngOnInit = function () {
    };
    NewArivalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-arival',
            template: __webpack_require__(/*! ./new-arival.component.html */ "./src/app/new-arival/new-arival.component.html"),
            styles: [__webpack_require__(/*! ./new-arival.component.css */ "./src/app/new-arival/new-arival.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewArivalComponent);
    return NewArivalComponent;
}());



/***/ }),

/***/ "./src/app/new-product/new-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-product/new-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 361px) { \r\n\t#prospn{\r\n\tborder-radius: 4px;\r\n    margin-top: 13px;\r\n    margin-left: 64px;\r\n    padding: 10px;\r\n    float: left;\r\n    border: 1px solid silver;\r\n    width: 230px;\r\n    background-color: rgba(241, 221, 221, 0.137);\r\n    box-shadow: 0px 0px 5px rgb(192, 186, 186);\r\n}\r\n}\r\n\r\n/* // Medium devices (tablets, 768px and up) */\r\n\r\n/* @media (min-width: 768px) { \r\n\t.spn{\r\n\t\tmargin-left: 50px;\r\n\t}\r\n} */\r\n\r\n/* // Large devices (desktops, 992px and up) */\r\n\r\n/* @media (min-width: 992px) { \r\n\t.spn{\r\n\t\tmargin-left: 50px;\r\n\t}\r\n} */\r\n\r\n/* // Extra large devices (large desktops, 1200px and up) */\r\n\r\n/* @media (min-width: 1200px) { \r\n\t.spn{\r\n\t\tmargin-left: 50px;\r\n\t}\r\n} */\r\n\r\n/* #prospn12{\r\n\tmargin: auto;\r\n} */\r\n\r\n.spn{\r\n     margin: 8px;\r\n }\r\n\r\n.fas{\r\n    border-radius: 4px 0px 0px 4px;color: white;background-color: rgb(0, 128, 128);width: 35px;height:36px;font-size: 17px;padding: 10px; \r\n }\r\n\r\n.cartbtn{\r\n    border-radius: 0px;padding: 5px;color:white;margin-top: -6px;;background-color: rgb(0, 128, 128);\r\n }\r\n\r\n.prospn{\r\n   border-radius:4px;margin: auto; padding: 10px; border: 1px solid silver;width: 230px;background-color: rgba(241, 221, 221, 0.137);box-shadow: 0px 0px 5px rgb(192, 186, 186);\r\n }\r\n\r\n/* Slider Css */\r\n\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-size: 26px;\r\n\tfont-weight: 300;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\tposition: relative;\r\n\tmargin: 30px 0 80px;\r\n}\r\n\r\nh2 b {\r\n\tcolor: #ffc000;\r\n}\r\n\r\nh2::after {\r\n\tcontent: \"\";\r\n\twidth: 100px;\r\n\tposition: absolute;\r\n\tmargin: 0 auto;\r\n\theight: 4px;\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: -20px;\r\n}\r\n\r\n.carousel {\r\n\tmargin: 50px auto;\r\n\tpadding: 0 70px;\r\n}\r\n\r\n.carousel .item {\r\n\tmin-height: 330px;\r\n    text-align: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n.carousel .item .img-box {\r\n\theight: 160px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n}\r\n\r\n.carousel .item img {\t\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin: 0 auto;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n\r\n.carousel .item h4 {\r\n\tfont-size: 18px;\r\n\tmargin: 10px 0;\r\n}\r\n\r\n.carousel .item .btn {\r\n\tcolor: #333;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: none;\r\n    border: 1px solid #ccc;\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n}\r\n\r\n.carousel .item .btn:hover, .carousel .item .btn:focus {\r\n\tcolor: #fff;\r\n\tbackground: #000;\r\n\tborder-color: #000;\r\n\tbox-shadow: none;\r\n}\r\n\r\n.carousel .item .btn i {\r\n\tfont-size: 14px;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.carousel .thumb-wrapper {\r\n\ttext-align: center;\r\n}\r\n\r\n.carousel .thumb-content {\r\n\tpadding: 15px;\r\n}\r\n\r\n.carousel .carousel-control {\r\n\theight: 100px;\r\n    width: 40px;\r\n    background: none;\r\n    margin: auto 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.carousel .carousel-control i {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 50%;\r\n    display: inline-block;\r\n    margin: -16px 0 0 0;\r\n    z-index: 5;\r\n    left: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.8);\r\n    text-shadow: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.carousel .item-price {\r\n\tfont-size: 13px;\r\n\tpadding: 2px 0;\r\n}\r\n\r\n.carousel .item-price strike {\r\n\tcolor: #999;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.carousel .item-price span {\r\n\tcolor: #86bd57;\r\n\tfont-size: 110%;\r\n}\r\n\r\n.carousel .carousel-control.left i {\r\n\tmargin-left: -3px;\r\n}\r\n\r\n.carousel .carousel-control.left i {\r\n\tmargin-right: -3px;\r\n}\r\n\r\n.carousel .carousel-indicators {\r\n\tbottom: -50px;\r\n}\r\n\r\n.carousel-indicators li, .carousel-indicators li.active {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 4px;\r\n\tborder-radius: 50%;\r\n\tborder-color: transparent;\r\n}\r\n\r\n.carousel-indicators li {\t\r\n\tbackground: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.carousel-indicators li.active {\t\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.star-rating li {\r\n\tpadding: 0;\r\n}\r\n\r\n.star-rating i {\r\n\tfont-size: 14px;\r\n\tcolor: #ffc000;\r\n}\r\n\r\n/* Zoom Images */\r\n\r\n.img {\r\n   \r\n    transition: -webkit-transform .4s;\r\n   \r\n    transition: transform .4s;\r\n   \r\n    transition: transform .4s, -webkit-transform .4s;\r\n    margin: 0 auto;\r\n}\r\n\r\n.img:hover { /* IE 9 */\r\n    -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n    transform: scale(1.1); \r\n}\r\n\r\n.ads {\r\n   \r\n\ttransition: -webkit-transform .4s;\r\n   \r\n\ttransition: transform .4s;\r\n   \r\n\ttransition: transform .4s, -webkit-transform .4s;\r\n\tmargin: 0 auto;\r\n  }\r\n\r\n.ads:hover { /* IE 9 */\r\n\t-webkit-transform: scale(0.5); /* Safari 3-8 */\r\n\ttransform: scale(1.1); \r\n  }\r\n\r\n.prodetails{\r\n\t  text-align: center;\r\n\t  box-shadow: 0px 0px 5px rgb(192, 186, 186);\r\n\t  margin-top: 15px;\r\n\t  width: 230px;\r\n\t  padding: 12px;\r\n  }"

/***/ }),

/***/ "./src/app/new-product/new-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-product/new-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\" style=\"height:400px;margin-top: 11px\">  \r\n    <img src=\"./assets/offer.jpg\" class=\"ads\" width=\"330px;\" height=\"390px;\" style=\"margin-left: 8px;\" >\r\n  </div>\r\n  <div class=\"col\" style=\"float: left ;\">\r\n    <h5 class=\"\" style=\"color:rgb(8, 5, 0);text-transform: uppercase;margin-left: 20px;font-weight: bold\">New Product's</h5>\r\n      <span id=\"prospn12\">\r\n          <span *ngFor=\"let pro of prodata\" id=\"prospn\">\r\n            <span class=\"spn\" id=\"prospn1\">\r\n                <span class=\"spn\">\r\n                    <span>\r\n                       <img src=\"/assets/spnow.png\" width=\"140px;\" style=\"margin-left: 20px;margin-top: -42px;\">\r\n                        <img src=\"/assets/MyImges/new p.gif\" width=\"50px\" style=\"margin-left: 167px;margin-top: -44px\">\r\n                    </span>\r\n                    <img src=\"../../assets/uploads/{{pro.images}}\" class=\"img\" width=\"170px;\" height=\"130\" (click)=\"funDetail(pro._id)\"\r\n                    style=\"cursor: pointer;margin-left: 15px;margin-top: -16px;\"></span><br><br>\r\n              <span style=\"color:black;font-weight:bolder;font-size: 14px;text-align: justify;text-transform: uppercase;font-family: arial\">&nbsp;&nbsp;&nbsp;&nbsp;{{pro.pname}}</span></span><br>\r\n              \r\n            <span class=\"spn\">\r\n              <span style=\"color: rgb(55, 241, 18);font-size: 18px;\">&nbsp;&nbsp;{{pro.pprice | currency: \"INR\"}}</span>\r\n            </span>\r\n            <br>\r\n            <span class=\"spn\">\r\n              &nbsp; <span [ngStyle]=\"{backgroundColor:pro.pcolor,color:pro.pcolor}\">. . . .  .</span>\r\n            </span>\r\n            <br>\r\n            <span class=\"spn\">\r\n              <span style=\"color: rgb(230, 40, 49)\">&nbsp; {{pro.pdesc}} </span>\r\n            </span>\r\n            <br>\r\n            &nbsp;&nbsp; \r\n             \r\n          </span>\r\n        </span>\r\n  </div>\r\n</div>\r\n</div><hr> -->\r\n<div>\r\n  <div class=\"row\"><br>\r\n    <div class=\"col-md-3 col-sm-12\" style=\"height:400px;text-align: center\">\r\n      <img src=\"./assets/offer.jpg\" class=\"ads\" width=\"270px;\" height=\"350px;\" style=\"margin-top: 70px\">\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <p style=\"text-align: center;font-size: 35px;margin-top: 10px\">New Product's</p><hr><br>\r\n      <div class=\"row\">\r\n       \r\n        <div class=\"col-md-3 col-sm-12\" *ngFor=\"let pro of prodata\" style=\"text-align: center;margin-top:40ppx;\">\r\n          <!-- <div class=\"prodetails\"> -->\r\n          <span>\r\n            <span>\r\n              <span>\r\n                <!-- <img src=\"/assets/spnow.png\" width=\"230px;\" style=\"margin-left: 20px;margin-top: -42px;height: 60px;\"> -->\r\n                <!-- <img src=\"/assets/MyImges/new p.gif\" width=\"50px\" style=\"margin-left: 167px;margin-top: -47px\"> -->\r\n              </span>\r\n              <img src=\"../../assets/uploads/{{pro.images}}\" class=\"img\" width=\"200px;\" height=\"130\"\r\n                (click)=\"funDetail(pro._id)\"\r\n                style=\"cursor: pointer;margin-left: 15px;margin-top: -16px;\"></span><br><br>\r\n            <span\r\n              style=\"color:black;font-weight:bolder;font-size: 14px;text-align: \r\n              justify;text-transform: uppercase;font-family: arial\">&nbsp;&nbsp;&nbsp;&nbsp;{{pro.pname}}</span>\r\n              </span><br>\r\n          <span>\r\n            <span style=\"color: rgb(55, 241, 18);font-size: 18px;\">&nbsp;&nbsp;{{pro.pprice | currency: \"INR\"}}</span>\r\n          </span>\r\n          <br>\r\n          <span>\r\n            &nbsp; <span [ngStyle]=\"{backgroundColor:pro.pcolor,color:pro.pcolor}\">. . . . .</span>\r\n          </span>\r\n          <br>\r\n          <span>\r\n            <span style=\"color: rgb(230, 40, 49)\">&nbsp; {{pro.pdesc}} </span>\r\n          </span>\r\n          <br>\r\n          &nbsp;&nbsp;\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/new-product/new-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-product/new-product.component.ts ***!
  \******************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../show-cart-image-service.service */ "./src/app/show-cart-image-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(nobj, rout, servar) {
        this.nobj = nobj;
        this.rout = rout;
        this.servar = servar;
        this.tot_cart_items = 0;
        this.funProd();
    }
    NewProductComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("document").ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(".cartbtn").mouseover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css("background-color", " rgb(25, 80, 63)");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(".cartbtn").mouseout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css("background-color", " rgb(0, 128, 128)");
            });
        });
    };
    NewProductComponent.prototype.funProd = function () {
        var _this = this;
        this.nobj.get("/category/products").subscribe(function (dt) {
            _this.prodata = JSON.parse(dt._body);
            //console.log(this.prodata)
        });
    };
    NewProductComponent.prototype.funDetail = function (x) {
        this.rout.navigateByUrl("/prodetail;proid=" + x);
    };
    NewProductComponent.prototype.funaddcart = function (pd) {
        var abc = [];
        var newarr = [];
        if (localStorage.getItem("cart_items") != null) {
            abc = JSON.parse(localStorage.getItem('cart_items'));
            // alert(abc)
            pd.selqty = this.value;
            var str = '\\"_id\\":' + pd._id + ",";
            // alert(str)
            if ((localStorage.getItem('cart_items').indexOf(str))) {
                for (var loop = 0; loop < abc.length; loop++) {
                    var str1 = JSON.parse(abc[loop]);
                    if (str1._id == pd._id) {
                        str1.selqty = pd.selqty;
                        alert("Product Updated");
                    }
                    else
                        newarr.push(JSON.stringify(str1));
                    // alert(newarr.length)
                }
            }
            newarr.push(JSON.stringify(pd));
            // alert(newarr)
            this.servar.changeMessage(newarr.length.toString());
        }
        else {
            pd.selqty = this.value;
            newarr.push(JSON.stringify(pd));
            this.servar.changeMessage(newarr.length.toString());
        }
        localStorage.setItem('cart_items', JSON.stringify(newarr));
        console.log(JSON.parse(localStorage.getItem('cart_items')));
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/new-product/new-product.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_4__["ShowCartImageServiceService"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/newpassord/newpassord.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newpassord/newpassord.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newpassord/newpassord.component.html":
/*!******************************************************!*\
  !*** ./src/app/newpassord/newpassord.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  newpassord works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/newpassord/newpassord.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newpassord/newpassord.component.ts ***!
  \****************************************************/
/*! exports provided: NewpassordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpassordComponent", function() { return NewpassordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewpassordComponent = /** @class */ (function () {
    function NewpassordComponent() {
    }
    NewpassordComponent.prototype.ngOnInit = function () {
    };
    NewpassordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newpassord',
            template: __webpack_require__(/*! ./newpassord.component.html */ "./src/app/newpassord/newpassord.component.html"),
            styles: [__webpack_require__(/*! ./newpassord.component.css */ "./src/app/newpassord/newpassord.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewpassordComponent);
    return NewpassordComponent;
}());



/***/ }),

/***/ "./src/app/otp/otp.component.css":
/*!***************************************!*\
  !*** ./src/app/otp/otp.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deco{\r\n    border-radius: 0px;\r\n    padding: 10px;\r\n    font-size: 24px;\r\n    height: 40px;\r\n}\r\n#otphed{\r\n    \r\n    font-family: Arial, Helvetica, sans-serif,;\r\n    color: rgb(141, 190, 174)\r\n}\r\n.otpbtn{\r\n    border-radius: 0px;\r\n}"

/***/ }),

/***/ "./src/app/otp/otp.component.html":
/*!****************************************!*\
  !*** ./src/app/otp/otp.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n\r\n      </div>\r\n      <div class=\"col-md-4 text-center\" style=\"border: 1px solid red;box-shadow: 0px 0px 10px;\"> \r\n             <form><br>\r\n               <h2 id=\"otphed\"> Email Id And OTP</h2><br>\r\n               <input type=\"text\" class=\"form-control deco\" [(ngModel)]=\"email\" name=\"oottpp1\" placeholder=\"Enter Email\"><br>\r\n                <input type=\"text\" class=\"form-control deco\" [(ngModel)]=\"otp\" name=\"oottpp\" pattern=\"[0-9]*\" maxlength=\"4\" placeholder=\"Enter OTP\"><br> \r\n                <input type=\"button\" class=\"btn btn-warning form-control otpbtn\" value=\"Submit OTP\" (click)=\"funNew()\"><br><br>\r\n             </form>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n                 \r\n          </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/otp/otp.component.ts":
/*!**************************************!*\
  !*** ./src/app/otp/otp.component.ts ***!
  \**************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtpComponent = /** @class */ (function () {
    function OtpComponent(http) {
        var _this = this;
        this.http = http;
        this.otpcb = function (dt) {
            _this.otpdat = (dt._body);
            alert(_this.otpdat);
            console.log(_this.otpdat);
        };
        this.otpcbac = function (dt) {
            alert(dt._body);
        };
    }
    OtpComponent.prototype.ngOnInit = function () {
        this.http.get("searchapi/getOTP").subscribe(this.otpcb);
    };
    OtpComponent.prototype.funNew = function () {
        var odata = { OTP: this.otp, email: this.email };
        this.http.post("searchapi/genOTP", odata).subscribe(this.otpcbac);
    };
    OtpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! ./otp.component.html */ "./src/app/otp/otp.component.html"),
            styles: [__webpack_require__(/*! ./otp.component.css */ "./src/app/otp/otp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-12\" style=\"text-align: center\">\n      <img src=\"../../assets/pagenotfound.png\" width=\"150px\">\n     <h1 style=\"color: rgb(253, 6, 47);font-size: 60px;font-family: Arial, Helvetica, sans-serif;font-weight: bold\">Error : 404</h1>\n      <p style=\"color: rgb(63, 57, 57);font-size: 35px;\">Seems you encountered a wrong address <br>Go back to Home Page</p>\n      <button class=\"btn btn-success\" (click)=\"shopping()\">Continue Shopping</button><br><br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.prototype.shopping = function () {
        window.location.href = '';
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product-dtail/product-dtail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/product-dtail/product-dtail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    width: 600px;\r\n    margin: 0 auto;\r\n    /* text-align: center; */\r\n    padding-top: 15px;\r\n  }\r\n  \r\n  .value-button {\r\n    display: inline-block;\r\n    border: 1px solid  rgb(152, 153, 226);\r\n    margin-top: -7px;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n    font-size:20px;\r\n    vertical-align: middle;\r\n    padding: 2px 0;\r\n    background:rgb(152, 153, 226);\r\n \r\n    color:white;\r\n  }\r\n  \r\n  .value-button:hover {\r\n    cursor: pointer;\r\n    background-color:mediumslateblue;\r\n    color:rgb(0, 247, 255);\r\n  }\r\n  \r\n  form #decrease {\r\n    /* margin-right: -4px; */\r\n    border-radius: 8px 0 0 8px;\r\n  }\r\n  \r\n  form #increase {\r\n    /* margin-left: -4px; */\r\n    border-radius: 0 8px 8px 0;\r\n  }\r\n  \r\n  form #input-wrap {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n  \r\n  input#number {\r\n    text-align: center;\r\n    margin-top: -50px;\r\n    border: none;\r\n    border: 1px solid #ddd;\r\n\r\n    margin: 0px;\r\n    width: 40px;\r\n    height: 38px;\r\n  }\r\n  \r\n  input[type=number]::-webkit-inner-spin-button,\r\n  input[type=number]::-webkit-outer-spin-button {\r\n      -webkit-appearance: none;\r\n      margin: 0;\r\n  }\r\n  \r\n  .fas{\r\n    border-radius: 4px 0px 0px 4px;color: white;background-color: rgb(0, 128, 128);width: 35px;height:36px;font-size: 17px;padding: 10px; \r\n }\r\n  \r\n  .cartbtn{\r\n    border-radius: 0px;padding: 5px;color:white;margin-top: -6px ;background-color: rgb(0, 128, 128)\r\n }\r\n  \r\n  .offers{\r\n  color: rgba(4, 252, 99, 0.911);\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  margin: 6px;\r\n}\r\n  \r\n  .offers:hover{\r\n  color: rgb(74, 150, 124);\r\n  margin-left: 15px\r\n}\r\n  \r\n  .spn{\r\n  color: rgb(131, 145, 126);\r\n  padding: 6px;\r\n}"

/***/ }),

/***/ "./src/app/product-dtail/product-dtail.component.html":
/*!************************************************************!*\
  !*** ./src/app/product-dtail/product-dtail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n <div  class=\"row\" *ngFor=\"let p of prodata\">\r\n     <div class=\"col-md-4 col-sm-12\" style=\"text-align: center\">\r\n            <img src=\"../../assets/uploads/{{p.images}}\" height=\"340px\"   [imageZoom]=\"\" [lensHeight]=\"40\" [lensHeight]=\"40\" width=\"300\" [minZoomLevel]=\".2\" [maxZoomLevel]=\".4\" >\r\n     </div>\r\n     <div class=\"col-md-4 col-sm-12\" style=\"margin-top: -7px; text-align: center\">\r\n            <span style=\"font-weight:bold;font-size:25px;\">{{p.pname | uppercase}}</span><br>\r\n            <span style=\"font-weight:bold;color:green;font-size:30px\">{{p.pprice | currency: \"INR\"}}</span><br>\r\n            <span style=\"font-weight:bold\"> Color:&nbsp;&nbsp;&nbsp;<span [ngStyle]=\"{backgroundColor:p.pcolor,color:p.pcolor}\"> . . . . </span></span><br>\r\n            \r\n            <span style=\"font-size:15px;color: rgb(144, 146, 143)\"> {{p.pdesc}}</span><br>\r\n           \r\n            <span>\r\n                <rating [(ngModel)]=\"urat\" [max]=\"5\"   (click)=\"funRat(urat)\" [readonly]=\"false\">{{p.urat}}</rating>\r\n            </span>\r\n           <br>\r\n       \r\n            <span style=\"font-weight:bold;color:chocolate\">Available Quantity:{{p.quantity}}</span>\r\n            <br>\r\n            <span style=\"color: rgb(17, 175, 59);font-size:15px;font-weight:bold;\"> {{p.offer}}</span>\r\n            <br>\r\n            <span style=\"text-align: center\">\r\n                <div class=\"value-button\" id=\"decrease\" (click)=\"decreaseValue()\" ><img src=\"/assets/-.png\" width=\"30px\"></div>\r\n                <input type=\"number\" id=\"number\" value=\"1\"  name=\"qty\"   readonly [(ngModel)]=\"value\">\r\n                <div class=\"value-button\" id=\"increase\" (click)=\"increaseValue(p.quantity)\" ><img src=\"/assets/+.png\" width=\"20px\"></div>\r\n            </span><br><br>\r\n           <span id=\"spnbtn\">\r\n                <i class=\"fa fa-shopping-cart fas\"></i>\r\n                <button type=\"button\"  class=\"btn b.tn-default cartbtn addcartbtn\"  (click)=\"funaddcart(p)\">\r\n                  Add To Cart\r\n              </button>\r\n              &nbsp;&nbsp;\r\n              <button type=\"button\" class=\"btn btn-danger\" style=\"margin-top: -8px;\" (click)=\"appobj.fun_cart_detail()\">\r\n                    <span class=\"fa fa-shopping-cart \"></span>\r\n                Buy Now\r\n              </button>\r\n            </span>\r\n\r\n     </div>\r\n     <div class=\"col-md-4 col-sm-12\">\r\n        <p style=\"color: rgb(52, 54, 54);font-size: 25px; text-align: center\">Payment Offer's</p>\r\n        <p class=\"offers\"><span class=\"spn\">&#187;</span>Special PriceGet extra 12% off (price inclusive of discount)T&C</p>\r\n        <p class=\"offers\"><span class=\"spn\">&#187;</span>Bank Offer5% Instant Discount on EMIs with Axis Bank Credit CardT&C</p>\r\n        <p class=\"offers\"><span class=\"spn\">&#187;</span>Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C</p>\r\n        <p class=\"offers\"><span class=\"spn\">&#187;</span>Partner OfferShop for Rs1500+ from 22 to 31st March & get extra 10% off on next purchase</p>\r\n        <p class=\"offers\"><span class=\"spn\">&#187;</span>The Offer is valid on all modes of payment.</p>\r\n        <p class=\"offers\"><span class=\"spn\">&#187;</span>Offer is not applicable on orders of Products cancelled on or before April 2019</p>    \r\n     </div>\r\n </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Upcomming product details -->\r\n<div>\r\n        <div  class=\"row\" *ngFor=\"let p of updata\">\r\n            <div class=\"col-md-4\" style=\"text-align: center\">\r\n                   <img src=\"../../assets/uploads/{{p.images}}\" height=\"340px\"   [imageZoom]=\"\" [lensHeight]=\"40\" [lensHeight]=\"40\" width=\"400\" [minZoomLevel]=\".2\" [maxZoomLevel]=\".4\" >\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-12\" style=\"text-align: center\"><br>\r\n                   <span style=\"font-weight:bold;font-size:25px;\">{{p.pname | uppercase}}</span><br>\r\n                   <span style=\"font-weight:bold;color:green;font-size:30px\">{{p.pprice | currency: \"INR\"}}</span><br>\r\n                   <span style=\"font-weight:bold\"> Color:&nbsp;&nbsp;&nbsp;<span [ngStyle]=\"{backgroundColor:p.pcolor,color:p.pcolor}\">. . . . </span></span><br>\r\n                   <span style=\"font-size:15px;color: rgb(144, 146, 143)\"> {{p.pdesc}}</span><br>\r\n                  <br>\r\n                   <span *ngFor=\"let rat of rat_arr\"  class=\"fa fa-star\" style=\"font-size:30px;color:rgb(54, 27, 206);margin-right:2px\">\r\n                     \r\n                   </span>\r\n                   <span *ngIf=\"half==1\" class=\"fa fa-star-half\" style=\"font-size:30px;color:rgb(54, 27, 206);margin-right:2px\"> </span>\r\n                 <br>\r\n                 <br>\r\n                   <span style=\"color: rgb(17, 175, 59);font-size:15px;font-weight:bold;\"> {{p.offer}}</span>       \r\n            </div>\r\n        </div>\r\n       </div>"

/***/ }),

/***/ "./src/app/product-dtail/product-dtail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-dtail/product-dtail.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductDtailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDtailComponent", function() { return ProductDtailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../show-cart-image-service.service */ "./src/app/show-cart-image-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDtailComponent = /** @class */ (function () {
    function ProductDtailComponent(appobj, aobj, robj, servar) {
        this.appobj = appobj;
        this.aobj = aobj;
        this.robj = robj;
        this.servar = servar;
        ////////Increment quty
        this.value = 1;
        this.rat_arr = [];
        this.half = 0;
        this.x = 0;
        this.urat = "";
        this.tot_cart_items = 0;
    }
    ProductDtailComponent.prototype.increaseValue = function (dt) {
        if (this.value == dt)
            alert("Exceed....");
        else {
            this.value++;
        }
    };
    ProductDtailComponent.prototype.decreaseValue = function () {
        if (this.value > 1) {
            this.value--;
        }
    };
    ProductDtailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("cart_items") != null) {
            this.servar.currentMessage.subscribe(function (message) { return _this.message = message; });
            var arr = localStorage.getItem("cart_items");
            arr = arr.replace(/\\/g, "");
            arr = arr.replace(/"{/g, "{");
            arr = arr.replace(/}"/g, "}");
            arr = JSON.parse(arr);
            this.tot_cart_items = arr.length;
            this.servar.changeMessage(this.tot_cart_items.toString());
        }
        /////////////////////////////////////////  
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("document").ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#small").elevateZoom({
                easing: true,
                lensFadeOut: 100,
                lensFadeIn: 2000,
                zoomWindowFadeOut: 2000,
                scrollZoom: true
            });
        });
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("document").ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()(".cartbtn").mouseover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).css("background-color", "rgb(25, 80, 63)");
            });
            jquery__WEBPACK_IMPORTED_MODULE_5___default()(".cartbtn").mouseout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).css("background-color", " rgb(0, 128, 128)");
            });
        });
        this.aobj.params.subscribe(function (prmdata) {
            if (prmdata['proid']) {
                _this.prodid = parseInt(prmdata['proid']);
                var pid = { _id: _this.prodid };
                _this.robj.post("category/getPro", pid).subscribe(function (pdata) {
                    _this.prodata = JSON.parse(pdata['_body']);
                    _this.urat = _this.prodata[0].userrating;
                    // for (var i = 1; i <= this.prodata[0].rating; i++) {
                    //   this.rat_arr.push(i)
                    // }
                    // i--
                    // this.half = 0
                    // if (this.prodata[0].rating > i)
                    //   this.half = 1
                    // alert(this.urat)
                });
            }
        });
        this.aobj.params.subscribe(function (prm) {
            if (prm['pid']) {
                _this.prid = parseInt(prm['pid']);
                var ppid = { _id: _this.prid };
                _this.robj.post("category/uproduct", ppid).subscribe(function (dt) {
                    _this.updata = JSON.parse(dt['_body']);
                });
            }
        });
    };
    ProductDtailComponent.prototype.funaddcart = function (pd) {
        var abc = [];
        var newarr = [];
        if (localStorage.getItem("cart_items") != null) {
            abc = JSON.parse(localStorage.getItem('cart_items'));
            // alert(abc)
            pd.selqty = this.value;
            var str = '\\"_id\\":' + pd._id + ",";
            // alert(str)
            if ((localStorage.getItem('cart_items').indexOf(str))) {
                for (var loop = 0; loop < abc.length; loop++) {
                    var str1 = JSON.parse(abc[loop]);
                    if (str1._id == pd._id) {
                        str1.selqty = pd.selqty;
                        // alert("Product Updated")
                    }
                    else
                        newarr.push(JSON.stringify(str1));
                    // alert(newarr.length)
                }
            }
            newarr.push(JSON.stringify(pd));
            // alert(newarr)
            this.servar.changeMessage(newarr.length.toString());
        }
        else {
            pd.selqty = this.value;
            newarr.push(JSON.stringify(pd));
            this.servar.changeMessage(newarr.length.toString());
        }
        localStorage.setItem('cart_items', JSON.stringify(newarr));
        console.log(JSON.parse(localStorage.getItem('cart_items')));
    };
    ProductDtailComponent.prototype.funRat = function (rat) {
        alert(rat);
        var oldob = { _id: this.prodata[0]._id };
        var newob = { userrating: rat };
        var ratdata = [oldob, newob];
        this.robj.post("category/ratdata", ratdata).subscribe(function (dt) {
            alert(dt['_body']);
        });
    };
    ProductDtailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-dtail',
            template: __webpack_require__(/*! ./product-dtail.component.html */ "./src/app/product-dtail/product-dtail.component.html"),
            styles: [__webpack_require__(/*! ./product-dtail.component.css */ "./src/app/product-dtail/product-dtail.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_4__["ShowCartImageServiceService"]])
    ], ProductDtailComponent);
    return ProductDtailComponent;
}());



/***/ }),

/***/ "./src/app/product-slider/product-slider.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-slider/product-slider.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /*jssor slider loading skin spin css*/\r\n       \r\n\r\n        /*jssor slider bullet skin 057 css*/\r\n       \r\n\r\n        .jssorb057 .i {position:absolute;cursor:pointer;}\r\n       \r\n\r\n        .jssorb057 .i .b {fill:none;stroke:#fff;stroke-width:2000;stroke-miterlimit:10;stroke-opacity:0.4;}\r\n       \r\n\r\n        .jssorb057 .i:hover .b {stroke-opacity:.7;}\r\n       \r\n\r\n        .jssorb057 .iav .b {stroke-opacity: 1;}\r\n       \r\n\r\n        .jssorb057 .i.idn {opacity:.3;}\r\n       \r\n\r\n        /*jssor slider arrow skin 073 css*/\r\n       \r\n\r\n        .jssora073 {display:block;position:absolute;cursor:pointer;}\r\n       \r\n\r\n        .jssora073 .a {fill:#ddd;fill-opacity:.7;stroke:#000;stroke-width:160;stroke-miterlimit:10;stroke-opacity:.7;}\r\n       \r\n\r\n        .jssora073:hover {opacity:.8;}\r\n       \r\n\r\n        .jssora073.jssora073dn {opacity:.4;}\r\n       \r\n\r\n        .jssora073.jssora073ds {opacity:.3;pointer-events:none;}\r\n       \r\n\r\n        .spn{\r\n            margin: 8px;\r\n        }\r\n       \r\n\r\n        .fas{\r\n           border-radius: 4px 0px 0px 4px;color: white;background-color: rgb(0, 128, 128);width: 35px;height:36px;font-size: 17px;padding: 10px; \r\n        }\r\n       \r\n\r\n        .cartbtn{\r\n           border-radius: 0px;padding: 5px;color:white;margin-top: -6px;;background-color: rgb(0, 128, 128);\r\n        }\r\n       \r\n\r\n        #prospn{\r\n          border-radius:4px;margin-top:13px; margin-left: 15px; padding: 10px; float: left; border: 1px solid silver;width: 230px;box-shadow :0px 0px 5px black\r\n        }\r\n       \r\n\r\n        /* Slider Css */\r\n       \r\n\r\n        h2 {\r\n           color: #000;\r\n           font-size: 26px;\r\n           font-weight: 300;\r\n           text-align: center;\r\n           text-transform: uppercase;\r\n           position: relative;\r\n           margin: 30px 0 80px;\r\n       }\r\n       \r\n\r\n        h2 b {\r\n           color: #ffc000;\r\n       }\r\n       \r\n\r\n        h2::after {\r\n           content: \"\";\r\n           width: 100px;\r\n           position: absolute;\r\n           margin: 0 auto;\r\n           height: 4px;\r\n           background: rgba(0, 0, 0, 0.2);\r\n           left: 0;\r\n           right: 0;\r\n           bottom: -20px;\r\n       }\r\n       \r\n\r\n        .carousel {\r\n           margin: 50px auto;\r\n           padding: 0 70px;\r\n       }\r\n       \r\n\r\n        .carousel .item {\r\n           min-height: 330px;\r\n           text-align: center;\r\n           overflow: hidden;\r\n       }\r\n       \r\n\r\n        .carousel .item .img-box {\r\n           height: 160px;\r\n           width: 100%;\r\n           position: relative;\r\n       }\r\n       \r\n\r\n        .carousel .item img {\t\r\n           max-width: 100%;\r\n           max-height: 100%;\r\n           display: inline-block;\r\n           position: absolute;\r\n           bottom: 0;\r\n           margin: 0 auto;\r\n           left: 0;\r\n           right: 0;\r\n       }\r\n       \r\n\r\n        .carousel .item h4 {\r\n           font-size: 18px;\r\n           margin: 10px 0;\r\n       }\r\n       \r\n\r\n        .carousel .item .btn {\r\n           color: #333;\r\n           border-radius: 0;\r\n           font-size: 11px;\r\n           text-transform: uppercase;\r\n           font-weight: bold;\r\n           background: none;\r\n           border: 1px solid #ccc;\r\n           padding: 5px 10px;\r\n           margin-top: 5px;\r\n           line-height: 16px;\r\n       }\r\n       \r\n\r\n        .carousel .item .btn:hover, .carousel .item .btn:focus {\r\n           color: #fff;\r\n           background: #000;\r\n           border-color: #000;\r\n           box-shadow: none;\r\n       }\r\n       \r\n\r\n        .carousel .item .btn i {\r\n           font-size: 14px;\r\n           font-weight: bold;\r\n           margin-left: 5px;\r\n       }\r\n       \r\n\r\n        .carousel .thumb-wrapper {\r\n           text-align: center;\r\n       }\r\n       \r\n\r\n        .carousel .thumb-content {\r\n           padding: 15px;\r\n       }\r\n       \r\n\r\n        .carousel .carousel-control {\r\n           height: 100px;\r\n           width: 40px;\r\n           background: none;\r\n           margin: auto 0;\r\n           background: rgba(0, 0, 0, 0.2);\r\n       }\r\n       \r\n\r\n        .carousel .carousel-control i {\r\n           font-size: 30px;\r\n           position: absolute;\r\n           top: 50%;\r\n           display: inline-block;\r\n           margin: -16px 0 0 0;\r\n           z-index: 5;\r\n           left: 0;\r\n           right: 0;\r\n           color: rgba(0, 0, 0, 0.8);\r\n           text-shadow: none;\r\n           font-weight: bold;\r\n       }\r\n       \r\n\r\n        .carousel .item-price {\r\n           font-size: 13px;\r\n           padding: 2px 0;\r\n       }\r\n       \r\n\r\n        .carousel .item-price strike {\r\n           color: #999;\r\n           margin-right: 5px;\r\n       }\r\n       \r\n\r\n        .carousel .item-price span {\r\n           color: #86bd57;\r\n           font-size: 110%;\r\n       }\r\n       \r\n\r\n        .carousel .carousel-control.left i {\r\n           margin-left: -3px;\r\n       }\r\n       \r\n\r\n        .carousel .carousel-control.left i {\r\n           margin-right: -3px;\r\n       }\r\n       \r\n\r\n        .carousel .carousel-indicators {\r\n           bottom: -50px;\r\n       }\r\n       \r\n\r\n        .carousel-indicators li, .carousel-indicators li.active {\r\n           width: 10px;\r\n           height: 10px;\r\n           margin: 4px;\r\n           border-radius: 50%;\r\n           border-color: transparent;\r\n       }\r\n       \r\n\r\n        .carousel-indicators li {\t\r\n           background: rgba(0, 0, 0, 0.2);\r\n       }\r\n       \r\n\r\n        .carousel-indicators li.active {\t\r\n           background: rgba(0, 0, 0, 0.6);\r\n       }\r\n       \r\n\r\n        .star-rating li {\r\n           padding: 0;\r\n       }\r\n       \r\n\r\n        .star-rating i {\r\n           font-size: 14px;\r\n           color: #ffc000;\r\n       }\r\n       \r\n\r\n        /* Zoom Images */\r\n       \r\n\r\n        .img {\r\n          \r\n           transition: -webkit-transform .4s;\r\n          \r\n           transition: transform .4s;\r\n          \r\n           transition: transform .4s, -webkit-transform .4s;\r\n           margin: 0 auto;\r\n       }\r\n       \r\n\r\n        .img:hover { /* IE 9 */\r\n           -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n           transform: scale(1.1); \r\n       }\r\n       \r\n\r\n        .ads {\r\n          \r\n           transition: -webkit-transform .4s;\r\n          \r\n           transition: transform .4s;\r\n          \r\n           transition: transform .4s, -webkit-transform .4s;\r\n           margin: 0 auto;\r\n         }\r\n       \r\n\r\n        .ads:hover { /* IE 9 */\r\n           -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n           transform: scale(1.1); \r\n         }"

/***/ }),

/***/ "./src/app/product-slider/product-slider.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-slider/product-slider.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"button\" value=\"Click\" (click)=\"funnext()\"> -->\r\n<style>\r\n  .big{\r\n    overflow: hidden;\r\n    width:600px;\r\n    height:1000px;\r\n border:3px solid red;\r\n position:relative;\r\n  }\r\n  .inner{\r\n    position:absolute;  \r\n    width:0px;\r\n  }\r\n  .big div{\r\n    float:left;\r\n  }\r\n  img{\r\n    width:200px;\r\n \r\n  }\r\n</style>\r\n<!--\r\n\r\n<div class=\"big\" >\r\n    <div class=\"inner\" id=\"innerdiv\"    *ngFor=\"let pro of prodata\" >\r\n              <div class=\"abc\"  style=\"float: left ;\">\r\n                  <div>\r\n                      <div class=\"row\">\r\n                       \r\n                        \r\n                        <div class=\"col\">\r\n                         \r\n                            <span id=\"prospn12\">\r\n                                <span *ngFor=\"let pro of prodata\" id=\"prospn\" style=\"background-color: #f8f5f596\">\r\n                                  <span class=\"spn\" id=\"prospn1\" style=\"float: right;\">\r\n                                      <span class=\"spn\">\r\n                                          <span>\r\n                                              <img src=\"/assets/MyImges/new p.gif\" width=\"50px\" style=\"margin-left: 52px;margin-top: -10px\">\r\n                                          </span><img src=\"../../assets/uploads/{{pro.images}}\" class=\"img\" width=\"170px;\" height=\"130\" (click)=\"funDetail(pro._id)\"\r\n                                          style=\"cursor: pointer;margin-left: 15px;margin-top: -16px;\"></span><br><br>\r\n                                    <span style=\"color:black;font-weight:bolder;font-size: 14px;text-align: justify;text-transform: uppercase;font-family: arial\">&nbsp;&nbsp;&nbsp;&nbsp;{{pro.pname}}</span></span><br>\r\n                                    \r\n                                  <span class=\"spn\">\r\n                                    <span style=\"color: rgb(55, 241, 18);font-size: 18px;\">&nbsp;&nbsp;{{pro.pprice | currency: \"INR\"}}</span>\r\n                                  </span>\r\n                                  <br>\r\n                                  <span class=\"spn\">\r\n                                    &nbsp; <span [ngStyle]=\"{backgroundColor:pro.pcolor,color:pro.pcolor}\">. . . .  .</span>\r\n                                  </span>\r\n                                  <br>\r\n                                  <span class=\"spn\">\r\n                                    <span style=\"color: rgb(230, 40, 49)\">&nbsp; {{pro.pdesc}} </span></span>\r\n                                  \r\n                                </span>\r\n                              </span>\r\n                        </div>\r\n                      </div>\r\n                      </div>\r\n            \r\n                            <!-- Upcomming -->  \r\n           <!--   </div>\r\n\r\n              <div>\r\n              <div >\r\n                  <img  src=\"../../assets/uploads/{{pro.images}}\"  />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/006.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/007.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img src=\"../../assets/img/008.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/009.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/010.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img src=\"../../assets/img/011.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/024.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/025.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/026.jpg\" />\r\n              </div>\r\n              <div >\r\n                  <img  src=\"../../assets/img/027.jpg\" />\r\n              </div>\r\n            </div>\r\n         </div>\r\n          <!-- Bullet Navigator -->\r\n        <div style=\"clear: both;\"></div>\r\n\r\n\r\n\r\n<!-- \r\n<div class=\"big\" >\r\n  <div class=\"inner\" id=\"innerdiv\">\r\n            <div class=\"abc\">\r\n                <img  src=\"../../assets/img/001.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/005.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/006.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/007.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img src=\"../../assets/img/008.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/009.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/010.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img src=\"../../assets/img/011.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/024.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/025.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/026.jpg\" />\r\n            </div>\r\n            <div >\r\n                <img  src=\"../../assets/img/027.jpg\" />\r\n            </div>\r\n          </div>\r\n       </div>\r\n        <!-- Bullet Navigator -->\r\n      <!-- <div style=\"clear: both;\"></div> -->\r\n\r\n\r\n      "

/***/ }),

/***/ "./src/app/product-slider/product-slider.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-slider/product-slider.component.ts ***!
  \************************************************************/
/*! exports provided: ProductSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSliderComponent", function() { return ProductSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductSliderComponent = /** @class */ (function () {
    function ProductSliderComponent(nobj) {
        this.nobj = nobj;
        this.lf = 0;
        this.showimg = 3;
        this.fun1 = function () {
            var len = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#innerdiv > div").length;
            this.totwid = len * 200;
            jquery__WEBPACK_IMPORTED_MODULE_1___default()("#innerdiv").css("width", this.totwid);
        };
        this.funnext = function () {
            this.lf = this.lf - 200;
            var fin = this.showimg * -200;
            alert(fin);
            fin = this.totwid - fin;
            // alert(this.totwid)
            fin = -fin;
            //alert(this.lf)
            //alert(fin)
            if (this.lf > fin) {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()("#innerdiv").animate({ left: this.lf }, 200);
            }
            else {
                alert("no");
            }
            //$("#innerdiv").css("left",this.lf)
        };
    }
    ProductSliderComponent.prototype.ngOnInit = function () {
        this.fun1();
        this.funProd();
    };
    ProductSliderComponent.prototype.funProd = function () {
        var _this = this;
        this.nobj.get("/category/products").subscribe(function (dt) {
            //alert(dt._body)
            _this.prodata = JSON.parse(dt['_body']);
            // console.log(this.prodata)
        });
    };
    ProductSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-slider',
            template: __webpack_require__(/*! ./product-slider.component.html */ "./src/app/product-slider/product-slider.component.html"),
            styles: [__webpack_require__(/*! ./product-slider.component.css */ "./src/app/product-slider/product-slider.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductSliderComponent);
    return ProductSliderComponent;
}());



/***/ }),

/***/ "./src/app/producttemplate/producttemplate.component.css":
/*!***************************************************************!*\
  !*** ./src/app/producttemplate/producttemplate.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.spn{\r\n    margin: 5px;\r\n}\r\n.fas{\r\n   border-radius: 4px 0px 0px 4px;color: white;background-color: rgb(0, 128, 128);width: 35px;height:36px;font-size: 17px;padding: 10px; \r\n}\r\n.cartbtn{\r\n   border-radius: 0px;padding: 5px;color:white;margin-top: -6px;background-color: rgb(0, 128, 128);\r\n}\r\n/* #prospn{\r\n  border-radius:4px; border: 1px solid silver;width: 230px;box-shadow :0px 0px 5px black\r\n} */\r\n.img {\r\n   \r\n  transition: -webkit-transform .4s;\r\n   \r\n  transition: transform .4s;\r\n   \r\n  transition: transform .4s, -webkit-transform .4s;\r\n  margin: 0 auto;\r\n}\r\n.img:hover { /* IE 9 */\r\n  -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n  transform: scale(1.1); \r\n}"

/***/ }),

/***/ "./src/app/producttemplate/producttemplate.component.html":
/*!****************************************************************!*\
  !*** ./src/app/producttemplate/producttemplate.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div style=\"height:380px; width:245px; border: 1px solid silver; float: left;margin: 5px;padding: 10px; margin-left: 16px;background-color: rgba(241, 221, 221, 0.137);box-shadow: 0px 0px 5px rgb(192, 186, 186);border-radius: 4px;\" *ngFor=\"let pro of ssubdata\" >\r\n      <span><img src=\"../../assets/uploads/{{pro.images}}\" class=\"img\" width=\"126px;\" height=\"170\" (click)=\"funDetail(pro._id)\" style=\"cursor: pointer;margin-left: 50px;margin-top: 15px;\"></span><br><br>\r\n      <h4>{{pro.pname}}</h4>\r\n      <span style=\"color: green\">{{pro.pprice | currency: \"INR\"}}</span><br>\r\n      <span class=\"spn\" [ngStyle]=\"{backgroundColor:pro.pcolor,color:pro.pcolor}\">. . . . .\r\n        </span>\r\n      <br>\r\n      <!-- <span>{{pro.pdesc}}</span><br> -->\r\n    </div>\r\n </div>\r\n </div>"

/***/ }),

/***/ "./src/app/producttemplate/producttemplate.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/producttemplate/producttemplate.component.ts ***!
  \**************************************************************/
/*! exports provided: ProducttemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducttemplateComponent", function() { return ProducttemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProducttemplateComponent = /** @class */ (function () {
    function ProducttemplateComponent(robj, probj, rout) {
        this.robj = robj;
        this.probj = probj;
        this.rout = rout;
    }
    ProducttemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.robj.params.subscribe(function (paramresult) {
            _this.ssid = (paramresult['_id']);
            var proDetail = { sscatid: _this.ssid };
            _this.probj.post("category/productss", proDetail).subscribe(function (procbk) {
                _this.ssubdata = JSON.parse(procbk['_body']);
                console.log(_this.ssubdata);
                jquery__WEBPACK_IMPORTED_MODULE_3___default()("document").ready(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".cartbtn").mouseover(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).css("background-color", " rgb(25, 80, 63)");
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".cartbtn").mouseout(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).css("background-color", " rgb(0, 128, 128)");
                    });
                });
            });
        });
    };
    ProducttemplateComponent.prototype.funDetail = function (y) {
        this.rout.navigateByUrl("/prodetail;proid=" + y);
    };
    ProducttemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producttemplate',
            template: __webpack_require__(/*! ./producttemplate.component.html */ "./src/app/producttemplate/producttemplate.component.html"),
            styles: [__webpack_require__(/*! ./producttemplate.component.css */ "./src/app/producttemplate/producttemplate.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])),
        __metadata("design:paramtypes", [Object, _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProducttemplateComponent);
    return ProducttemplateComponent;
}());



/***/ }),

/***/ "./src/app/purchagedetails/purchagedetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/purchagedetails/purchagedetails.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/purchagedetails/purchagedetails.component.html":
/*!****************************************************************!*\
  !*** ./src/app/purchagedetails/purchagedetails.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <img src=\"/assets/ok.png\" class=\"img-responsive\" width=\"200px\">\r\n</div>\r\n<h5 class=\"text-center\" style=\"color: rgb(54, 211, 54);font-size: 38px;font-weight: bold\">\r\n  Your Order Successfull !</h5>\r\n<h6 class=\"text-center\"> You'll recieve a sms once your order is dispatched.</h6>\r\n<p class=\"text-center\" style=\"font-size: 20px\">Your order will sent to you on your Location.</p>\r\n<h3 class=\"text-center\" style=\"color: blue;\">Thank's For Shopping with Us !</h3>\r\n<div class=\"text-center\"><button class=\"btn btn-success\" (click)=\"Continue()\">Shopping Continue</button></div>\r\n"

/***/ }),

/***/ "./src/app/purchagedetails/purchagedetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/purchagedetails/purchagedetails.component.ts ***!
  \**************************************************************/
/*! exports provided: PurchagedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchagedetailsComponent", function() { return PurchagedetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PurchagedetailsComponent = /** @class */ (function () {
    function PurchagedetailsComponent(hobj, aobj) {
        this.hobj = hobj;
        this.aobj = aobj;
    }
    PurchagedetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aobj.params.subscribe(function (prmdata) {
            if (prmdata['userid']) {
                var uid = prmdata['userid'];
                // alert(uid)
                var udata = { "userid": uid };
                // alert(udata)
                _this.hobj.post("category/purdet", udata).subscribe(function (dt) {
                    // alert(dt['_body'])
                    _this.purdata = JSON.parse(dt['_body']);
                    //console.log(this.purdata)
                    // alert(this.purdata[0].products[0].pname)
                });
            }
        });
    };
    PurchagedetailsComponent.prototype.Continue = function () {
        window.location.href = "";
    };
    PurchagedetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchagedetails',
            template: __webpack_require__(/*! ./purchagedetails.component.html */ "./src/app/purchagedetails/purchagedetails.component.html"),
            styles: [__webpack_require__(/*! ./purchagedetails.component.css */ "./src/app/purchagedetails/purchagedetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PurchagedetailsComponent);
    return PurchagedetailsComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.texboxes{\r\n  padding: 7px;\r\n  /* width:186px; */\r\n  height: 39px;\r\n  border-radius: 0px;\r\n  border: 1px solid silver;\r\n  color: rgb(59, 53, 51);\r\n  /* font-size:22px; */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.areas{\r\n  color: rgb(41, 35, 33);\r\n  /* font-size: 22px; */\r\n  border-radius: 0px;\r\n  height: 50px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.con{\r\n  color: rgb(39, 35, 34);\r\n  /* font-size: 22px; */\r\n  border-radius: 0px;\r\n  height: 39px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.modal-dialogs{\r\n  margin: auto;\r\n  padding: 30px;\r\n}\r\n.registform{\r\n  padding: 10px; box-shadow:   0px 0px 8px rgb(156, 163, 155);\r\n  border: 1px solid silver;border-radius: 4px\r\n}\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<div class=\"row\"> \n  <div class=\"col-md-5 col-sm-12 modal-dialogs\">\n    <div class=\"col-lg-12 col-sm-12 col-12 col-md-12\" style=\"padding: 20px\">\n      <form name=\"regfrm\" #rfrm=\"ngForm\" class=\"registform\">\n            <div style=\"text-align: center\">\n              <img src=\"assets/man.png\" style=\"height: 70px;width: 70px;padding: 5px;text-align: center\"><br><br>\n            </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12 col-xm-12 \">\n              <input type=\"text\" class=\"form-control  texboxes\" placeholder=\"First Name...\" [(ngModel)]=\"fname\" name=\"nn1\" #reg1=\"ngModel\" required>\n            </div>\n            <div class=\"col-md-6 col-sm-12 col-xm-12 \">\n              <input type=\"text\" class=\"form-control  texboxes\" placeholder=\"Last Name...\" [(ngModel)]=\"lname\" name=\"nn2\" #reg2=\"ngModel\" required>\n            </div>\n          </div>\n          <span *ngIf=\"reg1.errors && reg1.errors.required\" class=\"regg\">{{mm1}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <span *ngIf=\"reg2.errors && reg2.errors.required\" class=\"regg\">{{mm2}}</span>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12 col-xm-12\">\n              <input type=\"email\" class=\"form-control  texboxes\" placeholder=\"Email ID...\" [(ngModel)]=\"email\" name=\"nn3\" #reg3=\"ngModel\" ng-Model email required \n              pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n             \n            </div>\n            <div class=\"col-md-6 col-sm-12 col-xm-12\">\n              <input type=\"text\" class=\"form-control  texboxes\" placeholder=\"User ID...\" [(ngModel)]=\"userid\" name=\"nn4\" #reg4=\"ngModel\" required>\n            </div>\n          </div>\n          <span *ngIf=\"reg3.errors && reg3.errors.pattern\" style=\"color: rgb(246, 139, 180);;font-size: 12px;margin-left: -65px;\">Invalid Email Id</span>\n          <span *ngIf=\"reg3.errors && reg3.errors.required\" class=\"regg\">{{mm3}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <span *ngIf=\"reg4.errors && reg4.errors.required\" class=\"regg\">{{mm4}}</span>&nbsp;&nbsp;&nbsp;&nbsp;\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12 col-xm-12 \">\n              <input type=\"password\" class=\"form-control  texboxes\" placeholder=\"Password...\" [(ngModel)]=\"password\" name=\"nn5\" #reg5=\"ngModel\" required>\n            </div>\n            <div class=\"col-md-6 col-sm-12 col-xm-12 \">\n              <input type=\"password\" class=\"form-control  texboxes\" placeholder=\"Re-Password..\" [(ngModel)]=\"rpassword\" (blur)=\"checkPass(password)\" name=\"nn6\" #reg6=\"ngModel\" required>\n            </div>\n          </div>\n          <span style=\"color: rgb(246, 139, 180);font-size: 12px;margin-left: 0px;\">{{psms}}</span>\n          <span *ngIf=\"reg5.errors && reg5.errors.required\" class=\"regg\">{{mm5}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <span *ngIf=\"reg6.errors && reg6.errors.required\" class=\"regg\">{{mm6}}</span>&nbsp;&nbsp;&nbsp;&nbsp;\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xm-12\">\n              <input type=\"text\" class=\"form-control con\" placeholder=\"Contact No..\" [(ngModel)]=\"contact\" name=\"nn7\" #reg7=\"ngModel\"\n              pattern=\"[0-9]*\" maxlength=\"10\" minlength=\"10\" required>\n            </div>\n          </div>\n          <span *ngIf=\"reg7.errors && reg7.errors.required\" class=\"regg\">{{mm7}}</span>&nbsp;\n          <span *ngIf=\"reg7.errors && reg7.errors.maxlength\" class=\"regg\">{{csms}}</span>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xm-12 \">\n              <textarea type=\"text\" class=\"form-control areas\"  placeholder=\"Address Details...\" [(ngModel)]=\"address\" name=\"nn8\" #reg8=\"ngModel\" required></textarea>\n            </div>\n          </div>\n          <span *ngIf=\"reg8.errors && reg8.errors.required\" class=\"regg\">{{mm8}}</span>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xm-12 \">\n              <textarea type=\"text\" class=\"form-control areas\"  placeholder=\"Billing Address...\" name=\"nn9\" [(ngModel)]=\"saddress\" name=\"nn9\" #reg9=\"ngModel\"\n                required></textarea>\n            </div>\n          </div>\n          <span *ngIf=\"reg9.errors && reg9.errors.required\" class=\"regg\" >{{mm9}}</span>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xm-12 \">\n                <input type=\"button\" value=\"Register\" class=\"btn btn-success\" style=\"border-radius: 0px;width:150px;float: right;\"\n                  (click)=\"funRegister(rfrm)\">\n                  <input type=\"reset\" value=\"Reset\" data-dismiss=\"modal\" class=\"btn btn-danger\" style=\"border-radius: 0px;float: right;margin-right: 7px;\">\n              </div>\n          </div>\n      </form>\n  </div>\n  </div>\n  \n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(cobj, rout) {
        var _this = this;
        this.cobj = cobj;
        this.rout = rout;
        this.usercback = function (dt) {
            _this.register_data = JSON.parse(dt['_body']);
            console.log(_this.register_data.success);
            if (_this.register_data['success'] == true) {
                alert(_this.register_data.message);
                _this.fname = "";
                _this.userid = "";
                _this.email = "";
                _this.password = "";
                _this.contact = "";
                _this.address = "";
                _this.fname = "";
                _this.rpassword = "";
                _this.rout.navigateByUrl('/user-login-securly');
            }
            else {
                alert(_this.register_data.message);
            }
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.funRegister = function (regval) {
        if (regval.valid == false) {
            this.mm1 = " * First name ";
            this.mm2 = " * Last name  ";
            this.mm3 = " * Enter Email  ";
            this.mm4 = " * User id ";
            this.mm5 = " * Enter Password ";
            this.mm6 = " * Re-password";
            this.mm7 = " * Enter Contact ";
            this.mm8 = " * Enter address ";
            this.mm9 = " * Shipping address";
        }
        else {
            var userData = { fname: this.fname, lname: this.lname, email: this.email, userid: this.userid,
                password: this.password, rpassword: this.rpassword, Contact: this.contact,
                address: { BillindAdsress: [{ name: this.fname }, { Contact: this.contact }, { biladdress: this.address }],
                    Shipping: [{ lname: this.lname }, { Contact: this.contact }, { shipaddress: this.saddress }] } };
            this.cobj.post("/register/userReg", userData).subscribe(this.usercback);
        }
    };
    RegistrationComponent.prototype.checkPass = function (rpwd) {
        if (rpwd != this.rpassword) {
            alert(" Password is not matched !");
        }
        else {
            this.psms = "";
        }
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n\r\n          </div>\r\n          <div class=\"col-md-4 text-center\" style=\"box-shadow: 0px 8px 16px 0px rgb(245, 242, 242);background:linear-gradient(rgb(131, 41, 216) 30%,rgb(132, 122, 236));\">\r\n            <form><br>\r\n              <h2 id=\"otphed\" style=\"color: azure\">Set Your Password</h2><br>\r\n              <input type=\"text\" class=\"form-control deco\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter Email\"><br>\r\n              <input type=\"text\" class=\"form-control deco\" [(ngModel)]=\"otp\" name=\"otp\" pattern=\"[0-9]*\" maxlength=\"4\" placeholder=\"Enter OTP\"><br>\r\n              <input type=\"text\" class=\"form-control deco\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Enter New Password\"><br>\r\n              <input type=\"button\" class=\"btn btn-warning form-control otpbtn\" value=\"Submit OTP\" (click)=\"ResetPassword()\"><br><br>\r\n            </form>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(http, nav) {
        var _this = this;
        this.http = http;
        this.nav = nav;
        this.otpcb = function (dt) {
            _this.otpdat = JSON.parse(dt._body);
            if (_this.otpdat.success == true) {
                alert('Your Pasword Updataed');
            }
            else {
                alert('This is Invalid Email Id or OTP');
            }
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.ResetPassword = function () {
        this.cond = parseInt(this.otp);
        this.model = { password: this.password };
        this.http.post("searchapi/resetPassword", [{ otp: this.cond, email: this.email }, this.model]).subscribe(this.otpcb);
        console.log(this.model);
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/send-otp/send-otp.component.css":
/*!*************************************************!*\
  !*** ./src/app/send-otp/send-otp.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/send-otp/send-otp.component.html":
/*!**************************************************!*\
  !*** ./src/app/send-otp/send-otp.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n  \r\n        </div>\r\n        <div class=\"col-md-4 text-center\" style=\"box-shadow: 0px 8px 16px 0px rgb(245, 242, 242);background:linear-gradient(rgb(131, 41, 216) 30%,rgb(132, 122, 236));\"> \r\n               <form><br>\r\n                 <h2 id=\"otphed\" style=\"color:azure;font-size: 18px;text-align: center\">Submit Register Email To<br> Generate OTP</h2><br>\r\n                 <input type=\"text\" class=\"form-control deco\" [(ngModel)]=\"email\" name=\"oottpp1\" placeholder=\"Enter Email\"><br>\r\n                  <!-- <input type=\"text\" class=\"form-control deco\" [(ngModel)]=\"otp\" name=\"oottpp\" pattern=\"[0-9]*\" maxlength=\"4\" placeholder=\"Enter OTP\"><br>  -->\r\n                  <input type=\"button\" class=\"btn btn-warning form-control otpbtn\" value=\"Submit OTP\" (click)=\"funNew()\"><br><br>\r\n               </form>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n                   \r\n            </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/send-otp/send-otp.component.ts":
/*!************************************************!*\
  !*** ./src/app/send-otp/send-otp.component.ts ***!
  \************************************************/
/*! exports provided: SendOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendOtpComponent", function() { return SendOtpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendOtpComponent = /** @class */ (function () {
    function SendOtpComponent(http, nav) {
        var _this = this;
        this.http = http;
        this.nav = nav;
        this.otpcb = function (dt) {
            _this.otpdat = JSON.parse(dt._body);
            if (_this.otpdat.success == true) {
                alert('Your Valid OTP : ' + _this.otpdat.otp);
                _this.nav.navigateByUrl('/create-new-password');
            }
            else {
                alert('This i Invalid Email Id');
            }
        };
    }
    SendOtpComponent.prototype.ngOnInit = function () {
    };
    SendOtpComponent.prototype.funNew = function () {
        //console.log(this.email);
        this.http.post("searchapi/getOTP", { email: this.email }).subscribe(this.otpcb);
    };
    SendOtpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-otp',
            template: __webpack_require__(/*! ./send-otp.component.html */ "./src/app/send-otp/send-otp.component.html"),
            styles: [__webpack_require__(/*! ./send-otp.component.css */ "./src/app/send-otp/send-otp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SendOtpComponent);
    return SendOtpComponent;
}());



/***/ }),

/***/ "./src/app/shoppinghistry/shoppinghistry.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shoppinghistry/shoppinghistry.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainadd{\r\n    width: 100%;\r\n}\r\n.add1{\r\n    float: left;\r\n    margin-left: 3%;\r\n}\r\n.add2{\r\n    float: left;\r\n    margin-left: 3%;\r\n    \r\n}\r\n.add3{\r\n    float: left;\r\n    margin-left: 3%;\r\n}\r\n.add4{\r\n    float: left;\r\n    margin-left: 3%;\r\n}\r\n.add5{\r\n    float: left;\r\n    margin-left: 3%;\r\n}"

/***/ }),

/***/ "./src/app/shoppinghistry/shoppinghistry.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shoppinghistry/shoppinghistry.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2 class=\"text-center\" style=\"font-family: arial;color: rgb(110, 143, 118)\">Purchage History</h2>\r\n    <hr>\r\n    <table class=\"table\">\r\n      <tbody>\r\n        <tr *ngFor=\"let x of purdata\" style=\"margin-top: 10px;padding: 20px; box-shadow: 0px 0px 5px  silver;margin-left: 200px;\">\r\n          <td>\r\n            <span style=\"font-size: 20px;color: blue;\">Purchage Date : {{x.date}}</span>\r\n            <tr *ngFor=\"let xx of x['Products']\">\r\n              <td>\r\n                <img src=\"../../assets/uploads/{{xx.images}}\" width=\"50px\" height=\"40px;\" style=\"float: left;\">\r\n              </td>\r\n              <td>\r\n                <span style=\"color: black;font-size: 20px;margin-left: 20px;\">{{xx.pname}}</span>\r\n              </td>\r\n              <td>\r\n                <span style=\"color: rgba(255, 95, 47, 0.87);font-size: 20px;margin-left: 20px;\"> Quantity: &nbsp;</span>\r\n                <span style=\"color: rgba(255, 95, 47, 0.87);font-weight: bold;margin-left: 0px;\">{{xx.quantity}}</span>\r\n              </td>\r\n              <td>\r\n                \r\n                <span style=\"color: rgb(127, 190, 31);font-size: 19px;margin-left: 20px;\">{{xx.pprice | currency: \"INR\"}}</span>               \r\n                <br>\r\n              </td>\r\n              <td>\r\n                <input type=\"button\" value=\"Remove\" class=\"btn btn-danger\" (click)=\"removehisrty(x._id)\">\r\n              </td>\r\n            </tr>\r\n            <td style=\"box-shadow:0px 0px  4px black;height:20px;\"><span style=\"color: rgb(107, 238, 157);font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight: bold\">Total Ammount</span>&nbsp;<span style=\"color: rgb(60, 184, 60);font-size: 15;font-weight: bold;\"> : {{x.Total_price | currency: \"INR\"}}</span></td>\r\n          </td>\r\n         \r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table>\r\n  </div><br><br>"

/***/ }),

/***/ "./src/app/shoppinghistry/shoppinghistry.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shoppinghistry/shoppinghistry.component.ts ***!
  \************************************************************/
/*! exports provided: ShoppinghistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppinghistryComponent", function() { return ShoppinghistryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppinghistryComponent = /** @class */ (function () {
    function ShoppinghistryComponent(hobj, aobj, r) {
        this.hobj = hobj;
        this.aobj = aobj;
        this.r = r;
        this.parr = [];
    }
    ShoppinghistryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aobj.params.subscribe(function (prmdata) {
            if (prmdata['userid']) {
                _this.uid = prmdata['userid'];
                var udata = { "userid": _this.uid };
                _this.hobj.post("category/purdet", udata).subscribe(function (dt) {
                    _this.purdata = JSON.parse(dt['_body']);
                });
            }
        });
    };
    ShoppinghistryComponent.prototype.removehisrty = function (rdata) {
        var ob = { _id: rdata };
        this.hobj.post("category/removehistry", ob).subscribe(function (dt) {
            alert(dt['_body']);
        });
    };
    ShoppinghistryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shoppinghistry',
            template: __webpack_require__(/*! ./shoppinghistry.component.html */ "./src/app/shoppinghistry/shoppinghistry.component.html"),
            styles: [__webpack_require__(/*! ./shoppinghistry.component.css */ "./src/app/shoppinghistry/shoppinghistry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ShoppinghistryComponent);
    return ShoppinghistryComponent;
}());



/***/ }),

/***/ "./src/app/show-cart-details/show-cart-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/show-cart-details/show-cart-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    list-style: none;   \r\n}\r\n  \r\nform #decrease {\r\n    /* margin-right: -4px; */\r\n    border-radius: 8px 0 0 8px;\r\n  }\r\n  \r\nform #increase {\r\n    /* margin-left: -4px; */\r\n    border-radius: 0 8px 8px 0;\r\n  }\r\n  \r\ninput#number {\r\n    text-align: center;\r\n    margin-top: -50px;\r\n    border: none;\r\n    padding-left:12px;\r\n    border: 1px solid #ddd;\r\n\r\n    margin: 0px;\r\n    width: 40px;\r\n    height: 38px;\r\n  }\r\n  \r\n.value-button {\r\n    display: inline-block;\r\n    border: 1px solid  rgb(152, 153, 226);\r\n    margin-top: -7px;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n    font-size:20px;\r\n    vertical-align: middle;\r\n    padding: 2px 0;\r\n    background:rgb(152, 153, 226);\r\n \r\n    color:white;\r\n  }\r\n  \r\n.value-button:hover {\r\n    cursor: pointer;\r\n    background-color:mediumslateblue;\r\n    color:rgb(0, 247, 255);\r\n  }\r\n  \r\n/* #ttlamt{\r\n    background-color: #ddd\r\n  } */\r\n  \r\n.ttlamt {\r\n   \r\n    transition: -webkit-transform .4s;\r\n   \r\n    transition: transform .4s;\r\n   \r\n    transition: transform .4s, -webkit-transform .4s;\r\n    margin: 0 auto;\r\n}\r\n  \r\n.ttlamt:hover { /* IE 9 */\r\n    -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n    transform: scale(1.2); \r\n}"

/***/ }),

/***/ "./src/app/show-cart-details/show-cart-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/show-cart-details/show-cart-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n   <div class=\"row\">\r\n     <div class=\"col-md-2\"></div>\r\n     <div class=\"col-md-8\">\r\n      \r\n      <h1>\r\n    {{str}}\r\n </h1>\r\n <ul>\r\n   <li *ngFor=\"let product_info of data;let ii=index\">\r\n\r\n     <span><img src=\"../../assets/uploads/{{product_info.images}}\" width=\"60px\"></span>\r\n     {{product_info.pname  }}\r\n     {{product_info.pprice | currency: \"INR\" }}\r\n     <button class=\"btn btn-danger\" (click)=\"remove_cart_item(ii)\" style=\"margin-left: 40px;float: right;\" >Remove Item</button>\r\n   </li>\r\n </ul><br>\r\n <span *ngIf=\"data.length>0\" class=\"text-center\" style=\"margin-left: 60px;\">\r\n   <input type=\"button\" value=\"Order Now\" class=\"btn btn-success text-center\" (click)=\"fun_order_now()\" style=\"width: 200px;height: 50px;font-size: 20px;\"> \r\n </span>\r\n\r\n     </div>\r\n     <div class=\"col-md-2\"></div>\r\n   </div>\r\n</div>\r\n -->\r\n<div class=\"container\">\r\n  <div class=\"row\" *ngFor=\"let product_info of data;let ind=index\">\r\n    <div class=\"col-md-3\" >\r\n        <span><img src=\"../../assets/uploads/{{product_info.images}}\" width=\"150px\" height=\"130px;\" style=\"float: right;box-shadow: 0px 0px 7px black;border-radius: 4px;  border: 1px solid silver\"></span>\r\n    </div>\r\n    <div class=\"col\">\r\n       <span style=\"text-transform: uppercase;font-weight: bold;font-size: 20px;\">{{product_info.pname  }}</span><br>\r\n       <span [ngStyle]=\"{backgroundColor:product_info.pcolor,color:product_info.pcolor}\">. . . . . .</span><br>\r\n         <span style=\"color: rgb(96, 199, 96);font-weight: bold\"> {{product_info.pprice | currency: \"INR\" }}<br></span>\r\n       <span style=\"color: crimson;\">{{product_info.pdesc  }}</span><br>\r\n       <br>\r\n       <!--increment decrement -->\r\n       <form>\r\n        <div class=\"value-button\" id=\"decrease\" (click)=\"decreaseValue(ind)\" ><img src=\"/assets/-.png\" width=\"30px\"></div>\r\n        <input type=\"number\" id=\"number\"  value=\"1\" name=\"qty\"   readonly [(ngModel)]=\"product_info.selqty  \">\r\n        <div class=\"value-button\" id=\"increase\" (click)=\"increaseValue(product_info.quantity,ind)\" ><img src=\"/assets/+.png\" width=\"20px\"></div>\r\n</form>  \r\n        <button class=\"btn btn-danger\" (click)=\"remove_cart_item(ii)\" style=\"margin-left: 40px;float: right;\" >Remove Item</button>\r\n      \r\n    <br>\r\n    <br>\r\n    </div>\r\n    \r\n  </div><br><br>\r\n  <span *ngIf=\"data.length>0\" class=\"text-center\" style=\" float: right;\">\r\n      <input type=\"button\" value=\"Order Now\" class=\"btn btn-success text-center\" (click)=\"fun_order_now()\" style=\"width: 200px;height: 50px;font-size: 20px;\"> \r\n    </span>\r\n  <br>\r\n  <div class=\"ttlamt\" style=\"width: 300px;margin-left: -10px;\">\r\n   <span style=\"box-shadow: 0px 0px 10px black;padding: 10px;margin-left: 90px;\">\r\n      <span style=\"color: rgb(106, 238, 156);font-family: Arial, Helvetica, sans-serif;font-size: 12px;font-weight: bold\">Total Ammount</span>&nbsp;<span style=\"color: rgb(23, 192, 23);font-size: 15;font-weight: bold;\"> : {{TotalAmnt | currency: \"INR\"}}</span>\r\n   </span>\r\n    </div>\r\n  \r\n  \r\n</div>\r\n  <br><br>"

/***/ }),

/***/ "./src/app/show-cart-details/show-cart-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/show-cart-details/show-cart-details.component.ts ***!
  \******************************************************************/
/*! exports provided: ShowCartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCartDetailsComponent", function() { return ShowCartDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-cart-image-service.service */ "./src/app/show-cart-image-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowCartDetailsComponent = /** @class */ (function () {
    function ShowCartDetailsComponent(servar, app, http, robj) {
        this.servar = servar;
        this.app = app;
        this.http = http;
        this.robj = robj;
        this.data = [];
        this.TotalAmnt = 0;
        this.total = 0;
    }
    ShowCartDetailsComponent.prototype.ngOnInit = function () {
        var arr;
        if (localStorage.getItem("cart_items") != null) {
            arr = localStorage.getItem("cart_items");
            arr = arr.replace(/\\/g, "");
            arr = arr.replace(/"{/g, "{");
            arr = arr.replace(/}"/g, "}");
            arr = JSON.parse(arr);
            this.tot_cart_items = arr.length;
            this.servar.changeMessage(this.tot_cart_items.toString());
            this.data = arr;
            this.str = "Cart Details";
            var sel = localStorage.getItem("cart_item.selqty");
            this.cartvalue = sel;
            for (var i = 0; i < arr.length; i++) {
                var pprice = arr[i].pprice;
                var quantity = arr[i].selqty;
                var allpprice = quantity * parseInt(arr[i].pprice);
                this.TotalAmnt += allpprice;
                // alert(this.TotalAmnt)
            }
        }
        else {
            this.str = "Your cart is empty";
        }
    };
    ShowCartDetailsComponent.prototype.increaseValue = function (dt, ind) {
        if (this.data[ind].selqty == dt)
            alert("Exceed....");
        else {
            this.data[ind].selqty++;
        }
    };
    ShowCartDetailsComponent.prototype.decreaseValue = function (ind) {
        if (this.data[ind].selqty > 1) {
            this.data[ind].selqty--;
        }
    };
    ShowCartDetailsComponent.prototype.fun_order_now = function () {
        var _this = this;
        var arr;
        if (localStorage.getItem("login_check") != null) {
            arr = localStorage.getItem("cart_items");
            arr = arr.replace(/\\/g, "");
            arr = arr.replace(/"{/g, "{");
            arr = arr.replace(/}"/g, "}");
            arr = JSON.parse(arr);
            this.uid = localStorage.getItem("userid");
            var oredr_data = [];
            for (var i = 0; i < arr.length; i++) {
                var product = {};
                product.pname = arr[i].pname;
                product.quantity = arr[i].selqty;
                product.pprice = arr[i].pprice;
                product.allpprice = product.quantity * parseInt(arr[i].pprice);
                // alert(product.pprice)
                this.total += product.allpprice;
                product.images = arr[i].images;
                oredr_data.push(product);
                console.log(oredr_data);
            }
            var dobj = { _id: this.uid, date: new Date(), Products: oredr_data, Total_price: this.total };
            this.http.post("category/addcart_data", dobj).subscribe(function (dt) {
                alert(dt['_body']);
                if (localStorage.getItem("login_check") != null) {
                    localStorage.removeItem("cart_items");
                    _this.robj.navigateByUrl("/p_details");
                }
            });
        }
        else {
            alert('User must be logged In !!');
            this.app.toLogin();
        }
    };
    ShowCartDetailsComponent.prototype.remove_cart_item = function (ind) {
        this.data.splice(ind, 1);
        localStorage.setItem('cart_items', JSON.stringify(this.data));
        alert("Removed From Cart");
        this.servar.changeMessage(this.data.length.toString());
        if (this.data.length == 0) {
            localStorage.removeItem("cart_items");
            this.str = "Your cart is empty";
        }
        this.robj.navigateByUrl("/cartdet");
    };
    ShowCartDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-cart-details',
            template: __webpack_require__(/*! ./show-cart-details.component.html */ "./src/app/show-cart-details/show-cart-details.component.html"),
            styles: [__webpack_require__(/*! ./show-cart-details.component.css */ "./src/app/show-cart-details/show-cart-details.component.css")]
        }),
        __metadata("design:paramtypes", [_show_cart_image_service_service__WEBPACK_IMPORTED_MODULE_1__["ShowCartImageServiceService"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ShowCartDetailsComponent);
    return ShowCartDetailsComponent;
}());



/***/ }),

/***/ "./src/app/show-cart-image-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/show-cart-image-service.service.ts ***!
  \****************************************************/
/*! exports provided: ShowCartImageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCartImageServiceService", function() { return ShowCartImageServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowCartImageServiceService = /** @class */ (function () {
    function ShowCartImageServiceService() {
        if (localStorage.getItem("cart_items") != null) {
            var arr = localStorage.getItem("cart_items");
            arr = arr.replace(/\\/g, "");
            arr = arr.replace(/"{/g, "{");
            arr = arr.replace(/}"/g, "}");
            arr = JSON.parse(arr);
            this.tot_cart_items = arr.length.toString();
            this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.tot_cart_items);
            this.currentMessage = this.messageSource.asObservable();
        }
        else {
            this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("0");
            this.currentMessage = this.messageSource.asObservable();
        }
    }
    ShowCartImageServiceService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    ShowCartImageServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShowCartImageServiceService);
    return ShowCartImageServiceService;
}());



/***/ }),

/***/ "./src/app/upcomming/upcomming.component.css":
/*!***************************************************!*\
  !*** ./src/app/upcomming/upcomming.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spn{\r\n    margin: 8px;\r\n}\r\n.fas{\r\n   border-radius: 4px 0px 0px 4px;color: white;background-color: rgb(0, 128, 128);width: 35px;height:36px;font-size: 17px;padding: 10px; \r\n}\r\n.cartbtn{\r\n   border-radius: 0px;padding: 5px;color:white;margin-top: -6px;;background-color: rgb(0, 128, 128);\r\n}\r\n#prospn{\r\n  border-radius:4px;margin-top:13px; margin-left: 15px; padding: 10px; float: left; border: 1px solid silver;width: 230px;\r\n}\r\n.img {\r\n   \r\n  transition: -webkit-transform .4s;\r\n   \r\n  transition: transform .4s;\r\n   \r\n  transition: transform .4s, -webkit-transform .4s;\r\n  margin: 0 auto;\r\n}\r\n.img:hover { /* IE 9 */\r\n  -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n  transform: scale(1.1); \r\n}\r\n.ads {\r\n   \r\n  transition: -webkit-transform .4s;\r\n   \r\n  transition: transform .4s;\r\n   \r\n  transition: transform .4s, -webkit-transform .4s;\r\n  margin: 0 auto;\r\n}\r\n.ads:hover { /* IE 9 */\r\n  -webkit-transform: scale(0.5); /* Safari 3-8 */\r\n  transform: scale(1.1); \r\n}"

/***/ }),

/***/ "./src/app/upcomming/upcomming.component.html":
/*!****************************************************!*\
  !*** ./src/app/upcomming/upcomming.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\" style=\"height:400px;margin-top: 11px;\">\r\n      <img src=\"/assets/upcomming.jpg\" class=\"ads\" width=\"330px;\" height=\"390px;\" style=\"margin-left: 8px;cursor: pointer;\">\r\n    </div>\r\n    <div class=\"col\" style=\"float: left;\">\r\n      <h5 class=\"\" style=\"color:rgb(14, 9, 1);text-transform: uppercase;margin-left: 20px;font-weight: bold\">Upcomming soon</h5>\r\n      <span id=\"prospn12\">\r\n        <span *ngFor=\"let upro of uppdata\" id=\"prospn\" style=\"height: 330px;background-color: rgba(241, 221, 221, 0.137);box-shadow: 0px 0px 5px rgb(192, 186, 186);\">\r\n          <span class=\"spn\" id=\"prospn1\">\r\n            <span class=\"spn\">\r\n              <span></span>\r\n              <img src=\"../../assets/uploads/{{upro.images}}\" class=\"img\" width=\"170px;\" height=\"130\" (click)=\"funDetails(upro._id)\"\r\n                style=\"cursor: pointer;\">\r\n            </span>\r\n            <br>\r\n            <br>\r\n            <span style=\"color:black;font-weight:bolder;font-size: 14px;text-align: justify;text-transform: uppercase;font-family: arial\">\r\n             {{upro.pname}}\r\n             </span>\r\n          </span>\r\n          <br>\r\n          <span class=\"spn\" style=\"color: rgb(55, 241, 18);font-size: 18px;\">\r\n            {{upro.pprice | currency: \"INR\"}}\r\n          </span>\r\n          <br>\r\n          <span class=\"spn\" [ngStyle]=\"{backgroundColor:upro.pcolor,color:upro.pcolor}\">. . . . .\r\n          </span>\r\n          <br>\r\n        </span>\r\n      </span>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n  <div class=\"row\"><br>\r\n    <div class=\"col-md-3 col-sm-12\" style=\"text-align: center;\">\r\n      <img src=\"/assets/upcomming.jpg\" class=\"ads\" width=\"270px;\" height=\"350px;\" style=\"margin-top: 70px\">\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n        <p style=\"text-align: center;font-size: 35px;\">Upcomming Product's</p><hr><br>\r\n      <div class=\"row\">\r\n       \r\n        <div class=\"col-md-3 col-sm-12\" *ngFor=\"let pro of uppdata\" style=\"text-align: center;margin-top:40ppx;\">\r\n          <!-- <div class=\"prodetails\"> -->\r\n          <span>\r\n            <span>\r\n              <span>\r\n                <!-- <img src=\"/assets/spnow.png\" width=\"230px;\" style=\"margin-left: 20px;margin-top: -42px;height: 60px;\"> -->\r\n                <!-- <img src=\"/assets/MyImges/new p.gif\" width=\"50px\" style=\"margin-left: 167px;margin-top: -47px\"> -->\r\n              </span>\r\n              <img src=\"../../assets/uploads/{{pro.images}}\" class=\"img\" width=\"200px;\" height=\"130\"\r\n                (click)=\"funDetails(pro._id)\"\r\n                style=\"cursor: pointer;margin-left: 15px;margin-top: -16px;\"></span><br><br>\r\n            <span\r\n              style=\"color:black;font-weight:bolder;font-size: 14px;text-align: \r\n              justify;text-transform: uppercase;font-family: arial\">&nbsp;&nbsp;&nbsp;&nbsp;{{pro.pname}}</span>\r\n              </span><br>\r\n          <span>\r\n            <span style=\"color: rgb(55, 241, 18);font-size: 18px;\">&nbsp;&nbsp;{{pro.pprice | currency: \"INR\"}}</span>\r\n          </span>\r\n          <br>\r\n          <span>\r\n            &nbsp; <span [ngStyle]=\"{backgroundColor:pro.pcolor,color:pro.pcolor}\">. . . . .</span>\r\n          </span>\r\n          <br>\r\n          <span>\r\n            <span style=\"color: rgb(230, 40, 49)\">&nbsp; {{pro.pdesc}} </span>\r\n          </span>\r\n          <br>\r\n          &nbsp;&nbsp;\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<hr>"

/***/ }),

/***/ "./src/app/upcomming/upcomming.component.ts":
/*!**************************************************!*\
  !*** ./src/app/upcomming/upcomming.component.ts ***!
  \**************************************************/
/*! exports provided: UpcommingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcommingComponent", function() { return UpcommingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpcommingComponent = /** @class */ (function () {
    function UpcommingComponent(upobj, rout) {
        this.upobj = upobj;
        this.rout = rout;
        this.upfunProd();
    }
    UpcommingComponent.prototype.ngOnInit = function () {
    };
    UpcommingComponent.prototype.upfunProd = function () {
        var _this = this;
        this.upobj.get("/category/upproducts").subscribe(function (dt) {
            _this.uppdata = JSON.parse(dt['_body']);
            // console.log(this.prodata)
        });
    };
    UpcommingComponent.prototype.funDetails = function (pdid) {
        this.rout.navigateByUrl("prodetail;pid=" + pdid);
    };
    UpcommingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upcomming',
            template: __webpack_require__(/*! ./upcomming.component.html */ "./src/app/upcomming/upcomming.component.html"),
            styles: [__webpack_require__(/*! ./upcomming.component.css */ "./src/app/upcomming/upcomming.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpcommingComponent);
    return UpcommingComponent;
}());



/***/ }),

/***/ "./src/app/userauth.service.ts":
/*!*************************************!*\
  !*** ./src/app/userauth.service.ts ***!
  \*************************************/
/*! exports provided: UserauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserauthService", function() { return UserauthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserauthService = /** @class */ (function () {
    function UserauthService(_router) {
        this._router = _router;
    }
    UserauthService.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('login_check') != null) {
            return true;
        }
        else {
            this._router.navigateByUrl('/user-login-securly');
            return false;
        }
    };
    UserauthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserauthService);
    return UserauthService;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt{\r\n    border-radius: 0px;\r\n    font-size: 20px;\r\n}\r\n.upbtn{\r\n    border-radius: 0px;     \r\n}\r\n.frmdiv{\r\n    border: 1px solid silver;\r\n    padding: 30px;\r\n    box-shadow:   0px 0px 8px rgb(156, 163, 155);\r\n    border-radius: 4px;\r\n}\r\n.pro_set{   \r\n    margin: auto;\r\n    text-align: center  \r\n}\r\n.prfsm{\r\n    float: left;\r\n    color: rgb(76, 205, 209);\r\n    font-size: 16px;\r\n    font-weight: lighter;\r\n    padding: 10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin-left: 55px;\r\n}\r\n.cont{\r\n    border: 1px solid silver;\r\n    margin: auto;\r\n    /* box-shadow:   0px 0px 8px rgb(156, 163, 155); */\r\n    border-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"u_profile\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-sm-12 col-sm-12 pro_set\">\r\n      <div class=\"cont\">\r\n       <h3 style=\"color: rgb(65, 189, 71)\">User's Profile</h3><hr>\r\n       <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <span class=\"prfsm\">Full Name : {{uname}} {{last_name}}</span>\r\n        </div>\r\n       </div>\r\n       <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <span class=\"prfsm\">Email : {{email}}</span>\r\n        </div>\r\n       </div>\r\n       <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <span class=\"prfsm\">User ID : {{uid}}</span>\r\n        </div>\r\n       </div>\r\n       <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <span class=\"prfsm\">contact : {{contact}}</span>\r\n        </div>\r\n       </div>\r\n       <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <span class=\"prfsm\">Address : {{spaddr}}</span>\r\n        </div>\r\n       </div>\r\n       <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n         <input type=\"button\" class=\"btn btn-warning\" value=\"Edit Profile\" (click)=\"edit_profile()\" style=\"float: right;margin-right: 20px\">\r\n        </div>\r\n        \r\n       </div>\r\n       <br>\r\n       </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"container\" *ngIf=\"edit_p\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8 text-center\">\r\n      <form class=\"form-horizontal md-block\">\r\n        <fieldset class=\"frmdiv\">\r\n          <h2 style=\"color:mediumspringgreen\">Edit Profile</h2>\r\n          <br>\r\n          <div class=\"control-group\">\r\n            <div class=\"controls\" >\r\n              <input type=\"text\" type=\"text\" [(ngModel)]=\"uname\" name=\"un\" placeholder=\"Update Name\" class=\"input-xlarge form-control txt\"\r\n                required=\"\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n              <input type=\"text\" [(ngModel)]=\"email\" name=\"em\" placeholder=\"Update Email\" class=\"input-xlarge form-control txt\" required=\"\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n              <input type=\"text\" [(ngModel)]=\"contact\" name=\"uco\" placeholder=\"Update Contact\" class=\"input-xlarge form-control txt\" required=\"\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n              <input type=\"text\" [(ngModel)]=\"uid\" name=\"uiid\" placeholder=\"Update UserId\" class=\"input-xlarge form-control txt\" required=\"\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"controls\">\r\n            <input type=\"password\" [(ngModel)]=\"upwd\" name=\"up\" placeholder=\"Update Password\" class=\"input-xlarge form-control txt\" required=\"\">\r\n          </div>\r\n          <br>\r\n          <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n              <input type=\"text\" [(ngModel)]=\"addr\" name=\"ad\" placeholder=\"Update Billing\" class=\"input-xlarge form-control txt\" required=\"\">\r\n            </div>\r\n          </div><br>\r\n          <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n              <input type=\"text\" [(ngModel)]=\"spaddr\" name=\"spad\" placeholder=\"Update Shipping\" class=\"input-xlarge form-control txt\" required=\"\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"button1id\"></label>\r\n            <div class=\"controls\">\r\n              <input type=\"button\" value=\"Update Profile\" class=\"btn btn-success upbtn\" (click)=\"fun_update_profile()\">&nbsp;&nbsp;\r\n              <input type=\"reset\" value=\"Reset\" class=\"btn btn-warning upbtn\">\r\n            </div>\r\n          </div>\r\n\r\n        </fieldset>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(rout, aobj, http) {
        this.rout = rout;
        this.aobj = aobj;
        this.http = http;
        this.edit_p = false;
        this.u_profile = true;
        this.funedit_profile();
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edit_p = false;
        this.u_profile = true;
        this.uidd = localStorage.getItem("userid");
        this.uobj = { _id: parseInt(this.uidd) };
        // alert(this.uidd  + "funedit")
        this.http.post("category/getuserdata", this.uobj).subscribe(function (hh) {
            console.log(hh._body);
            _this.updata = JSON.parse(hh._body);
            //alert(hh)
            _this.uname = _this.updata[0].fname;
            console.log(_this.uname);
            _this.last_name = _this.updata[0].lname;
            _this.email = _this.updata[0].email;
            _this.contact = _this.updata[0].Contact;
            // alert(this.contact)
            _this.uid = _this.updata[0].userid;
            _this.upwd = _this.updata[0].password;
            //alert(this.upwd)
            _this.addr = _this.updata[0].address.BillindAdsress[2].biladdress;
            _this.spaddr = _this.updata[0].address.Shipping[2].shipaddress;
        });
    };
    UserprofileComponent.prototype.funedit_profile = function () {
    };
    UserprofileComponent.prototype.fun_update_profile = function () {
        var _this = this;
        this.uobj = { _id: parseInt(this.uidd) };
        var newobj = { fullname: this.uname, email: this.email, Contact: this.contact, userid: this.uid, password: this.upwd, billaddress: this.addr, shipaddress: this.spaddr };
        this.http.post("category/updateProfile", [this.uobj, newobj]).subscribe(function (dd) {
            alert(dd._body);
            // this.rout.navigateByUrl("")
            _this.edit_p = false;
            _this.u_profile = true;
        });
    };
    UserprofileComponent.prototype.edit_profile = function () {
        this.edit_p = true;
        this.u_profile = false;
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Project\New_p\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map