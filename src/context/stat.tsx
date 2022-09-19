import type { FlowComponent } from 'solid-js'
import { TimerContext } from './timer'
import { Stat } from './types'

export const createStatContext = () => {
  return createContext<Stat>([
    {
      level: 100,
      maxLevel: 100,
      timer: 0,
    },
    {
      setLevel: (_level: number) => { },
      setMaxLevel: (_maxLevel: number) => { },
      resetTimer: () => { },
      increaseLevel: (_level: number) => { },
      getTimer: () => 0,
    }
  ])
}

interface Props {
  level?: number
  maxLevel?: number
}

const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE

export const createStatProvider = (context: ReturnType<typeof createStatContext>) => {
  const Provider: FlowComponent<Props> = (props) => {
    const [lastUpdate, setLastUpdate] = createSignal(Date.now())
    const [state, setState] = createStore({
      level: props.level || 100,
      maxLevel: props.maxLevel || 100,
      timer: 0,
    })

    const [timerState] = useContext(TimerContext)
    createEffect(() => {
      if (timerState.timer) {
        setState('timer', timerState.timer)
      }
    })

    setInterval(() => {
      if (state.timer) {
        const diff = state.timer - lastUpdate()
        if (diff > ONE_HOUR * 4) {
          setState('level', state.level - 10)
          setLastUpdate(Date.now())
        }
      }
    }, ONE_SECOND * 5)

    const wa = [
      state,
      {
        setLevel: (level: number) => {
          setState('level', level)
        },
        increaseLevel: (level: number) => {
          setState('level', state.level + level)
        },
        setMaxLevel: (maxLevel: number) => {
          setState({ maxLevel })
        },
        resetTimer: () => {
          setLastUpdate(Date.now())
        },
        getTimer: () => {
          return state.timer - lastUpdate()
        },
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
