import { Injectable } from "@nestjs/common";
import { SearchProductDto } from "./dto/index";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService) {}

    // async create(dto: CreateProductDto) {
    //     let price = Number(dto.price);

    //     const newProduct = await this.prismaService.product.create({
    //         data: {
    //             ...dto,
    //             price,
    //         },
    //     });
    //     return newProduct;
    // }

    async findAll() {
        const prodcts = await this.prismaService.product.findMany();
        return prodcts;
    }

    async searchProduct(dto: SearchProductDto) {
        if (!dto.searchStr) this.findAll();

        const searchProducts = await this.prismaService.product.findMany({
            where: {
                OR: [
                    { name: { contains: dto.searchStr, mode: "insensitive" } },
                    {
                        category: {
                            contains: dto.searchStr,
                            mode: "insensitive",
                        },
                    },
                ],
            },
        });
        return searchProducts;
    }

    async findOne(id: number) {
        const product = await this.prismaService.product.findUnique({
            where: { id },
        });
        return product;
    }
}
