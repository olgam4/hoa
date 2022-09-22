import { FlowComponent } from "solid-js"
import { BaseFvfState, Fvf } from "src/lib/fvf"
import { Action, Game } from "src/lib/fvf/types"

type GameContext = [
  { state: Game },
  { action: (action: Action, state: Game) => void }
]

export const GameContext = createContext<GameContext>([
  { state: { ...BaseFvfState } },
  { action: (_action: Action, _state: Game) => { } }
])

export const GameProvider: FlowComponent = (props) => {
  const [state, setState] = createStore({
    state: { ...BaseFvfState },
  })

  const action = (action: Action, state: Game) => {
    const newState = Fvf(action, state)
    setState({ state: { ...newState } })
  }

  return (
    <GameContext.Provider value={[state, { action }]}>
      {props.children}
    </GameContext.Provider>
  )
}
