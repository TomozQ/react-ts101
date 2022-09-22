import React from 'react'

const Hello = () => {
  const onClick = () => {
    alert('hello')
  }
  const text = 'Hello React'
  const name = 'React'
  return (
    <span onClick={onClick}>
      {/* {text} */}
      Hello React! {/* タグ内に直接文字を書ける */}
      <br/>
      こんにちは、{name} さん {/* JavaScriptの埋め込み */}
    </span>
  )
}

export default Hello