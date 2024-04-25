import { Character } from '@/types/Character.ts';

export type CharactersItem = Pick<Character, 'id' | 'name' | 'status' | 'imageUrl'>

export type Characters = CharactersItem[];

export type CharactersResponse = {
  data: {
    characters: {
      results: CharacterItemResponse[]
    }
  }
}

export type CharacterItemResponse = {
  name: string;
  id: string;
  image: string;
  status: string;
}
