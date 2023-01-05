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
exports.Cliente = void 0;
const graphql_1 = require("@nestjs/graphql");
const base_entity_1 = require("../../../base/base.entity");
const tarjeta_entity_1 = require("../../tarjetas/entities/tarjeta.entity");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const contacto_scalar_1 = require("../schemas/contacto.scalar");
const direccion_scalar_1 = require("../schemas/direccion.scalar");
const cliente_enums_1 = require("../schemas/cliente.enums");
const user_entity_1 = require("../../users/entities/user.entity");
let Cliente = class Cliente extends base_entity_1.BaseEntity {
    get totalDeudas() {
        let deuda = 0;
        if (this.tarjetas) {
            this.tarjetas.forEach((tarjeta) => {
                deuda += tarjeta.saldoPendiente;
            });
        }
        return deuda;
    }
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.clientes, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Cliente.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Cliente.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Cliente.prototype, "c_c", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: cliente_enums_1.Zona,
    }),
    (0, graphql_1.Field)(() => cliente_enums_1.Zona),
    __metadata("design:type", String)
], Cliente.prototype, "zona", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: false }),
    (0, graphql_1.Field)(() => contacto_scalar_1.ContactoScalar),
    __metadata("design:type", Array)
], Cliente.prototype, "contacto", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: false }),
    (0, graphql_1.Field)(() => direccion_scalar_1.DireccionScalar),
    __metadata("design:type", Object)
], Cliente.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tarjeta_entity_1.Tarjeta, (tarjeta) => tarjeta.cliente, { eager: true }),
    (0, graphql_1.Field)(() => [tarjeta_entity_1.Tarjeta], { nullable: true }),
    __metadata("design:type", Array)
], Cliente.prototype, "tarjetas", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Cliente.prototype, "totalDeudas", null);
Cliente = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.entity.js.map