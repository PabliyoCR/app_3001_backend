import { CreateTarjetaInput } from './create-tarjeta.input';
declare const UpdateTarjetaInput_base: import("@nestjs/common").Type<Partial<Omit<CreateTarjetaInput, "clienteId">>>;
export declare class UpdateTarjetaInput extends UpdateTarjetaInput_base {
    id: string;
    valorCuota: number;
}
export {};
