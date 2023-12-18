import {
    IonIcon,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonInput
} from '@ionic/react';
import { cartOutline, location as direction, search } from 'ionicons/icons';
import './Menu.css';
import { useState } from 'react';
import { useHistory } from 'react-router';

const PrincipalToolbar: React.FC = () => {
    const history = useHistory(); // Inicializamos useHistory

    const handleInput = (event: any) => {
        history.push(`/search/${event.detail.value!}`);
    };

    return (
        <div>
            <IonToolbar className='hidden md:block'>
                <IonButtons slot="start">
                    <img className="h-14 w-64"
                        src="public/logo.png"
                        alt="Logo"
                    ></img>
                </IonButtons>

                <IonButtons slot="end">
                    <IonButton>
                        <IonIcon slot="start" icon={direction}></IonIcon>
                        <p className='normal-case'>Av. Puerto Pizarro, Tumbes, Tumbes</p>
                    </IonButton>
                </IonButtons>
            </IonToolbar>

            <IonToolbar>
                <IonButtons slot="start" className='gap-2'>
                    <IonMenuButton className='font-bold' menu='menu-principal' />
                    <IonButton className={'hidden lg:block normal-case ' + (location.pathname === '/' ? 'font-bold' : '')}
                        color={location.pathname === '/' ? 'secondary' : ''} routerLink="/" routerDirection="none" fill={location.pathname === '/' ? 'solid' : 'outline'} shape='round'>Inicio</IonButton>
                    <IonButton className='hidden lg:block normal-case' fill="outline" shape='round'>Promociones</IonButton>
                </IonButtons>

                <div className="mx-auto">
                    <div className="rounded-full shadow-lg max-w-sm lg:max-w-lg xl:max-w-3xl m-auto mb-0 md:mb-3" style={{ backgroundColor: 'var(--ion-color-light)' }}>
                        <div className="flex items-center justify-between justify-items-stretch">
                            <div className="flex-auto px-7">
                                <IonInput className='w-full' debounce={400} onIonInput={(ev) => handleInput(ev)}
                                    placeholder="Busca tu producto"></IonInput>
                            </div>

                            <IonButton color={'primary'} className='mr-3' shape='round'>
                                <IonIcon slot="icon-only" icon={search}></IonIcon>
                            </IonButton>
                        </div>
                    </div>
                </div>

                <IonButtons slot="end">
                    <IonButton routerLink={location.pathname !== '/login' ? 'login' : 'register'} routerDirection="none" fill='solid' className='font-bold hidden lg:block normal-case' color="primary">{location.pathname !== '/login' ? 'Identifícate' : 'Registrate'}</IonButton>
                    {/* <IonMenuButton menu='menu-user'>
                            <IonIcon icon={personOutline} />
                        </IonMenuButton> */}
                    <IonButton>
                        <IonIcon slot="icon-only" icon={cartOutline} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </div>
    );
};

export default PrincipalToolbar;
