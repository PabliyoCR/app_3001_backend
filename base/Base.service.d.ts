import { DeepPartial, FindOptionsOrder, Repository } from 'typeorm';
import { IBaseService } from './IBase.service';
import { BaseEntity } from './base.entity';
export declare abstract class BaseService<T extends BaseEntity> implements IBaseService<T> {
    private readonly genericRepository;
    private order;
    constructor(genericRepository: Repository<T>, order: FindOptionsOrder<T>);
    create(entity: DeepPartial<T>): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    update(id: string, entity: DeepPartial<T>): Promise<T>;
    remove(id: string): Promise<T>;
}
