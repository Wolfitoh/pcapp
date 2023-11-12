import { ProductoRepository } from "../../domain/ProductoRepository";
import { Producto } from "../../domain/producto";

export function getProductosNuevos(productoRepository: ProductoRepository): Producto[] | null {
    return productoRepository.getNews();
}