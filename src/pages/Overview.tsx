import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card.tsx';
import { useCharacters } from '@/lib/serviceHooks/useCharacters.ts';
import CharacterCard from '@/components/CharacterCard/CharacterCard.tsx';
import { Pagination } from '@/components/Pagination/Pagination.tsx';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { Search } from '@/components/Search/Search.tsx';

function Overview() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const {isLoading, data,} = useCharacters(searchQuery, page, !!searchQuery);

  function search(query: string | undefined) {
    if (!query) return;
    setPage(1);
    setSearchQuery(query);
  }

  function navigateToPageNumber(pageNumber: number | null) {
    if (!pageNumber) return;
    setPage(pageNumber);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page, searchQuery])

  return (
    <div className="flex flex-col gap-2">
      <Search clickHandler={search} />

      {isLoading ?
        <Card>
          <div className="grid grid-cols-5 gap-2 p-2">
            {[...Array(20)].map((_, index) => <Skeleton key={`loading-${index}`}/>)}
          </div>
        </Card>
        : null
      }

      {data ?
        <>
          <Pagination
            pages={data.meta.pages}
            next={data.meta.next}
            previous={data.meta.prev}
            current={page}
            navigateToPageNumber={navigateToPageNumber}
          />

          <Card>
            <div className="grid grid-cols-5 gap-2 p-2">
              {data.characters.length > 0 ?
                data.characters.map((character) => (
                  <CharacterCard key={character.id} {...character} />
                )) : <p>No results</p>}
            </div>
          </Card>

          <Pagination
            pages={data.meta.pages}
            next={data.meta.next}
            previous={data.meta.prev}
            navigateToPageNumber={navigateToPageNumber}
            current={page}/>
        </>
        : null
      }
    </div>
  );
}

export default Overview;
