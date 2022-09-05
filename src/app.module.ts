import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsService } from './operations/operations.service';
import { OperationsController } from './operations/operations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Operation, OperationSchema } from './schemas/operation.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/finance-tracker'),
    MongooseModule.forFeature([
      { schema: OperationSchema, name: Operation.name },
    ]),
  ],
  controllers: [AppController, OperationsController],
  providers: [AppService, OperationsService],
})
export class AppModule {}
