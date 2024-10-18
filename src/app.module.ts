import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';


@Module({
  imports: [

    // connect to the database
    DatabaseModule,
    

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
