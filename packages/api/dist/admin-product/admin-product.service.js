"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminProductService = class AdminProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAllOrders() {
        const orders = await this.prismaService.order.findMany({
            orderBy: [{ updatedAt: "desc" }],
        });
        return orders;
    }
    async findAllProducts() {
        const products = await this.prismaService.product.findMany({
            orderBy: [{ updatedAt: "desc" }],
        });
        return products;
    }
    async findProduct(id) {
        const product = await this.prismaService.product.findUnique({
            where: { id },
        });
        return product;
    }
    async create(input) {
        await this.prismaService.product.create({ data: Object.assign({}, input) });
        return this.findAllProducts();
    }
    async update(id, input) {
        await this.prismaService.product.update({
            where: { id },
            data: Object.assign({}, input),
        });
        return this.findAllProducts();
    }
    async delete(id) {
        await this.prismaService.product.delete({ where: { id } });
        return this.findAllProducts();
    }
};
AdminProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminProductService);
exports.AdminProductService = AdminProductService;
//# sourceMappingURL=admin-product.service.js.map