import type { Component } from "solid-js"
import {
  createDraggable,
} from '@thisbeyond/solid-dnd'

type Props = {
  id: string
  size: () => number
}

const Mobile: Component<Props> = (props) => {
  const draggable = createDraggable(props.id, { size: props.size })
  return (
    <div class="flex items-center justify-center">
      <div use:draggable class="hover:cursor-pointer">
        <div class="i-carbon-arrow-up w-10 h-10" />
      </div>
    </div>
  )
}

export {
  Mobile as default,
}
