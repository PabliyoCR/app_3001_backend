import { Direccion } from '../entities/cliente.entity';
import { Zona } from '../schemas/cliente.enums';
export declare class CreateClienteInput {
    nombre: string;
    c_c: string;
    contacto: number[];
    zona: Zona;
    direccion: Direccion;
}
