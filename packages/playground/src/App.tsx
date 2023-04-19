/*
 * @Author: Nic_
 * @Date: 2023-04-19 10:39:07
 * @LastEditTime: 2023-04-19 13:38:51
 * @LastEditors: Nic_
 * @Description:
 * @FilePath: /axios-ts-monorepo/packages/playground/src/App.tsx
 */
import { useEffect, useState } from 'react'
import { test } from '@axios/core/src/index'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function go() {
    const url = 'http://rap2api.taobao.org/app/mock/262203/example/getApi'

    fetch(url)
      .then((response) => {
        if (response.ok) {
          // 成功获取数据，可以在这里处理返回的数据
          return response.json()
        }
        else {
          // 获取数据失败，可以在这里处理错误信息
          throw new Error(`请求失败：${response.status} ${response.statusText}`)
        }
      })
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    test()
    go()
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
        <button onClick={() => setCount(count => count + 1)}>
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
