import './SliderHorizontal.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Producto } from '../../../../modules/productos/domain/producto';
import CardProduct from '../../../shared/components/CardProduct';
import { IonSpinner } from '@ionic/react';

interface Props {
  productos: Producto[];
  loading: boolean;
  setProducto?: any;
}

const SliderHorizontal: React.FC<Props> = ({ productos, loading, setProducto }) => {
  return (
    <>
      {loading && <div className="flex justify-center items-center w-full h-full" >
        <IonSpinner name="crescent" />
        <p className='ml-2'>Porfavor espera...</p>
      </div >}
      <Swiper spaceBetween={10} slidesPerView={1.5} freeMode={true} parallax={true} breakpoints={{
        1400: {
          slidesPerView: 5.3,
        },
        850: {
          slidesPerView: 4.3,
        },
        650: {
          slidesPerView: 3.3,
        },
        500: {
          slidesPerView: 2.15,
        },
      }}>
        {
          productos.map((producto, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <CardProduct producto={producto} setProducto={setProducto} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
};

export default SliderHorizontal;
