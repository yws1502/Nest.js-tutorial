import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// AuthGuard의 경우 strategy를 자동으로 실행하는 기능을 갖는다.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
