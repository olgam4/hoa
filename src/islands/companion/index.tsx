import type { Component } from 'solid-js'
import Animation from '@components/animation'
import { Motion } from '@motionone/solid'
import cat0 from '@assets/cat/0.png'
import cat1 from '@assets/cat/1.png'

const Companion: Component = () => {
  const [quantity, setQuantity] = createSignal(0)
  const add = (e: any) => {
    e.preventDefault()
    setQuantity(quantity() + 1)
  }

  return (
    <div class="relative select-none" onclick={add}>
      <Animation
        tileset={[cat0, cat1]}
        refresh={1000}
      />
      <For each={Array.from({ length: quantity() })} children={() => {
        const [x, y, z] = [Math.random() * 200, Math.random() * -200, Math.random() * 200]
        return (
          <Motion.div
            class="absolute pointer-events-none"
            animate={{ y: -900, x: z, transition: { duration: 10 } }}
            initial={{ y, x }}
          >
            <p class="text-3xl">
              ❤️
            </p>
          </Motion.div>
        )
      }} />
    </div>
  )
};

export {
  Companion as default,
}
