import type { FlowComponent } from 'solid-js'
import { createTimer } from './timer'
import { Stat } from './types'

export const createStatContext = () => {
  return createContext<Stat>([
    {
      level: 100,
      maxLevel: 100,
      ratio: () => 100,
      timer: 0,
    },
    {
      setLevel: (_level: number) => { },
      setMaxLevel: (_maxLevel: number) => { },
      resetTimer: () => { },
    }
  ])
}

interface Props {
  level?: number
  maxLevel?: number
}

export const createStatProvider = (context: ReturnType<typeof createStatContext>, name: string) => {
  const Provider: FlowComponent<Props> = (props) => {
    const [state, setState] = createStore({
      level: props.level || 100,
      maxLevel: props.maxLevel || 100,
      timer: 0,
      ratio() {
        return (this.level / this.maxLevel) * 100
      },
    })

    createTimer(state, setState, name)

    const wa = [
      state,
      {
        setLevel: (level: number) => {
          setState('level', level)
        },
        setMaxLevel: (maxLevel: number) => {
          setState({ maxLevel })
        },
        resetTimer: () => {
          setState('timer', 0)
        }
      }
    ] as Stat

    return (
      <context.Provider value={wa}>
        {props.children}
      </context.Provider>
    )
  }

  return Provider
}
