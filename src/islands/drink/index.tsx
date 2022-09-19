import { WaterContext } from "@context/water"
import type { Component } from "solid-js"

const Nourish: Component = () => {
  const [_, actions] = useContext(WaterContext)
  return (
    <button onClick={actions.resetTimer}>
      <div class="i-carbon-humidity w-[50px] h-[50px] text-red-600" />
    </button>
  )
}

export {
  Nourish as default,
}
