import { BaseEntity } from 'src/base/base.entity';
import { Role } from 'src/auth/models/roles.model';
import { Cliente } from 'src/modules/clientes/entities/cliente.entity';
import { ConceptoGasto } from '../schemas/user.enums';
export interface Gasto {
    concepto: ConceptoGasto;
    monto: number;
    descripcion: string;
}
export declare class User extends BaseEntity {
    email: string;
    password: string;
    role: Role;
    nombre: string;
    gastos: Gasto[];
    clientes: Cliente[];
    get dineroRecaudadoHoy(): number;
    get dineroPrestadoHoy(): number;
    get dineroPrestadoMes(): number;
    get clientesQuePagaronHoy(): number;
    get clientesQueNoPagaronHoy(): number;
    get totalGastos(): number;
}
