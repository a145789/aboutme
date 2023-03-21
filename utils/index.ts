export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  let timerId: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timerId!)
    timerId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  } as T
}
