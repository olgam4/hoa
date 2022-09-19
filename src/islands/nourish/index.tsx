import { FoodContext } from "@context/food"
import type { Component } from "solid-js"
import toast from "solid-toast"

const Nourish: Component = () => {
  const [_, actions] = useContext(FoodContext)

  const eat = () => {
    actions.resetTimer()
    actions.increaseLevel(5)
    toast("You eat an apple", { icon: "🍎" })
  }

  return (
    <button onClick={eat}>
      <div class="i-carbon-apple w-[50px] h-[50px] text-red-600" />
    </button>
  )
}

export {
  Nourish as default,
}
