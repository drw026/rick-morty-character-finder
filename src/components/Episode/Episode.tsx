import { PropsWithChildren } from 'react';
import { Link } from '@tanstack/react-router';
import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx';
import { FeaturedCharacter } from '@/types/Character.ts';

function Episode({children}: PropsWithChildren) {
  return (
    children ? <div className="flex flex-col gap-4">{children}</div> : null
  )
}

function EpisodeTitle({children}: PropsWithChildren) {
  return (
    children ? <h3 className="text-2xl font-bold tracking-tight">{children}</h3> : null
  );
}

function EpisodeOrigins({children}: PropsWithChildren) {
  return (
    children ? <div className="flex flex-col gap-4">{children}</div> : null
  )
}

function EpisodeOrigin({children}: PropsWithChildren) {
  return (
    children ? <div className="flex flex-col gap-4">{children}</div> : null
  )
}

function EpisodeOriginTitle({children}: PropsWithChildren) {
  return (
    children ? <h4 className="text-xl font-semibold tracking-tight">{children}</h4> : null
  )
}

function EpisodeCharacters({children}: PropsWithChildren) {
  return (
    children ? (<div className="grid grid-cols-1 md:grid-cols-3 gap-2">{children}</div>) : null
  )
}

function EpisodeCharacter({ character }: { character: FeaturedCharacter } ) {
  return (
    <div className="flex flex-col">
      <Link
        title={`Biography ${character.name}`}
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
    </div>
  )
}

export {
  Episode,
  EpisodeTitle,
  EpisodeOrigins,
  EpisodeOrigin,
  EpisodeOriginTitle,
  EpisodeCharacters,
  EpisodeCharacter
};
