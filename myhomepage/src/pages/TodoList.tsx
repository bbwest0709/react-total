import React from 'react'
import SectionTitle from '../components/SectionTitle'

const TodoList = () => {
  return (
    <div className='main todolist'>
      <div className='content-inner'>
        <SectionTitle title="TodoList" subTitle="오늘의 스케줄을 관리하세요." />
        <div>TodoList 본문</div>
      </div>
    </div>
  )
}

export default TodoList