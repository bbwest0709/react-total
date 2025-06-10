import React from 'react'
import Title from '../components/Title'
import CategoryPage from '../components/CategoryPage'

const Men = () => {
  return (
    <div className='container'>
      <div><img src='./images/man-sub-banner.jpg' alt=''></img></div>
      <div className='content-inner'>
        <Title title="남자" />
        <CategoryPage categoryName="men's clothing" />
      </div>
    </div>
  )
}

export default Men
