export const debounce = (
  fn: { apply: (arg0: any, arg1: any) => void },
  delayInMS: number | undefined
) => {
  // global signal
  let timeoutId: NodeJS.Timeout | null = null

  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    // @ts-ignore
    const context = this
    // const args = arguments
    timeoutId = setTimeout(() => {
      fn.apply(context, args)
    }, delayInMS)
  }
}

export const sleep = (timeInMS: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeInMS))
}
