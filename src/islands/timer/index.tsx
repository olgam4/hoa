import type { Component } from "solid-js"
import { FoodContext } from '@context/food'
import { WaterContext } from "@context/water"

const Timer: Component = () => {
  const [foodState] = useContext(FoodContext)
  const [drinkState] = useContext(WaterContext)
  return (
    <>
      <p>
        {foodState.timer?.toFixed(0)}s since last meal
      </p>
      <p>
        {drinkState.timer?.toFixed(0)}s since last water
      </p>
    </>
  )
}

export {
  Timer as default,
}

