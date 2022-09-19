import type { Component } from 'solid-js'
import { BaseRPSState, play } from 'src/lib/rps'

const RPS: Component = () => {
  const state = createMutable({ value: BaseRPSState })

  return (
    <div class="text-center space-y-5">
      <p>
        {state.value.lastPlayerChoice} vs {state.value.lastCpuChoice}
      </p>
      <p>
        {state.value.playerScore} - {state.value.cpuScore}
      </p>
      <div class="space-x-4">
        <button class="rounded-md p-2 bg-gray-500" onClick={() => state.value = play('rock', state.value)}>rock</button>
        <button class="rounded-md p-2 bg-white" onClick={() => state.value = play('paper', state.value)}>paper</button>
        <button class="rounded-md p-2 bg-blue-500" onClick={() => state.value = play('scissors', state.value)}>scissors</button>
      </div>
    </div>
  )
}

export {
  RPS as default,
}
