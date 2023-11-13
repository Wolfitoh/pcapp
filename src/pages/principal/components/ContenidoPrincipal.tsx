import { IonButton, IonContent, IonIcon, IonLabel, IonModal } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import SliderHorizontal from './shared/SliderHorizontal'
import GridProductos from './shared/GridProductos'
import { Producto } from '../../../modules/productos/domain/producto'
import { add, car, heart } from 'ionicons/icons'
import CarruselBanner from './CarruselBanner'

interface Props {
    productosPromos: Producto[];
    productosNuevos: Producto[];
    loadingProductosPromos: boolean;
    loadingProductosNuevos: boolean;
}

const ContenidoPrincipal: React.FC<Props> = ({ productosPromos, productosNuevos, loadingProductosPromos, loadingProductosNuevos }) => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [producto, setProducto] = useState<Producto | null>(null);

    const closeModal = () => {
        setProducto(null);
    }

    useEffect(() => {
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
    }, []);

    return (
        <div className='mx-auto w-full lg:w-11/12 xl:w-10/12'>
            <CarruselBanner />
            <div className='mt-10'>
                <div className='float-left mb-4'>
                    <h2 className='text-xl'>Nuevos Ingresos</h2>
                    <span className='text-gray-500'>¡Estos son nuestros nuevos ingresos!</span>
                </div>
                <IonButton className='float-right' fill="clear">ver más</IonButton>
            </div>
            <SliderHorizontal productos={productosPromos} loading={loadingProductosPromos} setProducto={setProducto} />

            <div className='mt-4'>
                <div className='float-left mb-4'>
                    <h2 className='text-xl'>Lo más vendido</h2>
                    <span className='text-gray-500'>Lo que nuestros usuarios prefieren</span>
                </div>
                <IonButton className='float-right' fill="clear">ver más</IonButton>
            </div>

            <SliderHorizontal productos={productosNuevos} loading={loadingProductosNuevos} setProducto={setProducto} />

            <div className='mb-2 mt-4'>
                <h2 className='text-xl'>Promociones</h2>
                <span className='text-gray-500'>¡Nuestras promociones y ofertas!</span>
            </div>
            <GridProductos productos={productos} loading={loading} setProducto={setProducto} />

            <IonModal isOpen={producto != null} onDidDismiss={closeModal} initialBreakpoint={0.5} breakpoints={[0, 0.5, 0.75, 0.90]}>
                <IonContent className="ion-padding">
                    <div className="flex xs:flex-row flex-col font-sans">
                        <div className="w-full h-60 xs:w-56 relative">
                            <img src={producto?.imagen} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                        </div>
                        <div className="flex-auto py-6 px-4">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-xl font-medium">
                                    {producto?.nombre}
                                </h1>
                                <div className="w-full flex-none mt-2 order-1 text-3xl font-bold">
                                    <IonLabel color={'primary'}>S/. {producto?.precio}</IonLabel>
                                </div>

                                <div className="text-sm font-medium">
                                    <IonLabel color={producto?.stock! < 5 ? 'danger' : 'success'}>{producto?.stock} en stock</IonLabel>
                                </div>
                            </div>
                            <div className="mt-4 mb-6 pb-6 border-b border-slate-200">
                                <p className="text-sm text-slate-500">
                                    {producto?.descripcion}
                                </p>
                            </div>
                            <div className="flex space-x-4 mb-5 text-sm font-medium">
                                <div className="flex-auto flex space-x-4">
                                    <IonButton>
                                        <IonIcon slot="start" icon={add}></IonIcon>
                                        Agregar al carrito
                                    </IonButton>
                                </div>
                                <IonButton fill='clear'>
                                    <IonIcon slot="icon-only" icon={heart}></IonIcon>
                                </IonButton>
                            </div>
                        </div>
                    </div>
                    <p className='mt-6 text-lg'>Detalles</p>
                    <div className='w-full flex flex-col'>
                        <div>
                            Marca: Logitech
                        </div>
                    </div>
                </IonContent>
            </IonModal>
        </div>
    )
}

export default ContenidoPrincipal