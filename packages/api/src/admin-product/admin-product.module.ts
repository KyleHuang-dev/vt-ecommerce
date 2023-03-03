import { Module } from "@nestjs/common";
import { AdminProductService } from "./admin-product.service";
import { AdminProductResolver } from "./admin-product.resolver";
import { AdminProductController } from "./admin-product.controller";

@Module({
    controllers: [AdminProductController],
    providers: [AdminProductResolver, AdminProductService],
})
export class AdminProductModule {}
