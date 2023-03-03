import { User } from "@prisma/client";
import { AdminProductService } from "./admin-product.service";
export declare class AdminProductController {
    private readonly adminProductService;
    constructor(adminProductService: AdminProductService);
    getAdmin(user: User): boolean;
}
