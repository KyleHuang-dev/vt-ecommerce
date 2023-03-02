export interface CreateProductInput {
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    description?: Nullable<string>;
}
export interface UpdateProductByIdInput {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    description?: Nullable<string>;
}
export interface Product {
    id: number;
    name: string;
    description?: Nullable<string>;
    price: number;
    imageUrl: string;
    category: string;
}
export interface Order {
    id: number;
    userId: number;
    totalAmount: number;
    orderItems: string;
    createdAt: string;
}
export interface IQuery {
    fetchProducts(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
    fetchOrders(): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;
    fetchProductById(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}
export interface IMutation {
    createProduct(input: CreateProductInput): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
    updateProductById(input: UpdateProductByIdInput, id?: Nullable<number>): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
    deleteProductById(id?: Nullable<number>): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
}
type Nullable<T> = T | null;
export {};
