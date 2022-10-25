import { IProduct } from "../Card/interface";

export interface ICartProps {
    cartContent: IProduct[],
    totalItems: number,
    TotalPrice: number
}