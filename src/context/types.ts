export type Stat = [
  {
    level: number,
    maxLevel: number,
    ratio: () => number,
  },
  {
    setLevel: (level: number) => void,
    setMaxLevel: (maxLevel: number) => void,
  }
]
