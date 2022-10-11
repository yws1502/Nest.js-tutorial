import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';

interface DBQueryType {
  _id: boolean;
}

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async existsByEmail(email: string): Promise<DBQueryType> {
    try {
      const result = await this.catModel.exists({ email });
      return result;
    } catch (error) {
      throw new HttpException('데이터 베이스 에러', 400);
    }
    /**
     * try catch문은 제거해도 되는 코드
     * why. schema에서 이미 validation을 하고 있기 때문,
     * 만약 에러가 난다면 validation에서 에러가 난다.
     */
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }
}
