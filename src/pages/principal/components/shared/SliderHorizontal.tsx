import './SliderHorizontal.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css/navigation';
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
      {loading && productos.length <= 0 && <div className="flex justify-center items-center w-full h-full" >
        <IonSpinner name="crescent" />
        <p className='ml-2'>Porfavor espera...</p>
      </div >}
      <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={1.1} freeMode={true} parallax={true} navigation
        breakpoints={{
          1900: {
            slidesPerView: 5.3,
          },
          1500: {
            slidesPerView: 4.3,
          },
          1050: {
            slidesPerView: 3.3,
          },
          650: {
            slidesPerView: 2.15,
          },
          470: {
            slidesPerView: 1.5,
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
