import { mapCharacter } from '@/lib/mappers/mapCharacter.ts';
import { mockCharacter, mockCharacterResponse } from '@/mocks/mockCharacterResponse.ts';

describe('mapCharacter', () => {
  it('should map the raw data', () => {
    expect(mapCharacter(mockCharacterResponse())).toEqual(mockCharacter)
  });
});
