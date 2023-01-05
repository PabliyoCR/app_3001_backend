import { BaseEntity } from 'src/base/base.entity';
import { Tarjeta } from 'src/modules/tarjetas/entities/tarjeta.entity';
export declare class Abono extends BaseEntity {
    tarjeta: Tarjeta;
    tarjetaId: string;
    cantidad_abonada: number;
    fecha_pago: Date;
}
