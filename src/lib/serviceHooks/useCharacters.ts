import { useQuery } from '@tanstack/react-query';
import { type CharactersResponse } from '@/types/Characters.ts';
import { VITE_GRAPHQL_API_URL } from '@/common/constants.ts';
import { GET_CHARACTERS } from '@/lib/queries.ts';
import { mapCharacters } from '@/lib/mappers/mapCharacters.ts';

export function useCharacters(query: string, enabled: boolean) {
  return useQuery({
    enabled,
    queryKey: ['characters', query],
    queryFn: async () => {
      const response = await fetch(VITE_GRAPHQL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: GET_CHARACTERS,
          variables: {
            filter: {
              name: query
            }
          }
        })
      });

      if (!response.ok) {
        // TODO: error handling
      }

      const responseJson: CharactersResponse = await response.json();

      return mapCharacters(responseJson);
    }
  })
}
