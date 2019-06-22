const meaningOfLife = () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }
  const { a, c } = obj
  return `${a + c}${getLetter('babel')}`
}

const getLetter = (value: string) => {
  return `xxx${value}xxx`
}

export default meaningOfLife
