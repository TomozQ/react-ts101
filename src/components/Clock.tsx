import React, { useEffect, useState  } from "react";

// タイマーが呼び出される周期を1秒
const UPDATE_CYCLE = 1000

// ローカルストレージで使用するKEY
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  // タイマーのセットをするための副作用
  useEffect(() => {
    // タイマーのセット
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // クリーンアップ関数
    // 次のuseEffect()が実行される直前またはアンマウント時に実行される。
    // 依存配列が空なのでコンポーネントがアンマウントされた時だけクリーンアップ関数が実行される。（タイマーが解除される）
    // アンマウント時にタイマーを解除しないと、親コンポーネントでClockコンポーネントの呼び出しがなくなり、表示されなくなった後でもタイマーが作動し続ける。（バグやメモリリークの原因となる）
    return () => {
      clearInterval(timer)
    }
    // 初期描画時のみ実行
  },[])

  /*
    localstorageの関数は同期的に実行され、読み込む/書き込むデータが大きいほど時間がかかる。
    描画関数中に直接localstorageを使用すると、描画の遅延が発生してしまう。
    そのためuseEffectの中でlocalstorageを使用する。
  */
  // Localstorageから値を読み込むための副作用
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if(savedLocale !== null){
      setLocale(getLocaleFromString(savedLocale))
    }
  },[])

  // localが変化した時に、localstorageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
    // 依存配列にlocaleを渡し、localeが変化するたびに実行するようにしている。
  },[locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select 
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}