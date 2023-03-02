import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../prisma/prisma.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prismaService;
    constructor(configService: ConfigService, prismaService: PrismaService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<import(".prisma/client").User & {
        orders: import(".prisma/client").Order[];
    }>;
}
export {};
