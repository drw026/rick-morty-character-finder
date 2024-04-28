import { Characters, CharactersResponse } from '@/types/Characters.ts';

export function mapCharacters(response: CharactersResponse): Characters {
  const {data: {characters: {results, info}}} = response;
  const characters = results.map(
    ({
       id,
       name,
       status,
       image
    }) => {
    return {
      id,
      name,
      status,
      imageUrl: image,
    }
  });

  return {
    characters,
    meta: info
  }
}
