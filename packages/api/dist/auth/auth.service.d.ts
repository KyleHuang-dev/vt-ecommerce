import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    private configService;
    private jwtService;
    constructor(prisma: PrismaService, configService: ConfigService, jwtService: JwtService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    getToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
