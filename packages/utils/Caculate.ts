export class Caculate {
  static range(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  static distance(x1: number, y1: number, x2: number, y2: number) {
    const dx = x2 - x1
    const dy = y2 - y1
    return Math.sqrt(dx * dx + dy * dy)
  }
}
