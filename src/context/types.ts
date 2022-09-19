export type Stat = [
  {
    level: number,
    maxLevel: number,
    timer?: number,
  },
  {
    setLevel: (level: number) => void,
    setMaxLevel: (maxLevel: number) => void,
    increaseLevel: (level: number) => void,
    resetTimer: () => void,
    getTimer: () => number,
  }
]
