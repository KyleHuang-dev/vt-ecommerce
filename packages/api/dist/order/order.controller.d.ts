import { OrderService } from "./order.service";
import { createOrderDto } from "./dto";
import { User } from "@prisma/client";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(dto: createOrderDto, user: User): Promise<import(".prisma/client").Order>;
}
