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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BaseService = class BaseService {
    constructor(genericRepository, order) {
        this.genericRepository = genericRepository;
        this.order = order;
    }
    async create(entity) {
        const instance = this.genericRepository.create(entity);
        return await this.genericRepository.save(instance);
    }
    async findAll() {
        return await this.genericRepository.find({
            order: this.order,
        });
    }
    async findOne(id) {
        const instance = await this.genericRepository.findOne({
            where: { id },
        });
        if (!instance) {
            throw new common_1.HttpException(`Status: 404 Not Found`, common_1.HttpStatus.NOT_FOUND);
        }
        return instance;
    }
    async update(id, entity) {
        const instanceToUpdate = await this.genericRepository.preload(Object.assign({ id }, entity));
        if (!instanceToUpdate) {
            throw new common_1.HttpException(`Status: 404 Not Found`, common_1.HttpStatus.NOT_FOUND);
        }
        await this.genericRepository.save(instanceToUpdate);
        return this.findOne(instanceToUpdate.id);
    }
    async remove(id) {
        const instance = await this.genericRepository.findOne({
            where: { id },
        });
        if (!instance) {
            throw new common_1.HttpException(`Status: 404 Not Found`, common_1.HttpStatus.NOT_FOUND);
        }
        await this.genericRepository.delete(id);
        return instance;
    }
};
BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=Base.service.js.map