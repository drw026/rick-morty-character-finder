import { Card } from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useRef, useState } from 'react';
import { useCharacters } from '@/lib/serviceHooks/useCharacters.ts';
import CharacterCard from '@/components/OverviewPage/CharacterCard.tsx';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination.tsx';

function OverviewPage() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const {data} = useCharacters(searchQuery, page, !!searchQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  function clickHandler() {
    if (!inputRef.current?.value) return;
    setPage(1);
    setSearchQuery(inputRef.current.value);
  }

  function navigatePageNumber(pageNumber: number | null) {
    if (!pageNumber) return;
    setPage(pageNumber);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full items-center gap-2">
        <Input ref={inputRef} type="search" placeholder="Find character..."/>
        <Button type="submit" onClick={clickHandler}>Search</Button>
      </div>
      {data ?
        <Card>
          <div className="grid grid-cols-5 gap-2 p-2">
            {data.characters.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </div>
        </Card>
        : null
      }
      <div>
        <Pagination>
          <PaginationContent>
            {data?.meta.prev ?
              <PaginationItem>
                <PaginationPrevious onClick={() => navigatePageNumber(data?.meta.prev)}/>
              </PaginationItem>
              : null}
            {data?.meta.pages ?
              [...Array(data?.meta.pages)].map((_, index) => (
                <PaginationLink
                  key={`page-${index + 1}`}
                  onClick={() => navigatePageNumber(index + 1)}
                  isActive={page === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              ))
              : null}
            {data?.meta.next ?
              <PaginationItem>
                <PaginationNext onClick={() => navigatePageNumber(data?.meta.next)}/>
              </PaginationItem>
              : null}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default OverviewPage;
