import { Ease } from './Ease'
import { Wave } from './Wave'

export interface Options {
  running: boolean
  initialize?: () => void
  resizeEvent?: () => void
  el: HTMLCanvasElement | undefined
  speed: number
  rotate: number
  ease: string
  wavesWidth: string
  width: string | (() => string | number) | null
  height: string | (() => string | number) | null
  waves: Array<WaveOption> | null
}

export interface WaveOption {
  waveFn: any
  timeModifier: number
  amplitude: number
  wavelength: number
  segmentLength: number
  lineWidth: number
  strokeStyle: string
  type: string
}

export class SineWave {
  // default options
  private options: Options = {
    running: true,
    el: undefined,
    speed: 10,
    rotate: 0,
    ease: 'Linear',
    wavesWidth: '95%',
    width: null,
    height: null,
    waves: null,
  }

  private defaultWaveOption: WaveOption = {
    waveFn: undefined,
    timeModifier: 1,
    amplitude: 50,
    wavelength: 50,
    segmentLength: 10,
    lineWidth: 1,
    strokeStyle: 'rgba(255, 255, 255, 0.2)',
    type: 'Sine',
  }

  private readonly dpr: number
  private readonly el: HTMLCanvasElement | undefined
  private ctx: any
  private width: number
  private height: number
  private waveWidth: number
  private waveLeft: number
  private yAxis: number
  private easeFunction: any
  private rotation: number
  private running = true
  private waves: Array<WaveOption>
  private time = 0

  constructor(options: Options) {
    // merge options
    // or syntax this.options= {...this.options,...options}
    Object.assign(this.options, options)

    // check options
    SineWave.validate(this.options)

    // setup the context for reference
    this.el = this.options.el
    this.waves = this.options.waves
    this.ctx = this.el?.getContext('2d')

    // DPI
    this.dpr = window.devicePixelRatio || 1

    // setup canvas width/height
    this.updateDimensions()
    window.addEventListener('resize', () => {
      this.updateDimensions()
    })

    // call user defined resize or init function
    this.setupUserFunctions()

    // setup Easing
    this.easeFunction = SineWave.getFunction(Ease, this.options.ease, 'linear')

    // set the canvas rotation
    this.rotation = SineWave.degreeToRadian(this.options.rotate)

    // merge running state parameter
    this.running = !!this.options.running

    // assign wave functions
    this.setupWaveFns()

    //render first
    this.update()

    // start animation loop
    this.loop()
  }

  private static validate(options: Options) {
    if (!options.el) {
      throw 'No canvas selector.'
    }
    if (!options.waves || !options.waves.length) {
      throw 'No waves specified.'
    }
  }

  /**
   * Internal resize event to make the canvas fill the screen
   * @private
   */
  private updateDimensions() {
    const width = this.getDimension('width')
    const height = this.getDimension('height')

    // console.log('update', width, height)

    // apply dpr for retina display
    this.width = this.el.width = width * this.dpr
    this.height = this.el.height = height * this.dpr

    // scale down
    this.el.style.width = width + 'px'
    this.el.style.height = height + 'px'

    // padding
    this.waveWidth = SineWave.getWaveWidth(this.options.wavesWidth, this.width)

    // center it
    this.waveLeft = (this.width - this.waveWidth) / 2

    // vertical center
    this.yAxis = this.height / 2
  }

  /**
   *
   * @param value 0, '10px', '90%'
   * @param width
   * @private
   */
  private static getWaveWidth(value, width) {
    if (SineWave.isType(value, 'number')) {
      return value
    }

    value = value.toString()
    if (value.indexOf('%') > -1) {
      value = parseFloat(value)
      if (value > 1) {
        value /= 100
      }
      return width * value
    } else if (value.indexOf('px') > -1) {
      return parseInt(value, 10)
    }
  }

  private getDimension(dimension: string) {
    if (SineWave.isType(this.options[dimension], 'string')) {
      return this.options[dimension]
    } else if (SineWave.isType(this.options[dimension], 'function')) {
      return this.options[dimension].call(this, this.el)
    } else if (dimension === 'width') {
      return this.el?.clientWidth
    } else if (dimension === 'height') {
      return this.el?.clientHeight
    }
  }

  private static isType(value: any, type: string) {
    return typeof value === type
  }

  private setupUserFunctions() {
    // resize
    if (SineWave.isType(this.options.resizeEvent, 'function')) {
      window.addEventListener('resize', () => {
        this.options.resizeEvent()
      })
    }
    // init
    if (SineWave.isType(this.options.initialize, 'function')) {
      this.options.initialize.call(this)
    }
  }

  private static getFunction(
    obj: typeof Ease | Wave,
    name: string,
    defaultName: string
  ) {
    if (SineWave.isType(name, 'function')) {
      return name
    } else if (
      SineWave.isType(name, 'string') &&
      SineWave.isType(obj[name.toLowerCase()], 'function')
    ) {
      return obj[name.toLowerCase()]
    } else {
      return obj[defaultName]
    }
  }

  private static degreeToRadian(degree: number) {
    if (!SineWave.isType(degree, 'number')) {
      throw new TypeError('Parameter degree is not a number.')
    }
    return degree * (Math.PI / 180)
  }

  private setupWaveFns() {
    const wavesLength = this.waves.length
    for (let i = 0; i < wavesLength; i++) {
      this.waves[i].waveFn = SineWave.getFunction(
        Wave,
        this.waves[i].type,
        'sine'
      )
    }
  }

  private loop() {
    if (this.running) {
      this.update()
    }
    window.requestAnimationFrame(this.loop.bind(this))
  }

  private update() {
    this.time = this.time - 0.007

    // clear canvas
    this.clear()
    this.ctx.save()

    if (this.rotation > 0) {
      // temporarily set center point coordinate
      this.ctx.translate(this.width / 2, this.height / 2)
      this.ctx.rotate(this.rotation)
      // reset center point coordinate
      this.ctx.translate(-this.width / 2, -this.height / 2)
    }

    const wavesLength = this.waves.length
    // draw each line
    for (let i = 0; i < wavesLength; i++) {
      const timeModifier = this.waves[i].timeModifier || 1
      this.drawWave(this.time * timeModifier, this.waves[i])
    }

    this.ctx.restore()
  }

  private clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  private drawWave(time: number, waveOption: WaveOption) {
    // merge wave option
    waveOption = Object.assign(this.defaultWaveOption, waveOption)

    // Styles
    this.ctx.lineWidth = waveOption.lineWidth * this.dpr
    this.ctx.strokeStyle = waveOption.strokeStyle
    this.ctx.lineCap = 'butt'
    this.ctx.lineJoin = 'round'
    this.ctx.beginPath()

    // Starting Line
    this.ctx.moveTo(0, this.yAxis)
    this.ctx.lineTo(this.waveLeft, this.yAxis)

    for (let i = 0; i < this.waveWidth; i += waveOption.segmentLength) {
      // Calculate where the next point is
      const point = this.getPoint(time, i, waveOption)
      this.ctx.lineTo(point.x, point.y)
    }

    // Ending Line
    this.ctx.lineTo(this.width, this.yAxis)
    this.ctx.stroke()
  }

  private getPoint(time: number, position: number, waveOption: WaveOption) {
    // key code logic
    let x =
      time * this.options.speed +
      (-this.yAxis + position) / waveOption.wavelength
    let y = waveOption.waveFn.call(this, x, Wave)

    // Left and Right Sine Easing
    const amplitude = this.easeFunction.call(
      this,
      position / this.waveWidth, // as progress from 0 to 1(exclusive)
      waveOption.amplitude
    )

    x = position + this.waveLeft // this.waveLeft as xOffset
    y = amplitude * y + this.yAxis // this.yAxis  as yOffset

    return {
      x: x,
      y: y,
    }
  }
}
