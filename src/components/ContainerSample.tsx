import React from 'react'

// Containerは赤背景のボックスの中にタイトルと子要素を表示する
const Container = (props: {title: string; children: React.ReactElement}) => {
  const { title, children } = props

  return (
    <div style={{background: 'red'}}>
      <span>{title}</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title='hello'>
      <p>ここの部分の背景色が変わります。</p>
    </Container>
  )
}

export default Parent