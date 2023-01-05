import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/Base.service';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
export declare class ClientesService extends BaseService<Cliente> {
    private clienteRepository;
    private usersService;
    constructor(clienteRepository: Repository<Cliente>, usersService: UsersService);
    findAllByUserId(usuarioId: string): Promise<Cliente[]>;
    getUsuario(id: string): Promise<User>;
}
