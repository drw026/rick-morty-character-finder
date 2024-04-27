import { Character } from '@/types/Character.ts';

export type CharactersItem = Pick<Character, 'id' | 'name' | 'status' | 'imageUrl'>

export type Characters = {
  meta: CharactersMeta;
  characters: CharactersItem[];
};

export type CharactersResponse = {
  data: {
    characters: {
      info: CharactersMeta;
      results: CharacterItemResponse[];
    }
  }
}

export type CharacterItemResponse = {
  name: string;
  id: string;
  image: string;
  status: string;
}

type CharactersMeta = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}
