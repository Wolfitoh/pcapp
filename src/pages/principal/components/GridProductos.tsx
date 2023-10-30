import { IonGrid, IonRow, IonCol, IonSpinner, IonLoading } from '@ionic/react';
import { useState, useEffect } from 'react';
import { Producto } from '../../../domain/interfaces/producto';
import CardProduct from '../../shared/components/CardProduct';

interface GridProductosProps {
    url: string;
}

const GridProductos: React.FC<GridProductosProps> = ({ url }) => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setProductos([]);
        setTimeout(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setProductos(data);
                    setLoading(false);
                });
        }, 2000);
    }, [url]);

    return (
        <IonGrid className='h-full'>
            {
                loading ? (

                    <div className="flex justify-center items-center w-full h-full">
                        <IonSpinner name="crescent" />
                        <p className='ml-2'>Porfavor espera...</p>
                    </div>
                ) :

                    productos.length !== 0 && (
                        (
                            <IonRow className="ion-justify-content-center w-full">
                                {productos.map((producto) => (
                                    <IonCol
                                        size-xs="12"
                                        size-sm="6"
                                        size-md="4"
                                        size="3"
                                        key={producto.id}
                                    >
                                        <CardProduct producto={producto} />
                                    </IonCol>
                                ))}
                            </IonRow>
                        )
                    )
            }

        </IonGrid>
    );
};

export default GridProductos;
