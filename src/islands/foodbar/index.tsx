import type { Component } from "solid-js"

import Statbar from '@components/statbar'
import { FoodContext } from "@context/food"

const Foodbar: Component = () => {
  return (
    <Statbar 
      context={FoodContext}
      color="#FFD700"
      label="HG"
    />
  )
}

export {
  Foodbar as default,
}
