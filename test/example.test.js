beforeEach(() => {
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})

beforeAll(() => {
  console.log('beforeAll')
})

afterAll(() => {
  console.log('afterAll')
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
]

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

//async code
test('the data is peanut butter', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter')
      done()
    } catch (error) {
      done(error)
    }
  }

  function fetchData(callback) {
    return new Promise((resolve) => {
      callback('peanut butter')
      resolve()
    })
  }

  fetchData(callback)
})

test('this should pass', (done) => {
  setTimeout(() => {
    expect(123).toBe(123)
    done()
  })
})

test('the fetch fails with an error', async () => {
  async function throws() {
    throw new Error('error')
  }

  await expect(throws()).rejects.toThrow('error')
})

test('the data is peanut butter', async () => {
  async function fetchData() {
    return 1
  }

  const data = await fetchData()
  expect(data).toBe(1)
})

describe('1+1', () => {
  test('1+1', () => {
    expect(1 + 1).toBe(2)
  })
})

// mock function

// https://jestjs.io/zh-Hans/docs/testing-frameworks

// snapshots test
