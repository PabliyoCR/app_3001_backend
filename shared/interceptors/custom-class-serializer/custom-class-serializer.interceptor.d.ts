import { CallHandler, ClassSerializerInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class CustomClassSerializerInterceptor extends ClassSerializerInterceptor {
    protected readonly reflector: any;
    constructor(reflector: any);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
