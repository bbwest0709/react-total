import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Product } from '../types/ProductType';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import "swiper/css";

const SectionSwiper = ({category}:{category:Product[]}) => {
  return (
    <div className='goods-list'>
      <Swiper modules = {[Autoplay, Navigation]}
      slidesPerView={4}
      spaceBetween={24}>
        {category.map((item) => (
          <SwiperSlide>
            <Link to={`/product/${item.id}`}>
              <ProductCard sendItem={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SectionSwiper