import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

import { AuthDto } from "./dto";

import * as argon from "argon2";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private configService: ConfigService,
        private jwtService: JwtService
    ) {}
    async signup(dto: AuthDto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                    userName: dto.userName,
                },
            });
            return this.getToken(user.id, user.email);
        } catch (error) {
            if (error.code === "P2002")
                throw new ForbiddenException("User already existed.");
            else console.error(error);
        }
    }

    async login(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });

        if (!user) {
            throw new NotFoundException("Please sign up");
        }

        const isMatch = await argon.verify(user.hash, dto.password);

        if (!isMatch) {
            throw new ForbiddenException("Credentials are invalid");
        }
        return this.getToken(user.id, user.email);
    }

    async getToken(
        userId: number,
        email: string
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
        };
        return {
            access_token: this.jwtService.sign(payload, {
                // expiresIn: "15m",
                secret: this.configService.get("JWT_SECRET"),
            }),
        };
    }
}
