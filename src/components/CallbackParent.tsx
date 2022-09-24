import React, { useCallback, useState } from "react";

type ButtonProps = {
  onClick: () => void
}

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButtonが再描画されました')

  return <button onClick={ onClick }>Decrement</button>
}

// IncrementButtonはmemo化した関数コンポーネントでボタンを表示する。
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButtonが再描画されました。')

  return <button onClick={onClick} >Increment</button>
})

// DoubleButtonはmemo化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButtonが再描画されました')

  return <button onClick={ onClick }>Double</button>
})

export const CallbackParent = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }

  const increment = () => {
    setCount((c) => c + 1)
  }

  // useCallbackを使って関数をメモ化
  const double = useCallback(() => {
    setCount((c) => c * 2)
    // 第二引数は空配列なので、useCallbackは常に同じ関数を返す
  },[])

  return (
    <div>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す */}
      <DecrementButton onClick={ decrement } />
      {/* メモ化コンポーネントに関数を渡す */}
      <IncrementButton onClick={ increment } />   {/* IncrementButtonはmemoでラップされたコンポーネントだがpropsのonClickはCallbackParentが描画する度に新しくなる そのためCallbackParentが再描画されると同様に再描画される。 */}
      {/* メモ化コンポーネントにメモ化した関数を渡す */}
      <DoubleButton onClick={ double } />         {/* DoubleButtonに渡すonClickは、コールバック関数をuseCallbackでラップしている。 */}
                                                  {/* 今回は依存配列（第二引数）が空のため初期描画時に生成された関数を常に返す。 */}
    </div>
  )
}