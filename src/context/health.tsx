import type { FlowComponent } from 'solid-js'
import { FoodContext } from './food'
import { WaterContext } from './water'

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60

export const HealthContext = createContext([{
  level: 100,
  maxLevel: 100,
}])

type Props = {
  level?: number
  maxLevel?: number
}

export const HealthProvider: FlowComponent<Props> = (props) => {
  const [state, setState] = createStore({
    level: props.level || 100,
    maxLevel: props.maxLevel || 100,
  })

  const [a] = useContext(FoodContext)
  const [b] = useContext(WaterContext)

  setInterval(() => {
    const ratio = createMemo(() => {
      const foodRatio = a.level / a.maxLevel
      const waterRatio = b.level / b.maxLevel
      return (foodRatio + waterRatio) / 2
    })
    if (ratio() < 0.5) {
      setState('level', state.level - 5)
    }
  }, ONE_HOUR / 2)

  return (
    <HealthContext.Provider value={[state]}>
      {props.children}
    </HealthContext.Provider>
  )
}
