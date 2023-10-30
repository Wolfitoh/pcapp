import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonChip } from '@ionic/react';

interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

interface CardProductProps {
    producto: Producto;
}

const CardProduct: React.FC<CardProductProps> = ({ producto }) => {
    return (
        <IonCard className='w-full ion-no-margin'>
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