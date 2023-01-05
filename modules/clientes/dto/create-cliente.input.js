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
exports.CreateClienteInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const contacto_scalar_1 = require("../schemas/contacto.scalar");
const direccion_scalar_1 = require("../schemas/direccion.scalar");
const cliente_enums_1 = require("../schemas/cliente.enums");
let CreateClienteInput = class CreateClienteInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateClienteInput.prototype, "nombre", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateClienteInput.prototype, "c_c", void 0);
__decorate([
    (0, graphql_1.Field)(() => contacto_scalar_1.ContactoScalar),
    __metadata("design:type", Array)
], CreateClienteInput.prototype, "contacto", void 0);
__decorate([
    (0, graphql_1.Field)(() => cliente_enums_1.Zona),
    __metadata("design:type", String)
], CreateClienteInput.prototype, "zona", void 0);
__decorate([
    (0, graphql_1.Field)(() => direccion_scalar_1.DireccionScalar),
    __metadata("design:type", Object)
], CreateClienteInput.prototype, "direccion", void 0);
CreateClienteInput = __decorate([
    (0, graphql_1.InputType)()
], CreateClienteInput);
exports.CreateClienteInput = CreateClienteInput;
//# sourceMappingURL=create-cliente.input.js.map