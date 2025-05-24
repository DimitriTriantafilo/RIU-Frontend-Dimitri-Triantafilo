export interface SuperHero {
  name: string;
  realName?: string;
  id: number;
  movies?: string[];
  actors?: Actor[];
  abilities?: string[];
  img?: string;
  description?: string;
}

export interface Actor {
  name: string;
  img?: string;
}
