import { Gasto } from '../entities/user.entity';
import { CreateUserInput } from './create-user.input';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    id: string;
    gastos: Gasto[];
}
export {};
