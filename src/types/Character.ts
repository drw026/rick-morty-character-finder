export type Character = {
  id: string;
  name: string;
  imageUrl: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    dimension: string;
  };
  location: {
    name: string;
    dimension: string;
  };
  episode: Episode[];
}

export type FeaturedCharacter = Pick<Character, 'id' | 'name' | 'imageUrl'>

export type Origin = {
  id: string | null;
  name: string;
  dimension: string | null;
  characters: FeaturedCharacter[];
}

export type Episode = {
  id: string;
  name: string;
  episode: string;
  origins: Origin[]
};

export type EpisodeResponse = {
  episode: string;
  id: string;
  name: string;
  characters: FeaturedCharacterResponse[]
}

export type FeaturedCharacterResponse = {
  name: string;
  id: string;
  image: string;
  origin: {
    dimension: string | null;
    id: string | null;
    name: string;
  }
}

export type CharacterResponse = {
  data: {
    character: {
      id: number;
      name: string;
      image: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: {
        name: string;
        dimension: string | null;
      };
      location: {
        name: string;
        dimension: string | null;
      };
      episode: EpisodeResponse[];
    }
  }
}
