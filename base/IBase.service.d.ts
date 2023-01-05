import { DeepPartial } from 'typeorm';
export interface IBaseService<T> {
    create(entity: DeepPartial<T>): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    update(id: string, entity: DeepPartial<T>): Promise<T>;
    remove(id: string): Promise<T>;
}
