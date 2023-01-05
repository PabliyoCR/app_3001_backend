import { TarjetasService } from 'src/modules/tarjetas/tarjetas.service';
import { UsersService } from 'src/modules/users/users.service';
export declare class CronService {
    private tarjetasService;
    private usersService;
    constructor(tarjetasService: TarjetasService, usersService: UsersService);
    setStatusTarjetas(): void;
    resetGastoss(): void;
}
