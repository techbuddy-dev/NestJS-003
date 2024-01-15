import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from './pagination.dto';

@Controller('user')
export class UserController {
  @Get()
  findAll(@Query() pagination:  PaginationDto) {
    console.log(`List of users. Page number: ${pagination.pageNumber}, Page size: ${pagination.pageSize}`);
  }
}
