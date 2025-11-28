export interface CardAbilities {
  keyword?: string;
  text?: string;
}

export type CardPattern =
  | 'black_pattern'
  | 'blue_pattern'
  | 'green_pattern'
  | 'red_pattern'
  | 'white_pattern'
  | 'metal_pattern';

export type ManaColor =
  | 'black'
  | 'blue'
  | 'green'
  | 'red'
  | 'white'
  | 'metal';

export interface Card {
  name: string;
  img_name: string;
  mana: ManaColor[];
  pattern: CardPattern;
  type: string;
  strength: number;
  defense: number;
  abilities: CardAbilities[];
}
