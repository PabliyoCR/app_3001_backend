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
exports.AbonosService = void 0;
const common_1 = require("@nestjs/common");
const Base_service_1 = require("../../base/Base.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const abono_entity_1 = require("./entities/abono.entity");
const tarjetas_service_1 = require("../tarjetas/tarjetas.service");
let AbonosService = class AbonosService extends Base_service_1.BaseService {
    constructor(abonoRepository, tarjetaService) {
        super(abonoRepository, { createAt: 'DESC' });
        this.abonoRepository = abonoRepository;
        this.tarjetaService = tarjetaService;
    }
    async getTarjeta(id) {
        return await this.tarjetaService.findOne(id);
    }
};
AbonosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(abono_entity_1.Abono)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        tarjetas_service_1.TarjetasService])
], AbonosService);
exports.AbonosService = AbonosService;
//# sourceMappingURL=abonos.service.js.map