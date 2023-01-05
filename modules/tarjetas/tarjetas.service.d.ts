import { Repository } from 'typeorm';
import { Tarjeta } from './entities/tarjeta.entity';
import { BaseService } from '../../base/Base.service';
import { Cliente } from '../clientes/entities/cliente.entity';
import { ClientesService } from '../clientes/clientes.service';
import { StatusTarjeta } from './schemas/tarjeta.enums';
export declare class TarjetasService extends BaseService<Tarjeta> {
    private tarjetaRepository;
    private clientesService;
    constructor(tarjetaRepository: Repository<Tarjeta>, clientesService: ClientesService);
    findAllByUserId(usuarioId: string): Promise<Tarjeta[]>;
    updatePositions(ids: string[], positions: number[]): Promise<string>;
    updateStatusTarjetas(): Promise<void>;
    checkTarjetaPagada(id: string): Promise<void>;
    asignarStatusTarjeta(id: string, status: StatusTarjeta): Promise<void>;
    getCliente(id: string): Promise<Cliente>;
}
