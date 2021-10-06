export class Wave {
  private constructor() {
    //
  }

  static sine(x: number) {
    return Math.sin(x)
  }

  static sign(x: number) {
    return Math.sign(x)
  }

  /**
   *
   * @param x
   * @see https://en.wikipedia.org/wiki/Square_wave
   */
  static square(x: number) {
    return this.sign(this.sine(x))
  }

  /**
   *
   * @param x
   * @see https://en.wikipedia.org/wiki/Sawtooth_wave
   */
  static sawtooth(x: number) {
    return (x - Math.floor(x + 0.5)) * 2
  }

  /**
   * the triangle wave is the absolute value of the sawtooth wave
   *
   * @param x
   * @see https://en.wikipedia.org/wiki/Triangle_wave
   */
  static triangle(x: number) {
    return Math.abs(this.sawtooth(x))
  }
}
