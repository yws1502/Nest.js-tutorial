import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log('Before...');
    // before 같은 경우는 보통 middleware에서 처리한다.

    /* 
      intercept같은 경우는 controller가 보내준 데이터를 가공을 하는 것
    */

    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
