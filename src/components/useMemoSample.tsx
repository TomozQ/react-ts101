import React, { useMemo, useState } from "react";

export const UseMemoSample = () => {
  // 現在のテキストボックスの中身を保持する
  const [text, setText] = useState('')
  // 文字列のリストを保持する
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      // 現在の入力値をitemsに追加する。この時新しい配列を作成して保存する
      return [...prevItems, text]
    })

    // テキストボックスの中身を空にする
    setText('')
  }

  // 再描画のたびにitems.reduceを実行して結果を得る
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

  // useMemoを使いitemsが更新されるタイミングでitems.reduceを実行して結果を得る
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
    // 第二引数の配列の中にitemsがあるので、itemsが新しくなった時だけ関数を実行してメモを更新する。
  },[items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={ onChangeInput } />
        <button onClick={ onClickButton }> Add </button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={ index }>{ item }</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: { numberOfCharacters1 } </p>
        <p>Total Number of Characters 2: { numberOfCharacters2 } </p>
      </div>
    </div>
  )
}