import React from 'react';
import { Link } from '@tanstack/react-router';
import { useCharacter } from '@/lib/serviceHooks/useCharacter.ts';
import { Route } from '@/routes/character/$characterId.lazy.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx';
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

  if (isLoading) {
    return <>Loading...</>
  }

  if (!character) {
    return <>No Character data</>
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <Card className="overflow-hidden">
          <img
            alt={character.name}
            className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
            src={character.imageUrl}/>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{character.name}</CardTitle>
            <CardDescription>{character.type}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
          </CardContent>
          <CardFooter>
            <p>Status: {character.status}</p>
          </CardFooter>
        </Card>
      </div>

      {character.episode ?
        <div className="flex flex-col gap-8">
          {character.episode.map((item) => (
            <Episode key={item.id}>
              <EpisodeTitle>{item.episode} - {item.name}</EpisodeTitle>
              <EpisodeOrigins hasChildren={!!item.origins}>
                {item.origins.map((origin) => (
                  <EpisodeOrigin key={origin.id}>
                    <EpisodeOriginTitle>{origin.name} - {origin.dimension}</EpisodeOriginTitle>
                    <EpisodeCharacters hasChildren={!!origin.characters}>
                      {origin.characters.map((character) => (
                        <EpisodeCharacter key={character.id}>
                          <Link
                            key={character.id}
                            to="/character/$characterId"
                            params={{
                              characterId: character.id,
                            }}
                          >
                            <div className="flex gap-2 items-center">
                              <Avatar>
                                <AvatarImage src={character.imageUrl}/>
                              </Avatar>
                              <span>{character.name}</span>
                            </div>
                          </Link>
                        </EpisodeCharacter>
                      ))}
                    </EpisodeCharacters>
                  </EpisodeOrigin>
                ))}
              </EpisodeOrigins>
            </Episode>
          ))}
        </div>
        : null}
    </div>
  );
}

export default Character;
