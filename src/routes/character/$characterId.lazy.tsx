import { createLazyFileRoute } from '@tanstack/react-router'
import Character from '@/pages/Character.tsx';

export const Route = createLazyFileRoute('/character/$characterId')({
  component: Character,
})
