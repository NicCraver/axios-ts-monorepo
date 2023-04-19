/*
 * @Author: Nic_
 * @Date: 2023-04-19 13:25:33
 * @LastEditTime: 2023-04-19 13:25:38
 * @LastEditors: Nic_
 * @Description:
 * @FilePath: /axios-ts-monorepo/packages/core/src/sum.ts
 */
export default function sum(...numbers: number[]) {
  return numbers.reduce((total, number) => total + number, 0)
}
