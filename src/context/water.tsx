import type { FlowComponent } from 'solid-js'
import { Stat } from './types'

export const WaterContext = createContext<Stat>([
  {
    level: 100,
    maxLevel: 100,
    ratio: () => 100,
  },
  {
    setLevel: (_level: number) => { },
    setMaxLevel: (_maxLevel: number) => { },
  }
])

interface Props {
  level?: number
  maxLevel?: number
}

export const WaterProvider: FlowComponent<Props> = (props) => {
  const [state, setState] = createStore({
    level: props.level || 100,
    maxLevel: props.maxLevel || 100,
    ratio() {
      return (this.level / this.maxLevel) * 100
    },
  })

  const wa = [
    state,
    {
      setLevel: (level: number) => {
        setState('level', level)
      },
      setMaxLevel: (maxLevel: number) => {
        setState({ maxLevel })
      }
    }
  ] as Stat

  return (
    <WaterContext.Provider value={wa}>
      {props.children}
    </WaterContext.Provider>
  )
}
