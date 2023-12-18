import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { useEffect, useState } from 'react';
import { Producto } from '../../modules/productos/domain/producto';
import ContenidoPrincipal from './components/ContenidoPrincipal';
import { cartOutline, location as direction, personOutline } from 'ionicons/icons';
import { useHistory, useLocation } from 'react-router-dom'; // Importamos useHistory
import PrincipalToolbar from '../../components/PrincipalToolbar';

interface PrincipalProps {
    searchQuery: string;
}

const Principal: React.FC = () => {
    const [productosPromos, setProductosPromos] = useState<Producto[]>([]);
    const [productosNuevos, setProductosNuevos] = useState<Producto[]>([]);
    const [loadingProductosPromos, setLoadingProductosPromos] = useState<boolean>(false);
    const [loadingProductosNuevos, setLoadingProductosNuevos] = useState<boolean>(false);

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
                <PrincipalToolbar></PrincipalToolbar>
            </IonHeader>

            <IonContent className="ion-padding h-full">
                <ContenidoPrincipal productosNuevos={productosNuevos} productosPromos={productosPromos} loadingProductosNuevos={loadingProductosNuevos}
                    loadingProductosPromos={loadingProductosPromos} />
            </IonContent>
        </IonPage>
    );
};

export default Principal;
