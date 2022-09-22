import Player from "../player"
import {
  DragDropSensors,
  DragDropProvider
} from "@thisbeyond/solid-dnd"
import { GameProvider } from "./context"

const Game = () => {
  return (
    <div class="flex flex-col space-y-20 items-center">
      <GameProvider>
        <DragDropProvider>
          <DragDropSensors>
            <Player id="playerA" />
            <div class="w-48 h-2 rounded-full bg-gray-400" />
            <Player id="playerB" />
          </DragDropSensors>
        </DragDropProvider>
      </GameProvider>
    </div>
  )
}

export {
  Game as default,
}
