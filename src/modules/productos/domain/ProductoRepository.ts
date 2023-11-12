import { Producto } from "./producto";

export interface ProductoRepository {
    save: (producto: Producto) => void;
    get: (id: string) => Producto | null;
    getAll: () => Producto[];
    getNews: () => Producto[];
}