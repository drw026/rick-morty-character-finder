import { Card } from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useRef, useState } from 'react';
import { useCharacters } from '@/lib/serviceHooks/useCharacters.ts';
import CharacterCard from '@/components/OverviewPage/CharacterCard.tsx';

function OverviewPage() {
  const [ searchQuery, setSearchQuery] = useState('');
  const { data: characters} = useCharacters(searchQuery, !!searchQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  function clickHandler() {
    if (!inputRef.current?.value) return;
    setSearchQuery(inputRef.current.value);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full items-center gap-2">
        <Input ref={inputRef} type="search" placeholder="Find character..."/>
        <Button type="submit" onClick={clickHandler}>Search</Button>
      </div>
      <Card>
        <div className="grid grid-cols-5 gap-2 p-2">
          {characters ?
            characters.map(({id, imageUrl, name, status}) => (
              <CharacterCard key={id} imageUrl={imageUrl} name={name}>
                <p>{name} - {status}</p>
              </CharacterCard>
            ))
            : null}
        </div>
      </Card>
    </div>
  );
}

export default OverviewPage;
