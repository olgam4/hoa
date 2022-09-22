import { Action, Game, Hand, Player } from './types'

export const BaseFvfState: Game = {
  playerA: {
    alive: true,
    leftHand: {
      quantity: 1,
      side: 'left',
      alive: true,
    } as Hand,
    rightHand: {
      quantity: 1,
      side: 'right',
      alive: true,
    } as Hand,
  } as Player,
  playerB: {
    alive: true,
    leftHand: {
      quantity: 1,
      side: 'left',
      alive: true,
    } as Hand,
    rightHand: {
      quantity: 1,
      side: 'right',
      alive: true,
    } as Hand,
  } as Player,
  turn: 'playerA',
}

export const Fvf = (action: Action, state?: typeof BaseFvfState): Game => {
  let newState: Game = state ? { ...state } : { ...BaseFvfState };
  newState = executeActionForTurn(newState, action)
  newState.turn = nextTurn(newState.turn)
  return newState
}

export const isItMyTurn = (state: Game, turn: 'playerA' | 'playerB'): boolean => {
  return turn === state.turn
}

const nextTurn = (turn: 'playerA' | 'playerB'): 'playerA' | 'playerB' => {
  return turn === 'playerA' ? 'playerB' : 'playerA'
}

const executeActionForTurn = (Game: Game, action: Action): Game => {
  switch (Game.turn) {
    case 'playerA':
      Game.playerB = executeActionForSide(Game.playerB, action)
      break
    case 'playerB':
      Game.playerA = executeActionForSide(Game.playerA, action)
      break
  }
  return Game
}

const executeActionForSide = (player: Player, action: Action): Player => {
  const newPlayer = { ...player }
  switch (action.to) {
    case 'left':
      newPlayer.leftHand = addToHand(player.leftHand, action.by)
      break
    case 'right':
      newPlayer.rightHand = addToHand(player.rightHand, action.by)
      break
  }
  newPlayer.alive = isPlayerAlive(player)
  return newPlayer
}

const isPlayerAlive = (player: Player): boolean => {
  return player.leftHand.alive || player.rightHand.alive
}

const addToHand = (hand: Hand, by: number): Hand => {
  const newHand = { ...hand }
  newHand.quantity = (hand.quantity + by) % 5
  newHand.alive = isHandAlive(hand)
  return newHand
}

const isHandAlive = (hand: Hand): boolean => {
  return hand.quantity === 0
}

export const pickSide = () => {
  const sides = ['left', 'right']
  return sides[Math.floor(Math.random() * sides.length)]
}
