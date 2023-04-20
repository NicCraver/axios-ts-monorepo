/*
 * @Author: Nic_
 * @Date: 2023-04-19 13:25:33
 * @LastEditTime: 2023-04-20 10:02:42
 * @LastEditors: Nic_
 * @Description:
 * @FilePath: /axios-ts-monorepo/packages/core/src/sum.ts
 */
import type { AxiosInstance } from 'axios'

interface a {
  a: AxiosInstance
}
// console.log('AxiosInstance', AxiosInstance)
export default function sum(axios: a) {
  console.log('axios', axios)
  // return numbers.reduce((total, number) => total + number, 0)
}
