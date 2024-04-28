import { Link } from '@tanstack/react-router';

type CharacterCardProps = {
  imageUrl: string;
  name: string;
  id: string;
  status: string;
}

function CharacterCard({ imageUrl, name, id, status }: CharacterCardProps) {
  return (
    <Link
      className="flex flex-col gap-1"
      to="/character/$characterId"
      params={{
        characterId: id,
      }}
    >
      <div className="overflow-hidden rounded-md">
        <img
          alt={name}
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
          src={imageUrl}/>
      </div>
      <div>
        <p className="text-base font-medium">{name}</p>
        <p className="text-sm">{status}</p>
      </div>
    </Link>
  );
}

export default CharacterCard;
