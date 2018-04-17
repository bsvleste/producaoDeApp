webpackJsonp(["alunos.module"],{

/***/ "../../../../../src/app/alunos/alunos-detalhe/alunos-detalhe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/alunos-detalhe/alunos-detalhe.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\nNome:{{alunos.nome}}\r\n</p>\r\n<p>Email : {{alunos.email}}</p>\r\n<button class=\"btn\" (click)=\"editarAlunos()\">Editar</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/alunos/alunos-detalhe/alunos-detalhe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosDetalheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunosDetalheComponent = (function () {
    function AlunosDetalheComponent(route, alunosService, router) {
        this.route = route;
        this.alunosService = alunosService;
        this.router = router;
    }
    AlunosDetalheComponent.prototype.ngOnInit = function () {
        /*this.inscricao = this.route.params.subscribe(
          (params:any)=>{
            let id = params['id'];
            this.alunos = this.alunosService.getAluno(id);
            if(this.alunos == null)
            {
              this.router.navigate(['/404']);
            }
          }
        );*/
        var _this = this;
        this.inscricao = this.route.data.subscribe(function (info) {
            _this.alunos = info.aluno;
        });
    };
    AlunosDetalheComponent.prototype.editarAlunos = function () {
        this.router.navigate(['/alunos', this.alunos.id, 'edit']);
    };
    AlunosDetalheComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return AlunosDetalheComponent;
}());
AlunosDetalheComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-alunos-detalhe',
        template: __webpack_require__("../../../../../src/app/alunos/alunos-detalhe/alunos-detalhe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alunos/alunos-detalhe/alunos-detalhe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__alunos_service__["a" /* AlunosService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AlunosDetalheComponent);

var _a, _b, _c;
//# sourceMappingURL=alunos-detalhe.component.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos-diactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosDiactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlunosDiactivateGuard = (function () {
    function AlunosDiactivateGuard() {
    }
    AlunosDiactivateGuard.prototype.canDeactivate = function (component, route, state) {
        return component.podeDesativar();
    };
    return AlunosDiactivateGuard;
}());
AlunosDiactivateGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AlunosDiactivateGuard);

//# sourceMappingURL=alunos-diactivate.guard.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos-form/alunos-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/alunos-form/alunos-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Novo / Editar</h3>\r\n<div class input-field col s8>\r\n  <label for=\"nome\" class=\"active\">Nome</label>\r\n  <input [(ngModel)]='alunos.nome' type=\"text\" class=\"validate\" id=\"nome\" (input)=\"onInput()\">\r\n</div>\r\n<div class input-field col s8>\r\n  <label for=\"email\" class=\"active\">Email</label>\r\n  <input [(ngModel)]='alunos.email' type=\"email\" class=\"validate\" id=\"email\" >\r\n</div>\r\n<button class=\"btn waves-effect waves-light\" type=\"submit\" name='action'>Enviar\r\n  <i class=\"material-icons right\">send</i>\r\n</button>"

/***/ }),

/***/ "../../../../../src/app/alunos/alunos-form/alunos-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunosFormComponent = (function () {
    function AlunosFormComponent(route, alunosService, router) {
        this.route = route;
        this.alunosService = alunosService;
        this.router = router;
        this.mudaNome = false;
    }
    AlunosFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.alunos = _this.alunosService.getAluno(id);
            if (_this.alunos == null) {
                _this.alunos = {};
            }
        });
    };
    AlunosFormComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    AlunosFormComponent.prototype.onInput = function () {
        this.mudaNome = true;
    };
    AlunosFormComponent.prototype.mudouForm = function () {
        if (this.mudaNome) {
            confirm("Tem certeza que deseja sai da pagina Com interface");
        }
        return true;
    };
    AlunosFormComponent.prototype.podeDesativar = function () {
        return this.mudouForm();
    };
    return AlunosFormComponent;
}());
AlunosFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-alunos-form',
        template: __webpack_require__("../../../../../src/app/alunos/alunos-form/alunos-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alunos/alunos-form/alunos-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__alunos_service__["a" /* AlunosService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AlunosFormComponent);

var _a, _b, _c;
//# sourceMappingURL=alunos-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s4\">\r\n    <div class=\"collection\">\r\n      <a *ngFor=\"let item of alunos\" class=\"collection-item\" [routerLink]=\"[item.id]\">{{item.nome}}</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col s8\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlunosComponent = (function () {
    function AlunosComponent(alunosService) {
        this.alunosService = alunosService;
    }
    AlunosComponent.prototype.ngOnInit = function () {
        this.alunos = this.alunosService.getAlunos();
    };
    return AlunosComponent;
}());
AlunosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-alunos',
        template: __webpack_require__("../../../../../src/app/alunos/alunos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alunos/alunos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__alunos_service__["a" /* AlunosService */]) === "function" && _a || Object])
], AlunosComponent);

var _a;
//# sourceMappingURL=alunos.component.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosModule", function() { return AlunosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guard_alunos_detalhe_resolver__ = __webpack_require__("../../../../../src/app/alunos/guard/alunos-detalhe.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos_routing_modules__ = __webpack_require__("../../../../../src/app/alunos/alunos.routing.modules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alunos_component__ = __webpack_require__("../../../../../src/app/alunos/alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alunos_form_alunos_form_component__ = __webpack_require__("../../../../../src/app/alunos/alunos-form/alunos-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alunos_detalhe_alunos_detalhe_component__ = __webpack_require__("../../../../../src/app/alunos/alunos-detalhe/alunos-detalhe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alunos_diactivate_guard__ = __webpack_require__("../../../../../src/app/alunos/alunos-diactivate.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AlunosModule = (function () {
    function AlunosModule() {
    }
    return AlunosModule;
}());
AlunosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__alunos_routing_modules__["a" /* AlunosRoutingModules */]
        ],
        exports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__alunos_component__["a" /* AlunosComponent */],
            __WEBPACK_IMPORTED_MODULE_8__alunos_form_alunos_form_component__["a" /* AlunosFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__alunos_detalhe_alunos_detalhe_component__["a" /* AlunosDetalheComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__alunos_service__["a" /* AlunosService */],
            __WEBPACK_IMPORTED_MODULE_10__alunos_diactivate_guard__["a" /* AlunosDiactivateGuard */],
            __WEBPACK_IMPORTED_MODULE_0__guard_alunos_detalhe_resolver__["a" /* AlunosDetalheResolver */]
        ]
    })
], AlunosModule);

//# sourceMappingURL=alunos.module.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.routing.modules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosRoutingModules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guard_alunos_detalhe_resolver__ = __webpack_require__("../../../../../src/app/alunos/guard/alunos-detalhe.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alunos_component__ = __webpack_require__("../../../../../src/app/alunos/alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos_detalhe_alunos_detalhe_component__ = __webpack_require__("../../../../../src/app/alunos/alunos-detalhe/alunos-detalhe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alunos_form_alunos_form_component__ = __webpack_require__("../../../../../src/app/alunos/alunos-form/alunos-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alunos_diactivate_guard__ = __webpack_require__("../../../../../src/app/alunos/alunos-diactivate.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var alunosRoutes = [
    //adicionando rotas filhas
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__alunos_component__["a" /* AlunosComponent */],
        children: [
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_3__alunos_form_alunos_form_component__["a" /* AlunosFormComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_2__alunos_detalhe_alunos_detalhe_component__["a" /* AlunosDetalheComponent */],
                resolve: { aluno: __WEBPACK_IMPORTED_MODULE_0__guard_alunos_detalhe_resolver__["a" /* AlunosDetalheResolver */] }
            },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_3__alunos_form_alunos_form_component__["a" /* AlunosFormComponent */],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__alunos_diactivate_guard__["a" /* AlunosDiactivateGuard */]]
            }
        ] },
];
var AlunosRoutingModules = (function () {
    function AlunosRoutingModules() {
    }
    return AlunosRoutingModules;
}());
AlunosRoutingModules = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(alunosRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]]
    })
], AlunosRoutingModules);

//# sourceMappingURL=alunos.routing.modules.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlunosService = (function () {
    function AlunosService() {
        this.alunos = [
            { id: 1, nome: 'Bruno de Souza Valeiro', email: 'bvaleiro@gmail.com' },
            { id: 2, nome: 'Mayara de França Valeiro', email: 'mama_valeiro@gmail.com' },
            { id: 3, nome: 'Marina de França Valeiro', email: 'marinaValeiro@gmail.com' }
        ];
    }
    AlunosService.prototype.getAlunos = function () {
        return this.alunos;
    };
    AlunosService.prototype.getAluno = function (id) {
        var aluno = this.getAlunos();
        for (var _i = 0, aluno_1 = aluno; _i < aluno_1.length; _i++) {
            var i = aluno_1[_i];
            var aluno_2 = i;
            if (aluno_2.id == id) {
                return aluno_2;
            }
        }
        return null;
    };
    return AlunosService;
}());
AlunosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AlunosService);

//# sourceMappingURL=alunos.service.js.map

/***/ }),

/***/ "../../../../../src/app/alunos/guard/alunos-detalhe.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosDetalheResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alunos_service__ = __webpack_require__("../../../../../src/app/alunos/alunos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlunosDetalheResolver = (function () {
    function AlunosDetalheResolver(alunosService) {
        this.alunosService = alunosService;
    }
    AlunosDetalheResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.alunosService.getAluno(id);
    };
    return AlunosDetalheResolver;
}());
AlunosDetalheResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__alunos_service__["a" /* AlunosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__alunos_service__["a" /* AlunosService */]) === "function" && _a || Object])
], AlunosDetalheResolver);

var _a;
//# sourceMappingURL=alunos-detalhe.resolver.js.map

/***/ })

});
//# sourceMappingURL=alunos.module.chunk.js.map