import { SearchProductDto } from "./dto/index";
import { PrismaService } from "src/prisma/prisma.service";
export declare class ProductService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<import(".prisma/client").Product[]>;
    searchProduct(dto: SearchProductDto): Promise<import(".prisma/client").Product[]>;
    findOne(id: number): Promise<import(".prisma/client").Product>;
}
