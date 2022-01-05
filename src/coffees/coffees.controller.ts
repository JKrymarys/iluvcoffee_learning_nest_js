import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `All coffees. Limit: ${limit}, offset: ${offset}`;
  }

  @Get('flavours')
  findAllFlavours() {
    return 'All coffee flavours';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
