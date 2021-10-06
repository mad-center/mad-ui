/**
 *     window.addEventListener('resize', function (evt) {
        console.group();
        console.log(`BrowserUtil.getHeight(): ${BrowserUtil.getHeight()}`);
        console.log(`BrowserUtil.getWidth() : ${BrowserUtil.getWidth()}`);
        console.groupEnd();
    })
 */
export default class Browser {
  static readonly w = window
  static readonly d = document
  static readonly e = Browser.d.documentElement
  static readonly body = Browser.d.getElementsByTagName('body')[0]

  private constructor() {
    //
  }

  static getWidth() {
    return this.w.innerWidth || this.e.clientWidth || this.body.clientWidth
  }

  static getHeight() {
    return this.w.innerHeight || this.e.clientHeight || this.body.clientHeight
  }
}
