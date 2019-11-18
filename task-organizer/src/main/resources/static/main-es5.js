(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n\n</div>\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<form class=\"animated bounceInLeft\" name=\"form\" #f=\"ngForm\" (submit)=\"f.form.valid && sendFeedback()\">\n\n  <h1>Send email with feedback :)</h1>\n  <div class=\"contact-form\">\n    <div class=\"txtb\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your name\"\n             [(ngModel)]=\"model.name\"\n             #name=\"ngModel\"\n             [ngClass]=\"{ 'submitted': f.submitted && name.invalid }\"\n             required>\n    </div>\n\n    <!-- NAME VALIDATION -->\n    <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-input\">\n      <div *ngIf=\"name.errors?.required\">Name is empty</div>\n    </div>\n    <!-- NAME VALIDATION END -->\n    <div class=\"txtb\">\n\n      <label>Email</label>\n      <input type=\"text\" name=\"name\" id=\"email\" placeholder=\"Your email\"\n             [(ngModel)]=\"model.email\"\n             #email=\"ngModel\"\n             [ngClass]=\"{ 'submitted': f.submitted && email.invalid }\"\n             required email/>\n        </div>\n\n    <!-- EMAIL VALIDATION -->\n    <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-input\">\n      <div *ngIf=\"email.errors?.required\">Field is required*</div>\n      <div *ngIf=\"email.errors?.email\">Wrong email format</div>\n    </div>\n    <!-- EMAIL VALIDATION END -->\n\n    <!-- TEXTAREA VALIDATION -->\n    <div class=\"txtb\">\n      <label>Message</label>\n      <textarea type=\"text\" placeholder=\"Nice Feedback\" cols=\"30\" rows=\"5\" id=\"feedback\" name=\"feedback\"\n                [(ngModel)]=\"model.content\"\n                #textAreaElement=\"ngModel\"\n                [ngClass]=\"{ 'bigos': f.submitted && textAreaElement.invalid}\"\n                required minlength=\"10\"></textarea>\n    </div>\n    <div *ngIf=\"f.submitted && textAreaElement.invalid\" class=\"invalid-input\">\n      <div *ngIf=\"textAreaElement.errors?.required\">Message size must be greater than 10 characters</div>\n      <div *ngIf=\"textAreaElement.errors?.minlength\">Field is < 10 characters</div>\n     </div>\n    <!-- TEXTAREA VALIDATION END -->\n    <button type=\"submit\" (submit)=\"sendFeedback()\" class=\"button\">Send</button>\n  </div>\n\n</form>\n\n<div *ngIf=\"msg\" class=\"alert alert-success\">Message send successfully :) </div>\n<div *ngIf=\"sending\" class=\"alert alert-success\">Sending message... </div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<nav>\n  <div class=\"border-div\">\n    <ul class=\"nav-links\">\n      <li><i id=\"icon\" class=\"fa fa-sticky-note\" routerLink=\"/notes\"></i></li>\n      <li><a routerLink=\"/feedback\">Feedback</a></li>\n      <li><a routerLink=\"/notes\">Organizer</a></li>\n    </ul>\n  </div>\n</nav>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/note/note.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes/note/note.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"note note--1\">\n  <div>\n    <input [(ngModel)]=\"note.title\"\n           (change)=\"updateNote()\"\n           type=\"text\"\n           maxlength=\"10\"/>\n      <a (click)=\"deleteNote()\">\n      <i class=\"fa fa-trash-o\" style=\"color: red;\"></i>\n    </a>\n  </div>\n  <div>\n          <textarea [(ngModel)]=\"note.text\"\n                    (change)=\"updateNote()\">\n          </textarea>\n  </div>\n  <div class=\"date\">\n    {{note.lastModif | date:'dd-MM-yyy HH:mm'}}\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- NOTE CONTENT  -->\n\n<div class=\"grid-wrapper\">\n\n  <div class=\"text-search\">\n    <input type=\"text\"\n           placeholder=\"Search notes...\"\n           [(ngModel)]=\"searchText\"\n          />\n  </div>\n\n  <div class=\"button-container\">\n    <button type=\"button\"\n            id=\"notebook-button\"\n            (click)=\"createNotebook()\">\n      <i class=\"fa fa-plus\">Notebook</i>\n\n    </button>\n    <button type=\"button \"\n            class=\"btn btn-dangerous\"\n            id=\"note-button\"\n            (click)=\"createNote(selectedNotebook.id)\"\n            [disabled]=\"selectedNotebook == null\"\n    >\n      <i class=\"fa fa-plus\">Note</i>\n    </button>\n  </div>\n\n <div class=\"notebooks-list\">\n    <h2>Notebooks</h2>\n    <button class=\"btn\" (click)=\"getAllNotes()\">Get All</button>\n    <ul *ngFor=\"let notebook of notebooks\" (click)=\"selectNotebook(notebook)\">\n      <i class=\"fa fa-book\" style=\"color: #fca22b;\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <i class=\"fa fa-trash-o\" style=\"cursor: pointer; margin-right: 10px;\" (click)=\"deleteNotebook(notebook)\"></i>\n      <input [(ngModel)]=\"notebook.name\" (change)=\"updateNotebook(notebook)\">\n    </ul>\n  </div>\n  <div>\n  </div>\n</div>\n\n\n<!-- VALIDATION FOR NOTES-->\n<div>\n  <h3 *ngIf=\"selectedNotebook != null\">{{'selected notebook ' + selectedNotebook.name}}</h3>\n  <h3 *ngIf=\"selectedNotebook == null\">All notes</h3>\n  <p *ngIf=\"this.notes.length === 0\">There are no notes to display in this notebook :(</p>\n</div>\n<!-- VALIDATION FOR NOTES-->\n\n\n<!-- NOTE CARDS-->\n\n<div class=\"note-wrapper\">\n  <app-note *ngFor=\"let note of notes | noteTextFilter: searchText\" [note]=\"note\"\n            (noteDeleted)=\"deleteNote($event)\"\n            (noteUpdated)=\"updateNote(note)\">\n  </app-note>\n</div>\n\n\n\n<!--\nw child komponencie robimy Event emitera i tutaj tej metodzie z child komponentu przypisuje\nmetode z obecnego komponentu i jako $event przesylam note\n\n -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'frontend';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
            /* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
            /* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _notes_note_note_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notes/note/note.component */ "./src/app/notes/note/note.component.ts");
            /* harmony import */ var _shared_pipes_note_text_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/pipes/note-text-filter.pipe */ "./src/app/shared/pipes/note-text-filter.pipe.ts");
            var appRoutes = [
                {
                    path: 'notes',
                    component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"]
                },
                {
                    path: 'feedback',
                    component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackComponent"]
                },
                {
                    path: '',
                    component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"],
                    pathMatch: 'full'
                },
                {
                    path: '**',
                    component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
                }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackComponent"],
                        _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"],
                        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                        _notes_note_note_component__WEBPACK_IMPORTED_MODULE_12__["NoteComponent"],
                        _shared_pipes_note_text_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["NoteTextFilterPipe"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes) /*{enableTracing: true}*/
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/feedback/feedback.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/feedback/feedback.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("* {\n  background-color: #edf2ef;\n}\n\nh1 {\n  margin-top: 100px;\n}\n\n.contact-form {\n  width: 85%;\n  max-width: 600px;\n  position: absolute;\n\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  padding: 30px 40px;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 0 2px #fc3503;\n\n}\n\n.contact-form h1 {\n  font-weight: 200;\n}\n\n.txtb {\n  border: 1px solid gray;\n  margin: 8px 0;\n  padding: 12px 18px;\n  border-radius: 8px;\n}\n\n.txtb label {\n  display: block;\n  text-align: left;\n  color: #333;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.txtb input,.txtb textarea {\n  width: 100%;\n  border: none;\n  background: none;\n  font-size: 18px;\n  outline: none;\n  margin-top: 6px;\n}\n\n.button {\n  display: block;\n  background:  #fc3503;\n  padding: 10px 0;\n  color: white;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-top: 8px;\n  width: 100%;\n\n}\n\n.button:hover {\n  background: #fcd321;\n}\n\n.invalid-input {\n  color: red;\n}\n\ninput.submitted\n{\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwyQkFBMkI7O0FBRTdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYyZWY7XG59XG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cblxuLmNvbnRhY3QtZm9ybSB7XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgMnB4ICNmYzM1MDM7XG5cbn1cblxuLmNvbnRhY3QtZm9ybSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50eHRiIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgcGFkZGluZzogMTJweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi50eHRiIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50eHRiIGlucHV0LC50eHRiIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogICNmYzM1MDM7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmY2QzMjE7XG59XG5cbi5pbnZhbGlkLWlucHV0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW5wdXQuc3VibWl0dGVkXG57XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/feedback/feedback.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/feedback/feedback.component.ts ***!
          \************************************************/
        /*! exports provided: FeedbackComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () { return FeedbackComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var FeedbackComponent = /** @class */ (function () {
                function FeedbackComponent(apiService, router) {
                    this.apiService = apiService;
                    this.router = router;
                    this.model = {
                        name: '',
                        email: '',
                        content: ''
                    };
                    this.msg = false;
                    this.sending = false;
                }
                FeedbackComponent.prototype.ngOnInit = function () {
                };
                FeedbackComponent.prototype.sendFeedback = function () {
                    var _this = this;
                    this.sending = true;
                    this.apiService.postFeedback(this.model).subscribe(function (rest) {
                        _this.msg = true;
                        _this.sending = false;
                        setTimeout(function () {
                            _this.sending = false;
                            _this.router.navigateByUrl('/');
                        }, 3000);
                    }, function (error) {
                        alert("An error has occured while sending feedback");
                    });
                };
                return FeedbackComponent;
            }());
            FeedbackComponent.ctorParameters = function () { return [
                { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-feedback',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")).default]
                })
            ], FeedbackComponent);
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/navigation/navigation.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n#icon {\n  color: #ff670f;\n  font-size: 35px;\n  margin-right: 30px;\n}\n\n\nul {\n  display: flex;\n  flex-direction: row;\n\n  justify-content: space-between;\n  width: 40%;\n  align-items: center;\n}\n\n\nli  {\n  list-style: none;\n  align-items: center;\n  margin-bottom: 20px;\n\n}\n\n\nli > a {\n\n  color: #fca22b;\n}\n\n\nnav div {\n  padding: 25px 0 0 25px;\n  margin-top: 100px;\n  background-color: #e3e3e3;\n\n}\n\n\n@media screen and (max-width: 778px) {\n  ul {\n    width: 30%;\n\n  }\n\n  li > a {\n    margin: 10px;\n  }\n\n}\n\n\n@media screen and (max-width: 300px) {\n  ul {\n    flex-direction: column;\n  }\n\n ul li {\n   margin-left: 120px;\n }\n ul li i {\n   margin-left: 20px;\n }\n\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1COztBQUVyQjs7O0FBSUE7O0VBRUUsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5Qjs7QUFFM0I7OztBQUdBO0VBQ0U7SUFDRSxVQUFVOztFQUVaOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVGOzs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztDQUVEO0dBQ0Usa0JBQWtCO0NBQ3BCO0NBQ0E7R0FDRSxpQkFBaUI7Q0FDbkI7O0VBRUMiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4jaWNvbiB7XG4gIGNvbG9yOiAjZmY2NzBmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5saSAge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cblxuXG5saSA+IGEge1xuXG4gIGNvbG9yOiAjZmNhMjJiO1xufVxuXG5uYXYgZGl2IHtcbiAgcGFkZGluZzogMjVweCAwIDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG5cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzhweCkge1xuICB1bCB7XG4gICAgd2lkdGg6IDMwJTtcblxuICB9XG5cbiAgbGkgPiBhIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gdWwgbGkge1xuICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuIH1cbiB1bCBsaSBpIHtcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuIH1cblxuICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/navigation/navigation.component.ts ***!
          \****************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent() {
                }
                NavigationComponent.prototype.ngOnInit = function () {
                };
                return NavigationComponent;
            }());
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/not-found/not-found.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/not-found/not-found.component.ts ***!
          \**************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/notes/note/note.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/notes/note/note.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".text-search {\n  border: none;\n  outline: none;\n}\ninput {\n  outline: none;\n  border: none;\n  background: transparent;\n  border-bottom: 1px solid #fca22b;\n}\n.notebooks-list ul > i {\n  color: red;\n\n}\n.grid-wrapper {\n  margin-top:100px;\n  display: grid;\n  grid-auto-rows: minmax(200px, auto);\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1px;\n\n\n}\n@media screen and (max-width: 780px) {\n\n  .grid-wrapper {\n   grid-template-columns: repeat(auto-fill, 300px);\n\n  }\n}\n@media screen and (max-width: 400px) {\n\n  .grid-wrapper > div{\n    width: 50%;\n  }\n}\n.note-wrapper {\n\n  display: grid;\n  grid-auto-rows: minmax(200px, auto);\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n\n\n}\n.note {\n\n  background: rgb(221,221,221);\n  background: linear-gradient(0deg, rgba(221,221,221,1) 0%, rgba(255,247,231,1) 18%);\n\n\n}\ntextarea {\n  background-color: transparent;\n  border:none;\n  outline: none;\n  min-width: 50px;\n  min-height: 60px;\n  max-height: 140px;\n\n\n}\n/*\n\n@Output child moze emitting events\n\n@input to parent moze do childa\n\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyIsInNyYy9hcHAvbm90ZXMvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFVBQVU7O0FBRVo7QUFJQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxhQUFhOzs7QUFHZjtBQUVBOztFQUVFO0dBQ0MsK0NBQStDOztFQUVoRDtBQUNGO0FBR0E7O0VBRUU7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUdBOztFQUVFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGNBQWM7OztBQUdoQjtBQUdBOztFQUVFLDRCQUE0QjtFQUM1QixrRkFBa0Y7OztBQUdwRjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7OztBQUduQjtBQ3RFQTs7Ozs7O0NBTUMiLCJmaWxlIjoic3JjL2FwcC9ub3Rlcy9ub3RlL25vdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXNlYXJjaCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmY2EyMmI7XG59XG5cbi5ub3RlYm9va3MtbGlzdCB1bCA+IGkge1xuICBjb2xvcjogcmVkO1xuXG59XG5cblxuXG4uZ3JpZC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDoxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMDBweCwgYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxcHg7XG5cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuXG4gIC5ncmlkLXdyYXBwZXIge1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMDBweCk7XG5cbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG5cbiAgLmdyaWQtd3JhcHBlciA+IGRpdntcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cblxuLm5vdGUtd3JhcHBlciB7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMDBweCwgYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuXG5cbn1cblxuXG4ubm90ZSB7XG5cbiAgYmFja2dyb3VuZDogcmdiKDIyMSwyMjEsMjIxKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjIxLDIyMSwyMjEsMSkgMCUsIHJnYmEoMjU1LDI0NywyMzEsMSkgMTglKTtcblxuXG59XG5cbnRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjpub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1heC1oZWlnaHQ6IDE0MHB4O1xuXG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIkBpbXBvcnQgdXJsKFwiLi4vbm90ZXMuY29tcG9uZW50LmNzc1wiKTtcblxuXG4vKlxuXG5AT3V0cHV0IGNoaWxkIG1vemUgZW1pdHRpbmcgZXZlbnRzXG5cbkBpbnB1dCB0byBwYXJlbnQgbW96ZSBkbyBjaGlsZGFcblxuKi9cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/notes/note/note.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/notes/note/note.component.ts ***!
          \**********************************************/
        /*! exports provided: NoteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function () { return NoteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NoteComponent = /** @class */ (function () {
                function NoteComponent() {
                    this.noteUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.noteDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                NoteComponent.prototype.ngOnInit = function () {
                };
                NoteComponent.prototype.updateNote = function () {
                    this.noteUpdated.emit(this.note);
                };
                NoteComponent.prototype.deleteNote = function () {
                    this.noteDeleted.emit(this.note);
                };
                return NoteComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NoteComponent.prototype, "note", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], NoteComponent.prototype, "noteUpdated", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], NoteComponent.prototype, "noteDeleted", void 0);
            NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-note',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/note/note.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note.component.css */ "./src/app/notes/note/note.component.css")).default]
                })
            ], NoteComponent);
            /***/ 
        }),
        /***/ "./src/app/notes/notes.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/notes/notes.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".text-search {\n  border: none;\n  outline: none;\n}\ninput {\n  outline: none;\n  border: none;\n  background: transparent;\n  border-bottom: 1px solid #fca22b;\n}\n.notebooks-list ul > i {\n  color: red;\n\n}\n.grid-wrapper {\n  margin-top:100px;\n  display: grid;\n  grid-auto-rows: minmax(200px, auto);\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1px;\n\n\n}\n@media screen and (max-width: 780px) {\n\n  .grid-wrapper {\n   grid-template-columns: repeat(auto-fill, 300px);\n\n  }\n}\n@media screen and (max-width: 400px) {\n\n  .grid-wrapper > div{\n    width: 50%;\n  }\n}\n.note-wrapper {\n\n  display: grid;\n  grid-auto-rows: minmax(200px, auto);\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n\n\n}\n.note {\n\n  background: rgb(221,221,221);\n  background: linear-gradient(0deg, rgba(221,221,221,1) 0%, rgba(255,247,231,1) 18%);\n\n\n}\ntextarea {\n  background-color: transparent;\n  border:none;\n  outline: none;\n  min-width: 50px;\n  min-height: 60px;\n  max-height: 140px;\n\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsVUFBVTs7QUFFWjtBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGFBQWE7OztBQUdmO0FBRUE7O0VBRUU7R0FDQywrQ0FBK0M7O0VBRWhEO0FBQ0Y7QUFHQTs7RUFFRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBR0E7O0VBRUUsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsY0FBYzs7O0FBR2hCO0FBR0E7O0VBRUUsNEJBQTRCO0VBQzVCLGtGQUFrRjs7O0FBR3BGO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7O0FBR25CIiwiZmlsZSI6InNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXNlYXJjaCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmY2EyMmI7XG59XG5cbi5ub3RlYm9va3MtbGlzdCB1bCA+IGkge1xuICBjb2xvcjogcmVkO1xuXG59XG5cblxuXG4uZ3JpZC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDoxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMDBweCwgYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxcHg7XG5cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuXG4gIC5ncmlkLXdyYXBwZXIge1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMDBweCk7XG5cbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG5cbiAgLmdyaWQtd3JhcHBlciA+IGRpdntcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cblxuLm5vdGUtd3JhcHBlciB7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyMDBweCwgYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuXG5cbn1cblxuXG4ubm90ZSB7XG5cbiAgYmFja2dyb3VuZDogcmdiKDIyMSwyMjEsMjIxKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjIxLDIyMSwyMjEsMSkgMCUsIHJnYmEoMjU1LDI0NywyMzEsMSkgMTglKTtcblxuXG59XG5cbnRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjpub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1heC1oZWlnaHQ6IDE0MHB4O1xuXG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/notes/notes.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/notes/notes.component.ts ***!
          \******************************************/
        /*! exports provided: NotesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function () { return NotesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
            /* harmony import */ var _shared_services_notes_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/notes-service.service */ "./src/app/shared/services/notes-service.service.ts");
            var NotesComponent = /** @class */ (function () {
                function NotesComponent(apiService, noteService) {
                    this.apiService = apiService;
                    this.noteService = noteService;
                    this.notebooks = []; // all notes
                    this.notes = []; // all notes from database
                }
                NotesComponent.prototype.ngOnInit = function () {
                    this.getAllNotebooks();
                    this.getAllNotes();
                };
                NotesComponent.prototype.getAllNotes = function () {
                    var _this = this;
                    this.noteService.getAllNotes().subscribe(function (res) {
                        _this.notes = res;
                    }, function (error) {
                        alert("Error fetching data");
                    });
                };
                NotesComponent.prototype.getAllNotebooks = function () {
                    var _this = this;
                    this.apiService.getAllNotebooks().subscribe(function (res) {
                        _this.notebooks = res;
                    }, function (error) {
                        alert("Error ");
                    });
                };
                NotesComponent.prototype.createNotebook = function () {
                    var _this = this;
                    var newNotebook = {
                        name: 'New notebook',
                        id: null,
                        nbNotes: 0
                    };
                    this.apiService.postNewNotebook(newNotebook).subscribe(function (res) {
                        newNotebook.id = res.id;
                        _this.notebooks.push(newNotebook);
                    }, function (error) {
                        alert('Cant add new notebook');
                    });
                };
                NotesComponent.prototype.updateNotebook = function (updatedNotebook) {
                    this.apiService.postNewNotebook(updatedNotebook).subscribe(function (res) {
                    }, function (error) {
                        alert('Cant add new notebook');
                    });
                };
                NotesComponent.prototype.deleteNotebook = function (notebook) {
                    var _this = this;
                    if (confirm("Are you sure to delete :(?")) {
                        this.apiService.deleteNotebook(notebook.id).subscribe(function (res) {
                            var indexOfNotebook = _this.notebooks.indexOf(notebook);
                            _this.notebooks.splice(indexOfNotebook, 1);
                        }, function (error) {
                            alert("Could not delete notebook");
                        });
                    }
                };
                NotesComponent.prototype.deleteNote = function (note) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete this note?")) {
                        this.noteService.deleteNote(note.id).subscribe(function (res) {
                            var indexOfNote = _this.notes.indexOf(note);
                            _this.notes.splice(indexOfNote, 1);
                        }, function (error) {
                            alert('error while deleting ');
                        });
                    }
                };
                NotesComponent.prototype.createNote = function (notebookId) {
                    var _this = this;
                    var newNote = {
                        id: null,
                        title: "New Note",
                        text: "Write some text in here",
                        lastModif: null,
                        notebookId: notebookId
                    };
                    this.noteService.saveNote(newNote).subscribe(function (res) {
                        newNote.id = res.id;
                        _this.notes.push(newNote);
                    }, function (error) {
                        alert("Error occured while saving the note");
                    });
                };
                NotesComponent.prototype.selectNotebook = function (notebook) {
                    var _this = this;
                    this.selectedNotebook = notebook;
                    this.noteService.getNotesByNotebook(notebook.id).subscribe(function (res) {
                        _this.notes = res;
                    }, function (error) {
                        alert("Error while getting all notes :(");
                    });
                };
                NotesComponent.prototype.updateNote = function (updateNote) {
                    this.noteService.saveNote(updateNote).subscribe(function (res) {
                    }, function (error) {
                        alert("Something is wrongg");
                    });
                };
                return NotesComponent;
            }());
            NotesComponent.ctorParameters = function () { return [
                { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _shared_services_notes_service_service__WEBPACK_IMPORTED_MODULE_3__["NotesServiceService"] }
            ]; };
            NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css")).default]
                })
            ], NotesComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/pipes/note-text-filter.pipe.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/pipes/note-text-filter.pipe.ts ***!
          \*******************************************************/
        /*! exports provided: NoteTextFilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteTextFilterPipe", function () { return NoteTextFilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NoteTextFilterPipe = /** @class */ (function () {
                function NoteTextFilterPipe() {
                }
                NoteTextFilterPipe.prototype.transform = function (notes, text) {
                    if (text == null || text === "") {
                        return notes;
                    }
                    return notes.filter(function (n) { return n.title.includes(text) || n.text.includes(text); });
                    // filtruje bo dwoch zmiennych title notatki i zawartosc
                };
                return NoteTextFilterPipe;
            }());
            NoteTextFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'noteTextFilter'
                })
            ], NoteTextFilterPipe);
            // podaje co chce filtrowac notes: Notes[]
            // nastepnie text ktory bedzie szukany
            // na koncu ma zwrocic kolekcje Notes[]
            /***/ 
        }),
        /***/ "./src/app/shared/services/api.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/shared/services/api.service.ts ***!
          \************************************************/
        /*! exports provided: ApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function () { return ApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ApiService = /** @class */ (function () {
                function ApiService(http) {
                    this.http = http;
                    this.BASE_URL = 'http://localhost:8080';
                    this.ALL_NOTEBOOKS = this.BASE_URL + "\\notebooks\\all";
                    this.SEND_FEEDBACK_URL = this.BASE_URL + "\\feedback";
                    this.SAVE_UPDATE_NOTEBOOK = this.BASE_URL + "\\notebooks";
                    this.DELETE_NOTEBOOK_URL = this.BASE_URL + "\\notebooks\\";
                }
                ApiService.prototype.getAllNotebooks = function () {
                    console.log('URL ' + this.ALL_NOTEBOOKS);
                    return this.http.get(this.ALL_NOTEBOOKS);
                };
                ApiService.prototype.postFeedback = function (feedback) {
                    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
                };
                // we have any, cuz Observable return Object object
                ApiService.prototype.postNewNotebook = function (notebook) {
                    return this.http.post(this.SAVE_UPDATE_NOTEBOOK, notebook);
                };
                ApiService.prototype.deleteNotebook = function (id) {
                    return this.http.delete(this.DELETE_NOTEBOOK_URL + id);
                };
                return ApiService;
            }());
            ApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ApiService);
            /***/ 
        }),
        /***/ "./src/app/shared/services/notes-service.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/services/notes-service.service.ts ***!
          \**********************************************************/
        /*! exports provided: NotesServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesServiceService", function () { return NotesServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var NotesServiceService = /** @class */ (function () {
                function NotesServiceService(http) {
                    this.http = http;
                    this.BASE_URL = "http://localhost:8080";
                    this.NOTES_ALL = this.BASE_URL + "\\notes\\all";
                    this.NOTES_BY_NOTEBOOK_URL = this.BASE_URL + "\\notes\\notebook\\"; // id
                    this.NOTES_BY_ID_URL = this.BASE_URL + "\\notes\\byid"; // id
                    this.POST_NEW_NOTE_URL = this.BASE_URL + "\\notes";
                    this.DELETE_NOTE_URL = this.BASE_URL + "\\notes\\";
                }
                NotesServiceService.prototype.getNotesByNotebook = function (notebookId) {
                    return this.http.get(this.NOTES_BY_NOTEBOOK_URL + notebookId);
                };
                NotesServiceService.prototype.deleteNote = function (noteId) {
                    return this.http.delete(this.DELETE_NOTE_URL + noteId);
                };
                NotesServiceService.prototype.getAllNotes = function () {
                    return this.http.get(this.NOTES_ALL);
                };
                NotesServiceService.prototype.saveNote = function (note) {
                    return this.http.post(this.POST_NEW_NOTE_URL, note);
                };
                return NotesServiceService;
            }());
            NotesServiceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            NotesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NotesServiceService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/damiass/Desktop/task-organizer-deploy/task-organizer/src/main/frontend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map