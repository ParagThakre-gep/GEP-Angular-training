export interface IProduct{
    productId: number;
    productName :string;
    price: number;
    releaseDate?: Date;
    description?: string;
    starRating: number;
    category:string;
    imageUrl?: string;
    productCode: string;
}

export class Product implements IProduct{
    productId!: number;
    productName!: string;
    price!: number;
    releaseDate?: Date | undefined;
    description?: string | undefined;
    starRating!: number;
    category!: string;
    imageUrl?: string | undefined;
    productCode!: string;
}