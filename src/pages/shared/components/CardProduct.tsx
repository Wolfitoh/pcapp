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
            <IonImg src={producto.imagen} className='h-44 object-cover' />
            <IonCardHeader>
                <IonCardTitle className='text-base line-clamp-2'>
                    {producto.nombre}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='font-bold'>
                <IonChip color="primary">
                    <span className='text-lg'>S/. {producto.precio}</span>
                    <span className='ml-2 text-xs text-gray-500 line-through'>S/. {producto.precio}</span>
                    <span className='ml-1 text-xs text-gray-500 font-bold'> -17%</span>
                </IonChip>
            </IonCardContent>
        </IonCard>
    );
};

export default CardProduct;