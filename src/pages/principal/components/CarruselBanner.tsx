import { IonGrid, IonRow, IonCol, IonSpinner, IonLoading } from '@ionic/react';

interface CarruselBannerProps {
    loading: boolean;
    setProducto?: any;
}

const CarruselBanner: React.FC<CarruselBannerProps> = () => {
    return (
        <IonGrid className='h-full ion-no-padding'>
            <IonRow>
                <IonCol size='9'>
                    <img src='https://as1.ftcdn.net/v2/jpg/03/97/12/96/1000_F_397129634_98faXN3A8O7POrDrS6sBMdvFlbn2chAb.jpg'
                        className='w-full h-96 object-cover object-center rounded-xl' />
                </IonCol>
                <IonCol>
                    <img src='https://images.pexels.com/photos/9072207/pexels-photo-9072207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        className='w-full h-96 object-cover object-center ml-5 rounded-xl' />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default CarruselBanner;
