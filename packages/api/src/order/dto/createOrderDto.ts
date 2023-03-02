import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    isString,
    IsString,
} from "class-validator";

export class createOrderDto {
    @IsNotEmpty()
    @IsNumber()
    totalAmount: number;

    @IsNotEmpty()
    @IsString()
    orderItems: string;
}
