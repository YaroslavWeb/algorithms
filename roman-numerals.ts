const assertProxy = (value: any, expected: number[]) => {
  try {
    if (
      expected.every((item, i) => item === value[i]) &&
      expected.length === value.length
    ) {
      console.log(`OK:`, value)
    } else {
      console.log(`Err: expected ${expected} got ${value}`)
    }
  } catch (err) {
    console.log(`Err: ${err}`)
  }
}

const assertRoman = (value: number, expected: number, arg: string) => {
  if (value === expected) {
    console.log(`OK:`, arg, '=>', value)
  } else {
    console.log(`Err: expected ${expected} got ${value}`)
  }
}

const range = (from: number, to: number) => {
  return Array.from({ length: to }, (_, i) => i + from)
}

const charToRoman: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const parseRoman = (roman: string) => {
  return roman.split('').reduceRight(
    ({ sum, last }, char) => {
      const currentNumber = charToRoman[char]
      return {
        sum: currentNumber < last ? sum - currentNumber : sum + currentNumber,
        last: currentNumber,
      }
    },
    { sum: 0, last: 0 }
  ).sum
}

Object.setPrototypeOf(
  Number.prototype,
  new Proxy(Object.create(Number.prototype), {
    get(_, prop: string, rec) {
      return range(rec, parseRoman(prop))
    },
  })
)

// prettier-ignore
// @ts-ignore: Unreachable code error
assertProxy(0..V, range(0, 5))
// prettier-ignore
// @ts-ignore: Unreachable code error
assertProxy(3..XV, range(3, 15))
// prettier-ignore
// @ts-ignore: Unreachable code error
assertProxy(14..LIV, range(14, 54))

assertRoman(parseRoman('XXI'), 21, 'XXI')
assertRoman(parseRoman('I'), 1, 'I')
assertRoman(parseRoman('IV'), 4, 'IV')
assertRoman(parseRoman('MMVIII'), 2008, 'MMVIII')
assertRoman(parseRoman('MDCLXVI'), 1666, 'MDCLXVI')

console.log('-'.repeat(50))
