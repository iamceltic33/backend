import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { OperationDto } from '../dtos/operation.dto';
import { Operation } from '../schemas/operation.schema';
import { OperationsService } from './operations.service';

@Controller('operations')
export class OperationsController {
  constructor(private operationService: OperationsService) {}
  @Get()
  getAllOperations(): Promise<Operation[]> {
    return this.operationService.getAll();
  }

  @Put('create')
  addOperation(@Body() operation: OperationDto): Promise<Operation[]> {
    return this.operationService.create(operation);
  }

  @Get(':id')
  getSingleOperation(@Param('id') id: string): Promise<Operation> {
    return this.operationService.getOne(id);
  }

  @Delete(':id')
  deleteOperation(@Param('id') id: string): Promise<Operation[]> {
    return this.operationService.delete(id);
  }

  @Put('edit/:id')
  editOperation(
    @Param('id') id: string,
    @Body() operation: OperationDto,
  ): Promise<Operation[]> {
    return this.operationService.edit(operation, id);
  }
}
