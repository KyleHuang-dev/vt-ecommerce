import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { createOrderDto } from "./dto";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/decortor";
import { User } from "@prisma/client";

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @UseGuards(AuthGuard("jwt"))
    @Post()
    createOrder(@Body() dto: createOrderDto, @GetUser() user: User) {
        return this.orderService.createOrder(dto, user);
    }
}
