import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';



const Category = () => {
    return (
        <div className='my-20'>
            <SectionTitle smallTitle='---From 11:00am to 10:00pm---' title='ORDER ONLINE'></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide1} alt="" />
                    <p className='absolute bottom-5 right-32 text-white text-2xl '>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide2} alt="" />
                    <p className='absolute bottom-5 right-32 text-white text-2xl '>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide3} alt="" />
                    <p className='absolute bottom-5 right-32 text-white text-2xl '>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide4} alt="" />
                    <p className='absolute bottom-5 right-28 text-white text-2xl '>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide1} alt="" />
                    <p className='absolute bottom-5 right-32 text-white text-2xl '>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide2} alt="" />
                    <p className='absolute bottom-5 right-32 text-white text-2xl '>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide3} alt="" />
                    <p className='absolute bottom-5 right-32 text-white text-2xl '>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={slide4} alt="" />
                    <p className='absolute bottom-5 right-28 text-white text-2xl '>Desserts</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;