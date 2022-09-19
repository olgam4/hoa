import { FlowComponent } from "solid-js"

type Props = {
  title: string
}

const Layout: FlowComponent<Props> = (props) => {
  return (
    <div class="full bg-yellow-100 flex flex-center flex-col">
      <Title>{props.title}</Title>
      {props.children}
    </div>
  )
}

export {
  Layout as default,
}
