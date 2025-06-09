import React from 'react'
import { useCounterStore } from '../context/store.js'

const CounterZus = () => {
    const {count, setCount} = useCounterStore();
    
  return (
    <div>
        <p>{count}</p>  
        <button onClick={setCount}>+</button>
    </div>
  )
}

export default CounterZus
