import { type Character, type CharacterResponse, Episode, EpisodeResponse } from '@/types/Character.ts';

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
      // TODO: fix this hack
      origins: createOrigins({ characters: item.characters })
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

function sortEpisode(episodes: EpisodeResponse[]) {
  const episodesWithCount = episodes.map(episode => ({
    episode,
    numberOfUniqueDimensions: calculateUniqueDimensions(episode.characters)
  }));

  const sortedEpisodes = episodesWithCount.sort(
    (a, b) =>
      b.numberOfUniqueDimensions - a.numberOfUniqueDimensions
  );

  return sortedEpisodes.slice(0, 10).map((item) => item.episode);
}

function calculateUniqueDimensions(characters: { origin: { id: string } }[]): number {
  const uniqueDimensions = new Set(characters.map(character => character.origin.id));
  return uniqueDimensions.size;
}

function createOrigins(characters: Pick<EpisodeResponse, 'characters'>) {
  const uniqueOrigins = new Set(
    characters.characters.map(character => JSON.stringify(character.origin))
  );
  return [...uniqueOrigins].map((item: string) => JSON.parse(item));
}
