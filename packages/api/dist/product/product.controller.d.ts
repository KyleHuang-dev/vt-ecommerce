import { ProductService } from "./product.service";
import { SearchProductDto } from "./dto/index";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<import(".prisma/client").Product[]>;
    searchProduct(dto: SearchProductDto): Promise<import(".prisma/client").Product[]>;
    findOne(id: string): Promise<import(".prisma/client").Product>;
}
