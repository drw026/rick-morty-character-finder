import React, { PropsWithChildren } from 'react';

type EpisodeProps = PropsWithChildren;

function Episode({children}: EpisodeProps) {
  return (
    <div className="flex flex-col gap-4">{children}</div>
  )
}

function EpisodeTitle({children}: PropsWithChildren) {
  return (
    <h3 className="text-2xl font-semibold tracking-tight">{children}</h3>
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
    hasChildren ? (<div className="flex flex-col gap-2">{children}</div>) : null
  )
}

function EpisodeCharacter({children}: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      {children}
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
