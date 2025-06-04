import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com';
const categories = ["all", "men's clothing", "jewelery", "women's clothing", "electronics"];

const FakeStore = () => {
    const [item, setItem] = useState([]);
    const [selectCategory, setSelectCategory] = useState("all");

    useEffect(() => {
        const axiosItems = async() => {
            try{
                const url = selectCategory === "all" ? `${BASE_URL}/products` : `${BASE_URL}/products/category/${selectCategory}`
                const response = await axios.get(url);
                setItem(response.data)
                console.log(response.data);
            }catch(error) {
                console.error(error);
            }
        }
        axiosItems();
    }, [selectCategory])
  return (
    <div className='fakeStore'>
      <ul>
        {categories.map((ca) => (
            <li onClick={() => setSelectCategory(ca)}>{ca}</li>
        ))}
      </ul>
      <div>
        <h2>{selectCategory==="all" ? "모든 제품" : selectCategory}</h2>
        <ul className='goods-list'>
            {item.map((item) => (
                <li>
                    <h3>{item.title}</h3>
                    <img src={item.image} alt={item.title}></img>
                    <p>{item.price}</p>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default FakeStore
