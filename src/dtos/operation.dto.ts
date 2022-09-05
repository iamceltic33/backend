import {
  IncomeType,
  ExpenseType,
  OperationType,
} from '../enums/operation-type.enum';

export class OperationDto {
  date: Date;
  income: OperationType;
  description: string;
  type: IncomeType | ExpenseType;
  amount: number;
}
