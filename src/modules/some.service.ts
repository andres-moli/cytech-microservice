import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class SomeService {
  constructor(
    @Inject('DATABASE_CONNECTION') private readonly connection: any,
  ) {}

  async getSomeData(): Promise<any> {
    const result = await this.connection.query('SELECT * FROM CLI_Cliente');
    return result;
  }
}
