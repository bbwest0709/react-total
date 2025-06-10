import React from 'react'
import Title from '../components/Title'
import CategoryPage from '../components/CategoryPage'

const Electric = () => {
  return (
    <div className='container'>
      <div className="content-inner">
        <Title title="전자제품" />
        <CategoryPage categoryName="electronics" />
      </div>
    </div>
  )
}

export default Electric
