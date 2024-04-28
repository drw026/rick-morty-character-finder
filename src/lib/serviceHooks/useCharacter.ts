import { useQuery } from '@tanstack/react-query';
import { VITE_GRAPHQL_API_URL } from '@/common/constants.ts';
import { GET_CHARACTER } from '@/lib/queries.ts';
import { CharacterResponse } from '@/types/Character.ts';
import { mapCharacter } from '@/lib/mappers/mapCharacter.ts';

export function useCharacter(id: string) {
  return useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      const response = await fetch(VITE_GRAPHQL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: GET_CHARACTER,
          variables: {
            characterId: id
          }
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseJson: CharacterResponse = await response.json();
      return mapCharacter(responseJson);
    }
  })
}
