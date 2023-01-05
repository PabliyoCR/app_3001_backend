import { AbonosService } from './abonos.service';
import { Abono } from './entities/abono.entity';
import { CreateAbonoInput } from './dto/create-abono.input';
import { UpdateAbonoInput } from './dto/update-abono.input';
import { Tarjeta } from '../tarjetas/entities/tarjeta.entity';
import { TarjetasService } from '../tarjetas/tarjetas.service';
export declare class AbonosResolver {
    private readonly abonosService;
    private tarjetasService;
    constructor(abonosService: AbonosService, tarjetasService: TarjetasService);
    createAbono(input: CreateAbonoInput): Promise<Abono>;
    findAll(): Promise<Abono[]>;
    findOne(id: string): Promise<Abono>;
    updateAbono(input: UpdateAbonoInput): Promise<Abono>;
    removeAbono(id: string): Promise<Abono>;
    tarjeta(abono: Abono): Promise<Tarjeta>;
}
