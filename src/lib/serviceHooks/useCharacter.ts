import { useQuery } from '@tanstack/react-query';
import { VITE_GRAPHQL_API_URL } from '@/common/constants.ts';
import { GET_CHARACTER } from '@/lib/queries.ts';
import { type CharacterResponse } from '@/types/Character.ts';
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
        // TODO: error handling
      }

      const responseJson: CharacterResponse = await response.json();

      return mapCharacter(responseJson);
    }
  })
}
