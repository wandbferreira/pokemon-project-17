export interface Trainer {
  id: number;
  name: string;
  age: number;

  pokemons: {
    id: number;
    name: string;
  }[]
}
