import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";

import { Model } from "./models-generation";
import { envConfig } from "src/config/env";

@Module({
    imports: [
        MongooseModule.forRoot(envConfig.mongodbUri, {
            connectionFactory: (connection) => {
                console.log('Database connected');
                return connection;
            },
        }),
        Model
    ],
})
export class DatabaseModule {}
