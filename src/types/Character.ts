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
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: Episode[];
  url: string;
}

type Origins = {
  id: string;
  name: string;
  dimension: string;
  characters: Pick<Character, 'id' | 'name' | 'imageUrl'>[]
}[]

export type Episode = {
  id: string;
  name: string;
  episode: string;
  origins: Origins
};

export type EpisodeResponse = {
  episode: string;
  id: string;
  name: string;
  characters: {
    name: string;
    id: string;
    image: string;
    origin: {
      dimension: string;
      id: string;
      name: string;
    }
  }[]
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
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      episode: EpisodeResponse[];
      url: string;
    }
  }
}
