import { IonGrid, IonRow, IonCol, IonSpinner, IonLoading } from '@ionic/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import './CarruselBanner.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

interface CarruselBannerProps {
    loading: boolean;
    setProducto?: any;
}

const CarruselBanner: React.FC<CarruselBannerProps> = () => {
    return (
        <div className='flex flex-row xl:h-[28rem] lg:h-[26rem] md:h-96 sm:h-72'>
            <div className='w-full lg:w-8/12 xl:w-9/12 h-full'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Pagination]}
                    slidesPerView={1}
                    autoplay
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide className='h-full'>
                        <img src='public/assets/banners/banner.png'
                            className='w-full h-full object-cover rounded-xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='public/assets/banners/banner2.png'
                            className='w-full h-full object-cover rounded-xl' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='public/assets/banners/banner3.png'
                            className='w-full h-full object-cover rounded-xl' />
                    </SwiperSlide>
                    <SwiperSlide>     <img src='public/assets/banners/banner4.png'
                        className='w-full h-full object-cover rounded-xl' />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='lg:w-4/12 xl:w-3/12 h-full hidden lg:block'>
                <img src='https://images.pexels.com/photos/9072207/pexels-photo-9072207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    className='w-full h-full object-cover object-center ml-5 rounded-xl' />
            </div>
        </div>
    );
};

export default CarruselBanner;
