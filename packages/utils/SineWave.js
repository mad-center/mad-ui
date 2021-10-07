'use strict'
exports.__esModule = true
exports.SineWave = void 0
var Ease_1 = require('./Ease')
var Wave_1 = require('./Wave')
var SineWave = /** @class */ (function () {
  function SineWave(options) {
    var _this = this
    var _a
    // default options
    this.options = {
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
    this.width = 0
    this.height = 0
    this.waveWidth = 0
    this.waveLeft = 0
    this.yAxis = 0
    this.running = true
    this.time = 0
    // merge options
    // or syntax this.options= {...this.options,...options}
    Object.assign(this.options, options)
    // check options
    SineWave.validate(this.options)
    // setup the context for reference
    this.el = this.options.el
    this.waves = this.options.waves
    this.ctx =
      (_a = this.el) === null || _a === void 0 ? void 0 : _a.getContext('2d')
    // DPI
    this.dpr = window.devicePixelRatio || 1
    // setup canvas width/height
    this.updateDimensions()
    window.addEventListener('resize', function () {
      _this.updateDimensions()
    })
    // call user defined resize or init function
    this.setupUserFunctions()
    // setup Easing
    this.easeFunction = SineWave.getFunction(
      Ease_1.Ease,
      this.options.ease,
      'linear'
    )
    // set the canvas rotation
    this.rotation = SineWave.degreeToRadian(this.options.rotate)
    // merge running state parameter
    this.running = this.options.running
    // assign wave functions
    this.setupWaveFns()
    // render first
    this.update()
    // start animation loop
    this.loop()
  }
  SineWave.validate = function (options) {
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
  SineWave.prototype.updateDimensions = function () {
    var width = this.getDimension('width')
    var height = this.getDimension('height')
    // console.log('update', width, height)
    if (this.el) {
      // apply dpr for retina display
      this.width = this.el.width = width * this.dpr
      this.height = this.el.height = height * this.dpr
      // scale down
      this.el.style.width = width + 'px'
      this.el.style.height = height + 'px'
      // padding
      this.waveWidth = SineWave.getWaveWidth(
        this.options.wavesWidth,
        this.width
      )
      // center it
      this.waveLeft = (this.width - this.waveWidth) / 2
      // vertical center
      this.yAxis = this.height / 2
    }
  }
  /**
   *
   * @param value 0, '10px', '90%'
   * @param width
   * @private
   */
  SineWave.getWaveWidth = function (value, width) {
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
  SineWave.prototype.getDimension = function (dimension) {
    var _a, _b
    if (SineWave.isType(this.options[dimension], 'string')) {
      return this.options[dimension]
    } else if (SineWave.isType(this.options[dimension], 'function')) {
      return this.options[dimension].call(this, this.el)
    } else if (dimension === 'width') {
      return (_a = this.el) === null || _a === void 0 ? void 0 : _a.clientWidth
    } else if (dimension === 'height') {
      return (_b = this.el) === null || _b === void 0 ? void 0 : _b.clientHeight
    }
  }
  SineWave.isType = function (value, type) {
    return typeof value === type
  }
  SineWave.prototype.setupUserFunctions = function () {
    var _this = this
    if (!this.options) return
    // resize
    if (SineWave.isType(this.options.resizeEvent, 'function')) {
      window.addEventListener('resize', function () {
        _this.options.resizeEvent()
      })
    }
    // init
    if (SineWave.isType(this.options.initialize, 'function')) {
      this.options.initialize.call(this)
    }
  }
  SineWave.getFunction = function (obj, name, defaultName) {
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
  SineWave.degreeToRadian = function (degree) {
    if (!SineWave.isType(degree, 'number')) {
      throw new TypeError('Parameter degree is not a number.')
    }
    return degree * (Math.PI / 180)
  }
  SineWave.prototype.setupWaveFns = function () {
    var wavesLength = this.waves.length
    for (var i = 0; i < wavesLength; i++) {
      this.waves[i].waveFn = SineWave.getFunction(
        Wave_1.Wave,
        this.waves[i].type,
        'sine'
      )
    }
  }
  SineWave.prototype.loop = function () {
    if (this.running) {
      this.update()
    }
    window.requestAnimationFrame(this.loop.bind(this))
  }
  SineWave.prototype.update = function () {
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
    var wavesLength = this.waves.length
    // draw each line
    for (var i = 0; i < wavesLength; i++) {
      var timeModifier = this.waves[i].timeModifier || 1
      this.drawWave(this.time * timeModifier, this.waves[i])
    }
    this.ctx.restore()
  }
  SineWave.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  SineWave.prototype.drawWave = function (time, waveOption) {
    var defaultWaveOption = {
      waveFn: undefined,
      timeModifier: 1,
      amplitude: 50,
      wavelength: 50,
      segmentLength: 10,
      lineWidth: 1,
      strokeStyle: 'rgba(255, 255, 255, 0.2)',
      type: 'Sine',
    }
    // merge wave option
    waveOption = Object.assign(defaultWaveOption, waveOption)
    // Styles
    this.ctx.lineWidth = waveOption.lineWidth * this.dpr
    this.ctx.strokeStyle = waveOption.strokeStyle
    this.ctx.lineCap = 'butt'
    this.ctx.lineJoin = 'round'
    this.ctx.beginPath()
    // Starting Line
    this.ctx.moveTo(0, this.yAxis)
    this.ctx.lineTo(this.waveLeft, this.yAxis)
    for (var i = 0; i < this.waveWidth; i += waveOption.segmentLength) {
      // Calculate where the next point is
      var point = this.getPoint(time, i, waveOption)
      this.ctx.lineTo(point.x, point.y)
    }
    // Ending Line
    this.ctx.lineTo(this.width, this.yAxis)
    this.ctx.stroke()
  }
  SineWave.prototype.getPoint = function (time, position, waveOption) {
    // key code logic
    var x =
      time * this.options.speed +
      (-this.yAxis + position) / waveOption.wavelength
    var y = waveOption.waveFn.call(this, x, Wave_1.Wave)
    // Left and Right Sine Easing
    var amplitude = this.easeFunction.call(
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
  return SineWave
})()
exports.SineWave = SineWave
