import './SliderHorizontal.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Producto } from '../../../domain/interfaces/producto';
import CardProduct from '../../shared/components/CardProduct';

interface Props {
  productos: Producto[];
}

const SliderHorizontal: React.FC<Props> = ({ productos }) => {
  return (
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
            <CardProduct producto={producto} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default SliderHorizontal;
