import type { Component } from 'solid-js'
import {
  createDroppable,
  useDragDropContext,
} from '@thisbeyond/solid-dnd'
import { Motion } from '@motionone/solid'
import { Action } from 'src/lib/fvf/types'

type Props = {
  id: string
  quantity: number
  onDrop: (move: Action) => void
}

const Bank: Component<Props> = (props) => {
  if (props.quantity <= 0) {
    return (
      <For each={Array.from({ length: 5 })} children={() => (
        <div class="i-carbon-close-filled w-5 h-5 text-red-300" />
      )} />
    )
  }

  const droppable = createDroppable(props.id)
  const [, { onDragEnd }] = useDragDropContext() as any
  onDragEnd(({ draggable, droppable }: any) => {
    if (droppable && droppable.id === props.id) {
      props.onDrop({ to: droppable.id.split('-')[1], by: draggable.data.size() } as Action)
    }
  })

  return (
    <div use:droppable class="flex space-x-1 p-2 bg-gray-200 rounded-full">
      <For each={Array.from({ length: props.quantity })} children={() => (
        <Motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          class="bg-red-300 w-5 h-5 rounded-full"
        />
      )} />
      <For each={Array.from({ length: 5 - props.quantity })}
        children={() => (
          <div class="bg-gray-300 w-5 h-5 rounded-full" />
        )}
      />
    </div>
  )
}


export {
  Bank as default,
}
