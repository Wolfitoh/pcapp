import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonIcon, IonButton, IonSearchbar } from '@ionic/react';
import { cartOutline } from 'ionicons/icons';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { useEffect, useState } from 'react';
import { Producto } from '../../domain/interfaces/producto';
import ContenidoPrincipal from './components/ContenidoPrincipal';
import BuscarProductos from './components/BuscarProductos';

const Principal: React.FC = () => {
    const [productosPromos, setProductosPromos] = useState<Producto[]>([]);
    const [productosNuevos, setProductosNuevos] = useState<Producto[]>([]);
    const [searchQuery, setsearchQuery] = useState<string>('');

    useEffect(() => {
        fetch('public/json/productos-procesadores.json')
            .then((response) => response.json())
            .then((data) => setProductosPromos(data));

        fetch('public/json/productos-tarjetas-graficas.json')
            .then((response) => response.json())
            .then((data) => setProductosNuevos(data));
    }, []);

    return (
        <IonPage className='h-screen'>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <div className="mx-auto">
                        <IonSearchbar
                            className='max-w-sm mx-auto'
                            showClearButton="always"
                            placeholder='Buscar'
                            debounce={400}
                            value={searchQuery}
                            onIonInput={(e) => setsearchQuery(e.detail.value!)}
                        ></IonSearchbar>
                    </div>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={cartOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding h-full">
                {
                    searchQuery && searchQuery.length > 0 ? (
                        <BuscarProductos searchQuery={searchQuery} />
                    ) : <ContenidoPrincipal productosNuevos={productosNuevos} productosPromos={productosPromos} />
                }
            </IonContent>
        </IonPage>
    );
};

export default Principal;
