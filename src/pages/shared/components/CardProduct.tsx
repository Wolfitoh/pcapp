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
            <IonImg src={producto.imagen} className='h-36 object-cover' />
            <IonCardHeader>
                <IonCardTitle>
                    {producto.nombre}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>{producto.descripcion}</p>
                <IonChip color="primary">S/. {producto.precio}</IonChip>
            </IonCardContent>
        </IonCard>
    );
};

export default CardProduct;