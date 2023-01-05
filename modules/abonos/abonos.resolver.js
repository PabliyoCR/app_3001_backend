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
exports.AbonosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const abonos_service_1 = require("./abonos.service");
const abono_entity_1 = require("./entities/abono.entity");
const create_abono_input_1 = require("./dto/create-abono.input");
const update_abono_input_1 = require("./dto/update-abono.input");
const tarjeta_entity_1 = require("../tarjetas/entities/tarjeta.entity");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const tarjetas_service_1 = require("../tarjetas/tarjetas.service");
let AbonosResolver = class AbonosResolver {
    constructor(abonosService, tarjetasService) {
        this.abonosService = abonosService;
        this.tarjetasService = tarjetasService;
    }
    async createAbono(input) {
        const abono = await this.abonosService.create(input);
        this.tarjetasService.checkTarjetaPagada(input.tarjetaId);
        return abono;
    }
    findAll() {
        return this.abonosService.findAll();
    }
    findOne(id) {
        return this.abonosService.findOne(id);
    }
    updateAbono(input) {
        return this.abonosService.update(input.id, input);
    }
    removeAbono(id) {
        return this.abonosService.remove(id);
    }
    tarjeta(abono) {
        return this.abonosService.getTarjeta(abono.tarjetaId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => abono_entity_1.Abono),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_abono_input_1.CreateAbonoInput]),
    __metadata("design:returntype", Promise)
], AbonosResolver.prototype, "createAbono", null);
__decorate([
    (0, graphql_1.Query)(() => [abono_entity_1.Abono], { name: 'abonos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AbonosResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => abono_entity_1.Abono, { name: 'abono' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbonosResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => abono_entity_1.Abono),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_abono_input_1.UpdateAbonoInput]),
    __metadata("design:returntype", void 0)
], AbonosResolver.prototype, "updateAbono", null);
__decorate([
    (0, graphql_1.Mutation)(() => abono_entity_1.Abono),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbonosResolver.prototype, "removeAbono", null);
__decorate([
    (0, graphql_1.ResolveField)(() => tarjeta_entity_1.Tarjeta),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [abono_entity_1.Abono]),
    __metadata("design:returntype", Promise)
], AbonosResolver.prototype, "tarjeta", null);
AbonosResolver = __decorate([
    (0, graphql_1.Resolver)(() => abono_entity_1.Abono),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [abonos_service_1.AbonosService,
        tarjetas_service_1.TarjetasService])
], AbonosResolver);
exports.AbonosResolver = AbonosResolver;
//# sourceMappingURL=abonos.resolver.js.map