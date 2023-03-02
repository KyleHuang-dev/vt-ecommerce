import { IsOptional, IsString } from "class-validator";

export class SearchProductDto {
    @IsString()
    searchStr: string | null;
}
