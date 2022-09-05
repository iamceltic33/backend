import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  OperationType,
  IncomeType,
  ExpenseType,
} from '../enums/operation-type.enum';

export type OperationDocument = Operation & Document;

@Schema()
export class Operation {
  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Number })
  income: OperationType;

  @Prop()
  description: string;

  @Prop({ type: Number })
  type: IncomeType | ExpenseType;

  @Prop()
  amount: number;
}

export const OperationSchema = SchemaFactory.createForClass(Operation);
