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
exports.TarjetasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tarjeta_entity_1 = require("./entities/tarjeta.entity");
const Base_service_1 = require("../../base/Base.service");
const clientes_service_1 = require("../clientes/clientes.service");
const tarjeta_enums_1 = require("./schemas/tarjeta.enums");
const order = {
    cliente: {
        zona: 'ASC',
    },
    posicion: 'ASC',
    abonos: { createAt: 'DESC' },
};
let TarjetasService = class TarjetasService extends Base_service_1.BaseService {
    constructor(tarjetaRepository, clientesService) {
        super(tarjetaRepository, order);
        this.tarjetaRepository = tarjetaRepository;
        this.clientesService = clientesService;
    }
    async findAllByUserId(usuarioId) {
        return await this.tarjetaRepository.find({
            where: {
                cliente: {
                    usuarioId,
                },
            },
            order,
        });
    }
    async updatePositions(ids, positions) {
        ids.forEach(async (id, idx) => {
            const instance = await this.tarjetaRepository.update(id, {
                posicion: positions[idx],
            });
            if (!instance) {
                throw new common_1.HttpException(`Status: Batch Error`, common_1.HttpStatus.EXPECTATION_FAILED);
            }
        });
        return 'succesful';
    }
    async updateStatusTarjetas() {
        this.tarjetaRepository
            .createQueryBuilder()
            .update()
            .set({ statusTarjeta: tarjeta_enums_1.StatusTarjeta.pendiente })
            .where({
            statusTarjeta: (0, typeorm_2.In)([tarjeta_enums_1.StatusTarjeta.nueva, tarjeta_enums_1.StatusTarjeta.refinanciada]),
        })
            .execute();
    }
    async checkTarjetaPagada(id) {
        const instance = await this.tarjetaRepository.findOne({ where: { id } });
        if (instance) {
            if (instance.saldoPendiente <= 0) {
                this.asignarStatusTarjeta(id, tarjeta_enums_1.StatusTarjeta.pagada);
            }
        }
    }
    async asignarStatusTarjeta(id, status) {
        const instanceToUpdate = await this.tarjetaRepository.preload({
            id,
            statusTarjeta: status,
        });
        if (!instanceToUpdate) {
            throw new common_1.HttpException(`Status: Error on Update`, common_1.HttpStatus.CONFLICT);
        }
        await this.tarjetaRepository.save(instanceToUpdate);
    }
    async getCliente(id) {
        return await this.clientesService.findOne(id);
    }
};
TarjetasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tarjeta_entity_1.Tarjeta)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        clientes_service_1.ClientesService])
], TarjetasService);
exports.TarjetasService = TarjetasService;
//# sourceMappingURL=tarjetas.service.js.map