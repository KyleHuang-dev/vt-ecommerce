import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import {
    // CreateProductDto,
    // UpdateProductDto,
    SearchProductDto,
} from "./dto/index";

@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    // @Post()
    // create(@Body() dto: CreateProductDto) {
    //     return this.productService.create(dto);
    // }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Post("search")
    searchProduct(@Body() dto: SearchProductDto) {
        return this.productService.searchProduct(dto);
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.productService.findOne(+id);
    }

    // @Patch(":id")
    // update(@Param("id") id: string, @Body() dto: UpdateProductDto) {
    //     return this.productService.update(+id, dto);
    // }

    // @Delete(":id")
    // remove(@Param("id") id: string) {
    //     return this.productService.remove(+id);
    // }
}
