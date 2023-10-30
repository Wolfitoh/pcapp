import { IonButton } from '@ionic/react'
import React from 'react'
import PrincipalContent from './SliderHorizontal'
import GridProductos from './GridProductos'
import { Producto } from '../../../domain/interfaces/producto'

interface Props {
    productosPromos: Producto[];
    productosNuevos: Producto[];
}

const ContenidoPrincipal: React.FC<Props> = ({ productosPromos, productosNuevos }) => {
    return (
        <div>
            <div>
                <div className='float-left mb-4'>
                    <h2 className='text-xl'>Nuevos Ingresos</h2>
                    <span className='text-gray-500'>¡Estos son nuestros nuevos ingresos!</span>
                </div>
                <IonButton className='float-right' fill="clear">ver más</IonButton>
            </div>
            <PrincipalContent productos={productosPromos} />

            <div className='mt-4'>
                <div className='float-left mb-4'>
                    <h2 className='text-xl'>Lo más vendido</h2>
                    <span className='text-gray-500'>Lo que nuestros usuarios prefieren</span>
                </div>
                <IonButton className='float-right' fill="clear">ver más</IonButton>
            </div>

            <PrincipalContent productos={productosNuevos} />

            <div className='mb-2 mt-4'>
                <h2 className='text-xl'>Promociones</h2>
                <span className='text-gray-500'>¡Nuestras promociones y ofertas!</span>
            </div>
            <GridProductos url='public/json/productos-desc.json' />
        </div>
    )
}

export default ContenidoPrincipal