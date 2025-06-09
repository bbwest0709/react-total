import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainSwiper = () => {
  return (
    <div className='main-swiper'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide><img src="./images/main_slider_01.jpg" alt="Slider 1" /></SwiperSlide>
        <SwiperSlide><img src="./images/main_slider_02.jpg" alt="Slider 2" /></SwiperSlide>
        <SwiperSlide><img src="./images/main_slider_03.jpg" alt="Slider 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSwiper;
