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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const logIn_response_1 = require("./dto/logIn-response");
const logIn_user_input_1 = require("./dto/logIn-user.input");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../modules/users/entities/user.entity");
const create_user_input_1 = require("../modules/users/dto/create-user.input");
const gql_auth_guard_1 = require("./guards/gql-auth.guard");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    logIn(input, context) {
        return this.authService.logIn(context.user);
    }
    signUp(input) {
        return this.authService.signUp(input);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => logIn_response_1.LogInResponse),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [logIn_user_input_1.LogInUserInput, Object]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "logIn", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "signUp", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map