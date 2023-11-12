import React, { useEffect, useState } from 'react'
import GridProductos from './shared/GridProductos';
import { Producto } from '../../../modules/productos/domain/producto';

interface Props {
    searchQuery: string;
}

const BuscarProductos: React.FC<Props> = ({ searchQuery }) => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (searchQuery !== undefined) {
            console.log("searchQuery changed:", searchQuery);
            setLoading(true);
            setProductos([]);
            setTimeout(() => {
                fetch('public/json/productos-desc.json')
                    .then((response) => response.json())
                    .then((data) => {
                        setProductos(data);
                        setLoading(false);
                    });
            }, 2000);
        }
    }, [searchQuery]);

    return (
        <div className='h-full'>
            <GridProductos productos={productos} loading={loading} />
        </div>
    )
}

export default BuscarProductos