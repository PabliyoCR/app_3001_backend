import { ClientesService } from './clientes.service';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { PubSubEngine } from 'graphql-subscriptions';
import { User } from '../users/entities/user.entity';
export declare class ClientesResolver {
    private pubSub;
    private readonly clientesService;
    constructor(pubSub: PubSubEngine, clientesService: ClientesService);
    createCliente(input: CreateClienteInput, req: any): Promise<Cliente>;
    findAll(req: any): Promise<Cliente[]>;
    findOne(id: string): Promise<Cliente>;
    updateCliente(input: UpdateClienteInput): Promise<Cliente>;
    removeCliente(id: string): Promise<Cliente>;
    usuario(cliente: Cliente): Promise<User>;
}
