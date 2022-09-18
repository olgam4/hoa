import type { Component } from "solid-js"

type Props = {
  percent: number
  color: string
}

const Bar: Component<Props> = (props) => {
  return (
    <div class={`bg-gray-300 rounded-full h-5 w-72 relative`}>
      <div
        class={`absolute top-0 left-0 h-full rounded-full`}
        style={{ width: `${props.percent}%`, "background-color": `${props.color}` }}
      />
    </div>
  );
}

export {
  Bar as default,
}

