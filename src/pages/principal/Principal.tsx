import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { useEffect, useState } from 'react';
import { Producto } from '../../modules/productos/domain/producto';
import ContenidoPrincipal from './components/ContenidoPrincipal';
import { cartOutline, personOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom'; // Importamos useHistory

interface PrincipalProps {
    searchQuery: string;
}

const Principal: React.FC = () => {
    const [productosPromos, setProductosPromos] = useState<Producto[]>([]);
    const [productosNuevos, setProductosNuevos] = useState<Producto[]>([]);
    const [loadingProductosPromos, setLoadingProductosPromos] = useState<boolean>(false);
    const [loadingProductosNuevos, setLoadingProductosNuevos] = useState<boolean>(false);
    const history = useHistory(); // Inicializamos useHistory

    const handleInput = (event: any) => {
        history.push(`/search/${event.detail.value!}`);
    };


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

    return (
        <IonPage className='h-screen'>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton menu='menu-principal' />
                    </IonButtons>
                    <div className="mx-auto">
                        <IonSearchbar
                            animated={true}
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
                <ContenidoPrincipal productosNuevos={productosNuevos} productosPromos={productosPromos} loadingProductosNuevos={loadingProductosNuevos}
                    loadingProductosPromos={loadingProductosPromos} />
            </IonContent>
        </IonPage>
    );
};

export default Principal;
