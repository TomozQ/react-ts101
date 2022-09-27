import React, { useState } from 'react'

type CounterProps = {
  initialValue: number
}

const Count = (props: CounterProps) => {
  const { initialValue } = props
  // カウントを保持する1つの状態をuseState()で宣言し、引数には初期値を指定する。
  const [count, setCount] = useState(initialValue)  // countが現在の状態、setCountが状態を更新する関数

  return (
    <div>
      <p>Count: {count} </p>
      {/* setCountを呼ぶことで状態を更新する */}
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button> {/* setCountに関数を渡す場合は現在の状態を引数に取る */}
    </div>
  )
}

export default Count