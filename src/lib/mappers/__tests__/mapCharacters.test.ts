import { mapCharacters } from "@/lib/mappers/mapCharacters.ts";
import { mockCharactersResponse } from "@/mocks/mockCharactersResponse.ts";

describe("mapCharacters", () => {
  it("should map the raw data", () => {
    expect(mapCharacters(mockCharactersResponse())).toEqual({
      characters: [
        {
          name: "Rick Sanchez",
          id: "1",
          imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          status: "Alive",
        },
        {
          name: "Adjudicator Rick",
          id: "8",
          imageUrl: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
          status: "Dead",
        },
        {
          name: "Alien Rick",
          id: "15",
          imageUrl: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
          status: "unknown",
        },
      ],
      meta: {
        count: 107,
        next: 2,
        pages: 6,
        prev: null,
      },
    });
  });
});
