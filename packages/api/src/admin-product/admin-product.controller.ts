import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "@prisma/client";
import { GetUser } from "src/decortor";
import { AdminProductService } from "./admin-product.service";

@Controller("admin")
export class AdminProductController {
    constructor(private readonly adminProductService: AdminProductService) {}

    @UseGuards(AuthGuard("jwt"))
    @Get()
    getAdmin(@GetUser() user: User) {
        return user.isAdmin;
    }
}
