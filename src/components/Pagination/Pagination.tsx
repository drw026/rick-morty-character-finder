import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination.tsx';

type PaginationProps = {
  next: number | null;
  previous: number | null;
  pages: number;
  current: number;
  navigateToPageNumber: (pageNumber: number) => void
}

export function Pagination({
  next,
  previous,
  current,
  pages,
  navigateToPageNumber
}: PaginationProps)
{
  return (
    <PaginationUI>
      <PaginationContent>
        {previous ?
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={() => navigateToPageNumber(previous)}/>
          </PaginationItem>
          : null}
        {pages ?
          [...Array(pages)].map((_, index) => (
            <PaginationItem
              key={`page-${index + 1}`}
              className="cursor-pointer"
            >
              <PaginationLink
                onClick={() => navigateToPageNumber(index + 1)}
                isActive={current === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))
          : null}
        {next ?
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={() => navigateToPageNumber(next)}/>
          </PaginationItem>
          : null}
      </PaginationContent>
    </PaginationUI>
  )
}
