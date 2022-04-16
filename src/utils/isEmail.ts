export const isEmail = (str: string): boolean => {
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return regex.test(str)
}
