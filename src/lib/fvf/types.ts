export type Player = {
  leftHand: Hand;
  rightHand: Hand;
  score: number;
  alive: boolean;
};

export type Hand = {
  quantity: number;
  alive: boolean;
  side: Side;
};

export type Side = 'left' | 'right';

export type Game = {
  playerA: Player;
  playerB: Player;
  turn: Turn;
};

export type Action = {
  to: 'left' | 'right'
  by: number
}

export type Turn = 'playerA' | 'playerB'
