import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonChip } from '@ionic/react';
import { useEffect } from 'react';

interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

interface CardProductProps {
    producto: Producto;
    setProducto?: any;
}

const CardProduct: React.FC<CardProductProps> = ({ producto, setProducto }) => {

    return (
        <IonCard className='w-full ion-no-margin cursor-pointer' onClick={() => setProducto(producto)}>
            <div className='absolute top-0 right-0 bg-red-500 text-white p-2 text-xs font-bold transform rotate-[12deg] origin-top-left'>
                Oferta!
            </div>
            <IonImg src={producto.imagen} className='h-52 object-cover' />
            <IonCardHeader>
                <IonCardTitle className='text-base line-clamp-2'>
                    {producto.nombre}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='font-bold'>
                <IonChip color="primary">
                    <div className='flex flex-wrap'>
                        <span className='text-lg flex-none'>S/. {producto.precio}</span>
                        <div className='flex-none'>
                            <span className='ml-2 text-xs text-gray-500 line-through'>S/. {producto.precio}</span>
                            <span className='ml-1 text-xs text-gray-500 font-bold'> -17%</span>
                        </div>
                    </div>
                </IonChip>
            </IonCardContent>
        </IonCard>
    );
};

export default CardProduct;