type Choices = 'rock' | 'paper' | 'scissors'

const CHOICES = ['rock', 'paper', 'scissors'] as const

export const BaseRPSState = {
  lastCpuChoice: 'THEM',
  lastPlayerChoice: 'YOU',
  cpuScore: 0,
  playerScore: 0,
}

const getRoundOutcome = (playerChoice: Choices, cpuChoice: Choices) => {
  if (playerChoice === cpuChoice) return 'draw'
  if (playerChoice === 'rock') return cpuChoice === 'scissors' ? 'player' : 'cpu'
  if (playerChoice === 'paper') return cpuChoice === 'rock' ? 'player' : 'cpu'
  if (playerChoice === 'scissors') return cpuChoice === 'paper' ? 'player' : 'cpu'
}

export const play = (playerChoice: Choices, state?: typeof BaseRPSState): typeof BaseRPSState => {
  const currentState = state || BaseRPSState
  const cpuChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)]
  const outcome = getRoundOutcome(playerChoice, cpuChoice)
  if (outcome === 'player') currentState.playerScore++
  if (outcome === 'cpu') currentState.cpuScore++
  currentState.lastPlayerChoice = playerChoice
  currentState.lastCpuChoice = cpuChoice

  return currentState
}
