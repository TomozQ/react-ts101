import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Count from './components/Count';
import Counter from './components/Counter';
import { Parent1 } from './components/Parent';
import { CallbackParent } from './components/CallbackParent';
import { UseMemoSample } from './components/useMemoSample';
import { Clock } from './components/Clock';
import ContextParent from './components/Context';
import ImageUploader from './components/UseRef';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>  {/* 不適切なコードを検知するためのヘルパー */}
  <>
    <Hello />
    <hr />
    <Name />
    <hr />
    <Message />
    <hr />
    <Parent />
    <hr />
    <Page />
    <hr />
    <h1>useState</h1>
    <Count initialValue={0} />
    <hr />
    <h1>useReducer</h1>
    <Counter initialValue={0}/>
    <hr />
    <h1>memoizing</h1>
    <Parent1 />
    <hr />
    <h1>useCallback</h1>
    <CallbackParent />
    <hr />
    <h1>useMemo</h1>
    <UseMemoSample />
    <hr />
    <h1>useEffect</h1>
    <Clock />
    <hr />
    <h1>useContext</h1>
    <ContextParent />
    <hr />
    <h1>useRef</h1>
    <ImageUploader />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
