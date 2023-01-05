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
exports.CreateTarjetaInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const tarjeta_enums_1 = require("../schemas/tarjeta.enums");
let CreateTarjetaInput = class CreateTarjetaInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateTarjetaInput.prototype, "clienteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => tarjeta_enums_1.DiaPago),
    __metadata("design:type", String)
], CreateTarjetaInput.prototype, "dia_de_pago", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], CreateTarjetaInput.prototype, "prestamo_sin_interes", void 0);
__decorate([
    (0, graphql_1.Field)(() => tarjeta_enums_1.Interes),
    __metadata("design:type", Number)
], CreateTarjetaInput.prototype, "interes", void 0);
__decorate([
    (0, graphql_1.Field)(() => tarjeta_enums_1.NumeroCuotas),
    __metadata("design:type", Number)
], CreateTarjetaInput.prototype, "numero_cuotas", void 0);
CreateTarjetaInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTarjetaInput);
exports.CreateTarjetaInput = CreateTarjetaInput;
//# sourceMappingURL=create-tarjeta.input.js.map