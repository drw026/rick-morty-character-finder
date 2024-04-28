import React from 'react';
import { Link } from '@tanstack/react-router'
import { Card } from '@/components/ui/card.tsx';

type CharacterCardProps = {
  imageUrl: string;
  name: string;
  id: string;
  status: string;
}

function CharacterCard({ imageUrl, name, id, status }: CharacterCardProps) {
  return (
    <Link
      className="flex flex-col cursor-pointer"
      to="/character/$characterId"
      params={{
        characterId: id,
      }}
    >
      <Card className="overflow-hidden">
        <img
          alt={name}
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
          src={imageUrl}/>
      </Card>
      {name} - {status}
    </Link>
  );
}

export default CharacterCard;
