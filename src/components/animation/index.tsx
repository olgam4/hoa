import type { Component } from 'solid-js'

type Props = {
  tileset: string[]
  refresh: number
}

const Animation: Component<Props> = (props) => {
  const [index, setIndex] = createSignal(0)

  setInterval(() => {
    setIndex((index() + 1) % props.tileset.length)
  }, props.refresh)

  return (
    <For each={props.tileset} children={(tile, i) => (
      <Show when={i() === index()}>
        <img src={tile} />
      </Show>
    )} />
  )
};

export {
  Animation as default,
}
