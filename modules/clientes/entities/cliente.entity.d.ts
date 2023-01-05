import { BaseEntity } from 'src/base/base.entity';
import { Tarjeta } from 'src/modules/tarjetas/entities/tarjeta.entity';
import { Zona } from '../schemas/cliente.enums';
import { User } from 'src/modules/users/entities/user.entity';
export interface Direccion {
    latitud: number;
    longitud: number;
}
export declare class Cliente extends BaseEntity {
    usuario: User;
    usuarioId: string;
    nombre: string;
    c_c: string;
    zona: Zona;
    contacto: number[];
    direccion: Direccion;
    tarjetas: Tarjeta[];
    get totalDeudas(): number;
}
