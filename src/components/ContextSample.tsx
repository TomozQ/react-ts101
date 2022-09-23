import React from 'react'

// Titleを渡すためのContextを作成
const TitleContext = React.createContext('')

// Titleコンポーネントの中でContextの値を参照する。
const Title = () => {
  // Consumerを使って、Contextの値を参照する。
  return (
    <TitleContext.Consumer>
      {/* Consumer直下に関数をおいて、Contextの値を参照する */}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

// Pageコンポーネントの中でContextに値を渡す
const Page = () => {
  const title = 'React Book'

  // Providerを使いContextの値をセットする。
  // Provider以下のコンポーネントから値を参照できる。
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page