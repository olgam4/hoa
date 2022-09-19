import type { Component, FlowComponent } from 'solid-js'
import Nourish from '@islands/nourish'
import { createMenu } from './reactivity'
import { Motion, Presence } from '@motionone/solid'

const Item: FlowComponent = (props) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
    >
      {props.children}
    </Motion.div>
  )
}

const Menu: Component = () => {
  const menu = createMenu()

  return (
    <div class="absolute left-3 top-3">
      <button
        class={`hamburger hamburger--elastic scale-90 pl-[5px] pb-1 ${menu.open() && 'is-active'}`}
        onClick={menu.toggle}
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <Presence exitBeforeEnter>
        <Show when={menu.open()}>
          <Motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
            class="flex flex-col"
          >
            <Item children={<Nourish />} />
            <Item children={<Nourish />} />
            <Item children={<Nourish />} />
          </Motion.div>
        </Show>
      </Presence>
    </div>
  )
}

export {
  Menu as default,
}
