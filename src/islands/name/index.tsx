import type { Component } from "solid-js"

import TextInput from "@components/textInput"

const Name: Component = () => {
  const [name, setName] = createSignal("John Abbott")

  return (
    <div class="absolute z-50 top-7 text-lg left-0 right-0 flex justify-center">
      <div>
        <TextInput value={name()} onChange={setName} />
      </div>
    </div>
  )
}

export {
  Name as default,
}
