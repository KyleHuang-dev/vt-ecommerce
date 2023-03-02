"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const admin_product_service_1 = require("./admin-product.service");
let AdminProductResolver = class AdminProductResolver {
    constructor(adminProductService) {
        this.adminProductService = adminProductService;
    }
    async fetchOrders() {
        return this.adminProductService.findAllOrders();
    }
    async fetchProducts() {
        return this.adminProductService.findAllProducts();
    }
    async fetchProductById(id) {
        return this.adminProductService.findProduct(id);
    }
    async create(input) {
        return this.adminProductService.create(input);
    }
    async update(input) {
        return this.adminProductService.update(input.id, input);
    }
    async delete(id) {
        return this.adminProductService.delete(id);
    }
};
__decorate([
    (0, graphql_1.Query)("fetchOrders"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminProductResolver.prototype, "fetchOrders", null);
__decorate([
    (0, graphql_1.Query)("fetchProducts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminProductResolver.prototype, "fetchProducts", null);
__decorate([
    (0, graphql_1.Query)("fetchProductById"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminProductResolver.prototype, "fetchProductById", null);
__decorate([
    (0, graphql_1.Mutation)("createProduct"),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminProductResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)("updateProductById"),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminProductResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)("deleteProductById"),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminProductResolver.prototype, "delete", null);
AdminProductResolver = __decorate([
    (0, graphql_1.Resolver)("AdminProduct"),
    __metadata("design:paramtypes", [admin_product_service_1.AdminProductService])
], AdminProductResolver);
exports.AdminProductResolver = AdminProductResolver;
//# sourceMappingURL=admin-product.resolver.js.map