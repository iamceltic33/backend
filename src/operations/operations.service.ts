import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OperationDto } from '../dtos/operation.dto';
import { Operation, OperationDocument } from '../schemas/operation.schema';

@Injectable()
export class OperationsService {
  constructor(
    @InjectModel(Operation.name)
    private operationModel: Model<OperationDocument>,
  ) {}
  async getAll(): Promise<Operation[]> {
    return this.operationModel.find().exec();
  }
  async delete(id: string): Promise<Operation[]> {
    await this.operationModel.findByIdAndDelete(id);
    return this.operationModel.find().exec();
  }
  async getOne(id: string): Promise<Operation> {
    return this.operationModel.findById(id).exec();
  }
  async create(operation: OperationDto): Promise<Operation[]> {
    const createdOperation = new this.operationModel(operation);
    await createdOperation.save();
    return this.operationModel.find();
  }
  async edit(operation: OperationDto, id: string): Promise<Operation[]> {
    const foundOp = await this.operationModel.findById(id);
    foundOp.date = operation.date;
    foundOp.income = operation.income;
    foundOp.description = operation.description;
    foundOp.type = operation.type;
    foundOp.amount = operation.amount;
    await foundOp.save();
    return this.operationModel.find();
  }
}
