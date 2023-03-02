import { CreateProductInput, UpdateProductByIdInput } from "src/graphql";
import { AdminProductService } from "./admin-product.service";
export declare class AdminProductResolver {
    private readonly adminProductService;
    constructor(adminProductService: AdminProductService);
    fetchOrders(): Promise<import(".prisma/client").Order[]>;
    fetchProducts(): Promise<import(".prisma/client").Product[]>;
    fetchProductById(id: number): Promise<import(".prisma/client").Product>;
    create(input: CreateProductInput): Promise<import(".prisma/client").Product[]>;
    update(input: UpdateProductByIdInput): Promise<import(".prisma/client").Product[]>;
    delete(id: number): Promise<import(".prisma/client").Product[]>;
}
