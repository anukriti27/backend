
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from '../shared-orm/shared-orm-library/orm.module';

@Module({
  imports: [
    OrmModule, // Import OrmModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
