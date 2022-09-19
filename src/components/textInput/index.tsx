import { Component } from 'solid-js'

type Props = {
  value: string
  onChange: (value: string) => void
}

const TextInput: Component<Props> = (props) => {
  let ref: any

  const [input, setInput] = createSignal(false)

  return (
    <Show when={input()} children={() => (
      <input
        ref={ref}
        type="text"
        class="bg-transparent text-blue-600 text-center"
        value={props.value}
        onInput={(e) => props.onChange(e.currentTarget.value)}
        onBlur={() => setInput(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            ref.blur()
          }
        }}
      />
    )}
      fallback={() => (
        <div onClick={() => {
          setInput(true)
          ref.focus()
        }}>
          {props.value}
        </div>
      )}
    />
  )
}

export {
  TextInput as default,
}
