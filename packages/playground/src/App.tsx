/*
 * @Author: Nic_
 * @Date: 2023-04-19 10:39:07
 * @LastEditTime: 2023-04-19 10:53:42
 * @LastEditors: Nic_
 * @Description: 
 * @FilePath: /axios-ts-monorepo/packages/playground/src/App.tsx
 */
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { test } from "@axios/core/src/index";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    test();
  }, [])

  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App