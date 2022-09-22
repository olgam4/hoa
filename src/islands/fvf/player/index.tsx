import type { Component } from "solid-js"
import { Action } from "src/lib/fvf/types"
import Bank from "../bank"
import { GameContext } from "../game/context"
import Hand from "../hand"

type Props = {
  id: 'playerA' | 'playerB'
}

const Player: Component<Props> = (props) => {
  const [value, { action }] = useContext(GameContext)

  const onDrop = (move: Action) => {
    action(move, value.state)
  }

  return (
    <div class="flex space-x-10">
      <div>
        <Hand
          id={`${props.id}-left-hand`}
          size={() => value.state[props.id].leftHand.quantity}
          isTurn={() => value.state.turn === props.id}
        />
        <Bank
          id={`${props.id}-left-bank`}
          quantity={value.state[props.id].leftHand.quantity}
          onDrop={onDrop}
        />
      </div>
      <div>
        <Hand
          id={`${props.id}-right-hand`}
          size={() => value.state[props.id].rightHand.quantity}
          isTurn={() => value.state.turn === props.id}
        />
        <Bank
          id={`${props.id}-right-bank`}
          quantity={value.state[props.id].rightHand.quantity}
          onDrop={onDrop}
        />
      </div>
    </div>
  )
}

export {
  Player as default,
}
