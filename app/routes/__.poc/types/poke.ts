export interface PokeResourceList {
  count: number;
  next: string;
  previous: string;
  results: PokeResource[];
}

export interface PokeResource {
  name: string;
  url: string;
}
