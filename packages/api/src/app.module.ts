import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { OrderModule } from "./order/order.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { AdminProductModule } from "./admin-product/admin-product.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ["./**/*.graphql"],
            definitions: {
                path: join(process.cwd(), "src/graphql.ts"),
            },
        }),
        ProductModule,
        PrismaModule,
        AuthModule,
        UserModule,
        OrderModule,
        AdminProductModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
