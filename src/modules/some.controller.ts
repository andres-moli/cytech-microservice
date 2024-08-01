import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { SomeService } from './some.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('some')
@ApiBearerAuth()
@Controller('some')
export class SomeController {
  constructor(private readonly someService: SomeService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getSomeData(@Request() req): Promise<any> {
    return this.someService.getSomeData();
  }
}
