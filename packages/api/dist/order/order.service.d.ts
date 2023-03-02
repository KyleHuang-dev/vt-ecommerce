import { Order, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { createOrderDto } from "./dto";
export declare class OrderService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createOrder(dto: createOrderDto, user: User): Promise<Order>;
}
