type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>
type P = Enumerate<10>

type T = IntRange<0, 100>

const fakeData = [...new Array(100)].map((_item, index) => index)

const binarySearch = (list: number[], searchValue: T) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.ceil((low + high) / 2)
    let currentValue = list[mid]
    console.log('mid ->>', mid)
    if (currentValue === searchValue) {
      return mid
    } else if (currentValue > searchValue) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
}

console.log(binarySearch(fakeData, 0))
