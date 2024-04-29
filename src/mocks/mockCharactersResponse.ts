import { getBuilder } from "@/mocks/utils/builder.ts";
import {
  CharactersMeta,
  CharactersResponse,
} from "@/types/Characters.ts";

export const mockCharactersMetaResponse = getBuilder<CharactersMeta>({
  count: 107,
  next: 2,
  pages: 6,
  prev: null,
});

export const mockCharactersResponse = getBuilder<CharactersResponse>({
  data: {
    characters: {
      info: mockCharactersMetaResponse(),
      results: [
        {
          name: "Rick Sanchez",
          id: "1",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          status: "Alive",
        },
        {
          name: "Adjudicator Rick",
          id: "8",
          image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
          status: "Dead",
        },
        {
          name: "Alien Rick",
          id: "15",
          image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
          status: "unknown",
        }
      ],
    },
  },
});
