import React, { useEffect, useState } from 'react'
import { useCartStore } from '../store/useStrore'
import SectionBigSwiper from '../components/SectionBigSwiper';
import { Product } from '../types/ProductType';

const CategoryBigPage = ({ categoryName, imgUrl }: { categoryName: string, imgUrl: string }) => {
    const { items, fetchItems, getItemCategory } = useCartStore();

    useEffect(() => {
        if (items.length === 0) {
            fetchItems()
        }
    }, [fetchItems, items])

    return (
        <div className="goods-list-big">
            <div className="big-img">
                <img src={`./images/${imgUrl}-big.jpg`} alt={categoryName} />
            </div>

            <div className="big-swiper">
                <SectionBigSwiper category={items} />
            </div>
        </div>
    )
}

export default CategoryBigPage