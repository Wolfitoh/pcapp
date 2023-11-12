import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonImg,
  IonGrid,
  IonRow,
  IonAvatar
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, homeSharp, paperPlaneOutline, paperPlaneSharp, personOutline, personSharp, callOutline, callSharp } from 'ionicons/icons';
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

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu menuId='menu-user' contentId="main" type="overlay" side="end" max-width="200">
      <IonContent>
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

          <IonRow className='ion-justify-content-center'>
            <IonLabel>Bienvenido Angel</IonLabel>
          </IonRow>

          <IonRow className='ion-justify-content-center'>
            <IonNote>hi@ionicframework.com</IonNote>
          </IonRow>

          <IonRow>
            <IonList id="inbox-list" className='w-full' inset>
              {appPages.map((appPage, index) => {
                return (
                  <IonMenuToggle key={index} autoHide={false}>
                    <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="full" detail={false}>
                      <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                );
              })}
            </IonList>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
