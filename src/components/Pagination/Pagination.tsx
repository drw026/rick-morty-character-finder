import React from 'react';
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
          <PaginationItem>
            <PaginationPrevious onClick={() => navigateToPageNumber(previous)}/>
          </PaginationItem>
          : null}
        {pages ?
          [...Array(pages)].map((_, index) => (
            <PaginationLink
              key={`page-${index + 1}`}
              onClick={() => navigateToPageNumber(index + 1)}
              isActive={current === index + 1}
            >
              {index + 1}
            </PaginationLink>
          ))
          : null}
        {next ?
          <PaginationItem>
            <PaginationNext onClick={() => navigateToPageNumber(next)}/>
          </PaginationItem>
          : null}
      </PaginationContent>
    </PaginationUI>
  )
}
