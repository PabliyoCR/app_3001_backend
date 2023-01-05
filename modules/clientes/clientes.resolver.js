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
exports.ClientesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const clientes_service_1 = require("./clientes.service");
const cliente_entity_1 = require("./entities/cliente.entity");
const create_cliente_input_1 = require("./dto/create-cliente.input");
const update_cliente_input_1 = require("./dto/update-cliente.input");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubsub_module_1 = require("../pubsub/pubsub.module");
const user_entity_1 = require("../users/entities/user.entity");
let ClientesResolver = class ClientesResolver {
    constructor(pubSub, clientesService) {
        this.pubSub = pubSub;
        this.clientesService = clientesService;
    }
    createCliente(input, req) {
        return this.clientesService.create(Object.assign(Object.assign({}, input), { usuarioId: req.user.sub }));
    }
    findAll(req) {
        if (req.user.role === 'admin') {
            return this.clientesService.findAll();
        }
        else {
            return this.clientesService.findAllByUserId(req.user.sub);
        }
    }
    findOne(id) {
        return this.clientesService.findOne(id);
    }
    updateCliente(input) {
        this.pubSub.publish('clientes', {});
        return this.clientesService.update(input.id, input);
    }
    removeCliente(id) {
        this.pubSub.publish('clientes', {});
        return this.clientesService.remove(id);
    }
    usuario(cliente) {
        return this.clientesService.getUsuario(cliente.usuarioId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => cliente_entity_1.Cliente),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, graphql_1.Context)('req')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_input_1.CreateClienteInput, Object]),
    __metadata("design:returntype", void 0)
], ClientesResolver.prototype, "createCliente", null);
__decorate([
    (0, graphql_1.Query)(() => [cliente_entity_1.Cliente], { name: 'clientes' }),
    __param(0, (0, graphql_1.Context)('req')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => cliente_entity_1.Cliente, { name: 'cliente' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => cliente_entity_1.Cliente),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_cliente_input_1.UpdateClienteInput]),
    __metadata("design:returntype", void 0)
], ClientesResolver.prototype, "updateCliente", null);
__decorate([
    (0, graphql_1.Mutation)(() => cliente_entity_1.Cliente),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientesResolver.prototype, "removeCliente", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cliente_entity_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClientesResolver.prototype, "usuario", null);
ClientesResolver = __decorate([
    (0, graphql_1.Resolver)(() => cliente_entity_1.Cliente),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(pubsub_module_1.PUB_SUB)),
    __metadata("design:paramtypes", [graphql_subscriptions_1.PubSubEngine,
        clientes_service_1.ClientesService])
], ClientesResolver);
exports.ClientesResolver = ClientesResolver;
//# sourceMappingURL=clientes.resolver.js.map