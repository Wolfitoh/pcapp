import React, { useEffect, useState } from 'react'
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import GridProductos from '../principal/components/shared/GridProductos';
import { Producto } from '../../modules/productos/domain/producto';
import { useParams } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { cartOutline, personOutline } from 'ionicons/icons';

const Search: React.FC = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { query } = useParams<{ query: string }>();
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        setSearchQuery(query);
    }, []);

    const handleInput = (event: any) => {
        setSearchQuery(event.detail.value!);
    };

    useEffect(() => {
        if (searchQuery !== undefined) {
            console.log("searchQuery changed:", searchQuery);
            setLoading(true);
            setProductos([]);
            setTimeout(() => {
                fetch('public/json/productos-desc.json')
                    .then((response) => response.json())
                    .then((data) => {
                        setProductos(data);
                        setLoading(false);
                    });
            }, 2000);
        }
    }, [searchQuery]);

    return (
        <IonPage>
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
                            value={searchQuery}
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
            <IonContent>
                <div className='mx-auto w-full lg:w-11/12 xl:w-10/12 h-full'>
                    <GridProductos productos={productos} loading={loading} />
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Search