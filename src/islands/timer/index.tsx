import type { Component } from "solid-js"
import { FoodContext } from '@context/food'

const Timer: Component = () => {
  const [state] = useContext(FoodContext)
  return (
    <p>
      {state.timer?.toFixed(0)}s since last meal
    </p>
  )
}

export {
  Timer as default,
}

