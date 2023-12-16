import {
    IonContent,
    IonIcon,
    IonLabel,
    IonMenu,
    IonNote,
    IonImg,
    IonGrid,
    IonRow,
    IonAvatar,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonPopover,
    IonItem
} from '@ionic/react';

import { archiveOutline, archiveSharp, heartOutline, heartSharp, homeOutline, homeSharp, paperPlaneOutline, paperPlaneSharp, personOutline, personSharp, callOutline, callSharp, closeOutline, closeSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Principal',
        url: '/principal',
        iosIcon: homeOutline,
        mdIcon: homeSharp
    },
    {
        title: 'Perfil',
        url: '/perfil',
        iosIcon: personOutline,
        mdIcon: personSharp
    },
    {
        title: 'Favoritos',
        url: '/page/Favoritos',
        iosIcon: heartOutline,
        mdIcon: heartSharp
    },
    {
        title: 'Pedidos',
        url: '/page/Pedidos',
        iosIcon: archiveOutline,
        mdIcon: archiveSharp
    },
    {
        title: 'Mensajes',
        url: '/page/Mensajes',
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp
    },
    {
        title: 'Contacto',
        url: '/page/Contacto',
        iosIcon: callOutline,
        mdIcon: callSharp
    }
];

const MenuPrincipal: React.FC = () => {

    return (
        <IonMenu menuId='menu-principal' contentId="main" type="overlay" max-width="200">
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonTitle>¡Bienvenido!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonList className='w-full'>
                    <IonItem className='w-full'>
                        <IonButton id="right-end" fill='clear' expand="full">Full</IonButton>
                        <IonPopover trigger="right-end" side="right" alignment="end">
                            <IonContent class="ion-padding">Hello World!</IonContent>
                        </IonPopover>
                    </IonItem>
                </IonList>

                <IonGrid>
                    <IonRow>
                        <IonImg class="h-20 w-20"
                            src="public/logo.png"
                            alt="The Wisconsin State Capitol building in Madison, WI at night"
                        ></IonImg>
                    </IonRow>

                    <IonRow className='ion-justify-content-center ion-padding'>
                        <IonAvatar>
                            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonMenu>
    );
};

export default MenuPrincipal;
