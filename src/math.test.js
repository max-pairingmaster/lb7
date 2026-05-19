import { describe, it, expect } from 'vitest'

describe('Math functions', () => {
  it('should add numbers correctly', () => {
    // ПОМИЛКА: 1 + 2 має дорівнювати 3, але ми очікуємо 4, щоб завалити тест в CI
    expect(1 + 2).toBe(4)
  })

  it('should multiply numbers correctly', () => {
    expect(2 * 3).toBe(6)
  })
})
