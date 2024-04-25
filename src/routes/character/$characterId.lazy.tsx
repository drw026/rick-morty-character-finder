import { createLazyFileRoute } from '@tanstack/react-router'
import Character from '@/components/DetailPage/Character.tsx';

export const Route = createLazyFileRoute('/character/$characterId')({
  component: Character,
})
