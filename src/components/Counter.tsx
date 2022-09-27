import React, { useReducer } from 'react'

// reducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態とactionにもとづいて次の状態を返す
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

type CoutnerProps = {
  initialValue: number
}

const Counter = (props: CoutnerProps) => {
  const { initialValue } = props
  const [ count, dispatch ] = useReducer(reducer, initialValue)
  
  return (
    <div>
      <p>Count: {count} </p>
      {/* dispatch関数にactionを渡して状態を更新する */}
      <button onClick={() => dispatch('DECREMENT')}> - </button>
      <button onClick={() => dispatch('INCREMENT')}> + </button>
      <button onClick={() => dispatch('DOUBLE')}> *2 </button>
      <button onClick={() => dispatch('RESET')}> RESET </button>
    </div>
  )
}

export default Counter