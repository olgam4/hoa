import type { FlowComponent } from 'solid-js'
import { Stat } from './types'

export const FoodContext = createContext<Stat>([
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

interface Props {
  level?: number
  maxLevel?: number
}

const ONE_MINUTE = 60
const ONE_HOUR = ONE_MINUTE * 60
const FOUR_HOURS = ONE_HOUR * 4

export const FoodProvider: FlowComponent<Props> = (props) => {
  if(!isServer) navigator.serviceWorker.register('/sw.js')

  const [state, setState] = createStore({
    level: props.level || 100,
    maxLevel: props.maxLevel || 100,
    ratio() {
      return (this.level / this.maxLevel) * 100
    },
    timer: 0,
  })


  if (!isServer) {
    const timeChannel = new BroadcastChannel('time');
    timeChannel.onmessage = (e) => {
      if (e.data.from === 'timer') {
        const now = Date.now()
        timeChannel.postMessage({ time: now, from: 'client' })
        setState('timer', (total) => total + Math.abs(e.data.time - now) / 1000)
      }
    }
  }

  setInterval(() => {
    if (state.timer > ONE_HOUR - 100) {
      setState('level', state.level - 10)
      setState('timer', 0)
    }
  }, 5000)

  const hg = [
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
    <FoodContext.Provider value={hg}>
      {props.children}
    </FoodContext.Provider>
  )
}
