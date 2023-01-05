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
exports.Abono = void 0;
const graphql_1 = require("@nestjs/graphql");
const base_entity_1 = require("../../../base/base.entity");
const tarjeta_entity_1 = require("../../tarjetas/entities/tarjeta.entity");
const typeorm_1 = require("typeorm");
const luxon_1 = require("luxon");
let Abono = class Abono extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => tarjeta_entity_1.Tarjeta, (tarjeta) => tarjeta.abonos, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => tarjeta_entity_1.Tarjeta, { nullable: true }),
    __metadata("design:type", tarjeta_entity_1.Tarjeta)
], Abono.prototype, "tarjeta", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Abono.prototype, "tarjetaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Abono.prototype, "cantidad_abonada", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: luxon_1.DateTime.now() }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Abono.prototype, "fecha_pago", void 0);
Abono = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Abono);
exports.Abono = Abono;
//# sourceMappingURL=abono.entity.js.map