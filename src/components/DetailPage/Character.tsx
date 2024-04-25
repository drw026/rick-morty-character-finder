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
          <div key={item.id} className="">
            <div>{item.id} - {item.episode} - {item.name}</div>
            {item.origins ?
              <div className="flex flex-col">
                {item.origins.map((origin) => (
                  <div key={origin.id} className="">
                    <strong>{origin.name} - {origin.dimension}</strong>
                    {origin.characters ?
                      <div className="flex flex-wrap gap-2">
                        {origin.characters.map((character) => (
                          <div key={character.id}>
                            {character.name}
                            <img
                              alt={character.name}
                              className="h-[80px] w-[80px] object-cover transition-all hover:scale-105 aspect-[3/4]"
                              src={character.imageUrl}/>
                          </div>
                        ))}
                      </div>
                      : null}
                  </div>
                ))}
              </div>
              : null}
          </div>
        ))
        : null}
    </div>
  );
}

export default Character;
