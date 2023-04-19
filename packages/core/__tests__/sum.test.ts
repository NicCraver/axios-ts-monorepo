/*
 * @Author: Nic_
 * @Date: 2023-04-19 13:25:46
 * @LastEditTime: 2023-04-19 13:25:56
 * @LastEditors: Nic_
 * @Description:
 * @FilePath: /axios-ts-monorepo/packages/core/__tests__/sum.test.ts
 */
import { describe, expect, it } from 'vitest'
import sum from '../src/sum'

describe('#sum', () => {
  it('returns 0 with no numbers', () => {
    expect(sum()).toBe(0)
  })
})
