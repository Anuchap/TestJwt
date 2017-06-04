"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./services/auth.service");
var data_service_1 = require("./services/data.service");
var AppComponent = (function () {
    function AppComponent(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
        this.result = '';
        this.token = '';
    }
    AppComponent.prototype.login = function () {
        var _this = this;
        this.authService.getToken('user', 'user').then(function (data) {
            console.log(data.access_token);
            localStorage.setItem('access_token', data.access_token);
        }, function (error) { return _this.result = error; });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('access_token');
    };
    AppComponent.prototype.getAuth = function () {
        var _this = this;
        this.dataService.getAuthtenticate().then(function (data) {
            _this.result = data;
        }, function (error) { return _this.result = error; });
    };
    AppComponent.prototype.getAuthorize = function () {
        var _this = this;
        this.dataService.getAuthorize().then(function (data) {
            _this.result = data;
        }, function (error) { return _this.result = error; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: require('./app.component.html')
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map