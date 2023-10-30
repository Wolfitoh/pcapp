import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
} from '@ionic/react';

import './Perfil.css';
import { camera, save } from 'ionicons/icons';

const Perfil: React.FC = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Tu Nombre');
    const [lastName, setLastName] = useState('Tus Apellidos');
    const [phoneNumber, setPhoneNumber] = useState('Tu Celular');
    const [address, setAddress] = useState('Tu Dirección');

    const handleSaveProfile = () => {
        // Aquí puedes implementar la lógica para guardar los cambios en el perfil.
        setIsEditing(false);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Perfil</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size='5' sizeSm='6'>
                            a
                        </IonCol>
                        <IonCol size='7' sizeSm='6' sizeLg=''>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Nombre</IonLabel>
                                <IonInput
                                    value={name}

                                />
                            </IonItem>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Apellidos</IonLabel>
                                <IonInput
                                    value={lastName}

                                />
                            </IonItem>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Celular</IonLabel>
                                <IonInput
                                    value={phoneNumber}

                                />
                            </IonItem>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Dirección</IonLabel>
                                <IonInput
                                    value={address}

                                />
                            </IonItem>

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default Perfil;
