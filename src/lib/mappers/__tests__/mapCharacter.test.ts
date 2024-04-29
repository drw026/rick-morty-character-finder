import { mapCharacter } from '@/lib/mappers/mapCharacter.ts';
import { mockCharacter, mockCharacterResponse } from '@/mocks/mockCharacterResponse.ts';

describe('mapCharacter', () => {
  it('should map the raw data', () => {
    expect(mapCharacter(mockCharacterResponse())).toEqual(mockCharacter)
  });

  // TODO
  it.skip('should sort episode based on unique character dimensions', () => {})
});
