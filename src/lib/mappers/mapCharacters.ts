import { Characters, CharactersResponse } from '@/types/Characters.ts';

export function mapCharacters(response: CharactersResponse): Characters {
  const { data: { characters: { results } } } = response;

  return results.map(({id, name, status, image}) => {
    return {
      id,
      name,
      status,
      imageUrl: image,
    }
  })
}
