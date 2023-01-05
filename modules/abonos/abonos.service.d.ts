import { BaseService } from 'src/base/Base.service';
import { Repository } from 'typeorm';
import { Abono } from './entities/abono.entity';
import { Tarjeta } from '../tarjetas/entities/tarjeta.entity';
import { TarjetasService } from '../tarjetas/tarjetas.service';
export declare class AbonosService extends BaseService<Abono> {
    private abonoRepository;
    private tarjetaService;
    constructor(abonoRepository: Repository<Abono>, tarjetaService: TarjetasService);
    getTarjeta(id: string): Promise<Tarjeta>;
}
