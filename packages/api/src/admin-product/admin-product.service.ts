import { Injectable, Redirect } from "@nestjs/common";
import { CreateProductInput, UpdateProductByIdInput } from "src/graphql";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AdminProductService {
    constructor(private prismaService: PrismaService) {}

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

    async findProduct(id: number) {
        const product = await this.prismaService.product.findUnique({
            where: { id },
        });
        return product;
    }

    async create(input: CreateProductInput) {
        await this.prismaService.product.create({ data: { ...input } });
        return this.findAllProducts();
    }

    async update(id: number, input: UpdateProductByIdInput) {
        await this.prismaService.product.update({
            where: { id },
            data: {
                ...input,
            },
        });
        return this.findAllProducts();
    }

    async delete(id: number) {
        await this.prismaService.product.delete({ where: { id } });
        return this.findAllProducts();
    }

    async getAdmin() {
        console.log("admin page");
    }
}
