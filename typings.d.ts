export interface Person {
  name: string;
  birthYear: string;
  gender: string;
  eyeColor: string;
  hairColor: string;
  homeworld: Planet;
}

export interface Planet {
  diameter: number;
  population: number;
  name: string;
}
