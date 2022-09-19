import type { Component } from 'solid-js'
import Animation from '@components/animation'
import { Motion } from '@motionone/solid'
import { createSkinState } from './reactivity';

const Companion: Component = () => {
  const [quantity, setQuantity] = createSignal(0)

  const add = () => {
    setQuantity(quantity() + 1)
  }

  const skinState = createSkinState()

  return (
    <div
      class="relative select-none"
      style={skinState.size()}
      onclick={add}>
      <div
        id="shadow"
        class="absolute"
        style={skinState.currentSize()}
      />
      <div
        id="companion"
        class="absolute"
        style={skinState.currentSpace()}
      >
        <Animation
          tileset={skinState.currentTileset()}
          refresh={1000}
        />
      </div>
      <For each={Array.from({ length: quantity() })} children={() => {
        const [x, y, z] = [Math.random() * 200, Math.random() * 100, Math.random() * 200]
        return (
          <Motion.div
            class="absolute pointer-events-none"
            animate={{ y: -150, x: z, opacity: 0, transition: { duration: 5 } }}
            initial={{ y, x, opacity: 1 }}
          >
            <p class="text-3xl">
              ❤️
            </p>
          </Motion.div>
        )
      }} />
    </div >
  )
};

export {
  Companion as default,
}
