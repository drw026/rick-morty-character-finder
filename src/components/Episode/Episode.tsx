import { PropsWithChildren } from 'react';
import { Link } from '@tanstack/react-router';
import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx';
import { FeaturedCharacter } from '@/types/Character.ts';

function Episode({children}: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4">{children}</div>
  )
}

function EpisodeTitle({children}: PropsWithChildren) {
  return (
    <h3 className="text-2xl font-bold tracking-tight">{children}</h3>
  );
}

function EpisodeOrigins({hasChildren, children}: PropsWithChildren & { hasChildren: boolean }) {
  return (
    hasChildren ? (<div className="flex flex-col gap-4">{children}</div>) : null
  )
}

function EpisodeOrigin({children}: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4">{children}</div>
  )
}

function EpisodeOriginTitle({children}: PropsWithChildren) {
  return (
    <h4 className="text-xl font-semibold tracking-tight">{children}</h4>
  )
}

function EpisodeCharacters({hasChildren, children}: PropsWithChildren & { hasChildren: boolean }) {
  return (
    hasChildren ? (<div className="grid grid-cols-1 md:grid-cols-3 gap-2">{children}</div>) : null
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
