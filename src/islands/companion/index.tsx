import type { Component } from 'solid-js'
import Animation from '@components/animation'
import { Motion } from '@motionone/solid'
import cat0 from '@assets/cat/0.png'
import cat1 from '@assets/cat/1.png'
import biche0 from '@assets/biche/0.png'
import biche1 from '@assets/biche/1.png'

const Companion: Component = () => {
  const [quantity, setQuantity] = createSignal(0)

  const add = (e: any) => {
    setQuantity(quantity() + 1)
  }

  return (
    <div class="relative select-none w-[200px] h-[200px]" onclick={add}>
      <div class="absolute bg-black opacity-10 h-[150px] w-[150px] scale-y-50 rounded-full top-[110px] left-[35px]" />
      <div class="absolute -left-[30px]">
        <Animation
          tileset={[biche0, biche1]}
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
