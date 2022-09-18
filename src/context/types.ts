export type Stat = [
  {
    level: number,
    maxLevel: number,
    ratio: () => number,
    timer?: number,
  },
  {
    setLevel: (level: number) => void,
    setMaxLevel: (maxLevel: number) => void,
    resetTimer: () => void,
  }
]
