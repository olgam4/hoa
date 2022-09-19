import type { Component } from 'solid-js'
import Animation from '@components/animation'
import { Motion } from '@motionone/solid'
import cat0 from '@assets/cat/0.png'
import cat1 from '@assets/cat/1.png'
import biche0 from '@assets/biche/0.png'
import biche1 from '@assets/biche/1.png'
import { SkinContext } from '@context/skin'

const Companion: Component = () => {
  const [quantity, setQuantity] = createSignal(0)

  const add = () => {
    setQuantity(quantity() + 1)
  }

  const [state] = useContext(SkinContext)
  const currentTileset = createMemo(() => {
    switch (state.current!()) {
      case 'cat':
        return [cat0, cat1]
      case 'biche':
        return [biche0, biche1]
      default:
        return [cat0, cat1]
    }
  })
  const currentSpace = createMemo(() => {
    switch (state.current!()) {
      case 'cat':
        return { top: '35px' }
      case 'biche':
        return { left: '-30px' }
      default:
        return { top: '35px' }
    }
  })
  const currentSize = createMemo(() => {
    const size = {
      'background-color': 'rgba(0, 0, 0, 0.1)',
      opacity: 1,
      top: '110px',
      left: '35px',
      transform: 'scaleY(0.4)',
      'border-radius': '999999px',
    }
    switch (state.current!()) {
      case 'cat':
        return { ...size, width: '140px', height: '140px' }
      case 'biche':
        return { ...size, width: '150px', height: '150px' }
      default:
        return { ...size, width: '100px', height: '100px' }
    }
  })

  return (
    <div class="relative select-none w-[200px] h-[200px]" onclick={add}>
      <div
        id="shadow"
        class="absolute"
        style={currentSize()}
      />
      <div
        id="companion"
        class="absolute"
        style={currentSpace()}
      >
        <Animation
          tileset={currentTileset()}
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
