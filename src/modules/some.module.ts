import { Module } from '@nestjs/common';
import { SomeService } from './some.service';
import { SomeController } from './some.controller';

@Module({
  providers: [SomeService],
  controllers: [SomeController],
})
export class SomeModule {}
