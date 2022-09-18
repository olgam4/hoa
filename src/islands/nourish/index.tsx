import { FoodContext } from "@context/food"
import type { Component } from "solid-js"

const Nourish: Component = () => {
  const [_, actions] = useContext(FoodContext)
  return (
    <button onClick={actions.resetTimer} class="rounded-md bg-gray-100">
      <div class="i-carbon-apple w-[50px] h-[50px] text-red-600" />
    </button>
  )
}

export {
  Nourish as default,
}
