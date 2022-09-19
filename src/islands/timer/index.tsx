import type { Component } from "solid-js"
import { FoodContext } from '@context/food'
import { WaterContext } from "@context/water"

const Timer: Component = () => {
  const [_a, foodActions] = useContext(FoodContext)
  const [_b, drinkactions] = useContext(WaterContext)
  return (
    <div class="text-slate-400/50 absolute bottom-10">
      <p>
        {(foodActions.getTimer() / 1000).toFixed(0)}s since last meal
      </p>
      <p>
        {(drinkactions.getTimer() / 1000).toFixed(0)}s since last drink
      </p>
    </div>
  )
}

export {
  Timer as default,
}

