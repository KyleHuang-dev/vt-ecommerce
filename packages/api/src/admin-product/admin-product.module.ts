import { Module } from '@nestjs/common';
import { AdminProductService } from './admin-product.service';
import { AdminProductResolver } from './admin-product.resolver';

@Module({
  providers: [AdminProductResolver, AdminProductService]
})
export class AdminProductModule {}
