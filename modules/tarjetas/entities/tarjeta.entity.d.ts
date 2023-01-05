import { BaseEntity } from 'src/base/base.entity';
import { Abono } from 'src/modules/abonos/entities/abono.entity';
import { Cliente } from 'src/modules/clientes/entities/cliente.entity';
import { DiaPago, Interes, NumeroCuotas, StatusTarjeta } from '../schemas/tarjeta.enums';
export declare class Tarjeta extends BaseEntity {
    cliente: Cliente;
    clienteId: string;
    numero: number;
    statusTarjeta: StatusTarjeta;
    dia_de_pago: DiaPago;
    fecha_de_prestamo: Date;
    prestamo_sin_interes: number;
    interes: Interes;
    numero_cuotas: NumeroCuotas;
    valorCuota: number;
    abonos: Abono[];
    posicion: number;
    get deuda(): number;
    get interesesGanados(): number;
    get totalAbonado(): number;
    get cuotasPagadas(): number;
    get saldoAFavor(): number;
    get abonoHoy(): boolean;
    get saldoPendiente(): number;
    get cuotasPendientes(): number;
}
