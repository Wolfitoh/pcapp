import { IonGrid, IonRow, IonCol, IonSpinner, IonLoading } from '@ionic/react';
import { Producto } from '../../../../modules/productos/domain/producto';
import CardProduct from '../../../shared/components/CardProduct';

interface GridProductosProps {
    productos: Producto[];
    loading: boolean;
    setProducto?: any;
}

const GridProductos: React.FC<GridProductosProps> = ({ productos, loading, setProducto }) => {
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
                                        <CardProduct producto={producto} setProducto={setProducto} />
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
