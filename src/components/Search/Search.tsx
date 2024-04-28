import { useRef } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

type SearchProps = {
  clickHandler: (query: string | undefined) => void;
}

export function Search({ clickHandler }: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex w-full items-center gap-2">
      <Button type="submit" onClick={() => clickHandler(inputRef.current?.value)}>Search</Button>
      <Input ref={inputRef} type="search" placeholder="Find character..."/>
    </div>
  )
}
