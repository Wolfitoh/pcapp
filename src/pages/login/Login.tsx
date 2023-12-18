import React, { useEffect, useState } from 'react'
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import { cartOutline, location as direction, logoFacebook, logoGoogle, personOutline } from 'ionicons/icons';
import './Login.scss'
import PrincipalToolbar from '../../components/PrincipalToolbar';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <PrincipalToolbar></PrincipalToolbar>
            </IonHeader>
            <IonContent>
                <div className='h-full flex justify-center items-center'>
                    <div className="container-login">
                        <div className="heading text-gray-700 dark:text-white">Inicio de sesión</div>
                        {/* <IonImg className="h-32 min-w-0 w-full mx-auto"
                            src="public/logo.png"
                            alt="The Wisconsin State Capitol building in Madison, WI at night"
                        ></IonImg> */}
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
                            <input value="Ingresar" type="submit" className="login-button" />
                        </form>
                        <div className="social-account-container">
                            <span className="title">O incia con</span>
                            <div className="social-accounts">
                                <IonButton className='button-facebook'>
                                    <IonIcon slot="icon-only" icon={logoFacebook}></IonIcon>
                                </IonButton>
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={logoGoogle}></IonIcon>
                                </IonButton>
                            </div>
                        </div>

                        <div className='no-register font-sm text-center mt-5'>
                            <p>¿Aún no tienes una cuenta?</p>
                            <a>¡Registrate!</a>
                        </div>
                    </div>

                </div>

            </IonContent>
        </IonPage>
    )
}

export default Login