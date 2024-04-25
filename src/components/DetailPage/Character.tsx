import { useCharacter } from '@/lib/serviceHooks/useCharacter.ts';
import { Route } from '@/routes/character/$characterId.lazy';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx';

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
    <div className="flex flex-col gap-2">
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
      {character.episode ? character.episode.map((item) => (
          <div key={item.id}>
            <div>{item.id} - {item.episode} - {item.name}</div>
          </div>
        ))
        : null}
    </div>
  );
}

export default Character;
