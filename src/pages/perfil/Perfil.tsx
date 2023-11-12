import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
} from '@ionic/react';
import { pencilOutline, trashOutline } from 'ionicons/icons';
import './Perfil.css';
import { camera, save } from 'ionicons/icons';



const Perfil: React.FC = () => {

    // Función para manejar la acción de edición
    const handleEdit = () => {
        // Aquí puedes implementar la lógica para la edición
        console.log('Editar elemento');
    };

    // Función para manejar la acción de eliminación
    const handleDelete = () => {
        // Aquí puedes implementar la lógica para la eliminación
        console.log('Eliminar elemento');
    };

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
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Perfil</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className="page-style">
                    <IonRow>
                    <IonCol size='5' sizeSm='6' className="center-vertically">
                    <IonCard className="hexagonal-card">
                        <IonCardHeader className="hexagonal-content">
                        </IonCardHeader>
                        <IonCardContent className="hexagonal-content">
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                        </IonCardContent>
                    </IonCard>
                    </IonCol>
                        <IonCol size='5' sizeSm='6' sizeLg=''>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Nombre</IonLabel>
                                <IonInput
                                    value={name}

                                />
                            </IonItem>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Apellido Paterno</IonLabel>
                                <IonInput
                                    value={lastName}

                                />
                            </IonItem>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Apellido Materno</IonLabel>
                                <IonInput
                                    value={phoneNumber}

                                />
                            </IonItem>
                            <IonItem className="profile-input">
                                <IonLabel position="stacked">Celular</IonLabel>
                                <IonInput
                                    value={address}

                                />
                            </IonItem>

                        </IonCol>
                    </IonRow>
                </IonGrid>

                <div className="divider"></div>

                <IonList className="custom-list">
                    <IonItem className="custom-list-item">
                        <IonLabel>Dirección 1 : Lima</IonLabel>
                        <IonButton fill="clear" slot="end" onClick={handleEdit}>
                            <IonIcon icon={pencilOutline} className="custom-icon edit"/>
                        </IonButton>
                        <IonButton fill="clear" slot="end" onClick={handleDelete}>
                            <IonIcon icon={trashOutline} className="custom-icon delete" />
                        </IonButton>
                    </IonItem>
                    <IonItem className="custom-list-item">
                        <IonLabel>Dirección 2 : Piura</IonLabel>
                        <IonButton fill="clear" slot="end" onClick={handleEdit}>
                            <IonIcon icon={pencilOutline} className="custom-icon edit" />
                        </IonButton>
                        <IonButton fill="clear" slot="end" onClick={handleDelete}>
                            <IonIcon icon={trashOutline} className="custom-icon delete" />
                        </IonButton>
                    </IonItem>
                    <IonItem className="custom-list-item">
                        <IonLabel>Dirección 3 : Arequipa</IonLabel>
                        <IonButton fill="clear" slot="end" onClick={handleEdit}>
                            <IonIcon icon={pencilOutline} className="custom-icon edit" />
                        </IonButton>
                        <IonButton fill="clear" slot="end" onClick={handleDelete}>
                            <IonIcon icon={trashOutline} className="custom-icon delete" />
                        </IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};
export default Perfil;
