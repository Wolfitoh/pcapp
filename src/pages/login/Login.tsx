import React, { useEffect, useState } from 'react'
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import GridProductos from '../principal/components/shared/GridProductos';
import { Producto } from '../../modules/productos/domain/producto';
import { useParams } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { cartOutline, logoFacebook, logoGoogle, personOutline } from 'ionicons/icons';
import './Login.scss'

const Login: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleInput = (event: any) => {
        setSearchQuery(event.detail.value!);
    };

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
                <div className='h-full flex justify-center items-center'>
                    <div className="container-login">
                        <div className="heading text-gray-700 dark:text-white">Inicio de sesión</div>
                        <IonImg class="h-40 w-40 mx-auto"
                            src="public/logo.png"
                            alt="The Wisconsin State Capitol building in Madison, WI at night"
                        ></IonImg>
                        <form className="form" action="">
                            <input
                                placeholder="E-mail"
                                id="email"
                                name="email"
                                type="email"
                                className="input dark:text-black"
                                required
                            />
                            <input
                                placeholder="Password"
                                id="password"
                                name="password"
                                type="password"
                                className="input dark:text-black"
                                required
                            />
                            <span className="forgot-password"><a href="#">¿Olvidaste tu contraseña?</a></span>
                            <input value="Sign In" type="submit" className="login-button" />
                        </form>
                        <div className="social-account-container">
                            <span className="title">O incia con</span>
                            <div className="social-accounts">
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={logoFacebook}></IonIcon>
                                </IonButton>
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={logoGoogle}></IonIcon>
                                </IonButton>
                            </div>
                        </div>
                    </div>

                </div>

            </IonContent>
        </IonPage>
    )
}

export default Login