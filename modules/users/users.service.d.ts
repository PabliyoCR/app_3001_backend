import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseService } from '../../base/Base.service';
import { CreateUserInput } from './dto/create-user.input';
export declare class UsersService extends BaseService<User> {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(input: CreateUserInput): Promise<User>;
    findOneByEmail(email: string): Promise<User | null>;
    resetGastos(): Promise<void>;
}
