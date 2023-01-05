import { DiaPago, Interes, NumeroCuotas } from '../schemas/tarjeta.enums';
export declare class CreateTarjetaInput {
    clienteId: string;
    dia_de_pago: DiaPago;
    prestamo_sin_interes: number;
    interes: Interes;
    numero_cuotas: NumeroCuotas;
    valorCuota: number;
}
