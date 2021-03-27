// eslint-disable-next-line @typescript-eslint/no-var-requires
let sum = require('./sum')

test('sum', () => {
  expect(sum(1, 2)).toBe(3)
})
