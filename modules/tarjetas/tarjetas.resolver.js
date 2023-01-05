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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarjetasResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tarjetas_service_1 = require("./tarjetas.service");
const tarjeta_entity_1 = require("./entities/tarjeta.entity");
const create_tarjeta_input_1 = require("./dto/create-tarjeta.input");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const cliente_entity_1 = require("../clientes/entities/cliente.entity");
const update_tarjeta_input_1 = require("./dto/update-tarjeta.input");
const tarjeta_enums_1 = require("./schemas/tarjeta.enums");
let TarjetasResolver = class TarjetasResolver {
    constructor(tarjetasService) {
        this.tarjetasService = tarjetasService;
    }
    async createTarjeta(input, refinanciada) {
        input.valorCuota =
            (input.prestamo_sin_interes * (1 + input.interes / 100)) /
                input.numero_cuotas;
        const tarjeta = await this.tarjetasService.create(input);
        if (refinanciada) {
            this.tarjetasService.asignarStatusTarjeta(tarjeta.id, tarjeta_enums_1.StatusTarjeta.refinanciada);
        }
        return tarjeta;
    }
    findAll(req) {
        if (req.user.role === 'admin') {
            return this.tarjetasService.findAll();
        }
        else {
            return this.tarjetasService.findAllByUserId(req.user.sub);
        }
    }
    findOne(id) {
        return this.tarjetasService.findOne(id);
    }
    updateTarjeta(input) {
        return this.tarjetasService.update(input.id, input);
    }
    updatePosicionTarjetas(tarjetasId, posiciones) {
        return this.tarjetasService.updatePositions(tarjetasId, posiciones);
    }
    removeTarjeta(id) {
        return this.tarjetasService.remove(id);
    }
    cliente(tarjeta) {
        return this.tarjetasService.getCliente(tarjeta.clienteId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => tarjeta_entity_1.Tarjeta),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, graphql_1.Args)('refinanciada', { type: () => Boolean })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tarjeta_input_1.CreateTarjetaInput, Boolean]),
    __metadata("design:returntype", Promise)
], TarjetasResolver.prototype, "createTarjeta", null);
__decorate([
    (0, graphql_1.Query)(() => [tarjeta_entity_1.Tarjeta], { name: 'tarjetas' }),
    __param(0, (0, graphql_1.Context)('req')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarjetasResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => tarjeta_entity_1.Tarjeta, { name: 'tarjeta' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TarjetasResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => tarjeta_entity_1.Tarjeta),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tarjeta_input_1.UpdateTarjetaInput]),
    __metadata("design:returntype", void 0)
], TarjetasResolver.prototype, "updateTarjeta", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('tarjetasId', { type: () => [String] })),
    __param(1, (0, graphql_1.Args)('posiciones', { type: () => [graphql_1.Int] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Array]),
    __metadata("design:returntype", void 0)
], TarjetasResolver.prototype, "updatePosicionTarjetas", null);
__decorate([
    (0, graphql_1.Mutation)(() => tarjeta_entity_1.Tarjeta),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TarjetasResolver.prototype, "removeTarjeta", null);
__decorate([
    (0, graphql_1.ResolveField)(() => cliente_entity_1.Cliente),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarjeta_entity_1.Tarjeta]),
    __metadata("design:returntype", Promise)
], TarjetasResolver.prototype, "cliente", null);
TarjetasResolver = __decorate([
    (0, graphql_1.Resolver)(() => tarjeta_entity_1.Tarjeta),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [tarjetas_service_1.TarjetasService])
], TarjetasResolver);
exports.TarjetasResolver = TarjetasResolver;
//# sourceMappingURL=tarjetas.resolver.js.map