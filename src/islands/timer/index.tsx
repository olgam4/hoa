import type { Component } from "solid-js"
import { FoodContext } from '@context/food'
import { WaterContext } from "@context/water"
import { toViewable } from "src/lib/math"

const Timer: Component = () => {
  const [_a, foodActions] = useContext(FoodContext)
  const [_b, drinkactions] = useContext(WaterContext)
  return (
    <div class="text-slate-400/50 absolute bottom-10">
      <p>
        {toViewable(foodActions.getTimer() / 1000)}s since last meal
      </p>
      <p>
        {toViewable(drinkactions.getTimer() / 1000)}s since last drink
      </p>
    </div>
  )
}

export {
  Timer as default,
}

