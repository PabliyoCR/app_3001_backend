import { UsersService } from 'src/modules/users/users.service';
import { User } from 'src/modules/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from 'src/modules/users/dto/create-user.input';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    logIn(user: User): Promise<{
        access_token: string;
        user: User;
    }>;
    signUp(input: CreateUserInput): Promise<User>;
    getRole(token: string): void;
}
