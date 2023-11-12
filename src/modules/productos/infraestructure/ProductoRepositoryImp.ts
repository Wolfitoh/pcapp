import { ProductoRepository } from "../domain/ProductoRepository";
import { Producto } from "../domain/producto";


export function createLocalStorageProductoRepository(): ProductoRepository {
    return {
        save,
        get,
        getAll,
        getNews,
    };
}

function save(producto: Producto) {
    const productos = getAllFromLocalStorage();

    productos.set(producto.id, producto);
    localStorage.setItem("productos", JSON.stringify(Array.from(productos.entries())));
}


function getNews() {
    const productos = getAllFromLocalStorage();

    return Array.from(productos.values()).slice(0, 3);
}


function get(id: string) {
    const productos = getAllFromLocalStorage();
    const producto = productos.get(id);

    if (!producto) {
        return null;
    }

    return producto;
}

function getAll() {
    const productos = getAllFromLocalStorage();

    return Array.from(productos.values());
}

function getAllFromLocalStorage(): Map<string, Producto> {
    const productos = localStorage.getItem("productos");

    if (productos === null) {
        return new Map();
    }

    const map = new Map(JSON.parse(productos) as Iterable<[string, Producto]>);

    return map;
}