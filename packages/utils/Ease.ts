export class Ease {
  private constructor() {
    //
  }

  static linear(progress: number, amplitude: number) {
    return amplitude
  }

  static inSine(progress: number, amplitude: number) {
    // imagine cos function graph then rotate by y=0.5 axis
    return amplitude * (1 - Math.cos((progress * Math.PI) / 2))
  }

  static outSine(progress: number, amplitude: number) {
    return amplitude * Math.sin((progress * Math.PI) / 2)
  }

  static inOutSine(progress: number, amplitude: number) {
    return amplitude * (-(Math.cos(Math.PI * progress) - 1) / 2)
  }
}
