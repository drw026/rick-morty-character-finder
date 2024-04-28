import { useEffect, useState } from 'react';
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
      <Search clickHandler={search}/>

      {isLoading ?
        <>
          <Skeleton className="h-[36px] w-full"/>
          <Card className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-4">
            {[...Array(20)].map((_, index) =>
              <Skeleton className="h-[250px] w-auto" key={`loading-${index}`}/>
            )}
          </Card>
        </>
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

          <Card className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-4">
            {data.characters.length > 0 ?
              data.characters.map((character) => (
                <CharacterCard key={character.id} {...character} />
              )) : <p>No results</p>}
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

      {!data && !isLoading ?
        <div className="flex flex-col items-center justify-center sm:h-60 gap-2">
          <h1 className="text-center text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
            Rick & Morty character
            finder
          </h1>
          <p className="max-w-[750px] text-center md:text-lg text-md font-light">Find your favorite Rick & Morty
            character and read
            their bio and linked episodes which are sorted by
            unique character dimension.
          </p>
        </div>
        : null}
    </div>
  );
}

export default Overview;
