import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "@prisma/client";
import { GetUser } from "src/decortor";
import { Role, Roles } from "src/decortor/roles.decorator";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard("jwt"))
    @Get("my-profile")
    @Roles(Role.Admin)
    getMyProfile(@GetUser() user: User) {
        return user;
    }
}
