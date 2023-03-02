import { User } from "@prisma/client";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getMyProfile(user: User): User;
}
