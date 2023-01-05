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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const Base_service_1 = require("../../base/Base.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService extends Base_service_1.BaseService {
    constructor(userRepository) {
        super(userRepository, {});
        this.userRepository = userRepository;
    }
    async create(input) {
        let user = await this.findOneByEmail(input.email);
        if (user) {
            throw new common_1.HttpException(`User Already Exists`, common_1.HttpStatus.CONFLICT);
        }
        const password = await bcrypt.hash(input.password, 10);
        user = this.userRepository.create(Object.assign(Object.assign({}, input), { password }));
        return await this.userRepository.save(user);
    }
    async findOneByEmail(email) {
        const instance = await this.userRepository.findOne({
            where: { email },
        });
        return instance;
    }
    async resetGastos() {
        this.userRepository
            .createQueryBuilder()
            .update()
            .set({ gastos: [] })
            .execute();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map