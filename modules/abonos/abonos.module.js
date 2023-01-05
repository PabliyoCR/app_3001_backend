"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbonosModule = void 0;
const common_1 = require("@nestjs/common");
const abonos_service_1 = require("./abonos.service");
const abonos_resolver_1 = require("./abonos.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const abono_entity_1 = require("./entities/abono.entity");
const tarjetas_module_1 = require("../tarjetas/tarjetas.module");
let AbonosModule = class AbonosModule {
};
AbonosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([abono_entity_1.Abono]), tarjetas_module_1.TarjetasModule],
        providers: [abonos_resolver_1.AbonosResolver, abonos_service_1.AbonosService],
    })
], AbonosModule);
exports.AbonosModule = AbonosModule;
//# sourceMappingURL=abonos.module.js.map