import { AuthService } from './auth.service';
import { LogInUserInput } from './dto/logIn-user.input';
import { User } from 'src/modules/users/entities/user.entity';
import { CreateUserInput } from 'src/modules/users/dto/create-user.input';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    logIn(input: LogInUserInput, context: any): Promise<{
        access_token: string;
        user: User;
    }>;
    signUp(input: CreateUserInput): Promise<User>;
}
