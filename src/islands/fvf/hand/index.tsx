import type { Component } from "solid-js"
import Mobile from "./mobile"
import Static from "./static"

type Props = {
  id: string
  size: () => number
  isTurn(): boolean
}

const Hand: Component<Props> = (props) => {
  const [isTurn, setIsTurn] = createSignal(props.isTurn())

  observable(props.isTurn).subscribe(val => {
    setIsTurn(val)
  })

  return (
    <>
      <div class={`${!isTurn() && 'hidden'}`}>
        <Mobile id={props.id} size={props.size} />
      </div>
      <div class={`${isTurn() && 'hidden'}`}>
        <Static />
      </div>
    </>
  )
}

export {
  Hand as default,
}
