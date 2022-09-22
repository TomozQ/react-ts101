import React from 'react'

// 名前を入力するためのテキストボックス
const Name = () => {
  // input要素のonChangeイベントに対するコールバック関数を定義
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    // スタイルオブジェクトのキーはキャメルケース
    <div style={{padding: '16px', backgroundColor: 'grey'}}>
      {/* forの代わりにhtmlFor */}
      <label htmlFor="name">名前</label>
      {/* classやonchangeの代わりに、classNameやonChangeを使う */}
      <input id='name' className='input-name' type="text" onChange={onChange}/>
    </div>
  )
}

export default Name