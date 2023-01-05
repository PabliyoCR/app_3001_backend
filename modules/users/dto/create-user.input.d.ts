import { Role } from 'src/auth/models/roles.model';
export declare class CreateUserInput {
    email: string;
    password: string;
    nombre: string;
    role?: Role;
}
