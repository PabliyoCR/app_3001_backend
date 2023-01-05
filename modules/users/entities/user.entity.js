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
exports.User = void 0;
const base_entity_1 = require("../../../base/base.entity");
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const roles_model_1 = require("../../../auth/models/roles.model");
const cliente_entity_1 = require("../../clientes/entities/cliente.entity");
const gasto_scalar_1 = require("../schemas/gasto.scalar");
const luxon_1 = require("luxon");
let User = class User extends base_entity_1.BaseEntity {
    get dineroRecaudadoHoy() {
        let dinero = 0;
        this.clientes.forEach((cliente) => {
            cliente.tarjetas.forEach((tarjeta) => {
                tarjeta.abonos.forEach((abono) => {
                    if (luxon_1.DateTime.fromJSDate(abono.fecha_pago).weekday ===
                        luxon_1.DateTime.now().weekday) {
                        dinero += abono.cantidad_abonada;
                    }
                });
            });
        });
        return dinero;
    }
    get dineroPrestadoHoy() {
        let dinero = 0;
        this.clientes.forEach((cliente) => {
            cliente.tarjetas.forEach((tarjeta) => {
                if (luxon_1.DateTime.fromJSDate(tarjeta.fecha_de_prestamo).weekday ===
                    luxon_1.DateTime.now().weekday) {
                    dinero += tarjeta.prestamo_sin_interes;
                }
            });
        });
        return dinero;
    }
    get dineroPrestadoMes() {
        let dinero = 0;
        this.clientes.forEach((cliente) => {
            cliente.tarjetas.forEach((tarjeta) => {
                if (luxon_1.DateTime.fromJSDate(tarjeta.fecha_de_prestamo).month ===
                    luxon_1.DateTime.now().month) {
                    dinero += tarjeta.prestamo_sin_interes;
                }
            });
        });
        return dinero;
    }
    get clientesQuePagaronHoy() {
        let count = 0;
        this.clientes.forEach((cliente) => {
            cliente.tarjetas.forEach((tarjeta) => {
                if (tarjeta.abonoHoy) {
                    count++;
                }
            });
        });
        return count;
    }
    get clientesQueNoPagaronHoy() {
        return (this.clientes.reduce((acum, value) => acum + value.tarjetas.length, 0) -
            this.clientesQuePagaronHoy);
    }
    get totalGastos() {
        return this.gastos.reduce((acum, value) => acum + value.monto, 0);
    }
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, graphql_1.Field)({ nullable: false }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Exclude)(),
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: roles_model_1.Role, default: roles_model_1.Role.empleado }),
    (0, graphql_1.Field)(() => roles_model_1.Role, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], User.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: false, default: [] }),
    (0, graphql_1.Field)(() => [gasto_scalar_1.GastoScalar]),
    __metadata("design:type", Array)
], User.prototype, "gastos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cliente_entity_1.Cliente, (cliente) => cliente.usuario, { eager: true }),
    (0, graphql_1.Field)(() => [cliente_entity_1.Cliente], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "clientes", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "dineroRecaudadoHoy", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "dineroPrestadoHoy", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "dineroPrestadoMes", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "clientesQuePagaronHoy", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "clientesQueNoPagaronHoy", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "totalGastos", null);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map