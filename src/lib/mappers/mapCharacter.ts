import {
  Character,
  CharacterResponse,
  Episode,
  EpisodeResponse,
  FeaturedCharacterResponse,
  FeaturedCharacter,
  Origin
} from '@/types/Character.ts';

export function mapCharacter(response: CharacterResponse): Character {
  const {
    id,
    type,
    image,
    name,
    url,
    origin,
    species,
    status,
    location,
    gender,
    episode
  } = response.data.character;

  const sortedEpisodes = sortEpisode(episode);
  const mappedEpisodes: Episode[] = sortedEpisodes.map((item) => {
    return {
      id: item.id,
      name: item.name,
      episode: item.episode,
      origins: createOrigins(item.characters)
    }
  })

  return {
    id: id.toString(),
    name,
    gender,
    status,
    type,
    imageUrl: image,
    origin,
    species,
    location,
    url,
    episode: mappedEpisodes
  }
}

function sortEpisode(episodes: EpisodeResponse[]): EpisodeResponse[] {
  const episodesWithCount: {
    episode: EpisodeResponse,
    numberOfUniqueDimensions: number
  }[] = episodes.map(episode => ({
    episode,
    numberOfUniqueDimensions: calculateUniqueDimensions(episode.characters)
  }));

  // sort the episodes on the number of unique dimensions
  const sortedEpisodes: {
    episode: EpisodeResponse,
    numberOfUniqueDimensions: number
  }[] = episodesWithCount.sort(
    (a, b) =>
      b.numberOfUniqueDimensions - a.numberOfUniqueDimensions
  );

  // extract the top 10 and remove the numberOfUniqueDimensions
  return sortedEpisodes.slice(0, 10).map((item) => item.episode);
}

function calculateUniqueDimensions(characters: { origin: { id: string } }[]): number {
  const uniqueDimensions = new Set(characters.map(character => character.origin.id));
  return uniqueDimensions.size;
}

function createOrigins(characters: FeaturedCharacterResponse[]): Origin[] {
  const uniqueOrigins = getUniqueOrigins(characters);
  const originsWithCharacters = uniqueOrigins.map((origin) => {
    return {
      ...origin,
      characters: findCharactersInOrigin(characters, origin)
    }
  });
  return originsWithCharacters;
}

function getUniqueOrigins(
  characters: FeaturedCharacterResponse[]
): Omit<Origin, 'characters'>[]  {
  // find unique origins by stringify each character origin object
  // which the Set can handle and deduplicate
  // and then parse it back to the origin object
  return [
    ...new Set(characters.map(character => JSON.stringify(character.origin)))
  ].map((item: string) => JSON.parse(item));
}

function findCharactersInOrigin(
  characters: FeaturedCharacterResponse[],
  origin: {
    id: string
  }
): FeaturedCharacter[] {
  return characters.reduce((carrier: FeaturedCharacter[], character) => {
    if (character.origin.id !== origin.id) return carrier;
    return [
      ...carrier,
      {
        id: character.id,
        name: character.name,
        imageUrl: character.image
      }
    ]
  }, []);
}
