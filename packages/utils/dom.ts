export const domReady = (fn: () => void) => {
  if (document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

export const trim = (s: string) => {
  // \s：空格
  // \uFEFF：字节次序标记字符（Byte Order Mark）, 是es5新增的空白符
  return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * Add class(es) to a html element
 * @param el html element
 * @param cls can be multi classes string like 'cls1 cls2'
 */
export const addClass = (el: HTMLElement, cls: string): void => {
  if (!el) return

  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0; i < classes.length; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      // when el.classList is falsy, record classes to curClass var
      curClass += ' ' + clsName
    }
  }

  // set curClass var to className
  if (!el.classList) {
    el.className = curClass
  }
}

export const hasClass = (el: HTMLElement, cls: string): boolean => {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1)
    throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

export const removeClass = (el: HTMLElement, cls: string): void => {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0; i < classes.length; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }

  if (!el.classList) {
    el.className = trim(curClass)
  }
}
