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
exports.Tarjeta = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const base_entity_1 = require("../../../base/base.entity");
const abono_entity_1 = require("../../abonos/entities/abono.entity");
const cliente_entity_1 = require("../../clientes/entities/cliente.entity");
const typeorm_1 = require("typeorm");
const tarjeta_enums_1 = require("../schemas/tarjeta.enums");
const luxon_1 = require("luxon");
let Tarjeta = class Tarjeta extends base_entity_1.BaseEntity {
    get deuda() {
        return this.prestamo_sin_interes * (1 + this.interes / 100);
    }
    get interesesGanados() {
        return this.prestamo_sin_interes * (this.interes / 100);
    }
    get totalAbonado() {
        let abonos = 0;
        if (this.abonos) {
            this.abonos.forEach((abono) => {
                abonos += abono.cantidad_abonada;
            });
        }
        return abonos;
    }
    get cuotasPagadas() {
        return Math.floor(this.totalAbonado / this.valorCuota);
    }
    get saldoAFavor() {
        return this.totalAbonado - this.cuotasPagadas * this.valorCuota;
    }
    get abonoHoy() {
        const idx = this.abonos.findIndex((abono) => {
            return (luxon_1.DateTime.fromJSDate(abono.fecha_pago).weekday ===
                luxon_1.DateTime.now().weekday && abono.cantidad_abonada > 0);
        });
        return idx >= 0;
    }
    get saldoPendiente() {
        return this.deuda - this.totalAbonado;
    }
    get cuotasPendientes() {
        return this.numero_cuotas - this.cuotasPagadas;
    }
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, (Cliente) => Cliente.tarjetas, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => cliente_entity_1.Cliente, { nullable: true }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Tarjeta.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Tarjeta.prototype, "clienteId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Generated)('increment'),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Tarjeta.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: tarjeta_enums_1.StatusTarjeta,
        default: tarjeta_enums_1.StatusTarjeta.nueva,
    }),
    (0, graphql_1.Field)(() => tarjeta_enums_1.StatusTarjeta, { nullable: true }),
    __metadata("design:type", String)
], Tarjeta.prototype, "statusTarjeta", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: tarjeta_enums_1.DiaPago,
    }),
    (0, graphql_1.Field)(() => tarjeta_enums_1.DiaPago),
    __metadata("design:type", String)
], Tarjeta.prototype, "dia_de_pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: luxon_1.DateTime.now() }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Tarjeta.prototype, "fecha_de_prestamo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Tarjeta.prototype, "prestamo_sin_interes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: tarjeta_enums_1.Interes,
    }),
    (0, graphql_1.Field)(() => tarjeta_enums_1.Interes),
    __metadata("design:type", Number)
], Tarjeta.prototype, "interes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: tarjeta_enums_1.NumeroCuotas,
    }),
    (0, graphql_1.Field)(() => tarjeta_enums_1.NumeroCuotas),
    __metadata("design:type", Number)
], Tarjeta.prototype, "numero_cuotas", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'float' }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Tarjeta.prototype, "valorCuota", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => abono_entity_1.Abono, (abono) => abono.tarjeta, { eager: true }),
    (0, graphql_1.Field)(() => [abono_entity_1.Abono], { nullable: true }),
    __metadata("design:type", Array)
], Tarjeta.prototype, "abonos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: -1 }),
    __metadata("design:type", Number)
], Tarjeta.prototype, "posicion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "deuda", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "interesesGanados", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "totalAbonado", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "cuotasPagadas", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "saldoAFavor", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "abonoHoy", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "saldoPendiente", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Tarjeta.prototype, "cuotasPendientes", null);
Tarjeta = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Tarjeta);
exports.Tarjeta = Tarjeta;
//# sourceMappingURL=tarjeta.entity.js.map