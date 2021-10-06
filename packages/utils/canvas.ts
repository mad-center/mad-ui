/**
 *
 * @param min inclusive
 * @param max inclusive
 */
function range(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors: string[]) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1
  const dy = y2 - y1
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
}

module.exports = { range, randomColor, distance }
