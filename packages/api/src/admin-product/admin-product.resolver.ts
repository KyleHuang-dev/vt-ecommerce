import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateProductInput, UpdateProductByIdInput } from "src/graphql";
import { AdminProductService } from "./admin-product.service";

@Resolver("AdminProduct")
export class AdminProductResolver {
    constructor(private readonly adminProductService: AdminProductService) {}

    @Query("fetchOrders")
    async fetchOrders() {
        return this.adminProductService.findAllOrders();
    }
    @Query("fetchProducts")
    async fetchProducts() {
        return this.adminProductService.findAllProducts();
    }

    @Query("fetchProductById")
    async fetchProductById(id: number) {
        return this.adminProductService.findProduct(id);
    }

    @Mutation("createProduct")
    async create(@Args("input") input: CreateProductInput) {
        return this.adminProductService.create(input);
    }

    @Mutation("updateProductById")
    async update(@Args("input") input: UpdateProductByIdInput) {
        return this.adminProductService.update(input.id, input);
    }

    @Mutation("deleteProductById")
    async delete(@Args("id") id: number) {
        return this.adminProductService.delete(id);
    }
}
