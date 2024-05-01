import { useEffect } from 'react';
import { useCharacter } from '@/lib/serviceHooks/useCharacter.ts';
import { Route } from '@/routes/character/$characterId.lazy.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import {
  Episode,
  EpisodeCharacter,
  EpisodeCharacters,
  EpisodeOrigin,
  EpisodeOrigins,
  EpisodeOriginTitle,
  EpisodeTitle
} from '@/components/Episode/Episode.tsx';

function Character() {
  const {characterId} = Route.useParams()
  const {isLoading, data: character} = useCharacter(characterId);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [characterId])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-5xl uppercase tracking-tighter font-bold">Loading...</span>
      </div>
    )
  }

  if (!character) {
    return <>No Character data</>
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <Card className="overflow-hidden">
          <img
            alt={character.name}
            className="w-full object-fill transition-all hover:scale-105"
            src={character.imageUrl}/>
        </Card>
        <Card className="flex-grow">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl uppercase tracking-tighter">{character.name}</CardTitle>
            <CardDescription className="text-xl">
              <span className="font-semibold">Status:</span> {character.status}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid">
              <li className="flex gap-2">
                <span className="font-bold">Species</span>
                <span>{character.species}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Type</span>
                <span>{character.type ? character.type : '-'}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Gender</span>
                <span>{character.gender}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Origin</span>
                <span>{character.origin.name} - {character.origin.dimension}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Location</span>
                <span>{character.location.name} - {character.location.dimension}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {character.episode ?
        <div className="flex flex-col gap-8">
          {character.episode.map((item, index, array) => (
            <Episode key={item.id}>
              <EpisodeTitle>{item.episode} - {item.name}</EpisodeTitle>
              <EpisodeOrigins>
                {item.origins.map((origin) => (
                  <EpisodeOrigin key={origin.id}>
                    <EpisodeOriginTitle>{origin.name} - {origin.dimension}</EpisodeOriginTitle>
                    <EpisodeCharacters>
                      {origin.characters.map((character) => (
                        <EpisodeCharacter key={character.id} character={character}/>
                      ))}
                    </EpisodeCharacters>
                  </EpisodeOrigin>
                ))}
              </EpisodeOrigins>
              {array.length !== index + 1 ? <Separator/> : null}
            </Episode>
          ))}
        </div>
        : null}
    </div>
  );
}

export default Character;
