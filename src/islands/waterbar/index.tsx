import type { Component } from "solid-js"

import Statbar from '@components/statbar'
import { WaterContext } from '@context/water'

const Waterbar: Component = () => {
  return (
    <Statbar
      context={WaterContext}
      color="#1357A6"
      label="WA"
    />
  )
}

export {
  Waterbar as default,
}

