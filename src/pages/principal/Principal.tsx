import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonIcon, IonButton, IonSearchbar } from '@ionic/react';
import { cartOutline, person, personOutline } from 'ionicons/icons';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { useEffect, useState } from 'react';
import { Producto } from '../../modules/productos/domain/producto';
import ContenidoPrincipal from './components/ContenidoPrincipal';
import BuscarProductos from './components/BuscarProductos';

const Principal: React.FC = () => {
    const [productosPromos, setProductosPromos] = useState<Producto[]>([]);
    const [productosNuevos, setProductosNuevos] = useState<Producto[]>([]);
    const [loadingProductosPromos, setLoadingProductosPromos] = useState<boolean>(false);
    const [loadingProductosNuevos, setLoadingProductosNuevos] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        setLoadingProductosPromos(true);
        setLoadingProductosNuevos(true);
        setTimeout(() => {
            fetch('public/json/productos-procesadores.json')
                .then((response) => response.json())
                .then((data) => {
                    setProductosPromos(data);
                    setLoadingProductosPromos(false);
                });
        }, 2000);

        setTimeout(() => {
            fetch('public/json/productos-tarjetas-graficas.json')
                .then((response) => response.json())
                .then((data) => {
                    setProductosNuevos(data);
                    setLoadingProductosNuevos(false);
                });
        }, 2000);
    }, []);


    const handleInput = (event: any) => {
        setSearchQuery(event.detail.value!)
    };

    return (
        <IonPage className='h-screen'>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton menu='menu-principal' />
                    </IonButtons>
                    <div className="mx-auto">
                        <IonSearchbar
                            className='max-w-sm mx-auto'
                            showClearButton="always"
                            placeholder='Buscar'
                            debounce={400}
                            onIonInput={(ev) => handleInput(ev)}
                        ></IonSearchbar>
                    </div>
                    <IonButtons slot="end">
                        <IonMenuButton menu='menu-user'>
                            <IonIcon icon={personOutline} />
                        </IonMenuButton>
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
                    ) : <ContenidoPrincipal productosNuevos={productosNuevos} productosPromos={productosPromos} loadingProductosNuevos={loadingProductosNuevos}
                        loadingProductosPromos={loadingProductosPromos} />
                }
            </IonContent>
        </IonPage>
    );
};

export default Principal;
