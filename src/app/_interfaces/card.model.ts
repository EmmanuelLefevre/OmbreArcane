export interface CardAbilities {
  keyword?: string;
  text?: string;
}

export type CardPattern =
  | 'action_pattern'
  | 'arcane_pattern'
  | 'artefact_pattern'
  | 'black_metal_pattern'
  | 'black_pattern'
  | 'blue_black_metal_pattern'
  | 'blue_black_pattern'
  | 'blue_green_black_pattern'
  | 'blue_green_metal_pattern'
  | 'blue_green_pattern'
  | 'blue_green_red_pattern'
  | 'blue_metal_pattern'
  | 'blue_pattern'
  | 'blue_red_black_pattern'
  | 'blue_red_metal_pattern'
  | 'blue_red_pattern'
  | 'green_black_metal_pattern'
  | 'green_black_pattern'
  | 'green_metal_pattern'
  | 'green_pattern'
  | 'green_red_black_metal_pattern'
  | 'green_red_black_pattern'
  | 'green_red_metal_pattern'
  | 'green_red_pattern'
  | 'metal_pattern'
  | 'red_black_metal_pattern'
  | 'red_black_pattern'
  | 'red_metal_pattern'
  | 'red_pattern'
  | 'riposte_pattern'
  | 'sanctuary_pattern'
  | 'stuff_pattern'
  | 'white_black_metal_pattern'
  | 'white_black_pattern'
  | 'white_blue_black_metal_pattern'
  | 'white_blue_black_pattern'
  | 'white_blue_green_black_pattern'
  | 'white_blue_green_metal_pattern'
  | 'white_blue_green_pattern'
  | 'white_blue_green_red_pattern'
  | 'white_blue_metal_pattern'
  | 'white_blue_pattern'
  | 'white_blue_red_black_pattern'
  | 'white_blue_red_pattern'
  | 'white_metal_pattern'
  | 'white_pattern'
  | 'white_red_black_pattern'
  | 'white_red_metal_pattern'
  | 'white_red_pattern';

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
