import React from 'react'
import Title from '../components/Title'
import CategoryPage from '../components/CategoryPage'

const Jewelery = () => {
  return (
    <div className='container'>
      <div><img src='./images/jewelery-sub-banner.jpg' alt=''></img></div>
      <div className="content-inner">
        <Title title="주얼리" />
        <CategoryPage categoryName="jewelery" />
      </div>
    </div>
  )
}

export default Jewelery
