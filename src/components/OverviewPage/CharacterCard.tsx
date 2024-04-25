import { Card } from '@/components/ui/card.tsx';
import { ReactNode } from 'react';

type CharacterCardProps = {
  imageUrl: string;
  name: string;
  children: ReactNode
}

function CharacterCard({ imageUrl, name, children }: CharacterCardProps) {
  return (
    <div className="flex flex-col cursor-pointer">
      <Card className="h-[250px] overflow-hidden">
        <img
          alt={name}
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
          src={imageUrl}/>
      </Card>
      {children}
    </div>
  );
}

export default CharacterCard;
