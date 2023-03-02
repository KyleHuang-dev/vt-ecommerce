import { Injectable } from "@nestjs/common";
import { Order, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { createOrderDto } from "./dto";

@Injectable()
export class OrderService {
    constructor(private prismaService: PrismaService) {}

    async createOrder(dto: createOrderDto, user: User) {
        let totalAmount = Number(dto.totalAmount);
        const { id } = user;
        const newOrder = await this.prismaService.order.create({
            data: {
                userId: id,
                ...dto,
                totalAmount,
            },
        });
        return newOrder;
    }
}
