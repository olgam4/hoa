import type { Component } from 'solid-js'
import Animation from '@components/animation'
import cat0 from '@assets/cat/0.png'
import cat1 from '@assets/cat/1.png'

const Companion: Component = () => {
  return (
    <Animation
      tileset={[cat0, cat1]}
      refresh={1000}
    />
  )
};

export {
  Companion as default,
}
