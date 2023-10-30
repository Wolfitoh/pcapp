import React, { useEffect, useState } from 'react'
import GridProductos from './GridProductos';

interface Props {
    searchQuery: string;
}

const BuscarProductos: React.FC<Props> = ({ searchQuery }) => {

    useEffect(() => {
        console.log("searchQuery changed:", searchQuery);
    }, [searchQuery]);

    return (
        <div className='h-full'>
            <GridProductos url='public/json/productos-desc.json' />
        </div>
    )
}

export default BuscarProductos