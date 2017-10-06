webpackJsonp([2,5],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageService = /** @class */ (function () {
    function MessageService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    MessageService.prototype.createNewMessageGroup = function (friendId) {
        return this.http.put('/api/createNewMessageGroup/' + friendId + '/' + this.authService.getCurrentUserId(), null, this.authService.getHTTPHeader())
            .map(function (res) { return res.json(); });
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], MessageService);
    return MessageService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/message.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users', this.authService.getHTTPHeader())
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getAllFriends = function () {
        return this.http.get('/api/getAllFriends/' + this.authService.getCurrentUserId(), this.authService.getHTTPHeader())
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/user.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 204;


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(236);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(411),
            styles: [__webpack_require__(406)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/app.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__index_index_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_bootstrap_md__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__equal_validator_directive__ = __webpack_require__(237);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_11__index_index_component__["a" /* IndexComponent */]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__equal_validator_directive__["a" /* EqualValidatorDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__message_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* NO_ERRORS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/app.module.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    EqualValidatorDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return {
                validateEqual: { valid: false }
            };
        }
        console.log('success');
        return null;
    };
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* Directive */])({
            selector: '[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* forwardRef */])(function () { return EqualValidatorDirective_1; }), multi: true }
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["V" /* Attribute */])('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/equal-validator.directive.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.currentUser = undefined;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getCurrentUser();
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.removeToken();
        location.href = '/';
    };
    HeaderComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(412),
            styles: [__webpack_require__(407)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/header.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexComponent = /** @class */ (function () {
    function IndexComponent(userService, authService, router, messageService) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.users = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        if (this.authService.isLoggedIn()) {
            this.userService.getUsers()
                .subscribe(function (users) {
                _this.users = users;
                console.log(users);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    IndexComponent.prototype.createNewMessageGroup = function (friendId) {
        this.messageService.createNewMessageGroup(friendId)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    IndexComponent.prototype.click1 = function () {
        console.log('gf');
    };
    IndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__(413),
            styles: [__webpack_require__(408)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]) === "function" && _d || Object])
    ], IndexComponent);
    return IndexComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/index.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {};
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // emailFormControl = new FormControl('', [Validators.required,Validators.pattern(EMAIL_REGEX)]);
    // passwordFormControl = new FormControl('', [Validators.required]);
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.model);
        this.authService.login(this.model)
            .subscribe(function (data) {
            if (data.success) {
                location.href = '/'; //reload poge
            }
            else {
                _this.error = data.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.getToken = function () {
        this.authService.getToken();
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(414),
            styles: [__webpack_require__(409)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/login.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.users = [];
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(415),
            styles: [__webpack_require__(410)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/register.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/environment.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.currentUser = localStorage.getItem("currentUser");
    }
    // Get all posts from the API
    AuthService.prototype.getAllUsers = function () {
        return this.http.get('/api/users')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.register = function (user) {
        return this.http.post('/api/register', user)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('/api/authenticate', user)
            .map(function (res) {
            // login successful if there's a jwt token in the response
            if (res.json()) {
                if (res.json().success) {
                    var currentUser = JSON.stringify({ _id: res.json()._id, email: res.json().email, username: res.json().username, token: res.json().token });
                    _this.setToken(currentUser);
                    return { success: true, message: 'Authentication Successful.' };
                }
                else {
                    return { success: false, message: res.json().message };
                }
            }
            else {
                return { success: false, message: 'Authentication failed.' };
            }
        });
    };
    AuthService.prototype.setToken = function (user) {
        console.log(user);
        localStorage.setItem("currentUser", user);
    };
    AuthService.prototype.getToken = function () {
        var user = localStorage.getItem("currentUser");
        if (user) {
            return JSON.parse(user).token;
        }
        else {
            return '';
        }
    };
    AuthService.prototype.getCurrentUser = function () {
        var user = localStorage.getItem("currentUser");
        if (user) {
            return JSON.parse(user);
        }
        else {
            return undefined;
        }
    };
    AuthService.prototype.getCurrentUserId = function () {
        var user = localStorage.getItem("currentUser");
        if (user) {
            return JSON.parse(user)._id;
        }
        else {
            return '';
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        var user = localStorage.getItem("currentUser");
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.removeToken = function () {
        localStorage.removeItem("currentUser");
    };
    AuthService.prototype.getHTTPHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'token': this.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=C:/Users/Chamod/Documents/Node/chat/src/auth.service.js.map

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark bg-default scrolling-navbar\" [containerInside]=\"false\">\r\n    <logo>\r\n        <a class=\"logo navbar-brand\" href=\"#\"><strong>Navbar</strong></a>\r\n    </logo>\r\n    <links>\r\n        <!-- <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active waves-light\" mdbRippleRadius>\r\n                <a class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                <a class=\"nav-link\">Features</a>\r\n            </li>\r\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                <a class=\"nav-link\">Pricing</a>\r\n            </li>\r\n            <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                <a class=\"nav-link\">Opinions</a>\r\n            </li>\r\n        </ul> -->\r\n        <ul class=\"navbar-nav\">\r\n            <li *ngIf=\"currentUser\" class=\"nav-item waves-light\" mdbRippleRadius>\r\n                <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\r\n            </li>\r\n           \r\n            <li *ngIf=\"!currentUser\" class=\"nav-item waves-light\" mdbRippleRadius>\r\n                <a [routerLink]=\"['/login']\" class=\"nav-link \">\r\n\t\t\t\t  Sign in\r\n\t\t\t\t</a>\r\n            </li>\r\n            <li *ngIf=\"!currentUser\" class=\"nav-item waves-light\" mdbRippleRadius>\r\n                <a [routerLink]=\"['/register']\" class=\"nav-link \" >\r\n\t\t\t\t  Sign up\r\n\t\t\t\t</a>\r\n            </li>\r\n        </ul>\r\n    </links>\r\n</mdb-navbar>\r\n\r\n\r\n\t\t\t\t\t\r\n<!--   <button *ngIf=\"currentUser\" (click)=\"logout()\" > Logout </button>\r\n  <button *ngIf=\"!currentUser\" (click)=\"login()\" > Login </button>\r\n  <button *ngIf=\"!currentUser\" (click)=\"register()\" > Register </button> -->\r\n "

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\r\n<main>\r\n    <div class=\"container\" >\r\n    <div class=\"row mt-5 pt-5 justify-content-md-center\">\r\n            <div class=\"col-md-6 \">\r\n      <!-- Login form -->\r\n      <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\r\n          <p class=\"h5 text-center mb-4\">Sign in</p>\r\n\r\n          <div class=\"md-form\">\r\n              <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n              \r\n              <input   #email=\"ngModel\" type=\"text\" required name=\"email\" id=\"email\" class=\"form-control\"\r\n              [(ngModel)]=\"model.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" mdbActive >\r\n              <label for=\"email\" >Your email</label>\r\n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\r\n\r\n                <small *ngIf=\"email.errors.required\" class=\"text-danger\">Email is required.</small>\r\n                \r\n                <small *ngIf=\"email.errors.pattern\" class=\"text-danger\">Please enter a valid email address.</small>\r\n\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"md-form\">\r\n              <i class=\"fa fa-lock prefix grey-text\"></i>\r\n              <!-- <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control\" mdbActive> -->\r\n              <input  type=\"password\"  name=\"password\" id=\"password\"\r\n               #password=\"ngModel\" required class=\"form-control\"\r\n              [(ngModel)]=\"model.password\" mdbActive>\r\n              <label for=\"password\">Your password</label>\r\n              \r\n             \r\n\r\n                <small *ngIf=\"password.invalid && (password.dirty || password.touched) && password.errors.required\" class=\"text-danger\">Password is required.</small>\r\n               \r\n             \r\n          </div>\r\n\r\n          <div class=\"text-center\">\r\n              <div><small *ngIf=\"error\" class=\"text-danger\">{{error}}</small></div>\r\n              <button class=\"btn btn-default waves-light\" mdbRippleRadius type=\"submit\" [disabled]=\"!loginForm.form.valid\">Sign in</button>\r\n          </div>\r\n      </form>\r\n      <!-- Login form -->\r\n      <div class=\"modal-footer\">\r\n                    <div class=\"options\">\r\n                        <p>Not a member? <a [routerLink]=\"['/register']\">Sign Up</a></p>\r\n                        <p>Forgot <a href=\"#\">Password?</a></p>\r\n                    </div>\r\n                </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n</main>\r\n<!-- /.Main -->\r\n"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\r\n<main>\r\n    <div class=\"container\" >\r\n    <div class=\"row mt-5 pt-5 justify-content-md-center\">\r\n            <div class=\"col-md-6 \">\r\n      <!-- Login form -->\r\n      <form (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\r\n          <p class=\"h5 text-center mb-4\">Sign up</p>\r\n\r\n          <div class=\"md-form\">\r\n              <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n              \r\n              <input   #email=\"ngModel\" type=\"text\" required name=\"email\" id=\"email\" class=\"form-control\"\r\n              [(ngModel)]=\"model.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" mdbActive >\r\n              <label for=\"email\" class=\"active\">Your email</label>\r\n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\r\n\r\n                <small *ngIf=\"email.errors.required\" class=\"text-danger\">Email is required.</small>\r\n                \r\n                <small *ngIf=\"email.errors.pattern\" class=\"text-danger\">Please enter a valid email address.</small>\r\n\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"md-form\">\r\n              <i class=\"fa fa-user prefix grey-text\"></i>\r\n              \r\n              <input   #username=\"ngModel\" type=\"text\" required name=\"username\" id=\"username\" class=\"form-control\"\r\n              [(ngModel)]=\"model.username\"  mdbActive >\r\n              <label for=\"username\" class=\"active\">Your username</label>\r\n              \r\n              \r\n               <small *ngIf=\"username.invalid && (username.dirty || username.touched) && username.errors.required\" class=\"text-danger\">Username is required.</small>\r\n          </div>\r\n\r\n          <div class=\"md-form\">\r\n              <i class=\"fa fa-lock prefix grey-text\"></i>\r\n              <input  type=\"password\"  name=\"password\" id=\"password\" validateEqual=\"confirmPassword\"\r\n               #password=\"ngModel\" required class=\"form-control\"\r\n              [(ngModel)]=\"model.password\" mdbActive>\r\n              <label for=\"password\">Your password</label>\r\n              \r\n               <small *ngIf=\"password.invalid && (password.dirty || password.touched) && password.errors.required\" class=\"text-danger\">Password is required.</small>\r\n          </div>\r\n\r\n          <div class=\"md-form\">\r\n              <i class=\"fa fa-lock prefix grey-text\"></i>\r\n              <input  type=\"password\"  name=\"confirmPassword\" id=\"confirmPassword\"  validateEqual=\"password\"\r\n               #confirmPassword=\"ngModel\" required class=\"form-control\" [(ngModel)]=\"model.confirmPassword\"\r\n               mdbActive>\r\n              <label for=\"confirmPassword\">Confirm password</label>\r\n              \r\n               <small *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors.required\" class=\"text-danger\">Confirm Password is required.</small>\r\n\r\n               <small *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) && confirmPassword.errors.validateEqual\" class=\"text-danger\">Password mismatch.</small>\r\n\r\n          </div>\r\n\r\n          <div class=\"text-center\">\r\n              <button class=\"btn btn-default waves-light\" mdbRippleRadius type=\"submit\" \r\n              [disabled]=\"!registerForm.form.valid\">Login</button>\r\n          </div>\r\n      </form>\r\n      <!-- Login form -->\r\n\r\n      </div>\r\n      </div>\r\n    </div>\r\n</main>\r\n<!-- /.Main -->\r\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(205);


/***/ })

},[473]);
//# sourceMappingURL=main.bundle.map