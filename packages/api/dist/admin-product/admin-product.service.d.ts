import { CreateProductInput, UpdateProductByIdInput } from "src/graphql";
import { PrismaService } from "src/prisma/prisma.service";
export declare class AdminProductService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAllOrders(): Promise<import(".prisma/client").Order[]>;
    findAllProducts(): Promise<import(".prisma/client").Product[]>;
    findProduct(id: number): Promise<import(".prisma/client").Product>;
    create(input: CreateProductInput): Promise<import(".prisma/client").Product[]>;
    update(id: number, input: UpdateProductByIdInput): Promise<import(".prisma/client").Product[]>;
    delete(id: number): Promise<import(".prisma/client").Product[]>;
}
