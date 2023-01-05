import { TarjetasService } from './tarjetas.service';
import { Tarjeta } from './entities/tarjeta.entity';
import { CreateTarjetaInput } from './dto/create-tarjeta.input';
import { Cliente } from '../clientes/entities/cliente.entity';
import { UpdateTarjetaInput } from './dto/update-tarjeta.input';
export declare class TarjetasResolver {
    private readonly tarjetasService;
    constructor(tarjetasService: TarjetasService);
    createTarjeta(input: CreateTarjetaInput, refinanciada: boolean): Promise<Tarjeta>;
    findAll(req: any): Promise<Tarjeta[]>;
    findOne(id: string): Promise<Tarjeta>;
    updateTarjeta(input: UpdateTarjetaInput): Promise<Tarjeta>;
    updatePosicionTarjetas(tarjetasId: string[], posiciones: number[]): Promise<string>;
    removeTarjeta(id: string): Promise<Tarjeta>;
    cliente(tarjeta: Tarjeta): Promise<Cliente>;
}
