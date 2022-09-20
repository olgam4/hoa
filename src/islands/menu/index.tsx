import type { Component, FlowComponent } from 'solid-js'
import Nourish from '@islands/nourish'
import { createMenu } from './reactivity'
import { Motion, Presence } from '@motionone/solid'
import Drink from '@islands/drink'

const Item: FlowComponent = (props) => {
  return (
    <div class="my-1">
      {props.children}
    </div>
  )
}

const Menu: Component = () => {
  const menu = createMenu()

  return (
    <div class="absolute z-50 left-3 top-3">
      <button
        class={`hamburger hamburger--spin scale-90 pl-[10px] pb-1 ${menu.open() && 'is-active'}`}
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
            exit={{ opacity: 0, y: -15, transition: { duration: 0.5 } }}
            class="flex flex-col rounded-full bg-gray-50 px-1 py-2 items-center shadow-sm"
          >
            <Item children={() => (
              <a href="/" class="text-purple-400/50">
                <div class="i-carbon-home w-[50px] h-[50px]" />
              </a>
            )} />
            <Item children={<Nourish />} />
            <Item children={<Drink />} />
            <Item children={() => (
              <a href="/rps" class="text-green-800">
                <div class="i-carbon-cut w-[50px] h-[50px]" />
              </a>
            )} />
            <Item children={() => (
              <a href="/fvf" class="text-violet-700">
                <div class="i-carbon-forward-5 w-[50px] h-[50px]" />
              </a>
            )} />
            <Item children={() => (
              <a href="/settings" class="text-slate-400/50">
                <div class="i-carbon-settings w-[50px] h-[50px]" />
              </a>
            )} />
          </Motion.div>
        </Show>
      </Presence>
    </div>
  )
}

export {
  Menu as default,
}
