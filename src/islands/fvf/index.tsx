import { Component } from 'solid-js'
import {
  DragDropProvider,
  DragDropSensors,
  useDragDropContext,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd"

const gameLogic = (increment: any, value: any, alive: (state: boolean) => void) => {
  increment((old: any) => {
    const newValue = (old + value) % 5
    if (newValue === 0) alive(false)
    return newValue
  })
}

const Game = () => {
  const [pAliveL, setPAliveL] = createSignal(true)
  const [pAliveR, setPAliveR] = createSignal(true)
  const [pLeftSide, setPLeftSide] = createSignal(1)
  const [pRightSide, setPRightSide] = createSignal(1)

  const [cAliveL, setCAliveL] = createSignal(true)
  const [cAliveR, setCAliveR] = createSignal(true)
  const [cLeftSide, setCLeftSide] = createSignal(1)
  const [cRightSide, setCRightSide] = createSignal(1)

  const incrementPLeft = (by: number) => gameLogic(setPLeftSide, by, setPAliveL)
  const incrementPRight = (by: number) => gameLogic(setPRightSide, by, setPAliveR)

  const incrementCLeft = (by: number) => gameLogic(setCLeftSide, by, setCAliveL)
  const incrementCRight = (by: number) => gameLogic(setCRightSide, by, setCAliveR)

  return (
    <div class="flex flex-col space-y-20 items-center">
      <Side
        lAlive={cAliveL}
        rAlive={cAliveR}
        leftSideQt={cLeftSide}
        rightSideQt={cRightSide}
        incrementLeft={incrementCLeft}
        incrementRight={incrementCRight}
        id="c"
      />
      <div class="w-48 h-2 rounded-full bg-gray-400"/>
      <Side
        lAlive={pAliveL}
        rAlive={pAliveR}
        leftSideQt={pLeftSide}
        rightSideQt={pRightSide}
        incrementLeft={incrementPLeft}
        incrementRight={incrementPRight}
        id="p"
      />
    </div>
  )
}

const Hand = (props: any) => {
  const draggable = createDraggable(props.id)
  return (
    <div class="flex justify-center">
      {props.alive() ? (
        <div use:draggable class={props.size()}>
          <div class="i-carbon-arrow-up w-10 h-10" />
        </div>
      ) : (
        <div class="i-carbon-close text-red-300 w-10 h-10" />
      )}
    </div>
  )
}

const Bank = (props: any) => {
  const droppable = createDroppable(props.id)

  const [, { onDragEnd }] = useDragDropContext() as any

  onDragEnd(({ draggable, droppable }: any) => {
    if (props.qt() === 0) return
    if (droppable && droppable.id === props.id) {
      console.log('dropped in', props.id)
      console.log('from', parseInt(draggable.node.classList[0]))
      const by = parseInt(draggable.node.classList[0])
      props.update(by)
    }
  })

  return (
    <div use:droppable class="flex space-x-1 p-2 bg-gray-200 rounded-full">
      <Show when={props.qt() > 0} fallback={() => (
        <For each={Array.from({ length: 5 })} children={() => (
          <div class="i-carbon-close-filled w-5 h-5 text-red-300" />
        )} />
      )}>
        <For each={Array.from({ length: props.qt() })} children={() => (
          <div class="bg-red-300 w-5 h-5 rounded-full" />
        )} />
        <For each={Array.from({ length: 5 - props.qt() })} children={() => (
          <div class="bg-gray-300 w-5 h-5 rounded-full" />
        )} />
      </Show>
    </div>
  )
}

const Side = (props: any) => {
  return (
    <div class="flex space-x-10">
      <div>
        <Hand alive={props.lAlive} id={`${props.id}-h-l`} size={props.leftSideQt} />
        <Bank id={`${props.id}-b-l`} qt={props.leftSideQt} update={props.incrementLeft} />
      </div>
      <div>
        <Hand alive={props.rAlive} id={`${props.id}-h-r`} size={props.rightSideQt} />
        <Bank id={`${props.id}-b-r`} qt={props.rightSideQt} update={props.incrementRight} />
      </div>
    </div>
  )
}

const FiveVFive: Component = () => {
  return (
    <div>
      <DragDropProvider>
        <DragDropSensors>
          <Game />
        </DragDropSensors>
      </DragDropProvider>
    </div>
  )
}

export {
  FiveVFive as default,
}
