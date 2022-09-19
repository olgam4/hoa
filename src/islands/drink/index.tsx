import { WaterContext } from "@context/water"
import type { Component } from "solid-js"

const Nourish: Component = () => {
  const [_, actions] = useContext(WaterContext)

  const drink = () => {
    actions.resetTimer()
    actions.increaseLevel(5)
  }

  return (
    <button onClick={drink}>
      <div class="i-carbon-humidity w-[50px] h-[50px] text-blue-600" />
    </button>
  )
}

export {
  Nourish as default,
}
