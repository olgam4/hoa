import Percent from "@components/percent";
import { Stat } from "@context/types";
import type { Component } from "solid-js"

type Props = {
  context: any
  color: string
  label: string
}

const Statbar: Component<Props> = (props) => {
  const [state] = useContext<Stat>(props.context)

  const percent = createMemo(() => {
    return state.level / state.maxLevel * 100
  })

  const color = createMemo(() => {
    return percent() > 50 ? `${props.color}` : percent() > 25 ? '#FFBF00' : '#FF0000'
  })

  console.log(percent())
  console.log(color())
  console.log(props.label)

  return (
    <div class="flex space-x-1 items-center">
      <label class={`text-2xl font-bold`} style={{ color: color() }}>
        {props.label}
      </label>
      <Percent
        percent={percent()}
        color={color()}
      />
    </div>
  );
}

export {
  Statbar as default,
}
